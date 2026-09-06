import { NextResponse } from "next/server";
import {
  UNIFIED_SYSTEM_PROMPT,
  buildUnifiedPrompt,
  buildMoreVocabPrompt,
  buildMoreQuizPrompt,
  buildMoreFillPrompt,
  buildWritingPrompt,
} from "@/lib/ai/prompt";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

/* POST /api/teacher/generate — Groq sinh nội dung bài tập Co-Pilot (5 trong 1)
   Body: { 
     action?: "all" | "vocab" | "quiz" | "fill" | "writing",
     input: string, 
     level?: string, 
     vocab?: string[] 
   }
   Output: { ok: true, data: ... }
*/

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user || user.role !== "teacher") {
    return NextResponse.json({ error: "Chỉ giáo viên mới được tạo bài tập" }, { status: 403 });
  }

  const body = (await req.json().catch(() => null)) as {
    action?: "all" | "vocab" | "quiz" | "fill" | "writing";
    input?: string;
    level?: string;
    vocab?: string[];
  } | null;

  const action = body?.action || "all";
  const input = body?.input?.trim() ?? "";
  const level = body?.level ?? "A2-B1";

  if (!input || input.length < 3) {
    return NextResponse.json({ error: "Nhập chủ đề / yêu cầu (ít nhất 3 ký tự)" }, { status: 400 });
  }
  if (input.length > 2000) {
    return NextResponse.json({ error: "Yêu cầu quá dài (tối đa 2000 ký tự)" }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Thiếu GROQ_API_KEY trên server (Vercel Env)" }, { status: 500 });
  }

  let prompt = "";
  if (action === "all") {
    prompt = buildUnifiedPrompt(input, level);
  } else if (action === "vocab") {
    prompt = buildMoreVocabPrompt(input);
  } else if (action === "quiz") {
    prompt = buildMoreQuizPrompt(input, body?.vocab || []);
  } else if (action === "fill") {
    prompt = buildMoreFillPrompt(input, body?.vocab || []);
  } else if (action === "writing") {
    prompt = buildWritingPrompt(input);
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "qwen/qwen3.6-27b",
        temperature: 0.4,
        max_tokens: 1200,
        reasoning_effort: "none",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: UNIFIED_SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!groqRes.ok) {
      const txt = await groqRes.text();
      console.error("[generate] Groq error", groqRes.status, txt);
      return NextResponse.json({ error: `Groq lỗi ${groqRes.status}: ${txt.slice(0, 300)}` }, { status: 502 });
    }

    const data = (await groqRes.json()) as {
      choices?: { message?: { content?: string } }[];
      usage?: unknown;
    };
    let content = data.choices?.[0]?.message?.content?.trim() ?? "";
    content = content.replace(/<think>[\s\S]*?<\/think>/gi, "").replace(/<think>[\s\S]*/gi, "").trim();
    content = content.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();

    if (!content) {
      return NextResponse.json({ error: "Groq trả về rỗng, vui lòng thử lại" }, { status: 502 });
    }

    let parsed: any;
    try {
      parsed = JSON.parse(content);
    } catch {
      // Cố gắng tìm khối JSON { ... }
      const match = content.match(/\{[\s\S]*\}/);
      if (match) {
        parsed = JSON.parse(match[0]);
      } else {
        throw new Error("Không trích xuất được định dạng JSON từ phản hồi");
      }
    }

    // Đảm bảo ID ổn định cho các item
    if (Array.isArray(parsed.vocabulary)) {
      parsed.vocabulary = parsed.vocabulary.map((v: any, idx: number) => ({
        id: v.id || `card-${Date.now().toString(36)}-${idx}`,
        word: (v.word || "").trim(),
        phonetic: (v.phonetic || "").trim(),
        meaning: (v.meaning || "").trim(),
        example: (v.example || "").trim(),
        exampleVi: (v.exampleVi || "").trim(),
      }));
    }

    if (Array.isArray(parsed.quizQuestions)) {
      parsed.quizQuestions = parsed.quizQuestions.map((q: any, idx: number) => ({
        id: q.id || `quiz-${Date.now().toString(36)}-${idx}`,
        question: (q.question || "").trim(),
        options: Array.isArray(q.options) ? q.options : [],
        answer: (q.answer || "A").trim(),
        explanation: (q.explanation || "").trim(),
      }));
    }

    if (Array.isArray(parsed.fillQuestions)) {
      parsed.fillQuestions = parsed.fillQuestions.map((f: any, idx: number) => ({
        id: f.id || `fill-${Date.now().toString(36)}-${idx}`,
        sentence: (f.sentence || "").trim(),
        answer: (f.answer || "").trim(),
        hint: (f.hint || "").trim(),
        explanation: (f.explanation || "").trim(),
      }));
    }

    return NextResponse.json({ ok: true, data: parsed, usage: data.usage });
  } catch (e) {
    console.error("[generate] exception", e);
    return NextResponse.json({ error: "Lỗi xử lý phản hồi từ AI, vui lòng thử lại" }, { status: 500 });
  }
}
