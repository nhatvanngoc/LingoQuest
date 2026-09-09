import { NextRequest, NextResponse } from "next/server";
import { getGenerationJob } from "@/lib/curriculum/queue";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const job = await getGenerationJob(id);

    if (!job) {
      return NextResponse.json(
        { error: "JOB_NOT_FOUND", message: `Không tìm thấy tiến trình với mã ${id}` },
        { status: 404 }
      );
    }

    return NextResponse.json(job, { status: 200 });
  } catch (error: any) {
    console.error("[API/generation-jobs] Error querying job:", error);
    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR", message: error?.message || "Lỗi máy chủ" },
      { status: 500 }
    );
  }
}
