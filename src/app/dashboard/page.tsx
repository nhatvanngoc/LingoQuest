"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { ProgressBar } from "@/components/ProgressBar";
import { AssignmentCard } from "@/components/AssignmentCard";
import { SmartImage } from "@/components/SmartImage";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { useApp } from "@/lib/state/app-context";
import { useRole } from "@/lib/auth/role-context";
import { GRADE_11_CURRICULUM } from "@/lib/curriculum/grade11-data";
import { getUnitVocabStats } from "@/lib/curriculum/vocab-progress";
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
  const router = useRouter();
  const { xp, streak, wordsLearned, level } = useApp();
  const { user: authUser } = useRole();
  const [loading, setLoading] = useState(true);
  const [examPinInput, setExamPinInput] = useState("");
  const [data, setData] = useState<{
    recentLesson: any;
    assignments: any[];
    decks: any[];
    user?: { id: string; name: string; email: string };
  } | null>(null);

  const userGrade = authUser?.grade || "11";
  const activeGrade11Unit = GRADE_11_CURRICULUM[0];
  const grade11WordIds = activeGrade11Unit ? activeGrade11Unit.vocabulary.map((v) => v.id) : [];
  const grade11Stats = getUnitVocabStats(grade11WordIds, authUser?.id);

  useEffect(() => {
    let active = true;
    fetch("/api/dashboard/overview", {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    })
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
      .catch(() => {})
      .finally(() => { if (active) setLoading(false); });

    return () => {
      active = false;
    };
  }, []);

  const isNewAccount = xp === 0 && wordsLearned === 0;
  const recentLesson = data?.recentLesson;
  const assignments = data?.assignments ?? [];
  const decks = data?.decks ?? [];
  const activeDeckSlug = decks[0]?.slug || decks[0]?.id || "deck-1";

  if (loading) {
    return (
      <AppShell>
        <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_350px] gap-8 items-start">
          <div className="flex flex-col gap-6 min-w-0">
            {/* Hero skeleton */}
            <div className="h-48 rounded-3xl bg-slate-200/60 animate-pulse" />
            {/* Lesson card skeleton */}
            <div className="h-64 rounded-3xl bg-white border border-slate-200/80 animate-pulse" />
            {/* Assignments skeleton */}
            <div className="space-y-3">
              <div className="h-5 w-40 rounded bg-slate-200/60 animate-pulse" />
              <div className="h-20 rounded-2xl bg-white border border-slate-200/80 animate-pulse" />
              <div className="h-20 rounded-2xl bg-white border border-slate-200/80 animate-pulse" />
            </div>
          </div>
          {/* Right rail skeleton */}
          <div className="sticky top-[88px] hidden lg:flex flex-col gap-6">
            <div className="h-44 rounded-2xl bg-white border border-slate-200/80 animate-pulse" />
            <div className="h-52 rounded-2xl bg-white border border-slate-200/80 animate-pulse" />
            <div className="h-40 rounded-2xl bg-white border border-slate-200/80 animate-pulse" />
          </div>
        </div>
      </AppShell>
    );
  }

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

          {/* ===== Grade-Adaptive Roadmap Section ===== */}
          <motion.div variants={fadeUpReal}>
            <div className="overflow-hidden rounded-3xl border border-teal-200/80 bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 p-6 sm:p-7 text-white shadow-md relative">
              <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-teal-500/20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 border border-teal-400/30">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300">
                        Chương trình Khối {userGrade} • Global Success (Bộ GD&ĐT)
                      </span>
                      <h3 className="font-heading text-lg font-bold text-white">
                        {userGrade === "11"
                          ? "Lộ trình Tiếng Anh 11 Toàn diện"
                          : `Chương trình Tiếng Anh Lớp ${userGrade}`}
                      </h3>
                    </div>
                  </div>

                  <Link
                    href="/curriculum/grade-11"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-300 hover:text-white transition-colors"
                  >
                    <span>Xem toàn bộ 10 Units</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Active Unit Highlight Card */}
                {activeGrade11Unit && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2 py-0.5 text-[10px] font-black uppercase">
                          Unit 01
                        </span>
                        <span className="text-xs font-bold text-slate-300">Học kỳ 1 • {activeGrade11Unit.cefrLevel}</span>
                      </div>
                      <h4 className="font-heading text-base font-bold text-white">{activeGrade11Unit.titleEn}</h4>
                      <p className="text-xs text-slate-300">
                        {activeGrade11Unit.titleVi} • Ngữ pháp: {activeGrade11Unit.grammarTitle}
                      </p>

                      {/* Mini SRS Progress */}
                      <div className="pt-2 flex items-center gap-3 text-xs">
                        <div className="h-1.5 w-36 rounded-full bg-white/20 overflow-hidden">
                          <div
                            className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                            style={{ width: `${grade11Stats.percent}%` }}
                          />
                        </div>
                        <span className="text-teal-200 text-[11px] font-medium">
                          Đã thuộc {grade11Stats.mastered}/{grade11Stats.total} từ ({grade11Stats.percent}%)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <Button
                        asChild
                        size="sm"
                        className="rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-xs w-full sm:w-auto"
                      >
                        <Link href={`/curriculum/grade-11/${activeGrade11Unit.slug}`}>
                          Học tiếp Unit 1
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs font-bold shadow-xs w-full sm:w-auto"
                      >
                        <Link href={`/curriculum/grade-11/${activeGrade11Unit.slug}`}>
                          <Layers className="mr-1 h-3.5 w-3.5 text-teal-300" /> Flashcard
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ===== Đấu trường Thi đấu & Kiểm tra (Azota & Quizizz) ===== */}
          <motion.div variants={fadeUpReal}>
            <div className="overflow-hidden rounded-3xl border border-indigo-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1.5">
                    <Zap className="h-4 w-4 text-amber-500" />
                    Đấu trường Thi đấu &amp; Kiểm tra Trực tuyến
                  </div>
                  <h3 className="font-heading text-lg font-extrabold text-slate-900">
                    Phòng thi Azota &amp; Đấu trường Quizizz
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed max-w-lg">
                    Nhập mã PIN do giáo viên cung cấp để bắt đầu làm bài kiểm tra hoặc thử sức với các bài thi trắc nghiệm Lớp 11!
                  </p>
                </div>

                {/* PIN Code Entry Form */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <div className="relative w-full sm:w-48">
                    <input
                      type="text"
                      maxLength={6}
                      value={examPinInput}
                      onChange={(e) => setExamPinInput(e.target.value.trim())}
                      placeholder="Nhập mã PIN..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-4 pr-3 text-sm font-mono font-bold tracking-widest text-indigo-900 placeholder:text-slate-400 placeholder:tracking-normal focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      if (examPinInput.length >= 4) {
                        router.push(`/exams/${examPinInput}`);
                      } else {
                        alert("Vui lòng nhập mã PIN đề thi!");
                      }
                    }}
                    className="w-full sm:w-auto rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-5 px-6 shadow-xs cursor-pointer"
                  >
                    Vào thi ngay 🚀
                  </Button>
                </div>
              </div>

              {/* Quick Sample Exam Pills */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-slate-400">Đề thi sẵn có:</span>
                <Link
                  href="/exams/exam-u1-15m"
                  className="rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold px-3 py-1.5 border border-indigo-100/70 transition-colors flex items-center gap-1.5"
                >
                  <span>⚡ 15 Phút Unit 1 (A Long &amp; Healthy Life)</span>
                  <span className="text-[10px] bg-white px-1.5 py-0.5 rounded-md font-mono text-indigo-600">PIN: 839201</span>
                </Link>
                <Link
                  href="/exams/exam-u2-45m"
                  className="rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold px-3 py-1.5 border border-purple-100/70 transition-colors flex items-center gap-1.5"
                >
                  <span>📝 45 Phút Unit 2 (The Generation Gap)</span>
                  <span className="text-[10px] bg-white px-1.5 py-0.5 rounded-md font-mono text-purple-600">PIN: 492105</span>
                </Link>
              </div>
            </div>
          </motion.div>

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
            ) : assignments[0] ? (
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all">
                <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative h-56 md:h-auto min-h-[240px] overflow-hidden bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 flex flex-col justify-between p-6 text-white">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                        <Target className="h-3.5 w-3.5 text-teal-300" />
                        Bài tập mới nhất được giao
                      </span>
                      <span className="rounded-full bg-emerald-500/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                        {assignments[0].difficultyLevel || "B1"}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">Hạn nộp</span>
                      <p className="text-sm font-semibold text-white mt-0.5">{assignments[0].dueLabel || "Không có hạn"}</p>
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center gap-4 p-6 bg-white">
                    <div>
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Nhiệm vụ cần hoàn thành</span>
                      <h3 className="font-heading text-xl font-bold leading-snug tracking-tight text-slate-900 mt-1">
                        {assignments[0].title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-slate-500 line-clamp-2">
                        {assignments[0].description || "Hoàn thành bài tập 5-trong-1 để tích luỹ XP và rèn luyện kỹ năng toàn diện."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-xs font-semibold text-slate-600">
                      <span>Phần thưởng tích luỹ:</span>
                      <span className="font-bold text-amber-600">+{assignments[0].targetXp || 50} XP</span>
                    </div>

                    <div className="pt-1">
                      <Link
                        href={`/exercise/${assignments[0].id}`}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 text-sm shadow-sm transition-all"
                      >
                        Bắt đầu làm bài ngay <ArrowRight className="h-4 w-4" />
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