"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Check,
  X,
  Heart,
  PenLine,
  ListChecks,
  AlertCircle,
  Gamepad2,
  RefreshCw,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { Confetti } from "@/components/Confetti";
import { Mascot } from "@/components/brand/Mascot";
import { QUIZ_QUESTIONS } from "@/lib/mock/data";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";

/* Trang làm bài tập — 3 dạng: Trắc nghiệm · Bài viết · Kết quả */

const RECOMMEND_WORDS = ["relaxing", "exhausted", "hang out", "delicious", "adventure", "first of all", "after that", "finally"];
const OUTLINE = ["Mở bài: Giới thiệu kỳ nghỉ (where & when)", "Thân bài 1: Hoạt động trong ngày đầu tiên", "Thân bài 2: Khoảnh khắc đáng nhớ nhất", "Kết bài: Cảm nghĩ về chuyến đi"];

type Tab = "quiz" | "write";
type Result = { type: Tab; score: number; total: number } | null;

export default function ExercisePage() {
  const { id } = useParams<{ id: string }>();
  const { addXp } = useApp();
  const [tab, setTab] = useState<Tab>("quiz");
  const [result, setResult] = useState<Result>(null);
  const [assignment, setAssignment] = useState<{
    id: string;
    title: string;
    prompt?: string | null;
    description?: string | null;
    lessonTitle?: string | null;
  } | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/assignments/${id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && d.assignment) {
          setAssignment(d.assignment);
          if (d.assignment.prompt) {
            setTab("write");
          }
        }
      })
      .catch(() => {});
  }, [id]);

  // Kết thúc bài → cộng XP và đồng bộ lên server
  const finish = (r: NonNullable<Result>) => {
    setResult(r);
    const pct = Math.round((r.score / r.total) * 100);
    const earnedXp = Math.round(pct * 0.5);
    addXp(earnedXp, r.type === "quiz" ? "Hoàn thành bài trắc nghiệm" : "Nộp bài viết");
    fetch("/api/user/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ xp: earnedXp }),
    }).catch(() => {});
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" /> Quay lại
        </Link>

        <AnimatePresence mode="wait">
          {result ? (
            <ResultScreen key="result" result={result} onRetry={() => { setResult(null); setTab(result.type); }} />
          ) : (
            <motion.div key="exercise" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h1 className="text-xl font-extrabold text-slate-900">
                {assignment?.title || "Bài tập thực hành"}
              </h1>
              <p className="mb-4 text-sm text-slate-500">
                {assignment?.prompt
                  ? "Bài tập tự luận do giáo viên giao riêng cho bạn"
                  : "Luyện tập từ vựng, ngữ pháp và kỹ năng viết đoạn văn"}
              </p>

              {/* Segmented control */}
              <div className="mb-6 inline-flex rounded-2xl bg-slate-100 p-1">
                <SegBtn active={tab === "quiz"} onClick={() => setTab("quiz")} icon={ListChecks} label="Trắc nghiệm" />
                <SegBtn active={tab === "write"} onClick={() => setTab("write")} icon={PenLine} label="Bài viết" />
              </div>

              {tab === "quiz" ? (
                <QuizMode onFinish={(score, total) => finish({ type: "quiz", score, total })} />
              ) : (
                <WriteMode
                  assignmentId={id}
                  customTitle={assignment?.title}
                  customPrompt={assignment?.prompt || undefined}
                  customDescription={assignment?.description || undefined}
                  onFinish={(score, total) => finish({ type: "write", score, total })}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppShell>
  );
}

function SegBtn({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: typeof ListChecks; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-colors",
        active ? "bg-white text-brand shadow-soft" : "text-slate-500",
      )}
    >
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}

/* ---------------- Trắc nghiệm kiểu Duolingo: 1 câu / màn hình ---------------- */
function QuizMode({ onFinish }: { onFinish: (score: number, total: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const q = QUIZ_QUESTIONS[current];
  const reveal = selected !== null;

  // Tự chuyển câu sau khi chọn (theo yêu cầu "tự chuyển câu").
  useEffect(() => {
    if (selected === null) return;
    const t = setTimeout(() => {
      if (current + 1 >= QUIZ_QUESTIONS.length || lives <= 1 && selected !== q.answer) {
        onFinish(score, QUIZ_QUESTIONS.length);
        return;
      }
      setCurrent((c) => c + 1);
      setSelected(null);
    }, 1700);
    return () => clearTimeout(t);
  }, [selected]); // eslint-disable-line react-hooks/exhaustive-deps

  const choose = (i: number) => {
    if (reveal) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
    else setLives((l) => l - 1);
  };

  return (
    <div>
      {/* Thanh mạng & tiến độ */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart key={i} className={cn("h-5 w-5", i < lives ? "fill-danger text-danger" : "text-slate-200")} />
          ))}
        </div>
        <ProgressBar value={((current + 1) / QUIZ_QUESTIONS.length) * 100} tone="brand" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Câu {current + 1}</p>
          <h2 className="mt-2 text-lg font-extrabold leading-snug text-slate-900">{q.prompt}</h2>

          <div className="mt-5 grid gap-3">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isPicked = i === selected;
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
                      "flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs",
                      !reveal && "border-slate-200 text-slate-500",
                      reveal && isAnswer && "border-success bg-success text-white",
                      reveal && isPicked && !isAnswer && "border-danger bg-danger text-white",
                    )}
                  >
                    {reveal && isAnswer ? <Check className="h-4 w-4" /> : reveal && isPicked ? <X className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Phản hồi + giải thích ngắn */}
          <AnimatePresence>
            {reveal && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "mt-4 flex items-start gap-3 rounded-2xl p-4 text-sm",
                  selected === q.answer ? "bg-success-50 text-success" : "bg-danger-50 text-danger",
                )}
              >
                {selected === q.answer ? <Check className="mt-0.5 h-5 w-5 shrink-0" /> : <X className="mt-0.5 h-5 w-5 shrink-0" />}
                <p>
                  <span className="font-extrabold">{selected === q.answer ? "Chính xác! " : "Chưa đúng. "}</span>
                  <span className="text-slate-600">{q.explain}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Bài viết: khung soạn thảo + gửi về server ---------------- */
function WriteMode({
  assignmentId,
  customTitle,
  customPrompt,
  customDescription,
  onFinish,
}: {
  assignmentId?: string;
  customTitle?: string;
  customPrompt?: string;
  customDescription?: string;
  onFinish: (score: number, total: number) => void;
}) {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  const usedWords = RECOMMEND_WORDS.filter((w) => text.toLowerCase().includes(w.toLowerCase()));

  const promptText = customPrompt || "Kể về kỳ nghỉ hè của bạn (hoặc trải nghiệm đáng nhớ)";
  const titleText = customTitle || "Bài tập luyện viết";

  async function handleSend() {
    if (words < 5) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assignmentId: assignmentId || null,
          lessonTitle: titleText,
          prompt: promptText,
          text,
          words,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Không thể nộp bài, thử lại sau");
        return;
      }
      onFinish(85, 100);
    } catch {
      setError("Lỗi mạng khi nộp bài");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-5 md:grid-cols-[1.5fr_1fr]">
      {/* Khung soạn thảo */}
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-extrabold text-slate-900">Đề bài: {promptText}</h2>
          <span className={cn("rounded-full px-3 py-1 text-xs font-extrabold", words >= 80 ? "bg-success-50 text-success" : "bg-slate-100 text-slate-500")}>
            {words} từ
          </span>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Viết bài của bạn tại đây... (khuyến nghị tối thiểu 80 từ)"
          className="min-h-[280px] w-full resize-y rounded-2xl border-2 border-slate-200 p-4 text-[15px] leading-relaxed text-slate-900 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
          disabled={submitting}
        />
        {error && <p className="mt-2 text-xs font-bold text-danger">{error}</p>}
        <Button className="mt-4 w-full" onClick={handleSend} disabled={words < 5 || submitting}>
          {submitting ? "Đang gửi bài..." : "Nộp bài cho giáo viên"}
        </Button>
        {words < 5 && <p className="mt-2 text-center text-xs font-semibold text-slate-400">Viết ít nhất 5 từ để nộp bài</p>}
      </div>

      {/* Panel gợi ý */}
      <div className="flex flex-col gap-4">
        {customDescription ? (
          <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-5 shadow-soft">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-extrabold text-brand-900">
              <PenLine className="h-4 w-4 text-brand" /> Hướng dẫn & Dàn ý của giáo viên
            </h3>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
              {customDescription}
            </p>
          </div>
        ) : null}

        <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-900">
            <ListChecks className="h-4 w-4 text-brand" /> Từ vựng nên dùng
          </h3>
          <div className="flex flex-wrap gap-2">
            {RECOMMEND_WORDS.map((w) => {
              const used = usedWords.includes(w);
              return (
                <span
                  key={w}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-bold",
                    used ? "bg-success text-white" : "bg-brand-50 text-brand",
                  )}
                >
                  {used && "✓ "}{w}
                </span>
              );
            })}
          </div>
        </div>

        {!customDescription && (
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-extrabold text-slate-900">
              <PenLine className="h-4 w-4 text-accent" /> Gợi ý dàn ý mẫu
            </h3>
            <ol className="flex flex-col gap-2">
              {OUTLINE.map((o, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs font-extrabold text-amber-700">{i + 1}</span>
                  {o}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Màn hình kết quả + confetti ---------------- */
function ResultScreen({ result, onRetry }: { result: { type: Tab; score: number; total: number }; onRetry: () => void }) {
  const pct = Math.round((result.score / result.total) * 100);
  const pass = pct >= 50;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"
    >
      <Confetti fire={pass} />

      <div className="mb-2 flex justify-center">
        <Mascot mood={pass ? "happy" : "think"} size={140} />
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900">{pass ? "Xuất sắc! 🎉" : "Cố lên nhé! 💪"}</h1>
      <p className="mt-1 text-slate-500">
        {result.type === "quiz" ? `Bạn đúng ${result.score}/${result.total} câu` : "Bài viết đã được nộp"}
      </p>

      {/* Vòng điểm số */}
      <div className="relative mx-auto my-6 flex h-36 w-36 items-center justify-center">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="#E2E8F0" strokeWidth="10" />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke={pass ? "#10B981" : "#EF4444"}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * 276} 276`}
          />
        </svg>
        <div className="absolute text-center">
          <p className={cn("text-3xl font-extrabold", pass ? "text-success" : "text-danger")}>{pct}%</p>
          <p className="text-xs font-bold text-slate-400">điểm số</p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Button variant="outline" onClick={onRetry}>
          <RefreshCw className="h-4 w-4" /> Làm lại
        </Button>
        <Button variant="outline" asChild>
          <Link href="/progress">
            <AlertCircle className="h-4 w-4" /> Xem lại lỗi sai
          </Link>
        </Button>
        <Button asChild>
          <Link href="/game">
            <Gamepad2 className="h-4 w-4" /> Chơi game ôn tập
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
