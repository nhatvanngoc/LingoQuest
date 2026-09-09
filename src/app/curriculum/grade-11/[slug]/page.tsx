"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  Bookmark,
  Zap,
  HelpCircle,
  RotateCcw,
  Search,
  Check,
  X,
  Flame,
  Printer,
  Award,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/auth/role-context";
import {
  getGrade11UnitBySlug,
  type Grade11Unit,
  type Grade11VocabItem,
} from "@/lib/curriculum/grade11-data";
import { useVocabProgress } from "@/lib/curriculum/vocab-progress";
import { SpeechPronunciationChecker } from "@/components/SpeechPronunciationChecker";

export default function Grade11UnitDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const unit = useMemo(() => (slug ? getGrade11UnitBySlug(slug) : undefined), [slug]);
  const { user } = useRole();

  const vocabIds = useMemo(() => unit?.vocabulary.map((v) => v.id) || [], [unit]);
  const { records, stats, updateWord } = useVocabProgress(vocabIds, user?.id);

  const [activeTab, setActiveTab] = useState<"vocab" | "grammar" | "sections" | "quiz">("vocab");
  const [vocabSearch, setVocabSearch] = useState("");
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Flashcard Imprint States
  const [guessRevealed, setGuessRevealed] = useState(false);
  const [audioListenCount, setAudioListenCount] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  if (!unit) {
    return (
      <AppShell>
        <div className="mx-auto max-w-xl py-16 text-center">
          <div className="text-5xl mb-4">📖</div>
          <h2 className="font-heading text-xl font-bold text-slate-900">Không tìm thấy bài học này</h2>
          <p className="mt-2 text-sm text-slate-500">Đường dẫn bài học Lớp 11 không tồn tại hoặc đã bị đổi.</p>
          <div className="mt-6">
            <Button asChild className="rounded-xl bg-teal-600 hover:bg-teal-700">
              <Link href="/curriculum/grade-11">Về danh mục Tiếng Anh 11</Link>
            </Button>
          </div>
        </div>
      </AppShell>
    );
  }

  // Filtered vocabulary
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

  const currentFlashcard = unit.vocabulary[currentCardIndex];

  const playWordAudio = (word: string, audioUrl?: string) => {
    setIsPlayingAudio(true);
    setAudioListenCount((prev) => Math.min(prev + 1, 5));

    if (currentFlashcard) {
      updateWord(currentFlashcard.id, "learning", { incrementListen: true });
    }

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => {
        fallbackSpeak(word);
      });
      audio.onended = () => setIsPlayingAudio(false);
      audio.onerror = () => {
        fallbackSpeak(word);
      };
    } else {
      fallbackSpeak(word);
    }
  };

  const fallbackSpeak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-US";
      utter.rate = 0.85;
      utter.onend = () => setIsPlayingAudio(false);
      utter.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utter);
    } else {
      setIsPlayingAudio(false);
    }
  };

  interface QuizItem {
    question: string;
    sentence?: string;
    options: string[];
    correct: number;
    explanation: string;
  }

  // Generate 4-5 quiz questions based on unit vocabulary & grammar
  const quizQuestions: QuizItem[] = useMemo(() => {
    if (unit.vocabulary.length < 4) {
      return [
        {
          question: `Chuyên đề ngữ pháp cốt lõi của bài "${unit.titleEn}" là gì?`,
          sentence: undefined,
          options: [
            unit.grammarTitle,
            "Thì tương lai tiếp diễn",
            "Mệnh đề quan hệ không xác định",
            "Đảo ngữ câu điều kiện",
          ],
          correct: 0,
          explanation: `Ngữ pháp trọng tâm của bài này là: ${unit.grammarTitle}.`,
        },
        {
          question: `Chủ đề bài học (Topic) của Unit này là gì?`,
          sentence: undefined,
          options: ["Sports & Travel", unit.topic, "History & Literature", "Space Exploration"],
          correct: 1,
          explanation: `Chủ đề bài học được quy định trong SGK là: ${unit.topic}.`,
        },
      ];
    }

    const sample = unit.vocabulary.slice(0, 4);
    return sample.map((v) => {
      const otherMeanings = unit.vocabulary
        .filter((x) => x.word !== v.word)
        .slice(0, 3)
        .map((x) => x.meaningVi);

      const options = [v.meaningVi, ...otherMeanings].sort(() => 0.5 - Math.random());
      const correctIdx = options.indexOf(v.meaningVi);

      return {
        question: `Từ "${v.word}" (${v.partOfSpeech}) có nghĩa là gì?`,
        sentence: v.exampleEn ? `Ví dụ: "${v.exampleEn}"` : undefined,
        options,
        correct: correctIdx,
        explanation: `"${v.word}" (${v.ipa}) mang nghĩa: ${v.meaningVi}.`,
      };
    });
  }, [unit]);

  const quizScore = useMemo(() => {
    return Object.entries(userAnswers).reduce((score, [qIdx, ansIdx]) => {
      const q = quizQuestions[Number(qIdx)];
      return score + (q && q.correct === ansIdx ? 1 : 0);
    }, 0);
  }, [userAnswers, quizQuestions]);

  const handlePrintWorksheet = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <AppShell>
      {/* SCREEN VIEW (HIDDEN WHEN PRINTING) */}
      <div className="mx-auto max-w-6xl pb-16 print:hidden">
        {/* Navigation Breadcrumb & Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4 flex flex-wrap items-center justify-between gap-3"
        >
          <Link
            href="/curriculum/grade-11"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Tất cả bài học Lớp 11
          </Link>

          <div className="flex items-center gap-2">
            {/* Print Worksheet Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrintWorksheet}
              className="rounded-xl border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-700 shadow-xs"
              title="Xuất phiếu học tập và bài tập A4 để in ấn"
            >
              <Printer className="mr-1.5 h-3.5 w-3.5 text-teal-600" />
              In phiếu học tập A4
            </Button>

            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 border border-teal-100">
              {unit.isReview ? "Review Bài học" : `Unit ${unit.unitNumber}`} • Học kỳ {unit.term}
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
              {unit.cefrLevel}
            </span>
          </div>
        </motion.div>

        {/* Unit Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-800 to-slate-900 p-6 sm:p-8 text-white shadow-lg mb-8">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-200 mb-2">
              <Bookmark className="h-3.5 w-3.5" /> Chủ đề: {unit.topic}
            </div>
            <h1 className="font-heading text-2xl font-black text-white sm:text-3xl">
              {unit.titleEn}
            </h1>
            <p className="mt-1 text-sm font-medium text-teal-100/90 sm:text-base">{unit.titleVi}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                <Zap className="h-3.5 w-3.5 text-amber-400" /> {unit.grammarTitle}
              </span>
              <span className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                <Layers className="h-3.5 w-3.5 text-teal-300" /> {unit.vocabulary.length} Từ vựng
              </span>
              <span className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                <BookOpen className="h-3.5 w-3.5 text-emerald-300" /> {unit.sections.length} Phân mục SGK
              </span>
            </div>

            {/* SRS Progress Bar */}
            {unit.vocabulary.length > 0 && (
              <div className="mt-5 max-w-md rounded-2xl bg-white/10 p-3 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs font-bold text-teal-100 mb-1.5">
                  <span>Tiến độ ghi nhớ từ vựng</span>
                  <span>
                    {stats.mastered}/{stats.total} từ ({stats.percent}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                    style={{ width: `${stats.percent}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 flex border-b border-slate-200">
          <button
            onClick={() => setActiveTab("vocab")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "vocab"
                ? "border-teal-600 text-teal-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Từ vựng &amp; Flashcards ({unit.vocabulary.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("grammar")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "grammar"
                ? "border-teal-600 text-teal-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>Ngữ pháp trọng tâm</span>
          </button>
          <button
            onClick={() => setActiveTab("sections")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "sections"
                ? "border-teal-600 text-teal-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>8 Phân mục SGK ({unit.sections.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "quiz"
                ? "border-teal-600 text-teal-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Trắc nghiệm củng cố</span>
          </button>
        </div>

        {/* TAB 1: VOCABULARY & FLASHCARDS */}
        {activeTab === "vocab" && (
          <div>
            {/* View Mode Toggle & Search */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1 shadow-xs">
                <button
                  onClick={() => setFlashcardMode(false)}
                  className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
                    !flashcardMode ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Danh sách từ vựng
                </button>
                <button
                  onClick={() => {
                    setFlashcardMode(true);
                    setGuessRevealed(false);
                    setAudioListenCount(0);
                  }}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
                    flashcardMode ? "bg-teal-600 text-white" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Flashcard Siêu Trí Nhớ (Deep Imprint)
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
                    className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* FLASHCARD INTERACTIVE MODE */}
            {flashcardMode && currentFlashcard && (
              <div className="mx-auto max-w-2xl py-4">
                <div className="mb-4 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>
                    Thẻ từ {currentCardIndex + 1} / {unit.vocabulary.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {records[currentFlashcard.id]?.status === "mastered" && (
                      <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                        <Check className="h-3 w-3" /> Đã thuộc
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                      <Volume2 className="h-3.5 w-3.5" />
                      Thấm âm: {audioListenCount}/5 lần
                    </span>
                  </div>
                </div>

                <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-md">
                  {/* Word Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                          {currentFlashcard.word}
                        </h2>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                          {currentFlashcard.partOfSpeech}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-sm text-teal-700 font-semibold">{currentFlashcard.ipa}</p>
                    </div>

                    {/* Audio button */}
                    <button
                      onClick={() => playWordAudio(currentFlashcard.word, currentFlashcard.audioUrl)}
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
                        isPlayingAudio
                          ? "bg-teal-700 text-white scale-95 shadow-inner"
                          : "bg-teal-50 text-teal-700 hover:bg-teal-100 shadow-xs"
                      }`}
                      title="Nghe phát âm chuẩn (nhấn 5 lần để thấm âm)"
                    >
                      <Volume2 className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Context sentence for guessing */}
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Bước 1: Đọc câu ngữ cảnh &amp; Đoán nghĩa
                    </div>
                    <p className="text-sm font-medium text-slate-800 leading-relaxed italic">
                      &quot;{currentFlashcard.exampleEn || `I learned the word ${currentFlashcard.word} today.`}&quot;
                    </p>
                  </div>

                  {/* Guess / Reveal Meaning */}
                  <div className="mt-6">
                    {!guessRevealed ? (
                      <Button
                        onClick={() => {
                          setGuessRevealed(true);
                          updateWord(currentFlashcard.id, "learning");
                        }}
                        variant="outline"
                        className="w-full rounded-2xl border-dashed border-teal-300 bg-teal-50/50 py-6 text-sm font-bold text-teal-800 hover:bg-teal-50"
                      >
                        <Sparkles className="mr-2 h-4 w-4 text-teal-600" />
                        Nhấn để kiểm tra nghĩa Anh - Việt
                      </Button>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4"
                      >
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                          Bước 2 &amp; 3: Nghĩa từ vựng
                        </div>
                        <p className="text-lg font-bold text-slate-900">{currentFlashcard.meaningVi}</p>
                        {currentFlashcard.exampleVi && (
                          <p className="mt-2 text-xs font-medium text-slate-600">
                            Dịch câu: &quot;{currentFlashcard.exampleVi}&quot;
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Speech AI Pronunciation Practice Checker */}
                  <div className="mt-6">
                    <SpeechPronunciationChecker
                      targetWord={currentFlashcard.word}
                      minListenCountNeeded={3}
                      currentListenCount={audioListenCount}
                      onSuccess={(score) => {
                        updateWord(currentFlashcard.id, "mastered", { speechScore: score });
                      }}
                    />
                  </div>

                  {/* Spaced Repetition Actions */}
                  <div className="mt-6 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateWord(currentFlashcard.id, "learning")}
                      className="flex-1 rounded-xl text-xs font-bold border-amber-300 text-amber-800 hover:bg-amber-50"
                    >
                      Cần ôn lại thêm
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => updateWord(currentFlashcard.id, "mastered")}
                      className="flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
                    >
                      <Check className="mr-1 h-3.5 w-3.5" /> Đã thuộc từ này
                    </Button>
                  </div>

                  {/* Flashcard Navigation */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                    <Button
                      variant="outline"
                      disabled={currentCardIndex === 0}
                      onClick={() => {
                        setCurrentCardIndex((i) => Math.max(i - 1, 0));
                        setGuessRevealed(false);
                        setAudioListenCount(0);
                      }}
                      className="rounded-xl text-xs font-bold"
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" /> Từ trước
                    </Button>

                    <Button
                      onClick={() => {
                        if (currentCardIndex < unit.vocabulary.length - 1) {
                          setCurrentCardIndex((i) => i + 1);
                          setGuessRevealed(false);
                          setAudioListenCount(0);
                        } else {
                          setFlashcardMode(false);
                        }
                      }}
                      className="rounded-xl bg-teal-600 hover:bg-teal-700 text-xs font-bold text-white shadow-xs"
                    >
                      <span>
                        {currentCardIndex < unit.vocabulary.length - 1 ? "Từ tiếp theo" : "Hoàn thành thẻ"}
                      </span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* VOCABULARY LIST MODE */}
            {!flashcardMode && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredVocab.map((v) => {
                  const record = records[v.id];
                  const isMastered = record?.status === "mastered";
                  const isLearning = record?.status === "learning";

                  return (
                    <div
                      key={v.id}
                      className={`flex flex-col justify-between rounded-2xl border p-4 shadow-xs transition-all ${
                        isMastered
                          ? "border-emerald-200 bg-emerald-50/30"
                          : "border-slate-200 bg-white hover:border-teal-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-heading text-base font-bold text-slate-900">{v.word}</h3>
                              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">
                                {v.partOfSpeech}
                              </span>
                            </div>
                            <span className="text-xs font-mono text-teal-700 font-semibold">{v.ipa}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => playWordAudio(v.word, v.audioUrl)}
                              className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
                              title="Phát âm"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() =>
                                updateWord(v.id, isMastered ? "learning" : "mastered")
                              }
                              className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                                isMastered
                                  ? "bg-emerald-600 text-white"
                                  : "bg-slate-100 text-slate-400 hover:text-slate-600"
                              }`}
                              title={isMastered ? "Đã thuộc (Bấm để đổi)" : "Đánh dấu đã thuộc"}
                            >
                              <Check className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <p className="mt-2 text-sm font-semibold text-slate-800">{v.meaningVi}</p>

                        {v.exampleEn && (
                          <div className="mt-3 rounded-xl bg-slate-50 p-2.5 border border-slate-100 text-xs">
                            <p className="text-slate-700 italic">&quot;{v.exampleEn}&quot;</p>
                            {v.exampleVi && <p className="mt-1 text-slate-500">{v.exampleVi}</p>}
                          </div>
                        )}
                      </div>

                      {/* Word Mastery Status */}
                      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px]">
                        <span
                          className={`font-semibold ${
                            isMastered
                              ? "text-emerald-700"
                              : isLearning
                              ? "text-amber-600"
                              : "text-slate-400"
                          }`}
                        >
                          {isMastered ? "✓ Đã thuộc" : isLearning ? "• Đang học" : "○ Chưa học"}
                        </span>
                        {record?.speechScore !== undefined && (
                          <span className="text-teal-700 font-bold">
                            Phát âm: {record.speechScore}%
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: GRAMMAR FOCUS */}
        {activeTab === "grammar" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-amber-200 bg-amber-50/50 p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wide">
                <Zap className="h-4 w-4 text-amber-600" />
                Chuyên đề ngữ pháp cốt lõi
              </div>
              <h2 className="font-heading text-xl font-bold text-slate-900 mt-1">{unit.grammarTitle}</h2>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{unit.grammarSummary}</p>
            </div>

            {/* Formatted Grammar HTML extracted from Textbook */}
            {unit.grammarHtml ? (
              <div
                className="prose prose-slate max-w-none rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs text-sm"
                dangerouslySetInnerHTML={{ __html: unit.grammarHtml }}
              />
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
                <p>Nội dung chi tiết phần ngữ pháp đang được đồng bộ theo chương trình chuẩn.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: 8 TEXTBOOK SECTIONS */}
        {activeTab === "sections" && (
          <div className="space-y-4">
            <p className="text-xs font-medium text-slate-500 mb-2">
              Danh mục 12 chuyên đề và 8 phân mục bài học chuẩn theo Sách Giáo Khoa Tiếng Anh 11 Global Success:
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {unit.sections.map((sec, idx) => (
                <div
                  key={sec.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-teal-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wide text-teal-700">
                        Phân mục #{idx + 1}
                      </span>
                      {sec.url && (
                        <a
                          href={sec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-teal-600"
                        >
                          Xem lời giải <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mt-1">{sec.title}</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">{sec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PRACTICE QUIZ */}
        {activeTab === "quiz" && (
          <div className="mx-auto max-w-2xl py-4 space-y-6">
            <div className="flex items-center justify-between rounded-2xl bg-teal-50 p-4 border border-teal-100">
              <div>
                <h3 className="font-heading text-base font-bold text-teal-900">Kiểm tra củng cố kiến thức</h3>
                <p className="text-xs text-teal-700">Luyện tập {quizQuestions.length} câu hỏi nhanh từ vựng &amp; ngữ pháp</p>
              </div>
              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xl font-black text-teal-700">
                    {quizScore}/{quizQuestions.length}
                  </span>
                  <span className="block text-[10px] font-bold uppercase text-teal-600">Điểm số</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, qIdx) => {
                const selected = userAnswers[qIdx];
                return (
                  <div
                    key={qIdx}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-black text-slate-600">
                        Câu {qIdx + 1}
                      </span>
                    </div>

                    <p className="font-heading text-sm font-bold text-slate-900">{q.question}</p>
                    {q.sentence && (
                      <p className="mt-1 text-xs italic text-slate-500">{q.sentence}</p>
                    )}

                    <div className="mt-4 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selected === optIdx;
                        const isCorrect = q.correct === optIdx;

                        let style = "border-slate-200 hover:bg-slate-50 text-slate-700";
                        if (quizSubmitted) {
                          if (isCorrect) {
                            style = "border-emerald-400 bg-emerald-50 text-emerald-900 font-bold";
                          } else if (isChosen && !isCorrect) {
                            style = "border-red-300 bg-red-50 text-red-900";
                          }
                        } else if (isChosen) {
                          style = "border-teal-500 bg-teal-50 text-teal-900 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                            className={`w-full text-left rounded-xl border p-3 text-xs transition-all flex items-center justify-between ${style}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && isCorrect && (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            )}
                            {quizSubmitted && isChosen && !isCorrect && (
                              <X className="h-4 w-4 text-red-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 rounded-xl bg-slate-50 p-2.5 text-xs text-slate-600 border border-slate-100">
                        <strong>Giải thích:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4">
              {!quizSubmitted ? (
                <Button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(userAnswers).length < quizQuestions.length}
                  className="rounded-xl bg-teal-600 hover:bg-teal-700 text-xs font-bold text-white shadow-xs w-full py-5"
                >
                  Nộp bài &amp; Xem kết quả
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => {
                    setUserAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="rounded-xl text-xs font-bold w-full py-5"
                >
                  <RotateCcw className="mr-2 h-4 w-4" /> Làm lại bài kiểm tra
                </Button>
              )}
            </div>
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
            {quizQuestions.map((q, idx) => (
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
