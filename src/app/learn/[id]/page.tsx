"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Layers, ClipboardCheck, ChevronLeft, Check, X, Sparkles, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { ProgressBar } from "@/components/ProgressBar";
import { FlashCard } from "@/components/FlashCard";
import { VideoTimestampList } from "@/components/VideoTimestampList";
import { SpotlightCard } from "@/components/magic/SpotlightCard";
import { ConfettiExplosion } from "@/components/magic/ConfettiExplosion";
import { LESSONS, QUIZ_QUESTIONS, LESSON_QUIZZES } from "@/lib/mock/data";
import { useApp } from "@/lib/state/app-context";
import type { VocabItem, FlashCardData, QuizQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { layoutTransition, SPRING_BOUNCY } from "@/lib/motion";

const STEPS = [
  { label: "Xem video", icon: PlayCircle, color: "from-brand to-violet-600" },
  { label: "Flashcard", icon: Layers, color: "from-emerald-400 to-teal-500" },
  { label: "Kiểm tra", icon: ClipboardCheck, color: "from-amber-400 to-orange-500" },
];

export default function LearnPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = LESSONS.find((l) => l.id === id) ?? LESSONS[0];
  const questions = LESSON_QUIZZES[lesson.id] ?? QUIZ_QUESTIONS;

  const [step, setStep] = useState(0);

  return (
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="mb-6 flex items-center justify-between">
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand transition-colors group">
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Quay lại Dashboard
        </Link>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-600 border border-violet-100">Học tập • {lesson.titleVi}</span>
      </motion.div>

      {/* Stepper với shared layout pill */}
      <div className="relative mb-8 flex items-center rounded-[1.5rem] border border-slate-200/60 bg-white/80 p-2 shadow-soft backdrop-blur">
        <div className="absolute inset-2 rounded-[1.2rem] bg-slate-50" />
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = step === i;
          const done = step > i;
          return (
            <div key={s.label} className="relative flex flex-1 items-center">
              <button
                onClick={() => i <= step && setStep(i)}
                className={cn(
                  "relative z-10 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition-colors",
                  active ? "text-white" : done ? "text-success hover:text-success" : "text-slate-400",
                  i <= step ? "cursor-pointer" : "cursor-not-allowed opacity-60"
                )}
              >
                {active && (
                  <motion.div layoutId="active-step-pill" transition={layoutTransition} className={cn("absolute inset-0 rounded-xl bg-gradient-to-br shadow-glow-brand", s.color)} />
                )}
                {done && !active && <div className="absolute inset-0 rounded-xl bg-success-50 border border-success-100" />}
                <span className={cn("relative flex h-7 w-7 items-center justify-center rounded-full text-xs font-black transition-all", active ? "bg-white/20 text-white shadow-inner" : done ? "bg-success text-white" : "bg-white text-slate-400 border border-slate-200")}>
                  {done ? <Check className="h-4 w-4" /> : i + 1}
                </span>
                <span className="relative hidden sm:inline">{s.label}</span>
                <Icon className="relative h-4 w-4 sm:hidden" />
              </button>
              {i < STEPS.length - 1 && (
                <div className="relative z-10 mx-1 h-0.5 flex-1 rounded-full bg-slate-200 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: done ? "100%" : "0%" }} transition={{ duration: 0.6 }} className="h-full bg-success" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && <StepVideo key="video" lesson={lesson} onNext={() => setStep(1)} />}
        {step === 1 && <StepFlashcard key="flash" lessonId={lesson.id} vocab={lesson.vocab} onNext={() => setStep(2)} onBack={() => setStep(0)} />}
        {step === 2 && <StepQuiz key="quiz" questions={questions} onBack={() => setStep(1)} />}
      </AnimatePresence>
    </div>
  );
}

function StepVideo({ lesson, onNext }: { lesson: (typeof LESSONS)[number]; onNext: () => void }) {
  const [startAt, setStartAt] = useState(0);
  const [activeId, setActiveId] = useState<string | undefined>();
  const [nonce, setNonce] = useState(0);

  const seek = (item: VocabItem) => {
    setStartAt(item.start);
    setActiveId(item.id);
    setNonce((n) => n + 1);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(8px)" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-6">
      <SpotlightCard className="overflow-hidden p-0 border-0 shadow-lift" spotlightColor="rgba(37,99,235,0.12)">
        <div className="relative overflow-hidden rounded-3xl bg-black">
          <iframe key={nonce} className="aspect-video w-full" src={`https://www.youtube.com/embed/${lesson.youtubeId}?start=${startAt}&rel=0&modestbranding=1`} title={lesson.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
        <div className="p-6 bg-gradient-to-br from-white to-brand-50/30">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1 min-w-[200px]">
              <h2 className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet-600 text-white"><PlayCircle className="h-4 w-4" /></span>
                {lesson.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{lesson.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand border border-brand-100">{lesson.durationLabel}</span>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6">
            <ShimmerButton size="lg" className="w-full sm:w-auto" onClick={onNext}>Tiếp theo: Flashcard <ChevronLeft className="h-4 w-4 rotate-180" /></ShimmerButton>
          </motion.div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-extrabold text-slate-900"><Sparkles className="h-4 w-4 text-violet-500" /> Từ vựng trong video</p>
          <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-600">{lesson.vocab.length} từ</span>
        </div>
        <VideoTimestampList vocab={lesson.vocab} activeId={activeId} onSeek={seek} horizontal />
        <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-400"><span className="text-brand">💡</span> Bấm vào từ để tua video tới đúng đoạn - học tức thì.</p>
      </SpotlightCard>
    </motion.div>
  );
}

function StepFlashcard({ lessonId, vocab, onNext, onBack }: { lessonId: string; vocab: VocabItem[]; onNext: () => void; onBack: () => void }) {
  const { recordCard } = useApp();
  const cards: FlashCardData[] = vocab.map((v) => ({ id: v.id, front: v.word, phonetic: v.phonetic, back: v.meaning, example: v.example, exampleVi: v.exampleVi }));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const advance = () => {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, cards.length - 1));
  };
  const mark = (known: boolean) => {
    recordCard(lessonId, cards[index].id, known);
    if (index >= cards.length - 1) onNext();
    else advance();
  };
  const isLast = index >= cards.length - 1;
  const isEmpty = cards.length === 0;
  const safeIndex = Math.min(index, Math.max(0, cards.length - 1));

  if (isEmpty) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="flex flex-col items-center gap-6">
        <SpotlightCard className="w-full max-w-md p-8 text-center">
          <div className="text-5xl">🃏</div>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900">Bài này chưa có thẻ flashcard</h2>
          <p className="mt-1 text-slate-500">Quay lại sau khi bài học có từ vựng.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" onClick={onBack}><ChevronLeft className="h-4 w-4" /> Quay lại</Button>
            <ShimmerButton onClick={onNext}>Tiếp theo: Kiểm tra <ClipboardCheck className="h-4 w-4" /></ShimmerButton>
          </div>
        </SpotlightCard>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(8px)" }} className="flex flex-col items-center gap-6">
      <div className="w-full max-w-md">
        <div className="mb-3 flex items-center justify-between text-sm font-bold">
          <span className="flex items-center gap-2 text-slate-500"><Layers className="h-4 w-4" /> Thẻ {index + 1}/{cards.length}</span>
          <span className="rounded-full bg-success-50 px-2.5 py-1 text-xs font-bold text-success">Đã thuộc {index}/{cards.length} từ</span>
        </div>
        <ProgressBar value={((index + 1) / cards.length) * 100} tone="gradient" height="h-2.5" shimmer glow />
      </div>

      <motion.div key={safeIndex} initial={{ opacity: 0, x: 20, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -20, scale: 0.96 }} transition={SPRING_BOUNCY}>
        <FlashCard card={cards[safeIndex]} flipped={flipped} onFlip={() => setFlipped((f) => !f)} onKnown={() => mark(true)} onUnknown={() => mark(false)} />
      </motion.div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack}><ChevronLeft className="h-4 w-4" /> Quay lại</Button>
        {isLast && (
          <ShimmerButton onClick={onNext} className="from-emerald-500 to-teal-600">Làm bài kiểm tra <ClipboardCheck className="h-4 w-4" /></ShimmerButton>
        )}
      </div>
    </motion.div>
  );
}

function StepQuiz({ questions, onBack }: { questions: QuizQuestion[]; onBack: () => void }) {
  const { addXp, markLessonDone } = useApp();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const rewarded = useRef(false);

  const q = questions[current];

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
      if (!rewarded.current) {
        rewarded.current = true;
        addXp(30 + score * 10, "Hoàn thành bài học");
        markLessonDone();
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  };

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={SPRING_BOUNCY} className="relative">
        <ConfettiExplosion active={showConfetti} count={80} />
        <SpotlightCard className="p-8 text-center overflow-hidden border-0 shadow-lift" spotlightColor="rgba(16,185,129,0.15)">
          <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 300, delay: 0.2 }} className="text-6xl">🎉</motion.div>
          <motion.h2 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">Hoàn thành bài học!</motion.h2>
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="mt-3 flex items-center justify-center gap-3">
            <span className="rounded-full bg-success-50 px-4 py-2 font-bold text-success border border-success-100">Đúng {score}/{questions.length} câu</span>
            <span className="rounded-full bg-brand-50 px-4 py-2 font-bold text-brand border border-brand-100 flex items-center gap-1"><Zap className="h-4 w-4" /> +{score * 10} XP</span>
          </motion.div>
          {score === questions.length && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring", stiffness: 300 }} className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-orange-400 px-4 py-1.5 text-sm font-black text-slate-900 shadow-glow-accent">
              <Trophy className="h-4 w-4" /> Hoàn hảo! Perfect score ✨
            </motion.div>
          )}
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="outline" onClick={onBack}>Xem lại</Button>
            <ShimmerButton asChild size="lg"><Link href="/dashboard" className="flex items-center gap-2">Về trang chủ <Trophy className="h-4 w-4" /></Link></ShimmerButton>
          </div>
        </SpotlightCard>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet-600 text-white font-black text-sm shadow-glow-brand">{current + 1}</span>
          <span className="text-sm font-bold text-slate-500">/ {questions.length} câu</span>
          <div className="ml-2 h-6 w-px bg-slate-200" />
          <span className="flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-bold text-success border border-success-100"><Check className="h-3 w-3" /> Đúng {score}</span>
        </div>
        <span className="text-xs font-bold text-slate-400">{Math.round(((current + 1) / questions.length) * 100)}%</span>
      </div>
      <ProgressBar value={((current + 1) / questions.length) * 100} className="mb-6" tone="gradient" height="h-2" shimmer glow />

      <SpotlightCard className="p-6">
        <motion.h2 key={current} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-lg font-extrabold leading-snug text-slate-900">{q.prompt}</motion.h2>
        <div className="mt-6 grid gap-3">
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isPicked = i === selected;
            const reveal = selected !== null;
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={!reveal ? { scale: 1.01, x: 2 } : {}}
                whileTap={!reveal ? { scale: 0.99 } : {}}
                onClick={() => choose(i)}
                disabled={reveal}
                className={cn(
                  "group relative flex items-center gap-3 overflow-hidden rounded-2xl border-2 p-4 text-left font-bold transition-all",
                  !reveal && "border-slate-200 hover:border-brand-200 hover:bg-brand-50/50 hover:shadow-soft bg-white",
                  reveal && isAnswer && "border-success bg-gradient-to-r from-success-50 to-emerald-50 text-success shadow-glow-success",
                  reveal && isPicked && !isAnswer && "border-danger bg-danger-50 text-danger",
                  reveal && !isAnswer && !isPicked && "border-slate-100 text-slate-300 bg-slate-50"
                )}
              >
                <span className={cn("relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all", !reveal && "bg-slate-100 text-slate-600 group-hover:bg-brand group-hover:text-white", reveal && isAnswer && "bg-success text-white shadow-glow-success", reveal && isPicked && !isAnswer && "bg-danger text-white")}>
                  {reveal && isAnswer ? <Check className="h-4 w-4" /> : reveal && isPicked ? <X className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {reveal && isAnswer && <Sparkles className="h-4 w-4 text-success animate-pulse" />}
                {!reveal && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-50 to-transparent group-hover:animate-[shimmer_0.8s_ease-out]" />}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0 }} className="mt-5 overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-brand-50 p-4 text-sm text-slate-700">
              <span className="flex items-center gap-1.5 font-black text-violet-700"><Sparkles className="h-4 w-4" /> Giải thích:</span>
              <p className="mt-1 leading-relaxed">{q.explain}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {selected !== null && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <ShimmerButton className="mt-6 w-full" size="lg" onClick={next}>
              {current + 1 >= questions.length ? "Xem kết quả 🎉" : "Câu tiếp theo →"}
            </ShimmerButton>
          </motion.div>
        )}
      </SpotlightCard>
    </motion.div>
  );
}
