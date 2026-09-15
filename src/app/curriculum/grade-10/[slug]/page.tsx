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
  GRADE_10_CURRICULUM,
  getGrade10UnitBySlug,
  type Grade10VocabItem,
} from "@/lib/curriculum/grade10-data";
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
import { generate50UnitQuizQuestions } from "@/lib/curriculum/unit-quiz-generator";

export default function Grade10UnitDetailPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const unit = useMemo(() => (slug ? getGrade10UnitBySlug(slug) : undefined), [slug]);
  const { user } = useRole();
  const { addXp, syncStats } = useApp();

  const vocabIds = useMemo(() => unit?.vocabulary.map((v) => v.id) || [], [unit]);
  const { records, stats, updateWord } = useVocabProgress(vocabIds, user?.id);

  // Unit navigation calculations (Previous / Next Unit) based on resolved unit
  const unitIndex = useMemo(() => {
    if (!unit) return -1;
    return GRADE_10_CURRICULUM.findIndex((u) => u.id === unit.id);
  }, [unit]);
  const prevUnit = unitIndex > 0 ? GRADE_10_CURRICULUM[unitIndex - 1] : null;
  const nextUnit = unitIndex >= 0 && unitIndex < GRADE_10_CURRICULUM.length - 1 ? GRADE_10_CURRICULUM[unitIndex + 1] : null;

  // 5 Main Tabs
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
    const savedCard = localStorage.getItem(`lingoquest_last_card_g10_${slug}`);
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
      localStorage.setItem(`lingoquest_last_card_g10_${slug}`, currentCardIndex.toString());
    }
  }, [slug, currentCardIndex]);

  // Flashcard Custom States
  const [hideMeaningForRecall, setHideMeaningForRecall] = useState(false);
  const [audioListenCount, setAudioListenCount] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isLoopPlaying, setIsLoopPlaying] = useState(false);

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
          <p className="mt-2 text-sm text-slate-500">Đường dẫn bài học Lớp 10 không tồn tại hoặc đã bị đổi.</p>
          <div className="mt-6">
            <Button asChild className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/curriculum/grade-10">Về danh mục Tiếng Anh 10</Link>
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

  const currentFlashcard: Grade10VocabItem | undefined = unit.vocabulary[currentCardIndex];

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

  const handleMasterCurrentWord = () => {
    if (!currentFlashcard) return;

    updateWord(currentFlashcard.id, "mastered");
    addXp(10, `Thuộc từ: ${currentFlashcard.word}`);
    syncStats({ xp: 10, wordsLearned: 1 });

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);

    if (unit && currentCardIndex < unit.vocabulary.length - 1) {
      setCurrentCardIndex((i) => i + 1);
      setAudioListenCount(0);
      setHideMeaningForRecall(false);
    } else {
      handleTabChange("quiz");
    }
  };

  const handleRepeatCurrentWord = () => {
    if (!currentFlashcard) return;
    updateWord(currentFlashcard.id, "learning");
    if (unit && currentCardIndex < unit.vocabulary.length - 1) {
      setCurrentCardIndex((i) => i + 1);
      setAudioListenCount(0);
      setHideMeaningForRecall(false);
    }
  };

  // Generate 50 Quiz Questions dynamically
  const quizQuestions = useMemo(() => {
    if (!unit || unit.vocabulary.length === 0) return [];
    const full = generate50UnitQuizQuestions(unit);
    return full.map((item, qIdx) => ({
      id: qIdx,
      word: item.question,
      question: item.question,
      ipa: "",
      pos: item.category,
      example: item.sentence,
      correctIdx: item.correct,
      options: item.options,
      explanation: item.explanation,
    }));
  }, [unit]);

  const quizScore = useMemo(() => {
    if (!quizSubmitted) return 0;
    let score = 0;
    quizQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctIdx) score += 1;
    });
    return score;
  }, [quizSubmitted, userAnswers, quizQuestions]);

  const handleGradeQuiz = () => {
    setQuizSubmitted(true);
    const score = quizQuestions.reduce((acc, q) => (userAnswers[q.id] === q.correctIdx ? acc + 1 : acc), 0);
    const xpEarned = score * 10;
    if (xpEarned > 0) {
      addXp(xpEarned, `Hoàn thành Quiz Unit ${unit.unitNumber}: ${score}/${quizQuestions.length}`);
      syncStats({ xp: xpEarned });
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl pb-16">
        {/* Top Grade Quick Switcher */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <GradeSwitcher currentGrade={10} compact />
        </div>

        {/* Navigation Breadcrumb & Unit Switcher */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/curriculum" className="hover:text-blue-600 transition-colors">
              Chương trình
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <Link href="/curriculum/grade-10" className="hover:text-blue-600 transition-colors">
              Lớp 10
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-none">
              {unit.isReview ? unit.titleEn : `Unit ${unit.unitNumber}: ${unit.titleEn}`}
            </span>
          </div>

          {/* Quick Unit Jump with Dropdown */}
          <div className="flex items-center gap-2">
            {prevUnit && (
              <Button asChild variant="outline" size="sm" className="rounded-xl border-slate-200 text-xs font-bold shadow-2xs">
                <Link href={`/curriculum/grade-10/${prevUnit.slug}`}>
                  <ChevronLeft className="h-3.5 w-3.5 mr-1" />
                  <span className="hidden sm:inline">Bài trước</span>
                </Link>
              </Button>
            )}

            <select
              aria-label="Chọn bài học Unit"
              value={unit.slug}
              onChange={(e) => {
                router.push(`/curriculum/grade-10/${e.target.value}`);
              }}
              className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 shadow-2xs hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              {GRADE_10_CURRICULUM.map((u) => (
                <option key={u.slug} value={u.slug}>
                  {u.isReview ? u.titleEn : `Unit ${u.unitNumber}: ${u.titleEn}`}
                </option>
              ))}
            </select>

            {nextUnit && (
              <Button asChild size="sm" className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-2xs">
                <Link href={`/curriculum/grade-10/${nextUnit.slug}`}>
                  <span className="hidden sm:inline">Bài tiếp</span>
                  <ChevronRight className="h-3.5 w-3.5 ml-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Unit Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 p-8 text-white shadow-xl mb-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-3 py-0.5 text-xs font-bold text-blue-200 border border-blue-400/30">
                  {unit.isReview ? "Review Ôn tập" : `Tiếng Anh 10 • Unit ${unit.unitNumber}`}
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-slate-200">
                  Học kỳ {unit.term}
                </span>
                <span className="rounded-full bg-blue-400/20 px-2.5 py-0.5 text-xs font-bold text-blue-300">
                  {unit.cefrLevel}
                </span>
              </div>

              <h1 className="font-heading text-2xl font-extrabold sm:text-3xl text-white">
                {unit.titleEn}
              </h1>
              <p className="mt-1 text-sm text-blue-200 font-medium">{unit.titleVi}</p>
              <p className="mt-2 text-xs text-blue-100/80 leading-relaxed">
                Chủ đề: <span className="font-semibold text-white">{unit.topic}</span> • Ngữ pháp:{" "}
                <span className="font-semibold text-white">{unit.grammarTitle}</span>
              </p>
            </div>

            {/* SRS Vocab Stats Mini Widget */}
            {unit.vocabulary.length > 0 && (
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md shrink-0 sm:min-w-[240px]">
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-blue-100">Tiến độ từ vựng:</span>
                  <span className="text-white font-black">{stats.percent}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/20 mb-3">
                  <div
                    className="h-full rounded-full bg-blue-400 transition-all duration-300"
                    style={{ width: `${stats.percent}%` }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="rounded-lg bg-black/20 p-1.5">
                    <span className="block font-bold text-blue-300">{stats.mastered}</span>
                    <span className="text-slate-300">Đã thuộc</span>
                  </div>
                  <div className="rounded-lg bg-black/20 p-1.5">
                    <span className="block font-bold text-amber-300">{stats.learning}</span>
                    <span className="text-slate-300">Đang học</span>
                  </div>
                  <div className="rounded-lg bg-black/20 p-1.5">
                    <span className="block font-bold text-slate-300">
                      {Math.max(0, stats.total - stats.mastered - stats.learning)}
                    </span>
                    <span className="text-slate-400">Chưa học</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* 4-Step Pedagogical Learning Stepper */}
        <UnitLearningStepper
          activeTab={activeTab}
          onTabChange={handleTabChange}
          vocabCount={unit.vocabulary.length}
          quizSubmitted={quizSubmitted}
        />

        {/* Main 5 Navigation Tabs */}
        <div className="mb-8 flex overflow-x-auto border-b border-slate-200 scrollbar-none gap-2">
          <button
            onClick={() => handleTabChange("vocab")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "vocab"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Từ vựng & Flashcard ({unit.vocabulary.length})</span>
          </button>

          <button
            onClick={() => handleTabChange("grammar")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "grammar"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Zap className="h-4 w-4 text-amber-500" />
            <span>Ngữ pháp chuyên sâu</span>
          </button>

          <button
            onClick={() => handleTabChange("reading")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "reading"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Phòng Đọc & Tra từ trực tiếp</span>
          </button>

          <button
            onClick={() => handleTabChange("objectives")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "objectives"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Target className="h-4 w-4" />
            <span>Nhiệm vụ & Mục tiêu</span>
          </button>

          <button
            onClick={() => handleTabChange("quiz")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "quiz"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Award className="h-4 w-4 text-emerald-500" />
            <span>Kiểm tra & Thử thách ({quizQuestions.length} câu)</span>
          </button>
        </div>

        {/* TAB 1: VOCABULARY & FLASHCARDS */}
        {activeTab === "vocab" && (
          <div>
            {unit.vocabulary.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                <h3 className="font-heading text-base font-bold text-slate-800">Không có từ vựng riêng cho bài Review</h3>
                <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
                  Bài Review này tổng hợp kiến thức từ các Units trước. Bạn hãy xem phần Ngữ pháp hoặc luyện tập các dạng bài đọc hiểu!
                </p>
                <div className="mt-6">
                  <Button onClick={() => handleTabChange("grammar")} className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold">
                    Xem tổng kết Ngữ pháp
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                {/* View Switcher & Action bar */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFlashcardMode(true)}
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                        flashcardMode
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      Chế độ Flashcard phản xạ
                    </button>
                    <button
                      onClick={() => setFlashcardMode(false)}
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                        !flashcardMode
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      Danh sách từ ({unit.vocabulary.length})
                    </button>
                  </div>

                  {!flashcardMode && (
                    <div className="relative w-full sm:w-72">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={vocabSearch}
                        onChange={(e) => setVocabSearch(e.target.value)}
                        placeholder="Tìm từ vựng, nghĩa tiếng Việt..."
                        className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
                      />
                    </div>
                  )}
                </div>

                {/* FLASHCARD INTERACTIVE WORKSPACE */}
                {flashcardMode && currentFlashcard && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Main Flashcard View */}
                    <div className="lg:col-span-2">
                      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-md">
                        {/* Top Indicator */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-extrabold text-blue-700">
                              Thẻ {currentCardIndex + 1} / {unit.vocabulary.length}
                            </span>
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600 uppercase">
                              {currentFlashcard.partOfSpeech}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setIsLargeText(!isLargeText)}
                              className="rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                              title="Tăng cỡ chữ"
                            >
                              {isLargeText ? "Cỡ chuẩn" : "Cỡ lớn"}
                            </button>
                            <button
                              onClick={() => setHideMeaningForRecall(!hideMeaningForRecall)}
                              className="rounded-lg border border-slate-200 p-1 text-slate-600 hover:bg-slate-50 transition-colors"
                              title={hideMeaningForRecall ? "Hiện nghĩa" : "Ẩn nghĩa để tự nhớ"}
                            >
                              {hideMeaningForRecall ? <EyeOff className="h-4 w-4 text-blue-600" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Word & IPA Center */}
                        <div className="text-center py-4">
                          {currentFlashcard.imageUrl && (
                            <div className="relative w-full max-w-md mx-auto h-40 sm:h-48 mb-4 overflow-hidden rounded-2xl border border-slate-200 shadow-inner bg-slate-100">
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

                          <h2
                            className={`font-heading font-black text-slate-900 tracking-tight transition-all ${
                              isLargeText ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
                            }`}
                          >
                            {currentFlashcard.word}
                          </h2>
                          <p className="mt-1 font-mono text-sm font-semibold text-blue-600">
                            {currentFlashcard.ipa}
                          </p>

                          {/* Vietnamese Meaning (Recall toggle) */}
                          <div className="mt-4 min-h-[48px] flex items-center justify-center">
                            {hideMeaningForRecall ? (
                              <button
                                onClick={() => setHideMeaningForRecall(false)}
                                className="rounded-xl border border-dashed border-blue-300 bg-blue-50/50 px-4 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100/50 transition-colors"
                              >
                                👁️ Nhấp để mở khóa nghĩa tiếng Việt
                              </button>
                            ) : (
                              <p className="text-base font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-xl inline-block border border-slate-100">
                                {currentFlashcard.meaningVi}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Audio Controls */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-y border-slate-100 py-4">
                          <Button
                            onClick={() => playWordAudio(currentFlashcard.word, currentFlashcard.audioUrl)}
                            disabled={isPlayingAudio}
                            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
                          >
                            <Volume2 className="h-4 w-4 mr-1.5" />
                            Phát âm chuẩn ({audioListenCount}/5)
                          </Button>

                          <Button
                            onClick={() => playLoopAudio5Times(currentFlashcard.word, currentFlashcard.audioUrl)}
                            disabled={isLoopPlaying || isPlayingAudio}
                            variant="outline"
                            className="rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50 text-xs font-bold"
                          >
                            <Sparkles className="h-4 w-4 mr-1.5 text-blue-600" />
                            {isLoopPlaying ? "Đang luyện tai 5 lần..." : "Khắc sâu 5 lần (Deep Imprint)"}
                          </Button>
                        </div>

                        {/* Example sentence */}
                        <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Câu ví dụ chuẩn ngữ cảnh:
                          </div>
                          <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                            &quot;{currentFlashcard.exampleEn}&quot;
                          </p>
                          <p className="mt-1 text-xs text-slate-600 italic">
                            &rarr; {currentFlashcard.exampleVi}
                          </p>
                        </div>

                        {/* Collocations */}
                        {cardCollocations && cardCollocations.length > 0 && (
                          <div className="mt-4">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                              Cụm từ đi kèm (Collocations):
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {cardCollocations.map((colloc, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="rounded-lg bg-blue-50/70 border border-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800"
                                >
                                  {colloc}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Card Navigation & Mastery Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={currentCardIndex === 0}
                              onClick={() => {
                                setCurrentCardIndex((i) => Math.max(0, i - 1));
                                setAudioListenCount(0);
                              }}
                              className="rounded-xl border-slate-200 text-xs font-bold"
                            >
                              <ChevronLeft className="h-4 w-4 mr-1" />
                              Thẻ trước
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={currentCardIndex >= unit.vocabulary.length - 1}
                              onClick={() => {
                                setCurrentCardIndex((i) => Math.min(unit.vocabulary.length - 1, i + 1));
                                setAudioListenCount(0);
                              }}
                              className="rounded-xl border-slate-200 text-xs font-bold"
                            >
                              Thẻ sau
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleRepeatCurrentWord}
                              className="rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold"
                            >
                              Cần ôn lại
                            </Button>
                            <Button
                              onClick={handleMasterCurrentWord}
                              size="sm"
                              className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                            >
                              <Check className="h-4 w-4 mr-1.5" />
                              Đã thuộc từ này (+10 XP)
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: AI Pronunciation Checker */}
                    <div className="lg:col-span-1">
                      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs sticky top-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                            <Sparkles className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-heading text-sm font-bold text-slate-900">
                              Luyện phát âm chuẩn AI
                            </h3>
                            <p className="text-[11px] text-slate-500">Chấm điểm trực tiếp theo giọng bản xứ</p>
                          </div>
                        </div>

                        <SpeechPronunciationChecker
                          targetWord={currentFlashcard.word}
                          onSuccess={() => {
                            addXp(5, `Phát âm chuẩn: ${currentFlashcard.word}`);
                            syncStats({ xp: 5 });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* VOCABULARY LIST VIEW */}
                {!flashcardMode && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredVocab.map((item, idx) => (
                      <div
                        key={item.id}
                        className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-heading text-base font-extrabold text-slate-900">
                              {item.word}
                            </span>
                            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase">
                              {item.partOfSpeech}
                            </span>
                          </div>
                          <p className="font-mono text-xs font-semibold text-blue-600 mb-1">{item.ipa}</p>
                          <p className="text-xs font-bold text-slate-800 mb-2">{item.meaningVi}</p>
                          <p className="text-xs text-slate-600 italic bg-slate-50 p-2 rounded-xl">
                            &quot;{item.exampleEn}&quot;
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => playWordAudio(item.word, item.audioUrl)}
                            className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            Phát âm
                          </button>
                          <button
                            onClick={() => {
                              setCurrentCardIndex(unit.vocabulary.findIndex((v) => v.id === item.id));
                              setFlashcardMode(true);
                            }}
                            className="text-xs font-bold text-slate-500 hover:text-slate-900"
                          >
                            Luyện Flashcard &rarr;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom Guided Next Step Card */}
                <UnitNextStepCard currentTab="vocab" onNext={() => handleTabChange("grammar")} />
              </div>
            )}
          </div>
        )}

        {/* TAB 2: GRAMMAR STUDIO */}
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

        {/* TAB 3: READING STUDIO */}
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

        {/* TAB 4: OBJECTIVES & SECTIONS */}
        {activeTab === "objectives" && (
          <div>
            <div className="mb-6">
              <InteractiveQuestBoard
                unitNumber={unit.unitNumber}
                titleEn={unit.titleEn}
                topic={unit.topic}
                cefrLevel={unit.cefrLevel}
                totalVocab={unit.vocabulary.length}
                masteredVocab={stats.mastered}
                percentVocab={stats.percent}
                onJumpToTab={handleTabChange}
              />
            </div>

            {/* Curriculum SGK 8 Sections Breakdown */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Cấu trúc 8 Phân mục Bài học SGK (Global Success)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {unit.sections.map((sec, sIdx) => (
                  <div
                    key={sec.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 hover:bg-slate-50 hover:border-slate-200 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-black text-blue-700">
                        {sIdx + 1}
                      </span>
                      <h4 className="font-heading text-xs font-bold text-slate-800">{sec.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">{sec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: QUIZ */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="rounded-full bg-blue-600 text-white text-[10px] font-black px-2.5 py-0.5 uppercase tracking-wider">
                    Đề kiểm tra 50 câu
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                    Gộp Từ vựng &amp; Ngữ pháp
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  Kiểm tra toàn diện kiến thức • Unit {unit.unitNumber}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  50 câu hỏi bao quát Từ vựng SGK, Collocations, Chuyên đề Ngữ pháp, IPA &amp; Giao tiếp.
                </p>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-center">
                    <span className="block text-xl font-black text-emerald-700">
                      {quizScore} / {quizQuestions.length}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">Điểm đạt được</span>
                  </div>
                  <Button onClick={handleResetQuiz} variant="outline" className="rounded-xl text-xs font-bold">
                    <RotateCcw className="h-4 w-4 mr-1.5" />
                    Làm lại
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleGradeQuiz}
                  disabled={Object.keys(userAnswers).length === 0}
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs py-2.5 px-4"
                >
                  <Award className="h-4 w-4 mr-1.5" />
                  Nộp bài chấm điểm ({Object.keys(userAnswers).length}/{quizQuestions.length})
                </Button>
              )}
            </div>

            {/* Matrix Navigator */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Bảng điều hướng nhanh 50 câu:
                </span>
                <span className="text-2xs text-slate-500 font-semibold">
                  {Object.keys(userAnswers).length}/{quizQuestions.length} câu đã chọn
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCorrect = userAnswers[q.id] === q.correctIdx;
                  let color = "bg-white text-slate-600 border border-slate-200";

                  if (quizSubmitted) {
                    color = isCorrect
                      ? "bg-emerald-500 text-white font-bold"
                      : "bg-rose-500 text-white font-bold";
                  } else if (isAnswered) {
                    color = "bg-blue-600 text-white font-bold";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        const el = document.getElementById(`g10-question-${q.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={`h-7 w-7 sm:h-8 sm:w-8 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${color}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {quizQuestions.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-8">Không có câu hỏi kiểm tra cho bài này.</p>
            ) : (
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const userAnswer = userAnswers[q.id];
                  const isCorrect = quizSubmitted && userAnswer === q.correctIdx;
                  const isWrong = quizSubmitted && userAnswer !== undefined && userAnswer !== q.correctIdx;

                  return (
                    <div
                      key={q.id}
                      id={`g10-question-${q.id}`}
                      className={`rounded-2xl border p-5 transition-all scroll-mt-24 ${
                        quizSubmitted
                          ? isCorrect
                            ? "border-emerald-200 bg-emerald-50/40"
                            : isWrong
                            ? "border-rose-200 bg-rose-50/40"
                            : "border-slate-200 bg-white"
                          : "border-slate-200/80 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-extrabold text-slate-700">
                            {idx + 1}
                          </span>
                          <span className="font-heading text-base font-black text-slate-900">{q.word}</span>
                          <span className="font-mono text-xs font-semibold text-blue-600">{q.ipa}</span>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase">
                            {q.pos}
                          </span>
                        </div>

                        {quizSubmitted && (
                          <span className="text-xs font-bold">
                            {isCorrect ? (
                              <span className="text-emerald-700 flex items-center gap-1">
                                <Check className="h-4 w-4" /> Chính xác (+10 XP)
                              </span>
                            ) : (
                              <span className="text-rose-600 flex items-center gap-1">
                                <X className="h-4 w-4" /> Chưa đúng
                              </span>
                            )}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-500 italic mb-4">Ví dụ: &quot;{q.example}&quot;</p>

                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = userAnswer === optIdx;
                          const isOptionCorrect = quizSubmitted && optIdx === q.correctIdx;

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => setUserAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                              className={`rounded-xl border p-3 text-left text-xs font-semibold transition-all ${
                                isOptionCorrect
                                  ? "border-emerald-500 bg-emerald-100/70 text-emerald-900 font-bold"
                                  : isSelected && !quizSubmitted
                                  ? "border-blue-600 bg-blue-50 text-blue-900 font-bold"
                                  : isSelected && isWrong
                                  ? "border-rose-400 bg-rose-100/70 text-rose-900"
                                  : "border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100/70"
                              }`}
                            >
                              <span className="mr-2 font-mono font-bold text-slate-400">
                                {String.fromCharCode(65 + optIdx)}.
                              </span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Post-Quiz Results & Celebration Card */}
            {quizSubmitted && (
              <QuizCelebrationCard
                score={quizScore}
                total={quizQuestions.length}
                xpEarned={quizScore * 10}
                nextUnit={nextUnit ? { slug: nextUnit.slug, titleEn: nextUnit.titleEn, unitNumber: nextUnit.unitNumber } : undefined}
                grade={10}
                onReset={handleResetQuiz}
              />
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
