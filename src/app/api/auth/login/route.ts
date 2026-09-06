import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { verifyPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";
import { seedAdminIfEmpty } from "@/db/queries";

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
      return NextResponse.json({ error: "Vui lòng nhập đầy đủ email và mật khẩu" }, { status: 400 });
    }

    let rows = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    // Nếu đăng nhập bằng email admin nhưng CSDL chưa có -> đảm bảo Admin được khởi tạo
    if (!rows[0] && email === "admin@lingoquest.app") {
      try {
        await seedAdminIfEmpty();
        rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
      } catch {
        // bỏ qua nếu lỗi
      }
    }

    const user = rows[0];

    // Không tồn tại user HOẶC sai mật khẩu -> từ chối
    if (!user || !user.password || !verifyPassword(password, user.password)) {
      return NextResponse.json({ error: "Email hoặc mật khẩu không chính xác" }, { status: 401 });
    }

    await createSession(user.id, user.role);
    return NextResponse.json({ ok: true, role: user.role });
  } catch (e) {
    console.error("Login error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi đăng nhập, vui lòng thử lại" }, { status: 500 });
  }
}
