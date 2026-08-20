import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getSubmissionsForTeacher } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Danh sách bài viết chờ chấm (giáo viên). */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được xem" }, { status: 403 });

    const submissions = await getSubmissionsForTeacher();
    return NextResponse.json({ ok: true, submissions });
  } catch (e) {
    console.error("List submissions error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
