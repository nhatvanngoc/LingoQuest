"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, Layers, ArrowRight, CheckCircle2, Clock, Flame } from "lucide-react";
import type { Assignment, AssignmentStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

const STATUS: Record<AssignmentStatus, { variant: "success" | "accent" | "danger" | "neutral"; label: string; icon: typeof Clock }> = {
  ontrack: { variant: "success", label: "Còn hạn", icon: Clock },
  due: { variant: "accent", label: "Sắp hết hạn", icon: Flame },
  overdue: { variant: "danger", label: "Quá hạn", icon: Flame },
  done: { variant: "neutral", label: "Đã nộp", icon: CheckCircle2 },
};

export function AssignmentCard({ a, index = 0 }: { a: Assignment; index?: number }) {
  const Icon = a.type === "exercise" ? ClipboardList : Layers;
  
  // Safe status calculation with fallbacks
  const resolveStatus = (): AssignmentStatus => {
    if (a.status && STATUS[a.status]) return a.status;
    const dueAt = (a as any).dueAt;
    if (dueAt) {
      const now = Date.now();
      const due = new Date(dueAt).getTime();
      const diffHours = (due - now) / (1000 * 60 * 60);
      if (diffHours < 0) return "overdue";
      if (diffHours <= 48) return "due";
    }
    return "ontrack";
  };

  const statusKey = resolveStatus();
  const statusInfo = STATUS[statusKey] || STATUS.ontrack;
  const StatusIcon = statusInfo?.icon || Clock;
  const done = statusKey === "done";
  const isUrgent = statusKey === "due" || statusKey === "overdue";

  const href = done ? "/progress#submissions" : (a.type === "exercise" ? `/exercise/${a.id}` : `/flashcards/${(a as any).deckId || "deck-1"}`);
  const progressValue = typeof a.progress === "number" ? a.progress : done ? 100 : 0;
  const lessonTitle = a.lessonTitle || (a as any).description || "Bài tập rèn luyện";
  const dueLabel = a.dueLabel || ((a as any).dueAt ? `Hạn: ${new Date((a as any).dueAt).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" })}` : "Còn hạn");

  const difficultyLevel = (a as any).difficultyLevel;
  const targetXp = (a as any).targetXp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
    >
      <div className={cn("flex items-center gap-4 p-4", done && "bg-gray-50/50")}>
        <motion.span
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={cn(
            "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
            done
              ? "bg-gray-100 text-slate-400"
              : isUrgent
              ? "bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600"
              : "bg-gradient-to-br from-brand-50 to-brand-100 text-brand"
          )}
        >
          {done ? <CheckCircle2 className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
        </motion.span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h4 className="truncate font-bold text-slate-900 group-hover:text-brand transition-colors">{a.title || "Bài tập"}</h4>
            {difficultyLevel && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-extrabold border",
                  difficultyLevel.includes("C1") || difficultyLevel.includes("THPT")
                    ? "bg-purple-50 text-purple-700 border-purple-200"
                    : difficultyLevel.includes("B")
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-emerald-50 text-emerald-700 border-emerald-200"
                )}
              >
                {difficultyLevel}
              </span>
            )}
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
            {targetXp && !done && (
              <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-[10px] font-extrabold text-amber-700 border border-amber-200">
                +{targetXp} XP
              </span>
            )}
          </div>
          <p className="truncate text-xs text-slate-400 mt-0.5">{lessonTitle}</p>

          <div className="mt-2.5 flex items-center gap-3">
            <div className="flex-1">
              <ProgressBar
                value={progressValue}
                tone={done ? "success" : statusKey === "overdue" ? "danger" : statusKey === "due" ? "accent" : "gradient"}
                height="h-2"
              />
            </div>
            <span className={cn("shrink-0 text-xs font-bold", isUrgent ? "text-amber-600" : "text-slate-400")}>
              {dueLabel}
            </span>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.1, x: 2 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={href}
            onClick={() => {
              if (!done) sound.playPop();
            }}
            className={cn(
              "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all active:scale-95",
              done
                ? "bg-gray-100 text-slate-400"
                : "bg-gradient-to-br from-brand to-brand-700 text-white shadow-md hover:shadow-lg border-b-2 border-brand-800"
            )}
            aria-label="Làm bài"
          >
            <ArrowRight className="h-4 w-4 relative z-10" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}