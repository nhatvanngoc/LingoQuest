import { seedIfEmpty, getWeeklyLeaderboard } from "@/db/queries";
import { LEADERBOARD } from "@/lib/mock/data";

export const dynamic = "force-dynamic";

/** Bảng xếp hạng tuần theo dữ liệu thật trong DB */
export async function GET() {
  try {
    await seedIfEmpty();
    const rows = await getWeeklyLeaderboard();
    return Response.json({ ok: true, rows });
  } catch {
    // Không có DB (demo) → dùng bảng xếp hạng mẫu
    return Response.json({ ok: true, rows: LEADERBOARD });
  }
}
