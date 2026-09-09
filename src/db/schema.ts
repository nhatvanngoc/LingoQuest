import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  varchar,
  pgEnum,
  boolean,
  primaryKey,
  real,
  jsonb,
} from "drizzle-orm/pg-core";

/* ============================================================
   LingoQuest — Database Schema (PostgreSQL + Drizzle ORM)
   Bao trùm toàn bộ domain: người dùng, lớp học, bài học video,
   từ vựng, bộ flashcard, bài tập, tiến độ, lượt làm bài, SRS, thống kê.
   ============================================================ */

export const roleEnum = pgEnum("role", ["student", "teacher", "pending"]);
export const assignmentTypeEnum = pgEnum("assignment_type", ["exercise", "deck"]);
export const matrixStatusEnum = pgEnum("matrix_status", ["none", "doing", "submitted", "graded"]);

/** Người dùng — 3 vai trò: học sinh / giáo viên / chờ duyệt */
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  role: roleEnum("role").notNull().default("pending"),
  avatarColor: varchar("avatar_color", { length: 9 }).notNull().default("#2563EB"),
  // Mật khẩu đã băm (scrypt). Null = tài khoản demo chưa đặt mật khẩu (không thể login).
  password: varchar("password", { length: 200 }),
  // Identity Google (OAuth). Null = chưa liên kết. Dùng để login bằng Google.
  googleId: varchar("google_id", { length: 200 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Bài viết / bài tập học sinh nộp (dùng cho trang chấm điểm giáo viên) */
export const submissions = pgTable("submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  assignmentId: uuid("assignment_id").references(() => assignments.id, { onDelete: "set null" }),
  lessonTitle: varchar("lesson_title", { length: 200 }).default(""),
  prompt: text("prompt").default(""),
  text: text("text").default(""),
  words: integer("words").default(0),
  status: varchar("status", { length: 20 }).notNull().default("submitted"), // submitted | graded
  score: integer("score").default(0),
  comment: text("comment").default(""), // nhận xét của giáo viên khi chấm
  submittedAt: varchar("submitted_at", { length: 40 }).default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Lớp học */
export const classes = pgTable("classes", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 160 }).notNull(),
  teacherId: uuid("teacher_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Thành viên lớp (học sinh thuộc lớp nào) */
export const classMembers = pgTable(
  "class_members",
  {
    classId: uuid("class_id").notNull().references(() => classes.id, { onDelete: "cascade" }),
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.classId, t.userId] })],
);

/** Bài học video (kèm deck flashcard + bài kiểm tra tự sinh) */
export const lessons = pgTable("lessons", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 80 }).notNull().unique(), // ánh xạ route /learn/[slug]
  title: varchar("title", { length: 200 }).notNull(),
  titleVi: varchar("title_vi", { length: 200 }),
  description: text("description").default(""),
  youtubeId: varchar("youtube_id", { length: 20 }).notNull(),
  thumbnail: text("thumbnail").default(""),
  durationLabel: varchar("duration_label", { length: 30 }).default(""),
  status: varchar("status", { length: 20 }).notNull().default("published"), // published | hidden
  createdBy: uuid("created_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Từ vựng gắn với timestamp trong video */
export const vocab = pgTable("vocab", {
  id: uuid("id").primaryKey().defaultRandom(),
  lessonId: uuid("lesson_id").notNull().references(() => lessons.id, { onDelete: "cascade" }),
  word: varchar("word", { length: 80 }).notNull(),
  phonetic: varchar("phonetic", { length: 80 }).default(""),
  meaning: varchar("meaning", { length: 160 }).default(""),
  example: text("example").default(""),
  exampleVi: text("example_vi").default(""),
  start: integer("start").default(0), // giây
  order: integer("order").default(0),
});

/** Bộ flashcard (thường tự tạo từ danh sách từ của bài học) */
export const decks = pgTable("decks", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 80 }).notNull().unique(), // ánh xạ route /flashcards/[slug]
  title: varchar("title", { length: 160 }).notNull(),
  lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "set null" }),
  createdBy: uuid("created_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Thẻ flashcard */
export const cards = pgTable("cards", {
  id: uuid("id").primaryKey().defaultRandom(),
  deckId: uuid("deck_id").notNull().references(() => decks.id, { onDelete: "cascade" }),
  front: varchar("front", { length: 80 }).notNull(),
  phonetic: varchar("phonetic", { length: 80 }).default(""),
  back: varchar("back", { length: 160 }).default(""),
  example: text("example").default(""),
  exampleVi: text("example_vi").default(""),
  order: integer("order").default(0),
});

/** Cấu trúc nội dung bài tập thống nhất (Unified Assignment: Video + Vocab + Quiz + Điền từ + Tự luận) */
export interface UnifiedAssignmentContent {
  videoUrl?: string;
  youtubeId?: string;
  difficultyLevel?: "A1" | "A2" | "B1" | "B2" | "C1" | "THPTQG" | "IELTS" | string;
  targetXp?: number;
  vocabulary: {
    id: string;
    word: string;
    phonetic: string;
    meaning: string;
    example: string;
    exampleVi?: string;
    start?: number;
  }[];
  quizQuestions: {
    id: string;
    question: string;
    options: string[]; // 4 phương án [A, B, C, D]
    answer: string;   // Đáp án đúng (vd "A" hoặc nội dung từ đúng)
    explanation?: string;
  }[];
  fillQuestions: {
    id: string;
    sentence: string; // Câu có chứa vị trí trống [___]
    answer: string;   // Từ cần điền
    hint?: string;    // Gợi ý
    explanation?: string;
  }[];
  readingPassage?: {
    title: string;
    passage: string; // Đoạn văn đọc hiểu
    levelTag?: string; // vd: "Academic B2" | "THPTQG 2026"
    questions: {
      id: string;
      question: string;
      options: string[];
      answer: string;
      explanation?: string;
    }[];
  };
  syntaxRearrange?: {
    id: string;
    promptVi: string; // Nghĩa tiếng Việt gợi ý
    words: string[]; // Danh sách các từ xáo trộn để người học click ghép
    correctSentence: string; // Câu chuẩn xác
    explanation?: string;
  }[];
  writingPrompt?: {
    prompt: string;
    minWords?: number;
    outline?: string[];
  };
}

/** Bài tập được giao (chuẩn thống nhất 5 trong 1) */
export const assignments = pgTable("assignments", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 200 }).notNull(),
  type: assignmentTypeEnum("type").notNull().default("exercise"),
  lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "set null" }),
  deckId: uuid("deck_id").references(() => decks.id, { onDelete: "set null" }),
  classId: uuid("class_id").references(() => classes.id, { onDelete: "cascade" }),
  videoUrl: text("video_url").default(""),
  description: text("description").default(""),
  prompt: text("prompt").default(""),
  content: jsonb("content").$type<UnifiedAssignmentContent>(),
  status: varchar("status", { length: 20 }).notNull().default("published"), // published | hidden
  dueAt: timestamp("due_at", { withTimezone: true }),
  createdBy: uuid("created_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Tiến độ bài học của học sinh (theo % hoàn thành) */
export const lessonProgress = pgTable(
  "lesson_progress",
  {
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id").notNull().references(() => lessons.id, { onDelete: "cascade" }),
    percent: integer("percent").notNull().default(0),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
);

/** Lượt làm bài tập / kiểm tra (lưu điểm để vẽ ma trận giáo viên) */
export const attempts = pgTable("attempts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  assignmentId: uuid("assignment_id").references(() => assignments.id, { onDelete: "cascade" }),
  status: matrixStatusEnum("status").notNull().default("none"),
  score: integer("score").default(0),
  total: integer("total").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Trạng thái SRS của từng thẻ cho từng học sinh (lặp ngắt quãng, box 0..4) */
export const srs = pgTable(
  "srs",
  {
    userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    cardKey: varchar("card_key", { length: 120 }).notNull(), // "deckId:cardId"
    box: integer("box").notNull().default(0),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.cardKey] })],
);

/** Thống kê tổng hợp của học sinh (XP, cấp độ, streak, từ đã thuộc) */
export const userStats = pgTable(
  "user_stats",
  {
    userId: uuid("user_id").primaryKey().references(() => users.id, { onDelete: "cascade" }),
    xp: integer("xp").notNull().default(0),
    streak: integer("streak").notNull().default(0),
    wordsLearned: integer("words_learned").notNull().default(0),
    level: integer("level").notNull().default(1),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
);

/** Hoạt động học theo ngày (cho biểu đồ + streak) */
export const dailyActivity = pgTable("daily_activity", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  day: varchar("day", { length: 10 }).notNull(), // YYYY-MM-DD
  minutes: integer("minutes").notNull().default(0),
  xp: integer("xp").notNull().default(0),
});

/* ============================================================
   LingoQuest — Curriculum & AI Orchestration Pipeline Schema
   Bao gồm: Units, GenerationJobs, UnitContents, VocabItems,
   GrammarTargets, Topics
   ============================================================ */

export const gradeLevelEnum = pgEnum("grade_level", ["GRADE_10", "GRADE_11", "GRADE_12"]);
export const textbookSeriesEnum = pgEnum("textbook_series", ["GLOBAL_SUCCESS", "FRIENDS_GLOBAL", "BRIGHT", "OTHER"]);
export const cefrLevelEnum = pgEnum("cefr_level", ["A1", "A2", "B1", "B2"]);
export const unitStatusEnum = pgEnum("unit_status", ["DRAFT", "GENERATING", "NEEDS_REVIEW", "READY", "PUBLISHED", "FAILED", "ARCHIVED"]);
export const generationStatusEnum = pgEnum("generation_status", ["QUEUED", "RUNNING", "VALIDATING", "REPAIRING", "COMPLETED", "FAILED"]);
export const contentTypeEnum = pgEnum("content_type", ["UNIT_PACKAGE", "READING", "READING_QUESTIONS", "SYNTAX", "CLOZE", "WRITING", "DIAGNOSTIC"]);

/** Chủ đề / Topic Ontology */
export const topics = pgTable("topics", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 160 }).notNull().unique(),
  nameEn: varchar("name_en", { length: 200 }).notNull(),
  nameVi: varchar("name_vi", { length: 200 }).notNull(),
  description: text("description"),
  parentId: uuid("parent_id"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Đơn vị bài học chuẩn chuyên đề (Unit) */
export const units = pgTable("units", {
  id: uuid("id").primaryKey().defaultRandom(),
  grade: gradeLevelEnum("grade").notNull(),
  textbookSeries: textbookSeriesEnum("textbook_series").notNull().default("GLOBAL_SUCCESS"),
  unitNumber: integer("unit_number").notNull(),
  title: varchar("title", { length: 240 }).notNull(),
  slug: varchar("slug", { length: 260 }).notNull().unique(),
  status: unitStatusEnum("status").notNull().default("DRAFT"),
  rawVocabulary: text("raw_vocabulary").notNull(),
  rawGrammar: text("raw_grammar").notNull(),
  teacherNotes: text("teacher_notes"),
  videoUrls: jsonb("video_urls").default([]),
  schemaVersion: varchar("schema_version", { length: 20 }).notNull().default("1.0"),
  publishedVersion: integer("published_version"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdById: uuid("created_by_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Liên kết Unit - Topic */
export const unitTopics = pgTable(
  "unit_topics",
  {
    unitId: uuid("unit_id").notNull().references(() => units.id, { onDelete: "cascade" }),
    topicId: uuid("topic_id").notNull().references(() => topics.id, { onDelete: "cascade" }),
    relevance: real("relevance").notNull().default(1.0),
  },
  (t) => [primaryKey({ columns: [t.unitId, t.topicId] })],
);

/** Job state machine cho tiến trình AI sinh bài */
export const generationJobs = pgTable("generation_jobs", {
  id: uuid("id").primaryKey().defaultRandom(),
  unitId: uuid("unit_id").notNull().references(() => units.id, { onDelete: "cascade" }),
  status: generationStatusEnum("status").notNull().default("QUEUED"),
  currentStage: varchar("current_stage", { length: 60 }).notNull().default("NORMALIZE"),
  progress: integer("progress").notNull().default(0), // 0 to 100
  provider: varchar("provider", { length: 60 }),
  model: varchar("model", { length: 120 }),
  promptVersion: varchar("prompt_version", { length: 40 }).notNull().default("unit-generator-1.0"),
  inputHash: varchar("input_hash", { length: 128 }).notNull(),
  retryCount: integer("retry_count").notNull().default(0),
  errorCode: varchar("error_code", { length: 80 }),
  errorMessage: text("error_message"),
  trace: jsonb("trace").default({}),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  startedAt: timestamp("started_at", { withTimezone: true }),
  completedAt: timestamp("completed_at", { withTimezone: true }),
});

/** Gói nội dung Unit bất biến, có versioning */
export const unitContents = pgTable("unit_contents", {
  id: uuid("id").primaryKey().defaultRandom(),
  unitId: uuid("unit_id").notNull().references(() => units.id, { onDelete: "cascade" }),
  type: contentTypeEnum("type").notNull().default("UNIT_PACKAGE"),
  version: integer("version").notNull().default(1),
  status: generationStatusEnum("status").notNull().default("COMPLETED"),
  payload: jsonb("payload").notNull(), // Chứa toàn bộ LingoQuestUnitPackage
  generatorModel: varchar("generator_model", { length: 120 }),
  promptVersion: varchar("prompt_version", { length: 40 }).notNull().default("1.0"),
  schemaVersion: varchar("schema_version", { length: 20 }).notNull().default("1.0"),
  inputHash: varchar("input_hash", { length: 128 }).notNull(),
  actualWordCount: integer("actual_word_count"),
  vocabularyCoverage: real("vocabulary_coverage"),
  grammarCoverage: real("grammar_coverage"),
  naturalnessScore: real("naturalness_score"),
  examAlignmentScore: real("exam_alignment_score"),
  qualityReport: jsonb("quality_report").default({}),
  isPublished: boolean("is_published").notNull().default(false),
  generatedAt: timestamp("generated_at", { withTimezone: true }).notNull().defaultNow(),
  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
  reviewedById: uuid("reviewed_by_id").references(() => users.id, { onDelete: "set null" }),
});

/** Từ vựng chi tiết được chuẩn hóa (VocabItem) */
export const vocabItems = pgTable("vocab_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  unitId: uuid("unit_id").notNull().references(() => units.id, { onDelete: "cascade" }),
  sourceIndex: integer("source_index").notNull().default(0),
  term: varchar("term", { length: 200 }).notNull(),
  normalizedTerm: varchar("normalized_term", { length: 200 }).notNull(),
  lemma: varchar("lemma", { length: 160 }).notNull(),
  partOfSpeech: varchar("part_of_speech", { length: 40 }).notNull(),
  intendedSenseEn: text("intended_sense_en").notNull(),
  meaningEn: text("meaning_en").notNull(),
  meaningVi: text("meaning_vi").notNull(),
  cefrLevel: cefrLevelEnum("cefr_level").notNull().default("A2"),
  cefrConfidence: real("cefr_confidence").notNull().default(0.85),
  cefrReason: text("cefr_reason"),
  needsReview: boolean("needs_review").notNull().default(false),
  ipaUS: varchar("ipa_us", { length: 120 }),
  ipaUK: varchar("ipa_uk", { length: 120 }),
  audioConfig: jsonb("audio_config"),
  collocations: jsonb("collocations").default([]),
  examples: jsonb("examples").default({}),
  curriculumFit: real("curriculum_fit").notNull().default(1.0),
  examUtility: real("exam_utility").notNull().default(1.0),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Mục tiêu ngữ pháp của Unit (GrammarTarget) */
export const grammarTargets = pgTable("grammar_targets", {
  id: uuid("id").primaryKey().defaultRandom(),
  unitId: uuid("unit_id").notNull().references(() => units.id, { onDelete: "cascade" }),
  label: varchar("label", { length: 200 }).notNull(),
  canonicalForm: varchar("canonical_form", { length: 240 }).notNull(),
  cefrLevel: cefrLevelEnum("cefr_level").notNull().default("B1"),
  prerequisites: jsonb("prerequisites").default([]),
  learnerErrorsVi: jsonb("learner_errors_vi").default([]),
  positiveExamples: jsonb("positive_examples").default([]),
  contrastWith: text("contrast_with"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
