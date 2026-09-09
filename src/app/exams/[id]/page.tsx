"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Award,
  Zap,
  Volume2,
  Flame,
  Check,
  X,
  Shuffle,
  ShieldAlert,
  Send,
  HelpCircle,
  Trophy,
  Gamepad2,
  FileText,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { getExamById, type ExamData } from "@/lib/quiz/exam-store";
import { sound } from "@/lib/sound";

export default function StudentExamRunnerPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const examId = params?.id;

  const [exam, setExam] = useState<ExamData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mode: "azota" (Full Sheet) vs "quizizz" (Interactive Single Question Game)
  const [playMode, setPlayMode] = useState<"azota" | "quizizz">("quizizz");

  // Answers & State
  const [userAnswers, setUserAnswers] = useState<Record<number, "A" | "B" | "C" | "D">>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Time remaining (in seconds)
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Anti-cheat tab switch counter
  const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
  const [showCheatWarning, setShowCheatWarning] = useState<boolean>(false);

  // Quizizz Mode State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [streakCount, setStreakCount] = useState<number>(0);
  const [quizizzScore, setQuizizzScore] = useState<number>(0);
  const [qTimer, setQTimer] = useState<number>(20); // 20s per question in Quizizz mode
  const [qAnswered, setQAnswered] = useState<boolean>(false);

  // Load Exam
  useEffect(() => {
    if (!examId) return;
    const found = getExamById(examId);
    if (found) {
      setExam(found);
      setTimeLeft(found.durationMinutes > 0 ? found.durationMinutes * 60 : 15 * 60);
    }
    setLoading(false);
  }, [examId]);

  // Overall Timer Countdown
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSubmitted, timeLeft]);

  // Anti-cheat: Listen for Tab Switches (Azota feature)
  useEffect(() => {
    if (!exam?.antiCheatEnabled || isSubmitted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((c) => c + 1);
        setShowCheatWarning(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [exam, isSubmitted]);

  // Quizizz Question Timer
  useEffect(() => {
    if (playMode !== "quizizz" || isSubmitted || qAnswered) return;
    const qInterval = setInterval(() => {
      setQTimer((prev) => {
        if (prev <= 1) {
          // Time ran out for this question
          setQAnswered(true);
          setStreakCount(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(qInterval);
  }, [playMode, isSubmitted, qAnswered, currentQIndex]);

  // Shuffled or Original Questions
  const activeQuestions = useMemo(() => {
    if (!exam) return [];
    return exam.questions;
  }, [exam]);

  // Score Calculation
  const finalResults = useMemo(() => {
    if (!exam) return { scoreOutOf10: 0, correctCount: 0, total: 0, percent: 0 };
    const total = activeQuestions.length;
    let correct = 0;
    activeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const scoreOutOf10 = total > 0 ? Number(((correct / total) * 10).toFixed(1)) : 0;
    return { scoreOutOf10, correctCount: correct, total, percent };
  }, [exam, activeQuestions, userAnswers]);

  if (loading) {
    return (
      <AppShell>
        <div className="mx-auto max-w-xl py-24 text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent mx-auto" />
          <p className="mt-4 text-xs font-bold text-slate-500">Đang tải đề thi...</p>
        </div>
      </AppShell>
    );
  }

  if (!exam) {
    return (
      <AppShell>
        <div className="mx-auto max-w-xl py-24 text-center">
          <div className="text-5xl mb-3">🔍</div>
          <h2 className="font-heading text-xl font-bold text-slate-900">Không tìm thấy đề thi này</h2>
          <p className="mt-1 text-xs text-slate-500">Mã đề hoặc liên kết không hợp lệ.</p>
          <Button asChild className="mt-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold">
            <Link href="/dashboard">Về Bảng điều khiển học sinh</Link>
          </Button>
        </div>
      </AppShell>
    );
  }

  // Action: Select Answer in Quizizz Mode
  const handleSelectQuizizzOption = (optKey: "A" | "B" | "C" | "D") => {
    if (qAnswered) return;
    const currentQ = activeQuestions[currentQIndex];
    setUserAnswers((prev) => ({ ...prev, [currentQIndex]: optKey }));
    setQAnswered(true);

    const isCorrect = optKey === currentQ.correctAnswer;
    if (isCorrect) {
      sound?.playPop?.();
      const speedPoints = Math.round(qTimer * 40);
      const streakBonus = streakCount * 100;
      setQuizizzScore((s) => s + 600 + speedPoints + streakBonus);
      setStreakCount((s) => s + 1);
    } else {
      setStreakCount(0);
    }
  };

  // Action: Next Question in Quizizz Mode
  const handleNextQuizizzQuestion = () => {
    if (currentQIndex < activeQuestions.length - 1) {
      setCurrentQIndex((i) => i + 1);
      setQTimer(20);
      setQAnswered(false);
    } else {
      setIsSubmitted(true);
    }
  };

  // Format Time MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl pb-20">
        {/* Anti-cheat Alert Modal (Azota Style) */}
        <AnimatePresence>
          {showCheatWarning && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
            >
              <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border-2 border-red-200 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 mb-3">
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-lg font-bold text-red-950">
                  Cảnh báo rời màn hình thi!
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Hệ thống giám sát phát hiện bạn vừa chuyển tab hoặc thu nhỏ cửa sổ làm bài.
                  Lần vi phạm: <strong className="text-red-600 font-bold">{tabSwitchCount} lần</strong>.
                </p>
                <Button
                  onClick={() => setShowCheatWarning(false)}
                  className="mt-5 w-full rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-4"
                >
                  Tôi đã hiểu &amp; Tiếp tục làm bài
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Header Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-1.5"
              >
                <span className="text-slate-400">←</span> Thoát phòng thi
              </Link>
              <h1 className="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {exam.title}
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Mã phòng thi: <strong className="font-mono text-indigo-600">{exam.pinCode}</strong> • {exam.questions.length} câu hỏi
              </p>
            </div>

            {/* Right Controls: Mode Toggle & Timer */}
            <div className="flex items-center gap-3">
              {/* Mode Switcher */}
              {!isSubmitted && (
                <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setPlayMode("quizizz")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                      playMode === "quizizz" ? "bg-white text-indigo-700 shadow-2xs" : "text-slate-600"
                    }`}
                  >
                    <Gamepad2 className="h-3.5 w-3.5 text-indigo-600" />
                    Chế độ Quizizz
                  </button>
                  <button
                    onClick={() => setPlayMode("azota")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all cursor-pointer ${
                      playMode === "azota" ? "bg-white text-indigo-700 shadow-2xs" : "text-slate-600"
                    }`}
                  >
                    <FileText className="h-3.5 w-3.5 text-teal-600" />
                    Chế độ Azota
                  </button>
                </div>
              )}

              {/* Timer Pill */}
              <div className="flex items-center gap-2 rounded-2xl bg-indigo-50 px-4 py-2 text-indigo-700 border border-indigo-100 font-mono font-black text-sm">
                <Clock className="h-4 w-4 text-indigo-600" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RESULT SCREEN AFTER SUBMISSION */}
        {/* ========================================================= */}
        {isSubmitted ? (
          <div className="space-y-6">
            {/* Score Banner */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 mb-4">
                <Trophy className="h-9 w-9" />
              </div>

              <h2 className="font-heading text-2xl font-black text-slate-900">
                Kết Quả Bài Kiểm Tra
              </h2>
              <p className="text-xs text-slate-500 mt-1">Đã nộp bài thành công • {exam.title}</p>

              <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                <div className="rounded-2xl bg-indigo-50 p-4 border border-indigo-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Điểm số</span>
                  <div className="text-3xl font-black text-indigo-700 mt-1">
                    {finalResults.scoreOutOf10}/10
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Số câu đúng</span>
                  <div className="text-3xl font-black text-emerald-700 mt-1">
                    {finalResults.correctCount}/{finalResults.total}
                  </div>
                </div>

                <div className="rounded-2xl bg-purple-50 p-4 border border-purple-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Độ chính xác</span>
                  <div className="text-3xl font-black text-purple-700 mt-1">
                    {finalResults.percent}%
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50 p-4 border border-amber-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Điểm Quizizz</span>
                  <div className="text-3xl font-black text-amber-700 mt-1">
                    {quizizzScore > 0 ? quizizzScore : finalResults.correctCount * 800} XP
                  </div>
                </div>
              </div>

              {tabSwitchCount > 0 && (
                <div className="inline-flex items-center gap-1.5 text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200 mb-4">
                  <ShieldAlert className="h-3.5 w-3.5" /> Ghi nhận {tabSwitchCount} lần rời tab thi
                </div>
              )}

              <div className="flex justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setUserAnswers({});
                    setIsSubmitted(false);
                    setCurrentQIndex(0);
                    setStreakCount(0);
                    setQuizizzScore(0);
                    setTimeLeft(exam.durationMinutes * 60);
                  }}
                  className="rounded-2xl text-xs font-bold py-5"
                >
                  <RotateCcw className="mr-1.5 h-4 w-4" /> Làm lại bài thi
                </Button>
                <Button
                  asChild
                  className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-5 shadow-xs"
                >
                  <Link href="/dashboard">Về Bảng điều khiển</Link>
                </Button>
              </div>
            </div>

            {/* Detailed Explanations */}
            {exam.showAnswersAfterSubmit && (
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Chi tiết từng câu &amp; Lời giải thích:
                </h3>

                {activeQuestions.map((q, idx) => {
                  const userAns = userAnswers[idx];
                  const isCorrect = userAns === q.correctAnswer;
                  return (
                    <div
                      key={q.id || idx}
                      className={`rounded-3xl border p-6 shadow-xs bg-white ${
                        isCorrect ? "border-emerald-200" : "border-red-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-black text-slate-700">
                          Câu {idx + 1}
                        </span>
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                            <Check className="h-3.5 w-3.5" /> Trả lời đúng
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full">
                            <X className="h-3.5 w-3.5" /> Trả lời sai
                          </span>
                        )}
                      </div>

                      <p className="font-heading text-sm font-bold text-slate-900">{q.questionText}</p>

                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt) => {
                          const isKeyCorrect = opt.key === q.correctAnswer;
                          const isUserPicked = userAns === opt.key;
                          let style = "border-slate-200 bg-slate-50/50 text-slate-600";
                          if (isKeyCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-900 font-bold";
                          else if (isUserPicked && !isKeyCorrect) style = "border-red-300 bg-red-50 text-red-900 font-bold";

                          return (
                            <div key={opt.key} className={`rounded-xl border p-2.5 ${style}`}>
                              <span className="font-black mr-1">{opt.key}.</span> {opt.text}
                            </div>
                          );
                        })}
                      </div>

                      {q.explanation && (
                        <div className="mt-3 rounded-2xl bg-indigo-50/70 p-3 text-xs text-indigo-900 border border-indigo-100">
                          <strong className="text-indigo-950">Giải thích chi tiết: </strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* ========================================================= */
          /* PLAY MODE: QUIZIZZ OR AZOTA SHEET */
          /* ========================================================= */
          <div>
            {/* ========================================= */}
            {/* MODE 1: QUIZIZZ INTERACTIVE GAME CARD */}
            {/* ========================================= */}
            {playMode === "quizizz" && (
              <div className="mx-auto max-w-2xl">
                {/* Streak & Score Bar */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">
                      Câu {currentQIndex + 1} / {activeQuestions.length}
                    </span>
                    {streakCount >= 2 && (
                      <span className="flex items-center gap-1 text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 animate-bounce">
                        <Flame className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        Streak x{streakCount}!
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-black text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    Điểm: {quizizzScore} XP
                  </div>
                </div>

                {/* Per-question Timer Bar */}
                <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      qTimer > 10 ? "bg-indigo-600" : qTimer > 5 ? "bg-amber-500" : "bg-red-500"
                    }`}
                    style={{ width: `${(qTimer / 20) * 100}%` }}
                  />
                </div>

                {/* Question Big Card */}
                {activeQuestions[currentQIndex] && (
                  <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-bold">
                      <span>CHẾ ĐỘ THI ĐẤU QUIZIZZ</span>
                      <span>Thời gian: {qTimer}s</span>
                    </div>

                    <h2 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 leading-relaxed min-h-16 flex items-center">
                      {activeQuestions[currentQIndex].questionText}
                    </h2>

                    {/* Quizizz 4 Colorful Answer Cards */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeQuestions[currentQIndex].options.map((opt, optIdx) => {
                        const currentQ = activeQuestions[currentQIndex];
                        const isChosen = userAnswers[currentQIndex] === opt.key;
                        const isCorrect = opt.key === currentQ.correctAnswer;

                        // Vibrant Quizizz Colors: Red, Blue, Yellow, Green
                        const colors = [
                          "bg-rose-500 hover:bg-rose-600 text-white",
                          "bg-sky-500 hover:bg-sky-600 text-white",
                          "bg-amber-500 hover:bg-amber-600 text-white",
                          "bg-emerald-500 hover:bg-emerald-600 text-white",
                        ];

                        let btnClass = `${colors[optIdx % 4]} shadow-xs`;
                        if (qAnswered) {
                          if (isCorrect) {
                            btnClass = "bg-emerald-600 text-white ring-4 ring-emerald-300 font-black scale-102";
                          } else if (isChosen && !isCorrect) {
                            btnClass = "bg-rose-700 text-white opacity-80";
                          } else {
                            btnClass = "bg-slate-200 text-slate-500 opacity-40";
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            disabled={qAnswered}
                            onClick={() => handleSelectQuizizzOption(opt.key)}
                            className={`min-h-20 rounded-2xl p-4 text-sm font-bold transition-all flex items-center justify-between text-left cursor-pointer ${btnClass}`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white/20 text-xs font-black">
                                {opt.key}
                              </span>
                              <span>{opt.text}</span>
                            </span>
                            {qAnswered && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-white" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback & Next Button */}
                    {qAnswered && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between"
                      >
                        <div className="text-xs">
                          {userAnswers[currentQIndex] === activeQuestions[currentQIndex].correctAnswer ? (
                            <span className="font-bold text-emerald-600">🎉 Chính xác! (+{600 + qTimer * 40} điểm)</span>
                          ) : (
                            <span className="font-bold text-rose-600">
                              Chưa chính xác! Đáp án đúng là {activeQuestions[currentQIndex].correctAnswer}
                            </span>
                          )}
                        </div>

                        <Button
                          onClick={handleNextQuizizzQuestion}
                          className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-5 cursor-pointer shadow-xs"
                        >
                          {currentQIndex < activeQuestions.length - 1 ? "Câu tiếp theo →" : "Xem kết quả thi 🏆"}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ========================================= */}
            {/* MODE 2: AZOTA FULL TEST SHEET */}
            {/* ========================================= */}
            {playMode === "azota" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left 2 Cols: Questions List */}
                <div className="lg:col-span-2 space-y-6">
                  {activeQuestions.map((q, idx) => {
                    const selected = userAnswers[idx];
                    return (
                      <div
                        id={`question-${idx + 1}`}
                        key={q.id || idx}
                        className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
                            Câu {idx + 1}
                          </span>
                        </div>

                        <p className="font-heading text-sm font-bold text-slate-900 leading-relaxed">
                          {q.questionText}
                        </p>

                        <div className="mt-4 space-y-2">
                          {q.options.map((opt) => {
                            const isChosen = selected === opt.key;
                            return (
                              <button
                                key={opt.key}
                                onClick={() => setUserAnswers((prev) => ({ ...prev, [idx]: opt.key }))}
                                className={`w-full text-left rounded-2xl border p-3.5 text-xs transition-all flex items-center justify-between cursor-pointer ${
                                  isChosen
                                    ? "border-indigo-600 bg-indigo-50/70 text-indigo-950 font-bold"
                                    : "border-slate-200 hover:bg-slate-50 text-slate-700 bg-white"
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span
                                    className={`inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold ${
                                      isChosen ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                                    }`}
                                  >
                                    {opt.key}
                                  </span>
                                  <span>{opt.text}</span>
                                </span>
                                {isChosen && <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Right 1 Col: Azota Answer Matrix Grid */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs space-y-4">
                    <h3 className="font-heading text-sm font-bold text-slate-900">
                      Bảng câu trả lời ({Object.keys(userAnswers).length}/{activeQuestions.length})
                    </h3>

                    <div className="grid grid-cols-5 gap-2">
                      {activeQuestions.map((_, idx) => {
                        const isAnswered = userAnswers[idx] !== undefined;
                        return (
                          <a
                            key={idx}
                            href={`#question-${idx + 1}`}
                            className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                              isAnswered
                                ? "bg-indigo-600 text-white shadow-2xs"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {idx + 1}
                          </a>
                        );
                      })}
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Button
                        onClick={() => setIsSubmitted(true)}
                        className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-5 shadow-xs cursor-pointer"
                      >
                        <Send className="mr-2 h-4 w-4" /> Nộp bài thi ngay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
