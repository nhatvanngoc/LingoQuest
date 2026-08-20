"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ["#2563EB", "#8B5CF6", "#FBBF24", "#10B981", "#EF4444", "#06B6D4", "#F97316"];

interface Piece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotate: number;
  x: number;
  shape: number;
}

export function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!fire) return;
    const next = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 1.8 + Math.random() * 1.6,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 10,
      rotate: Math.random() * 360,
      x: (Math.random() - 0.5) * 200,
      shape: Math.floor(Math.random() * 3),
    }));
    setPieces(next);
    const t = setTimeout(() => setPieces([]), 4200);
    return () => clearTimeout(t);
  }, [fire]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: -40, x: p.left + "%", opacity: 1, rotate: p.rotate, scale: 0 }}
            animate={{
              y: "110vh",
              x: `calc(${p.left}% + ${p.x}px)`,
              rotate: p.rotate + 540 + Math.random() * 360,
              opacity: [1, 1, 0.9, 0],
              scale: [0, 1.2, 1, 0.8],
            }}
            transition={{ duration: p.duration, delay: p.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "absolute",
              left: 0,
              width: p.size,
              height: p.shape === 1 ? p.size : p.size * 0.5,
              backgroundColor: p.color,
              borderRadius: p.shape === 0 ? 2 : p.shape === 1 ? "50%" : 4,
              boxShadow: `0 0 8px ${p.color}40`,
            }}
          />
        ))}
      </AnimatePresence>
      {/* central burst glow */}
      <AnimatePresence>
        {fire && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: [0, 1.5, 2], opacity: [0.8, 0.4, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300 via-violet-300 to-accent-200 blur-2xl"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function Celebration({ fire, title }: { fire: boolean; title?: string }) {
  return (
    <>
      <Confetti fire={fire} />
      <AnimatePresence>
        {fire && title && (
          <motion.div
            initial={{ scale: 0, y: 20, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="pointer-events-none fixed left-1/2 top-1/2 z-[61] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-8 py-4 shadow-lift border border-violet-100"
          >
            <p className="text-xl font-black bg-gradient-to-r from-brand to-violet-500 bg-clip-text text-transparent">{title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
