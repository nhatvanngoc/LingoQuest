"use client";

import Link from "next/link";
import { ClipboardList, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Assignment, AssignmentStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

/* Cấu hình màu badge theo trạng thái hạn nộp */
const STATUS: Record<AssignmentStatus, { variant: "success" | "accent" | "danger" | "neutral"; label: string }> = {
  ontrack: { variant: "success", label: "Còn hạn" },
  due: { variant: "accent", label: "Sắp hết hạn" },
  overdue: { variant: "danger", label: "Quá hạn" },
  done: { variant: "neutral", label: "Đã nộp" },
};

export function AssignmentCard({ a }: { a: Assignment }) {
  const Icon = a.type === "exercise" ? ClipboardList : Layers;
  const done = a.status === "done";
  const href = a.type === "exercise" ? `/exercise/${a.id}` : `/flashcards/deck-1`;

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-3xl border bg-white p-4 transition-shadow hover:shadow-card",
        done ? "border-slate-100" : "border-slate-100",
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
          done ? "bg-slate-100 text-slate-400" : "bg-brand-50 text-brand",
        )}
      >
        {done ? <CheckCircle2 className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="truncate font-bold text-slate-900">{a.title}</h4>
          <Badge variant={STATUS[a.status].variant}>{STATUS[a.status].label}</Badge>
        </div>
        <p className="truncate text-xs text-slate-400">{a.lessonTitle}</p>

        <div className="mt-2 flex items-center gap-2">
          <ProgressBar value={a.progress} tone={done ? "success" : a.status === "overdue" ? "danger" : "brand"} height="h-1.5" />
          <span className="shrink-0 text-xs font-bold text-slate-400">{a.dueLabel}</span>
        </div>
      </div>

      <Link
        href={href}
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
          done ? "bg-slate-100 text-slate-400" : "bg-brand text-white hover:bg-brand-700",
        )}
        aria-label="Làm bài"
      >
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
