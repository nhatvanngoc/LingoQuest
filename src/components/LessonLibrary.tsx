"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, Clock, ArrowRight, CheckCircle2, Database } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUp } from "@/lib/motion";

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

/* Thư viện bài học (client) — nhận dữ liệu đã fetch từ server */
export function LessonLibrary({
  lessons,
  overview,
}: {
  lessons: LibraryLesson[];
  overview?: DbOverview;
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">📚 Thư viện bài học</h1>
          <p className="mt-1 text-slate-500">Mỗi bài gồm video, bộ flashcard và bài kiểm tra nhanh.</p>
        </div>
        {overview && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1.5 text-xs font-extrabold text-success">
            <Database className="h-3.5 w-3.5" /> CSDL: {overview.lessons} bài · {overview.vocab} từ
          </span>
        )}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        {lessons.map((l) => {
          const done = l.progress >= 100;
          return (
            <motion.div
              key={l.slug}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft"
            >
              <div className="relative h-36">
                <SmartImage
                  src={l.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
                  alt={l.title}
                  className="h-full w-full object-cover"
                  gradient="from-brand-100 to-accent-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute left-3 top-3">
                  <Badge variant={done ? "success" : l.progress > 0 ? "brand" : "neutral"}>
                    {done ? "Đã xong" : l.progress > 0 ? "Đang học" : "Mới"}
                  </Badge>
                </span>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-600">
                  <Clock className="h-3 w-3" /> {l.durationLabel || "—"}
                </span>
                <PlayCircle className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white/90 drop-shadow transition-transform group-hover:scale-110" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold leading-snug text-slate-900">{l.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{l.titleVi}</p>
                <p className="mt-2 line-clamp-2 text-sm text-slate-400">{l.description}</p>

                <div className="mt-auto pt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>{l.vocabCount} từ vựng</span>
                    <span>{l.progress}%</span>
                  </div>
                  <ProgressBar value={l.progress} tone={done ? "success" : "brand"} height="h-2" />
                </div>

                <Button asChild className="mt-4 w-full" variant={done ? "outline" : "default"}>
                  <Link href={`/learn/${l.slug}`}>
                    {done ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    {done ? "Học lại" : l.progress > 0 ? "Học tiếp" : "Bắt đầu học"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
