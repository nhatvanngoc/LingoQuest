"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Volume2,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Search,
  BookOpen,
  Info,
  Check,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveReadingStudioProps {
  unitNumber: number;
  titleEn: string;
  topic: string;
}

interface VocabLookup {
  word: string;
  pos: string;
  ipa: string;
  meaning: string;
}

const VOCAB_LOOKUP_MAP: Record<string, VocabLookup> = {
  "household chores": {
    word: "household chores",
    pos: "noun phrase",
    ipa: "/ˈhaʊshəʊld tʃɔːz/",
    meaning: "Công việc nhà, việc vặt gia đình (nấu ăn, rửa chén, dọn dẹp...)",
  },
  "balanced diet": {
    word: "balanced diet",
    pos: "noun phrase",
    ipa: "/ˈbælənst ˈdaɪət/",
    meaning: "Chế độ ăn uống cân bằng, khoa học đầy đủ dưỡng chất",
  },
  "antibiotics": {
    word: "antibiotics",
    pos: "noun (plural)",
    ipa: "/ˌæntibaɪˈɒtɪks/",
    meaning: "Thuốc kháng sinh (chỉ có tác dụng diệt vi khuẩn, không diệt virus)",
  },
  "immune system": {
    word: "immune system",
    pos: "noun phrase",
    ipa: "/ɪˈmjuːn ˈsɪstəm/",
    meaning: "Hệ miễn dịch, cơ chế phòng vệ chống lại bệnh tật của cơ thể",
  },
  "life expectancy": {
    word: "life expectancy",
    pos: "noun phrase",
    ipa: "/ˈlaɪf ɪkˌspektənsi/",
    meaning: "Tuổi thọ dự tính trung bình của con người",
  },
};

export function InteractiveReadingStudio({
  unitNumber,
  titleEn,
  topic,
}: InteractiveReadingStudioProps) {
  // Reading audio player state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [highlightedClueIndex, setHighlightedClueIndex] = useState<number | null>(null);

  // Inspected word popover
  const [activeVocab, setActiveVocab] = useState<VocabLookup | null>(null);

  // Comprehension answers
  const [readingAnswers, setReadingAnswers] = useState<Record<number, number>>({});
  const [readingSubmitted, setReadingSubmitted] = useState(false);

  const fullPassageText = `Maintaining a long and healthy life requires a combination of good nutrition, regular physical activity, and positive mental habits. In modern society, many families struggle to balance work and daily life. Sharing household chores among family members not only reduces stress but also strengthens family bonds and creates mutual understanding. Nutritionists emphasize that a balanced diet rich in nutrients and fresh vegetables helps build muscle and protect the immune system. Doctors also warn against the overreliance on antibiotics for common viral infections, as bacteria can develop resistance over time. Regular workouts and sufficient sleep remain the cornerstones of high life expectancy.`;

  const handleTogglePlayAudio = () => {
    if (isPlayingAudio) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(fullPassageText);
        utter.lang = "en-US";
        utter.rate = 0.85;
        utter.onend = () => setIsPlayingAudio(false);
        utter.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utter);
        setIsPlayingAudio(true);
      }
    }
  };

  const playWordAudio = (word: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(word);
      utter.lang = "en-US";
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
    }
  };

  const questions = [
    {
      q: "1. What is one positive benefit of sharing household chores mentioned in the passage?",
      options: [
        "A. It reduces stress and strengthens family bonds",
        "B. It replaces physical exercise entirely",
        "C. It cures common viral infections",
        "D. It eliminates the need for a balanced diet",
      ],
      correct: 0,
      clueSentenceIndex: 2, // sentence 3 in paragraph 1
      explanation: "Đoạn 1 nêu rõ: 'Sharing household chores among family members not only reduces stress but also strengthens family bonds.'",
    },
    {
      q: "2. Why do doctors warn against the overuse of antibiotics?",
      options: [
        "A. Because they cause food poisoning immediately",
        "B. Because bacteria can develop resistance over time",
        "C. Because they weaken muscles permanently",
        "D. Because they are expensive to produce",
      ],
      correct: 1,
      clueSentenceIndex: 4, // sentence 2 in paragraph 2
      explanation: "Đoạn 2 chỉ ra: 'bacteria can develop resistance over time' (vi khuẩn có thể phát triển khả năng kháng thuốc).",
    },
    {
      q: "3. What are considered the cornerstones of high life expectancy in the text?",
      options: [
        "A. Fast food and long screen time",
        "B. Over-the-counter medicine and staying indoors",
        "C. Regular workouts and sufficient sleep",
        "D. Extreme dieting and skipping meals",
      ],
      correct: 2,
      clueSentenceIndex: 5, // final sentence
      explanation: "Câu cuối cùng khẳng định: 'Regular workouts and sufficient sleep remain the cornerstones of high life expectancy.'",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Reading Studio Header */}
      <div className="rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/80 via-white to-indigo-50/40 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-800 px-3.5 py-1.5 text-xs sm:text-sm font-bold border border-indigo-200">
              <FileText className="h-4 w-4 text-indigo-600" />
              Kỹ năng Đọc hiểu thông minh • Section III SGK
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-2.5">
              Living a Long and Healthy Life
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 font-medium">
              Bí quyết trường thọ và rèn luyện thể chất • Chạm vào cụm từ được gạch chân để tra nghĩa tức thì!
            </p>
          </div>

          {/* Audio Player for Reading Passage */}
          <button
            onClick={handleTogglePlayAudio}
            className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm sm:text-base font-bold transition-all shadow-xs shrink-0 cursor-pointer ${
              isPlayingAudio
                ? "bg-indigo-600 text-white shadow-indigo-200 animate-pulse"
                : "bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-200"
            }`}
          >
            <Volume2 className="h-5 w-5" />
            <span>{isPlayingAudio ? "Đang đọc bài (Dừng ⏸)" : "Nghe toàn bài đọc 🎧"}</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Passage Card with Click-to-Inspect Vocabulary */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-xs relative">
        <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-slate-100">
          <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">
            Văn bản bài đọc chuẩn SGK
          </span>
          <span className="text-xs sm:text-sm text-indigo-700 font-bold bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            💡 Gợi ý: Bấm vào cụm từ màu tím để xem giải nghĩa
          </span>
        </div>

        {/* The Text with Interactive Word Chips - Enlarged for Comfort */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose text-slate-800 space-y-5">
          <p className={`${highlightedClueIndex === 0 ? "bg-amber-50 rounded-2xl p-3 sm:p-4 transition-all" : ""}`}>
            Maintaining a long and healthy life requires a combination of good nutrition, regular physical activity, and positive mental habits. In modern society, many families struggle to balance work and daily life.
          </p>

          <p className={`${highlightedClueIndex === 2 ? "bg-amber-100/90 rounded-2xl p-3 sm:p-4 border-l-4 border-amber-500 font-medium transition-all" : ""}`}>
            Sharing{" "}
            <button
              onClick={() => setActiveVocab(VOCAB_LOOKUP_MAP["household chores"])}
              className="font-bold text-purple-800 bg-purple-100/70 hover:bg-purple-200/80 px-2.5 py-1 rounded-xl border border-purple-300 cursor-pointer transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              <span>household chores</span>
              <span className="text-xs">🔍</span>
            </button>{" "}
            among family members not only reduces stress but also strengthens family bonds and creates mutual understanding.
          </p>

          <p className={`${highlightedClueIndex === 4 ? "bg-amber-100/90 rounded-2xl p-3 sm:p-4 border-l-4 border-amber-500 font-medium transition-all" : ""}`}>
            Nutritionists emphasize that a{" "}
            <button
              onClick={() => setActiveVocab(VOCAB_LOOKUP_MAP["balanced diet"])}
              className="font-bold text-purple-800 bg-purple-100/70 hover:bg-purple-200/80 px-2.5 py-1 rounded-xl border border-purple-300 cursor-pointer transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              <span>balanced diet</span>
              <span className="text-xs">🔍</span>
            </button>{" "}
            rich in nutrients and fresh vegetables helps build muscle and protect the{" "}
            <button
              onClick={() => setActiveVocab(VOCAB_LOOKUP_MAP["immune system"])}
              className="font-bold text-purple-800 bg-purple-100/70 hover:bg-purple-200/80 px-2.5 py-1 rounded-xl border border-purple-300 cursor-pointer transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              <span>immune system</span>
              <span className="text-xs">🔍</span>
            </button>
            . Doctors also warn against the overreliance on{" "}
            <button
              onClick={() => setActiveVocab(VOCAB_LOOKUP_MAP["antibiotics"])}
              className="font-bold text-purple-800 bg-purple-100/70 hover:bg-purple-200/80 px-2.5 py-1 rounded-xl border border-purple-300 cursor-pointer transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              <span>antibiotics</span>
              <span className="text-xs">🔍</span>
            </button>{" "}
            for common viral infections, as bacteria can develop resistance over time.
          </p>

          <p className={`${highlightedClueIndex === 5 ? "bg-amber-100/90 rounded-2xl p-3 sm:p-4 border-l-4 border-amber-500 font-medium transition-all" : ""}`}>
            Regular workouts and sufficient sleep remain the cornerstones of high{" "}
            <button
              onClick={() => setActiveVocab(VOCAB_LOOKUP_MAP["life expectancy"])}
              className="font-bold text-purple-800 bg-purple-100/70 hover:bg-purple-200/80 px-2.5 py-1 rounded-xl border border-purple-300 cursor-pointer transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              <span>life expectancy</span>
              <span className="text-xs">🔍</span>
            </button>
            .
          </p>
        </div>

        {/* Quick Popover for Inspected Vocabulary */}
        <AnimatePresence>
          {activeVocab && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-8 rounded-2xl bg-indigo-950 text-white p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-indigo-800"
            >
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="font-heading text-xl sm:text-2xl font-black text-amber-300">{activeVocab.word}</span>
                  <span className="rounded-lg bg-white/15 px-2.5 py-1 text-xs sm:text-sm font-semibold text-slate-200">
                    {activeVocab.pos}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-purple-300">{activeVocab.ipa}</span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {activeVocab.meaning}
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <Button
                  size="sm"
                  onClick={() => playWordAudio(activeVocab.word)}
                  className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold py-2.5 px-4"
                >
                  <Volume2 className="h-4 w-4 mr-1.5" /> Nghe từ
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setActiveVocab(null)}
                  className="rounded-xl text-xs sm:text-sm text-slate-300 hover:text-white"
                >
                  Đóng ✕
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Comprehension Questions with Clue Highlighting */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
            Câu Hỏi Đọc Hiểu &amp; Manh Mối (Comprehension Check)
          </h3>
          <span className="text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            3 Câu hỏi cốt lõi
          </span>
        </div>

        <div className="space-y-5">
          {questions.map((item, qIdx) => {
            const selected = readingAnswers[qIdx];
            return (
              <div key={qIdx} className="rounded-3xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <p className="font-heading text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                    {item.q}
                  </p>
                  <button
                    onClick={() => {
                      setHighlightedClueIndex(
                        highlightedClueIndex === item.clueSentenceIndex ? null : item.clueSentenceIndex
                      );
                    }}
                    className="text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition-colors shrink-0 cursor-pointer border border-indigo-200/70"
                  >
                    💡 {highlightedClueIndex === item.clueSentenceIndex ? "Ẩn manh mối" : "Xem manh mối"}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {item.options.map((opt, optIdx) => {
                    const isChosen = selected === optIdx;
                    const isCorrect = item.correct === optIdx;
                    let style = "border-slate-200 bg-white text-slate-700 hover:bg-slate-50";

                    if (readingSubmitted) {
                      if (isCorrect) style = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold shadow-xs";
                      else if (isChosen && !isCorrect) style = "border-red-300 bg-red-50 text-red-900";
                    } else if (isChosen) {
                      style = "border-indigo-600 bg-indigo-50 text-indigo-950 font-bold shadow-xs";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={readingSubmitted}
                        onClick={() => setReadingAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                        className={`w-full text-left rounded-2xl border p-3.5 sm:p-4 text-sm sm:text-base transition-all flex items-center justify-between cursor-pointer ${style}`}
                      >
                        <span className="leading-relaxed">{opt}</span>
                        {readingSubmitted && isCorrect && (
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {readingSubmitted && (
                  <div className="mt-4 rounded-2xl bg-indigo-50/80 p-3.5 sm:p-4 text-xs sm:text-sm text-indigo-950 border border-indigo-100 leading-relaxed">
                    <strong className="text-indigo-900">💡 Lời giải chi tiết: </strong> {item.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-2">
          {!readingSubmitted ? (
            <Button
              onClick={() => setReadingSubmitted(true)}
              disabled={Object.keys(readingAnswers).length === 0}
              className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base px-7 py-3 sm:py-3.5 shadow-xs cursor-pointer"
            >
              Kiểm tra đáp án Đọc hiểu
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                setReadingAnswers({});
                setReadingSubmitted(false);
                setHighlightedClueIndex(null);
              }}
              className="rounded-2xl text-sm sm:text-base font-bold cursor-pointer py-3 px-6"
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Làm lại bài đọc hiểu
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
