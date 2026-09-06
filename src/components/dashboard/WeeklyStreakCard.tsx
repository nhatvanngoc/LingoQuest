"use client";

import { motion } from "framer-motion";
import { Flame, Sparkles, Trophy } from "lucide-react";
import { useApp } from "@/lib/state/app-context";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

const DAYS = [
  { key: "mon", label: "T2" },
  { key: "tue", label: "T3" },
  { key: "wed", label: "T4" },
  { key: "thu", label: "T5" },
  { key: "fri", label: "T6" },
  { key: "sat", label: "T7" },
  { key: "sun", label: "CN" },
];

export function WeeklyStreakCard() {
  const { streak, xp } = useApp();
  // Get current day of week (0 = Sun, 1 = Mon, ... 6 = Sat)
  const todayIdx = (new Date().getDay() + 6) % 7; // Map so 0 = Mon, 6 = Sun
  const dailyTargetXp = 50;
  const todayEarnedXp = Math.min(dailyTargetXp, xp % 100);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500 shadow-sm">
            <Flame className="h-4 w-4 fill-amber-500" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Chuỗi học tập</h3>
            <p className="text-[11px] text-slate-400 font-semibold">{streak > 0 ? `Đang giữ chuỗi ${streak} ngày!` : "Bắt đầu chuỗi từ hôm nay"}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-600 border border-amber-200/60">
          🔥 {streak} ngày
        </span>
      </div>

      {/* 7-Day Heatmap circles */}
      <div className="grid grid-cols-7 gap-1.5 py-2">
        {DAYS.map((d, i) => {
          const isPast = i < todayIdx;
          const isToday = i === todayIdx;
          const isActive = (isPast && streak > 0) || (isToday && streak > 0);

          return (
            <div key={d.key} className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold text-slate-400">{d.label}</span>
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all",
                  isActive
                    ? "bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-sm ring-2 ring-amber-300/50"
                    : isToday
                    ? "border-2 border-dashed border-amber-400 bg-amber-50/50 text-amber-600"
                    : "border border-gray-200 bg-gray-50 text-slate-300"
                )}
              >
                {isActive ? (
                  <Flame className="h-4 w-4 fill-white" />
                ) : isToday ? (
                  <span className="text-xs">⚡</span>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                )}
                {isToday && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                  </span>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Today's XP Goal */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs font-bold mb-1.5">
          <span className="text-slate-500 flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-brand" /> Mục tiêu hôm nay
          </span>
          <span className="text-brand tabular-nums font-extrabold">{todayEarnedXp}/{dailyTargetXp} XP</span>
        </div>
        <ProgressBar value={(todayEarnedXp / dailyTargetXp) * 100} height="h-2" tone="gradient" />
      </div>
    </div>
  );
}
