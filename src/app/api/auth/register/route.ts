import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, userStats, classMembers, classes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AVATAR_COLORS = [
  "#2563EB", // Blue
  "#7C3AED", // Violet
  "#059669", // Emerald
  "#D97706", // Amber
  "#DB2777", // Pink
  "#4F46E5", // Indigo
  "#0891B2", // Cyan
];

/* ============================================================
   Đăng ký tài khoản người dùng mới (Production-Ready).
   - BẮT BUỘC role luôn là "student" (học sinh).
   - Tự động khởi tạo user_stats (xp: 0, streak: 0, level: 1).
   - Tự động gắn vào lớp học mặc định nếu có.
   - Tạo session đăng nhập an toàn và trả về { ok: true, role: "student" }.
   ============================================================ */

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { name?: unknown; email?: unknown; password?: unknown }
      | null;

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const emailRaw = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";

    // 1. Validate Họ tên: từ 2 đến 120 ký tự
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Họ và tên phải có ít nhất 2 ký tự" }, { status: 400 });
    }
    if (name.length > 120) {
      return NextResponse.json({ error: "Họ và tên không được vượt quá 120 ký tự" }, { status: 400 });
    }

    // 2. Validate định dạng Email
    if (!emailRaw || !EMAIL_RE.test(emailRaw)) {
      return NextResponse.json({ error: "Địa chỉ email không đúng định dạng" }, { status: 400 });
    }

    // 3. Validate Mật khẩu: tối thiểu 6 ký tự
    if (!password || password.length < 6) {
      return NextResponse.json({ error: "Mật khẩu phải có ít nhất 6 ký tự" }, { status: 400 });
    }

    // 4. Kiểm tra xem email đã tồn tại trong CSDL chưa
    const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, emailRaw)).limit(1);
    if (existing.length > 0) {
      return NextResponse.json({ error: "Email này đã được sử dụng. Vui lòng đăng nhập hoặc dùng email khác" }, { status: 409 });
    }

    // 5. Hash mật khẩu an toàn qua scrypt
    const hashed = hashPassword(password);

    // 6. Chọn màu avatar ngẫu nhiên
    const avatarColor = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

    // 7. Thêm học sinh vào bảng users — BẢO MẬT: BẮT BUỘC ROLE LÀ "student"
    const [created] = await db
      .insert(users)
      .values({
        name,
        email: emailRaw,
        role: "student",
        password: hashed,
        avatarColor,
      })
      .returning();

    if (!created) {
      return NextResponse.json({ error: "Lỗi hệ thống khi tạo tài khoản, vui lòng thử lại sau" }, { status: 500 });
    }

    // 8. Khởi tạo bảng thống kê học tập cho học sinh
    try {
      await db.insert(userStats).values({
        userId: created.id,
        xp: 0,
        streak: 0,
        wordsLearned: 0,
        level: 1,
      });
    } catch (statsErr) {
      console.warn("Failed to init userStats:", statsErr);
    }

    // 9. Tự động thêm vào lớp học chính thức nếu lớp tồn tại
    try {
      const classRow = await db.select({ id: classes.id }).from(classes).limit(1);
      if (classRow.length > 0) {
        await db.insert(classMembers).values({
          classId: classRow[0].id,
          userId: created.id,
        });
      }
    } catch (classErr) {
      console.warn("Failed to add to default class:", classErr);
    }

    // 10. Tạo phiên đăng nhập (session cookie)
    await createSession(created.id, "student");

    // 11. Trả về thành công
    return NextResponse.json({ ok: true, role: "student" }, { status: 201 });
  } catch (e) {
    console.error("Register error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi đăng ký tài khoản, vui lòng thử lại" }, { status: 500 });
  }
}
