import { NextResponse } from "next/server";
import { getAssignmentById } from "@/db/queries";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Thiếu ID bài tập" }, { status: 400 });
    }

    const assignment = await getAssignmentById(id);
    if (!assignment) {
      return NextResponse.json({ error: "Không tìm thấy bài tập" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, assignment });
  } catch (error) {
    console.error("Get assignment error:", error);
    return NextResponse.json({ error: "Lỗi tải bài tập" }, { status: 500 });
  }
}
