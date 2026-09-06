import { NextResponse } from "next/server";
import { getDeckBySlugOrId } from "@/db/queries";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ deckId: string }> }
) {
  try {
    const { deckId } = await params;
    if (!deckId) {
      return NextResponse.json({ error: "Thiếu ID bộ thẻ" }, { status: 400 });
    }

    const deck = await getDeckBySlugOrId(deckId);
    if (!deck) {
      return NextResponse.json({ error: "Không tìm thấy bộ thẻ" }, { status: 404 });
    }

    return NextResponse.json({
      ok: true,
      deck: {
        id: deck.id,
        slug: deck.slug,
        title: deck.title,
        cards: (deck.cards || []).map((c) => ({
          id: c.id,
          front: c.front,
          back: c.back,
          phonetic: c.phonetic ?? "",
          example: c.example ?? "",
          exampleVi: c.exampleVi ?? "",
        })),
      },
    });
  } catch (e) {
    console.error("Get flashcard deck error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi lấy bộ thẻ" }, { status: 500 });
  }
}
