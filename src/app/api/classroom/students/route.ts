import { seedIfEmpty, getClassStudents } from "@/db/queries";
import { STUDENT_OPTIONS } from "@/lib/mock/data";

export const dynamic = "force-dynamic";

/** Danh sách học sinh trong lớp (database source of truth) */
export async function GET() {
  try {
    await seedIfEmpty();
    const students = await getClassStudents();
    return Response.json({ ok: true, students });
  } catch {
    // Không có DB (demo) → dùng danh sách học sinh mẫu để giao diện không trống
    return Response.json({
      ok: true,
      students: STUDENT_OPTIONS.map((name) => ({ name })),
    });
  }
}
