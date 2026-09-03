import { NextResponse } from "next/server";
import { SYSTEM_PROMPT, buildUserPrompt } from "@/lib/ai/prompt";
import { parseExerciseMarkdown, validateParsed } from "@/lib/ai/markdown-parser";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

/* POST /api/teacher/generate — Groq tạo markdown bài tập từ prompt giáo viên
   Body: { input: string, level?: string, count?: number }
   Output: { ok, markdown, parsed, usage? }
   Yêu cầu: GROQ_API_KEY trong env, user là teacher
*/

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user || user.role !== "teacher") {
    return NextResponse.json({ error: "Chỉ giáo viên mới được tạo bài tập" }, { status: 403 });
  }

  const body = (await req.json().catch(() => null)) as { input?: string; level?: string; count?: number } | null;
  const input = body?.input?.trim() ?? "";
  const level = body?.level ?? "A2-B1";
  const count = body?.count ?? 6;

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

  const userPrompt = buildUserPrompt(input, level, count);

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 2500,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
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
    let markdown = data.choices?.[0]?.message?.content?.trim() ?? "";
    // Strip ```markdown fences if model wrapped
    markdown = markdown.replace(/^```markdown\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();

    if (!markdown) {
      return NextResponse.json({ error: "Groq trả về rỗng, thử lại" }, { status: 502 });
    }

    const parsed = parseExerciseMarkdown(markdown);
    const err = validateParsed(parsed);
    if (err) {
      // Vẫn trả về markdown để giáo viên sửa tay, kèm warning
      return NextResponse.json({ ok: true, markdown, parsed, warning: err, usage: data.usage });
    }

    return NextResponse.json({ ok: true, markdown, parsed, usage: data.usage });
  } catch (e) {
    console.error("[generate] exception", e);
    return NextResponse.json({ error: "Lỗi mạng khi gọi Groq, thử lại" }, { status: 500 });
  }
}
