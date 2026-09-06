import { getClassStudents } from "@/db/queries";

export const dynamic = "force-dynamic";

/** Danh sách học sinh thật trong lớp (database source of truth) */
export async function GET() {
  try {
    const students = await getClassStudents();
    return Response.json({ ok: true, students });
  } catch (e) {
    console.error("Get class students error:", e);
    return Response.json({ ok: true, students: [] });
  }
}
