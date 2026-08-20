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
} from "lucide-react";
import { type ReactNode } from "react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { AssignmentCard } from "@/components/AssignmentCard";
import { ASSIGNMENTS, CURRENT_LESSON, DECKS } from "@/lib/mock/data";
import { SmartImage } from "@/components/SmartImage";
import { useApp, cardKey } from "@/lib/state/app-context";
import { staggerContainer, fadeUp, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* Dashboard học sinh — màn hình trung tâm */

function SectionTitle({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-lg font-extrabold text-slate-900">{title}</h2>
      {action}
    </div>
  );
}

export default function DashboardPage() {
  // Nhiệm vụ hằng ngày tự theo dõi từ store (theo hoạt động thật)
  const { xp, streak, wordsLearned, needsReviewCount, dailyTasks } = useApp();
  // Số từ cần ôn = các thẻ deck-1 chưa thuộc (box<3)
  const deck1Keys = DECKS[0].cards.map((c) => cardKey(DECKS[0].id, c.id));
  const reviewCount = needsReviewCount(deck1Keys);
  // Tài khoản mới (chưa có dữ liệu) → hiện banner chào mừng
  const isNewAccount = xp === 0 && wordsLearned === 0;

  return (
    <AppShell>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col gap-8">
        {/* ===== Lời chào ===== */}
        <motion.div variants={fadeUp}>
          <p className="text-sm font-semibold text-slate-400">Chào bạn 👋</p>
          <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            {isNewAccount ? "Bắt đầu hành trình học tiếng Anh thôi!" : "Sẵn sàng học hôm nay chứ?"}
          </h1>
        </motion.div>

        {/* ===== Banner tài khoản mới (empty state) ===== */}
        {isNewAccount && (
          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 shadow-soft"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-4xl">🚀</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-extrabold text-slate-900">Chào mừng bạn đến với LingoQuest!</h3>
                <p className="text-sm text-slate-500">
                  Tài khoản của bạn chưa có dữ liệu. Học bài đầu tiên để tích XP, mở khóa huy hiệu và bắt đầu chuỗi ngày học 🔥
                </p>
              </div>
              <Button asChild size="lg">
                <Link href={`/learn/${CURRENT_LESSON.id}`}>
                  Học bài đầu tiên <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}

        {/* ===== Bài học hôm nay ===== */}
        <motion.div variants={fadeUp}>
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
            <div className="grid md:grid-cols-2">
              {/* Thumbnail */}
              <div className="relative h-48 md:h-auto">
                <SmartImage
                  src={CURRENT_LESSON.thumbnail}
                  alt={CURRENT_LESSON.title}
                  className="h-full w-full object-cover"
                  gradient="from-brand-100 to-accent-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-brand shadow-soft">
                  <PlayCircle className="h-3.5 w-3.5" /> Bài học hôm nay
                </span>
              </div>

              {/* Nội dung */}
              <div className="flex flex-col justify-center gap-4 p-6">
                <div>
                  <h3 className="text-xl font-extrabold leading-snug text-slate-900">
                    {CURRENT_LESSON.title}
                  </h3>
                  <p className="text-sm text-slate-500">{CURRENT_LESSON.titleVi} · {CURRENT_LESSON.durationLabel}</p>
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>Tiến độ</span>
                    <span>{isNewAccount ? 0 : CURRENT_LESSON.progress}%</span>
                  </div>
                  <ProgressBar value={isNewAccount ? 0 : CURRENT_LESSON.progress} tone="brand" height="h-2.5" />
                </div>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={`/learn/${CURRENT_LESSON.id}`}>
                    {isNewAccount ? "Bắt đầu học" : "Học tiếp"} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Bài tập được giao ===== */}
        <motion.div variants={fadeUp}>
          <SectionTitle
            title="Bài tập được giao"
            action={
              <Link href="/progress" className="text-sm font-bold text-brand hover:underline">
                Xem tất cả
              </Link>
            }
          />
          <div className="flex flex-col gap-3">
            {ASSIGNMENTS.map((a) => (
              <AssignmentCard key={a.id} a={a} />
            ))}
          </div>
        </motion.div>

        {/* ===== Luyện nhanh ===== */}
        <motion.div variants={fadeUp}>
          <SectionTitle title="Luyện nhanh" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/flashcards/deck-1"
              className="group flex items-center gap-4 rounded-3xl border border-success-100 bg-success-50 p-5 transition-shadow hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success text-white shadow-soft">
                <Layers className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h3 className="font-extrabold text-slate-900">Ôn Flashcard</h3>
                <p className="text-sm font-semibold text-success">
                  {reviewCount > 0 ? `${reviewCount} từ cần ôn hôm nay` : "Bạn đã thuộc hết — ôn lại nhé!"}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-success transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/game"
              className="group flex items-center gap-4 rounded-3xl border border-accent-100 bg-accent-50 p-5 transition-shadow hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-slate-900 shadow-soft">
                <Gamepad2 className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h3 className="font-extrabold text-slate-900">Chơi Game</h3>
                <p className="text-sm font-semibold text-amber-700">Tích thêm XP thật vui</p>
              </div>
              <ArrowRight className="h-5 w-5 text-amber-700 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* ===== Nhiệm vụ hôm nay ===== */}
        <motion.div variants={fadeUp}>
          <SectionTitle title="Nhiệm vụ hôm nay" />
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
            <div className="flex flex-col divide-y divide-slate-100">
              {dailyTasks.map((t) => {
                const done = t.current >= t.target;
                return (
                  <div key={t.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    {/* Checkbox chỉ hiển thị trạng thái — tiến trình tự cập nhật theo hoạt động */}
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 transition-colors",
                        done ? "border-success bg-success text-white" : "border-slate-200 text-transparent",
                      )}
                      aria-label={done ? "Đã hoàn thành" : "Chưa hoàn thành"}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className={cn("font-bold text-slate-900", done && "text-slate-400 line-through")}>
                        {t.label}
                      </p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <ProgressBar value={(t.current / t.target) * 100} tone={done ? "success" : "accent"} height="h-1.5" />
                        <span className="shrink-0 text-xs font-bold text-slate-400">
                          {t.current}/{t.target}
                        </span>
                      </div>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-extrabold text-amber-600">
                      <Zap className="h-3 w-3" /> +{t.reward}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Gợi ý duy trì streak (ẩn với tài khoản mới chưa có chuỗi) */}
        {streak > 0 && (
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-3xl bg-gradient-to-r from-accent-50 to-brand-50 p-5"
          >
            <Flame className="h-8 w-8 shrink-0 text-accent" />
            <p className="text-sm font-semibold text-slate-700">
              Bạn đang có chuỗi <span className="font-extrabold text-amber-600">{streak} ngày</span> học liên
              tục. Học thêm 1 bài để giữ vững streak nhé! 🔥
            </p>
          </motion.div>
        )}
      </motion.div>
    </AppShell>
  );
}
