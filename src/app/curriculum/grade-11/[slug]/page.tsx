"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { GradeSwitcher } from "@/components/curriculum/GradeSwitcher";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Layers,
  Sparkles,
  Volume2,
  CheckCircle2,
  ExternalLink,
  Zap,
  RotateCcw,
  Search,
  Check,
  X,
  Printer,
  Target,
  FileText,
  Award,
  Eye,
  EyeOff,
  Compass,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/auth/role-context";
import { useApp } from "@/lib/state/app-context";
import {
  GRADE_11_CURRICULUM,
  getGrade11UnitBySlug,
  type Grade11VocabItem,
} from "@/lib/curriculum/grade11-data";
import { useVocabProgress } from "@/lib/curriculum/vocab-progress";
import { SpeechPronunciationChecker } from "@/components/SpeechPronunciationChecker";
import { getCollocationsForWord } from "@/lib/curriculum/vocab-collocations";
import { InteractiveGrammarStudio } from "@/components/curriculum/InteractiveGrammarStudio";
import { InteractiveReadingStudio } from "@/components/curriculum/InteractiveReadingStudio";
import { InteractiveQuestBoard } from "@/components/curriculum/InteractiveQuestBoard";
import {
  UnitLearningStepper,
  UnitNextStepCard,
  QuizCelebrationCard,
} from "@/components/curriculum/UnitLearningFlow";
import { generate50UnitQuizQuestions, type UnitQuizItem } from "@/lib/curriculum/unit-quiz-generator";

export default function Grade11UnitDetailPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const unit = useMemo(() => (slug ? getGrade11UnitBySlug(slug) : undefined), [slug]);
  const { user } = useRole();
  const { addXp, syncStats } = useApp();

  const vocabIds = useMemo(() => unit?.vocabulary.map((v) => v.id) || [], [unit]);
  const { records, stats, updateWord } = useVocabProgress(vocabIds, user?.id);

  // Unit navigation calculations (Previous / Next Unit) based on resolved unit
  const unitIndex = useMemo(() => {
    if (!unit) return -1;
    return GRADE_11_CURRICULUM.findIndex((u) => u.id === unit.id);
  }, [unit]);
  const prevUnit = unitIndex > 0 ? GRADE_11_CURRICULUM[unitIndex - 1] : null;
  const nextUnit = unitIndex >= 0 && unitIndex < GRADE_11_CURRICULUM.length - 1 ? GRADE_11_CURRICULUM[unitIndex + 1] : null;

  // 5 Main Tabs matching the clean design in the screenshot
  const [activeTab, setActiveTab] = useState<"vocab" | "grammar" | "reading" | "objectives" | "quiz">("vocab");
  const [vocabSearch, setVocabSearch] = useState("");
  const [flashcardMode, setFlashcardMode] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Sync tab with URL query parameter on mount & browser back/forward
  useEffect(() => {
    if (typeof window === "undefined") return;
    const searchParams = new URLSearchParams(window.location.search);
    const tabParam = searchParams.get("tab");
    if (tabParam && ["vocab", "grammar", "reading", "objectives", "quiz"].includes(tabParam)) {
      setActiveTab(tabParam as any);
    }
    const savedCard = localStorage.getItem(`lingoquest_last_card_${slug}`);
    if (savedCard) {
      const idx = parseInt(savedCard, 10);
      if (!isNaN(idx) && unit && idx >= 0 && idx < unit.vocabulary.length) {
        setCurrentCardIndex(idx);
      }
    }
  }, [slug, unit]);

  const handleTabChange = (tab: "vocab" | "grammar" | "reading" | "objectives" | "quiz") => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.replaceState(null, "", url.toString());
    }
  };

  // Persist flashcard index to localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && slug && currentCardIndex >= 0) {
      localStorage.setItem(`lingoquest_last_card_${slug}`, currentCardIndex.toString());
    }
  }, [slug, currentCardIndex]);

  // Flashcard Custom States
  const [hideMeaningForRecall, setHideMeaningForRecall] = useState(false);
  const [audioListenCount, setAudioListenCount] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isLoopPlaying, setIsLoopPlaying] = useState(false);

  // Reading Tab Comprehension Answers
  const [readingAnswers, setReadingAnswers] = useState<Record<number, number>>({});
  const [readingSubmitted, setReadingSubmitted] = useState(false);

  // Quiz state (10 Questions)
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Large font preference
  const [isLargeText, setIsLargeText] = useState(false);

  if (!unit) {
    return (
      <AppShell>
        <div className="mx-auto max-w-xl py-16 text-center">
          <div className="text-5xl mb-4">📖</div>
          <h2 className="font-heading text-xl font-bold text-slate-900">Không tìm thấy bài học này</h2>
          <p className="mt-2 text-sm text-slate-500">Đường dẫn bài học Lớp 11 không tồn tại hoặc đã bị đổi.</p>
          <div className="mt-6">
            <Button asChild className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link href="/curriculum/grade-11">Về danh mục Tiếng Anh 11</Link>
            </Button>
          </div>
        </div>
      </AppShell>
    );
  }

  // Filtered vocabulary for list view
  const filteredVocab = useMemo(() => {
    if (!vocabSearch.trim()) return unit.vocabulary;
    const q = vocabSearch.toLowerCase().trim();
    return unit.vocabulary.filter(
      (v) =>
        v.word.toLowerCase().includes(q) ||
        v.meaningVi.toLowerCase().includes(q) ||
        v.exampleEn.toLowerCase().includes(q)
    );
  }, [unit.vocabulary, vocabSearch]);

  const currentFlashcard: Grade11VocabItem | undefined = unit.vocabulary[currentCardIndex];

  // Get collocations for the current card
  const cardCollocations = useMemo(() => {
    if (!currentFlashcard) return [];
    if (currentFlashcard.collocations && currentFlashcard.collocations.length > 0) {
      return currentFlashcard.collocations;
    }
    return getCollocationsForWord(currentFlashcard.word, currentFlashcard.partOfSpeech, currentFlashcard.exampleEn);
  }, [currentFlashcard]);

  // Audio handler with loop / ear-imprint support
  const playWordAudio = (word: string, audioUrl?: string, onEnd?: () => void) => {
    setIsPlayingAudio(true);
    setAudioListenCount((prev) => Math.min(prev + 1, 5));

    if (currentFlashcard) {
      updateWord(currentFlashcard.id, "learning", { incrementListen: true });
    }

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.onended = () => {
        setIsPlayingAudio(false);
        onEnd?.();
      };
      audio.onerror = () => {
        fallbackSpeak(word, onEnd);
      };
      audio.play().catch(() => {
        fallbackSpeak(word, onEnd);
      });
    } else {
      fallbackSpeak(word, onEnd);
    }
  };

  const fallbackSpeak = (text: string, onEnd?: () => void) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-US";
      utter.rate = 0.85;
      utter.onend = () => {
        setIsPlayingAudio(false);
        onEnd?.();
      };
      utter.onerror = () => {
        setIsPlayingAudio(false);
        onEnd?.();
      };
      window.speechSynthesis.speak(utter);
    } else {
      setIsPlayingAudio(false);
      onEnd?.();
    }
  };

  const playLoopAudio5Times = async (word: string, audioUrl?: string) => {
    if (isLoopPlaying) return;
    setIsLoopPlaying(true);

    for (let i = 0; i < 5; i++) {
      setAudioListenCount(i + 1);
      await new Promise<void>((resolve) => {
        playWordAudio(word, audioUrl, () => {
          setTimeout(resolve, 800);
        });
      });
    }

    if (currentFlashcard) {
      updateWord(currentFlashcard.id, "learning", { incrementListen: true });
    }
    setIsLoopPlaying(false);
  };

  // Handler khi nhấn "Đã thuộc từ này (+10 XP)":
  // Đánh dấu đã thuộc, thưởng +10 XP, và tự động chuyển sang thẻ tiếp theo
  const handleMasterCurrentWord = () => {
    if (!currentFlashcard) return;

    // 1. Cập nhật trạng thái từ thành đã thuộc (mastered)
    updateWord(currentFlashcard.id, "mastered");

    // 2. Thưởng +10 XP kèm âm thanh chime & toast thông báo
    addXp(10, `Thuộc từ: ${currentFlashcard.word}`);
    syncStats({ xp: 10, wordsLearned: 1 });

    // Hủy audio nếu đang phát dở
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);

    // 3. Tự động chuyển tiếp từ tiếp theo
    if (unit && currentCardIndex < unit.vocabulary.length - 1) {
      setCurrentCardIndex((i) => i + 1);
      setAudioListenCount(0);
      setHideMeaningForRecall(false);
    } else {
      // Nếu đã hoàn thành thẻ cuối cùng -> chuyển sang tab kiểm tra
      handleTabChange("quiz");
    }
  };

  // Keyboard Shortcuts: ArrowLeft/Right for cards, Space for audio, 1 for review, 2 for master
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          (activeEl as HTMLElement).isContentEditable)
      ) {
        return;
      }

      if (activeTab === "vocab" && flashcardMode && currentFlashcard) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setCurrentCardIndex((i) => Math.max(i - 1, 0));
          setAudioListenCount(0);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          if (unit && currentCardIndex < unit.vocabulary.length - 1) {
            setCurrentCardIndex((i) => i + 1);
            setAudioListenCount(0);
          } else {
            handleTabChange("quiz");
          }
        } else if (e.key === " " || e.code === "Space") {
          e.preventDefault();
          playWordAudio(currentFlashcard.word, currentFlashcard.audioUrl);
        } else if (e.key === "1") {
          e.preventDefault();
          updateWord(currentFlashcard.id, "learning");
        } else if (e.key === "2") {
          e.preventDefault();
          handleMasterCurrentWord();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTab, flashcardMode, currentFlashcard, currentCardIndex, unit]);

  // 50 Comprehensive Quiz Questions (Vocab, Collocations, IPA, Grammar, Communication)
  const quizQuestions = useMemo(() => {
    if (!unit) return [];
    return generate50UnitQuizQuestions(unit);
  }, [unit]);

  const finalizedQuizQuestions = quizQuestions;

  const quizScore = useMemo(() => {
    return Object.entries(userAnswers).reduce((score, [qIdx, ansIdx]) => {
      const q = finalizedQuizQuestions[Number(qIdx)];
      return score + (q && q.correct === ansIdx ? 1 : 0);
    }, 0);
  }, [userAnswers, finalizedQuizQuestions]);

  const handlePrintWorksheet = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <AppShell>
      {/* SCREEN VIEW (HIDDEN WHEN PRINTING) */}
      <div className="mx-auto max-w-6xl pb-16 print:hidden">
        {/* Top Grade Quick Switcher */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <GradeSwitcher currentGrade={11} compact />
        </div>

        {/* BREADCRUMB & QUICK UNIT NAV */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm mb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-500 font-medium">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Trang chủ</Link>
            <span className="text-slate-300">/</span>
            <Link href="/curriculum" className="hover:text-indigo-600 transition-colors">Chương trình THPT</Link>
            <span className="text-slate-300">/</span>
            <Link href="/curriculum/grade-11" className="hover:text-indigo-600 transition-colors">Lớp 11</Link>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900 truncate max-w-[180px] sm:max-w-none">
              {unit.isReview ? unit.titleEn : `Unit ${unit.unitNumber}`}
            </span>
          </nav>

          {/* Quick Next/Prev Unit Jump */}
          <div className="flex items-center gap-2">
            {prevUnit ? (
              <Link
                href={`/curriculum/grade-11/${prevUnit.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 hover:bg-slate-50 shadow-2xs transition-colors"
                title={`Bài trước: ${prevUnit.titleEn}`}
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Bài trước</span>
              </Link>
            ) : null}

            {/* Unit Dropdown Switcher */}
            <select
              aria-label="Chọn bài học Unit"
              value={unit.slug}
              onChange={(e) => {
                router.push(`/curriculum/grade-11/${e.target.value}`);
              }}
              className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 shadow-2xs hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
            >
              {GRADE_11_CURRICULUM.map((u) => (
                <option key={u.slug} value={u.slug}>
                  {u.isReview ? u.titleEn : `Unit ${u.unitNumber}: ${u.titleEn}`}
                </option>
              ))}
            </select>

            {nextUnit ? (
              <Link
                href={`/curriculum/grade-11/${nextUnit.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-xl px-2.5 py-1.5 hover:bg-indigo-100 shadow-2xs transition-colors"
                title={`Bài kế: ${nextUnit.titleEn}`}
              >
                <span className="hidden sm:inline">Bài tiếp</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            ) : null}
          </div>
        </div>

        {/* TOP HEADER & SEGMENTED TABS BAR (MATCHING USER SCREENSHOT IMAGE 1) */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Left Column: Back button, Unit title, Subtitle with XP */}
            <div>
              <Link
                href="/curriculum/grade-11"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-2.5"
              >
                <span className="text-slate-400">←</span> Quay lại Danh mục bài học
              </Link>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {unit.isReview ? unit.titleEn : `Unit ${unit.unitNumber}: ${unit.titleEn}`}
              </h1>
              <p className="mt-2 text-sm sm:text-base font-bold text-indigo-600">
                {unit.titleVi} • <span className="font-extrabold text-indigo-700">+100 XP khi hoàn thành</span>
              </p>
            </div>

            {/* Right Column: Segmented Control Tabs */}
            <div className="flex items-center rounded-2xl bg-slate-100/80 p-1.5 overflow-x-auto shrink-0 border border-slate-200/60">
              <button
                onClick={() => handleTabChange("vocab")}
                className={`rounded-xl px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "vocab"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Từ vựng (Flashcard)
              </button>

              <button
                onClick={() => handleTabChange("grammar")}
                className={`rounded-xl px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "grammar"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Ngữ pháp
              </button>

              <button
                onClick={() => handleTabChange("reading")}
                className={`rounded-xl px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "reading"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Đọc hiểu
              </button>

              <button
                onClick={() => handleTabChange("objectives")}
                className={`rounded-xl px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "objectives"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Mục tiêu
              </button>

              <button
                onClick={() => handleTabChange("quiz")}
                className={`rounded-xl px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "quiz"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Kiểm tra (10 câu)
              </button>
            </div>
          </div>

          {/* Quick Info & Action Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3.5 py-1 font-semibold text-slate-700">
                Học kỳ {unit.term} • CEFR {unit.cefrLevel}
              </span>
              <span className="rounded-full bg-indigo-50 px-3.5 py-1 font-semibold text-indigo-700">
                Chủ đề: {unit.topic}
              </span>
              <span className="rounded-full bg-emerald-50 px-3.5 py-1 font-semibold text-emerald-800">
                Đã thuộc: {stats.mastered}/{stats.total} từ ({stats.percent}%)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLargeText((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-bold transition-colors cursor-pointer border ${
                  isLargeText
                    ? "bg-indigo-600 text-white border-indigo-700 shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
                title="Bật/Tắt chế độ cỡ chữ lớn đọc rõ"
              >
                <span className="text-sm font-black">Aa</span>
                <span>{isLargeText ? "Cỡ chữ lớn: Bật" : "Cỡ chữ lớn"}</span>
              </button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrintWorksheet}
                className="rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
              >
                <Printer className="mr-1.5 h-4 w-4 text-indigo-600" />
                In phiếu bài tập A4
              </Button>
            </div>
          </div>
        </div>

        {/* 4-Step Pedagogical Learning Stepper */}
        <UnitLearningStepper
          activeTab={activeTab}
          onTabChange={handleTabChange}
          vocabCount={unit.vocabulary.length}
          quizSubmitted={quizSubmitted}
        />

        {/* ========================================================= */}
        {/* TAB 1: VOCABULARY & FLASHCARDS (MATCHING SCREENSHOT 2) */}
        {/* ========================================================= */}
        {activeTab === "vocab" && (
          <div>
            {/* View Mode Switcher */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xs">
                <button
                  onClick={() => setFlashcardMode(true)}
                  className={`flex items-center gap-2 rounded-xl px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    flashcardMode ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Thẻ Flashcard mẫu mới
                </button>
                <button
                  onClick={() => setFlashcardMode(false)}
                  className={`rounded-xl px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    !flashcardMode ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Bảng danh sách từ ({unit.vocabulary.length})
                </button>
              </div>

              {!flashcardMode && (
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={vocabSearch}
                    onChange={(e) => setVocabSearch(e.target.value)}
                    placeholder="Tìm từ vựng, nghĩa tiếng Việt..."
                    className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* FLASHCARD VIEW */}
            {flashcardMode && currentFlashcard && (
              <div className="mx-auto max-w-2xl py-2">
                {/* Top status bar above card */}
                <div className="mb-3.5 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-500">
                  <span>
                    Thẻ từ {currentCardIndex + 1} / {unit.vocabulary.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {records[currentFlashcard.id]?.status === "mastered" && (
                      <span className="flex items-center gap-1.5 text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full font-bold">
                        <Check className="h-3.5 w-3.5" /> Đã thuộc
                      </span>
                    )}
                    <button
                      onClick={() => setHideMeaningForRecall((prev) => !prev)}
                      className="flex items-center gap-1.5 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-full cursor-pointer transition-colors border border-indigo-200/70"
                      title="Bật/tắt chế độ tự kiểm tra trí nhớ"
                    >
                      {hideMeaningForRecall ? (
                        <>
                          <EyeOff className="h-4 w-4 text-indigo-600" />
                          <span>Đang ẩn nghĩa</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 text-indigo-600" />
                          <span>Đang hiện đầy đủ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* THE CUSTOM FLASHCARD CARD (MATCHING USER SCREENSHOT IMAGE 2) */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-sm transition-all">
                  {/* Real-world Illustrative Photo */}
                  {currentFlashcard.imageUrl && (
                    <div className="relative w-full h-44 sm:h-52 mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-inner bg-slate-100">
                      <img
                        src={currentFlashcard.imageUrl}
                        alt={currentFlashcard.word}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-3 py-1.5 text-center pointer-events-none">
                        <span className="text-[11px] font-medium text-white/95">
                          💡 Nhìn ảnh thực tế đoán nghĩa
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Word + Part of Speech Badge + Speaker Button */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                          {currentFlashcard.word}
                        </h2>
                        <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs sm:text-sm font-bold text-slate-700 border border-slate-200/60">
                          {currentFlashcard.partOfSpeech}
                        </span>
                      </div>

                      {/* Row 2: IPA in purple monospace font */}
                      <p className="mt-2 font-mono text-base sm:text-lg lg:text-xl font-bold text-purple-600">
                        {currentFlashcard.ipa}
                      </p>
                    </div>

                    {/* Speaker Button on Top Right */}
                    <button
                      onClick={() => playWordAudio(currentFlashcard.word, currentFlashcard.audioUrl)}
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl transition-all cursor-pointer shadow-xs shrink-0 ${
                        isPlayingAudio
                          ? "bg-indigo-600 text-white scale-95 shadow-inner"
                          : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:scale-105"
                      }`}
                      title="Nghe phát âm chuẩn"
                    >
                      <Volume2 className="h-6 w-6 sm:h-7 sm:w-7" />
                    </button>
                  </div>

                  {/* Row 3: Nghĩa Box */}
                  <div className="mt-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 p-4 sm:p-5">
                    {hideMeaningForRecall ? (
                      <div className="flex items-center justify-between">
                        <p className="text-sm sm:text-base font-semibold text-slate-400 italic">
                          Đã ẩn nghĩa — Hãy đoán từ ngữ cảnh bên dưới rồi bấm để xem
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setHideMeaningForRecall(false)}
                          className="text-xs sm:text-sm font-bold text-indigo-600 hover:bg-indigo-50"
                        >
                          Hiện nghĩa
                        </Button>
                      </div>
                    ) : (
                      <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                        <span className="font-black text-slate-900">Nghĩa: </span>
                        <span className="text-indigo-950 font-bold">{currentFlashcard.meaningVi}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 4: Example Sentence & Vietnamese Translation */}
                  <div className="mt-6 space-y-2">
                    <p className="text-base sm:text-lg lg:text-xl italic text-slate-800 font-semibold leading-relaxed">
                      &quot;{currentFlashcard.exampleEn || `We practice using ${currentFlashcard.word} in everyday conversation.`}&quot;
                    </p>
                    {currentFlashcard.exampleVi && (
                      <p className="text-sm sm:text-base text-slate-600 flex items-start gap-2 leading-relaxed font-normal">
                        <span className="text-indigo-500 font-bold">→</span>
                        <span>{currentFlashcard.exampleVi}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 5: Collocations (Cụm từ hay gặp) */}
                  {cardCollocations.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-bold text-slate-400 shrink-0">Cụm từ hay gặp:</span>
                      <div className="flex flex-wrap gap-2">
                        {cardCollocations.map((colloc, idx) => (
                          <button
                            key={idx}
                            onClick={() => fallbackSpeak(colloc)}
                            className="rounded-xl bg-indigo-50/90 hover:bg-indigo-100 text-indigo-800 font-bold text-xs sm:text-sm px-3.5 py-2 border border-indigo-200/70 transition-colors flex items-center gap-2 group cursor-pointer shadow-2xs"
                            title="Nhấn để nghe phát âm cụm từ"
                          >
                            <span>{colloc}</span>
                            <Volume2 className="h-3.5 w-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CUSTOM SUPERPOWERS: 5x EAR IMPRINT & SPEECH CHECKER */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                    {/* Ear Imprint Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100">
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <span className="font-bold text-slate-700">Luyện nghe (Ear Imprint):</span>
                        <span className="font-bold text-indigo-700 bg-indigo-50 px-3 py-0.5 rounded-full border border-indigo-100">
                          Đã nghe: {audioListenCount}/5 lần
                        </span>
                      </div>
                      <button
                        onClick={() => playLoopAudio5Times(currentFlashcard.word, currentFlashcard.audioUrl)}
                        disabled={isLoopPlaying}
                        className="text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 bg-white border border-indigo-200 px-3.5 py-1.5 rounded-xl shadow-xs hover:bg-indigo-50 transition-colors cursor-pointer"
                      >
                        {isLoopPlaying ? "Đang phát 5 lần..." : "🔁 Nghe lặp 5 lần"}
                      </button>
                    </div>

                    {/* Speech AI Pronunciation Practice Checker */}
                    <SpeechPronunciationChecker
                      targetWord={currentFlashcard.word}
                      minListenCountNeeded={2}
                      currentListenCount={audioListenCount}
                      onSuccess={(score) => {
                        updateWord(currentFlashcard.id, "mastered", { speechScore: score });
                      }}
                    />

                    {/* Spaced Repetition Mastery Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateWord(currentFlashcard.id, "learning")}
                        className="flex-1 rounded-2xl text-xs sm:text-sm font-bold border-amber-200 text-amber-900 hover:bg-amber-50 py-5 sm:py-5.5 cursor-pointer"
                      >
                        <RotateCcw className="mr-2 h-4 w-4 text-amber-600" />
                        Cần ôn lại thêm
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleMasterCurrentWord}
                        className="flex-1 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs py-5 sm:py-5.5 cursor-pointer"
                      >
                        <Check className="mr-2 h-4 w-4" />
                        Đã thuộc từ này (+10 XP)
                      </Button>
                    </div>
                  </div>

                  {/* Card Navigation Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <Button
                      variant="outline"
                      disabled={currentCardIndex === 0}
                      onClick={() => {
                        setCurrentCardIndex((i) => Math.max(i - 1, 0));
                        setAudioListenCount(0);
                      }}
                      className="rounded-xl text-xs sm:text-sm font-bold py-2.5 px-4 cursor-pointer"
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" /> Từ trước
                    </Button>

                    <span className="text-xs sm:text-sm font-bold text-slate-500">
                      Thẻ từ {currentCardIndex + 1} / {unit.vocabulary.length}
                    </span>

                    <Button
                      onClick={() => {
                        if (currentCardIndex < unit.vocabulary.length - 1) {
                          setCurrentCardIndex((i) => i + 1);
                          setAudioListenCount(0);
                        } else {
                          handleTabChange("grammar");
                        }
                      }}
                      className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs sm:text-sm font-bold text-white shadow-xs py-2.5 px-4 cursor-pointer"
                    >
                      {currentCardIndex < unit.vocabulary.length - 1 ? (
                        <>
                          Từ tiếp theo <ChevronRight className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        "Bước tiếp: Học Ngữ pháp"
                      )}
                    </Button>
                  </div>

                  {/* Keyboard shortcuts helper pills */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-400">Phím tắt nhanh:</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 font-mono font-medium text-slate-700 border border-slate-200">
                      <kbd>←</kbd> / <kbd>→</kbd> Đổi thẻ
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 font-mono font-medium text-slate-700 border border-slate-200">
                      <kbd>Space</kbd> Phát âm
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 font-mono font-semibold text-amber-800 border border-amber-200">
                      <kbd>1</kbd> Ôn lại
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 font-mono font-semibold text-emerald-800 border border-emerald-200">
                      <kbd>2</kbd> Thuộc từ (+10XP)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* VOCABULARY LIST VIEW (TABLE) */}
            {!flashcardMode && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredVocab.map((v, idx) => {
                  const record = records[v.id];
                  const isMastered = record?.status === "mastered";
                  const isLearning = record?.status === "learning";
                  const collocations = getCollocationsForWord(v.word, v.partOfSpeech);

                  return (
                    <div
                      key={v.id}
                      className={`group flex flex-col justify-between rounded-3xl border p-5 shadow-xs transition-all ${
                        isMastered
                          ? "border-emerald-200 bg-emerald-50/30"
                          : "border-slate-200 bg-white hover:border-indigo-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold text-slate-400">#{idx + 1}</span>
                              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {v.word}
                              </h3>
                              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                                {v.partOfSpeech}
                              </span>
                            </div>
                            <p className="mt-1 font-mono text-sm text-purple-600 font-semibold">{v.ipa}</p>
                          </div>

                          <button
                            onClick={() => playWordAudio(v.word, v.audioUrl)}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:scale-105 transition-all shadow-2xs cursor-pointer"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-3.5 rounded-xl bg-slate-50/90 p-3 text-sm sm:text-base text-slate-800 border border-slate-100">
                          <span className="font-bold text-slate-900">Nghĩa: </span>
                          <span className="text-indigo-950 font-medium">{v.meaningVi}</span>
                        </div>

                        {v.exampleEn && (
                          <div className="mt-3 text-xs sm:text-sm leading-relaxed">
                            <p className="italic text-slate-700 font-medium">&quot;{v.exampleEn}&quot;</p>
                            {v.exampleVi && <p className="text-slate-500 mt-1">→ {v.exampleVi}</p>}
                          </div>
                        )}

                        {collocations.length > 0 && (
                          <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {collocations.slice(0, 2).map((c, i) => (
                              <span
                                key={i}
                                className="text-xs bg-indigo-50/80 text-indigo-800 px-2.5 py-1 rounded-lg border border-indigo-100 font-medium"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
                        <span
                          className={`font-semibold ${
                            isMastered
                              ? "text-emerald-700"
                              : isLearning
                              ? "text-amber-700"
                              : "text-slate-400"
                          }`}
                        >
                          {isMastered ? "✓ Đã thuộc" : isLearning ? "• Đang học" : "○ Chưa học"}
                        </span>
                        {record?.speechScore !== undefined && (
                          <span className="text-indigo-700 font-bold">
                            Phát âm: {record.speechScore}%
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bottom Guided Next Step Card */}
            <UnitNextStepCard currentTab="vocab" onNext={() => handleTabChange("grammar")} />
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: GRAMMAR FOCUS (INTERACTIVE TIMELINE & FORMULAS) */}
        {/* ========================================================= */}
        {activeTab === "grammar" && (
          <div>
            <InteractiveGrammarStudio
              unitNumber={unit.unitNumber}
              grammarTitle={unit.grammarTitle}
              grammarSummary={unit.grammarSummary}
              topic={unit.topic}
            />
            <UnitNextStepCard currentTab="grammar" onNext={() => handleTabChange("reading")} />
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: READING COMPREHENSION (SMART READER & AUDIO) */}
        {/* ========================================================= */}
        {activeTab === "reading" && (
          <div>
            <InteractiveReadingStudio
              unitNumber={unit.unitNumber}
              titleEn={unit.titleEn}
              topic={unit.topic}
            />
            <UnitNextStepCard currentTab="reading" onNext={() => handleTabChange("quiz")} />
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: GAMIFIED QUEST BOARD (BẢNG NHIỆM VỤ KHÁM PHÁ) */}
        {/* ========================================================= */}
        {activeTab === "objectives" && (
          <InteractiveQuestBoard
            unitNumber={unit.unitNumber}
            titleEn={unit.titleEn}
            topic={unit.topic}
            cefrLevel={unit.cefrLevel}
            totalVocab={unit.vocabulary.length}
            masteredVocab={stats.mastered}
            percentVocab={stats.percent}
            onJumpToTab={(tab) => setActiveTab(tab)}
          />
        )}

        {/* ========================================================= */}
        {/* TAB 5: PRACTICE QUIZ (BỘ ĐỀ KIỂM TRA 50 CÂU TOÀN DIỆN) */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="mx-auto max-w-3xl py-4 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-3xl bg-indigo-50 p-6 sm:p-7 border border-indigo-100 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-indigo-600 text-white text-xs font-black px-3 py-0.5 uppercase tracking-wider">
                    Chuẩn format 50 câu
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-100/70 px-2.5 py-0.5 rounded-full">
                    Toàn diện 5 chuyên đề
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-indigo-950">
                  Bài kiểm tra củng cố kiến thức Unit {unit.unitNumber}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-700 font-medium mt-1 leading-relaxed">
                  20 câu Từ vựng • 10 câu Collocations • 12 câu Ngữ pháp • 4 câu Ngữ âm IPA • 4 câu Giao tiếp
                </p>
              </div>
              {quizSubmitted ? (
                <div className="text-left sm:text-right bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl border sm:border-0 border-indigo-100">
                  <span className="text-3xl sm:text-4xl font-black text-indigo-700">
                    {quizScore}/{finalizedQuizQuestions.length}
                  </span>
                  <span className="block text-xs font-bold uppercase text-indigo-600">Điểm tổng kết</span>
                </div>
              ) : (
                <div className="text-left sm:text-right">
                  <span className="text-xs sm:text-sm font-bold text-indigo-700 bg-white px-3.5 py-2 rounded-xl border border-indigo-200 shadow-2xs inline-block">
                    Mục tiêu: +{finalizedQuizQuestions.length * 5} XP
                  </span>
                  <p className="text-2xs text-slate-500 mt-1 font-semibold">
                    Đã làm: {Object.keys(userAnswers).length}/{finalizedQuizQuestions.length} câu
                  </p>
                </div>
              )}
            </div>

            {/* Matrix Navigator: Nhảy nhanh tới câu 1 -> 50 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Bảng câu hỏi nhanh (1 – {finalizedQuizQuestions.length}):
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {Object.keys(userAnswers).length}/{finalizedQuizQuestions.length} đã chọn
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {finalizedQuizQuestions.map((q, idx) => {
                  const isAnswered = userAnswers[idx] !== undefined;
                  const isCorrect = userAnswers[idx] === q.correct;
                  let color = "bg-slate-100 text-slate-600 hover:bg-slate-200";

                  if (quizSubmitted) {
                    color = isCorrect
                      ? "bg-emerald-500 text-white font-bold"
                      : "bg-red-400 text-white font-bold";
                  } else if (isAnswered) {
                    color = "bg-indigo-600 text-white font-bold";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        const el = document.getElementById(`quiz-question-${idx}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }}
                      className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${color}`}
                      title={`Đến câu ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {finalizedQuizQuestions.map((q, qIdx) => {
                const selected = userAnswers[qIdx];
                return (
                  <div
                    key={qIdx}
                    id={`quiz-question-${qIdx}`}
                    className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs scroll-mt-24"
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs sm:text-sm font-bold text-slate-700 border border-slate-200/60">
                          Câu {qIdx + 1} / {finalizedQuizQuestions.length}
                        </span>
                        <span className="text-2xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                          {q.category === "vocab" && "Từ vựng"}
                          {q.category === "collocation" && "Cụm từ Collocation"}
                          {q.category === "grammar" && "Ngữ pháp"}
                          {q.category === "pronunciation" && "Ngữ âm IPA"}
                          {q.category === "communication" && "Giao tiếp & Đọc hiểu"}
                        </span>
                      </div>
                      {userAnswers[qIdx] !== undefined && !quizSubmitted && (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                          Đã chọn
                        </span>
                      )}
                    </div>

                    <p className="font-heading text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-relaxed">{q.question}</p>
                    {q.sentence && (
                      <p className="mt-2 text-sm sm:text-base italic text-slate-600 font-medium">{q.sentence}</p>
                    )}

                    <div className="mt-4 space-y-2.5">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selected === optIdx;
                        const isCorrect = q.correct === optIdx;

                        let style = "border-slate-200 hover:bg-slate-50 text-slate-800";
                        if (quizSubmitted) {
                          if (isCorrect) {
                            style = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold shadow-xs";
                          } else if (isChosen && !isCorrect) {
                            style = "border-red-300 bg-red-50 text-red-900";
                          }
                        } else if (isChosen) {
                          style = "border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                            className={`w-full text-left rounded-2xl border p-4 text-sm sm:text-base transition-all flex items-center justify-between cursor-pointer ${style}`}
                          >
                            <span className="leading-relaxed">
                              <span className="font-bold mr-2 text-slate-400">
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              {opt}
                            </span>
                            {quizSubmitted && isCorrect && (
                              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {quizSubmitted && isChosen && !isCorrect && (
                              <X className="h-5 w-5 text-red-500 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs sm:text-sm text-slate-700 border border-slate-100 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Giải thích: </strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Action Buttons */}
            <div className="pt-2 sticky bottom-4 z-20">
              {!quizSubmitted ? (
                <Button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(userAnswers).length === 0}
                  className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-sm sm:text-base font-bold text-white shadow-lg w-full py-4 sm:py-5 cursor-pointer"
                >
                  Nộp bài &amp; Nhận kết quả ({Object.keys(userAnswers).length}/{finalizedQuizQuestions.length} câu)
                </Button>
              ) : (
                <div className="space-y-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200">
                  {quizScore >= 35 && (
                    <div className="rounded-2xl bg-emerald-50 p-4 sm:p-5 border border-emerald-200 text-center">
                      <p className="text-sm sm:text-base font-bold text-emerald-900">
                        🎉 Xuất sắc! Bạn đã đạt {quizScore}/{finalizedQuizQuestions.length} điểm và nhận thành công +{quizScore * 5} XP!
                      </p>
                    </div>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => {
                      setUserAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="rounded-2xl text-sm sm:text-base font-bold w-full py-4 sm:py-5 cursor-pointer"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Làm lại bài kiểm tra 50 câu
                  </Button>
                </div>
              )}
            </div>

            {/* Post-Quiz Results & Celebration Card */}
            {quizSubmitted && (
              <QuizCelebrationCard
                score={quizScore}
                total={finalizedQuizQuestions.length}
                xpEarned={quizScore * 5}
                nextUnit={nextUnit ? { slug: nextUnit.slug, titleEn: nextUnit.titleEn, unitNumber: nextUnit.unitNumber } : undefined}
                grade={11}
                onReset={() => {
                  setUserAnswers({});
                  setQuizSubmitted(false);
                }}
              />
            )}
          </div>
        )}
      </div>

      {/* PRINT-ONLY WORKSHEET TEMPLATE (A4 FORMATTED) */}
      <div className="hidden print:block p-4 max-w-4xl mx-auto text-black font-sans">
        <div className="border-b-2 border-black pb-4 mb-6">
          <div className="flex justify-between items-start text-xs font-bold uppercase tracking-wider">
            <div>
              <p>SỞ GIÁO DỤC VÀ ĐÀO TẠO</p>
              <p>TRƯỜNG THPT: .......................................</p>
            </div>
            <div className="text-right">
              <p>PHIẾU HỌC TẬP TỰ HỌC</p>
              <p>TIẾNG ANH 11 — GLOBAL SUCCESS</p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-xl font-bold uppercase">
              {unit.titleEn} — {unit.titleVi}
            </h1>
            <p className="text-xs italic mt-1">Chủ đề: {unit.topic} • Ngữ pháp: {unit.grammarTitle}</p>
          </div>

          <div className="mt-4 flex justify-between text-xs">
            <p>Họ và tên học sinh: ................................................................</p>
            <p>Lớp: ................ Ngày: ....../....../202...</p>
          </div>
        </div>

        {/* Part 1: Vocabulary Table */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
            I. BẢNG TỪ VỰNG TRỌNG TÂM (VOCABULARY)
          </h2>
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-black p-1 text-center w-8">STT</th>
                <th className="border border-black p-1 text-left w-36">Từ vựng (Word)</th>
                <th className="border border-black p-1 text-center w-16">Loại từ</th>
                <th className="border border-black p-1 text-left w-28">Phiên âm</th>
                <th className="border border-black p-1 text-left">Nghĩa tiếng Việt</th>
                <th className="border border-black p-1 text-left">Ví dụ minh họa</th>
              </tr>
            </thead>
            <tbody>
              {unit.vocabulary.map((v, i) => (
                <tr key={v.id}>
                  <td className="border border-black p-1 text-center font-medium">{i + 1}</td>
                  <td className="border border-black p-1 font-bold">{v.word}</td>
                  <td className="border border-black p-1 text-center">{v.partOfSpeech}</td>
                  <td className="border border-black p-1 font-mono">{v.ipa}</td>
                  <td className="border border-black p-1">{v.meaningVi}</td>
                  <td className="border border-black p-1 italic">{v.exampleEn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Part 2: Grammar Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
            II. TÓM TẮT NGỮ PHÁP (GRAMMAR FOCUS)
          </h2>
          <p className="text-xs font-semibold">{unit.grammarTitle}</p>
          <p className="text-xs text-gray-800 leading-relaxed mt-1">{unit.grammarSummary}</p>
        </div>

        {/* Part 3: Practice Questions */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-1 mb-2">
            III. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (PRACTICE QUIZ)
          </h2>
          <div className="space-y-4 text-xs">
            {finalizedQuizQuestions.map((q, idx) => (
              <div key={idx} className="mb-2">
                <p className="font-bold">
                  Câu {idx + 1}: {q.question}
                </p>
                {q.sentence && <p className="italic text-gray-700">{q.sentence}</p>}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                  {q.options.map((opt, optIdx) => (
                    <div key={optIdx} className="flex items-center gap-1.5">
                      <span>{String.fromCharCode(65 + optIdx)}.</span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-black flex justify-between text-xs italic">
          <p>LingoQuest EdTech • Cẩm nang tự học Tiếng Anh THPT</p>
          <p>Chữ ký giáo viên: .......................................</p>
        </div>
      </div>
    </AppShell>
  );
}
