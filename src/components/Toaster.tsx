"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";

/* Toaster — Khu vực hiển thị toast (XP, lên cấp, nhắc nhở) góc trên phải */
const TONE: Record<string, string> = {
  xp: "border-brand-100 bg-brand-50",
  badge: "border-accent-100 bg-accent-50",
  info: "border-slate-200 bg-white",
  warn: "border-danger-100 bg-danger-50",
};

export function Toaster() {
  const { toasts, dismissToast } = useApp();

  return (
    <div className="pointer-events-none fixed right-3 top-16 z-[70] flex w-[min(92vw,340px)] flex-col gap-2 sm:right-5">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            layout
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={cn(
              "pointer-events-auto flex items-start gap-3 rounded-2xl border p-3 shadow-lift",
              TONE[t.tone],
            )}
          >
            <span className="text-2xl leading-none">{t.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-extrabold text-slate-900">{t.title}</p>
              {t.desc && <p className="text-xs font-semibold text-slate-500">{t.desc}</p>}
            </div>
            <button
              onClick={() => dismissToast(t.id)}
              className="rounded-lg p-1 text-slate-400 hover:bg-white/60 hover:text-slate-700"
              aria-label="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
