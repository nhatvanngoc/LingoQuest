"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, Clock, ArrowRight, CheckCircle2, Database, Sparkles, BookOpen } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUpReal, viewportOnce } from "@/lib/motion";

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

export interface DbOverview {
  lessons: number;
  vocab: number;
  decks: number;
  users: number;
}

export function LessonLibrary({
  lessons,
  overview,
}: {
  lessons: LibraryLesson[];
  overview?: DbOverview;
}) {
  return (
    <div className="mx-auto max-w-5xl">
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
            Thư viện bài học
          </h1>
          <p className="mt-2 text-slate-500">Mỗi bài gồm video tương tác, bộ flashcard thông minh và kiểm tra nhanh.</p>
        </div>
        {overview && (
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700"
          >
            <Database className="h-3.5 w-3.5" /> CSDL: {overview.lessons} bài · {overview.vocab} từ · {overview.decks} bộ thẻ
          </motion.span>
        )}
      </motion.div>

      {lessons.length === 0 ? (
        <motion.div
          variants={fadeUpReal}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand mb-4 shadow-soft">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Chưa có bài học nào được đăng</h3>
          <p className="mt-2 max-w-md text-sm text-slate-500">
            Hệ thống đang sẵn sàng cho khoá học mới. Giáo viên và quản trị viên sẽ sớm cập nhật các bài giảng và bài tập!
          </p>
        </motion.div>
      ) : (
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-8 grid gap-6 sm:grid-cols-2">
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
                    src={l.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
                    alt={l.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    gradient="from-teal-100 to-emerald-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />

                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <Badge variant={done ? "success" : inProgress ? "accent" : "neutral"}>
                      {done ? (
                        <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Đã xong</span>
                      ) : inProgress ? (
                        <span className="flex items-center gap-1"><Sparkles className="h-3 w-3" /> Đang học</span>
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
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${l.progress}%` }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.3 + idx * 0.05 }} className="h-full bg-gradient-to-r from-teal-500 to-emerald-500" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading line-clamp-1 text-base font-bold leading-snug text-slate-900 group-hover:text-teal-700 transition-colors">{l.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-400">{l.titleVi}</p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">{l.description}</p>

                  <div className="mt-auto pt-4">
                    <div className="mb-2 flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-1 text-slate-500">
                        <BookOpen className="h-3.5 w-3.5" /> {l.vocabCount} từ vựng
                      </span>
                      <span className={done ? "text-emerald-600" : inProgress ? "text-amber-600" : "text-slate-400"}>
                        {l.progress}%
                      </span>
                    </div>
                    <ProgressBar value={l.progress} tone={done ? "success" : inProgress ? "gradient" : "brand"} height="h-1.5" />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="mt-3">
                    <Button asChild className="w-full rounded-xl font-bold" variant={done ? "outline" : "default"} size="lg">
                      <Link href={`/learn/${l.slug}`} className="flex items-center justify-center gap-2">
                        {done ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition-transform" />}
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
  );
}