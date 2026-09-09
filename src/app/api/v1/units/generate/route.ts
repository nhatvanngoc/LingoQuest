import { NextRequest, NextResponse } from "next/server";
import { GenerateUnitRequestSchema } from "@/lib/curriculum/schemas";
import { enqueueGenerationJob } from "@/lib/curriculum/queue";
import { db } from "@/db";
import { units } from "@/db/schema";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = GenerateUnitRequestSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "VALIDATION_FAILED",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const input = parseResult.data;
    const unitId = crypto.randomUUID();
    const slug = `g${input.grade}-u${input.unitNumber}-${Date.now().toString(36)}`;

    // Try creating draft unit in DB
    if (process.env.DATABASE_URL) {
      try {
        await db.insert(units).values({
          id: unitId,
          grade: String(input.grade) as any,
          textbookSeries: input.textbookSeries,
          unitNumber: input.unitNumber,
          title: input.unitTitle,
          slug,
          status: "GENERATING",
          rawVocabulary: input.rawVocabulary,
          rawGrammar: input.rawGrammar,
          teacherNotes: input.teacherNotes,
          videoUrls: input.videoUrls || [],
          schemaVersion: "1.0",
        });
      } catch (dbErr) {
        console.warn("[API/generate] Could not insert unit record into DB:", dbErr);
      }
    }

    // Start background job
    const jobId = await enqueueGenerationJob(unitId, input);

    return NextResponse.json(
      {
        jobId,
        unitId,
        status: "QUEUED",
        statusUrl: `/api/v1/generation-jobs/${jobId}`,
        previewUrl: `/teacher/units/${unitId}/preview?jobId=${jobId}`,
        message: "Yêu cầu tạo bài học đã được đưa vào hàng đợi xử lý.",
      },
      { status: 202 }
    );
  } catch (error: any) {
    console.error("[API/generate] Error handling generate request:", error);
    return NextResponse.json(
      {
        error: "INTERNAL_SERVER_ERROR",
        message: error?.message || "Đã xảy ra lỗi khi tạo tiến trình sinh nội dung.",
      },
      { status: 500 }
    );
  }
}
