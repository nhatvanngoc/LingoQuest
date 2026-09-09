import { z } from "zod";

/* ============================================================
   LingoQuest — Zod Schemas for Curriculum Generation & Validation
   ============================================================ */

export const CefrLevelSchema = z.enum(["A1", "A2", "B1", "B2"]);

export const GradeLevelSchema = z.union([
  z.literal(10),
  z.literal(11),
  z.literal(12),
]);

export const TextbookSeriesSchema = z.enum([
  "GLOBAL_SUCCESS",
  "FRIENDS_GLOBAL",
  "BRIGHT",
  "OTHER",
]);

/* ---- 1. Teacher Input Schema ---- */
export const TeacherUnitInputSchema = z.object({
  grade: GradeLevelSchema,
  textbookSeries: TextbookSeriesSchema,
  unitNumber: z.number().int().min(1).max(30),
  unitTitle: z.string().min(3).max(160),
  rawVocabulary: z.string().min(3).max(10_000),
  rawGrammar: z.string().min(3).max(5_000),
  teacherNotes: z.string().max(5_000).optional(),
  videoUrls: z.array(z.string().url()).max(5).optional().default([]),
  generationOptions: z
    .object({
      locale: z.literal("vi-VN").default("vi-VN"),
      targetExamProfile: z
        .enum(["THPT_2018_CURRENT", "SCHOOL_TEST", "IELTS_BRIDGE"])
        .default("THPT_2018_CURRENT"),
      passageWordCount: z
        .object({
          min: z.number().default(150),
          max: z.number().default(250),
        })
        .optional(),
      questionCount: z.number().min(3).max(6).default(4),
    })
    .optional(),
});

export const GenerateUnitRequestSchema = TeacherUnitInputSchema.extend({
  idempotencyKey: z.string().min(8).max(128).optional(),
});

/* ---- 2. Lexical & Grammar Profiler Schemas ---- */
export const LexicalProfileSchema = z.object({
  sourceIndex: z.number().int().min(0),
  sourceText: z.string(),
  lemma: z.string(),
  displayForm: z.string(),
  partOfSpeech: z.enum([
    "noun",
    "verb",
    "adjective",
    "adverb",
    "preposition",
    "phrase",
    "phrasal_verb",
    "idiom",
    "other",
  ]),
  intendedSenseEn: z.string(),
  meaningVi: z.string(),
  cefrLevel: CefrLevelSchema,
  cefrConfidence: z.number().min(0).max(1),
  cefrReason: z.string(),
  reviewStatus: z.enum(["AUTO_ACCEPTED", "NEEDS_REVIEW"]),
  curriculumFit: z.object({
    grade: GradeLevelSchema,
    unitRelevance: z.number().min(0).max(1),
    examUsefulness: z.number().min(0).max(1),
  }),
});

export const GrammarProfileSchema = z.object({
  id: z.string(),
  label: z.string(),
  canonicalForm: z.string(),
  cefrLevel: CefrLevelSchema,
  prerequisites: z.array(z.string()),
  commonVietnameseLearnerErrors: z.array(z.string()),
  positiveExamples: z.array(z.string()),
  contrastWith: z.string().optional(),
});

/* ---- 3. Option Item Schema (A/B/C/D) ---- */
export const OptionItemSchema = z.object({
  id: z.enum(["A", "B", "C", "D"]),
  text: z.string().min(1),
  isCorrect: z.boolean(),
  rationaleVi: z.string().min(2),
});

/* ---- 4. Flashcard Suite Schema ---- */
export const FlashcardItemSchema = z.object({
  id: z.string().min(1),
  vocabId: z.string().min(1),
  term: z.string().min(1),
  lemma: z.string().min(1),
  partOfSpeech: z.string().min(1),
  cefrLevel: CefrLevelSchema,
  ipaUS: z.string().min(2),
  ipaUK: z.string().min(2),
  audioHint: z.object({
    text: z.string(),
    locale: z.enum(["en-US", "en-GB"]).default("en-US"),
    speed: z.number().min(0.7).max(1.1).default(0.9),
    stressHint: z.string(),
  }),
  meaningEn: z.string().min(3),
  meaningVi: z.string().min(1),
  collocations: z
    .array(
      z.object({
        phrase: z.string(),
        meaningVi: z.string(),
        example: z.string(),
      })
    )
    .min(1)
    .max(5),
  examples: z.object({
    a2: z.object({
      en: z.string(),
      vi: z.string(),
    }),
    b1b2: z.object({
      en: z.string(),
      vi: z.string(),
      feature: z.string(),
    }),
  }),
});

/* ---- 5. Reading & Questions Schemas ---- */
export const ReadingQuestionSkillSchema = z.enum([
  "DETAIL",
  "MAIN_IDEA",
  "REFERENCE",
  "SYNONYM",
  "ANTONYM",
  "INFERENCE",
  "PURPOSE",
  "DISCOURSE",
  "ERROR_RECOGNITION",
  "COMMUNICATION",
]);

export const ReadingQuestionSchema = z.object({
  id: z.string(),
  level: CefrLevelSchema,
  skill: ReadingQuestionSkillSchema,
  stem: z.string().min(5),
  options: z.array(OptionItemSchema).length(4),
  correctOptionId: z.enum(["A", "B", "C", "D"]),
  evidence: z.string().min(2),
  explanationVi: z.string().min(5),
  scaffold: z.object({
    keywordHintVi: z.string(),
    simplifiedStem: z.string(),
    advancedExtension: z.string(),
  }),
});

export const ReadingContentSchema = z.object({
  title: z.string(),
  genre: z.enum([
    "ARTICLE",
    "NOTICE",
    "LEAFLET",
    "EMAIL",
    "BLOG_POST",
    "REPORT",
  ]),
  passage: z.string().min(200),
  wordCount: z.number().int().min(120).max(300),
  coverage: z.object({
    vocabularyCoverage: z.number().min(0).max(1),
    grammarCoverage: z.number().min(0).max(1),
    coveredVocabulary: z.array(
      z.object({
        vocabId: z.string(),
        surfaceForm: z.string(),
        quote: z.string(),
      })
    ),
    missingVocabulary: z.array(z.string()).default([]),
    grammarEvidence: z.array(
      z.object({
        grammarId: z.string(),
        quote: z.string(),
      })
    ),
  }),
  questions: z.array(ReadingQuestionSchema).min(3).max(6),
});

/* ---- 6. Syntax Chunks Schema ---- */
export const SyntaxChunkSchema = z.object({
  id: z.string(),
  level: CefrLevelSchema,
  grammarTargetId: z.string(),
  chunks: z.array(z.string()).min(3),
  answer: z.string(),
  explanationVi: z.string(),
  acceptableAnswers: z.array(z.string()).default([]),
});

/* ---- 7. Contextual Cloze Test Schema ---- */
export const ClozeItemSchema = z.object({
  id: z.string(),
  level: CefrLevelSchema,
  blankIndex: z.number().int().min(1),
  hintType: z.enum(["FIRST_LETTER", "VIETNAMESE", "CONTEXT", "NONE"]),
  hint: z.string(),
  options: z.array(OptionItemSchema).length(4),
  correctOptionId: z.enum(["A", "B", "C", "D"]),
  explanationVi: z.string(),
});

export const ClozeTestSchema = z.object({
  genre: z.enum(["NOTICE", "LEAFLET", "EMAIL", "PARAGRAPH"]),
  textWithBlanks: z.string(),
  items: z.array(ClozeItemSchema).min(3).max(8),
});

/* ---- 8. Writing Task Schema ---- */
export const WritingCriterionSchema = z.object({
  criterion: z.enum([
    "TASK_ACHIEVEMENT",
    "LEXICAL_RESOURCE",
    "GRAMMAR",
    "COHERENCE",
  ]),
  maxScore: z.number().default(2.5),
  bands: z
    .array(
      z.object({
        score: z.number().min(0).max(2.5),
        descriptorVi: z.string(),
      })
    )
    .min(3),
});

export const WritingTaskSchema = z.object({
  promptEn: z.string(),
  supportVi: z.string(),
  minWords: z.number().default(80),
  maxWords: z.number().default(120),
  requiredVocabularyIds: z.array(z.string()).min(1),
  requiredGrammarIds: z.array(z.string()).min(1),
  planningQuestions: z.array(z.string()).min(2),
  rubric: z.array(WritingCriterionSchema).length(4),
});

/* ---- 9. Quality Report Schema ---- */
export const QualityReportSchema = z.object({
  schemaValid: z.boolean(),
  answerConsistency: z.number().min(0).max(1),
  vocabularyCoverage: z.number().min(0).max(1),
  grammarCoverage: z.number().min(0).max(1),
  naturalnessScore: z.number().min(0).max(1),
  examAlignmentScore: z.number().min(0).max(1),
  warnings: z.array(z.string()).default([]),
});

/* ---- 10. Complete Unit Package Schema ---- */
export const LingoQuestUnitPackageSchema = z.object({
  schemaVersion: z.literal("1.0"),
  metadata: z.object({
    title: z.string().min(3),
    grade: GradeLevelSchema,
    topic: z.string().min(3),
    targetLevels: z.array(CefrLevelSchema),
    learningObjectives: z.array(z.string()).min(2),
  }),
  flashcards: z.array(FlashcardItemSchema).min(1),
  reading: ReadingContentSchema,
  syntaxChunks: z.array(SyntaxChunkSchema).min(2).max(6),
  clozeTest: ClozeTestSchema,
  writingTask: WritingTaskSchema,
  qualityReport: QualityReportSchema,
});
