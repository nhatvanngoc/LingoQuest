"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-cream", className)}>
      {/* Beams layer */}
      <div className="pointer-events-none absolute inset-0">
        {/* beam 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 -left-[20%] h-[120%] w-[60%] -rotate-12 bg-gradient-to-r from-transparent via-brand-200/30 to-transparent blur-[1px]"
        />
        {/* beam 2 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[10%] -right-[10%] h-[100%] w-[50%] rotate-12 bg-gradient-to-r from-transparent via-violet-100/40 to-transparent blur-[1px]"
        />
        {/* beam 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-0 left-[30%] h-[60%] w-[80%] -rotate-6 bg-gradient-to-r from-transparent via-accent-100/30 to-transparent"
        />
        {/* dots grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* mesh */}
        <div className="absolute inset-0 bg-mesh-brand opacity-60" />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-transparent to-transparent" />
      </div>
      {/* w-full: khi root là flex (vd. hero "flex items-center"), wrapper này phải
          chiếm hết bề ngang — nếu không nó co theo nội dung và DÍNH TRÁI trên màn rộng,
          để lại khoảng trống lớn bên phải. */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export function BackgroundBeamsWithCollision({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative min-h-[60vh] overflow-hidden bg-slate-950", className)}>
      {/* collision beams */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 0.6 }}
            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            className="absolute top-0 w-px bg-gradient-to-b from-transparent via-brand-400/50 to-transparent"
            style={{ left: `${15 + i * 14}%`, transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
          />
        ))}
        {/* glow at bottom */}
        <div className="absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function MovingBorder({
  children,
  className,
  borderRadius = "1.75rem",
  duration = 3000,
}: {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  duration?: number;
}) {
  return (
    <div className={cn("relative p-[1px] overflow-hidden", className)} style={{ borderRadius }}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent, #2563eb, #8b5cf6, #fbbf24, transparent)`,
            animation: `border-spin ${duration}ms linear infinite`,
          }}
        />
      </div>
      <div className="relative rounded-[inherit] bg-white" style={{ borderRadius }}>
        {children}
      </div>
    </div>
  );
}

export function AnimatedShinyText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex animate-gradient-x bg-[linear-gradient(100deg,#2563eb,#8b5cf6,#fbbf24,#2563eb)] bg-[length:200%_100%] bg-clip-text text-transparent font-extrabold",
        className
      )}
    >
      {children}
    </span>
  );
}
