"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================
   Confetti — Hiệu ứng pháo giấy kết quả (không cần thư viện ngoài).
   Dùng Framer Motion để rải các miếng giấy màu từ trên xuống.
   ============================================================ */
const COLORS = ["#2563EB", "#10B981", "#FBBF24", "#EF4444", "#3B82F6", "#F97316"];

interface Piece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotate: number;
}

export function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!fire) return;
    const next = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 1.6 + Math.random() * 1.4,
      color: COLORS[i % COLORS.length],
      size: 7 + Math.random() * 8,
      rotate: Math.random() * 360,
    }));
    setPieces(next);
    const t = setTimeout(() => setPieces([]), 3400);
    return () => clearTimeout(t);
  }, [fire]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: -40, x: 0, opacity: 1, rotate: p.rotate }}
            animate={{ y: "110vh", rotate: p.rotate + 360, opacity: [1, 1, 0.9, 0] }}
            transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.5,
              backgroundColor: p.color,
              borderRadius: 2,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
