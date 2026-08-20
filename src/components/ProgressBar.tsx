"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tone = "brand" | "success" | "accent" | "danger" | "neutral" | "violet" | "gradient";

const TONES: Record<Tone, string> = {
  brand: "bg-gradient-to-r from-brand-500 to-brand-600",
  success: "bg-gradient-to-r from-emerald-400 to-success",
  accent: "bg-gradient-to-r from-amber-300 to-accent",
  danger: "bg-gradient-to-r from-red-400 to-danger",
  neutral: "bg-gradient-to-r from-slate-300 to-slate-400",
  violet: "bg-gradient-to-r from-violet-400 to-brand-500",
  gradient: "bg-gradient-to-r from-brand-500 via-violet-500 to-accent-400",
};

export function ProgressBar({
  value,
  tone = "brand",
  className,
  showLabel = false,
  height = "h-2.5",
  animated = true,
  shimmer = true,
  glow = false,
}: {
  value: number;
  tone?: Tone;
  className?: string;
  showLabel?: boolean;
  height?: string;
  animated?: boolean;
  shimmer?: boolean;
  glow?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, value));
  const isComplete = pct >= 100;
  
  return (
    <div className={cn("w-full", className)}>
      <div className={cn("group relative w-full overflow-hidden rounded-full bg-slate-100", height)}>
        {/* track inner shadow */}
        <div className="absolute inset-0 rounded-full shadow-inner opacity-50" />
        
        <motion.div
          className={cn(
            "relative h-full rounded-full",
            TONES[tone],
            glow && "shadow-glow-brand",
            isComplete && "shadow-glow-success",
            "overflow-hidden"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{
            duration: animated ? 0.8 : 0,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          {/* shimmer sweep */}
          {shimmer && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          )}
          {/* inner highlight */}
          <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-full" />
        </motion.div>

        {/* completion pulse */}
        {isComplete && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full aspect-square rounded-full bg-success/30"
          />
        )}
      </div>
      {showLabel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-1.5 flex justify-between text-xs font-bold"
        >
          <span className="text-slate-400">{Math.round(pct)}%</span>
          {isComplete && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-success"
            >
              Hoàn thành! ✨
            </motion.span>
          )}
        </motion.div>
      )}
    </div>
  );
}

export function CircularProgress({
  value,
  size = 56,
  strokeWidth = 5,
  tone = "brand",
  children,
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  tone?: Tone;
  children?: React.ReactNode;
}) {
  const pct = Math.max(0, Math.min(100, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (pct / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgb(241 245 249)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gradient-circular)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - dash }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="gradient-circular" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children ?? <span className="text-sm font-extrabold">{Math.round(pct)}%</span>}
      </div>
    </div>
  );
}
