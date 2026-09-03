import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createSessionToken } from "@/lib/auth/token";
import type { Role } from "@/lib/types";

export const dynamic = "force-dynamic";

const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 ngày

/* Callback Google: đổi code → token → userinfo → tìm/tạo user → session. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const rawRedirect = process.env.GOOGLE_REDIRECT_URI?.trim();
  const isLocalhostEnv = !!rawRedirect && rawRedirect.includes("localhost");
  const redirectUri =
    rawRedirect && !(process.env.NODE_ENV === "production" && isLocalhostEnv)
      ? rawRedirect
      : `${origin}/api/auth/google/callback`;
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  // Đọc cookie lq_oauth trực tiếp từ header (state + PKCE verifier).
  const cookieHeader = req.headers.get("cookie") ?? "";
  const m = cookieHeader.match(/(?:^|;\s*)lq_oauth=([^;]*)/);
  let saved: { state?: string; codeVerifier?: string } = {};
  try {
    if (m) saved = JSON.parse(decodeURIComponent(m[1]));
  } catch {
    saved = {};
  }

  const fail = (reason: string) => {
    console.error("[google-callback] FAIL:", reason, {
      hasCode: !!code,
      hasState: !!state,
      hasSavedState: !!saved.state,
      hasVerifier: !!saved.codeVerifier,
      clientId: !!clientId,
      clientSecret: !!clientSecret,
    });
    return NextResponse.redirect(`${origin}/login?error=${reason}`);
  };

  if (!code || !state || !clientId || !clientSecret) return fail("google_config");
  if (!saved.state || saved.state !== state || !saved.codeVerifier) return fail("google_state");

  try {
    // 1) Đổi authorization_code lấy access_token (PKCE)
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        code_verifier: saved.codeVerifier,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
      }),
    });
    if (!tokenRes.ok) {
      const body = await tokenRes.text();
      console.error("[google-callback] token exchange failed:", tokenRes.status, body);
      return fail("google_token");
    }
    const tokens = (await tokenRes.json()) as { access_token?: string };
    if (!tokens.access_token) return fail("google_token");

    // 2) Lấy userinfo (tránh verify JWT thủ công)
    const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    if (!userRes.ok) {
      console.error("[google-callback] userinfo failed:", userRes.status);
      return fail("google_user");
    }
    const profile = (await userRes.json()) as {
      sub?: string;
      email?: string;
      name?: string;
      picture?: string;
    };
    if (!profile.email) return fail("google_email");

    // 3) Tìm user theo email; nếu chưa có → tạo (role mặc định pending)
    const email = profile.email.toLowerCase();
    const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
    let user = rows[0];
    if (!user) {
      const [created] = await db
        .insert(users)
        .values({
          name: profile.name ?? email,
          email,
          role: "pending" as Role,
          avatarColor: "#10B981",
          googleId: profile.sub ?? null,
        })
        .returning();
      user = created;
    } else if (profile.sub && !user.googleId) {
      await db.update(users).set({ googleId: profile.sub }).where(eq(users.id, user.id));
    }

    // 4) Tạo session + gắn cookie trực tiếp lên response redirect
    const token = await createSessionToken(user.id, user.role as Role);
    const dest = user.role === "teacher" ? "/teacher" : user.role === "pending" ? "/pending" : "/dashboard";
    const res = NextResponse.redirect(`${origin}${dest}`);
    res.cookies.set("lq_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });
    res.cookies.delete("lq_oauth");
    return res;
  } catch (e) {
    console.error("[google-callback] exception:", e);
    return NextResponse.redirect(`${origin}/login?error=google_exception`);
  }
}
