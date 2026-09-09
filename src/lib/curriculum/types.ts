/**
 * LingoQuest — Core Curriculum & Orchestration Types
 * Implements the "Teacher Zero-Effort" & Adaptive Learning Architecture.
 */

export type GradeLevel = 10 | 11 | 12;

export type TextbookSeries = "GLOBAL_SUCCESS" | "FRIENDS_GLOBAL" | "BRIGHT" | "OTHER";

export type CefrLevel = "A1" | "A2" | "B1" | "B2";

export type UnitStatus =
  | "DRAFT"
  | "GENERATING"
  | "NEEDS_REVIEW"
  | "READY"
  | "PUBLISHED"
  | "FAILED"
  | "ARCHIVED";

export type GenerationStage =
  | "NORMALIZE"
  | "PROFILE"
  | "BLUEPRINT"
  | "FLASHCARDS"
  | "READING"
  | "QUESTIONS"
  | "SYNTAX"
  | "CLOZE"
  | "WRITING"
  | "VALIDATE"
  | "REPAIR"
  | "READY";

export type GenerationStatus =
  | "QUEUED"
  | "RUNNING"
  | "VALIDATING"
  | "REPAIRING"
  | "COMPLETED"
  | "FAILED";

export type ContentType =
  | "UNIT_PACKAGE"
  | "READING"
  | "READING_QUESTIONS"
  | "SYNTAX"
  | "CLOZE"
  | "WRITING"
  | "DIAGNOSTIC";

/* ============================================================
   1. Teacher Input (30-Second Unit Ingestion)
   ============================================================ */

export type TeacherUnitInput = {
  grade: GradeLevel;
  textbookSeries: TextbookSeries;
  unitNumber: number;
  unitTitle: string;
  rawVocabulary: string; // Một từ/cụm từ mỗi dòng hoặc phân tách bằng dấu phẩy
  rawGrammar: string; // e.g., "Will vs. be going to; passive voice"
  teacherNotes?: string;
  videoUrls?: string[];
  generationOptions?: {
    locale?: "vi-VN";
    targetExamProfile?: "THPT_2018_CURRENT" | "SCHOOL_TEST" | "IELTS_BRIDGE";
    passageWordCount?: { min: number; max: number };
    questionCount?: number;
  };
};

/* ============================================================
   2. Profiling Data Models
   ============================================================ */

export type LexicalProfile = {
  sourceIndex: number;
  sourceText: string;
  lemma: string;
  displayForm: string;
  partOfSpeech:
    | "noun"
    | "verb"
    | "adjective"
    | "adverb"
    | "preposition"
    | "phrase"
    | "phrasal_verb"
    | "idiom"
    | "other";
  intendedSenseEn: string;
  meaningVi: string;
  cefrLevel: CefrLevel;
  cefrConfidence: number; // 0–1
  cefrReason: string;
  reviewStatus: "AUTO_ACCEPTED" | "NEEDS_REVIEW";
  curriculumFit: {
    grade: GradeLevel;
    unitRelevance: number; // 0–1
    examUsefulness: number; // 0–1
  };
};

export type GrammarProfile = {
  id: string;
  label: string;
  canonicalForm: string;
  cefrLevel: CefrLevel;
  prerequisites: string[];
  commonVietnameseLearnerErrors: string[];
  positiveExamples: string[];
  contrastWith?: string;
};

/* ============================================================
   3. Unit Blueprint
   ============================================================ */

export type ReadingGenre =
  | "ARTICLE"
  | "NOTICE"
  | "LEAFLET"
  | "EMAIL"
  | "BLOG_POST"
  | "REPORT";

export type UnitBlueprint = {
  unitId: string;
  topicSummaryVi: string;
  objectives: Array<{
    id: string;
    level: CefrLevel;
    skill: "VOCABULARY" | "GRAMMAR" | "READING" | "WRITING";
    canDo: string;
  }>;
  requiredVocabularyIds: string[];
  optionalVocabularyIds: string[];
  grammarTargetIds: string[];
  readingPlan: {
    genre: ReadingGenre;
    thesis: string;
    paragraphFunctions: string[];
    requiredVocabularyIds: string[];
    requiredGrammarTargetIds: string[];
    interleavedVocabularyIds: string[];
  };
  difficultyDistribution: {
    A2: number;
    B1: number;
    B2: number;
  };
};

/* ============================================================
   4. Structured Unit Package (Validated Output Schema)
   ============================================================ */

export type OptionItem = {
  id: "A" | "B" | "C" | "D";
  text: string;
  isCorrect: boolean;
  rationaleVi: string;
};

export type AcousticStage = {
  stage: number; // 1 to 5
  speed: number;
  focus: "overview" | "stress" | "ending_sounds" | "linking" | "collocation_sentence";
  instructionVi: string;
};

export type FlashcardContextSentence = {
  en: string;
  clueVi: string;
  blankSentence: string;
};

export type FlashcardItem = {
  id: string;
  vocabId: string;
  term: string;
  lemma: string;
  partOfSpeech: string;
  cefrLevel: CefrLevel;
  ipaUS: string;
  ipaUK: string;
  syllables?: string;
  stressPattern?: string;
  audioHint: {
    text: string;
    locale: "en-US" | "en-GB";
    speed: number;
    stressHint: string;
  };
  acousticStages?: AcousticStage[];
  // Deep Semantic Scaffolding Steps:
  contextSentence?: FlashcardContextSentence;
  meaningEn: string;
  meaningVi: string;
  collocations: Array<{
    phrase: string;
    meaningVi: string;
    example: string;
  }>;
  examples: {
    a2: { en: string; vi: string };
    b1b2: { en: string; vi: string; feature: string };
  };
  learnerTipVi?: string;
};

export type ReadingQuestionSkill =
  | "DETAIL"
  | "MAIN_IDEA"
  | "REFERENCE"
  | "SYNONYM"
  | "ANTONYM"
  | "INFERENCE"
  | "PURPOSE"
  | "DISCOURSE"
  | "ERROR_RECOGNITION"
  | "COMMUNICATION";

export type ReadingQuestion = {
  id: string;
  level: CefrLevel;
  skill: ReadingQuestionSkill;
  stem: string;
  options: OptionItem[];
  correctOptionId: "A" | "B" | "C" | "D";
  evidence: string;
  explanationVi: string;
  scaffold: {
    keywordHintVi: string;
    simplifiedStem: string;
    advancedExtension: string;
  };
};

export type ReadingContent = {
  title: string;
  genre: ReadingGenre;
  passage: string;
  wordCount: number;
  coverage: {
    vocabularyCoverage: number;
    grammarCoverage: number;
    coveredVocabulary: Array<{
      vocabId: string;
      surfaceForm: string;
      quote: string;
    }>;
    missingVocabulary: string[];
    grammarEvidence: Array<{
      grammarId: string;
      quote: string;
    }>;
  };
  questions: ReadingQuestion[];
};

export type SyntaxChunk = {
  id: string;
  level: CefrLevel;
  grammarTargetId: string;
  chunks: string[];
  answer: string;
  explanationVi: string;
  acceptableAnswers: string[];
};

export type ClozeItem = {
  id: string;
  level: CefrLevel;
  blankIndex: number;
  hintType: "FIRST_LETTER" | "VIETNAMESE" | "CONTEXT" | "NONE";
  hint: string;
  options: OptionItem[];
  correctOptionId: "A" | "B" | "C" | "D";
  explanationVi: string;
};

export type ClozeTest = {
  genre: "NOTICE" | "LEAFLET" | "EMAIL" | "PARAGRAPH";
  textWithBlanks: string;
  items: ClozeItem[];
};

export type WritingCriterion = {
  criterion: "TASK_ACHIEVEMENT" | "LEXICAL_RESOURCE" | "GRAMMAR" | "COHERENCE";
  maxScore: number;
  bands: Array<{
    score: number;
    descriptorVi: string;
  }>;
};

export type WritingTask = {
  promptEn: string;
  supportVi: string;
  minWords: number;
  maxWords: number;
  requiredVocabularyIds: string[];
  requiredGrammarIds: string[];
  planningQuestions: string[];
  rubric: WritingCriterion[];
};

export type QualityReport = {
  schemaValid: boolean;
  answerConsistency: number;
  vocabularyCoverage: number;
  grammarCoverage: number;
  naturalnessScore: number;
  examAlignmentScore: number;
  warnings: string[];
};

export type LingoQuestUnitPackage = {
  schemaVersion: "1.0";
  metadata: {
    title: string;
    grade: GradeLevel;
    topic: string;
    targetLevels: CefrLevel[];
    learningObjectives: string[];
  };
  flashcards: FlashcardItem[];
  reading: ReadingContent;
  syntaxChunks: SyntaxChunk[];
  clozeTest: ClozeTest;
  writingTask: WritingTask;
  qualityReport: QualityReport;
};

/* ============================================================
   5. Server Quality Gate & Deterministic Verification
   ============================================================ */

export type ServerQualityGate = {
  schemaValid: boolean;
  actualWordCount: number;
  lexicalCoverage: number;
  grammarCoverage: number;
  singleAnswerValid: boolean;
  explanationConsistency: number;
  duplicateRate: number;
  passed: boolean;
  repairTargets: string[];
  warnings: string[];
};
