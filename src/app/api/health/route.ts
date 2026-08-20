import { db } from "@/db";
import { sql } from "drizzle-orm";
import { seedIfEmpty } from "@/db/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await db.execute(sql`select 1`);
    // CSDL mới tinh → tự nạp dữ liệu demo (tài khoản, lớp, bài học) để tránh
    // vòng gà-trứng "không ai đăng nhập được vì chưa ai seed". Idempotent:
    // chỉ chạy khi bảng users trống.
    let seeded = true;
    try {
      await seedIfEmpty();
    } catch {
      seeded = false; // DB sống nhưng seed lỗi — vẫn báo ok kèm cờ
    }
    return Response.json({ ok: true, seeded });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
