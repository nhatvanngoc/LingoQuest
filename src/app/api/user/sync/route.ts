import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { syncUserStats } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Đồng bộ XP, chuỗi streak và tiến độ bài học của học sinh lên PostgreSQL */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const body = (await req.json().catch(() => null)) as {
      xp?: number;
      streak?: number;
      wordsLearned?: number;
      lessonSlug?: string;
      percent?: number;
    } | null;

    const stats = await syncUserStats({
      userId: user.id,
      xp: typeof body?.xp === "number" ? body.xp : undefined,
      streak: typeof body?.streak === "number" ? body.streak : undefined,
      wordsLearned: typeof body?.wordsLearned === "number" ? body.wordsLearned : undefined,
      lessonSlug: typeof body?.lessonSlug === "string" ? body.lessonSlug : undefined,
      percent: typeof body?.percent === "number" ? body.percent : undefined,
    });

    return NextResponse.json({ ok: true, stats });
  } catch (e) {
    console.error("Sync user stats error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi đồng bộ tiến độ" }, { status: 500 });
  }
}
