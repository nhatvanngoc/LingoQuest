"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Zap,
  Flame,
  BookOpen,
  Star,
  TrendingUp,
  Crown,
  Medal,
  Target,
  Sparkles,
  Trophy,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ProgressBar, CircularProgress } from "@/components/ProgressBar";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { WEEK_ACTIVITY, BADGES } from "@/lib/mock/data";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";
import { fadeUpReal, staggerContainer, viewportOnce } from "@/lib/motion";
import type { LeaderRow } from "@/lib/types";

export default function ProgressPage() {
  const { xp, level, streak, wordsLearned, xpIntoLevel, xpForNext, levelPct } = useApp();
  const [leaderboard, setLeaderboard] = useState<LeaderRow[]>([]);
  const maxMin = Math.max(...WEEK_ACTIVITY.map((d) => d.minutes), 1);
  const totalMin = WEEK_ACTIVITY.reduce((s, d) => s + d.minutes, 0);

  useEffect(() => {
    let active = true;
    fetch("/api/classroom/leaderboard")
      .then((r) => r.json())
      .then((data: { rows?: { id: string; name: string; xp: number }[] }) => {
        if (!active) return;
        setLeaderboard((data.rows ?? []).map((r) => ({ ...r, me: false })));
      })
      .catch(() => { if (!active) setLeaderboard([]); });
    return () => { active = false; };
  }, []);

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center justify-between">
          <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand transition-colors group">
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Quay lại
          </Link>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand border border-brand-100">Hồ sơ cá nhân</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-700 text-white shadow-md"><Target className="h-5 w-5" /></span>
          Tiến độ học tập
        </motion.h1>

        {/* Tổng quan 4 chỉ số */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { icon: Zap, label: "Tổng XP", value: xp, gradient: "from-brand-500 to-brand-600", bg: "from-brand-50" },
            { icon: Star, label: "Cấp độ", value: level, gradient: "from-amber-400 to-amber-500", bg: "from-amber-50", prefix: "Lv. " },
            { icon: Flame, label: "Chuỗi ngày", value: streak, gradient: "from-orange-400 to-orange-500", bg: "from-orange-50" },
            { icon: BookOpen, label: "Từ đã thuộc", value: wordsLearned, gradient: "from-emerald-400 to-emerald-500", bg: "from-emerald-50" },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUpReal} transition={{ delay: i * 0.07 } as any} whileHover={{ y: -3 }}>
              <div className={cn("h-full rounded-xl bg-gradient-to-br p-5 shadow-sm border border-gray-100", stat.bg)}>
                <div className={cn("flex h-11 w-11 items-center justify-center rounded-lg text-white shadow-md", stat.gradient)}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                  {stat.prefix}
                  <NumberTicker value={stat.value} />
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Biểu đồ hoạt động 7 ngày */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-bold text-slate-900">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand"><TrendingUp className="h-4 w-4" /></span>
                  Hoạt động 7 ngày qua
                </h2>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 border border-emerald-100">
                  {totalMin} phút
                </span>
              </div>
              <p className="flex items-center gap-1.5 text-sm text-slate-400">
                Số phút học mỗi ngày <span className="text-slate-300">·</span> Chuỗi ngày
              </p>
              {totalMin === 0 && (
                <p className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-brand-200 bg-brand-50/50 px-4 py-3 text-sm font-bold text-brand">
                  <Sparkles className="h-4 w-4 shrink-0" /> Chưa có hoạt động tuần này — học bài đầu tiên để bắt đầu!
                </p>
              )}
              <div className="mt-4 mb-6 h-56 flex items-stretch justify-between gap-2">
                {WEEK_ACTIVITY.map((d, i) => {
                  const h = d.minutes === 0 ? 6 : (d.minutes / maxMin) * 100;
                  const isToday = i === WEEK_ACTIVITY.length - 1;
                  return (
                    <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                      <div className="relative flex min-h-0 w-full flex-1 items-end justify-center">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${Math.max(h, 6)}%` }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ scale: 1.05 }}
                          className={cn(
                            "relative w-full rounded-t-lg transition-all cursor-pointer",
                            d.minutes === 0 ? "bg-gray-100" : "bg-gradient-to-t from-brand to-brand-400",
                            isToday && d.minutes > 0 && "ring-2 ring-brand-300"
                          )}
                          title={`${d.minutes} phút`}
                        />
                      </div>
                      <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold", d.minutes === 0 ? "text-slate-300" : isToday ? "bg-brand text-white" : "text-slate-400")}>
                        {d.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Thành tích */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-md">
              <h2 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600"><Crown className="h-4 w-4" /></span>
                Thành tích
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <CircularProgress value={levelPct} size={64} strokeWidth={5} tone="brand" />
                <div>
                  <p className="text-sm font-bold text-slate-500">Cấp độ hiện tại</p>
                  <p className="text-xl font-bold text-slate-900">Cấp {level}</p>
                  <p className="text-xs text-slate-400">{xpIntoLevel} / {xpForNext} XP</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-bold text-slate-500">Thẻ bài đã học</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min(100, wordsLearned)}%` }} viewport={viewportOnce} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-brand to-brand-500" />
                </div>
                <p className="mt-1 text-xs font-bold text-brand">{wordsLearned} từ</p>
              </div>
              <div className="space-y-2">
                {BADGES.slice(0, 5).map((b, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg p-2.5 bg-gray-50">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">{b.icon}</span>
                    <span className="text-sm font-bold text-slate-600">{b.label}</span>
                    <span className="ml-auto text-xs text-slate-400">{b.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leaderboard */}
        {leaderboard.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
              <h2 className="flex items-center gap-2 font-bold text-slate-900 px-5 pt-5">
                <Crown className="h-5 w-5 text-amber" /> Bảng xếp hạng tuần
              </h2>
              <div className="flex flex-col divide-y divide-gray-100">
                {leaderboard.map((row, i) => (
                  <div key={row.id} className={cn("flex items-center gap-3 px-5 py-3", row.me ? "bg-brand-50" : "bg-slate-50")}>
                    <span className={cn("flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold", i === 0 ? "bg-amber text-slate-900" : i === 1 ? "bg-gray-300 text-slate-700" : i === 2 ? "bg-orange-700 text-white" : "bg-gray-200 text-slate-500")}>
                      {i < 3 ? <Medal className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <span className={cn("flex-1 truncate text-sm font-bold", row.me ? "text-brand" : "text-slate-700")}>
                      {row.name} {row.me && "(Bạn)"}
                    </span>
                    <span className="text-sm font-bold text-slate-500">{row.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AppShell>
  );
}