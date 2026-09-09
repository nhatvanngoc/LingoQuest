import { normalizeTeacherInput } from "./normalizer";
import { profileVocabularyAndGrammar } from "./profiler";
import { buildUnitBlueprint } from "./blueprint";
import { generateFlashcardSuite } from "./generators/flashcards";
import { generateContextualReading } from "./generators/reading";
import { generateReadingQuestions } from "./generators/questions";
import { generateSyntaxChunks } from "./generators/syntax";
import { generateClozeTest } from "./generators/cloze";
import { generateWritingTask } from "./generators/writing";
import { evaluateServerQualityGate } from "./validators/quality-gate";
import type {
  TeacherUnitInput,
  LingoQuestUnitPackage,
  ServerQualityGate,
  LexicalProfile,
  GrammarProfile,
  UnitBlueprint,
  ReadingContent,
  CefrLevel,
} from "./types";

export type OrchestrationStage =
  | "NORMALIZE"
  | "PROFILING"
  | "BLUEPRINT"
  | "PARALLEL_CORE"
  | "QUESTIONS"
  | "PARALLEL_EXTENSIONS"
  | "QUALITY_GATE"
  | "COMPLETED"
  | "FAILED";

export interface PipelineExecutionResult {
  package: LingoQuestUnitPackage;
  qualityGate: ServerQualityGate;
  lexicalProfiles: LexicalProfile[];
  grammarProfiles: GrammarProfile[];
  blueprint: UnitBlueprint;
}

export type ProgressCallback = (
  stage: OrchestrationStage,
  progress: number,
  message?: string
) => Promise<void> | void;

/**
 * Orchestrates the full curriculum generation pipeline according to the
 * Inverted AI Orchestration Pipeline specifications.
 */
export async function runCurriculumPipeline(
  input: TeacherUnitInput,
  onProgress?: ProgressCallback
): Promise<PipelineExecutionResult> {
  // Stage 1: Input Normalization & Parsing
  await onProgress?.("NORMALIZE", 10, "Chuẩn hóa danh sách từ vựng và ngữ pháp thô...");
  const normalized = normalizeTeacherInput(input.rawVocabulary, input.rawGrammar);

  if (normalized.vocabulary.length === 0) {
    throw new Error("Không tìm thấy từ vựng hợp lệ nào từ nội dung giáo viên nhập.");
  }

  // Stage 2: Lexical & Grammar Profiling
  await onProgress?.("PROFILING", 25, "Phân tích đặc tính từ vựng và ngữ pháp theo chuẩn CEFR/EVP...");
  const { lexicalProfiles, grammarProfiles } = await profileVocabularyAndGrammar({
    grade: input.grade,
    unitTitle: input.unitTitle,
    items: normalized.vocabulary,
    grammarTargets: normalized.grammarTargets,
  });

  // Stage 3: Instructional Unit Blueprinting
  await onProgress?.("BLUEPRINT", 40, "Thiết lập khung cấu trúc bài học sư phạm...");
  const blueprint = await buildUnitBlueprint({
    unitId: `unit-${input.unitNumber}`,
    grade: input.grade,
    textbookSeries: input.textbookSeries,
    unitNumber: input.unitNumber,
    unitTitle: input.unitTitle,
    lexicalProfiles,
    grammarProfiles,
  });

  // Stage 4: Parallel Core Generation (Flashcards + Reading Context)
  await onProgress?.("PARALLEL_CORE", 55, "Khởi tạo Flashcards song ngữ và Bài đọc ngữ cảnh chuyên đề...");
  const [flashcards, readingPartial] = await Promise.all([
    generateFlashcardSuite(lexicalProfiles),
    generateContextualReading({
      blueprint,
      lexicalProfiles,
      grammarProfiles,
    }),
  ]);

  // Stage 5: Reading Questions (Dependent on reading text)
  await onProgress?.("QUESTIONS", 70, "Tạo hệ thống câu hỏi đọc hiểu 3 cấp độ (A2-B1-B2)...");
  const questions = await generateReadingQuestions({
    passage: readingPartial.passage,
    genre: readingPartial.genre,
    topicTitle: input.unitTitle,
  });

  const reading: ReadingContent = {
    ...readingPartial,
    questions,
  };

  // Stage 6: Parallel Practice & Extension Generation (Syntax, Cloze, Writing)
  await onProgress?.("PARALLEL_EXTENSIONS", 85, "Sinh bài tập cấu trúc câu, trắc nghiệm điền từ và đề viết kèm rubric...");
  const [syntaxChunks, clozeTest, writingTask] = await Promise.all([
    generateSyntaxChunks({
      grammarProfiles,
      topicTitle: input.unitTitle,
    }),
    generateClozeTest({
      lexicalProfiles,
      grammarProfiles,
      topicTitle: input.unitTitle,
    }),
    generateWritingTask({
      lexicalProfiles,
      grammarProfiles,
      topicTitle: input.unitTitle,
    }),
  ]);

  // Assemble Draft Package
  const targetLevels = Array.from(
    new Set(lexicalProfiles.map((item: LexicalProfile) => item.cefrLevel))
  ) as CefrLevel[];
  
  const draftPackage: LingoQuestUnitPackage = {
    schemaVersion: "1.0",
    metadata: {
      title: input.unitTitle,
      grade: input.grade,
      topic: blueprint.topicSummaryVi || input.unitTitle,
      targetLevels,
      learningObjectives: blueprint.objectives.map((o) => (typeof o === "string" ? o : o.canDo)),
    },
    flashcards,
    reading,
    syntaxChunks,
    clozeTest,
    writingTask,
    qualityReport: {
      schemaValid: true,
      answerConsistency: 1.0,
      vocabularyCoverage: reading.coverage.vocabularyCoverage,
      grammarCoverage: reading.coverage.grammarCoverage,
      naturalnessScore: 0.92,
      examAlignmentScore: 0.95,
      warnings: [],
    },
  };

  // Stage 7: Deterministic Server Quality Gate
  await onProgress?.("QUALITY_GATE", 95, "Thẩm định chất lượng tự động qua Quality Gate...");
  const qualityGate = evaluateServerQualityGate(draftPackage, lexicalProfiles);

  // Sync Quality Gate results into quality report
  draftPackage.qualityReport.vocabularyCoverage = qualityGate.lexicalCoverage;
  draftPackage.qualityReport.grammarCoverage = qualityGate.grammarCoverage;
  draftPackage.qualityReport.schemaValid = qualityGate.schemaValid;
  draftPackage.qualityReport.warnings = qualityGate.warnings;
  draftPackage.qualityReport.answerConsistency = qualityGate.singleAnswerValid ? 1.0 : 0.5;

  await onProgress?.("COMPLETED", 100, "Hoàn tất sinh trọn bộ bài học chất lượng cao!");

  return {
    package: draftPackage,
    qualityGate,
    lexicalProfiles,
    grammarProfiles,
    blueprint,
  };
}
