import { NextResponse } from "next/server";
import { randomBytesB64, sha256B64url } from "@/lib/auth/oauth-crypto";

export const dynamic = "force-dynamic";

/* Bắt đầu luồng OAuth2 Google (PKCE): tạo state + code_verifier, lưu
   vào cookie httpOnly, rồi redirect về Google consent screen. */
export async function GET(req: Request) {
  const origin = new URL(req.url).origin;
  const rawRedirect = process.env.GOOGLE_REDIRECT_URI?.trim();
  const isLocalhostEnv = !!rawRedirect && rawRedirect.includes("localhost");
  // Trên Vercel (production) nếu env vẫn là localhost thì bỏ qua, dùng origin để tránh mất cookie lq_oauth
  const redirectUri =
    rawRedirect && !(process.env.NODE_ENV === "production" && isLocalhostEnv)
      ? rawRedirect
      : `${origin}/api/auth/google/callback`;
  const clientId = process.env.GOOGLE_CLIENT_ID;

  if (!clientId) {
    return NextResponse.redirect(`${origin}/login?error=google_config`);
  }

  const state = randomBytesB64(16);
  const codeVerifier = randomBytesB64(64);
  const codeChallenge = await sha256B64url(codeVerifier);

  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "openid email profile");
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("code_challenge", codeChallenge);
  authUrl.searchParams.set("code_challenge_method", "S256");
  // Luôn bắt Google hiển thị bảng chọn tài khoản → sau khi đăng xuất có
  // thể chọn Google ID khác (tránh bị "nhớ" tài khoản cũ tự động).
  authUrl.searchParams.set("prompt", "select_account");

  // Gắn cookie trực tiếp lên response redirect.
  // Vercel *.vercel.app là public suffix → Lax đôi khi bị chặn khi quay về từ Google.
  // Dùng SameSite=None + Secure=true trên production để đảm bảo cookie được gửi lại ở callback.
  const isProd = process.env.NODE_ENV === "production";
  const res = NextResponse.redirect(authUrl.toString());
  res.cookies.set("lq_oauth", JSON.stringify({ state, codeVerifier }), {
    httpOnly: true,
    sameSite: isProd ? "none" : "lax",
    secure: isProd,
    path: "/",
    maxAge: 600,
  });
  return res;
}
