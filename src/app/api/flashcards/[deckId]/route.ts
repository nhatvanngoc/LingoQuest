import { NextResponse } from "next/server";
import { getDeckBySlugOrId } from "@/db/queries";
import { DECKS } from "@/lib/mock/data";

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

    const deck = await getDeckBySlugOrId(deckId).catch(() => null);
    if (!deck) {
      const mockDeck = DECKS.find((d: any) => d.id === deckId || d.slug === deckId);
      if (mockDeck) {
        return NextResponse.json({
          ok: true,
          deck: {
            id: mockDeck.id,
            slug: mockDeck.id,
            title: mockDeck.title,
            cards: (mockDeck.cards || []).map((c: any) => ({
              id: c.id,
              front: c.front,
              back: c.back,
              phonetic: c.phonetic ?? "",
              example: c.example ?? "",
              exampleVi: c.exampleVi ?? "",
              image: c.image ?? "",
            })),
          },
        });
      }
      return NextResponse.json({ error: "Không tìm thấy bộ thẻ" }, { status: 404 });
    }

    return NextResponse.json({
      ok: true,
      deck: {
        id: deck.id,
        slug: deck.slug,
        title: deck.title,
        cards: (deck.cards || []).map((c: any) => ({
          id: c.id,
          front: c.front,
          back: c.back,
          phonetic: c.phonetic ?? "",
          example: c.example ?? "",
          exampleVi: c.exampleVi ?? "",
          image: c.image ?? "",
        })),
      },
    });
  } catch (e) {
    console.error("Get flashcard deck error:", e);
    return NextResponse.json({ error: "Lỗi máy chủ khi lấy bộ thẻ" }, { status: 500 });
  }
}
