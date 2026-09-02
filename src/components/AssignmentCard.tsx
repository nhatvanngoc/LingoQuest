"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, Layers, ArrowRight, CheckCircle2, Clock, Flame } from "lucide-react";
import type { Assignment, AssignmentStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

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
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="truncate font-bold text-slate-900 group-hover:text-brand transition-colors">{a.title}</h4>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>
          <p className="truncate text-xs text-slate-400 mt-0.5">{a.lessonTitle}</p>

          <div className="mt-2.5 flex items-center gap-3">
            <div className="flex-1">
              <ProgressBar
                value={a.progress}
                tone={done ? "success" : a.status === "overdue" ? "danger" : a.status === "due" ? "accent" : "gradient"}
                height="h-2"
              />
            </div>
            <span className={cn("shrink-0 text-xs font-bold", isUrgent ? "text-amber-600" : "text-slate-400")}>
              {a.dueLabel}
            </span>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.1, x: 2 }} whileTap={{ scale: 0.9 }}>
          <Link
            href={href}
            className={cn(
              "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all",
              done
                ? "bg-gray-100 text-slate-400"
                : "bg-gradient-to-br from-brand to-brand-700 text-white shadow-md hover:shadow-lg"
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