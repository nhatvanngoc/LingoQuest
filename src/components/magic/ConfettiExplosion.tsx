"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Piece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotate: number;
  shape: "square" | "circle" | "star";
}

const COLORS = ["#2563EB", "#8B5CF6", "#FBBF24", "#10B981", "#EF4444", "#06B6D4"];

export function ConfettiExplosion({
  active,
  origin = { x: 0.5, y: 0.5 },
  count = 60,
  onComplete,
}: {
  active: boolean;
  origin?: { x: number; y: number };
  count?: number;
  onComplete?: () => void;
}) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!active) return;
    const next: Piece[] = Array.from({ length: count }, (_, i) => {
      const angle = (Math.random() * Math.PI * 2);
      const speed = 4 + Math.random() * 12;
      return {
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
        vy: Math.sin(angle) * speed - Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 6 + Math.random() * 10,
        rotate: Math.random() * 360,
        shape: ["square", "circle", "star"][Math.floor(Math.random() * 3)] as any,
      };
    });
    setPieces(next);
    const timer = setTimeout(() => {
      setPieces([]);
      onComplete?.();
    }, 2500);
    return () => clearTimeout(timer);
  }, [active, count, onComplete]);

  if (!active && pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: typeof window !== "undefined" ? window.innerWidth * origin.x : 0,
              y: typeof window !== "undefined" ? window.innerHeight * origin.y : 0,
              opacity: 1,
              scale: 0,
              rotate: p.rotate,
            }}
            animate={{
              x: typeof window !== "undefined" ? window.innerWidth * origin.x + p.vx * 30 : p.vx * 30,
              y: typeof window !== "undefined" ? window.innerHeight * origin.y + p.vy * 30 + 0.5 * 9.8 * 2 : 0,
              opacity: 0,
              scale: [0, 1.2, 1, 0.8, 0],
              rotate: p.rotate + 720,
            }}
            transition={{
              duration: 2 + Math.random(),
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.shape === "circle" ? "50%" : p.shape === "star" ? "2px" : "3px",
              clipPath: p.shape === "star" ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" : undefined,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export function ConfettiBurstInline({ fire }: { fire: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      <AnimatePresence>
        {fire &&
          Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "50%", y: "50%", scale: 0, opacity: 1 }}
              animate={{
                x: `${20 + Math.random() * 60}%`,
                y: `${10 + Math.random() * 60}%`,
                scale: [0, 1.4, 0],
                opacity: [1, 1, 0],
                rotate: 360 + Math.random() * 360,
              }}
              transition={{ duration: 0.8 + Math.random() * 0.5, delay: i * 0.04 }}
              className="absolute h-2 w-2 rounded-full"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
