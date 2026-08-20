"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, Zap, Trophy } from "lucide-react";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";

const TONE: Record<string, { bg: string; iconBg: string; border: string }> = {
  xp: { bg: "from-brand-50 to-violet-50", iconBg: "bg-brand text-white", border: "border-brand-200" },
  badge: { bg: "from-accent-50 to-orange-50", iconBg: "bg-accent text-slate-900", border: "border-accent-200" },
  info: { bg: "from-white to-slate-50", iconBg: "bg-slate-100 text-slate-600", border: "border-slate-200" },
  warn: { bg: "from-danger-50 to-red-50", iconBg: "bg-danger text-white", border: "border-danger-200" },
};

const TONE_ICON: Record<string, typeof Zap> = {
  xp: Zap,
  badge: Trophy,
  info: Sparkles,
  warn: Sparkles,
};

export function Toaster() {
  const { toasts, dismissToast } = useApp();

  return (
    <div className="pointer-events-none fixed right-3 top-16 z-[70] flex w-[min(92vw,360px)] flex-col gap-3 sm:right-5">
      <AnimatePresence>
        {toasts.map((t, i) => {
          const style = TONE[t.tone] || TONE.info;
          const IconComp = TONE_ICON[t.tone] || Sparkles;
          return (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, x: 80, scale: 0.8, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, x: 80, scale: 0.8, filter: "blur(8px)", transition: { duration: 0.2 } }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 26,
                delay: i * 0.04,
              }}
              className={cn(
                "pointer-events-auto group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-4 shadow-lift backdrop-blur-xl",
                style.bg,
                style.border
              )}
            >
              {/* shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_linear]" />
              
              <div className="relative flex items-start gap-3">
                <motion.span
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                  className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-soft text-lg", style.iconBg)}
                >
                  {t.icon || <IconComp className="h-5 w-5" />}
                </motion.span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-extrabold leading-tight text-slate-900">{t.title}</p>
                  {t.desc && <p className="mt-1 text-xs font-semibold leading-snug text-slate-500">{t.desc}</p>}
                  {/* progress bar auto dismiss */}
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="mt-2 h-1 rounded-full bg-slate-900/10"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dismissToast(t.id)}
                  className="rounded-xl bg-white/60 p-1.5 text-slate-400 backdrop-blur hover:bg-white hover:text-slate-700 transition-colors"
                  aria-label="Đóng"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>

              {/* glow */}
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-brand/10 via-violet/5 to-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
