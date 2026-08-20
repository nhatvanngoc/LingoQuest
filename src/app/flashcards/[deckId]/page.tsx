"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Keyboard, RotateCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { FlashCard } from "@/components/FlashCard";
import { DECKS } from "@/lib/mock/data";
import { AppShell } from "@/components/AppShell";
import { useApp, cardKey } from "@/lib/state/app-context";

/* Trang luyện Flashcard độc lập — có phím tắt:
   Space = lật thẻ · ← = chưa nhớ · → = đã nhớ
   Sử dụng lặp ngắt quãng (SRS): thẻ chưa thuộc (box<3) được ưu tiên ôn trước. */

export default function FlashcardsPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const deck = DECKS.find((d) => d.id === deckId) ?? DECKS[0];
  const { srs, recordCard, deckLearnedCount, addXp } = useApp();

  // Sắp xếp: thẻ chưa thuộc trước (box thấp → cao) để ôn ưu tiên
  const orderedCards = useMemo(() => {
    return [...deck.cards].sort((a, b) => (srs[cardKey(deck.id, a.id)] ?? 0) - (srs[cardKey(deck.id, b.id)] ?? 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck.id]);

  const cardKeys = useMemo(() => deck.cards.map((c) => cardKey(deck.id, c.id)), [deck.id]);
  const learned = deckLearnedCount(cardKeys);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState(false);
  const [sessionKnown, setSessionKnown] = useState(0);
  const rewarded = useRef(false);

  const card = orderedCards[index];
  const isLast = index >= orderedCards.length - 1;

  const mark = useCallback(
    (known: boolean) => {
      recordCard(deck.id, card.id, known);
      if (known) setSessionKnown((s) => s + 1);
      setFlipped(false);
      if (isLast) {
        if (!rewarded.current) {
          rewarded.current = true;
          addXp(orderedCards.length * 5, "Ôn flashcard");
        }
        setFinished(true);
        return;
      }
      setIndex((i) => i + 1);
    },
    [card, deck.id, isLast, orderedCards.length, recordCard, addXp],
  );

  const flip = useCallback(() => setFlipped((f) => !f), []);

  // Phím tắt
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished) return;
      if (e.code === "Space") {
        e.preventDefault();
        flip();
      } else if (e.key === "ArrowRight") mark(true);
      else if (e.key === "ArrowLeft") mark(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flip, mark, finished]);

  const restart = () => {
    rewarded.current = false;
    setIndex(0);
    setFlipped(false);
    setSessionKnown(0);
    setFinished(false);
  };

  if (orderedCards.length === 0) {
    return (
      <AppShell>
        <div className="mx-auto max-w-2xl">
          <Link
            href="/dashboard"
            className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
          >
            <ChevronLeft className="h-4 w-4" /> Quay lại
          </Link>
          <div className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card">
            <div className="text-5xl">🃏</div>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
              Bộ thẻ “{deck.title}” chưa có từ vựng
            </h2>
            <p className="mt-1 text-slate-500">Quay lại sau khi giáo viên thêm thẻ vào bộ này.</p>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" /> Quay lại
        </Link>

        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-xl font-extrabold text-slate-900">{deck.title}</h1>
          <span className="rounded-full bg-success-50 px-3 py-1 text-sm font-extrabold text-success">
            Đã thuộc {learned}/{deck.total} từ
          </span>
        </div>
        {/* Thanh tiến độ = mức độ thuộc (số từ đã thuộc / tổng), khớp với badge "Đã thuộc X/12".
            "Đã nhớ" → tăng, "Chưa nhớ" → giữ nguyên hoặc giảm (không bao giờ tăng). */}
        <ProgressBar value={(learned / deck.total) * 100} tone="success" className="mb-6" />

        {finished ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"
          >
            <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900">Tuyệt vời! Bạn đã ôn xong bộ thẻ</h2>
            <p className="mt-1 text-slate-500">
              Bạn nhớ {sessionKnown}/{orderedCards.length} từ trong phiên này ·
              <span className="font-extrabold text-brand"> +{orderedCards.length * 5} XP</span>
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline" onClick={restart}>
                <RotateCcw className="h-4 w-4" /> Học lại
              </Button>
              <Button asChild>
                <Link href="/dashboard">Về trang chủ</Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="mb-4 text-center text-sm font-bold text-slate-400">
              Thẻ {index + 1}/{orderedCards.length}
            </div>
            <FlashCard card={card} flipped={flipped} onFlip={flip} onKnown={() => mark(true)} onUnknown={() => mark(false)} />

            {/* Gợi ý phím tắt */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-400">
              <Keyboard className="h-4 w-4" />
              <span className="rounded-md border border-slate-200 px-2 py-0.5">Space</span> Lật thẻ
              <span className="rounded-md border border-slate-200 px-2 py-0.5">←</span> Chưa nhớ
              <span className="rounded-md border border-slate-200 px-2 py-0.5">→</span> Đã nhớ
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
