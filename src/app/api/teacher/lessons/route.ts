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

/* Lấy danh sách bài học video (giáo viên) */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới có quyền xem" }, { status: 403 });

    const { getTeacherLessons } = await import("@/db/queries");
    const list = await getTeacherLessons();
    return NextResponse.json({ ok: true, lessons: list });
  } catch (e) {
    console.error("Get teacher lessons error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}

/* Xóa video bài học trực tiếp trên web (không cần vào SQL) */
export async function DELETE(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới có quyền xóa" }, { status: 403 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Thiếu ID bài học cần xóa" }, { status: 400 });

    const { deleteLesson } = await import("@/db/queries");
    const deleted = await deleteLesson(id);
    return NextResponse.json({ ok: true, deleted });
  } catch (e) {
    console.error("Delete lesson error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi xóa bài học" }, { status: 500 });
  }
}

/* Bật / tắt ẩn hiện bài học video (published <-> hidden) */
export async function PATCH(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới có quyền thay đổi trạng thái" }, { status: 403 });

    const body = await req.json().catch(() => ({}));
    const { id, status } = body;
    if (!id) return NextResponse.json({ error: "Thiếu ID bài học" }, { status: 400 });

    const { toggleLessonStatus } = await import("@/db/queries");
    const updated = await toggleLessonStatus(id, status);
    return NextResponse.json({ ok: true, lesson: updated });
  } catch (e) {
    console.error("Toggle lesson status error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi cập nhật trạng thái bài học" }, { status: 500 });
  }
}

