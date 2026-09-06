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
  BookOpen,
  Puzzle,
  Undo2,
  Flame,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { Confetti } from "@/components/Confetti";
import { Mascot } from "@/components/brand/Mascot";
import { useApp } from "@/lib/state/app-context";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { resolveVideoEmbed } from "@/lib/video";

/* ============================================================
   Unified Student Exercise Runner (7 hợp phần chuẩn GDPT THPT)
   1. Video bài giảng (YouTube & Google Drive Preview)
   2. Flashcards từ vựng
   3. Đọc hiểu văn bản (Reading Comprehension)
   4. Luyện cấu trúc & Ghép câu (Syntax Builder)
   5. Trắc nghiệm (Multiple Choice)
   6. Điền từ (Fill in the blank)
   7. Viết tự luận (Writing Essay)
   ============================================================ */

type Stage = "video" | "vocab" | "reading" | "syntax" | "quiz" | "fill" | "write" | "finish";

function speakWord(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  sound.playPop();
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

export default function UnifiedExercisePage() {
  const { id } = useParams<{ id: string }>();
  const { addXp, wordsLearned, streak, syncStats } = useApp();

  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState<any>(null);
  const [stage, setStage] = useState<Stage>("video");
  const [restoredDraft, setRestoredDraft] = useState(false);

  // Reading states
  const [readingQIdx, setReadingQIdx] = useState(0);
  const [readingSelectedOpt, setReadingSelectedOpt] = useState<string | null>(null);
  const [readingScore, setReadingScore] = useState(0);

  // Syntax Builder states
  const [syntaxIdx, setSyntaxIdx] = useState(0);
  const [assembledWords, setAssembledWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<{ id: string; word: string }[]>([]);
  const [syntaxChecked, setSyntaxChecked] = useState(false);
  const [syntaxIsCorrect, setSyntaxIsCorrect] = useState(false);
  const [syntaxScore, setSyntaxScore] = useState(0);

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

  // Auto-restore draft from localStorage
  useEffect(() => {
    if (!id || typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(`lingoquest:draft:${id}`);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.writingText) setWritingText(d.writingText);
        if (typeof d.quizScore === "number") setQuizScore(d.quizScore);
        if (typeof d.fillScore === "number") setFillScore(d.fillScore);
        if (typeof d.knownCount === "number") setKnownCount(d.knownCount);
        if (d.stage && d.stage !== "finish") setStage(d.stage);
        setRestoredDraft(true);
      }
    } catch {}
  }, [id]);

  // Auto-save draft to localStorage
  useEffect(() => {
    if (!id || stage === "finish" || typeof window === "undefined") return;
    try {
      localStorage.setItem(
        `lingoquest:draft:${id}`,
        JSON.stringify({
          writingText,
          quizScore,
          fillScore,
          knownCount,
          stage,
          updatedAt: Date.now(),
        })
      );
    } catch {}
  }, [id, stage, writingText, quizScore, fillScore, knownCount]);

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
          } else if (content?.readingPassage?.passage) {
            setStage("reading");
          } else if (content?.syntaxRearrange?.length > 0) {
            setStage("syntax");
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

  const content = assignment?.content || {};
  const difficultyLevel = content.difficultyLevel || "A2-B1";
  const videoUrl = assignment?.videoUrl || content.videoUrl || "";
  const videoEmbed = resolveVideoEmbed(videoUrl);
  const vocabList: any[] = content.vocabulary || [];
  const readingPassage = content.readingPassage;
  const readingQuestions: any[] = readingPassage?.questions || [];
  const syntaxList: any[] = content.syntaxRearrange || [];
  const quizList: any[] = content.quizQuestions || [];
  const fillList: any[] = content.fillQuestions || [];
  const writingPrompt = content.writingPrompt || (assignment?.prompt ? { prompt: assignment.prompt, minWords: 80, outline: [] } : null);

  // Shuffle syntax words when question changes
  useEffect(() => {
    if (!syntaxList.length) return;
    const cur = syntaxList[syntaxIdx];
    if (!cur) return;
    const wordsList: string[] = Array.isArray(cur.words) && cur.words.length > 0 
      ? cur.words 
      : (cur.correctSentence || "").split(/\s+/).filter(Boolean);
    const items = wordsList.map((w: string, idx: number) => ({ id: `w-${idx}-${w}`, word: w }));
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    setAvailableWords(shuffled);
    setAssembledWords([]);
    setSyntaxChecked(false);
    setSyntaxIsCorrect(false);
  }, [assignment, syntaxIdx]);

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

  // Available stages list
  const availableStages: { key: Stage; label: string; icon: any }[] = [];
  if (videoUrl) availableStages.push({ key: "video", label: "Video bài giảng", icon: Video });
  if (vocabList.length > 0) availableStages.push({ key: "vocab", label: `Từ vựng (${vocabList.length})`, icon: Layers });
  if (readingPassage && readingPassage.passage) availableStages.push({ key: "reading", label: `Đọc hiểu (${readingQuestions.length || 1})`, icon: BookOpen });
  if (syntaxList.length > 0) availableStages.push({ key: "syntax", label: `Ghép câu (${syntaxList.length})`, icon: Puzzle });
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
    const baseReward = content.targetXp || (difficultyLevel.includes("C1") || difficultyLevel.includes("THPT") ? 150 : difficultyLevel.includes("B") ? 80 : 50);
    const earned = baseReward + quizScore * 5 + fillScore * 5 + readingScore * 10 + syntaxScore * 10;
    setTotalXpEarned(earned);
    addXp(earned, `Hoàn thành bài tập ${difficultyLevel}`);
    syncStats({
      xp: earned,
      wordsLearned: wordsLearned + knownCount,
      streak: Math.max(1, streak),
      minutes: 18,
    });
    setStage("finish");
    sound.playLevelUp();
  };

  // Keyboard Shortcuts for Flashcards, Quiz & Reading (Tier-1 Interactive UX)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in inputs or textareas
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      // 1. Flashcards (vocab) shortcuts
      if (stage === "vocab" && vocabList.length > 0) {
        if (e.code === "Space") {
          e.preventDefault();
          setIsFlipped((v) => !v);
        } else if (e.key === "ArrowRight" || e.key === "Enter") {
          e.preventDefault();
          sound.playChime();
          setKnownCount((k) => k + 1);
          if (cardIdx < vocabList.length - 1) {
            setCardIdx((i) => i + 1);
            setIsFlipped(false);
          } else {
            goToNextStage();
          }
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          if (cardIdx > 0) {
            setCardIdx((i) => i - 1);
            setIsFlipped(false);
          }
        } else if (e.key.toLowerCase() === "p") {
          e.preventDefault();
          const currentCard = vocabList[cardIdx];
          if (currentCard?.word) speakWord(currentCard.word);
        }
      }

      // 2. Quiz (trắc nghiệm) shortcuts
      if (stage === "quiz" && quizList.length > 0) {
        const curQ = quizList[quizIdx];
        if (!curQ) return;
        if (selectedOpt === null) {
          let letter: string | null = null;
          if (e.key === "1" || e.key.toLowerCase() === "a") letter = "A";
          if (e.key === "2" || e.key.toLowerCase() === "b") letter = "B";
          if (e.key === "3" || e.key.toLowerCase() === "c") letter = "C";
          if (e.key === "4" || e.key.toLowerCase() === "d") letter = "D";

          if (letter) {
            e.preventDefault();
            setSelectedOpt(letter);
            if (curQ.answer === letter) {
              setQuizScore((s) => s + 1);
              sound.playChime();
            } else {
              sound.playBuzzer();
            }
          }
        } else if (e.key === "Enter" || e.key === "ArrowRight" || e.code === "Space") {
          e.preventDefault();
          setSelectedOpt(null);
          if (quizIdx < quizList.length - 1) {
            setQuizIdx((i) => i + 1);
          } else {
            goToNextStage();
          }
        }
      }

      // 3. Reading (đọc hiểu) shortcuts
      if (stage === "reading" && readingQuestions.length > 0) {
        const curQ = readingQuestions[readingQIdx];
        if (!curQ) return;
        if (readingSelectedOpt === null) {
          let letter: string | null = null;
          if (e.key === "1" || e.key.toLowerCase() === "a") letter = "A";
          if (e.key === "2" || e.key.toLowerCase() === "b") letter = "B";
          if (e.key === "3" || e.key.toLowerCase() === "c") letter = "C";
          if (e.key === "4" || e.key.toLowerCase() === "d") letter = "D";

          if (letter) {
            e.preventDefault();
            setReadingSelectedOpt(letter);
            const isCorrect = curQ.answer === letter || curQ.answer === curQ.options[["A", "B", "C", "D"].indexOf(letter)];
            if (isCorrect) {
              setReadingScore((s) => s + 1);
              sound.playChime();
            } else {
              sound.playBuzzer();
            }
          }
        } else if (e.key === "Enter" || e.key === "ArrowRight") {
          e.preventDefault();
          setReadingSelectedOpt(null);
          if (readingQIdx < readingQuestions.length - 1) {
            setReadingQIdx((i) => i + 1);
          } else {
            goToNextStage();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    stage,
    cardIdx,
    vocabList,
    quizIdx,
    quizList,
    selectedOpt,
    readingQIdx,
    readingQuestions,
    readingSelectedOpt,
    currentStageIndex,
    availableStages.length,
  ]);
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
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-bold border shadow-xs",
                difficultyLevel.includes("C1") || difficultyLevel.includes("THPT")
                  ? "bg-purple-50 text-purple-700 border-purple-200"
                  : difficultyLevel.includes("B")
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
              )}
            >
              {difficultyLevel}
            </span>
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 border border-amber-200">
              ⚡ +{content.targetXp || (difficultyLevel.includes("C1") || difficultyLevel.includes("THPT") ? 150 : difficultyLevel.includes("B") ? 80 : 50)} XP
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{assignment.title}</h1>
          {assignment.description && (
            <p className="mt-1 text-sm text-slate-500">{assignment.description}</p>
          )}
        </div>

        {/* Stepper Tabs (Segmented Frosted Bar) */}
        {stage !== "finish" && (
          <div className="mb-8 flex overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl p-1.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)] no-scrollbar">
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
                    "flex flex-1 min-w-[125px] items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all",
                    active
                      ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm ring-1 ring-teal-700/20"
                      : completed
                      ? "text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100/60 border border-emerald-200/60"
                      : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
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

        {/* Restored Draft Notice Banner */}
        {restoredDraft && stage !== "finish" && (
          <div className="mb-6 flex items-center justify-between rounded-2xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900 shadow-xs">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="h-4 w-4 text-amber-600" />
              Đã khôi phục tiến trình làm bài dở của bạn từ phiên trước.
            </span>
            <button
              type="button"
              onClick={() => {
                setRestoredDraft(false);
                if (typeof window !== "undefined" && assignment?.id) {
                  localStorage.removeItem(`lingoquest:draft:${assignment.id}`);
                }
                setWritingText("");
                setQuizScore(0);
                setFillScore(0);
              }}
              className="font-bold underline hover:text-amber-950"
            >
              Xóa bản nháp
            </button>
          </div>
        )}

        {/* ===== STAGE 1: VIDEO (CINEMA FRAME) ===== */}
        {stage === "video" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-teal-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 shadow-xl">
                {videoEmbed.type !== "none" && videoEmbed.embedUrl ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={videoEmbed.embedUrl}
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
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">Bước 1: Xem video hướng dẫn</h3>
                  {videoEmbed.type === "drive" && (
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 border border-blue-200">
                      Google Drive Preview
                    </span>
                  )}
                  {videoEmbed.type === "youtube" && (
                    <span className="rounded-md bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700 border border-red-200">
                      YouTube HD
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1">Hãy xem kỹ bài giảng trước khi chuyển sang phần học từ vựng và làm bài tập.</p>
              </div>
              <Button onClick={goToNextStage} className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold shadow-sm shrink-0">
                Tiếp tục sang Từ vựng <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* ===== STAGE 2: FLASHCARD VOCAB (3D TACTILE) ===== */}
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
                    className="relative min-h-[270px] w-full cursor-pointer rounded-3xl border-2 border-teal-100/80 bg-gradient-to-br from-white via-slate-50/50 to-teal-50/30 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all flex flex-col justify-between [transform-style:preserve-3d]"
                  >
                    {!isFlipped ? (
                      /* Mặt trước: Tiếng Anh */
                      <div className="flex flex-col items-center justify-center flex-1 text-center">
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2">Từ vựng mục tiêu</span>
                        <div className="flex items-center justify-center gap-2.5">
                          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{currentCard.word}</h2>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakWord(currentCard.word);
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors shadow-xs"
                            title="Nghe phát âm (Phím P)"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>
                        {currentCard.phonetic && (
                          <p className="mt-1 text-sm font-mono text-slate-500">{currentCard.phonetic}</p>
                        )}
                        <p className="mt-6 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                          <span>Nhấn thẻ hoặc phím [Space] để xem nghĩa</span> ↺
                        </p>
                      </div>
                    ) : (
                      /* Mặt sau: Nghĩa & Ví dụ */
                      <div className="flex flex-col justify-center flex-1 text-center [transform:rotateY(180deg)]">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Nghĩa tiếng Việt</span>
                        <h3 className="text-2xl font-bold text-slate-900">{currentCard.meaning}</h3>
                        {currentCard.example && (
                          <div className="mt-4 rounded-xl bg-slate-50/80 border border-slate-100 p-3.5 text-left">
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-xs font-semibold text-slate-800 italic flex-1">"{currentCard.example}"</p>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  speakWord(currentCard.example);
                                }}
                                className="text-teal-700 hover:text-teal-900 shrink-0 p-1"
                                title="Nghe câu ví dụ"
                              >
                                <Volume2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
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
                Chưa nhớ (←)
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
                className="w-36 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold shadow-sm"
              >
                Đã nhớ (→) ✓
              </Button>
            </div>

            {/* Keyboard shortcut guide */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-slate-400 pt-1">
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[Space] Lật thẻ</span>
              <span>•</span>
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[→] / [Enter] Đã nhớ</span>
              <span>•</span>
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[←] Thẻ trước</span>
              <span>•</span>
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[P] Phát âm</span>
            </div>
          </motion.div>
        )}

        {/* ===== STAGE: READING COMPREHENSION (ĐỌC HIỂU) ===== */}
        {stage === "reading" && readingPassage && readingPassage.passage && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1.5 text-indigo-700">
                <BookOpen className="h-4 w-4" /> Đọc hiểu văn bản ({readingQIdx + 1}/{readingQuestions.length || 1})
              </span>
              <span className="text-emerald-600 font-bold">Đúng: {readingScore} câu</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* Cột bài đọc bên trái */}
              <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                  <h3 className="font-extrabold text-slate-900 text-base">{readingPassage.title || "Reading Passage"}</h3>
                  <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-100">
                    {readingPassage.levelTag || difficultyLevel}
                  </span>
                </div>
                <div className="prose prose-slate max-w-none text-sm font-medium leading-relaxed text-slate-700 whitespace-pre-line select-text">
                  {readingPassage.passage}
                </div>
              </div>

              {/* Cột câu hỏi bên phải */}
              <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                {(() => {
                  const curQ = readingQuestions[readingQIdx] || {
                    question: "Đoạn văn trên chủ yếu nói về điều gì?",
                    options: ["A. Nội dung 1", "B. Nội dung 2", "C. Nội dung 3", "D. Nội dung 4"],
                    answer: "A",
                    explanation: "Dựa vào câu chủ đề của đoạn văn.",
                  };

                  return (
                    <div>
                      <div className="mb-4">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide block mb-1">
                          Câu hỏi {readingQIdx + 1}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {curQ.question}
                        </h4>
                      </div>

                      <div className="space-y-2.5">
                        {["A", "B", "C", "D"].map((letter, optIdx) => {
                          const optText = curQ.options[optIdx] ?? "";
                          const isPicked = readingSelectedOpt === letter;
                          const isCorrect = curQ.answer === letter || curQ.answer === optText;

                          return (
                            <button
                              key={letter}
                              type="button"
                              disabled={readingSelectedOpt !== null}
                              onClick={() => {
                                setReadingSelectedOpt(letter);
                                if (isCorrect) {
                                  setReadingScore((s) => s + 1);
                                  sound.playChime();
                                } else {
                                  sound.playBuzzer();
                                }
                              }}
                              className={cn(
                                "group w-full flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left font-semibold text-xs transition-all shadow-2xs hover:shadow-xs",
                                readingSelectedOpt === null && "border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/40",
                                readingSelectedOpt !== null && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-800 font-bold",
                                readingSelectedOpt !== null && isPicked && !isCorrect && "border-rose-500 bg-rose-50 text-rose-800",
                                readingSelectedOpt !== null && !isPicked && !isCorrect && "border-slate-100 text-slate-400"
                              )}
                            >
                              <span
                                className={cn(
                                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform group-hover:scale-105",
                                  readingSelectedOpt !== null && isCorrect ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"
                                )}
                              >
                                {letter}
                              </span>
                              <span className="flex-1">{optText.replace(/^[A-D]\.\s*/, "")}</span>
                              <span className="ml-2 shrink-0 rounded border border-slate-200/80 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-400 transition-colors group-hover:border-indigo-200 group-hover:text-indigo-600">
                                {optIdx + 1}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {readingSelectedOpt !== null && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl bg-indigo-50/70 p-3.5 text-xs text-slate-700 border border-indigo-100">
                          <p className="font-bold text-slate-800 mb-1">
                            {readingSelectedOpt === curQ.answer ? "🎉 Chính xác!" : "❌ Chưa chính xác!"}
                          </p>
                          {curQ.explanation && <p className="text-slate-600">{curQ.explanation}</p>}

                          <div className="mt-3 flex justify-end">
                            <Button
                              onClick={() => {
                                setReadingSelectedOpt(null);
                                if (readingQIdx < readingQuestions.length - 1) {
                                  setReadingQIdx((i) => i + 1);
                                } else {
                                  goToNextStage();
                                }
                              }}
                              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs"
                            >
                              {readingQIdx < readingQuestions.length - 1 ? "Câu đọc hiểu tiếp → (Enter)" : "Chuyển sang phần tiếp → (Enter)"}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Reading Keyboard Shortcut Guide */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-slate-400 pt-1">
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[1-4] hoặc [A-D] Chọn đáp án</span>
              <span>•</span>
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[Enter] / [→] Câu tiếp theo</span>
            </div>
          </motion.div>
        )}

        {/* ===== STAGE: SYNTAX BUILDER (GHÉP CÂU) ===== */}
        {stage === "syntax" && syntaxList.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1.5 text-teal-700">
                <Puzzle className="h-4 w-4" /> Luyện phản xạ cấu trúc ({syntaxIdx + 1}/{syntaxList.length})
              </span>
              <span className="text-teal-600 font-bold">Đúng: {syntaxScore} câu</span>
            </div>

            {(() => {
              const curS = syntaxList[syntaxIdx];
              const cleanSentence = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]+/g, "");

              const handleAddWordToSentence = (item: { id: string; word: string }) => {
                if (syntaxChecked) return;
                sound.playPop();
                setAssembledWords((prev) => [...prev, item.word]);
                setAvailableWords((prev) => prev.filter((w) => w.id !== item.id));
              };

              const handleRemoveWordFromSentence = (word: string, index: number) => {
                if (syntaxChecked) return;
                sound.playPop();
                setAssembledWords((prev) => prev.filter((_, i) => i !== index));
                setAvailableWords((prev) => [...prev, { id: `w-${Date.now()}-${word}`, word }]);
              };

              const handleResetSentence = () => {
                if (syntaxChecked) return;
                const wordsList: string[] = Array.isArray(curS.words) && curS.words.length > 0 
                  ? curS.words 
                  : (curS.correctSentence || "").split(/\s+/).filter(Boolean);
                const items = wordsList.map((w: string, idx: number) => ({ id: `w-${idx}-${w}`, word: w }));
                setAvailableWords([...items].sort(() => 0.5 - Math.random()));
                setAssembledWords([]);
              };

              const handleCheckSyntax = () => {
                const builtStr = assembledWords.join(" ");
                const isCorrect = cleanSentence(builtStr) === cleanSentence(curS.correctSentence);
                setSyntaxChecked(true);
                setSyntaxIsCorrect(isCorrect);
                if (isCorrect) {
                  setSyntaxScore((s) => s + 1);
                  sound.playSuccess();
                  speakWord(curS.correctSentence);
                } else {
                  sound.playBuzzer();
                }
              };

              return (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wide block mb-1">
                      Nghĩa tiếng Việt cần diễn đạt:
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-relaxed">
                      “{curS.promptVi}”
                    </h3>
                  </div>

                  {/* Vùng lắp ráp câu (Assembled Words Box) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400">Câu em đang lắp ghép (bấm từ để gỡ):</span>
                      {assembledWords.length > 0 && !syntaxChecked && (
                        <button
                          type="button"
                          onClick={handleResetSentence}
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors"
                        >
                          <Undo2 className="h-3.5 w-3.5" /> Xếp lại từ đầu
                        </button>
                      )}
                    </div>

                    <div
                      className={cn(
                        "min-h-[72px] rounded-2xl border-2 p-3.5 flex flex-wrap items-center gap-2 transition-all",
                        syntaxChecked
                          ? syntaxIsCorrect
                            ? "border-emerald-500 bg-emerald-50/50"
                            : "border-rose-500 bg-rose-50/50"
                          : assembledWords.length > 0
                          ? "border-brand bg-slate-50/50"
                          : "border-dashed border-slate-200 bg-slate-50/30"
                      )}
                    >
                      {assembledWords.length === 0 ? (
                        <span className="text-xs font-medium text-slate-400 italic">
                          Bấm vào các thẻ từ ở bên dưới để ghép thành câu hoàn chỉnh...
                        </span>
                      ) : (
                        assembledWords.map((word, wIdx) => (
                          <motion.button
                            key={wIdx}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            type="button"
                            disabled={syntaxChecked}
                            onClick={() => handleRemoveWordFromSentence(word, wIdx)}
                            className={cn(
                              "rounded-xl px-3.5 py-2 text-sm font-bold shadow-sm transition-all",
                              syntaxChecked && syntaxIsCorrect
                                ? "bg-emerald-600 text-white"
                                : syntaxChecked && !syntaxIsCorrect
                                ? "bg-rose-600 text-white"
                                : "bg-white text-slate-800 border border-slate-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                            )}
                          >
                            {word}
                          </motion.button>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Ngân hàng thẻ từ (Word Bank) */}
                  <div>
                    <span className="text-xs font-bold text-slate-500 mb-2 block">
                      Ngân hàng thẻ từ ({availableWords.length} từ còn lại):
                    </span>
                    <div className="flex flex-wrap gap-2 min-h-[50px] items-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      {availableWords.map((item) => (
                        <motion.button
                          key={item.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          disabled={syntaxChecked}
                          onClick={() => handleAddWordToSentence(item)}
                          className="rounded-xl border border-teal-200 bg-white px-3.5 py-2 text-sm font-bold text-teal-900 shadow-sm hover:border-teal-400 hover:bg-teal-50 transition-all"
                        >
                          {item.word}
                        </motion.button>
                      ))}
                      {availableWords.length === 0 && assembledWords.length > 0 && !syntaxChecked && (
                        <span className="text-xs text-slate-400 italic">Đã chọn hết tất cả các từ trong ngân hàng!</span>
                      )}
                    </div>
                  </div>

                  {/* Action buttons */}
                  {!syntaxChecked ? (
                    <div className="flex justify-end">
                      <Button
                        disabled={assembledWords.length === 0}
                        onClick={handleCheckSyntax}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-bold"
                      >
                        Kiểm tra câu
                      </Button>
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-slate-50 p-4 text-xs text-slate-700 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm">
                          {syntaxIsCorrect ? "🎉 Xuất sắc! Câu ghép chuẩn xác." : "❌ Chưa đúng trật tự từ."}
                        </span>
                        <button
                          type="button"
                          onClick={() => speakWord(curS.correctSentence)}
                          className="inline-flex items-center gap-1 font-bold text-brand hover:underline"
                        >
                          <Volume2 className="h-4 w-4" /> Phát âm
                        </button>
                      </div>

                      {!syntaxIsCorrect && (
                        <p className="mb-2 font-bold text-slate-800">
                          Đáp án đúng: <span className="text-emerald-700">{curS.correctSentence}</span>
                        </p>
                      )}

                      {curS.explanation && <p className="text-slate-500">{curS.explanation}</p>}

                      <div className="mt-4 flex justify-end">
                        <Button
                          onClick={() => {
                            if (syntaxIdx < syntaxList.length - 1) {
                              setSyntaxIdx((i) => i + 1);
                            } else {
                              goToNextStage();
                            }
                          }}
                          className="bg-brand text-white font-bold"
                        >
                          {syntaxIdx < syntaxList.length - 1 ? "Câu ghép tiếp theo →" : "Chuyển sang phần tiếp →"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })()}
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
                            "group flex items-center gap-3 rounded-2xl border-2 p-4 text-left font-semibold text-sm transition-all shadow-2xs hover:shadow-xs",
                            selectedOpt === null && "border-slate-200 hover:border-teal-500 hover:bg-teal-50/40",
                            selectedOpt !== null && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-800 font-bold",
                            selectedOpt !== null && isPicked && !isCorrect && "border-rose-500 bg-rose-50 text-rose-800",
                            selectedOpt !== null && !isPicked && !isCorrect && "border-slate-100 text-slate-400"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform group-hover:scale-105",
                              selectedOpt !== null && isCorrect ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-600"
                            )}
                          >
                            {letter}
                          </span>
                          <span className="flex-1">{optText.replace(/^[A-D]\.\s*/, "")}</span>
                          <span className="ml-2 shrink-0 rounded border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-400 transition-colors group-hover:border-teal-200 group-hover:text-teal-700">
                            {optIdx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedOpt !== null && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-2xl bg-teal-50/70 p-4 text-xs text-slate-700 border border-teal-100">
                      <p className="font-bold text-slate-800 mb-1">
                        {selectedOpt === currentQ.answer ? "🎉 Chính xác!" : "❌ Chưa chính xác!"}
                      </p>
                      {currentQ.explanation && <p className="text-slate-600">{currentQ.explanation}</p>}

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
                          className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs"
                        >
                          {quizIdx < quizList.length - 1 ? "Câu tiếp theo → (Enter / Space)" : "Chuyển sang phần tiếp → (Enter)"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })()}

            {/* Quiz Keyboard Shortcut Guide */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-slate-400 pt-1">
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[1-4] hoặc [A-D] Chọn đáp án</span>
              <span>•</span>
              <span className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 shadow-2xs text-slate-600">[Enter] / [Space] Tiếp tục</span>
            </div>
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
              const clean = (s: string) => s.trim().toLowerCase().replace(/[.,!?;:]+$/, "");
              const isCorrect = clean(fillInput) === clean(currentF.answer);

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
                          setFillInput("");
                          setFillChecked(false);
                          if (fillIdx < fillList.length - 1) {
                            setFillIdx((i) => i + 1);
                          } else {
                            goToNextStage();
                          }
                        }}
                        className="bg-brand text-white font-bold"
                      >
                        {fillIdx < fillList.length - 1 ? "Câu tiếp theo →" : "Chuyển sang phần tiếp →"}
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

              {/* Target Vocabulary Live Tracker */}
              {vocabList.length > 0 && (
                <div className="mb-4 rounded-2xl border border-purple-100 bg-purple-50/40 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                      Từ vựng mục tiêu cần áp dụng vào bài viết:
                    </span>
                    <span className="text-[11px] font-bold text-purple-700">
                      Đã áp dụng: {vocabList.filter((v: any) => writingText.toLowerCase().includes(v.word.toLowerCase().trim())).length}/{vocabList.length} từ
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vocabList.map((v: any) => {
                      const isUsed = writingText.toLowerCase().includes(v.word.toLowerCase().trim());
                      return (
                        <span
                          key={v.id || v.word}
                          className={cn(
                            "inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-bold transition-all",
                            isUsed
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs"
                              : "bg-white text-slate-500 border border-slate-200"
                          )}
                        >
                          {isUsed ? "✓" : "○"} {v.word}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

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

            <div className="mb-2 inline-flex items-center gap-2">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-bold border",
                  difficultyLevel.includes("C1") || difficultyLevel.includes("THPT")
                    ? "bg-purple-50 text-purple-700 border-purple-200"
                    : difficultyLevel.includes("B")
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-emerald-50 text-emerald-700 border-emerald-200"
                )}
              >
                Cấp độ {difficultyLevel}
              </span>
            </div>

            <h1 className="text-2xl font-extrabold text-slate-900">Chúc mừng bạn đã chinh phục bài tập!</h1>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              Bạn đã hoàn thành trọn vẹn toàn bộ các chặng học tập: video bài giảng, thuộc {knownCount} từ vựng
              {readingQuestions.length > 0 ? `, làm đúng ${readingScore}/${readingQuestions.length} câu đọc hiểu` : ""}
              {syntaxList.length > 0 ? `, ghép đúng ${syntaxScore}/${syntaxList.length} câu cấu trúc` : ""}
              {quizList.length > 0 ? `, ${quizScore}/${quizList.length} câu trắc nghiệm` : ""}
              {fillList.length > 0 ? `, ${fillScore}/${fillList.length} câu điền từ` : ""}
              {writingSubmitted ? " và nộp bài luận thành công." : "."}
            </p>

            <div className="my-6 inline-flex items-center gap-3 rounded-2xl bg-amber-50 px-6 py-3 border border-amber-200 text-amber-900 font-extrabold text-lg shadow-sm">
              <span>⚡ +{totalXpEarned} XP</span>
              <span className="text-amber-300">·</span>
              <span>🔥 Chuỗi ngày tiếp tục</span>
            </div>

            <div className="flex justify-center gap-3">
              <Button asChild className="bg-brand hover:bg-brand-600 text-white font-bold">
                <Link href="/dashboard">Về Trang chủ Dashboard</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </AppShell>
  );
}
