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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[60%] w-[80%] bg-gradient-to-b from-brand-50/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
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
        <div className="absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      </div>
      <div className="relative z-10 w-full">{children}</div>
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
            background: `conic-gradient(from 0deg, transparent, #0F766E, #7C3AED, #D97706, transparent)`,
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
        "inline-flex bg-[linear-gradient(100deg,#0F766E,#7C3AED,#D97706,#0F766E)] bg-[length:200%_100%] bg-clip-text text-transparent font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}