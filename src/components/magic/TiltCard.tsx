"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  tiltMax = 12,
  scale = 1.03,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  scale?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (centerY - e.clientY) / (rect.height / 2);
    
    setRotate({
      x: percentY * tiltMax,
      y: percentX * tiltMax,
    });
    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setRotate({ x: 0, y: 0 });
        setIsHover(false);
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isHover ? scale : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" } as any}
      className={cn("relative will-change-transform", className)}
    >
      <div className="relative overflow-hidden rounded-3xl" style={{ transformStyle: "preserve-3d" } as any}>
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 rounded-3xl"
            style={{
              opacity: isHover ? 0.15 : 0,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, white, transparent 60%)`,
              mixBlendMode: "overlay" as any,
            }}
          />
        )}
      </div>
      {/* shadow underneath that moves */}
      <motion.div
        className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-brand/20 via-violet/15 to-accent/15 blur-xl"
        animate={{
          opacity: isHover ? 1 : 0,
          scale: isHover ? 1.05 : 0.95,
          x: rotate.y * -0.5,
          y: rotate.x * 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
}
