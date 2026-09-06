"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  Layers,
  Gamepad2,
  Flame,
  Zap,
  Sparkles,
  Trophy,
  BookOpen,
  Target,
  PartyPopper,
  Rocket,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { ProgressBar } from "@/components/ProgressBar";
import { AssignmentCard } from "@/components/AssignmentCard";
import { SmartImage } from "@/components/SmartImage";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { useApp } from "@/lib/state/app-context";
import { WeeklyStreakCard } from "@/components/dashboard/WeeklyStreakCard";
import { DailyQuestsWidget } from "@/components/dashboard/DailyQuestsWidget";
import { MiniLeaderboard } from "@/components/dashboard/MiniLeaderboard";
import { staggerContainer, fadeUpReal, SPRING_BOUNCY } from "@/lib/motion";

function SectionTitle({
  title,
  action,
  icon,
}: {
  title: string;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand shadow-sm">
            {icon}
          </span>
        )}
        {title}
      </h2>
      {action}
    </div>
  );
}

export default function DashboardPage() {
  const { xp, streak, wordsLearned, level } = useApp();
  const [data, setData] = useState<{
    recentLesson: any;
    assignments: any[];
    decks: any[];
    user?: { id: string; name: string; email: string };
  } | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/dashboard/overview")
      .then((r) => r.json())
      .then((d) => {
        if (!active) return;
        if (d.ok) {
          setData({
            recentLesson: d.recentLesson,
            assignments: d.assignments || [],
            decks: d.decks || [],
            user: d.user,
          });
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const isNewAccount = xp === 0 && wordsLearned === 0;
  const recentLesson = data?.recentLesson;
  const assignments = data?.assignments ?? [];
  const decks = data?.decks ?? [];
  const activeDeckSlug = decks[0]?.slug || decks[0]?.id || "deck-1";

  return (
    <AppShell>
      <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_350px] gap-8 items-start">
        {/* Main Feed Column */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col gap-6 min-w-0">
          {/* ===== Elite Bento Hero ===== */}
          <motion.div
            variants={fadeUpReal}
            className="relative overflow-hidden rounded-3xl bento-hero p-6 sm:p-7 text-white"
          >
            {/* Ambient Lighting Orbs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-950/40 px-3 py-1 text-xs font-semibold text-teal-300 backdrop-blur-md mb-3">
                  <Sparkles className="h-3.5 w-3.5 text-teal-400" />
                  <span>Xin chào, {data?.user?.name || "bạn học"} · Chúc một ngày hiệu quả</span>
                </div>

                <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  {isNewAccount ? (
                    <>
                      Bắt đầu hành trình{" "}
                      <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                        chinh phục tiếng Anh
                      </span>
                    </>
                  ) : (
                    <>
                      Sẵn sàng{" "}
                      <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                        bứt phá kiến thức
                      </span>{" "}
                      hôm nay
                    </>
                  )}
                </h1>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-lg">
                  Luyện tập phản xạ từ vựng CEFR, xem bài giảng video tương tác và hoàn thành bài tập giao đúng hạn.
                </p>

                {!isNewAccount && (
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                      <Trophy className="h-3.5 w-3.5 text-amber-400" /> Level <NumberTicker value={level} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-teal-300 backdrop-blur-md">
                      <BookOpen className="h-3.5 w-3.5 text-teal-400" /> {wordsLearned} từ đã học
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-orange-300 backdrop-blur-md">
                      <Flame className="h-3.5 w-3.5 fill-orange-400 text-orange-400" /> Chuỗi {streak} ngày
                    </span>
                  </div>
                )}
              </div>

              <div className="hidden sm:flex flex-col items-end gap-3 shrink-0">
                {recentLesson && (
                  <Link
                    href={`/learn/${recentLesson.slug}`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 hover:from-teal-400 hover:to-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Vào học ngay <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* ===== Welcome banner for new accounts ===== */}
          {isNewAccount && (
            <motion.div
              variants={fadeUpReal}
              className="overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-600 to-emerald-700 p-6 text-white shadow-lg"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white shadow-sm backdrop-blur">
                  <PartyPopper className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold tracking-tight text-white">Chào mừng bạn đến với LingoQuest!</h3>
                  <p className="mt-0.5 text-xs text-teal-100">
                    Hệ thống đã chuẩn bị sẵn khoá học theo chuẩn CEFR & THPT. Bắt đầu với bài học đầu tiên ngay.
                  </p>
                </div>
                {recentLesson && (
                  <Link
                    href={`/learn/${recentLesson.slug}`}
                    className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-teal-900 shadow-sm hover:bg-teal-50 transition-colors"
                  >
                    Bắt đầu học →
                  </Link>
                )}
              </div>
            </motion.div>
          )}

          {/* ===== Bài học gần nhất (Cinema Card) ===== */}
          <motion.div variants={fadeUpReal}>
            {recentLesson ? (
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all">
                <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative h-56 md:h-auto min-h-[240px] overflow-hidden">
                    <SmartImage
                      src={recentLesson.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
                      alt={recentLesson.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      gradient="from-teal-100 to-emerald-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                    
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                      <PlayCircle className="h-3.5 w-3.5 text-teal-400" />
                      Bài học mới nhất
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-slate-950/70 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/10">
                        {recentLesson.durationLabel || "Video bài giảng"}
                      </span>
                      <span className="rounded-full bg-teal-500/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                        {recentLesson.vocabCount} từ vựng
                      </span>
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center gap-4 p-6 bg-white">
                    <div>
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Bài giảng trực quan</span>
                      <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-slate-900 mt-1">
                        {recentLesson.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-slate-500 line-clamp-2">
                        {recentLesson.titleVi || recentLesson.description}
                      </p>
                    </div>

                    <div>
                      <div className="mb-1.5 flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-400">Tiến độ bài học</span>
                        <span className="text-teal-700 font-bold">0%</span>
                      </div>
                      <ProgressBar value={0} tone="gradient" height="h-2" />
                    </div>

                    <div className="pt-1">
                      <Link
                        href={`/learn/${recentLesson.slug}`}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-teal-900 text-white font-bold py-3 text-sm shadow-sm transition-all"
                      >
                        Bắt đầu học ngay <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand mb-3 shadow-soft">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Chưa có bài học nào được đăng</h3>
                <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
                  Giáo viên đang chuẩn bị các bài giảng video và từ vựng mới nhất cho khoá học. Hãy quay lại sau nhé!
                </p>
              </div>
            )}
          </motion.div>

          {/* ===== Bài tập được giao ===== */}
          <motion.div variants={fadeUpReal}>
            <SectionTitle
              title="Bài tập được giao"
              icon={<Target className="h-4 w-4" />}
              action={
                <Link href="/progress" className="group flex items-center gap-1 text-sm font-bold text-brand hover:underline">
                  Xem tất cả <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              }
            />
            {assignments.length > 0 ? (
              <div className="flex flex-col gap-3">
                {assignments.map((a, i) => (
                  <AssignmentCard key={a.id} a={a} index={i} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-200 bg-slate-50/70 p-6 text-center text-sm font-semibold text-slate-500">
                🎉 Tuyệt vời! Hiện tại bạn không có bài tập nào cần nộp.
              </div>
            )}
          </motion.div>

          {/* ===== Luyện nhanh ===== */}
          <motion.div variants={fadeUpReal}>
            <SectionTitle title="Luyện nhanh" icon={<Zap className="h-4 w-4" />} />
            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div whileHover={{ y: -2 }} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
                <Link href={decks.length > 0 ? `/flashcards/${activeDeckSlug}` : "/learn"} className="flex h-full items-center gap-4 p-5 bg-gradient-to-br from-green-50 via-white to-emerald-50/50">
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md"
                  >
                    <Layers className="h-6 w-6 relative z-10" />
                  </motion.span>
                  <div className="flex-1 min-w-0">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900">
                      Ôn Flashcard
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-emerald-700">
                      {decks.length > 0 ? "Ôn luyện thẻ ghi nhớ từ vựng thông minh" : "Chưa có bộ thẻ — xem thư viện bài học"}
                    </p>
                  </div>
                  <motion.div whileHover={{ x: 4, scale: 1.1 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
                <Link href="/game" className="flex h-full items-center gap-4 p-5 bg-gradient-to-br from-amber-50 via-white to-orange-50/50">
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: -8 }}
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md"
                  >
                    <Gamepad2 className="h-6 w-6 relative z-10" />
                  </motion.span>
                  <div className="flex-1 min-w-0">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900">Chơi Game</h3>
                    <p className="mt-1 text-sm font-semibold text-amber-700">Tích thêm XP thật vui, đua top ngay!</p>
                    <div className="mt-2 flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Trophy className="h-3 w-3" /> Top tuần: +50 XP bonus
                    </div>
                  </div>
                  <motion.div whileHover={{ x: 4, scale: 1.1 }} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Right Rail widgets */}
          <div className="flex flex-col gap-6 lg:hidden pt-2">
            <WeeklyStreakCard />
            <DailyQuestsWidget />
            <MiniLeaderboard />
          </div>
        </motion.div>

        {/* Right Sticky Rail (Desktop) */}
        <div className="sticky top-[88px] hidden lg:flex flex-col gap-6">
          <WeeklyStreakCard />
          <DailyQuestsWidget />
          <MiniLeaderboard />
        </div>
      </div>
    </AppShell>
  );
}