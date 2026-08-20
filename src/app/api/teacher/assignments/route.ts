import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { createAssignment } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Giao bài tập mới (giáo viên). */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được giao bài" }, { status: 403 });

    const body = (await req.json().catch(() => null)) as {
      title?: unknown;
      type?: unknown;
      lessonId?: unknown;
      deckId?: unknown;
      dueAt?: unknown;
    } | null;

    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const type = body?.type === "deck" ? "deck" : "exercise";
    if (!title) return NextResponse.json({ error: "Thiếu tiêu đề bài tập" }, { status: 400 });

    const row = await createAssignment({
      title,
      type,
      lessonId: typeof body?.lessonId === "string" ? body.lessonId : null,
      deckId: typeof body?.deckId === "string" ? body.deckId : null,
      dueAt: typeof body?.dueAt === "string" && body.dueAt ? new Date(body.dueAt) : null,
    });
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error("Create assignment error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
