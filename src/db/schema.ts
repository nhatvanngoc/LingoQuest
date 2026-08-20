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

/** Bài tập được giao */
export const assignments = pgTable("assignments", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 200 }).notNull(),
  type: assignmentTypeEnum("type").notNull().default("exercise"),
  lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "set null" }),
  deckId: uuid("deck_id").references(() => decks.id, { onDelete: "set null" }),
  classId: uuid("class_id").references(() => classes.id, { onDelete: "cascade" }),
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
