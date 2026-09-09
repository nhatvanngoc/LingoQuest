import { NextRequest, NextResponse } from "next/server";
import { getUnitData } from "@/lib/curriculum/queue";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const unit = await getUnitData(id);

    if (!unit) {
      return NextResponse.json(
        { error: "UNIT_NOT_FOUND", message: `Không tìm thấy bài học với mã ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json(unit, { status: 200 });
  } catch (error: any) {
    console.error("[API/units] Error fetching unit data:", error);
    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR", message: error?.message || "Lỗi máy chủ" },
      { status: 500 }
    );
  }
}
