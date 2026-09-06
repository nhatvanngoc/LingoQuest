import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getUserWeeklyActivity } from "@/db/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const activity = await getUserWeeklyActivity(user.id);
    return NextResponse.json({ ok: true, activity });
  } catch (e) {
    console.error("Fetch weekly activity error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
