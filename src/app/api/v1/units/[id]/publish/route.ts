import { NextRequest, NextResponse } from "next/server";
import { publishUnitPackage } from "@/lib/curriculum/queue";

export async function POST(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const result = await publishUnitPackage(id);

    return NextResponse.json(
      {
        success: true,
        unitId: result.unitId,
        status: result.status,
        message: "Bài học đã được xuất bản và kích hoạt cho học sinh!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[API/units/publish] Error publishing unit:", error);
    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR", message: error?.message || "Lỗi máy chủ" },
      { status: 500 }
    );
  }
}
