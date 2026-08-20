import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getLessonsForSelect, getDecksForSelect } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Danh sách bài học & bộ flashcard (cho form giao bài). */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });

    const [lessons, decks] = await Promise.all([getLessonsForSelect(), getDecksForSelect()]);
    return NextResponse.json({ ok: true, lessons, decks });
  } catch (e) {
    console.error("List lessons error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
