import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { gradeSubmission } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Chấm bài viết: cập nhật điểm + nhận xét (giáo viên). */
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được chấm" }, { status: 403 });

    const { id } = await params;
    const body = (await req.json().catch(() => null)) as { score?: unknown; comment?: unknown } | null;
    const score = typeof body?.score === "number" ? body.score : Number(body?.score ?? 0);
    const comment = typeof body?.comment === "string" ? body.comment : "";

    await gradeSubmission(id, score, comment);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Grade submission error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
