"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatViNumber } from "@/lib/format";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { useState, useEffect } from "react";

export function StreakBadge({ count, className }: { count: number; className?: string }) {
  const [isHot, setIsHot] = useState(false);
  
  useEffect(() => {
    if (count >= 7) setIsHot(true);
  }, [count]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-3 py-1.5 font-extrabold shadow-soft",
        count >= 3
          ? "border-amber-200 bg-gradient-to-r from-accent-50 to-orange-50 text-amber-600 shadow-glow-accent"
          : "bg-accent-50 border-accent-100 text-amber-600",
        className
      )}
      title={`Chuỗi ${count} ngày`}
    >
      {/* flame flicker container */}
      <motion.div
        animate={isHot ? { scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] } : {}}
        transition={{ duration: 0.6, repeat: isHot ? Infinity : 0, repeatDelay: 2 }}
        className="relative"
      >
        <Flame className="h-4 w-4 fill-accent text-accent" style={{ animation: count>0 ? "flame-flicker 0.8s ease-in-out infinite" : undefined }} />
        {count >= 7 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [1, 0.8, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
            className="absolute inset-0 rounded-full bg-accent/40 blur-sm"
          />
        )}
      </motion.div>
      <NumberTicker value={count} className="text-amber-600" />
      {count >= 30 && <span className="text-[10px]">🔥</span>}
      
      {/* shine sweep on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1s_linear]" />
      
      {/* hot glow */}
      {isHot && <div className="absolute -inset-1 -z-10 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />}
    </motion.div>
  );
}

export function XPCounter({ xp, className, showTicker = true }: { xp: number; className?: string; showTicker?: boolean }) {
  const [justGained, setJustGained] = useState(false);
  const [prevXp, setPrevXp] = useState(xp);

  useEffect(() => {
    if (xp > prevXp) {
      setJustGained(true);
      const t = setTimeout(() => setJustGained(false), 800);
      setPrevXp(xp);
      return () => clearTimeout(t);
    }
    setPrevXp(xp);
  }, [xp, prevXp]);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      animate={justGained ? { scale: [1, 1.15, 1], y: [0, -4, 0] } : {}}
      className={cn(
        "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand-200 bg-gradient-to-r from-brand-50 to-violet-50 px-3 py-1.5 font-extrabold text-brand shadow-soft",
        justGained && "shadow-glow-brand border-brand-300",
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
      {showTicker ? (
        <NumberTicker value={xp} className="text-brand" />
      ) : (
        <span>{formatViNumber(xp)}</span>
      )}

      <AnimatePresence>
        {justGained && (
          <motion.span
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{ y: -24, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.8 }}
            className="absolute -top-1 right-0 text-xs font-black text-brand"
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
        "relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-brand-600 font-black text-white shadow-glow-brand overflow-hidden",
        className
      )}
    >
      <span className="relative z-10 text-sm">{level}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-400 via-brand-400 to-accent-400 opacity-30 blur-[1px]"
      />
    </motion.div>
  );
}
