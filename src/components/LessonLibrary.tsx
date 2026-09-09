"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  Database,
  Sparkles,
  BookOpen,
  ClipboardList,
  Layers,
  Video,
  ListChecks,
  FileQuestion,
  PenTool,
  Puzzle,
  Calendar,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUpReal, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface LibraryLesson {
  slug: string;
  title: string;
  titleVi: string;
  description: string;
  thumbnail: string;
  durationLabel: string;
  vocabCount: number;
  progress: number;
}

export interface LibraryAssignment {
  id: string;
  title: string;
  type?: string;
  description?: string | null;
  lessonTitle?: string | null;
  dueAt?: string | Date | null;
  createdAt?: string | Date;
  difficultyLevel?: string;
  targetXp?: number;
  vocabCount?: number;
  quizCount?: number;
  fillCount?: number;
  readingCount?: number;
  syntaxCount?: number;
  hasVideo?: boolean;
  hasWriting?: boolean;
}

export interface DbOverview {
  lessons: number;
  vocab: number;
  decks: number;
  users: number;
  assignments?: number;
}

export function LessonLibrary({
  lessons = [],
  assignments = [],
  overview,
}: {
  lessons: LibraryLesson[];
  assignments?: LibraryAssignment[];
  overview?: DbOverview;
}) {
  // Ưu tiên mở tab "assignments" nếu có bài tập được giao
  const [activeTab, setActiveTab] = useState<"assignments" | "lessons">(
    assignments.length > 0 ? "assignments" : "lessons"
  );

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-end justify-between gap-3"
      >
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-700 text-white shadow-md">
              <BookOpen className="h-5 w-5" />
            </span>
            Thư viện bài học & Bài tập
          </h1>
          <p className="mt-2 text-slate-500">
            Học qua video tương tác, ôn luyện flashcard thông minh và hoàn thành bài tập do giáo viên giao.
          </p>
        </div>
        {overview && (
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700"
          >
            <Database className="h-3.5 w-3.5" /> CSDL: {overview.assignments ?? assignments.length} bài tập · {overview.lessons} bài giảng · {overview.vocab} từ
          </motion.span>
        )}
      </motion.div>

      {/* Grade 11 Global Success Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-teal-200/80 bg-gradient-to-r from-teal-50 via-emerald-50 to-white p-4 shadow-xs"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow-xs">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-sm font-bold text-slate-900">
                Chương trình Tiếng Anh 11 — Global Success (SGK 2018)
              </span>
              <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-extrabold text-teal-800 uppercase">
                10 Units + 4 Reviews
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Từ vựng Audio chuẩn, Deep Imprint Flashcards, lý thuyết ngữ pháp &amp; hướng dẫn 8 phân mục bài học.
            </p>
          </div>
        </div>
        <Button asChild size="sm" className="rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shrink-0 shadow-xs">
          <Link href="/curriculum/grade-11" className="flex items-center gap-1">
            <span>Học Lớp 11</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </motion.div>

      {/* Tabs */}
      <div className="mt-8 flex items-center gap-2 border-b border-slate-200/80 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("assignments")}
          className={cn(
            "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
            activeTab === "assignments"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          )}
        >
          <ClipboardList className="h-4 w-4" />
          Bài tập được giao
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-extrabold",
              activeTab === "assignments"
                ? "bg-white/20 text-white"
                : "bg-slate-200 text-slate-700"
            )}
          >
            {assignments.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("lessons")}
          className={cn(
            "flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all",
            activeTab === "lessons"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          )}
        >
          <PlayCircle className="h-4 w-4" />
          Kho video bài giảng
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-extrabold",
              activeTab === "lessons"
                ? "bg-white/20 text-white"
                : "bg-slate-200 text-slate-700"
            )}
          >
            {lessons.length}
          </span>
        </button>
      </div>

      {/* TAB 1: BÀI TẬP ĐƯỢC GIAO */}
      {activeTab === "assignments" && (
        <div className="mt-6">
          {assignments.length === 0 ? (
            <motion.div
              variants={fadeUpReal}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mb-4 shadow-soft">
                <ClipboardList className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Hiện tại chưa có bài tập nào</h3>
              <p className="mt-2 max-w-md text-sm text-slate-500">
                Khi giáo viên giao bài tập hoặc đề kiểm tra mới, bài tập sẽ xuất hiện tại đây để bạn làm bài và nhận điểm số trực tiếp.
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-4"
            >
              {assignments.map((a, idx) => {
                const dueText = a.dueAt
                  ? `Hạn nộp: ${new Date(a.dueAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`
                  : "Không giới hạn thời gian";

                return (
                  <motion.div
                    key={a.id}
                    variants={fadeUpReal}
                    viewport={viewportOnce}
                    transition={{ delay: idx * 0.06 } as any}
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:shadow-md hover:border-teal-500/40 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200/60">
                              ĐANG MỞ
                            </span>
                            <span className="rounded-md bg-sky-50 px-2 py-0.5 text-xs font-bold text-sky-700 border border-sky-200/60">
                              {a.difficultyLevel || "B1"}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 truncate">
                              {a.title}
                            </h3>
                          </div>

                          {a.description && (
                            <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                              {a.description}
                            </p>
                          )}

                          {/* Components chips */}
                          <div className="mt-3 flex flex-wrap items-center gap-1.5">
                            {a.hasVideo && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-700 border border-rose-100">
                                <Video className="h-3 w-3" /> Video bài giảng
                              </span>
                            )}
                            {(a.vocabCount ?? 0) > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
                                <Layers className="h-3 w-3" /> {a.vocabCount} thẻ từ vựng
                              </span>
                            )}
                            {(a.syntaxCount ?? 0) > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-teal-50 px-2 py-0.5 text-[11px] font-bold text-teal-700 border border-teal-100">
                                <Puzzle className="h-3 w-3" /> {a.syntaxCount} câu ghép cấu trúc
                              </span>
                            )}
                            {(a.quizCount ?? 0) > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-100">
                                <ListChecks className="h-3 w-3" /> {a.quizCount} câu trắc nghiệm
                              </span>
                            )}
                            {(a.fillCount ?? 0) > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700 border border-amber-100">
                                <FileQuestion className="h-3 w-3" /> {a.fillCount} câu điền từ
                              </span>
                            )}
                            {a.hasWriting && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-purple-50 px-2 py-0.5 text-[11px] font-bold text-purple-700 border border-purple-100">
                                <PenTool className="h-3 w-3" /> Viết tự luận
                              </span>
                            )}
                          </div>

                          <div className="mt-3 flex items-center gap-3 text-xs text-slate-400 font-semibold">
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" /> {dueText}
                            </span>
                            <span className="inline-flex items-center gap-1 text-amber-600 font-bold">
                              <Sparkles className="h-3.5 w-3.5" /> +{a.targetXp || 50} XP
                            </span>
                          </div>
                        </div>

                        {/* CTA button */}
                        <div className="shrink-0">
                          <Button
                            asChild
                            className="w-full sm:w-auto rounded-xl font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                            size="lg"
                          >
                            <Link href={`/exercise/${a.id}`} className="flex items-center gap-2">
                              Làm bài ngay <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      )}

      {/* TAB 2: VIDEO BÀI GIẢNG */}
      {activeTab === "lessons" && (
        <div className="mt-6">
          {lessons.length === 0 ? (
            <motion.div
              variants={fadeUpReal}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand mb-4 shadow-soft">
                <PlayCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Chưa có bài giảng video nào</h3>
              <p className="mt-2 max-w-md text-sm text-slate-500">
                Giáo viên chưa đăng bài giảng video tự học độc lập. Hãy kiểm tra tab &ldquo;Bài tập được giao&rdquo; ở trên để bắt đầu học bài tập tổng hợp!
              </p>
              {assignments.length > 0 && (
                <Button
                  type="button"
                  onClick={() => setActiveTab("assignments")}
                  className="mt-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold"
                >
                  <ClipboardList className="mr-2 h-4 w-4" /> Xem {assignments.length} bài tập đã giao
                </Button>
              )}
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2"
            >
              {lessons.map((l, idx) => {
                const done = l.progress >= 100;
                const inProgress = l.progress > 0 && l.progress < 100;
                return (
                  <motion.div
                    key={l.slug}
                    variants={fadeUpReal}
                    viewport={viewportOnce}
                    transition={{ delay: idx * 0.07 } as any}
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-lg hover:border-teal-500/40 transition-all duration-300"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <SmartImage
                          src={
                            l.thumbnail ||
                            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                          }
                          alt={l.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          gradient="from-teal-100 to-emerald-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />

                        <div className="absolute left-3 top-3 flex items-center gap-2">
                          <Badge variant={done ? "success" : inProgress ? "accent" : "neutral"}>
                            {done ? (
                              <span className="flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" /> Đã xong
                              </span>
                            ) : inProgress ? (
                              <span className="flex items-center gap-1">
                                <Sparkles className="h-3 w-3" /> Đang học
                              </span>
                            ) : (
                              "Mới"
                            )}
                          </Badge>
                        </div>

                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                          <Clock className="h-3 w-3" /> {l.durationLabel || "—"}
                        </span>

                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-teal-700 shadow-sm backdrop-blur-sm"
                        >
                          <PlayCircle className="h-6 w-6 fill-teal-700 text-teal-700" />
                        </motion.div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${l.progress}%` }}
                            viewport={viewportOnce}
                            transition={{ duration: 1, delay: 0.3 + idx * 0.05 }}
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-heading line-clamp-1 text-base font-bold leading-snug text-slate-900 group-hover:text-teal-700 transition-colors">
                          {l.title}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-slate-400">{l.titleVi}</p>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                          {l.description}
                        </p>

                        <div className="mt-auto pt-4">
                          <div className="mb-2 flex items-center justify-between text-xs font-bold">
                            <span className="flex items-center gap-1 text-slate-500">
                              <BookOpen className="h-3.5 w-3.5" /> {l.vocabCount} từ vựng
                            </span>
                            <span
                              className={
                                done
                                  ? "text-emerald-600"
                                  : inProgress
                                  ? "text-amber-600"
                                  : "text-slate-400"
                              }
                            >
                              {l.progress}%
                            </span>
                          </div>
                          <ProgressBar
                            value={l.progress}
                            tone={done ? "success" : inProgress ? "gradient" : "brand"}
                            height="h-1.5"
                          />
                        </div>

                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="mt-3">
                          <Button
                            asChild
                            className="w-full rounded-xl font-bold"
                            variant={done ? "outline" : "default"}
                            size="lg"
                          >
                            <Link href={`/learn/${l.slug}`} className="flex items-center justify-center gap-2">
                              {done ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <ArrowRight className="h-4 w-4 transition-transform" />
                              )}
                              {done ? "Học lại" : l.progress > 0 ? "Học tiếp" : "Bắt đầu học"}
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}