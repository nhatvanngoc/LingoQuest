"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, Clock, ArrowRight, CheckCircle2, Database, Sparkles, BookOpen } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SmartImage } from "@/components/SmartImage";
import { SpotlightCard } from "@/components/magic/SpotlightCard";
import { TiltCard } from "@/components/magic/TiltCard";
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-end justify-between gap-3"
      >
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-extrabold tracking-tight text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
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
            className="inline-flex items-center gap-1.5 rounded-full border border-success-200 bg-gradient-to-r from-success-50 to-emerald-50 px-3.5 py-1.5 text-xs font-extrabold text-success shadow-soft"
          >
            <Database className="h-3.5 w-3.5" /> CSDL: {overview.lessons} bài · {overview.vocab} từ · {overview.decks} bộ thẻ
          </motion.span>
        )}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-8 grid gap-6 sm:grid-cols-2"
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
              <TiltCard tiltMax={6} scale={1.02} className="h-full">
                <SpotlightCard
                  className="group flex h-full flex-col overflow-hidden border-0 bg-white shadow-card hover:shadow-lift transition-shadow duration-500"
                  spotlightColor={done ? "rgba(16,185,129,0.15)" : inProgress ? "rgba(251,191,36,0.12)" : "rgba(37,99,235,0.12)"}
                >
                  <div className="relative h-44 overflow-hidden">
                    <SmartImage
                      src={l.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"}
                      alt={l.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      gradient="from-brand-100 to-violet-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                    
                    {/* top badges */}
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Badge variant={done ? "success" : inProgress ? "accent" : "neutral"} className="shadow-soft backdrop-blur">
                          {done ? (
                            <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Đã xong</span>
                          ) : inProgress ? (
                            <span className="flex items-center gap-1"><Sparkles className="h-3 w-3" /> Đang học</span>
                          ) : (
                            "Mới"
                          )}
                        </Badge>
                      </motion.div>
                      {l.vocabCount >= 10 && (
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-black text-violet-600 shadow-soft backdrop-blur">
                          {l.vocabCount} từ 🔥
                        </span>
                      )}
                    </div>

                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
                      <Clock className="h-3 w-3" /> {l.durationLabel || "—"}
                    </span>

                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand shadow-lift backdrop-blur transition-transform"
                    >
                      <PlayCircle className="h-7 w-7 fill-brand text-brand" />
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-white"
                      />
                    </motion.div>

                    {/* progress line at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.progress}%` }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, delay: 0.3 + idx * 0.05 }}
                        className="h-full bg-gradient-to-r from-brand to-violet-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="line-clamp-1 text-lg font-extrabold leading-snug text-slate-900 group-hover:text-brand transition-colors">{l.title}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-slate-400">{l.titleVi}</p>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{l.description}</p>

                    <div className="mt-auto pt-5">
                      <div className="mb-2 flex items-center justify-between text-xs font-bold">
                        <span className="flex items-center gap-1 text-slate-500">
                          <BookOpen className="h-3.5 w-3.5" /> {l.vocabCount} từ vựng
                        </span>
                        <span className={done ? "text-success" : inProgress ? "text-amber-600" : "text-slate-400"}>
                          {l.progress}%
                        </span>
                      </div>
                      <ProgressBar
                        value={l.progress}
                        tone={done ? "success" : inProgress ? "gradient" : "brand"}
                        height="h-2"
                        shimmer
                        glow={inProgress}
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
                      <Button asChild className="w-full group/btn" variant={done ? "outline" : "default"} size="lg">
                        <Link href={`/learn/${l.slug}`} className="flex items-center justify-center gap-2">
                          {done ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />}
                          {done ? "Học lại" : l.progress > 0 ? "Học tiếp" : "Bắt đầu học"}
                          {!done && <Sparkles className="h-3 w-3 opacity-60" />}
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
