"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Keyboard, RotateCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { FlashCard } from "@/components/FlashCard";
import { AppShell } from "@/components/AppShell";
import { useApp, cardKey } from "@/lib/state/app-context";

/* Trang luyện Flashcard độc lập — có phím tắt:
   Space = lật thẻ · ← = chưa nhớ · → = đã nhớ
   Sử dụng lặp ngắt quãng (SRS): thẻ chưa thuộc (box<3) được ưu tiên ôn trước. */

export default function FlashcardsPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const [deck, setDeck] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { srs, recordCard, deckLearnedCount, addXp, wordsLearned, streak, syncStats } = useApp();

  useEffect(() => {
    let active = true;
    fetch(`/api/flashcards/${deckId}`)
      .then((r) => r.json())
      .then((d) => {
        if (!active) return;
        if (d.ok && d.deck) {
          setDeck(d.deck);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [deckId]);

  const cardsList = deck?.cards || [];

  // Sắp xếp: thẻ chưa thuộc trước (box thấp → cao) để ôn ưu tiên
  const orderedCards = useMemo(() => {
    if (!deck) return [];
    return [...cardsList].sort((a, b) => (srs[cardKey(deck.id, a.id)] ?? 0) - (srs[cardKey(deck.id, b.id)] ?? 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck, cardsList]);

  const cardKeys = useMemo(() => cardsList.map((c: any) => cardKey(deck?.id, c.id)), [deck, cardsList]);
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
      if (!deck || !card) return;
      recordCard(deck.id, card.id, known);
      if (known) setSessionKnown((s) => s + 1);
      setFlipped(false);
      if (isLast) {
        if (!rewarded.current) {
          rewarded.current = true;
          const earned = orderedCards.length * 5;
          addXp(earned, "Ôn flashcard");
          const totalKnown = Math.max(wordsLearned + (known ? 1 : 0), sessionKnown + (known ? 1 : 0));
          syncStats({
            xp: earned,
            wordsLearned: totalKnown,
            streak: Math.max(1, streak),
            minutes: Math.max(1, Math.ceil(orderedCards.length * 0.5)),
          });
        }
        setFinished(true);
        return;
      }
      setIndex((i) => i + 1);
    },
    [card, deck, isLast, orderedCards.length, recordCard, addXp],
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

  if (loading) {
    return (
      <AppShell>
        <div className="mx-auto max-w-2xl py-16 text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-brand border-t-transparent mb-4" />
          <p className="text-sm font-semibold text-slate-500">Đang tải bộ thẻ...</p>
        </div>
      </AppShell>
    );
  }

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
              Bộ thẻ “{deck?.title || "Flashcards"}” chưa có từ vựng
            </h2>
            <p className="mt-1 text-slate-500">Quay lại sau khi giáo viên thêm từ vựng vào bài học này.</p>
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

        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h1 className="text-xl font-extrabold text-slate-900">{deck.title}</h1>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand border border-brand-200/60">
                ⚡ +{sessionKnown * 5} XP
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 border border-emerald-200/60">
                Đã thuộc {learned}/{deck.total} từ
              </span>
            </div>
          </div>
          {/* Thanh tiến độ phiên học: thẻ index+1 / tổng */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <ProgressBar value={((index + 1) / orderedCards.length) * 100} tone="gradient" height="h-2.5" />
            </div>
            <span className="text-xs font-bold text-slate-500 tabular-nums shrink-0">
              Thẻ {index + 1}/{orderedCards.length}
            </span>
          </div>
        </div>

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
