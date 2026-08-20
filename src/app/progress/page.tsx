"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  Lock,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ProgressBar } from "@/components/ProgressBar";
import { formatViNumber } from "@/lib/format";
import { WEEK_ACTIVITY, BADGES } from "@/lib/mock/data";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";
import type { LeaderRow } from "@/lib/types";

/* Trang tiến độ cá nhân */

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
      .catch(() => {
        if (!active) return;
        setLeaderboard([]);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        <Link
          href="/dashboard"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" /> Quay lại
        </Link>

        <h1 className="text-2xl font-extrabold text-slate-900">Tiến độ học tập</h1>

        {/* ===== Tổng quan 4 chỉ số ===== */}
        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={Zap} label="Tổng XP" value={formatViNumber(xp)} tone="brand" />
          <StatCard icon={Star} label="Cấp độ" value={`Lv. ${level}`} tone="accent" />
          <StatCard icon={Flame} label="Chuỗi ngày" value={`${streak} 🔥`} tone="danger" />
          <StatCard icon={BookOpen} label="Từ đã thuộc" value={`${wordsLearned}`} tone="success" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* ===== Biểu đồ hoạt động 7 ngày ===== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
          >
            <div className="mb-1 flex items-center justify-between">
              <h2 className="font-extrabold text-slate-900">Hoạt động 7 ngày qua</h2>
              <span className="flex items-center gap-1 text-sm font-bold text-success">
                <TrendingUp className="h-4 w-4" /> {totalMin} phút
              </span>
            </div>
            <p className="mb-5 text-sm text-slate-400">Số phút học mỗi ngày</p>

            <div className="flex h-44 items-end justify-between gap-2">
              {WEEK_ACTIVITY.map((d, i) => {
                const h = (d.minutes / maxMin) * 100;
                const empty = d.minutes === 0;
                return (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.max(h, 4)}%` }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className={cn(
                        "w-full rounded-t-xl rounded-b-md",
                        empty ? "bg-slate-100" : "bg-gradient-to-t from-brand to-brand-100",
                      )}
                      title={`${d.minutes} phút`}
                    />
                    <span className={cn("text-xs font-bold", empty ? "text-slate-300" : "text-slate-500")}>
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ===== Tiến trình cấp độ ===== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
          >
            <h2 className="font-extrabold text-slate-900">Cấp độ {level}</h2>
            <p className="mt-1 text-sm text-slate-400">
              Còn {xpForNext - xpIntoLevel} XP để lên Lv. {level + 1}
            </p>
            <div className="my-4">
              <ProgressBar value={levelPct} tone="accent" height="h-3" />
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-accent-50 p-4">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">Top 3 lớp tuần này</p>
                <p className="text-xs text-amber-700">Tiếp tục phát huy nhé!</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Bộ sưu tập huy hiệu ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
        >
          <h2 className="mb-4 font-extrabold text-slate-900">Bộ sưu tập huy hiệu</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {BADGES.map((b) => (
              <div
                key={b.id}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-colors",
                  b.earned ? "border-accent-100 bg-accent-50" : "border-slate-100 bg-slate-50 opacity-60",
                )}
              >
                <span className={cn("text-3xl", !b.earned && "grayscale")}>{b.icon}</span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{b.label}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-slate-400">{b.desc}</p>
                </div>
                {!b.earned && (
                  <span className="flex items-center gap-1 rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                    <Lock className="h-2.5 w-2.5" /> Chưa đạt
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== Bảng xếp hạng lớp (reset tuần) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-extrabold text-slate-900">
              <Crown className="h-5 w-5 text-accent" /> Bảng xếp hạng lớp
            </h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
              Cập nhật mỗi tuần
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {leaderboard.length === 0 ? (
              <div className="rounded-2xl bg-slate-50 p-6 text-center text-sm font-semibold text-slate-400">
                Chưa có học sinh trong lớp nên chưa có bảng xếp hạng tuần.
              </div>
            ) : (
              leaderboard.map((row, i) => (
                <div
                  key={row.id}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl p-3",
                    row.me ? "bg-brand-50 ring-2 ring-brand/20" : "bg-slate-50",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold",
                      i === 0 ? "bg-accent text-slate-900" : i === 1 ? "bg-slate-300 text-slate-700" : i === 2 ? "bg-amber-700 text-white" : "bg-slate-200 text-slate-500",
                    )}
                  >
                    {i < 3 ? <Medal className="h-4 w-4" /> : i + 1}
                  </span>
                  <span className={cn("flex-1 font-bold", row.me ? "text-brand" : "text-slate-700")}>
                    {row.name} {row.me && <span className="text-xs font-extrabold">(Bạn)</span>}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-extrabold text-slate-500">
                    <Zap className="h-3.5 w-3.5 text-accent" /> {formatViNumber(row.xp)}
                  </span>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
  tone: "brand" | "accent" | "danger" | "success";
}) {
  const tones = {
    brand: "bg-brand-50 text-brand",
    accent: "bg-accent-100 text-amber-600",
    danger: "bg-danger-50 text-danger",
    success: "bg-success-50 text-success",
  };
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-soft">
      <span className={cn("flex h-10 w-10 items-center justify-center rounded-2xl", tones[tone])}>
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 text-2xl font-extrabold text-slate-900">{value}</p>
      <p className="text-xs font-bold text-slate-400">{label}</p>
    </div>
  );
}
