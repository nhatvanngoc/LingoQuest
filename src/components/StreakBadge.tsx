"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatViNumber } from "@/lib/format";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { useState, useEffect } from "react";

export function StreakBadge({ count, className }: { count: number; className?: string }) {
  const isHot = count >= 7;
  const hasStreak = count >= 1;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-3 py-1.5 font-bold shadow-sm select-none",
        count >= 3
          ? "border-amber-300 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 text-amber-700 shadow-amber-500/10"
          : "bg-amber-50/80 border-amber-200 text-amber-700",
        hasStreak && "shadow-[0_2px_10px_rgba(245,158,11,0.2)]",
        className
      )}
      title={`Chuỗi ${count} ngày liên tiếp`}
    >
      <motion.div
        animate={hasStreak ? { scale: [1, 1.18, 1], rotate: [0, -6, 6, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Flame className={cn("h-4 w-4 transition-colors", hasStreak ? "fill-amber-500 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" : "text-slate-400")} />
        {hasStreak && (
          <motion.div
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 -z-10 rounded-full bg-amber-400/40 blur-[4px]"
          />
        )}
      </motion.div>
      <span className="font-mono tabular-nums tracking-tight">
        <NumberTicker value={count} className="text-amber-800 font-extrabold" />
      </span>

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1s_linear]" />

      {hasStreak && <div className="absolute -inset-1 -z-10 rounded-full bg-amber-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />}
    </motion.div>
  );
}

export function XPCounter({ xp, className, showTicker = true }: { xp: number; className?: string; showTicker?: boolean }) {
  const [justGained, setJustGained] = useState(false);
  const [prevXp, setPrevXp] = useState(xp);

  useEffect(() => {
    if (xp > prevXp) {
      // Use requestAnimationFrame to defer setState outside effect body
      requestAnimationFrame(() => {
        setJustGained(true);
        setPrevXp(xp);
      });
      const t = setTimeout(() => requestAnimationFrame(() => setJustGained(false)), 800);
      return () => clearTimeout(t);
    }
    requestAnimationFrame(() => setPrevXp(xp));
  }, [xp]);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      animate={justGained ? { scale: [1, 1.15, 1], y: [0, -4, 0] } : {}}
      className={cn(
        "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand-200 bg-gradient-to-r from-brand-50 to-violet-50 px-3 py-1.5 font-bold text-brand shadow-sm",
        justGained && "shadow-md border-brand-300",
        className
      )}
      title={`${xp} XP`}
    >
      <motion.span
        animate={justGained ? { rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.5 }}
        className="text-base leading-none"
      >
        ⚡
      </motion.span>
      <span className="font-mono tabular-nums tracking-tight">
        {showTicker ? (
          <NumberTicker value={xp} className="text-brand font-extrabold" />
        ) : (
          <span>{formatViNumber(xp)}</span>
        )}
      </span>

      <AnimatePresence>
        {justGained && (
          <motion.span
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{ y: -24, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.8 }}
            className="absolute -top-1 right-0 text-xs font-bold text-brand"
          >
            +{xp - prevXp}
          </motion.span>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-200/50 to-transparent group-hover:animate-[shimmer_1s_linear]" />
    </motion.div>
  );
}

export function LevelBadge({ level, className }: { level: number; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-brand-600 font-black text-white shadow-md overflow-hidden",
        className
      )}
    >
      <span className="relative z-10 text-sm">{level}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-violet-400 via-brand-400 to-amber-400 opacity-30 blur-[1px]"
      />
    </motion.div>
  );
}