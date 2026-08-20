import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { verifyPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

/* Đăng nhập email + mật khẩu. Trả { ok, role } khi thành công. */
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as
      | { email?: unknown; password?: unknown }
      | null;

    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json({ error: "Thiếu email hoặc mật khẩu" }, { status: 400 });
    }

    const rows = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    const user = rows[0];

    // Không user HOẶC chưa đặt mật khẩu (demo) → từ chối.
    if (!user || !user.password || !verifyPassword(password, user.password)) {
      return NextResponse.json({ error: "Sai email hoặc mật khẩu" }, { status: 401 });
    }

    await createSession(user.id, user.role);
    return NextResponse.json({ ok: true, role: user.role });
  } catch (e) {
    console.error("Login error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ, thử lại sau" }, { status: 500 });
  }
}
