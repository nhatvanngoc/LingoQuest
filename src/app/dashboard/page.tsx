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
          {/* ===== Greeting ===== */}
          <motion.div variants={fadeUpReal} className="overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-bold text-slate-500 flex items-center gap-1.5"
                >
                  <Sparkles className="h-4 w-4 text-brand" /> Chào {data?.user?.name || "bạn"}, chào mừng trở lại
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, ...SPRING_BOUNCY }}
                  className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                >
                  {isNewAccount ? (
                    <>
                      Bắt đầu hành trình{" "}
                      <span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">
                        chinh phục tiếng Anh
                      </span>{" "}
                      thôi!
                    </>
                  ) : (
                    <>
                      Sẵn sàng{" "}
                      <span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">
                        bứt phá
                      </span>{" "}
                      hôm nay chứ?
                    </>
                  )}
                </motion.h1>
                {!isNewAccount && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3 flex flex-wrap items-center gap-3"
                  >
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-bold text-slate-600 border border-gray-100 shadow-sm">
                      <Trophy className="h-3.5 w-3.5 text-amber-500" /> Level <NumberTicker value={level} />
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-bold text-slate-600 border border-gray-100 shadow-sm">
                      <BookOpen className="h-3.5 w-3.5 text-brand" /> {wordsLearned} từ
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-bold text-amber-600 border border-gray-100 shadow-sm">
                      <Flame className="h-3.5 w-3.5" /> Chuỗi {streak} ngày
                    </span>
                  </motion.div>
                )}
              </div>
              {isNewAccount && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                  className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-violet-50 text-brand shadow-sm lg:flex"
                >
                  <Rocket className="h-8 w-8" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* ===== Welcome banner for new accounts ===== */}
          {isNewAccount && (
            <motion.div
              variants={fadeUpReal}
              className="overflow-hidden rounded-xl border border-brand-200 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-[1px] shadow-md"
            >
              <div className="rounded-xl bg-white p-5">
                <div className="relative flex flex-wrap items-center gap-4">
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-md"
                  >
                    <PartyPopper className="h-6 w-6" />
                  </motion.span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">Chào mừng đến với LingoQuest!</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      Tài khoản của bạn đã sẵn sàng. Học bài, ôn tập thẻ flashcard để tích luỹ XP và rèn luyện mỗi ngày.
                    </p>
                  </div>
                  {recentLesson && (
                    <ShimmerButton asChild size="lg" className="shadow-md">
                      <Link href={`/learn/${recentLesson.slug}`} className="flex items-center gap-2">
                        Học bài đầu tiên <ArrowRight className="h-4 w-4" />
                      </Link>
                    </ShimmerButton>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ===== Bài học hôm nay ===== */}
          <motion.div variants={fadeUpReal}>
            {recentLesson ? (
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative h-56 md:h-auto min-h-[240px] overflow-hidden">
                    <SmartImage
                      src={recentLesson.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
                      alt={recentLesson.title}
                      className="h-full w-full object-cover"
                      gradient="from-brand-100 to-violet-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent md:bg-gradient-to-r md:from-slate-900/20 md:via-transparent md:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-violet-500/20 mix-blend-overlay" />
                    <motion.span
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                      className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-bold text-brand backdrop-blur-sm"
                    >
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <PlayCircle className="h-4 w-4 fill-brand text-brand" />
                      </motion.div>
                      Bài học mới nhất
                    </motion.span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 md:hidden">
                      <span className="rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-bold text-white">
                        {recentLesson.durationLabel || "Video"}
                      </span>
                      <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand">
                        {recentLesson.vocabCount} từ vựng
                      </span>
                    </div>
                  </div>
                  <div className="relative flex flex-col justify-center gap-4 p-5 md:p-6 bg-white">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold leading-tight tracking-tight text-slate-900"
                      >
                        {recentLesson.title}
                      </motion.h3>
                      <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <span>{recentLesson.titleVi || recentLesson.description}</span>
                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3.5 w-3.5" /> {recentLesson.vocabCount} từ vựng
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs font-bold tracking-wide">
                        <span className="text-slate-400 uppercase">Tiến độ</span>
                        <span className="flex items-center gap-1 text-brand">
                          <NumberTicker value={0} />%
                        </span>
                      </div>
                      <ProgressBar value={0} tone="gradient" height="h-3" />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
                      <ShimmerButton asChild size="xl" className="w-full">
                        <Link href={`/learn/${recentLesson.slug}`} className="flex items-center justify-center gap-2">
                          Bắt đầu học <ArrowRight className="h-5 w-5" />
                        </Link>
                      </ShimmerButton>
                    </motion.div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                      <Target className="h-3.5 w-3.5" /> Nhấn để vào luồng Video → Flashcard → Kiểm tra
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