"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  Layers,
  Gamepad2,
  Check,
  Flame,
  Zap,
  Sparkles,
  Trophy,
  BookOpen,
  Target,
  PartyPopper,
  Rocket,
} from "lucide-react";
import { type ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { ProgressBar } from "@/components/ProgressBar";
import { AssignmentCard } from "@/components/AssignmentCard";
import { ASSIGNMENTS, CURRENT_LESSON, DECKS } from "@/lib/mock/data";
import { SmartImage } from "@/components/SmartImage";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { useApp, cardKey } from "@/lib/state/app-context";
import { staggerContainer, fadeUpReal, staggerFast, SPRING_BOUNCY } from "@/lib/motion";
import { cn } from "@/lib/utils";

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
        {icon && <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand shadow-sm">{icon}</span>}
        {title}
      </h2>
      {action}
    </div>
  );
}

export default function DashboardPage() {
  const { xp, streak, wordsLearned, needsReviewCount, dailyTasks, level } = useApp();
  const deck1Keys = DECKS[0].cards.map((c) => cardKey(DECKS[0].id, c.id));
  const reviewCount = needsReviewCount(deck1Keys);
  const isNewAccount = xp === 0 && wordsLearned === 0;
  const completedTasks = dailyTasks.filter((t) => t.current >= t.target).length;

  return (
    <AppShell>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col gap-6">
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
                <Sparkles className="h-4 w-4 text-brand" /> Chào bạn, chào mừng trở lại
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ...SPRING_BOUNCY }}
                className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                {isNewAccount ? (
                  <>Bắt đầu hành trình <span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">chinh phục tiếng Anh</span> thôi!</>
                ) : (
                  <>Sẵn sàng <span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">bứt phá</span> hôm nay chứ?</>
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
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">Chào mừng đến với LingoQuest v2!</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Giao diện mới, hiệu ứng mới, động lực mới. Học bài đầu tiên để tích XP, mở khóa huy hiệu và bắt đầu chuỗi ngày học.
                  </p>
                </div>
                <ShimmerButton asChild size="lg" className="shadow-md">
                  <Link href={`/learn/${CURRENT_LESSON.id}`} className="flex items-center gap-2">
                    Học bài đầu tiên <ArrowRight className="h-4 w-4" />
                  </Link>
                </ShimmerButton>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== Bài học hôm nay ===== */}
        <motion.div variants={fadeUpReal}>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-56 md:h-auto min-h-[240px] overflow-hidden">
                <SmartImage
                  src={CURRENT_LESSON.thumbnail}
                  alt={CURRENT_LESSON.title}
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
                  Bài học hôm nay
                </motion.span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 md:hidden">
                  <span className="rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-bold text-white">{CURRENT_LESSON.durationLabel}</span>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand">{CURRENT_LESSON.progress}% hoàn thành</span>
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
                    {CURRENT_LESSON.title}
                  </motion.h3>
                  <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <span>{CURRENT_LESSON.titleVi}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {CURRENT_LESSON.durationLabel}</span>
                  </p>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs font-bold tracking-wide">
                    <span className="text-slate-400 uppercase">Tiến độ</span>
                    <span className="flex items-center gap-1 text-brand">
                      <NumberTicker value={isNewAccount ? 0 : CURRENT_LESSON.progress} />%
                      {CURRENT_LESSON.progress >= 100 && <span>✨</span>}
                    </span>
                  </div>
                  <ProgressBar value={isNewAccount ? 0 : CURRENT_LESSON.progress} tone="gradient" height="h-3" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
                  <ShimmerButton asChild size="xl" className="w-full">
                    <Link href={`/learn/${CURRENT_LESSON.id}`} className="flex items-center justify-center gap-2">
                      {isNewAccount ? "Bắt đầu học" : "Tiếp tục học"} <ArrowRight className="h-5 w-5" />
                    </Link>
                  </ShimmerButton>
                </motion.div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Target className="h-3.5 w-3.5" /> Nhấn để vào luồng Video → Flashcard → Kiểm tra
                </div>
              </div>
            </div>
          </div>
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
          <div className="flex flex-col gap-3">
            {ASSIGNMENTS.map((a, i) => (
              <AssignmentCard key={a.id} a={a} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ===== Luyện nhanh ===== */}
        <motion.div variants={fadeUpReal}>
          <SectionTitle title="Luyện nhanh" icon={<Zap className="h-4 w-4" />} />
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div whileHover={{ y: -2 }} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
              <Link href="/flashcards/deck-1" className="flex h-full items-center gap-4 p-5 bg-gradient-to-br from-green-50 via-white to-emerald-50/50">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md"
                >
                  <Layers className="h-6 w-6 relative z-10" />
                </motion.span>
                <div className="flex-1 min-w-0">
                  <h3 className="flex items-center gap-2 font-bold text-slate-900">
                    Ôn Flashcard
                    {reviewCount > 0 && (
                      <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">{reviewCount} mới</span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">
                    {reviewCount > 0 ? `${reviewCount} từ cần ôn hôm nay` : "Bạn đã thuộc hết — ôn lại nhé!"}
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-emerald-100">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min(100, (12 - reviewCount) * 8.3)}%` }} className="h-full bg-emerald-500" />
                  </div>
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

        {/* ===== Nhiệm vụ hôm nay ===== */}
        <motion.div variants={fadeUpReal}>
          <SectionTitle
            title={`Nhiệm vụ hôm nay ${completedTasks}/${dailyTasks.length}`}
            icon={<Trophy className="h-4 w-4" />}
            action={
              <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
                {completedTasks === dailyTasks.length ? "Hoàn tất!" : `${dailyTasks.length - completedTasks} còn lại`}
              </span>
            }
          />
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-5">
              <div className="mb-5 flex items-center gap-4 rounded-xl bg-gradient-to-r from-violet-50 to-brand-50 p-4 border border-violet-100/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-brand-600 text-white shadow-md">
                  <Target className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">Tiến trình ngày hôm nay</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex-1">
                      <ProgressBar value={(completedTasks / dailyTasks.length) * 100} tone="violet" height="h-2.5" />
                    </div>
                    <span className="text-sm font-bold text-violet-700">{completedTasks}/{dailyTasks.length}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: completedTasks === dailyTasks.length ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    completedTasks === dailyTasks.length
                      ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md"
                      : "bg-violet-50 text-violet-500"
                  )}
                >
                  {completedTasks === dailyTasks.length ? <PartyPopper className="h-5 w-5" /> : <Target className="h-5 w-5" />}
                </motion.div>
              </div>

              <div className="flex flex-col divide-y divide-gray-100">
                {dailyTasks.map((t, i) => {
                  const done = t.current >= t.target;
                  const pct = (t.current / t.target) * 100;
                  return (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={cn(
                        "group flex items-center gap-4 py-3 first:pt-0 last:pb-0 transition-all",
                        done && "opacity-60"
                      )}
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={done ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 transition-all",
                          done ? "border-emerald-500 bg-emerald-500 text-white shadow-sm" : "border-gray-200 bg-white text-transparent group-hover:border-brand-200"
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </motion.span>
                      <div className="min-w-0 flex-1">
                        <p className={cn("font-bold transition-all", done ? "text-slate-400 line-through" : "text-slate-900 group-hover:text-brand")}>
                          {t.label}
                        </p>
                        <div className="mt-1.5 flex items-center gap-2">
                          <div className="flex-1 max-w-[200px]">
                            <ProgressBar value={pct} tone={done ? "success" : "violet"} height="h-1.5" />
                          </div>
                          <span className={cn("shrink-0 text-xs font-bold", done ? "text-emerald-600" : "text-slate-400")}>
                            {t.current}/{t.target}
                          </span>
                        </div>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.05, y: -1 }}
                        className={cn(
                          "flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition-all",
                          done ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-violet-50 text-violet-700 border border-violet-100"
                        )}
                      >
                        <Zap className="h-3 w-3" /> +{t.reward}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {streak > 0 && (
          <motion.div
            variants={fadeUpReal}
            whileHover={{ scale: 1.01, y: -2 }}
            className="overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-[1px] shadow-md"
          >
            <div className="rounded-xl bg-gradient-to-r from-amber-50/80 to-orange-50/80 p-4">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md"
                >
                  <Flame className="h-6 w-6" />
                </motion.div>
                <p className="text-sm font-semibold leading-relaxed text-slate-600">
                  Bạn đang có chuỗi <span className="rounded-full bg-amber px-2 py-0.5 font-bold text-slate-900">{streak} ngày</span> học liên tục.
                  <span className="ml-1 font-bold text-amber-700">Học thêm 1 bài để giữ vững streak nhé!</span>
                </p>
                <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="ml-auto hidden sm:block">
                  <ArrowRight className="h-5 w-5 text-amber-600" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AppShell>
  );
}