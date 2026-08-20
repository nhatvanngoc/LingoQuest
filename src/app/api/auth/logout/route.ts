import { NextResponse, type NextRequest } from "next/server";
import { destroySession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

/* Đăng xuất: xoá cookie phiên rồi redirect về /login TRONG CÙNG một
   response. Dùng navigation cấp cao (GET/POST tới route này) thay vì
   fetch + window.location thủ công — đảm bảo Set-Cookie xoá cookie
   được áp dụng chắc chắn trước khi chuyển trang. */
function logoutResponse(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/login", req.url));
  res.cookies.delete("lq_session");
  return res;
}

export async function GET(req: NextRequest) {
  try {
    await destroySession();
  } catch {
    /* bỏ qua: dù sao cũng xoá cookie trên response */
  }
  return logoutResponse(req);
}

export async function POST(req: NextRequest) {
  try {
    await destroySession();
  } catch {
    /* bỏ qua */
  }
  return logoutResponse(req);
}
