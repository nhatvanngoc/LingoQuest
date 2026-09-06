import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { submitWriting, getStudentSubmissions } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Lấy danh sách bài nộp của học sinh hiện tại (kèm điểm & nhận xét của giáo viên) */
export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    }

    const submissions = await getStudentSubmissions(user.id);
    return NextResponse.json({ ok: true, submissions });
  } catch (e) {
    console.error("Get my submissions error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}

/* Học sinh nộp bài viết mới */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Vui lòng đăng nhập để nộp bài" }, { status: 401 });
    }

    const body = (await req.json().catch(() => null)) as {
      assignmentId?: string;
      lessonTitle?: string;
      prompt?: string;
      text?: string;
      words?: number;
    } | null;

    const text = typeof body?.text === "string" ? body.text.trim() : "";
    const words = typeof body?.words === "number" ? body.words : text.split(/\s+/).filter(Boolean).length;
    const lessonTitle = typeof body?.lessonTitle === "string" ? body.lessonTitle : "Bài tập luyện viết";
    const prompt = typeof body?.prompt === "string" ? body.prompt : "Luyện viết đoạn văn";
    const assignmentId = typeof body?.assignmentId === "string" ? body.assignmentId : null;

    if (!text || words < 5) {
      return NextResponse.json({ error: "Bài viết quá ngắn. Vui lòng viết ít nhất 5 từ" }, { status: 400 });
    }

    const submission = await submitWriting({
      userId: user.id,
      assignmentId,
      lessonTitle,
      prompt,
      text,
      words,
    });

    return NextResponse.json({ ok: true, submissionId: submission.id });
  } catch (e) {
    console.error("Submit writing error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi nộp bài" }, { status: 500 });
  }
}
