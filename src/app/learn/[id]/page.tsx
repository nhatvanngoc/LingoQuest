"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Layers, ClipboardCheck, ChevronLeft, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { FlashCard } from "@/components/FlashCard";
import { VideoTimestampList } from "@/components/VideoTimestampList";
import { LESSONS, QUIZ_QUESTIONS, LESSON_QUIZZES } from "@/lib/mock/data";
import { useApp } from "@/lib/state/app-context";
import type { VocabItem, FlashCardData, QuizQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";

/* Màn hình học — luồng 3 bước: Video → Flashcard → Kiểm tra */

const STEPS = [
  { label: "Xem video", icon: PlayCircle },
  { label: "Flashcard", icon: Layers },
  { label: "Kiểm tra", icon: ClipboardCheck },
];

export default function LearnPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = LESSONS.find((l) => l.id === id) ?? LESSONS[0];
  const questions = LESSON_QUIZZES[lesson.id] ?? QUIZ_QUESTIONS;

  const [step, setStep] = useState(0);

  return (
    <div className="mx-auto max-w-5xl">
      {/* Nút quay lại */}
      <Link
        href="/dashboard"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
      >
        <ChevronLeft className="h-4 w-4" /> Quay lại Dashboard
      </Link>

      {/* ===== Stepper ===== */}
      <div className="mb-6 flex items-center">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = step === i;
          const done = step > i;
          return (
            <div key={s.label} className="flex flex-1 items-center last:flex-none">
              <button
                onClick={() => i < step && setStep(i)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition-colors",
                  active && "bg-brand text-white shadow-soft",
                  done && "bg-success-50 text-success",
                  !active && !done && "text-slate-400",
                )}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                    active && "bg-white/25",
                    done && "bg-success text-white",
                    !active && !done && "bg-slate-100 text-slate-400",
                  )}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
                <Icon className="h-4 w-4 sm:hidden" />
              </button>
              {i < STEPS.length - 1 && (
                <div className={cn("mx-1 h-0.5 flex-1 rounded-full", done ? "bg-success" : "bg-slate-100")} />
              )}
            </div>
          );
        })}
      </div>

      {/* ===== Nội dung từng bước ===== */}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <StepVideo key="video" lesson={lesson} onNext={() => setStep(1)} />
        )}
        {step === 1 && (
          <StepFlashcard
            key="flash"
            lessonId={lesson.id}
            vocab={lesson.vocab}
            onNext={() => setStep(2)}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && <StepQuiz key="quiz" questions={questions} onBack={() => setStep(1)} />}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Bước 1: Video + danh sách từ vựng ---------------- */
function StepVideo({ lesson, onNext }: { lesson: (typeof LESSONS)[number]; onNext: () => void }) {
  const [startAt, setStartAt] = useState(0);
  const [activeId, setActiveId] = useState<string | undefined>();
  const [nonce, setNonce] = useState(0);

  const seek = (item: VocabItem) => {
    setStartAt(item.start);
    setActiveId(item.id);
    setNonce((n) => n + 1); // ép iframe nạp lại để tua tới timestamp
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="flex flex-col gap-5"
    >
      {/* Video player — chiếm toàn bộ chiều rộng để video lớn hơn */}
      <div>
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-black shadow-card">
          <iframe
            key={nonce}
            className="aspect-video w-full"
            src={`https://www.youtube.com/embed/${lesson.youtubeId}?start=${startAt}&rel=0&modestbranding=1`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h2 className="mt-4 text-xl font-extrabold text-slate-900">{lesson.title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{lesson.description}</p>
        <Button className="mt-5 w-full sm:w-auto" onClick={onNext}>
          Tiếp theo: Flashcard <ChevronLeft className="h-4 w-4 rotate-180" />
        </Button>
      </div>

      {/* Timeline từ vựng — hiển thị dạng dải ngang gọn gàng */}
      <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-soft">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-sm font-extrabold text-slate-900">Từ vựng trong video</p>
          <span className="text-xs font-semibold text-slate-400">{lesson.vocab.length} từ</span>
        </div>
        <VideoTimestampList vocab={lesson.vocab} activeId={activeId} onSeek={seek} horizontal />
        <p className="mt-3 px-1 text-xs text-slate-400">💡 Bấm vào từ để tua video tới đúng đoạn.</p>
      </div>
    </motion.div>
  );
}

/* ---------------- Bước 2: Flashcard lật 3D ---------------- */
function StepFlashcard({
  lessonId,
  vocab,
  onNext,
  onBack,
}: {
  lessonId: string;
  vocab: VocabItem[];
  onNext: () => void;
  onBack: () => void;
}) {
  const { recordCard } = useApp();
  const cards: FlashCardData[] = vocab.map((v) => ({
    id: v.id,
    front: v.word,
    phonetic: v.phonetic,
    back: v.meaning,
    example: v.example,
    exampleVi: v.exampleVi,
  }));

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const advance = () => {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, cards.length - 1));
  };

  // Ghi nhận SRS theo thẻ rồi chuyển tiếp
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card">
          <div className="text-5xl">🃏</div>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900">Bài này chưa có thẻ flashcard</h2>
          <p className="mt-1 text-slate-500">Quay lại sau khi bài học có từ vựng.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="outline" onClick={onBack}>
              <ChevronLeft className="h-4 w-4" /> Quay lại
            </Button>
            <Button onClick={onNext}>
              Tiếp theo: Kiểm tra <ClipboardCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center justify-between text-sm font-bold text-slate-400">
          <span>Thẻ {index + 1}/{cards.length}</span>
          <span>Đã thuộc {index}/{cards.length} từ</span>
        </div>
        <ProgressBar value={((index + 1) / cards.length) * 100} tone="success" />
      </div>

      <FlashCard
        card={cards[safeIndex]}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
        onKnown={() => mark(true)}
        onUnknown={() => mark(false)}
      />

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="h-4 w-4" /> Quay lại
        </Button>
        {isLast && (
          <Button variant="success" onClick={onNext}>
            Làm bài kiểm tra <ClipboardCheck className="h-4 w-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}

/* ---------------- Bước 3: 5 câu trắc nghiệm nhanh ---------------- */
function StepQuiz({ questions, onBack }: { questions: QuizQuestion[]; onBack: () => void }) {
  const { addXp, markLessonDone } = useApp();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
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
      // Cộng XP đúng 1 lần khi hoàn thành bài học (score đã bao gồm câu cuối)
      if (!rewarded.current) {
        rewarded.current = true;
        addXp(30 + score * 10, "Hoàn thành bài học");
        markLessonDone(); // → nhiệm vụ "hoàn thành 1 bài học"
      }
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"
      >
        <div className="text-5xl">🎉</div>
        <h2 className="mt-3 text-2xl font-extrabold text-slate-900">Hoàn thành bài học!</h2>
        <p className="mt-1 text-slate-500">
          Bạn đúng <span className="font-extrabold text-success">{score}/{questions.length}</span> câu ·
          nhận <span className="font-extrabold text-brand">+{score * 10} XP</span>
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="outline" onClick={onBack}>
            Xem lại
          </Button>
          <Button asChild>
            <Link href="/dashboard">Về trang chủ</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
    >
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-slate-400">
        <span>Câu {current + 1}/{questions.length}</span>
        <span className="text-success">Đúng {score}</span>
      </div>
      <ProgressBar value={((current + 1) / questions.length) * 100} className="mb-6" tone="brand" />

      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
        <h2 className="text-lg font-extrabold text-slate-900">{q.prompt}</h2>
        <div className="mt-5 grid gap-3">
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isPicked = i === selected;
            const reveal = selected !== null;
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={reveal}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border-2 p-4 text-left font-bold transition-colors",
                  !reveal && "border-slate-200 hover:border-brand hover:bg-brand-50",
                  reveal && isAnswer && "border-success bg-success-50 text-success",
                  reveal && isPicked && !isAnswer && "border-danger bg-danger-50 text-danger",
                  reveal && !isAnswer && !isPicked && "border-slate-100 text-slate-300",
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-sm",
                    !reveal && "bg-slate-100 text-slate-500",
                    reveal && isAnswer && "bg-success text-white",
                    reveal && isPicked && !isAnswer && "bg-danger text-white",
                  )}
                >
                  {reveal && isAnswer ? <Check className="h-4 w-4" /> : reveal && isPicked ? <X className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 overflow-hidden rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"
            >
              <span className="font-bold text-slate-900">💡 Giải thích: </span>
              {q.explain}
            </motion.div>
          )}
        </AnimatePresence>

        {selected !== null && (
          <Button className="mt-5 w-full" onClick={next}>
            {current + 1 >= questions.length ? "Xem kết quả" : "Câu tiếp theo"}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
