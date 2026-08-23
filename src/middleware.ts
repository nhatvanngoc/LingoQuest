import { NextResponse, type NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/auth/token";

/* ============================================================
   middleware.ts — Bảo vệ route bằng cookie phiên "lq_session".
   - Xác thực CHỮ KÝ thật (Web Crypto) + hết hạn. Cookie giả/tự
     tạo sẽ bị chặn → route guard thực sự bảo vệ nội dung.
   - Phân quyền: /teacher* yêu cầu role "teacher".
   - Public: /login, /api/health, /api/auth (login/logout/google),
     /_next, file tĩnh, favicon.
   ============================================================ */

const COOKIE_NAME = "lq_session";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const session = token ? await verifySessionToken(token) : null;
  const isAuthed = Boolean(session);
  const role = session?.role;

  const isPublic =
    pathname === "/" || // trang chủ (landing page) là public
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/api/health") ||
    pathname.startsWith("/api/auth") || // login/logout/google/register phải truy cập được khi chưa có session
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/favicon.ico";

  // Đã đăng nhập mà vào /login hoặc /register → về trang mặc định.
  if (isAuthed && (pathname === "/login" || pathname === "/register")) {
    const url = req.nextUrl.clone();
    url.pathname = role === "teacher" ? "/teacher" : "/dashboard";
    return NextResponse.redirect(url);
  }

  // Chưa đăng nhập mà vào route không public → /login.
  if (!isAuthed && !isPublic) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Đã đăng nhập nhưng sai vai trò vào /teacher* → về trang mặc định.
  if (isAuthed && pathname.startsWith("/teacher") && role !== "teacher") {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Loại trừ hoàn toàn: login/register, api/health, _next, favicon (tránh vòng lặp /
  // chạy middleware trên asset tĩnh).
  matcher: ["/((?!login|register|api/health|_next|favicon.ico).*)"],
};
