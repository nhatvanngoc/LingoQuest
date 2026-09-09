import { db } from "@/db";
import {
  units,
  generationJobs,
  unitContents,
  vocabItems,
  grammarTargets,
} from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { runCurriculumPipeline } from "./orchestrator";
import type {
  TeacherUnitInput,
  LingoQuestUnitPackage,
  ServerQualityGate,
  GenerationStatus,
} from "./types";
import crypto from "crypto";

export interface JobState {
  id: string;
  unitId: string;
  status: GenerationStatus;
  currentStage: string;
  progress: number;
  message?: string;
  error?: string;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  input: TeacherUnitInput;
  package?: LingoQuestUnitPackage;
  qualityGate?: ServerQualityGate;
}

// In-memory registry for resilience (works in mock mode or active DB)
const inMemoryJobs = new Map<string, JobState>();
const inMemoryUnitPackages = new Map<
  string,
  { pkg: LingoQuestUnitPackage; qualityGate: ServerQualityGate; status: string }
>();

function computeInputHash(input: TeacherUnitInput): string {
  return crypto
    .createHash("sha256")
    .update(`${input.grade}:${input.unitNumber}:${input.rawVocabulary}:${input.rawGrammar}`)
    .digest("hex");
}

/**
 * Enqueues a generation job and kicks off asynchronous pipeline execution.
 */
export async function enqueueGenerationJob(
  unitId: string,
  input: TeacherUnitInput
): Promise<string> {
  const jobId = crypto.randomUUID();
  const inputHash = computeInputHash(input);

  const jobState: JobState = {
    id: jobId,
    unitId,
    status: "QUEUED",
    currentStage: "NORMALIZE",
    progress: 5,
    message: "Đang chờ xử lý trong hàng đợi...",
    createdAt: new Date(),
    input,
  };

  inMemoryJobs.set(jobId, jobState);

  // Attempt DB persistence
  try {
    if (process.env.DATABASE_URL) {
      await db.insert(generationJobs).values({
        id: jobId,
        unitId,
        status: "QUEUED",
        currentStage: "NORMALIZE",
        progress: 5,
        provider: "Groq",
        model: process.env.GROQ_MODEL || "qwen/qwen3.6-27b",
        promptVersion: "1.0",
        inputHash,
        trace: { queuedAt: new Date().toISOString() },
      });

      await db
        .update(units)
        .set({ status: "GENERATING" })
        .where(eq(units.id, unitId));
    }
  } catch (err) {
    console.warn("[JobQueue] Database log skipped or unavailable:", err);
  }

  // Fire and forget asynchronous background worker
  runJobWorker(jobId).catch((err) => {
    console.error(`[JobQueue] Fatal unhandled error in job ${jobId}:`, err);
  });

  return jobId;
}

async function runJobWorker(jobId: string) {
  const job = inMemoryJobs.get(jobId);
  if (!job) return;

  job.status = "RUNNING";
  job.startedAt = new Date();

  const updateProgress = async (stage: string, progress: number, message?: string) => {
    job.currentStage = stage;
    job.progress = progress;
    job.message = message;

    try {
      if (process.env.DATABASE_URL) {
        await db
          .update(generationJobs)
          .set({
            status: "RUNNING",
            currentStage: stage,
            progress,
            startedAt: job.startedAt,
          })
          .where(eq(generationJobs.id, jobId));
      }
    } catch {
      // Ignored for DB resilience
    }
  };

  try {
    const result = await runCurriculumPipeline(job.input, updateProgress);

    job.status = "COMPLETED";
    job.progress = 100;
    job.completedAt = new Date();
    job.package = result.package;
    job.qualityGate = result.qualityGate;
    job.message = "Hoàn thành tạo nội dung chuyên đề!";

    inMemoryUnitPackages.set(job.unitId, {
      pkg: result.package,
      qualityGate: result.qualityGate,
      status: "READY",
    });

    // Save to Database if connected
    if (process.env.DATABASE_URL) {
      try {
        await db
          .update(generationJobs)
          .set({
            status: "COMPLETED",
            currentStage: "COMPLETED",
            progress: 100,
            completedAt: job.completedAt,
            trace: { qualityGate: result.qualityGate },
          })
          .where(eq(generationJobs.id, jobId));

        // Save Unit Package
        await db.insert(unitContents).values({
          unitId: job.unitId,
          type: "UNIT_PACKAGE",
          version: 1,
          status: "COMPLETED",
          payload: result.package,
          generatorModel: process.env.GROQ_MODEL || "qwen/qwen3.6-27b",
          promptVersion: "1.0",
          schemaVersion: "1.0",
          inputHash: computeInputHash(job.input),
          actualWordCount: result.qualityGate.actualWordCount,
          vocabularyCoverage: result.qualityGate.lexicalCoverage,
          grammarCoverage: result.qualityGate.grammarCoverage,
          naturalnessScore: result.package.qualityReport.naturalnessScore,
          examAlignmentScore: result.package.qualityReport.examAlignmentScore,
          qualityReport: result.package.qualityReport,
          isPublished: false,
        });

        // Flashcards map for phonetics & collocations
        const flashcardMap = new Map(
          result.package.flashcards.map((fc) => [fc.term.toLowerCase(), fc])
        );

        // Batch save normalized Vocab items
        for (const v of result.lexicalProfiles) {
          const fc = flashcardMap.get(v.displayForm.toLowerCase());
          await db.insert(vocabItems).values({
            unitId: job.unitId,
            sourceIndex: v.sourceIndex,
            term: v.displayForm,
            normalizedTerm: v.sourceText,
            lemma: v.lemma,
            partOfSpeech: v.partOfSpeech,
            intendedSenseEn: v.intendedSenseEn,
            meaningEn: fc?.meaningEn || v.intendedSenseEn,
            meaningVi: v.meaningVi,
            cefrLevel: v.cefrLevel,
            cefrConfidence: v.cefrConfidence,
            cefrReason: v.cefrReason,
            needsReview: v.reviewStatus === "NEEDS_REVIEW",
            ipaUS: fc?.ipaUS || null,
            ipaUK: fc?.ipaUK || null,
            collocations: fc?.collocations || [],
            examples: fc?.examples || {},
            active: true,
          });
        }

        // Batch save grammar targets
        for (const g of result.grammarProfiles) {
          await db.insert(grammarTargets).values({
            unitId: job.unitId,
            label: g.label,
            canonicalForm: g.canonicalForm,
            cefrLevel: g.cefrLevel,
            prerequisites: g.prerequisites,
            learnerErrorsVi: g.commonVietnameseLearnerErrors,
            positiveExamples: g.positiveExamples,
            contrastWith: g.contrastWith,
          });
        }

        // Update unit status to READY
        await db
          .update(units)
          .set({ status: "READY" })
          .where(eq(units.id, job.unitId));
      } catch (dbErr) {
        console.warn("[JobQueue] Warning saving completed package to DB:", dbErr);
      }
    }
  } catch (err: any) {
    job.status = "FAILED";
    job.completedAt = new Date();
    job.error = err?.message || String(err);
    job.message = `Lỗi xử lý: ${job.error}`;

    try {
      if (process.env.DATABASE_URL) {
        await db
          .update(generationJobs)
          .set({
            status: "FAILED",
            errorMessage: job.error,
            completedAt: job.completedAt,
          })
          .where(eq(generationJobs.id, jobId));
      }
    } catch {
      // Ignored
    }
  }
}

/**
 * Retrieve current status of a generation job.
 */
export async function getGenerationJob(jobId: string) {
  // Check in-memory first
  const memoryJob = inMemoryJobs.get(jobId);
  if (memoryJob) {
    return {
      id: memoryJob.id,
      unitId: memoryJob.unitId,
      status: memoryJob.status,
      currentStage: memoryJob.currentStage,
      progress: memoryJob.progress,
      message: memoryJob.message,
      error: memoryJob.error,
      package: memoryJob.package,
      qualityGate: memoryJob.qualityGate,
    };
  }

  // If not in memory, query DB
  if (process.env.DATABASE_URL) {
    try {
      const [dbJob] = await db
        .select()
        .from(generationJobs)
        .where(eq(generationJobs.id, jobId))
        .limit(1);

      if (dbJob) {
        return {
          id: dbJob.id,
          unitId: dbJob.unitId,
          status: dbJob.status,
          currentStage: dbJob.currentStage,
          progress: dbJob.progress,
          message: dbJob.errorMessage || undefined,
          error: dbJob.errorMessage || undefined,
        };
      }
    } catch (err) {
      console.warn("[JobQueue] Failed to read job from DB:", err);
    }
  }

  return null;
}

/**
 * Retrieve unit package and quality metrics for preview.
 */
export async function getUnitData(unitId: string) {
  // Check memory first
  const mem = inMemoryUnitPackages.get(unitId);
  if (mem) {
    return {
      unitId,
      status: mem.status,
      package: mem.pkg,
      qualityGate: mem.qualityGate,
    };
  }

  // Check DB
  if (process.env.DATABASE_URL) {
    try {
      const [unit] = await db
        .select()
        .from(units)
        .where(eq(units.id, unitId))
        .limit(1);

      if (!unit) return null;

      const [content] = await db
        .select()
        .from(unitContents)
        .where(eq(unitContents.unitId, unitId))
        .orderBy(desc(unitContents.version))
        .limit(1);

      return {
        unitId: unit.id,
        title: unit.title,
        grade: unit.grade,
        unitNumber: unit.unitNumber,
        status: unit.status,
        package: (content?.payload as LingoQuestUnitPackage) || null,
        qualityGate: (content?.qualityReport as any) || null,
      };
    } catch (err) {
      console.warn("[JobQueue] Failed to query unit from DB:", err);
    }
  }

  return null;
}

/**
 * Publish unit package to make it live for students.
 */
export async function publishUnitPackage(unitId: string) {
  const mem = inMemoryUnitPackages.get(unitId);
  if (mem) {
    mem.status = "PUBLISHED";
  }

  if (process.env.DATABASE_URL) {
    try {
      await db
        .update(units)
        .set({
          status: "PUBLISHED",
          publishedAt: new Date(),
          publishedVersion: 1,
        })
        .where(eq(units.id, unitId));

      await db
        .update(unitContents)
        .set({ isPublished: true })
        .where(eq(unitContents.unitId, unitId));
    } catch (err) {
      console.warn("[JobQueue] Failed to update published status in DB:", err);
    }
  }

  return { success: true, unitId, status: "PUBLISHED" };
}
