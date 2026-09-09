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
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/auth/role-context";
import {
  getGrade11UnitBySlug,
  type Grade11VocabItem,
} from "@/lib/curriculum/grade11-data";
import { useVocabProgress } from "@/lib/curriculum/vocab-progress";
import { SpeechPronunciationChecker } from "@/components/SpeechPronunciationChecker";
import { getCollocationsForWord } from "@/lib/curriculum/vocab-collocations";

export default function Grade11UnitDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const unit = useMemo(() => (slug ? getGrade11UnitBySlug(slug) : undefined), [slug]);
  const { user } = useRole();

  const vocabIds = useMemo(() => unit?.vocabulary.map((v) => v.id) || [], [unit]);
  const { records, stats, updateWord } = useVocabProgress(vocabIds, user?.id);

  // 5 Main Tabs matching the clean design in the screenshot
  const [activeTab, setActiveTab] = useState<"vocab" | "grammar" | "reading" | "objectives" | "quiz">("vocab");
  const [vocabSearch, setVocabSearch] = useState("");
  const [flashcardMode, setFlashcardMode] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  // 10 Targeted Quiz Questions (Vocab, Collocations, IPA, Grammar, Topic)
  interface QuizItem {
    question: string;
    sentence?: string;
    options: string[];
    correct: number;
    explanation: string;
  }

  const quizQuestions: QuizItem[] = useMemo(() => {
    const list: QuizItem[] = [];
    const vocabs = unit.vocabulary;

    // 1. First 5 Vocab Meaning Questions
    for (let i = 0; i < Math.min(5, vocabs.length); i++) {
      const v = vocabs[i];
      const otherMeanings = vocabs
        .filter((x) => x.word !== v.word)
        .map((x) => x.meaningVi)
        .slice(0, 3);

      const options = [v.meaningVi, ...otherMeanings].sort(() => 0.5 - Math.random());
      list.push({
        question: `Từ "${v.word}" (${v.partOfSpeech}) có nghĩa là gì?`,
        sentence: v.exampleEn ? `Ngữ cảnh: "${v.exampleEn}"` : undefined,
        options,
        correct: options.indexOf(v.meaningVi),
        explanation: `"${v.word}" mang nghĩa: ${v.meaningVi}.`,
      });
    }

    // 2. Collocation Question (Question 6)
    if (vocabs.length > 0) {
      const targetWord = vocabs[0];
      const collocations = getCollocationsForWord(targetWord.word, targetWord.partOfSpeech);
      if (collocations.length > 0) {
        const correctColloc = collocations[0];
        const fakeCollocs = [
          `make ${targetWord.word} wrongly`,
          `bring ${targetWord.word} false`,
          `give ${targetWord.word} away`,
        ];
        const options = [correctColloc, ...fakeCollocs].sort(() => 0.5 - Math.random());
        list.push({
          question: `Cụm từ (collocation) thường gặp và chính xác với "${targetWord.word}" là gì?`,
          sentence: undefined,
          options,
          correct: options.indexOf(correctColloc),
          explanation: `Cụm từ chuẩn xác được người bản xứ và SGK sử dụng là: "${correctColloc}".`,
        });
      }
    }

    // 3. Pronunciation & IPA Question (Question 7)
    if (vocabs.length > 1) {
      const target = vocabs[1];
      const wrongIPAs = [
        target.ipa.replace(/aʊ/g, "oʊ").replace(/ɔː/g, "ɑː"),
        target.ipa.replace(/ʃ/g, "s").replace(/tʃ/g, "k"),
        `/${target.word.toLowerCase()}/`,
      ];
      const options = [target.ipa, ...wrongIPAs].sort(() => 0.5 - Math.random());
      list.push({
        question: `Phiên âm IPA chuẩn quốc tế của từ "${target.word}" là:`,
        sentence: undefined,
        options,
        correct: options.indexOf(target.ipa),
        explanation: `Phiên âm quốc tế chính xác của "${target.word}" là ${target.ipa}.`,
      });
    }

    // 4. Grammar Questions (Questions 8 & 9)
    list.push({
      question: `Chuyên đề ngữ pháp cốt lõi của bài học này là gì?`,
      sentence: undefined,
      options: [
        unit.grammarTitle,
        "Thì tương lai tiếp diễn và tương lai hoàn thành",
        "Mệnh đề quan hệ không xác định với giới từ",
        "Câu gián tiếp với động từ tường thuật đặc biệt",
      ].sort(() => 0.5 - Math.random()),
      correct: 0,
      explanation: `Chuyên đề ngữ pháp trọng tâm theo phân phối SGK Tiếng Anh 11 là: ${unit.grammarTitle}.`,
    });

    list.push({
      question: `Theo quy tắc ngữ pháp của ${unit.grammarTitle}, câu nào sau đây có cấu trúc chính xác?`,
      sentence: undefined,
      options: [
        "She has lived in this city since 2015 and loves her healthy lifestyle.",
        "She has lived in this city yesterday.",
        "She lives in this city since 2015.",
        "She is living in this city for 10 years ago.",
      ],
      correct: 0,
      explanation: `Dùng thì hiện tại hoàn thành với "since + mốc thời gian" để diễn tả hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại.`,
    });

    // 5. Reading & Real-world Usage (Question 10)
    list.push({
      question: `Chủ đề bài học (Topic) và kỹ năng giao tiếp ứng dụng thực tế là gì?`,
      sentence: undefined,
      options: [
        unit.topic,
        "Art & Ancient Architecture",
        "Space Travel & Galaxies",
        "Extreme Weather Sports",
      ].sort(() => 0.5 - Math.random()),
      correct: 0,
      explanation: `Chủ đề chính xuyên suốt toàn bộ các kỹ năng của bài là: ${unit.topic}.`,
    });

    // Ensure strictly 10 items
    return list.slice(0, 10);
  }, [unit]);

  // Adjust correct index after shuffle
  const finalizedQuizQuestions = useMemo(() => {
    return quizQuestions.map((q) => {
      // If correct choice needs lookup
      if (q.question.includes("Chuyên đề ngữ pháp cốt lõi")) {
        return { ...q, correct: q.options.indexOf(unit.grammarTitle) };
      }
      if (q.question.includes("Chủ đề bài học")) {
        return { ...q, correct: q.options.indexOf(unit.topic) };
      }
      return q;
    });
  }, [quizQuestions, unit]);

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
        {/* TOP HEADER & SEGMENTED TABS BAR (MATCHING USER SCREENSHOT IMAGE 1) */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Left Column: Back button, Unit title, Subtitle with XP */}
            <div>
              <Link
                href="/curriculum/grade-11"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors mb-2"
              >
                <span className="text-slate-400">←</span> Quay lại Danh mục bài học
              </Link>
              <h1 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {unit.isReview ? unit.titleEn : `Unit ${unit.unitNumber}: ${unit.titleEn}`}
              </h1>
              <p className="mt-1.5 text-sm sm:text-base font-semibold text-indigo-600">
                {unit.titleVi} • <span className="font-bold">+100 XP khi hoàn thành</span>
              </p>
            </div>

            {/* Right Column: Segmented Control Tabs */}
            <div className="flex items-center rounded-2xl bg-slate-100/80 p-1.5 overflow-x-auto shrink-0 border border-slate-200/60">
              <button
                onClick={() => setActiveTab("vocab")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "vocab"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Từ vựng (Flashcard)
              </button>

              <button
                onClick={() => setActiveTab("grammar")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "grammar"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Ngữ pháp
              </button>

              <button
                onClick={() => setActiveTab("reading")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "reading"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Đọc hiểu
              </button>

              <button
                onClick={() => setActiveTab("objectives")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "objectives"
                    ? "border border-slate-900 bg-white text-indigo-700 shadow-xs"
                    : "border border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                Mục tiêu
              </button>

              <button
                onClick={() => setActiveTab("quiz")}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
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
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
                Học kỳ {unit.term} • CEFR {unit.cefrLevel}
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-700">
                Chủ đề: {unit.topic}
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
                Đã thuộc: {stats.mastered}/{stats.total} từ ({stats.percent}%)
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrintWorksheet}
              className="rounded-xl text-xs font-bold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
            >
              <Printer className="mr-1.5 h-3.5 w-3.5 text-indigo-600" />
              In phiếu bài tập A4
            </Button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: VOCABULARY & FLASHCARDS (MATCHING SCREENSHOT 2) */}
        {/* ========================================================= */}
        {activeTab === "vocab" && (
          <div>
            {/* View Mode Switcher */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1 shadow-xs">
                <button
                  onClick={() => setFlashcardMode(true)}
                  className={`flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    flashcardMode ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  Thẻ Flashcard mẫu mới
                </button>
                <button
                  onClick={() => setFlashcardMode(false)}
                  className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    !flashcardMode ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Bảng danh sách từ ({unit.vocabulary.length})
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
                    className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* FLASHCARD VIEW */}
            {flashcardMode && currentFlashcard && (
              <div className="mx-auto max-w-2xl py-2">
                {/* Top status bar above card */}
                <div className="mb-3 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>
                    Thẻ từ {currentCardIndex + 1} / {unit.vocabulary.length}
                  </span>
                  <div className="flex items-center gap-2">
                    {records[currentFlashcard.id]?.status === "mastered" && (
                      <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                        <Check className="h-3 w-3" /> Đã thuộc
                      </span>
                    )}
                    <button
                      onClick={() => setHideMeaningForRecall((prev) => !prev)}
                      className="flex items-center gap-1 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
                      title="Bật/tắt chế độ tự kiểm tra trí nhớ"
                    >
                      {hideMeaningForRecall ? (
                        <>
                          <EyeOff className="h-3.5 w-3.5 text-indigo-600" />
                          <span>Đang ẩn nghĩa</span>
                        </>
                      ) : (
                        <>
                          <Eye className="h-3.5 w-3.5 text-indigo-600" />
                          <span>Đang hiện đầy đủ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* THE CUSTOM FLASHCARD CARD (MATCHING USER SCREENSHOT IMAGE 2) */}
                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm transition-all">
                  {/* Row 1: Word + Part of Speech Badge + Speaker Button */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {currentFlashcard.word}
                        </h2>
                        <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
                          {currentFlashcard.partOfSpeech}
                        </span>
                      </div>

                      {/* Row 2: IPA in purple monospace font */}
                      <p className="mt-1.5 font-mono text-sm sm:text-base font-semibold text-purple-600">
                        {currentFlashcard.ipa}
                      </p>
                    </div>

                    {/* Speaker Button on Top Right */}
                    <button
                      onClick={() => playWordAudio(currentFlashcard.word, currentFlashcard.audioUrl)}
                      className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl transition-all cursor-pointer shadow-xs shrink-0 ${
                        isPlayingAudio
                          ? "bg-indigo-600 text-white scale-95 shadow-inner"
                          : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:scale-105"
                      }`}
                      title="Nghe phát âm chuẩn"
                    >
                      <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>

                  {/* Row 3: Nghĩa Box */}
                  <div className="mt-5 rounded-2xl bg-slate-50/80 border border-slate-100 p-4 sm:p-4.5">
                    {hideMeaningForRecall ? (
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-400 italic">
                          Đã ẩn nghĩa — Hãy đoán từ ngữ cảnh bên dưới rồi bấm để xem
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setHideMeaningForRecall(false)}
                          className="text-xs font-bold text-indigo-600 hover:bg-indigo-50"
                        >
                          Hiện nghĩa
                        </Button>
                      </div>
                    ) : (
                      <p className="text-sm sm:text-base leading-relaxed">
                        <span className="font-bold text-slate-900">Nghĩa: </span>
                        <span className="text-indigo-900/90 font-medium">{currentFlashcard.meaningVi}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 4: Example Sentence & Vietnamese Translation */}
                  <div className="mt-5 space-y-1.5">
                    <p className="text-sm sm:text-base italic text-slate-800 font-medium leading-relaxed">
                      &quot;{currentFlashcard.exampleEn || `We practice using ${currentFlashcard.word} in everyday conversation.`}&quot;
                    </p>
                    {currentFlashcard.exampleVi && (
                      <p className="text-xs sm:text-sm text-slate-500 flex items-start gap-1.5 leading-relaxed">
                        <span className="text-slate-400">→</span>
                        <span>{currentFlashcard.exampleVi}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 5: Collocations (Cụm từ hay gặp) */}
                  {cardCollocations.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 shrink-0">Cụm từ hay gặp:</span>
                      <div className="flex flex-wrap gap-2">
                        {cardCollocations.map((colloc, idx) => (
                          <button
                            key={idx}
                            onClick={() => fallbackSpeak(colloc)}
                            className="rounded-xl bg-indigo-50/80 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs px-3 py-1.5 border border-indigo-100/60 transition-colors flex items-center gap-1.5 group cursor-pointer"
                            title="Nhấn để nghe phát âm cụm từ"
                          >
                            <span>{colloc}</span>
                            <Volume2 className="h-3 w-3 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CUSTOM SUPERPOWERS: 5x EAR IMPRINT & SPEECH CHECKER */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                    {/* Ear Imprint Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 rounded-2xl p-3 border border-slate-100">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-slate-700">Luyện nghe (Ear Imprint):</span>
                        <span className="font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                          Đã nghe: {audioListenCount}/5 lần
                        </span>
                      </div>
                      <button
                        onClick={() => playLoopAudio5Times(currentFlashcard.word, currentFlashcard.audioUrl)}
                        disabled={isLoopPlaying}
                        className="text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-white border border-indigo-200 px-3 py-1 rounded-xl shadow-xs hover:bg-indigo-50 transition-colors cursor-pointer"
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
                        className="flex-1 rounded-2xl text-xs font-bold border-amber-200 text-amber-800 hover:bg-amber-50 py-5 cursor-pointer"
                      >
                        <RotateCcw className="mr-1.5 h-4 w-4 text-amber-600" />
                        Cần ôn lại thêm
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => updateWord(currentFlashcard.id, "mastered")}
                        className="flex-1 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs py-5 cursor-pointer"
                      >
                        <Check className="mr-1.5 h-4 w-4" />
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
                      className="rounded-xl text-xs font-bold"
                    >
                      <ChevronLeft className="mr-1 h-4 w-4" /> Từ trước
                    </Button>

                    <span className="text-xs font-bold text-slate-400">
                      Thẻ từ {currentCardIndex + 1} / {unit.vocabulary.length}
                    </span>

                    <Button
                      onClick={() => {
                        if (currentCardIndex < unit.vocabulary.length - 1) {
                          setCurrentCardIndex((i) => i + 1);
                          setAudioListenCount(0);
                        } else {
                          setActiveTab("quiz");
                        }
                      }}
                      className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white shadow-xs"
                    >
                      {currentCardIndex < unit.vocabulary.length - 1 ? (
                        <>
                          Từ tiếp theo <ChevronRight className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        "Làm bài kiểm tra (10 câu)"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* VOCABULARY LIST VIEW (TABLE) */}
            {!flashcardMode && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredVocab.map((v, idx) => {
                  const record = records[v.id];
                  const isMastered = record?.status === "mastered";
                  const isLearning = record?.status === "learning";
                  const collocations = getCollocationsForWord(v.word, v.partOfSpeech);

                  return (
                    <div
                      key={v.id}
                      className={`group flex flex-col justify-between rounded-2xl border p-4 shadow-xs transition-all ${
                        isMastered
                          ? "border-emerald-200 bg-emerald-50/30"
                          : "border-slate-200 bg-white hover:border-indigo-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                              <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {v.word}
                              </h3>
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                                {v.partOfSpeech}
                              </span>
                            </div>
                            <p className="mt-0.5 font-mono text-xs text-purple-600 font-semibold">{v.ipa}</p>
                          </div>

                          <button
                            onClick={() => playWordAudio(v.word, v.audioUrl)}
                            className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:scale-105 transition-all shadow-2xs"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-3 rounded-xl bg-slate-50/80 p-2.5 text-xs text-slate-800 border border-slate-100">
                          <span className="font-bold text-slate-900">Nghĩa: </span>
                          <span>{v.meaningVi}</span>
                        </div>

                        {v.exampleEn && (
                          <div className="mt-2.5 text-[11px] leading-relaxed">
                            <p className="italic text-slate-700">&quot;{v.exampleEn}&quot;</p>
                            {v.exampleVi && <p className="text-slate-400 mt-0.5">→ {v.exampleVi}</p>}
                          </div>
                        )}

                        {collocations.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {collocations.slice(0, 2).map((c, i) => (
                              <span
                                key={i}
                                className="text-[10px] bg-indigo-50/70 text-indigo-700 px-2 py-0.5 rounded-lg border border-indigo-100/50"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px]">
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
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: GRAMMAR FOCUS */}
        {/* ========================================================= */}
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
                <p>Nội dung chi tiết phần ngữ pháp đang được đồng bộ theo chương trình chuẩn SGK.</p>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: READING COMPREHENSION (ĐỌC HIỂU) */}
        {/* ========================================================= */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50/40 p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-800 uppercase tracking-wide">
                <FileText className="h-4 w-4 text-indigo-600" />
                Kỹ năng Đọc hiểu (Reading Comprehension)
              </div>
              <h2 className="font-heading text-xl font-bold text-slate-900 mt-1">
                Chủ đề đọc: {unit.topic} — {unit.titleEn}
              </h2>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Đọc đoạn văn dưới đây trích từ phân mục SGK Reading và hoàn thành các câu hỏi đọc hiểu bên dưới.
              </p>
            </div>

            {/* Reading Passage Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Reading Passage (Section III SGK)
                </span>
                <span className="text-xs font-semibold text-slate-400">Thời gian đọc gợi ý: 3 phút</span>
              </div>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-800 space-y-3">
                <p>
                  Maintaining a long and healthy life requires a combination of good nutrition, regular physical activity, and positive mental habits. In modern society, many families struggle to balance work and daily life. Sharing household chores among family members not only reduces stress but also strengthens family bonds and creates mutual understanding.
                </p>
                <p>
                  Nutritionists emphasize that a balanced diet rich in nutrients and fresh vegetables helps build muscle and protect the immune system. Doctors also warn against the overreliance on antibiotics for common viral infections, as bacteria can develop resistance over time. Regular workouts and sufficient sleep remain the cornerstones of high life expectancy.
                </p>
              </div>

              {/* Comprehension Questions */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="font-heading text-base font-bold text-slate-900">Câu hỏi kiểm tra đọc hiểu:</h3>

                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is one positive benefit of sharing household chores mentioned in the passage?",
                      options: [
                        "A. It reduces stress and strengthens family bonds",
                        "B. It replaces physical exercise entirely",
                        "C. It cures viral infections",
                        "D. It eliminates the need for a balanced diet",
                      ],
                      correct: 0,
                      explanation: "Đoạn văn nêu rõ: 'Sharing household chores among family members not only reduces stress but also strengthens family bonds.'",
                    },
                    {
                      q: "2. Why do doctors warn against the overuse of antibiotics?",
                      options: [
                        "A. Because they cause food poisoning",
                        "B. Because bacteria can develop resistance over time",
                        "C. Because they weaken muscles permanently",
                        "D. Because they are difficult to prescribe",
                      ],
                      correct: 1,
                      explanation: "Đoạn văn chỉ ra: 'bacteria can develop resistance over time'.",
                    },
                  ].map((item, qIdx) => {
                    const selected = readingAnswers[qIdx];
                    return (
                      <div key={qIdx} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                        <p className="font-semibold text-sm text-slate-900 mb-3">{item.q}</p>
                        <div className="space-y-2">
                          {item.options.map((opt, optIdx) => {
                            const isChosen = selected === optIdx;
                            const isCorrect = item.correct === optIdx;
                            let style = "border-slate-200 hover:bg-white text-slate-700 bg-white";
                            if (readingSubmitted) {
                              if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-900 font-bold";
                              else if (isChosen && !isCorrect) style = "border-red-300 bg-red-50 text-red-900";
                            } else if (isChosen) {
                              style = "border-indigo-500 bg-indigo-50 text-indigo-900 font-semibold";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={readingSubmitted}
                                onClick={() => setReadingAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                                className={`w-full text-left rounded-xl border p-3 text-xs transition-all flex items-center justify-between cursor-pointer ${style}`}
                              >
                                <span>{opt}</span>
                                {readingSubmitted && isCorrect && (
                                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                        {readingSubmitted && (
                          <p className="mt-2.5 text-xs text-indigo-800 bg-indigo-50 p-2 rounded-xl border border-indigo-100">
                            <strong>Giải thích:</strong> {item.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2">
                  {!readingSubmitted ? (
                    <Button
                      onClick={() => setReadingSubmitted(true)}
                      className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white shadow-xs px-6 py-2.5"
                    >
                      Kiểm tra đáp án Đọc hiểu
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setReadingAnswers({});
                        setReadingSubmitted(false);
                      }}
                      className="rounded-xl text-xs font-bold"
                    >
                      <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Làm lại phần đọc hiểu
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: LEARNING OBJECTIVES (MỤC TIÊU) */}
        {/* ========================================================= */}
        {activeTab === "objectives" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                <Target className="h-4 w-4 text-emerald-600" />
                Chuẩn đầu ra &amp; Mục tiêu bài học (Learning Objectives)
              </div>
              <h2 className="font-heading text-xl font-bold text-slate-900 mt-1">
                Khung năng lực Unit {unit.unitNumber}: {unit.titleEn}
              </h2>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Được thiết kế bám sát chuẩn Chương trình GDPT 2018 và khung tham chiếu CEFR {unit.cefrLevel}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Objective 1: Vocabulary */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-2">
                  <Layers className="h-4 w-4 text-indigo-600" />
                  1. Năng lực Từ vựng (Lexical Competence)
                </div>
                <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                  <li>
                    Ghi nhớ và sử dụng thành thạo <strong>{unit.vocabulary.length} từ vựng</strong> chủ đề {unit.topic}.
                  </li>
                  <li>Nhận biết và vận dụng chính xác các cụm từ (collocations) thường gặp.</li>
                  <li>Phát âm chuẩn IPA, đạt điểm kiểm tra AI ≥ 80%.</li>
                </ul>
              </div>

              {/* Objective 2: Grammar */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                  <Zap className="h-4 w-4 text-amber-600" />
                  2. Năng lực Ngữ pháp (Grammar Mastery)
                </div>
                <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                  <li>
                    Hiểu sâu bản chất cấu trúc: <strong>{unit.grammarTitle}</strong>.
                  </li>
                  <li>Phân biệt dấu hiệu nhận biết và ngữ cảnh sử dụng thực tế.</li>
                  <li>Áp dụng giải đúng 100% câu hỏi trắc nghiệm ngữ pháp tốt nghiệp THPT.</li>
                </ul>
              </div>

              {/* Objective 3: Four Skills */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
                  <BookOpen className="h-4 w-4 text-teal-600" />
                  3. Bốn Kỹ năng Nghe - Nói - Đọc - Viết
                </div>
                <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc list-inside">
                  <li>Thấm âm tối thiểu 5 lần trước khi nói theo phương pháp Ear-First.</li>
                  <li>Đọc hiểu văn bản học thuật chủ đề {unit.topic}.</li>
                  <li>Tự tin trình bày quan điểm cá nhân trong các bài Speaking &amp; Writing.</li>
                </ul>
              </div>

              {/* Objective 4: Gamification & Rewards */}
              <div className="rounded-3xl border border-purple-200 bg-purple-50/50 p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-800 uppercase tracking-wider mb-2">
                  <Award className="h-4 w-4 text-purple-600" />
                  4. Phần thưởng hoàn thành bài học
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Khi hoàn thành đủ thẻ Flashcard và đạt ≥ 80% điểm bài Kiểm tra (10 câu), học sinh sẽ nhận ngay:
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-xl bg-purple-600 text-white font-black text-sm px-3.5 py-1.5 shadow-xs">
                    +100 XP Thưởng
                  </span>
                  <span className="text-xs font-semibold text-purple-700">
                    Huy hiệu Master Unit {unit.unitNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: PRACTICE QUIZ (KIỂM TRA 10 CÂU) */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="mx-auto max-w-2xl py-4 space-y-6">
            <div className="flex items-center justify-between rounded-3xl bg-indigo-50 p-5 border border-indigo-100">
              <div>
                <h3 className="font-heading text-base font-bold text-indigo-950">Kiểm tra củng cố kiến thức</h3>
                <p className="text-xs text-indigo-700">Luyện tập 10 câu hỏi bao quát Từ vựng, Collocations, IPA &amp; Ngữ pháp</p>
              </div>
              {quizSubmitted ? (
                <div className="text-right">
                  <span className="text-2xl font-black text-indigo-700">
                    {quizScore}/10
                  </span>
                  <span className="block text-[10px] font-bold uppercase text-indigo-600">Điểm số</span>
                </div>
              ) : (
                <span className="text-xs font-bold text-indigo-600 bg-white px-3 py-1.5 rounded-xl border border-indigo-200 shadow-2xs">
                  Mục tiêu: +100 XP
                </span>
              )}
            </div>

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {finalizedQuizQuestions.map((q, qIdx) => {
                const selected = userAnswers[qIdx];
                return (
                  <div
                    key={qIdx}
                    className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                        Câu {qIdx + 1} / 10
                      </span>
                    </div>

                    <p className="font-heading text-sm font-bold text-slate-900 leading-relaxed">{q.question}</p>
                    {q.sentence && (
                      <p className="mt-1.5 text-xs italic text-slate-500">{q.sentence}</p>
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
                          style = "border-indigo-600 bg-indigo-50/70 text-indigo-900 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                            className={`w-full text-left rounded-2xl border p-3.5 text-xs transition-all flex items-center justify-between cursor-pointer ${style}`}
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
                      <div className="mt-3.5 rounded-2xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100">
                        <strong className="text-slate-800">Giải thích: </strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Action Buttons */}
            <div className="pt-2">
              {!quizSubmitted ? (
                <Button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(userAnswers).length < finalizedQuizQuestions.length}
                  className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white shadow-xs w-full py-5 cursor-pointer"
                >
                  Nộp bài &amp; Nhận kết quả
                </Button>
              ) : (
                <div className="space-y-3">
                  {quizScore >= 8 && (
                    <div className="rounded-2xl bg-emerald-50 p-4 border border-emerald-200 text-center">
                      <p className="text-sm font-bold text-emerald-900">
                        🎉 Xuất sắc! Bạn đã đạt {quizScore}/10 điểm và nhận thành công +100 XP!
                      </p>
                    </div>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => {
                      setUserAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="rounded-2xl text-xs font-bold w-full py-5 cursor-pointer"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Làm lại bài kiểm tra
                  </Button>
                </div>
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
