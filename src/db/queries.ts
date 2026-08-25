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
} from "./schema";
import { and, eq, sql, desc } from "drizzle-orm";
import {
  LESSONS,
  DECKS,
  ASSIGNMENTS,
  USERS as MOCK_USERS,
} from "@/lib/mock/data";
import { hashPassword } from "@/lib/auth/password";
import type { MatrixStatus, Role } from "@/lib/types";

/* ============================================================
   Lớp truy vấn + seed cho LingoQuest.
   - seedIfEmpty(): nạp dữ liệu mẫu vào CSDL (chạy 1 lần nếu trống).
   - getLessonsWithVocab(): danh sách bài học kèm từ vựng.
   - getOverview(): số liệu tổng cho badge trạng thái CSDL.
   ============================================================ */

export type LessonRow = Awaited<ReturnType<typeof getLessonsWithVocab>>[number];

/** Đảm bảo CSDL có đủ dữ liệu mẫu (thêm bài/thẻ thiếu, không ghi đè) */
/** Đảm bảo user demo tồn tại + đặt mật khẩu (idempotent). */
async function ensureUser(mock: (typeof MOCK_USERS)[keyof typeof MOCK_USERS], pw: string) {
  const email = mock.email.toLowerCase();
  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (rows.length > 0) {
    const u = rows[0];
    // Chỉ set mật khẩu nếu demo chưa có (để không ghi đè mật khẩu thật sau này).
    if (!u.password) {
      await db.update(users).set({ password: hashPassword(pw) }).where(eq(users.id, u.id));
    }
    return u;
  }
  const [u] = await db
    .insert(users)
    .values({
      name: mock.name,
      email,
      role: mock.role as Role,
      avatarColor: mock.avatarColor,
      password: hashPassword(pw),
    })
    .returning();
  return u;
}

/** Đảm bảo học sinh thuộc lớp (idempotent). */
async function ensureClassMember(classId: string, userId: string) {
  const rows = await db
    .select()
    .from(classMembers)
    .where(and(eq(classMembers.classId, classId), eq(classMembers.userId, userId)))
    .limit(1);
  if (rows.length === 0) {
    await db.insert(classMembers).values({ classId, userId });
  }
}

export async function seedIfEmpty() {
  const existing = await db.select().from(lessons);
  const seededSlugs = new Set(existing.map((l) => l.slug));

  // --- 3 user demo (teacher / pending / student) + mật khẩu Pass1234 ---
  const teacher = await ensureUser(MOCK_USERS.teacher, "Pass1234");
  await ensureUser(MOCK_USERS.pending, "Pass1234");
  const student = await ensureUser(MOCK_USERS.student, "Pass1234");
  const teacherId = teacher.id;

  // --- Lớp học (1 lớp) + thêm học sinh vào lớp ---
  let classRow = await db.select().from(classes).limit(1);
  let classId: string;
  if (classRow.length === 0) {
    const [cls] = await db
      .insert(classes)
      .values({ name: "Tiếng Anh 10 — 10A1", teacherId })
      .returning();
    classId = cls.id;
  } else {
    classId = classRow[0].id;
  }
  await ensureClassMember(classId, student.id);

  // --- Bài học + từ vựng (slug = id của mock; bỏ qua bài đã có) ---
  for (const l of LESSONS) {
    if (seededSlugs.has(l.id)) continue;
    const [lesson] = await db
      .insert(lessons)
      .values({
        slug: l.id,
        title: l.title,
        titleVi: l.titleVi,
        description: l.description,
        youtubeId: l.youtubeId,
        thumbnail: l.thumbnail,
        durationLabel: l.durationLabel,
        createdBy: teacherId,
      })
      .returning();
    if (l.vocab.length > 0) {
      await db.insert(vocab).values(
        l.vocab.map((v, i) => ({
          lessonId: lesson.id,
          word: v.word,
          phonetic: v.phonetic,
          meaning: v.meaning,
          example: v.example,
          exampleVi: v.exampleVi,
          start: v.start,
          order: i,
        })),
      );
    }
  }

  // --- Bộ flashcard + thẻ (slug = id mock; bỏ qua bộ đã có) ---
  const lessonRows = await db.select().from(lessons);
  const existingDecks = await db.select().from(decks);
  const seededDeckSlugs = new Set(existingDecks.map((d) => d.slug));
  for (const d of DECKS) {
    if (seededDeckSlugs.has(d.id)) continue;
    const linked = lessonRows.find((lr) => lr.slug === d.id.replace("deck", "lesson"));
    const [deck] = await db
      .insert(decks)
      .values({ slug: d.id, title: d.title, lessonId: linked?.id ?? null, createdBy: teacherId })
      .returning();
    if (d.cards.length > 0) {
      await db.insert(cards).values(
        d.cards.map((c, i) => ({
          deckId: deck.id,
          front: c.front,
          phonetic: c.phonetic,
          back: c.back,
          example: c.example,
          exampleVi: c.exampleVi,
          order: i,
        })),
      );
    }
  }

  // --- Bài tập được giao: chỉ seed khi chưa có (tránh trùng lặp) ---
  const existingAssignments = await db.select().from(assignments);
  if (existingAssignments.length === 0) {
    const deckRows = await db.select().from(decks);
    for (const a of ASSIGNMENTS) {
      const linkedDeck = a.type === "deck" ? deckRows[0] : undefined;
      await db.insert(assignments).values({
        title: a.title,
        type: a.type,
        lessonId: lessonRows[0]?.id,
        deckId: linkedDeck?.id,
        classId,
        dueAt: a.status === "overdue" ? new Date(Date.now() - 86400000) : new Date(Date.now() + 3 * 86400000),
        createdBy: teacherId,
      });
    }
  }

  // --- Thống kê học sinh (xp/streak...) ---
  const stats = await db.select().from(userStats).where(eq(userStats.userId, student.id)).limit(1);
  if (stats.length === 0) {
    await db.insert(userStats).values({
      userId: student.id,
      xp: 2480,
      streak: 12,
      wordsLearned: 120,
      level: 7,
    });
  }

  // --- Tiến độ bài học của học sinh ---
  const progress = await db
    .select()
    .from(lessonProgress)
    .where(eq(lessonProgress.userId, student.id))
    .limit(1);
  if (progress.length === 0 && lessonRows.length > 0) {
    await db.insert(lessonProgress).values(
      lessonRows.map((l, i) => ({
        userId: student.id,
        lessonId: l.id,
        percent: [100, 60, 0, 0, 0][i] ?? 0,
      })),
    );
  }

  // --- Bài viết chờ chấm (submissions) ---
  const subs = await db.select().from(submissions).where(eq(submissions.userId, student.id)).limit(1);
  if (subs.length === 0) {
    const firstAssign = await db.select().from(assignments).limit(1);
    await db.insert(submissions).values([
      {
        userId: student.id,
        assignmentId: firstAssign[0]?.id ?? null,
        lessonTitle: "Writing Practice",
        prompt: "Kể về kỳ nghỉ hè của bạn (tối thiểu 80 từ)",
        text:
          "Last summer, I had a wonderful holiday with my family in Da Nang. First of all, we went to My Khe beach and swam in the sea. The water was very clear and the weather was relaxing. After that, we tried delicious seafood at a restaurant near the beach. My favorite dish was grilled squid. In the evening, we walked along the bridge and took many photos. Finally, I felt a bit exhausted but very happy. It was an amazing adventure that I will never forget.",
        words: 84,
        status: "submitted",
        submittedAt: "2 giờ trước",
      },
      {
        userId: student.id,
        assignmentId: firstAssign[0]?.id ?? null,
        lessonTitle: "Writing Practice",
        prompt: "Miêu tả một người bạn thân",
        text:
          "My best friend is Linh. We have known each other since primary school. She is tall and has long black hair. Linh is very kind and always helps me with my homework. After school, we usually hang out at the park and ride our bicycles. She is also funny and makes me laugh every day. I hope we will be friends forever.",
        words: 62,
        status: "submitted",
        submittedAt: "5 giờ trước",
      },
    ]);
  }

  // --- Lượt làm bài (attempts) cho ma trận tiến độ ---
  const att = await db.select().from(attempts).where(eq(attempts.userId, student.id)).limit(1);
  if (att.length === 0) {
    const assigns = await db.select().from(assignments);
    const seq: Array<{ status: "none" | "doing" | "submitted" | "graded"; score: number }> = [
      { status: "graded", score: 90 },
      { status: "submitted", score: 0 },
      { status: "doing", score: 0 },
      { status: "none", score: 0 },
    ];
    for (const a of assigns) {
      const s = seq[assigns.indexOf(a) % seq.length];
      await db.insert(attempts).values({
        userId: student.id,
        assignmentId: a.id,
        status: s.status,
        score: s.score,
        total: 100,
      });
    }
  }

  return { seeded: true, count: LESSONS.length };
}

/** Lấy danh sách bài học + số từ vựng mỗi bài */
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

/** Tổng quan số liệu CSDL (cho badge trạng thái) */
export async function getOverview() {
  const [l] = await db.select({ c: sql<number>`count(*)::int` }).from(lessons);
  const [v] = await db.select({ c: sql<number>`count(*)::int` }).from(vocab);
  const [d] = await db.select({ c: sql<number>`count(*)::int` }).from(decks);
  const [u] = await db.select({ c: sql<number>`count(*)::int` }).from(users);
  const [a] = await db.select({ c: sql<number>`count(*)::int` }).from(assignments);
  return { lessons: l?.c ?? 0, vocab: v?.c ?? 0, decks: d?.c ?? 0, users: u?.c ?? 0, assignments: a?.c ?? 0 };
}

/** Lấy lớp đầu tiên của hệ thống (template 1 lớp) */
export async function getFirstClassId() {
  const row = await db.select({ id: classes.id }).from(classes).limit(1);
  return row[0]?.id ?? null;
}

/** Danh sách học sinh do giáo viên tạo và thêm vào lớp */
export async function getClassStudents() {
  const classId = await getFirstClassId();
  if (!classId) return [];
  const rows = await db
    .select({ id: users.id, name: users.name, email: users.email, avatarColor: users.avatarColor })
    .from(classMembers)
    .innerJoin(users, eq(users.id, classMembers.userId))
    .where(and(eq(classMembers.classId, classId), eq(users.role, "student")));
  return rows;
}

/** Bảng xếp hạng tuần (từ user_stats + class_members); rỗng nếu chưa có học sinh */
export async function getWeeklyLeaderboard() {
  const classId = await getFirstClassId();
  if (!classId) return [];
  const rows = await db
    .select({ id: users.id, name: users.name, xp: userStats.xp })
    .from(classMembers)
    .innerJoin(users, eq(users.id, classMembers.userId))
    .leftJoin(userStats, eq(userStats.userId, users.id))
    .where(and(eq(classMembers.classId, classId), eq(users.role, "student")))
    .orderBy(desc(userStats.xp), users.name);
  return rows.map((r) => ({ id: r.id, name: r.name, xp: r.xp ?? 0 }));
}

/* ============================================================
   Hàm dành riêng Giáo viên — tạo / chấm bài, thống kê, ma trận.
   ============================================================ */

/** Tạo bài tập được giao (gắn vào lớp đầu tiên của hệ thống). */
export async function createAssignment(input: {
  title: string;
  type: "exercise" | "deck";
  lessonId?: string | null;
  deckId?: string | null;
  dueAt?: Date | null;
}) {
  const classId = await getFirstClassId();
  const teacherRow = await db.select({ id: users.id }).from(users).where(eq(users.role, "teacher")).limit(1);
  const [row] = await db
    .insert(assignments)
    .values({
      title: input.title,
      type: input.type,
      lessonId: input.lessonId ?? null,
      deckId: input.deckId ?? null,
      classId: classId ?? null,
      dueAt: input.dueAt ?? null,
      createdBy: teacherRow[0]?.id ?? null,
    })
    .returning();
  return row;
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

/** Thống kê bảng điều khiển giáo viên. */
export async function getTeacherStats() {
  const classId = await getFirstClassId();
  if (!classId) return { activeStudents: 0, pendingGrading: 0, completionRate: 0 };

  const [{ c: activeStudents }] = await db
    .select({ c: sql<number>`count(*)::int` })
    .from(classMembers)
    .innerJoin(users, eq(users.id, classMembers.userId))
    .where(and(eq(classMembers.classId, classId), eq(users.role, "student")));

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

  const completionRate = total ? Math.round((graded / total) * 100) : 0;
  return { activeStudents, pendingGrading, completionRate };
}

/** Ma trận tiến độ: học sinh (hàng) × bài tập (cột) theo bảng attempts. */
export async function getProgressMatrix() {
  const classId = await getFirstClassId();
  if (!classId) return { students: [], assignments: [], matrix: [] as MatrixStatus[][] };

  const studentRows = await db
    .select({ id: users.id, name: users.name })
    .from(classMembers)
    .innerJoin(users, eq(users.id, classMembers.userId))
    .where(eq(users.role, "student"))
    .orderBy(users.name);

  const assignRows = await db
    .select({ id: assignments.id, title: assignments.title })
    .from(assignments)
    .orderBy(assignments.createdAt);

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

