import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

/* POST /api/teacher/grade-ai — AI Trợ lý chấm bài luận tự động bằng Groq Qwen */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "teacher") {
      return NextResponse.json({ error: "Chỉ giáo viên mới có quyền sử dụng trợ lý chấm bài" }, { status: 403 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Chưa cấu hình GROQ_API_KEY" }, { status: 500 });
    }

    const body = await req.json().catch(() => null);
    const text = typeof body?.text === "string" ? body.text.trim() : "";
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "Bài viết tự luận";

    if (!text || text.length < 5) {
      return NextResponse.json({ error: "Bài viết quá ngắn để chấm" }, { status: 400 });
    }

    const words = text.split(/\s+/).filter(Boolean).length;

    const userPrompt = `Bạn là một giáo viên tiếng Anh THPT giàu kinh nghiệm, ân cần và tận tâm tại Việt Nam.
Hãy chấm bài viết tự luận tiếng Anh sau của học sinh:
- Đề bài: "${prompt}"
- Số từ học sinh viết: ${words} từ
- Nội dung bài làm:
"""
${text}
"""

Tiêu chí đánh giá:
1. Mức độ bám sát chủ đề đề bài.
2. Từ vựng & cụm từ: Sử dụng đúng ngữ cảnh, đa dạng.
3. Ngữ pháp & Cấu trúc câu: Chia động từ, liên từ, trật tự từ.
4. Bố cục & Mạch lạc.

Yêu cầu định dạng trả về:
Trả về DUY NHẤT 1 đối tượng JSON theo định dạng sau (không markdown, không giải thích ngoài JSON):
{
  "score": 85,
  "comment": "Nhận xét chi tiết bằng tiếng Việt: khen ngợi điểm nổi bật, chỉ rõ lỗi ngữ pháp/chính tả cụ thể nếu có, và lời khuyên sư phạm mang tính động viên học sinh."
}`;

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen/qwen3.6-27b",
        messages: [
          {
            role: "system",
            content: "You are an expert English teacher evaluation assistant. Output purely valid JSON with keys 'score' (integer 0-100) and 'comment' (Vietnamese feedback).",
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Groq grading error:", errText);
      return NextResponse.json({ error: `Groq lỗi: ${errText.slice(0, 100)}` }, { status: 502 });
    }

    const data = await res.json();
    let content = data.choices?.[0]?.message?.content?.trim() ?? "";
    content = content.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

    const parsed = JSON.parse(content);
    const score = typeof parsed.score === "number" ? Math.min(100, Math.max(0, Math.round(parsed.score))) : 80;
    const comment = typeof parsed.comment === "string" ? parsed.comment : "Bài viết hoàn thành tốt yêu cầu.";

    return NextResponse.json({ ok: true, score, comment });
  } catch (e) {
    console.error("AI grading exception:", e);
    return NextResponse.json({ error: "Lỗi hệ thống khi chấm bài bằng AI" }, { status: 500 });
  }
}
