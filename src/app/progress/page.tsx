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
  Sparkles,
  Trophy,
  Target,
  Sprout,
  Gamepad2,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ProgressBar, CircularProgress } from "@/components/ProgressBar";
import { SpotlightCard, BentoGrid } from "@/components/magic/SpotlightCard";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { useApp } from "@/lib/state/app-context";
import { useRole } from "@/lib/auth/role-context";
import { cn } from "@/lib/utils";
import { fadeUpReal, staggerContainer, viewportOnce } from "@/lib/motion";
import type { LeaderRow } from "@/lib/types";

/** Điểm game cao nhất THẬT từ localStorage (dùng cho huy hiệu "Tay chơi game"). */
function loadBestGameScore(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem("lingoquest:best");
    if (!raw) return 0;
    const data = JSON.parse(raw) as Record<string, number>;
    return Math.max(0, ...Object.values(data));
  } catch {
    return 0;
  }
}

export default function ProgressPage() {
  const { xp, level, streak, wordsLearned, xpIntoLevel, xpForNext, levelPct, weekActivity } = useApp();
  const { user } = useRole();
  const [leaderboard, setLeaderboard] = useState<LeaderRow[]>([]);
  // Lazy init giống trang /game: đọc kỷ lục thật từ localStorage đúng 1 lần
  const [bestGame] = useState(loadBestGameScore);
  const maxXp = Math.max(...weekActivity.map((d) => d.xp), 1);
  const totalXp = weekActivity.reduce((s, d) => s + d.xp, 0);

  /* Huy hiệu tính từ TIẾN TRÌNH THẬT (không hardcode earned như mock cũ)
     — icon Lucide thay emoji khổng lồ (tránh ô vuông □ trên máy thiếu font emoji). */
  const badges: { id: string; label: string; icon: LucideIcon; earned: boolean; desc: string }[] = [
    { id: "b1", label: "Khởi đầu", icon: Sprout, earned: xp > 0, desc: "Kiếm XP đầu tiên" },
    { id: "b2", label: "Chuỗi 7 ngày", icon: Flame, earned: streak >= 7, desc: "Học liên tục 7 ngày" },
    { id: "b3", label: "100 từ vựng", icon: BookOpen, earned: wordsLearned >= 100, desc: "Thuộc 100 từ vựng" },
    { id: "b4", label: "Tay chơi game", icon: Gamepad2, earned: bestGame >= 500, desc: "Đạt 500 điểm game" },
    { id: "b5", label: "Hoàn hảo", icon: Target, earned: false, desc: "Đạt 100% một bài kiểm tra" },
    { id: "b6", label: "Chuỗi 30 ngày", icon: Trophy, earned: streak >= 30, desc: "Học liên tục 30 ngày" },
    { id: "b7", label: "Nhà văn", icon: PenLine, earned: false, desc: "Viết 10 bài luận" },
    { id: "b8", label: "Bậc thầy", icon: Crown, earned: level >= 10, desc: "Đạt cấp độ 10" },
  ];
  const earnedCount = badges.filter((b) => b.earned).length;

  useEffect(() => {
    let active = true;
    fetch("/api/classroom/leaderboard")
      .then((r) => r.json())
      .then((data: { rows?: { id: string; name: string; xp: number }[] }) => {
        if (!active) return;
        // Đánh dấu hàng CỦA MÌNH theo id phiên đăng nhập thật → highlight "Bạn" + vị trí xếp hạng
        setLeaderboard((data.rows ?? []).map((r) => ({ ...r, me: r.id === user.id })));
      })
      .catch(() => {
        if (!active) return;
        setLeaderboard([]);
      });
    return () => {
      active = false;
    };
  }, [user.id]);

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center justify-between">
          <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand transition-colors group">
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Quay lại
          </Link>
          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-600 border border-violet-100">Hồ sơ cá nhân ✨</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand"><Trophy className="h-5 w-5" /></span>
          Tiến độ học tập
        </motion.h1>

        {/* ===== Tổng quan 4 chỉ số - Bento với NumberTicker ===== */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { icon: Zap, label: "Tổng XP", value: xp, tone: "brand", gradient: "from-brand-500 to-violet-500", bg: "from-brand-50 to-violet-50" },
            { icon: Star, label: "Cấp độ", value: level, tone: "accent", gradient: "from-amber-400 to-orange-500", bg: "from-accent-50 to-orange-50", prefix: "Lv. " },
            { icon: Flame, label: "Chuỗi ngày", value: streak, tone: "danger", gradient: "from-red-400 to-accent", bg: "from-red-50 to-accent-50", suffix: " 🔥" },
            { icon: BookOpen, label: "Từ đã thuộc", value: wordsLearned, tone: "success", gradient: "from-emerald-400 to-teal-500", bg: "from-success-50 to-emerald-50" },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUpReal} transition={{ delay: i * 0.07 } as any} whileHover={{ y: -4, scale: 1.02 }}>
              <SpotlightCard className="h-full border-0 overflow-hidden" spotlightColor={stat.tone === "brand" ? "rgba(37,99,235,0.15)" : stat.tone === "accent" ? "rgba(251,191,36,0.15)" : stat.tone === "danger" ? "rgba(239,68,68,0.1)" : "rgba(16,185,129,0.1)"}>
                <div className={cn("h-full p-5 bg-gradient-to-br", stat.bg)}>
                  <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-soft", stat.gradient)}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                    {stat.prefix}
                    <NumberTicker value={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{stat.label}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* ===== Biểu đồ hoạt động 7 ngày - nâng cấp gradient & glow ===== */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <SpotlightCard className="h-full p-6">
              <div className="mb-1 flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-extrabold text-slate-900">
                  <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand-50 text-brand"><TrendingUp className="h-4 w-4" /></span>
                  Hoạt động 7 ngày qua
                </h2>
                <span className="flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-sm font-black text-success border border-success-100">
                  <TrendingUp className="h-4 w-4" /> {totalXp} XP
                </span>
              </div>
              <p className="flex items-center gap-1.5 text-sm text-slate-400">
                XP kiếm được mỗi ngày <span className="text-slate-300">·</span>
                <Flame className="h-4 w-4 text-orange-500" /> streak đang cháy
              </p>
              {totalXp === 0 && (
                <p className="mt-3 flex items-center gap-2 rounded-2xl border border-dashed border-brand-200 bg-brand-50/70 px-4 py-3 text-sm font-bold text-brand">
                  <Sparkles className="h-4 w-4 shrink-0" /> Chưa có hoạt động tuần này — học bài đầu tiên để bắt đầu chuỗi ngày!
                </p>
              )}
              <div className="mb-6" />

              <div className="flex h-52 items-stretch justify-between gap-2">
                {weekActivity.map((d, i) => {
                  const h = (d.xp / maxXp) * 100;
                  const empty = d.xp === 0;
                  const isToday = i === weekActivity.length - 1;
                  return (
                    <div key={d.date} className="flex flex-1 flex-col items-center gap-2 group">
                      <div className="relative flex min-h-0 w-full flex-1 items-end justify-center">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${Math.max(h, 6)}%` }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={cn(
                            "relative w-full rounded-t-2xl rounded-b-lg transition-all cursor-pointer overflow-hidden",
                            empty ? "bg-slate-100 border border-slate-200" : "bg-gradient-to-t from-brand to-violet-400 shadow-glow-brand",
                            isToday && !empty && "from-brand-600 to-violet-500 ring-2 ring-brand-200 shadow-glow-brand"
                          )}
                          title={`${d.xp} XP`}
                        >
                          {!empty && <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />}
                          {!empty && <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.05 }} className="absolute inset-x-0 top-0 h-1 bg-white/40" />}
                        </motion.div>
                        {isToday && <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute -top-2 h-2 w-2 rounded-full bg-brand animate-ping" />}
                      </div>
                      <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold transition-colors", empty ? "text-slate-300" : isToday ? "bg-brand text-white shadow-soft" : "text-slate-500 group-hover:bg-slate-100")}>
                        {d.label}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{d.xp} XP</span>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ===== Tiến trình cấp độ - CircularProgress + glow ===== */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <SpotlightCard className="h-full p-6 bg-gradient-to-br from-white to-violet-50/30" spotlightColor="rgba(139,92,246,0.12)">
              <h2 className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-brand-600 text-white"><Star className="h-4 w-4" /></span>
                Cấp độ {level}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Còn <span className="font-black text-violet-600"><NumberTicker value={xpForNext - xpIntoLevel} /> XP</span> để lên Lv. {level + 1}
              </p>

              <div className="my-6 flex items-center justify-center">
                <CircularProgress value={levelPct} size={120} strokeWidth={8} tone="gradient">
                  <div className="text-center">
                    <p className="text-3xl font-black text-slate-900"><NumberTicker value={Math.round(levelPct)} />%</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">tiến trình</p>
                  </div>
                </CircularProgress>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-brand-50 p-4">
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-glow-accent"
                  >
                    <Trophy className="h-5 w-5" />
                  </motion.span>
                  <div className="flex-1">
                    <p className="text-sm font-extrabold text-violet-900">Top 3 lớp tuần này</p>
                    <p className="text-xs font-semibold text-violet-700/70">
                      {(() => {
                        const idx = leaderboard.findIndex((r) => r.me);
                        return idx >= 0
                          ? `Bạn đang ở vị trí #${idx + 1} — cố lên!`
                          : "Chưa có xếp hạng — chơi game đầu tiên để lên bảng!";
                      })()}
                    </p>
                  </div>
                  <Sparkles className="h-4 w-4 text-violet-400" />
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/60">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${levelPct}%` }} transition={{ duration: 1, delay: 0.5 }} className="h-full rounded-full bg-gradient-to-r from-violet-500 to-brand-500" />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* ===== Bộ sưu tập huy hiệu - tilt & shiny ===== */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="mt-6">
          <SpotlightCard className="p-6">
            <h2 className="mb-5 flex items-center gap-2 font-extrabold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-400 text-slate-900"><Trophy className="h-4 w-4" /></span>
              Bộ sưu tập huy hiệu
              <span className="ml-auto rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">{earnedCount}/{badges.length} đạt được</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {badges.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, scale: 0.9, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={cn(
                    "group relative flex flex-col items-center gap-3 rounded-3xl border-2 p-5 text-center transition-all overflow-hidden",
                    b.earned ? "border-amber-200 bg-gradient-to-br from-accent-50 to-orange-50 shadow-glow-accent hover:shadow-glow-accent hover:border-accent-300" : "border-slate-100 bg-slate-50 opacity-60 hover:opacity-80"
                  )}
                >
                  {b.earned && <div className="absolute inset-0 bg-gradient-to-br from-accent-100/0 via-accent-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
                  <motion.span
                    animate={b.earned ? { y: [0, -3, 0], rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className={cn(
                      "relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft",
                      b.earned ? "bg-gradient-to-br from-accent to-orange-400 text-slate-900" : "bg-slate-200 text-slate-400"
                    )}
                  >
                    <b.icon className="h-7 w-7" />
                    {b.earned && (
                      <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success text-[10px] text-white shadow-soft">✓</motion.span>
                    )}
                  </motion.span>
                  <div className="relative">
                    <p className="text-sm font-extrabold text-slate-900">{b.label}</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-500">{b.desc}</p>
                  </div>
                  {!b.earned ? (
                    <span className="flex items-center gap-1 rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-bold text-slate-500"><Lock className="h-3 w-3" /> Chưa đạt</span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-black text-slate-900 shadow-soft"><Sparkles className="h-3 w-3" /> Đã đạt</span>
                  )}
                  {b.earned && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1s_ease-out]" />}
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ===== Bảng xếp hạng ===== */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="mt-6">
          <SpotlightCard className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-400 text-slate-900"><Crown className="h-4 w-4" /></span>
                Bảng xếp hạng lớp
              </h2>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500">Reset mỗi tuần • Real-time</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {leaderboard.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                  <p className="text-sm font-bold text-slate-400">Chưa có học sinh trong lớp nên chưa có bảng xếp hạng tuần.</p>
                  <p className="mt-1 text-xs text-slate-400">Giáo viên cần thêm học sinh vào lớp từ database.</p>
                </div>
              ) : (
                leaderboard.map((row, i) => (
                  <motion.div
                    key={row.id}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.01, x: 2 }}
                    className={cn(
                      "group relative flex items-center gap-3 overflow-hidden rounded-2xl border p-3.5 transition-all",
                      row.me ? "border-brand-200 bg-gradient-to-r from-brand-50 to-violet-50 shadow-glow-brand" : "border-slate-100 bg-slate-50 hover:bg-white hover:shadow-soft hover:border-slate-200"
                    )}
                  >
                    {i === 0 && <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-orange-400" />}
                    <span className={cn("relative flex h-9 w-9 items-center justify-center rounded-xl text-sm font-black shadow-soft", i === 0 ? "bg-gradient-to-br from-accent to-orange-400 text-slate-900 shadow-glow-accent" : i === 1 ? "bg-gradient-to-br from-slate-300 to-slate-400 text-slate-700" : i === 2 ? "bg-gradient-to-br from-amber-700 to-orange-700 text-white" : "bg-white text-slate-500 border border-slate-200")}>
                      {i < 3 ? <Medal className="h-4 w-4" /> : i + 1}
                      {i === 0 && <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute -top-1 -right-1 text-[10px]">👑</motion.span>}
                    </span>
                    <span className={cn("flex-1 font-bold", row.me ? "text-brand" : "text-slate-700")}>
                      {row.name} {row.me && <span className="ml-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-black text-white">Bạn</span>}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-black text-slate-600 shadow-soft border border-slate-100">
                      <Zap className="h-3.5 w-3.5 text-accent" /> <NumberTicker value={row.xp} />
                    </span>
                    {row.me && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_0.8s_ease-out]" />}
                  </motion.div>
                ))
              )}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </AppShell>
  );
}
