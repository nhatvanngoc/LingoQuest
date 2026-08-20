"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Volume2, Check, X, RotateCw, Sparkles } from "lucide-react";
import type { FlashCardData } from "@/lib/types";
import { cn } from "@/lib/utils";

function speak(text: string) {
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
  const ref = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  
  // tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 20 });
  const glareX = useTransform(x, [-100, 100], [0, 100]);
  const glareY = useTransform(y, [-100, 100], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || flipped) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onFlip();
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className={cn("perspective w-full", compact ? "max-w-sm" : "max-w-md")}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
            setIsHover(false);
          }}
          style={{
            rotateX: flipped ? 0 : rotateX,
            rotateY: flipped ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative block w-full cursor-pointer text-left"
          aria-label="Lật thẻ"
        >
          <motion.div
            className="preserve-3d relative h-full w-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 300, damping: 26 }}
            style={{ height: compact ? 380 : 460, transformStyle: "preserve-3d" } as any}
          >
            {/* ===== MẶT TRƯỚC ===== */}
            <div className="backface-hidden group absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200/60 bg-gradient-to-br from-white via-white to-brand-50/50 p-8 shadow-card">
              {/* mesh & spotlight */}
              <div className="absolute inset-0 bg-mesh-brand opacity-40" />
              <motion.div
                className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-brand-100/60 to-violet-100/40 blur-2xl pointer-events-none"
                style={{
                  left: useTransform(glareX, [0, 100], ["10%", "40%"]),
                  top: useTransform(glareY, [0, 100], ["10%", "40%"]),
                } as any}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="relative overflow-hidden rounded-full border border-brand-200 bg-gradient-to-r from-brand-50 to-violet-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand shadow-soft"
                >
                  <span className="relative flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Từ vựng
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_linear_infinite]" />
                </motion.span>
                
                <motion.h2
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                  className="mt-5 text-center text-4xl font-extrabold tracking-tight text-slate-900"
                >
                  <span className="bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {card.front}
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-2 text-lg font-semibold text-slate-400 font-mono"
                >
                  {card.phonetic}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(card.front);
                  }}
                  className="group/btn relative mt-7 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand to-brand-700 text-white shadow-glow-brand transition-all hover:shadow-glow-brand"
                  aria-label="Phát âm"
                >
                  <Volume2 className="h-6 w-6 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <motion.div
                    animate={isHover ? { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-brand-400 blur-md"
                  />
                </motion.button>
                <p className="mt-6 text-xs font-semibold text-slate-400 animate-pulse">Nhấn để xem nghĩa ✨</p>
              </div>

              {/* shine sweep */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={isHover ? { x: "200%" } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </div>
            </div>

            {/* ===== MẶT SAU ===== */}
            <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden rounded-[2rem] border border-success-200/50 bg-gradient-to-br from-success-50 via-white to-emerald-50/60 p-8 shadow-card">
              <div className="absolute inset-0 bg-mesh-vibrant opacity-30" />
              <div className="relative z-10 flex flex-col gap-3">
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="inline-flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-success to-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-glow-success"
                >
                  <Check className="h-3 w-3" /> Nghĩa
                </motion.span>
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-extrabold tracking-tight text-slate-900"
                >
                  {card.back}
                </motion.h2>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-2 rounded-2xl border border-success-100 bg-white/80 backdrop-blur p-4 shadow-soft"
                >
                  <p className="text-base font-semibold text-slate-700">“{card.example}”</p>
                  <p className="mt-1 text-sm text-slate-500">{card.exampleVi}</p>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(card.example);
                  }}
                  className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-bold text-slate-600 shadow-soft hover:text-brand hover:border-brand-200 hover:shadow-glow-brand transition-all"
                >
                  <Volume2 className="h-4 w-4" /> Nghe ví dụ
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* shadow */}
          <motion.div
            animate={{ opacity: isHover && !flipped ? 0.15 : 0, scale: isHover && !flipped ? 0.92 : 0.9, y: isHover && !flipped ? 12 : 8 }}
            className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-300 to-violet-300 blur-2xl"
          />
        </motion.div>

        {/* invisible button for a11y click area */}
        <div
          role="button"
          tabIndex={0}
          onClick={onFlip}
          onKeyDown={handleKeyDown}
          className="sr-only"
        >
          Lật thẻ
        </div>
      </div>

      {/* Controls */}
      {(onKnown || onUnknown) && (
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex w-full max-w-md items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onUnknown}
            className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-danger-100 bg-gradient-to-br from-danger-50 to-red-50 py-3.5 font-extrabold text-danger transition-all hover:shadow-glow-success/20 hover:border-danger-200"
          >
            <X className="h-5 w-5" /> Chưa nhớ
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_0.6s_ease-out]" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onFlip}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border-2 border-slate-200 bg-white text-slate-500 shadow-soft hover:border-brand-200 hover:text-brand transition-all"
            aria-label="Lật lại"
          >
            <RotateCw className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onKnown}
            className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-br from-success to-emerald-600 py-3.5 font-extrabold text-white shadow-glow-success hover:shadow-glow-success"
          >
            <Check className="h-5 w-5" /> Đã nhớ
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_0.6s_ease-out]" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
