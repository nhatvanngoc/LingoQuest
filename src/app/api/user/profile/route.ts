import { NextResponse } from "next/server";
import { getCurrentUser, getSessionUserId } from "@/lib/auth/session";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ ok: false, error: "Chưa đăng nhập" }, { status: 401 });
    }
    return NextResponse.json({ ok: true, user });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error?.message || "Lỗi máy chủ" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json({ ok: false, error: "Chưa đăng nhập" }, { status: 401 });
    }

    const body = (await req.json().catch(() => null)) as {
      name?: string;
      grade?: string;
      avatarColor?: string;
    } | null;

    if (!body) {
      return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ" }, { status: 400 });
    }

    const updates: Record<string, any> = {};

    if (typeof body.name === "string" && body.name.trim().length >= 2) {
      updates.name = body.name.trim();
    }

    if (typeof body.grade === "string" && ["10", "11", "12"].includes(body.grade)) {
      updates.grade = body.grade;
    }

    if (typeof body.avatarColor === "string" && body.avatarColor.startsWith("#")) {
      updates.avatarColor = body.avatarColor;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ ok: false, error: "Không có thông tin cần cập nhật" }, { status: 400 });
    }

    if (process.env.DATABASE_URL) {
      await db.update(users).set(updates).where(eq(users.id, userId));
    }

    const updatedUser = await getCurrentUser();

    return NextResponse.json({
      ok: true,
      user: updatedUser,
      message: "Cập nhật thông tin hồ sơ thành công!",
    });
  } catch (error: any) {
    console.error("[API/user/profile] Update error:", error);
    return NextResponse.json({ ok: false, error: error?.message || "Lỗi cập nhật" }, { status: 500 });
  }
}
