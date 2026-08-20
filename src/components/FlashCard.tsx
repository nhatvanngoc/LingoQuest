"use client";

import { motion } from "framer-motion";
import { Volume2, Check, X, RotateCw } from "lucide-react";
import type { FlashCardData } from "@/lib/types";
import { cn } from "@/lib/utils";

/* ============================================================
   FlashCard — Thẻ flashcard lật 3D bằng Framer Motion.
   - Mặt trước: từ tiếng Anh + nút loa phát âm
   - Mặt sau: nghĩa + ví dụ (tiếng Anh + tiếng Việt)
   Có thể tái dùng ở cả /learn và /flashcards.
   ============================================================ */

function speak(text: string) {
  // Phát âm bằng Web Speech API (chỉ chạy ở trình duyệt).
  if (typeof window === "undefined") return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

export function FlashCard({
  card,
  flipped,
  onFlip,
  onKnown,
  onUnknown,
  compact = false,
}: {
  card: FlashCardData;
  flipped: boolean;
  onFlip: () => void;
  onKnown?: () => void;
  onUnknown?: () => void;
  compact?: boolean;
}) {
  const handleFlipKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onFlip();
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Thẻ lật */}
      <div className={cn("perspective w-full", compact ? "max-w-sm" : "max-w-md")}>
        <div
          onClick={onFlip}
          onKeyDown={handleFlipKeyDown}
          role="button"
          tabIndex={0}
          className="relative block w-full cursor-pointer text-left"
          style={{ height: compact ? 360 : 440 }}
          aria-label="Lật thẻ"
        >
          <motion.div
            className="preserve-3d relative h-full w-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ===== MẶT TRƯỚC ===== */}
            <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-card">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
                Từ vựng
              </span>
              <h2 className="mt-5 text-center text-4xl font-extrabold text-slate-900">{card.front}</h2>
              <p className="mt-2 text-lg font-semibold text-slate-400">{card.phonetic}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(card.front);
                }}
                className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-soft transition-transform hover:scale-110 active:scale-95"
                aria-label="Phát âm"
              >
                <Volume2 className="h-6 w-6" />
              </button>
              <p className="mt-6 text-xs font-semibold text-slate-400">Nhấn vào thẻ để xem nghĩa</p>
            </div>

            {/* ===== MẶT SAU ===== */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden rounded-3xl border border-success-100 bg-success-50/60 p-8 shadow-card">
              <span className="inline-flex w-fit items-center rounded-full bg-success px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Nghĩa
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">{card.back}</h2>
              <div className="mt-2 rounded-2xl bg-white/70 p-4">
                <p className="text-base font-semibold text-slate-700">“{card.example}”</p>
                <p className="mt-1 text-sm text-slate-500">{card.exampleVi}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(card.example);
                }}
                className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-600 shadow-soft hover:text-brand"
              >
                <Volume2 className="h-4 w-4" /> Nghe ví dụ
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Nút điều khiển (chỉ hiển thị khi truyền callback) */}
      {(onKnown || onUnknown) && (
        <div className="flex w-full max-w-md items-center justify-center gap-3">
          <button
            onClick={onUnknown}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-danger-100 bg-danger-50 py-3.5 font-extrabold text-danger transition-transform hover:scale-[1.02] active:scale-95"
          >
            <X className="h-5 w-5" /> Chưa nhớ
          </button>
          <button
            onClick={onFlip}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border-2 border-slate-200 bg-white text-slate-500 transition-transform hover:scale-105 active:scale-95"
            aria-label="Lật lại"
          >
            <RotateCw className="h-5 w-5" />
          </button>
          <button
            onClick={onKnown}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-success py-3.5 font-extrabold text-white shadow-soft transition-transform hover:scale-[1.02] active:scale-95"
          >
            <Check className="h-5 w-5" /> Đã nhớ
          </button>
        </div>
      )}
    </div>
  );
}
