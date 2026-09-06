import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { db } from "@/db";
import { lessons, assignments, decks, userStats, vocab } from "@/db/schema";
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
      .select()
      .from(assignments)
      .orderBy(desc(assignments.createdAt))
      .limit(5);

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
      assignments: assignmentRows,
      decks: deckRows,
    });
  } catch (e) {
    console.error("Dashboard overview error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
