import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getTeacherStats, getProgressMatrix } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Tổng quan bảng điều khiển giáo viên: thống kê + ma trận tiến độ. */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được xem" }, { status: 403 });

    const [stats, matrix] = await Promise.all([getTeacherStats(), getProgressMatrix()]);
    return NextResponse.json({ ok: true, stats, matrix });
  } catch (e) {
    console.error("Teacher overview error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
