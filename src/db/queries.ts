import { db } from "./index";
import {
  assignments,
  attempts,
  cards,
  classes,
  classMembers,
  decks,
  lessons,
  users,
  userStats,
  vocab,
  submissions,
  lessonProgress,
  dailyActivity,
  type UnifiedAssignmentContent,
} from "./schema";
import { and, eq, sql, desc, or } from "drizzle-orm";
import { hashPassword } from "@/lib/auth/password";
import type { MatrixStatus, Role } from "@/lib/types";

/* ============================================================
   Lớp truy vấn cho LingoQuest (Production-Ready).
   - seedAdminIfEmpty(): Đảm bảo tài khoản Admin duy nhất tồn tại.
   - getLessonsWithVocab(): Danh sách bài học thật kèm từ vựng từ PostgreSQL.
   - getOverview(): Số liệu tổng quan thật cho hệ thống.
   - Không chứa bất kỳ dữ liệu demo hoặc tài khoản mẫu nào.
   ============================================================ */

export type LessonRow = Awaited<ReturnType<typeof getLessonsWithVocab>>[number];

/**
 * Đảm bảo tài khoản Admin duy nhất và Lớp học mặc định tồn tại trong CSDL.
 * Tuyệt đối không tạo dữ liệu giả mạo hay tài khoản demo.
 */
export async function seedAdminIfEmpty() {
  const adminEmail = "admin@lingoquest.app";
  const existing = await db.select().from(users).where(eq(users.email, adminEmail)).limit(1);

  let adminId: string;
  if (existing.length === 0) {
    const adminPass = "Admin@123456";
    const [admin] = await db
      .insert(users)
      .values({
        name: "Quản trị viên",
        email: adminEmail,
        role: "teacher",
        avatarColor: "#2563EB",
        password: hashPassword(adminPass),
      })
      .returning();
    adminId = admin.id;

    await db.insert(userStats).values({
      userId: adminId,
      xp: 0,
      streak: 0,
      wordsLearned: 0,
      level: 1,
    });
  } else {
    adminId = existing[0].id;
  }

  // Đảm bảo có 1 lớp học mặc định gắn với Admin
  const classRow = await db.select().from(classes).limit(1);
  if (classRow.length === 0) {
    await db.insert(classes).values({
      name: "Tiếng Anh Toàn Diện — Lớp Chính Thức",
      teacherId: adminId,
    });
  }

  return { seeded: true, adminEmail };
}

/** Alias cho backward compatibility */
export const seedIfEmpty = seedAdminIfEmpty;

/** Lấy danh sách bài học + số từ vựng mỗi bài từ DB thật */
export async function getLessonsWithVocab() {
  const rows = await db.select().from(lessons).orderBy(lessons.createdAt);
  const result = await Promise.all(
    rows.map(async (l) => {
      const [{ count }] = await db
        .select({ count: sql<number>`count(*)::int` })
        .from(vocab)
        .where(eq(vocab.lessonId, l.id));
      return {
        id: l.id,
        slug: l.slug,
        title: l.title,
        titleVi: l.titleVi ?? "",
        description: l.description ?? "",
        youtubeId: l.youtubeId,
        thumbnail: l.thumbnail ?? "",
        durationLabel: l.durationLabel ?? "",
        vocabCount: count ?? 0,
      };
    }),
  );
  return result;
}

/** Chi tiết bài học kèm từ vựng theo slug hoặc ID */
export async function getLessonBySlugOrId(slugOrId: string) {
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slugOrId);
  const condition = isUuid
    ? or(eq(lessons.slug, slugOrId), eq(lessons.id, slugOrId))
    : eq(lessons.slug, slugOrId);

  const row = await db
    .select()
    .from(lessons)
    .where(condition)
    .limit(1);
  if (!row[0]) return null;
  const l = row[0];
  const vocabRows = await db
    .select()
    .from(vocab)
    .where(eq(vocab.lessonId, l.id))
    .orderBy(vocab.order);
  return {
    ...l,
    vocab: vocabRows,
  };
}

/** Chi tiết bộ flashcard kèm thẻ theo slug hoặc ID */
export async function getDeckBySlugOrId(slugOrId: string) {
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slugOrId);
  const condition = isUuid
    ? or(eq(decks.slug, slugOrId), eq(decks.id, slugOrId))
    : eq(decks.slug, slugOrId);

  const row = await db
    .select()
    .from(decks)
    .where(condition)
    .limit(1);
  if (!row[0]) return null;
  const d = row[0];
  const cardRows = await db
    .select()
    .from(cards)
    .where(eq(cards.deckId, d.id))
    .orderBy(cards.order);
  return {
    ...d,
    cards: cardRows,
  };
}

/** Tổng quan số liệu CSDL thật (cho badge trạng thái) */
export async function getOverview() {
  const [l] = await db.select({ c: sql<number>`count(*)::int` }).from(lessons);
  const [v] = await db.select({ c: sql<number>`count(*)::int` }).from(vocab);
  const [d] = await db.select({ c: sql<number>`count(*)::int` }).from(decks);
  const [u] = await db.select({ c: sql<number>`count(*)::int` }).from(users);
  const [a] = await db.select({ c: sql<number>`count(*)::int` }).from(assignments);
  return {
    lessons: l?.c ?? 0,
    vocab: v?.c ?? 0,
    decks: d?.c ?? 0,
    users: u?.c ?? 0,
    assignments: a?.c ?? 0,
  };
}

/** Lấy lớp đầu tiên của hệ thống */
export async function getFirstClassId() {
  const row = await db.select({ id: classes.id }).from(classes).limit(1);
  return row[0]?.id ?? null;
}

/** Danh sách học sinh thật trong hệ thống */
export async function getClassStudents() {
  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      avatarColor: users.avatarColor,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.role, "student"))
    .orderBy(desc(users.createdAt));
  return rows;
}

/** Bảng xếp hạng tuần từ user_stats của học sinh thật */
export async function getWeeklyLeaderboard() {
  const rows = await db
    .select({ id: users.id, name: users.name, xp: userStats.xp })
    .from(users)
    .leftJoin(userStats, eq(userStats.userId, users.id))
    .where(eq(users.role, "student"))
    .orderBy(desc(userStats.xp), users.name);
  return rows.map((r) => ({ id: r.id, name: r.name, xp: r.xp ?? 0 }));
}

/* ============================================================
   Hàm dành riêng Quản trị / Giáo viên — tạo / chấm bài, thống kê.
   ============================================================ */

/** Tạo bài tập được giao (chuẩn thống nhất 5 trong 1). */
export async function createAssignment(input: {
  title: string;
  type?: "exercise" | "deck";
  description?: string | null;
  prompt?: string | null;
  lessonId?: string | null;
  deckId?: string | null;
  videoUrl?: string | null;
  content?: UnifiedAssignmentContent | null;
  dueAt?: Date | null;
}) {
  const classId = await getFirstClassId();
  const teacherRow = await db.select({ id: users.id }).from(users).where(eq(users.role, "teacher")).limit(1);
  const [row] = await db
    .insert(assignments)
    .values({
      title: input.title,
      type: input.type ?? "exercise",
      description: input.description ?? "",
      prompt: input.prompt ?? "",
      videoUrl: input.videoUrl ?? "",
      content: input.content ?? ({} as any),
      lessonId: input.lessonId ?? null,
      deckId: input.deckId ?? null,
      classId: classId ?? null,
      dueAt: input.dueAt ?? null,
      createdBy: teacherRow[0]?.id ?? null,
    })
    .returning();
  return row;
}

/** Tạo bộ flashcard mới kèm danh sách thẻ từ vựng */
export async function createDeckWithCards(input: {
  title: string;
  createdBy?: string | null;
  cards: {
    front: string;
    back: string;
    phonetic?: string;
    example?: string;
    exampleVi?: string;
  }[];
}) {
  const slug = `deck-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
  const [deck] = await db
    .insert(decks)
    .values({
      title: input.title,
      slug,
      createdBy: input.createdBy ?? null,
    })
    .returning();

  if (input.cards.length > 0) {
    await db.insert(cards).values(
      input.cards.map((c, idx) => ({
        deckId: deck.id,
        front: c.front.trim(),
        back: c.back.trim(),
        phonetic: c.phonetic?.trim() || "",
        example: c.example?.trim() || "",
        exampleVi: c.exampleVi?.trim() || "",
        order: idx,
      }))
    );
  }

  return deck;
}

/** Lấy thông tin chi tiết bài tập theo ID */
export async function getAssignmentById(id: string) {
  const [row] = await db
    .select({
      id: assignments.id,
      title: assignments.title,
      type: assignments.type,
      description: assignments.description,
      prompt: assignments.prompt,
      videoUrl: assignments.videoUrl,
      content: assignments.content,
      lessonId: assignments.lessonId,
      deckId: assignments.deckId,
      dueAt: assignments.dueAt,
      createdAt: assignments.createdAt,
      lessonTitle: lessons.title,
    })
    .from(assignments)
    .leftJoin(lessons, eq(lessons.id, assignments.lessonId))
    .where(eq(assignments.id, id))
    .limit(1);
  return row ?? null;
}

/** Đăng bài học video + từ vựng + tự động tạo bộ flashcard từ vựng. */
export async function createLessonWithVocab(input: {
  title: string;
  youtubeId: string;
  vocab: { word: string; meaning: string; start: number }[];
  createdBy: string;
  description?: string;
  titleVi?: string;
}) {
  const slug = `lesson-${Date.now().toString(36)}`;
  const [lesson] = await db
    .insert(lessons)
    .values({
      slug,
      title: input.title,
      titleVi: input.titleVi ?? null,
      description: input.description ?? "",
      youtubeId: input.youtubeId,
      thumbnail: "",
      durationLabel: "",
      createdBy: input.createdBy,
    })
    .returning();

  if (input.vocab.length > 0) {
    await db.insert(vocab).values(
      input.vocab.map((v, i) => ({
        lessonId: lesson.id,
        word: v.word,
        meaning: v.meaning,
        start: v.start,
        order: i,
      })),
    );
  }

  // Tự động tạo bộ flashcard kèm thẻ từ danh sách từ vựng.
  const deckSlug = `deck-${Date.now().toString(36)}`;
  const [deck] = await db
    .insert(decks)
    .values({ slug: deckSlug, title: `${input.title} — Flashcards`, lessonId: lesson.id, createdBy: input.createdBy })
    .returning();
  if (input.vocab.length > 0) {
    await db.insert(cards).values(
      input.vocab.map((v, i) => ({ deckId: deck.id, front: v.word, back: v.meaning, order: i })),
    );
  }

  return { lesson, deck };
}

/** Danh sách bài viết chờ chấm (join tên + màu avatar học sinh). */
export async function getSubmissionsForTeacher() {
  const rows = await db
    .select({
      id: submissions.id,
      lessonTitle: submissions.lessonTitle,
      prompt: submissions.prompt,
      text: submissions.text,
      words: submissions.words,
      status: submissions.status,
      score: submissions.score,
      comment: submissions.comment,
      submittedAt: submissions.submittedAt,
      student: users.name,
      avatarColor: users.avatarColor,
    })
    .from(submissions)
    .innerJoin(users, eq(users.id, submissions.userId))
    .orderBy(desc(submissions.createdAt));
  return rows;
}

/** Chấm bài: cập nhật điểm + nhận xét + chuyển trạng thái graded. */
export async function gradeSubmission(id: string, score: number, comment: string) {
  const [row] = await db
    .update(submissions)
    .set({ score, comment, status: "graded" })
    .where(eq(submissions.id, id))
    .returning();
  return row;
}

/** Thống kê bảng điều khiển giáo viên từ DB thật. */
export async function getTeacherStats() {
  const [{ c: activeStudents }] = await db
    .select({ c: sql<number>`count(*)::int` })
    .from(users)
    .where(eq(users.role, "student"));

  const [{ c: pendingGrading }] = await db
    .select({ c: sql<number>`count(*)::int` })
    .from(submissions)
    .where(eq(submissions.status, "submitted"));

  const [{ total, graded }] = await db
    .select({
      total: sql<number>`count(*)::int`,
      graded: sql<number>`count(*) filter (where status = 'graded')::int`,
    })
    .from(attempts);

  const [statsRes] = await db
    .select({
      totalWordsLearned: sql<number>`coalesce(sum(${userStats.wordsLearned}), 0)::int`,
      avgStreak: sql<number>`coalesce(round(avg(${userStats.streak})), 0)::int`,
      totalXp: sql<number>`coalesce(sum(${userStats.xp}), 0)::int`,
    })
    .from(userStats);

  const completionRate = total ? Math.round((graded / total) * 100) : 0;
  return {
    activeStudents,
    pendingGrading,
    completionRate,
    totalWordsLearned: statsRes?.totalWordsLearned ?? 0,
    avgStreak: statsRes?.avgStreak ?? 0,
    totalXp: statsRes?.totalXp ?? 0,
  };
}

/** Ma trận tiến độ: học sinh (hàng) × bài tập (cột) theo bảng attempts thật. */
export async function getProgressMatrix() {
  const studentRows = await db
    .select({ id: users.id, name: users.name })
    .from(users)
    .where(eq(users.role, "student"))
    .orderBy(users.name);

  const assignRows = await db
    .select({ id: assignments.id, title: assignments.title })
    .from(assignments)
    .orderBy(assignments.createdAt);

  if (studentRows.length === 0 || assignRows.length === 0) {
    return {
      students: studentRows.map((s) => s.name),
      assignments: assignRows.map((a) => a.title),
      matrix: studentRows.map(() => [] as MatrixStatus[]),
    };
  }

  const attRows = await db
    .select({ userId: attempts.userId, assignmentId: attempts.assignmentId, status: attempts.status })
    .from(attempts);

  const map = new Map<string, Map<string, string>>();
  for (const a of attRows) {
    if (!a.assignmentId) continue;
    if (!map.has(a.userId)) map.set(a.userId, new Map());
    map.get(a.userId)!.set(a.assignmentId, a.status);
  }

  const matrix = studentRows.map((s) =>
    assignRows.map((a) => (map.get(s.id)?.get(a.id) as MatrixStatus) ?? "none"),
  );

  return {
    students: studentRows.map((s) => s.name),
    assignments: assignRows.map((a) => a.title),
    matrix,
  };
}

/** Danh sách bài học (cho form giao bài). */
export async function getLessonsForSelect() {
  return db.select({ id: lessons.id, title: lessons.title }).from(lessons).orderBy(lessons.createdAt);
}

/** Danh sách bộ flashcard (cho form giao bài loại deck). */
export async function getDecksForSelect() {
  return db.select({ id: decks.id, title: decks.title }).from(decks).orderBy(decks.createdAt);
}

/** Học sinh nộp bài viết vào CSDL */
export async function submitWriting(input: {
  userId: string;
  assignmentId?: string | null;
  lessonTitle: string;
  prompt: string;
  text: string;
  words: number;
}) {
  const isUuid = input.assignmentId
    ? /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(input.assignmentId)
    : false;
  const validAssignmentId = isUuid ? input.assignmentId : null;

  const [sub] = await db
    .insert(submissions)
    .values({
      userId: input.userId,
      assignmentId: validAssignmentId,
      lessonTitle: input.lessonTitle,
      prompt: input.prompt,
      text: input.text,
      words: input.words,
      status: "submitted",
      submittedAt: "Vừa xong",
    })
    .returning();

  if (validAssignmentId) {
    const existingAttempt = await db
      .select({ id: attempts.id })
      .from(attempts)
      .where(and(eq(attempts.userId, input.userId), eq(attempts.assignmentId, validAssignmentId)))
      .limit(1);

    if (existingAttempt.length === 0) {
      await db.insert(attempts).values({
        userId: input.userId,
        assignmentId: validAssignmentId,
        status: "submitted",
        score: 0,
        total: 100,
      });
    } else {
      await db
        .update(attempts)
        .set({ status: "submitted" })
        .where(eq(attempts.id, existingAttempt[0].id));
    }
  }

  return sub;
}

/** Lấy danh sách bài nộp của học sinh (kèm điểm số và nhận xét từ giáo viên) */
export async function getStudentSubmissions(userId: string) {
  const rows = await db
    .select({
      id: submissions.id,
      lessonTitle: submissions.lessonTitle,
      prompt: submissions.prompt,
      text: submissions.text,
      words: submissions.words,
      status: submissions.status,
      score: submissions.score,
      comment: submissions.comment,
      submittedAt: submissions.submittedAt,
      createdAt: submissions.createdAt,
    })
    .from(submissions)
    .where(eq(submissions.userId, userId))
    .orderBy(desc(submissions.createdAt));
  return rows;
}

/** Ghi nhận hoạt động học tập hôm nay vào bảng daily_activity */
export async function recordDailyActivity(input: {
  userId: string;
  minutes?: number;
  xp?: number;
}) {
  const now = new Date();
  const dayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const minutesToAdd = input.minutes ?? 1;
  const xpToAdd = input.xp ?? 0;

  const existing = await db
    .select()
    .from(dailyActivity)
    .where(and(eq(dailyActivity.userId, input.userId), eq(dailyActivity.day, dayStr)))
    .limit(1);

  if (existing.length === 0) {
    await db.insert(dailyActivity).values({
      userId: input.userId,
      day: dayStr,
      minutes: minutesToAdd,
      xp: xpToAdd,
    });
  } else {
    await db
      .update(dailyActivity)
      .set({
        minutes: (existing[0].minutes ?? 0) + minutesToAdd,
        xp: (existing[0].xp ?? 0) + xpToAdd,
      })
      .where(eq(dailyActivity.id, existing[0].id));
  }
}

/** Lấy biểu đồ hoạt động 7 ngày gần nhất của học sinh từ database thật */
export async function getUserWeeklyActivity(userId: string) {
  const days: { day: string; date: string; minutes: number; xp: number }[] = [];
  const DAY_LABELS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const dateStr = d.toISOString().slice(0, 10);
    const dayLabel = DAY_LABELS[d.getDay()];
    days.push({ day: dayLabel, date: dateStr, minutes: 0, xp: 0 });
  }

  const rows = await db
    .select()
    .from(dailyActivity)
    .where(eq(dailyActivity.userId, userId));

  const rowMap = new Map<string, typeof rows[0]>();
  for (const r of rows) {
    rowMap.set(r.day, r);
  }

  return days.map((d) => {
    const r = rowMap.get(d.date);
    return {
      day: d.day,
      date: d.date,
      minutes: r?.minutes ?? 0,
      xp: r?.xp ?? 0,
    };
  });
}

/** Đồng bộ XP, chuỗi ngày học và tiến độ bài học của học sinh lên CSDL */
export async function syncUserStats(input: {
  userId: string;
  xp?: number;
  streak?: number;
  wordsLearned?: number;
  lessonSlug?: string;
  percent?: number;
  minutes?: number;
}) {
  const current = await db
    .select()
    .from(userStats)
    .where(eq(userStats.userId, input.userId))
    .limit(1);

  const incomingStreak = input.streak ?? (input.wordsLearned || input.xp ? 1 : 0);
  const currentStreak = current[0]?.streak ?? 0;
  const newStreak = Math.max(incomingStreak, currentStreak);

  const newXp = Math.max(input.xp ?? 0, current[0]?.xp ?? 0);
  const newWords = Math.max(input.wordsLearned ?? 0, current[0]?.wordsLearned ?? 0);
  const newLevel = Math.max(1, Math.floor(newXp / 600) + 1);

  if (current.length === 0) {
    await db.insert(userStats).values({
      userId: input.userId,
      xp: newXp,
      streak: newStreak,
      wordsLearned: newWords,
      level: newLevel,
    });
  } else {
    await db
      .update(userStats)
      .set({
        xp: newXp,
        streak: newStreak,
        wordsLearned: newWords,
        level: newLevel,
        updatedAt: new Date(),
      })
      .where(eq(userStats.userId, input.userId));
  }

  // Tự động ghi nhận hoạt động vào daily_activity
  await recordDailyActivity({
    userId: input.userId,
    minutes: input.minutes ?? 2,
    xp: input.xp ? Math.min(input.xp, 50) : 10,
  }).catch(() => {});

  if (input.lessonSlug) {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(input.lessonSlug);
    const condition = isUuid
      ? or(eq(lessons.slug, input.lessonSlug), eq(lessons.id, input.lessonSlug))
      : eq(lessons.slug, input.lessonSlug);

    const l = await db
      .select({ id: lessons.id })
      .from(lessons)
      .where(condition)
      .limit(1);

    if (l[0]) {
      const existingProg = await db
        .select()
        .from(lessonProgress)
        .where(
          and(
            eq(lessonProgress.userId, input.userId),
            eq(lessonProgress.lessonId, l[0].id)
          )
        )
        .limit(1);

      const pct = Math.min(100, Math.max(input.percent ?? 100, existingProg[0]?.percent ?? 0));
      if (existingProg.length === 0) {
        await db.insert(lessonProgress).values({
          userId: input.userId,
          lessonId: l[0].id,
          percent: pct,
        });
      } else {
        await db
          .update(lessonProgress)
          .set({ percent: pct, updatedAt: new Date() })
          .where(
            and(
              eq(lessonProgress.userId, input.userId),
              eq(lessonProgress.lessonId, l[0].id)
            )
          );
      }
    }
  }

  return { xp: newXp, streak: newStreak, wordsLearned: newWords, level: newLevel };
}

/** Danh sách học sinh đầy đủ kèm số liệu học tập (cho màn hình Giáo viên) */
export async function getTeacherStudentsWithStats() {
  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      avatarColor: users.avatarColor,
      createdAt: users.createdAt,
      xp: userStats.xp,
      streak: userStats.streak,
      wordsLearned: userStats.wordsLearned,
      level: userStats.level,
    })
    .from(users)
    .leftJoin(userStats, eq(userStats.userId, users.id))
    .where(eq(users.role, "student"))
    .orderBy(desc(userStats.xp), desc(users.createdAt));

  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    avatarColor: r.avatarColor,
    createdAt: r.createdAt,
    xp: r.xp ?? 0,
    streak: r.streak ?? 0,
    wordsLearned: r.wordsLearned ?? 0,
    level: r.level ?? 1,
  }));
}

