import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { verifyPassword } from "@/lib/auth/password";
import { createSession } from "@/lib/auth/session";
import { seedIfEmpty } from "@/db/queries";

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

    let rows = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    // CSDL mới tinh chưa có user nào (seed chỉ chạy lưới ở vài API classroom) →
    // mọi lượt đăng nhập đầu đều 401 vĩnh viễn. Tự seed rồi truy vấn lại 1 lần.
    if (!rows[0]) {
      try {
        await seedIfEmpty();
        rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
      } catch {
        // bỏ qua — rơi về nhánh sai mật khẩu bên dưới
      }
    }
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
