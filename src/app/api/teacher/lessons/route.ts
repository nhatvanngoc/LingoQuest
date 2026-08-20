import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { createLessonWithVocab } from "@/db/queries";

export const dynamic = "force-dynamic";

/** Rút YouTube ID từ nhiều dạng link. */
function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
}

/** "1:05" → 65 (giây). */
function timeToSeconds(t: string): number {
  const parts = t.split(":").map((x) => parseInt(x, 10));
  if (parts.some((n) => Number.isNaN(n))) return 0;
  return parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0];
}

/* Đăng bài học video + từ vựng (giáo viên). */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được đăng bài" }, { status: 403 });

    const body = (await req.json().catch(() => null)) as {
      title?: unknown;
      url?: unknown;
      vocab?: unknown;
    } | null;

    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const url = typeof body?.url === "string" ? body.url : "";
    const rawVocab = Array.isArray(body?.vocab) ? body!.vocab : [];

    if (!title) return NextResponse.json({ error: "Thiếu tiêu đề bài học" }, { status: 400 });
    const youtubeId = extractYouTubeId(url);
    if (!youtubeId) return NextResponse.json({ error: "Link YouTube không hợp lệ" }, { status: 400 });

    const vocab = (rawVocab as unknown[])
      .map((v) => v as { word?: unknown; meaning?: unknown; time?: unknown })
      .filter((v) => typeof v.word === "string" && typeof v.meaning === "string")
      .map((v) => ({
        word: (v.word as string).trim(),
        meaning: (v.meaning as string).trim(),
        start: timeToSeconds(typeof v.time === "string" ? v.time : "0:00"),
      }));

    const { lesson, deck } = await createLessonWithVocab({
      title,
      youtubeId,
      vocab,
      createdBy: user.id,
    });

    return NextResponse.json({ ok: true, id: lesson.id, deckId: deck.id });
  } catch (e) {
    console.error("Create lesson error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
