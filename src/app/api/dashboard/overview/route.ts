import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { db } from "@/db";
import { lessons, assignments, decks, userStats, vocab, attempts } from "@/db/schema";
import { eq, sql, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    // Lấy thống kê của user hiện tại
    const statsRows = await db
      .select()
      .from(userStats)
      .where(eq(userStats.userId, user.id))
      .limit(1);

    const stats = statsRows[0] ?? {
      xp: 0,
      streak: 0,
      wordsLearned: 0,
      level: 1,
    };

    // Lấy bài học mới nhất
    const lessonRows = await db
      .select()
      .from(lessons)
      .orderBy(desc(lessons.createdAt))
      .limit(1);

    let recentLesson = null;
    if (lessonRows[0]) {
      const l = lessonRows[0];
      const [{ count }] = await db
        .select({ count: sql<number>`count(*)::int` })
        .from(vocab)
        .where(eq(vocab.lessonId, l.id));

      recentLesson = {
        id: l.id,
        slug: l.slug,
        title: l.title,
        titleVi: l.titleVi ?? "",
        description: l.description ?? "",
        thumbnail: l.thumbnail ?? "",
        durationLabel: l.durationLabel ?? "",
        vocabCount: count ?? 0,
        progress: 0,
      };
    }

    // Lấy bài tập được giao
    const assignmentRows = await db
      .select({
        id: assignments.id,
        title: assignments.title,
        type: assignments.type,
        lessonId: assignments.lessonId,
        deckId: assignments.deckId,
        description: assignments.description,
        prompt: assignments.prompt,
        dueAt: assignments.dueAt,
        createdAt: assignments.createdAt,
        lessonTitle: lessons.title,
      })
      .from(assignments)
      .leftJoin(lessons, eq(lessons.id, assignments.lessonId))
      .orderBy(desc(assignments.createdAt))
      .limit(5);

    // Lấy attempts của user cho các assignments này
    const attemptRows = assignmentRows.length > 0
      ? await db
          .select({
            assignmentId: attempts.assignmentId,
            status: attempts.status,
            score: attempts.score,
            total: attempts.total,
          })
          .from(attempts)
          .where(eq(attempts.userId, user.id))
      : [];

    const attemptMap = new Map<string, typeof attemptRows[0]>();
    for (const att of attemptRows) {
      if (att.assignmentId) attemptMap.set(att.assignmentId, att);
    }

    const now = Date.now();
    const formattedAssignments = assignmentRows.map((a) => {
      const att = attemptMap.get(a.id);
      const isDone = att && (att.status === "graded" || att.status === "submitted");

      let status: "ontrack" | "due" | "overdue" | "done" = "ontrack";
      let dueLabel = "Không có hạn";

      if (isDone) {
        status = "done";
        dueLabel = "Đã nộp";
      } else if (a.dueAt) {
        const dueTime = new Date(a.dueAt).getTime();
        const diffHours = (dueTime - now) / (1000 * 60 * 60);
        const dateStr = new Date(a.dueAt).toLocaleDateString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
        });

        if (diffHours < 0) {
          status = "overdue";
          dueLabel = `Quá hạn (${dateStr})`;
        } else if (diffHours <= 48) {
          status = "due";
          dueLabel = `Hết hạn ${dateStr}`;
        } else {
          status = "ontrack";
          dueLabel = `Hạn: ${dateStr}`;
        }
      }

      return {
        ...a,
        status,
        progress: isDone ? 100 : 0,
        dueLabel,
        lessonTitle: a.lessonTitle || a.description || "Bài tập rèn luyện",
      };
    });

    // Lấy danh sách bộ flashcard
    const deckRows = await db
      .select()
      .from(decks)
      .orderBy(desc(decks.createdAt))
      .limit(5);

    return NextResponse.json({
      ok: true,
      user,
      stats: {
        xp: stats.xp ?? 0,
        streak: stats.streak ?? 0,
        wordsLearned: stats.wordsLearned ?? 0,
        level: stats.level ?? 1,
      },
      recentLesson,
      assignments: formattedAssignments,
      decks: deckRows,
    });
  } catch (e) {
    console.error("Dashboard overview error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
