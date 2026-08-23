import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { hashPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";
import type { Role } from "@/lib/types";

export const dynamic = "force-dynamic";

const ALLOWED_ROLES: Role[] = ["student", "teacher", "pending"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Đăng ký tài khoản mới. Trả { ok, role } khi thành công. */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { name?: unknown; email?: unknown; password?: unknown; role?: unknown }
      | null;

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const emailRaw = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";
    const roleRaw = typeof body?.role === "string" ? body.role.trim().toLowerCase() : "";

    // Validate name: 2-120 chars
    if (!name || name.length < 2 || name.length > 120) {
      return NextResponse.json({ error: "Tên phải từ 2 đến 120 ký tự" }, { status: 400 });
    }

    // Validate email format
    if (!emailRaw || !EMAIL_RE.test(emailRaw)) {
      return NextResponse.json({ error: "Email không hợp lệ" }, { status: 400 });
    }

    // Validate password >= 6 chars
    if (!password || password.length < 6) {
      return NextResponse.json({ error: "Mật khẩu phải có ít nhất 6 ký tự" }, { status: 400 });
    }

    // Validate role — default student if missing/invalid
    const role: Role = (ALLOWED_ROLES as string[]).includes(roleRaw) ? (roleRaw as Role) : "student";

    // Trim and lower-case email already done; check if exists
    const existing = await db.select().from(users).where(eq(users.email, emailRaw)).limit(1);
    if (existing[0]) {
      return NextResponse.json({ error: "Email đã được sử dụng" }, { status: 409 });
    }

    // Hash password
    const hashed = hashPassword(password);

    // Insert user
    const [created] = await db
      .insert(users)
      .values({
        name,
        email: emailRaw,
        role,
        password: hashed,
        avatarColor: "#2563EB",
      })
      .returning();

    if (!created) {
      return NextResponse.json({ error: "Lỗi máy chủ, thử lại sau" }, { status: 500 });
    }

    await createSession(created.id, created.role as Role);

    return NextResponse.json({ ok: true, role: created.role }, { status: 201 });
  } catch (e) {
    console.error("Register error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ, thử lại sau" }, { status: 500 });
  }
}
