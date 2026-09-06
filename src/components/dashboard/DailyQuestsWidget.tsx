"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Sparkles } from "lucide-react";
import { useApp } from "@/lib/state/app-context";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

export function DailyQuestsWidget() {
  const { dailyTasks } = useApp();

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shadow-sm">
            <Target className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Nhiệm vụ hôm nay</h3>
            <p className="text-[11px] text-slate-400 font-semibold">Tự động hoàn thành khi học</p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
          {dailyTasks.filter((t) => t.current >= t.target).length}/{dailyTasks.length} Xong
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {dailyTasks.map((task) => {
          const isDone = task.current >= task.target;
          const pct = Math.min(100, Math.round((task.current / task.target) * 100));

          return (
            <motion.div
              key={task.id}
              whileHover={{ scale: 1.01 }}
              className={cn(
                "group rounded-xl border p-3 transition-all",
                isDone
                  ? "border-emerald-200 bg-emerald-50/40"
                  : "border-gray-100 bg-slate-50/60 hover:bg-slate-50"
              )}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  {isDone ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <span className="h-4 w-4 shrink-0 rounded-full border-2 border-slate-300 group-hover:border-brand transition-colors" />
                  )}
                  <span className={cn("text-xs font-bold truncate", isDone ? "text-slate-800 line-through opacity-80" : "text-slate-800")}>
                    {task.label}
                  </span>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-extrabold flex items-center gap-0.5",
                    isDone
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-amber-100 text-amber-700"
                  )}
                >
                  <Sparkles className="h-2.5 w-2.5" /> +{task.reward} XP
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <ProgressBar value={pct} height="h-1.5" tone={isDone ? "success" : "gradient"} />
                </div>
                <span className="shrink-0 text-[10px] font-bold text-slate-400 tabular-nums">
                  {task.current}/{task.target}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
