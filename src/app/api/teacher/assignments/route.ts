import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { createAssignment, createDeckWithCards } from "@/db/queries";

export const dynamic = "force-dynamic";

/* Giao bài tập mới (giáo viên). */
export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
    if (user.role !== "teacher") return NextResponse.json({ error: "Chỉ giáo viên mới được giao bài" }, { status: 403 });

    const body = (await req.json().catch(() => null)) as {
      title?: unknown;
      description?: unknown;
      videoUrl?: unknown;
      prompt?: unknown;
      lessonId?: unknown;
      dueAt?: unknown;
      content?: any;
    } | null;

    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const description = typeof body?.description === "string" ? body.description.trim() : "";
    const videoUrl = typeof body?.videoUrl === "string" ? body.videoUrl.trim() : "";
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : (body?.content?.writingPrompt?.prompt || "");
    const content = body?.content || null;

    if (!title) return NextResponse.json({ error: "Thiếu tiêu đề bài tập" }, { status: 400 });

    let finalDeckId: string | null = null;

    // Nếu có danh sách từ vựng trong content, tự động tạo bộ flashcard tương ứng
    if (content && Array.isArray(content.vocabulary) && content.vocabulary.length > 0) {
      const validCards = content.vocabulary
        .filter((c: any) => typeof c.word === "string" && c.word.trim())
        .map((c: any) => ({
          front: c.word.trim(),
          back: (c.meaning || "").trim(),
          phonetic: (c.phonetic || "").trim(),
          example: (c.example || "").trim(),
          exampleVi: (c.exampleVi || "").trim(),
        }));

      if (validCards.length > 0) {
        const newDeck = await createDeckWithCards({
          title: `Từ vựng: ${title}`,
          createdBy: user.id,
          cards: validCards,
        });
        finalDeckId = newDeck.id;
      }
    }

    const row = await createAssignment({
      title,
      type: "exercise",
      description,
      prompt,
      videoUrl,
      content,
      lessonId: typeof body?.lessonId === "string" && body.lessonId ? body.lessonId : null,
      deckId: finalDeckId,
      dueAt: typeof body?.dueAt === "string" && body.dueAt ? new Date(body.dueAt) : null,
    });
    return NextResponse.json({ ok: true, id: row.id, deckId: finalDeckId });
  } catch (e) {
    console.error("Create assignment error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ" }, { status: 500 });
  }
}
