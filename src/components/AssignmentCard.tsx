"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, Layers, ArrowRight, CheckCircle2, Clock, Flame } from "lucide-react";
import type { Assignment, AssignmentStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { SpotlightCard } from "@/components/magic/SpotlightCard";
import { cn } from "@/lib/utils";

/* Cấu hình màu badge theo trạng thái hạn nộp */
const STATUS: Record<AssignmentStatus, { variant: "success" | "accent" | "danger" | "neutral"; label: string; icon: typeof Clock }> = {
  ontrack: { variant: "success", label: "Còn hạn", icon: Clock },
  due: { variant: "accent", label: "Sắp hết hạn", icon: Flame },
  overdue: { variant: "danger", label: "Quá hạn", icon: Flame },
  done: { variant: "neutral", label: "Đã nộp", icon: CheckCircle2 },
};

export function AssignmentCard({ a, index = 0 }: { a: Assignment; index?: number }) {
  const Icon = a.type === "exercise" ? ClipboardList : Layers;
  const done = a.status === "done";
  const href = a.type === "exercise" ? `/exercise/${a.id}` : `/flashcards/deck-1`;
  const statusInfo = STATUS[a.status];
  const StatusIcon = statusInfo.icon;
  const isUrgent = a.status === "due" || a.status === "overdue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="group"
    >
      <SpotlightCard
        className={cn(
          "relative border bg-white p-[1px]",
          done ? "border-slate-100" : "border-slate-100",
          isUrgent && "border-accent-200 shadow-glow-accent"
        )}
        spotlightColor={done ? "rgba(16,185,129,0.08)" : isUrgent ? "rgba(251,191,36,0.15)" : "rgba(37,99,235,0.1)"}
      >
        {/* urgency pulse */}
        {isUrgent && (
          <motion.div
            animate={{ opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-100/50 to-orange-100/50 pointer-events-none"
          />
        )}

        <div className={cn(
          "relative flex items-center gap-4 rounded-[calc(1.75rem-1px)] bg-white p-4",
          done && "bg-slate-50/50"
        )}>
          {/* icon with animated bg */}
          <motion.span
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={cn(
              "relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl",
              done
                ? "bg-slate-100 text-slate-400"
                : isUrgent
                ? "bg-gradient-to-br from-accent-100 to-orange-100 text-amber-600 shadow-glow-accent"
                : "bg-gradient-to-br from-brand-50 to-violet-50 text-brand shadow-soft"
            )}
          >
            {done ? <CheckCircle2 className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
            {!done && <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
          </motion.span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="truncate font-bold text-slate-900 group-hover:text-brand transition-colors">{a.title}</h4>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Badge variant={STATUS[a.status].variant} className="flex items-center gap-1">
                  <StatusIcon className="h-3 w-3" />
                  {STATUS[a.status].label}
                </Badge>
              </motion.div>
            </div>
            <p className="truncate text-xs text-slate-400 mt-0.5">{a.lessonTitle}</p>

            <div className="mt-2.5 flex items-center gap-3">
              <div className="flex-1">
                <ProgressBar
                  value={a.progress}
                  tone={done ? "success" : a.status === "overdue" ? "danger" : a.status === "due" ? "accent" : "gradient"}
                  height="h-2"
                  shimmer={!done}
                  glow={!done}
                />
              </div>
              <span className={cn(
                "shrink-0 text-xs font-bold",
                isUrgent ? "text-amber-600 animate-pulse" : "text-slate-400"
              )}>
                {a.dueLabel}
              </span>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.1, x: 2 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={href}
              className={cn(
                "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all",
                done
                  ? "bg-slate-100 text-slate-400"
                  : "bg-gradient-to-br from-brand to-brand-700 text-white shadow-glow-brand hover:shadow-glow-brand hover:from-brand-600 hover:to-brand-800"
              )}
              aria-label="Làm bài"
            >
              <ArrowRight className="h-4 w-4 relative z-10" />
              {!done && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
              )}
            </Link>
          </motion.div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
