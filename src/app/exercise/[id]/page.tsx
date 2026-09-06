"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Check,
  X,
  Sparkles,
  Video,
  Layers,
  ListChecks,
  PenTool,
  ArrowRight,
  RefreshCw,
  RotateCw,
  Send,
  Loader2,
  Trophy,
  CheckCircle2,
  Volume2,
  FileQuestion,
  HelpCircle,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { Confetti } from "@/components/Confetti";
import { Mascot } from "@/components/brand/Mascot";
import { useApp } from "@/lib/state/app-context";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

/* ============================================================
   Unified Student Exercise Player (5 trong 1)
   1. Video bài giảng
   2. Bộ Flashcards từ vựng
   3. Trắc nghiệm (Multiple Choice)
   4. Điền từ (Fill in the blank)
   5. Viết tự luận (Writing Essay)
   ============================================================ */

type Stage = "video" | "vocab" | "quiz" | "fill" | "write" | "finish";

function extractYoutubeId(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.length === 11 && !trimmed.includes("/") && !trimmed.includes(".")) {
    return trimmed;
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = trimmed.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}

export default function UnifiedExercisePage() {
  const { id } = useParams<{ id: string }>();
  const { addXp, wordsLearned, streak, syncStats } = useApp();

  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState<any>(null);
  const [stage, setStage] = useState<Stage>("video");

  // Quiz states
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  // Fill states
  const [fillIdx, setFillIdx] = useState(0);
  const [fillInput, setFillInput] = useState("");
  const [fillChecked, setFillChecked] = useState(false);
  const [fillScore, setFillScore] = useState(0);

  // Vocab card states
  const [cardIdx, setCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);

  // Writing states
  const [writingText, setWritingText] = useState("");
  const [writingSubmitted, setWritingSubmitted] = useState(false);
  const [isSubmittingWriting, setIsSubmittingWriting] = useState(false);
  const [writingError, setWritingError] = useState<string | null>(null);

  // Completion
  const [totalXpEarned, setTotalXpEarned] = useState(0);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/assignments/${id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && d.assignment) {
          setAssignment(d.assignment);
          // Tự động chọn bước khởi đầu hợp lý
          const content = d.assignment.content;
          const hasVideo = d.assignment.videoUrl || content?.videoUrl;
          if (hasVideo) {
            setStage("video");
          } else if (content?.vocabulary?.length > 0) {
            setStage("vocab");
          } else if (content?.quizQuestions?.length > 0) {
            setStage("quiz");
          } else if (content?.fillQuestions?.length > 0) {
            setStage("fill");
          } else {
            setStage("write");
          }
        }
      })
      .catch((e) => console.error("Error loading assignment:", e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <AppShell>
        <div className="flex h-96 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand" />
        </div>
      </AppShell>
    );
  }

  if (!assignment) {
    return (
      <AppShell>
        <div className="mx-auto max-w-md py-12 text-center">
          <p className="font-bold text-slate-700">Không tìm thấy bài tập hoặc bài tập đã bị xóa.</p>
          <Button asChild className="mt-4" variant="outline">
            <Link href="/dashboard">Về Dashboard</Link>
          </Button>
        </div>
      </AppShell>
    );
  }

  const content = assignment.content || {};
  const videoUrl = assignment.videoUrl || content.videoUrl || "";
  const youtubeId = extractYoutubeId(videoUrl);
  const vocabList: any[] = content.vocabulary || [];
  const quizList: any[] = content.quizQuestions || [];
  const fillList: any[] = content.fillQuestions || [];
  const writingPrompt = content.writingPrompt || (assignment.prompt ? { prompt: assignment.prompt, minWords: 80, outline: [] } : null);

  // Available stages list
  const availableStages: { key: Stage; label: string; icon: any }[] = [];
  if (videoUrl) availableStages.push({ key: "video", label: "Video bài giảng", icon: Video });
  if (vocabList.length > 0) availableStages.push({ key: "vocab", label: `Từ vựng (${vocabList.length})`, icon: Layers });
  if (quizList.length > 0) availableStages.push({ key: "quiz", label: `Trắc nghiệm (${quizList.length})`, icon: ListChecks });
  if (fillList.length > 0) availableStages.push({ key: "fill", label: `Điền từ (${fillList.length})`, icon: FileQuestion });
  if (writingPrompt) availableStages.push({ key: "write", label: "Viết tự luận", icon: PenTool });

  // Navigation helpers
  const currentStageIndex = availableStages.findIndex((s) => s.key === stage);

  const goToNextStage = () => {
    if (currentStageIndex < availableStages.length - 1) {
      setStage(availableStages[currentStageIndex + 1].key);
    } else {
      finishAll();
    }
  };

  const finishAll = () => {
    const earned = 60 + quizScore * 10 + fillScore * 10;
    setTotalXpEarned(earned);
    addXp(earned, "Hoàn thành bài tập toàn diện");
    syncStats({
      xp: earned,
      wordsLearned: wordsLearned + knownCount,
      streak: Math.max(1, streak),
      minutes: 15,
    });
    setStage("finish");
    sound.playLevelUp();
  };

  // Submit writing essay
  const handleSubmitWriting = async () => {
    const words = writingText.trim().split(/\s+/).filter(Boolean).length;
    if (words < 5) return;
    setIsSubmittingWriting(true);
    setWritingError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assignmentId: assignment.id,
          lessonTitle: assignment.title,
          prompt: writingPrompt?.prompt || "Bài viết tự luận",
          text: writingText.trim(),
          words,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Không thể nộp bài");
      }
      setWritingSubmitted(true);
      sound.playSuccess();
      goToNextStage();
    } catch (e: any) {
      setWritingError(e.message || "Lỗi nộp bài");
    } finally {
      setIsSubmittingWriting(false);
    }
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl pb-20">
        {/* Breadcrumb Header */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-brand transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Quay lại Dashboard
          </Link>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand border border-brand-100">
            Bài tập 5 trong 1
          </span>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900">{assignment.title}</h1>
          {assignment.description && (
            <p className="mt-1 text-sm text-slate-500">{assignment.description}</p>
          )}
        </div>

        {/* Stepper Tabs */}
        {stage !== "finish" && (
          <div className="mb-8 flex overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm no-scrollbar">
            {availableStages.map((s, idx) => {
              const active = s.key === stage;
              const completed = currentStageIndex > idx;
              const Icon = s.icon;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setStage(s.key)}
                  className={cn(
                    "flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all",
                    active
                      ? "bg-brand text-white shadow-md"
                      : completed
                      ? "text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{s.label}</span>
                  {completed && <Check className="h-3 w-3 shrink-0 text-emerald-600 ml-auto" />}
                </button>
              );
            })}
          </div>
        )}

        {/* ===== STAGE 1: VIDEO ===== */}
        {stage === "video" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-lg">
              {youtubeId ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                    title="Video bài học"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center text-slate-400 text-sm">
                  Chưa có link video cho bài này.
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Bước 1: Xem video hướng dẫn</h3>
                <p className="text-xs text-slate-400 mt-0.5">Hãy xem kỹ bài giảng trước khi chuyển sang phần học từ vựng và làm bài tập.</p>
              </div>
              <Button onClick={goToNextStage} className="bg-brand text-white font-bold shrink-0">
                Tiếp tục sang Từ vựng <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* ===== STAGE 2: FLASHCARD VOCAB ===== */}
        {stage === "vocab" && vocabList.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Thẻ {cardIdx + 1} / {vocabList.length}</span>
              <span className="text-emerald-600">Đã thuộc: {knownCount} từ</span>
            </div>

            {/* Flashcard Flip */}
            {(() => {
              const currentCard = vocabList[cardIdx];
              return (
                <div className="perspective-1000 mx-auto max-w-md">
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setIsFlipped((v) => !v)}
                    className="relative min-h-[260px] w-full cursor-pointer rounded-3xl border-2 border-brand-100 bg-gradient-to-br from-white via-brand-50/20 to-teal-50/30 p-8 shadow-md hover:shadow-lg transition-all flex flex-col justify-between [transform-style:preserve-3d]"
                  >
                    {!isFlipped ? (
                      /* Mặt trước: Tiếng Anh */
                      <div className="flex flex-col items-center justify-center flex-1 text-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2">Từ vựng</span>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{currentCard.word}</h2>
                        {currentCard.phonetic && (
                          <p className="mt-1 text-sm font-mono text-slate-400">{currentCard.phonetic}</p>
                        )}
                        <p className="mt-6 text-xs font-bold text-slate-400">Nhấn vào thẻ để xem nghĩa & ví dụ ↺</p>
                      </div>
                    ) : (
                      /* Mặt sau: Nghĩa & Ví dụ */
                      <div className="flex flex-col justify-center flex-1 text-center [transform:rotateY(180deg)]">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Nghĩa tiếng Việt</span>
                        <h3 className="text-2xl font-bold text-slate-900">{currentCard.meaning}</h3>
                        {currentCard.example && (
                          <div className="mt-4 rounded-xl bg-slate-50 p-3 text-left">
                            <p className="text-xs font-semibold text-slate-700 italic">"{currentCard.example}"</p>
                            {currentCard.exampleVi && (
                              <p className="text-[11px] text-slate-500 mt-1">→ {currentCard.exampleVi}</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })()}

            {/* Thao tác Lật thẻ */}
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  sound.playPop();
                  if (cardIdx < vocabList.length - 1) {
                    setCardIdx((i) => i + 1);
                    setIsFlipped(false);
                  } else {
                    goToNextStage();
                  }
                }}
                className="w-36 font-bold"
              >
                Chưa nhớ
              </Button>
              <Button
                onClick={() => {
                  sound.playChime();
                  setKnownCount((c) => c + 1);
                  if (cardIdx < vocabList.length - 1) {
                    setCardIdx((i) => i + 1);
                    setIsFlipped(false);
                  } else {
                    goToNextStage();
                  }
                }}
                className="w-36 bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
              >
                Đã nhớ ✓
              </Button>
            </div>
          </motion.div>
        )}

        {/* ===== STAGE 3: QUIZ (TRẮC NGHIỆM) ===== */}
        {stage === "quiz" && quizList.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Câu hỏi {quizIdx + 1} / {quizList.length}</span>
              <span className="text-amber-600">Đúng: {quizScore} câu</span>
            </div>

            {(() => {
              const currentQ = quizList[quizIdx];
              return (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-5">{currentQ.question}</h3>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {["A", "B", "C", "D"].map((letter, optIdx) => {
                      const optText = currentQ.options[optIdx] ?? "";
                      const isPicked = selectedOpt === letter;
                      const isCorrect = currentQ.answer === letter;

                      return (
                        <button
                          key={letter}
                          type="button"
                          disabled={selectedOpt !== null}
                          onClick={() => {
                            setSelectedOpt(letter);
                            if (isCorrect) {
                              setQuizScore((s) => s + 1);
                              sound.playChime();
                            } else {
                              sound.playBuzzer();
                            }
                          }}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl border-2 p-4 text-left font-semibold text-sm transition-all",
                            selectedOpt === null && "border-slate-200 hover:border-brand hover:bg-brand-50/50",
                            selectedOpt !== null && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-800 font-bold",
                            selectedOpt !== null && isPicked && !isCorrect && "border-rose-500 bg-rose-50 text-rose-800",
                            selectedOpt !== null && !isPicked && !isCorrect && "border-slate-100 text-slate-400"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                              selectedOpt !== null && isCorrect ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"
                            )}
                          >
                            {letter}
                          </span>
                          <span>{optText.replace(/^[A-D]\.\s*/, "")}</span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedOpt !== null && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
                      <p className="font-bold text-slate-800 mb-1">
                        {selectedOpt === currentQ.answer ? "🎉 Chính xác!" : "❌ Chưa chính xác!"}
                      </p>
                      {currentQ.explanation && <p>{currentQ.explanation}</p>}

                      <div className="mt-4 flex justify-end">
                        <Button
                          onClick={() => {
                            setSelectedOpt(null);
                            if (quizIdx < quizList.length - 1) {
                              setQuizIdx((i) => i + 1);
                            } else {
                              goToNextStage();
                            }
                          }}
                          className="bg-brand text-white font-bold text-xs"
                        >
                          {quizIdx < quizList.length - 1 ? "Câu tiếp theo →" : "Chuyển sang phần tiếp →"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* ===== STAGE 4: FILL IN THE BLANK ===== */}
        {stage === "fill" && fillList.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Câu điền từ {fillIdx + 1} / {fillList.length}</span>
              <span className="text-teal-600">Điểm: {fillScore}</span>
            </div>

            {(() => {
              const currentF = fillList[fillIdx];
              const isCorrect = fillInput.trim().toLowerCase() === currentF.answer.trim().toLowerCase();

              return (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 block mb-1">Điền từ thích hợp vào vị trí [___]</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
                      {currentF.sentence}
                    </h3>
                  </div>

                  {currentF.hint && (
                    <p className="mb-4 text-xs text-amber-600 bg-amber-50 rounded-xl p-2.5 border border-amber-100">
                      💡 Gợi ý: {currentF.hint}
                    </p>
                  )}

                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={fillInput}
                      onChange={(e) => setFillInput(e.target.value)}
                      disabled={fillChecked}
                      placeholder="Gõ từ cần điền..."
                      className="flex-1 rounded-xl border-2 border-slate-200 px-4 py-2.5 text-base font-bold text-slate-900 focus:border-brand focus:outline-none"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !fillChecked && fillInput.trim()) {
                          setFillChecked(true);
                          if (isCorrect) {
                            setFillScore((s) => s + 1);
                            sound.playChime();
                          } else {
                            sound.playBuzzer();
                          }
                        }
                      }}
                    />
                    {!fillChecked ? (
                      <Button
                        disabled={!fillInput.trim()}
                        onClick={() => {
                          setFillChecked(true);
                          if (isCorrect) {
                            setFillScore((s) => s + 1);
                            sound.playChime();
                          } else {
                            sound.playBuzzer();
                          }
                        }}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-bold"
                      >
                        Kiểm tra
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          setFillChecked(false);
                          setFillInput("");
                          if (fillIdx < fillList.length - 1) {
                            setFillIdx((i) => i + 1);
                          } else {
                            goToNextStage();
                          }
                        }}
                        className="bg-brand text-white font-bold"
                      >
                        {fillIdx < fillList.length - 1 ? "Tiếp tục →" : "Sang phần tiếp theo →"}
                      </Button>
                    )}
                  </div>

                  {fillChecked && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-slate-50 p-4 text-xs">
                      <p className={cn("font-bold text-sm mb-1", isCorrect ? "text-emerald-700" : "text-rose-700")}>
                        {isCorrect ? "✓ Tuyệt vời! Bạn đã điền chính xác." : `✗ Chưa chính xác. Đáp án đúng là: ${currentF.answer}`}
                      </p>
                      {currentF.explanation && <p className="text-slate-600">{currentF.explanation}</p>}
                    </motion.div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* ===== STAGE 5: WRITING ESSAY ===== */}
        {stage === "write" && writingPrompt && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block mb-1">
                  Bài viết Tự luận
                </span>
                <h2 className="text-lg font-bold text-slate-900">{writingPrompt.prompt}</h2>
              </div>

              {Array.isArray(writingPrompt.outline) && writingPrompt.outline.length > 0 && (
                <div className="mb-4 rounded-2xl bg-purple-50/70 border border-purple-100 p-4 text-xs text-purple-900">
                  <p className="font-bold mb-1.5">Gợi ý dàn bài:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {writingPrompt.outline.map((o: string, idx: number) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="relative">
                <textarea
                  rows={8}
                  value={writingText}
                  onChange={(e) => setWritingText(e.target.value)}
                  placeholder="Gõ bài viết tiếng Anh của em tại đây..."
                  className="w-full rounded-2xl border-2 border-slate-200 p-4 text-sm font-medium leading-relaxed text-slate-900 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Yêu cầu tối thiểu: {writingPrompt.minWords || 80} từ</span>
                  <span className={cn("font-bold", writingText.trim().split(/\s+/).filter(Boolean).length >= (writingPrompt.minWords || 80) ? "text-emerald-600" : "text-slate-400")}>
                    {writingText.trim().split(/\s+/).filter(Boolean).length} từ
                  </span>
                </div>
              </div>

              {writingError && (
                <p className="mt-2 text-xs font-bold text-red-600">{writingError}</p>
              )}

              <div className="mt-6 flex justify-end gap-3">
                <Button
                  onClick={handleSubmitWriting}
                  disabled={writingText.trim().split(/\s+/).filter(Boolean).length < 5 || isSubmittingWriting}
                  className="bg-brand text-white font-bold"
                >
                  {isSubmittingWriting ? (
                    <>
                      <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> Đang nộp bài...
                    </>
                  ) : (
                    <>
                      <Send className="mr-1.5 h-4 w-4" /> Nộp bài viết cho giáo viên
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== STAGE 6: FINISH ===== */}
        {stage === "finish" && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-xl">
            <Confetti fire={true} />
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
              <Trophy className="h-10 w-10" />
            </div>

            <h1 className="text-2xl font-extrabold text-slate-900">Chúc mừng bạn đã hoàn thành bài tập!</h1>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              Bạn đã hoàn thành trọn vẹn các bước học tập của bài học: xem video, thuộc {knownCount} từ vựng, làm đúng {quizScore} câu trắc nghiệm, {fillScore} câu điền từ, và nộp bài luận thành công.
            </p>

            <div className="my-6 inline-flex items-center gap-3 rounded-2xl bg-amber-50 px-6 py-3 border border-amber-200 text-amber-900 font-extrabold text-lg">
              <span>⚡ +{totalXpEarned} XP</span>
              <span className="text-slate-300">·</span>
              <span>🔥 Chuỗi ngày tiếp tục</span>
            </div>

            <div className="flex justify-center gap-3">
              <Button asChild className="bg-brand text-white font-bold">
                <Link href="/dashboard">Về Trang chủ Dashboard</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </AppShell>
  );
}
