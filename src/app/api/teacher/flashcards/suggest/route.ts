import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

/* POST /api/teacher/flashcards/suggest
   Sử dụng Groq Qwen (qwen/qwen3.6-27b) để gợi ý phiên âm, nghĩa tiếng Việt và ví dụ cho danh sách từ vựng.
*/
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== "teacher") {
      return NextResponse.json({ error: "Chỉ giáo viên mới được sử dụng tính năng này" }, { status: 403 });
    }

    const body = (await req.json().catch(() => null)) as { words?: string[] | string } | null;
    let wordList: string[] = [];

    if (Array.isArray(body?.words)) {
      wordList = body.words.map((w) => String(w).trim()).filter(Boolean);
    } else if (typeof body?.words === "string") {
      wordList = body.words
        .split(/[\n,;]+/)
        .map((w) => w.trim())
        .filter(Boolean);
    }

    if (wordList.length === 0) {
      return NextResponse.json({ error: "Vui lòng nhập ít nhất một từ vựng" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Thiếu GROQ_API_KEY trên server" }, { status: 500 });
    }

    const model = process.env.GROQ_MODEL || "qwen/qwen3.6-27b";

    const prompt = `Bạn là trợ lý giáo viên tiếng Anh. Với danh sách từ sau:
${wordList.map((w, i) => `${i + 1}. ${w}`).join("\n")}

Hãy tạo phiên âm IPA chuẩn, nghĩa tiếng Việt ngắn gọn dễ hiểu, và một câu ví dụ ngắn hay có chứa từ đó.
BẮT BUỘC trả về duy nhất chuỗi JSON hợp lệ theo cấu trúc (không giải thích, không kèm markdown, không kèm thẻ suy nghĩ):
[
  {
    "front": "từ tiếng Anh",
    "phonetic": "/phiên âm IPA/",
    "back": "nghĩa tiếng Việt",
    "example": "Câu ví dụ tiếng Anh ngắn"
  }
]`;

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 600,
        reasoning_effort: "none",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!groqRes.ok) {
      const errTxt = await groqRes.text();
      return NextResponse.json({ error: `Groq lỗi ${groqRes.status}: ${errTxt.slice(0, 200)}` }, { status: 502 });
    }

    const data = await groqRes.json();
    let raw = data.choices?.[0]?.message?.content?.trim() ?? "";
    // Strip <think>...</think>
    raw = raw.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
    // Strip markdown code fences
    raw = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return NextResponse.json({ ok: true, cards: parsed });
      }
    } catch {
      // Fallback nếu JSON parse fail
    }

    return NextResponse.json({
      ok: true,
      cards: wordList.map((w) => ({
        front: w,
        back: "",
        phonetic: "",
        example: "",
      })),
    });
  } catch (err) {
    console.error("Flashcards suggest error:", err);
    return NextResponse.json({ error: "Lỗi xử lý gợi ý từ vựng" }, { status: 500 });
  }
}
