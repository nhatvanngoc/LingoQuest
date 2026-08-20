import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { Role } from "@/lib/types";
import { createSessionToken, verifySessionToken } from "./token";

/* ============================================================
   session.ts — Quản lý phiên đăng nhập (SERVER ONLY, KHÔNG "use client").
   - Token ký bằng Web Crypto (xem token.ts), chứa uid + role.
   - Cookie httpOnly "lq_session".
   - Dùng node:crypto CHỈ ở password.ts (login route, Node runtime).
   ============================================================ */

const COOKIE_NAME = "lq_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 ngày

/** Người dùng cấp cho client (KHÔNG chứa password). */
export interface SessionUser {
  id: string;
  name: string;
  email: string;
  avatarColor: string;
  role: Role;
  className?: string;
}

/** Tạo phiên: ghi cookie httpOnly (gọi trong Route Handler / Server Action). */
export async function createSession(userId: string, role: Role): Promise<void> {
  const token = await createSessionToken(userId, role);
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

/** Xóa phiên: xoá cookie. */
export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

/** Trả userId từ cookie, hoặc null nếu không có/không hợp lệ. */
export async function getSessionUserId(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return (await verifySessionToken(token))?.uid ?? null;
}

/** Lấy user hiện tại từ DB (KHÔNG gồm password), hoặc null. DB là nguồn chân lý về role. */
export async function getCurrentUser(): Promise<SessionUser | null> {
  try {
    const uid = await getSessionUserId();
    if (!uid) return null;

    const rows = await db.select().from(users).where(eq(users.id, uid)).limit(1);
    const row = rows[0];
    if (!row) return null;

    // Bỏ trường password trước khi đưa xuống client.
    const { password: _password, ...rest } = row;
    void _password;

    return {
      id: rest.id,
      name: rest.name,
      email: rest.email,
      avatarColor: rest.avatarColor,
      role: rest.role as Role,
    };
  } catch {
    // Mock mode - không có DB, trả null để dùng GUEST_USER
    return null;
  }
}

/** Bảo vệ trang: nếu chưa đăng nhập → redirect("/login"). */
export async function requireUser(): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** Bảo vệ trang theo vai trò: sai vai trò → redirect về trang mặc định của vai trò hiện tại. */
export async function requireRole(role: Role): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (user.role !== role) {
    redirect(user.role === "teacher" ? "/teacher" : "/dashboard");
  }
  return user;
}
