import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getTeacherStudentsWithStats } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Lấy danh sách toàn bộ học sinh kèm chỉ số học tập (Giáo viên / Admin) */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }
    if (user.role !== "teacher") {
      return NextResponse.json({ error: "Chỉ giáo viên mới có quyền xem danh sách này" }, { status: 403 });
    }

    const students = await getTeacherStudentsWithStats();
    return NextResponse.json({ ok: true, students });
  } catch (e) {
    console.error("Get teacher students error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
