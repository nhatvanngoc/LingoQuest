import { getWeeklyLeaderboard } from "@/db/queries";

export const dynamic = "force-dynamic";

/** Bảng xếp hạng tuần theo dữ liệu thật trong PostgreSQL */
export async function GET() {
  try {
    const rows = await getWeeklyLeaderboard();
    return Response.json(
      { ok: true, rows },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        },
      }
    );
  } catch (e) {
    console.error("Get leaderboard error:", e);
    return Response.json({ ok: true, rows: [] });
  }
}
