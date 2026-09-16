"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Volume2,
  Sparkles,
  ArrowRight,
  BookOpen,
  MessageSquare,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getUnitExerciseData,
  type SentenceTransformationItem,
  type ErrorIdentificationItem,
  type SentenceUnscrambleItem,
  type CommunicativePatternItem,
} from "@/lib/curriculum/exercise-bank";

export interface MultiExerciseStudioProps {
  unitSlug: string;
  unitTitle?: string;
  unitNumber?: number;
  titleEn?: string;
  topic?: string;
  grade?: number;
  onComplete?: () => void;
}

export function MultiExerciseStudio({
  unitSlug,
  unitTitle,
  unitNumber,
  titleEn,
  topic,
  grade,
  onComplete,
}: MultiExerciseStudioProps) {
  const exerciseData = getUnitExerciseData(unitSlug);

  const [activeMode, setActiveMode] = useState<"transform" | "errors" | "unscramble" | "speaking">("transform");

  // State for Sentence Transformation
  const [transformInputs, setTransformInputs] = useState<Record<number, string>>({});
  const [transformChecked, setTransformChecked] = useState<Record<number, boolean>>({});

  // State for Error Spotting
  const [selectedErrors, setSelectedErrors] = useState<Record<number, "A" | "B" | "C" | "D">>({});
  const [errorChecked, setErrorChecked] = useState<Record<number, boolean>>({});

  // State for Unscramble
  const [unscramblePicked, setUnscramblePicked] = useState<Record<number, string[]>>({});
  const [unscrambleChecked, setUnscrambleChecked] = useState<Record<number, boolean>>({});

  // Audio helper
  const playAudio = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "en-US";
      utter.rate = 0.88;
      window.speechSynthesis.speak(utter);
    }
  };

  const cleanText = (str: string) => str.trim().toLowerCase().replace(/[.,!?;:]/g, "");

  return (
    <div className="space-y-6">
      {/* 1. Header Card */}
      <div className="rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/50 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-800 px-3.5 py-1.5 text-xs sm:text-sm font-bold border border-indigo-200">
              <PenTool className="h-4 w-4 text-indigo-600" />
              Phòng Luyện Bài Tập Đa Dạng & Mẫu Câu Giao Tiếp • {unitTitle || (unitNumber ? `Unit ${unitNumber}` : (grade ? `Lớp ${grade}` : "Luyện tập"))}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2.5">
              {exerciseData.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Rèn luyện 4 dạng bài tập cốt lõi chuẩn định dạng thi THPT: Viết lại câu, Tìm lỗi sai 4 phần gạch chân, Sắp xếp câu và Mẫu câu giao tiếp đàm thoại.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/70 gap-1 shrink-0">
            <button
              onClick={() => setActiveMode("transform")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeMode === "transform"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🔄 Viết lại câu
            </button>
            <button
              onClick={() => setActiveMode("errors")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeMode === "errors"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ❌ Tìm lỗi sai
            </button>
            <button
              onClick={() => setActiveMode("unscramble")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeMode === "unscramble"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🧩 Sắp xếp từ
            </button>
            <button
              onClick={() => setActiveMode("speaking")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeMode === "speaking"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🗣️ Mẫu câu giao tiếp
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODE 1: SENTENCE TRANSFORMATION (VIẾT LẠI CÂU) */}
      {/* ========================================================= */}
      {activeMode === "transform" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs sm:text-sm font-bold text-indigo-600 uppercase tracking-wider block">
                  Dạng bài tập 1 / 4:
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 mt-1">
                  Viết lại câu sao cho nghĩa không đổi (Sentence Transformation)
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {exerciseData.transformations.length} câu luyện tập
              </span>
            </div>

            <div className="space-y-6">
              {exerciseData.transformations.map((item) => {
                const userVal = transformInputs[item.id] || "";
                const isChecked = transformChecked[item.id];
                const fullAttempt = `${item.startingPhrase} ${userVal}`.trim();
                const isCorrect =
                  cleanText(fullAttempt) === cleanText(item.correctAnswer) ||
                  (item.acceptableAnswers &&
                    item.acceptableAnswers.some((ans) => cleanText(fullAttempt) === cleanText(ans)));

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200/80 p-5 sm:p-6 bg-slate-50/50 space-y-4 hover:border-indigo-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="h-7 w-7 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {item.id}
                      </span>
                      <div className="space-y-1">
                        <span className="text-2xs sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Câu gốc:</span>
                        <p className="text-sm sm:text-base font-semibold text-slate-900 italic">
                          &quot;{item.originalSentence}&quot;
                        </p>
                      </div>
                    </div>

                    {/* Hint pill */}
                    <div className="inline-flex items-center gap-1.5 rounded-xl bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900 border border-amber-200/80">
                      <Lightbulb className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span><strong>Gợi ý:</strong> {item.hint}</span>
                    </div>

                    {/* Input box */}
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-mono font-bold text-sm sm:text-base text-indigo-700 shrink-0 bg-indigo-50 px-3 py-2 rounded-xl border border-indigo-200">
                          {item.startingPhrase} ...
                        </span>
                        <input
                          type="text"
                          value={userVal}
                          disabled={isChecked}
                          onChange={(e) =>
                            setTransformInputs((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          placeholder="Viết tiếp phần còn lại của câu..."
                          className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm sm:text-base focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                        />
                      </div>

                      {!isChecked ? (
                        <Button
                          size="sm"
                          disabled={!userVal.trim()}
                          onClick={() => setTransformChecked((prev) => ({ ...prev, [item.id]: true }))}
                          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 mt-2 cursor-pointer shadow-xs"
                        >
                          Kiểm tra câu này
                        </Button>
                      ) : (
                        <div className="space-y-3 pt-2">
                          <div
                            className={`p-3.5 rounded-2xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                              isCorrect
                                ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium"
                                : "bg-red-50 border-red-200 text-red-950"
                            }`}
                          >
                            {isCorrect ? (
                              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                            )}
                            <div>
                              <p className="font-bold">
                                {isCorrect ? "Chính xác! Câu viết lại chuẩn ngữ pháp:" : "Chưa hoàn toàn chính xác. Đáp án chuẩn mực là:"}
                              </p>
                              <p className="font-mono font-bold text-slate-900 mt-1">
                                {item.correctAnswer}
                              </p>
                            </div>
                          </div>

                          <div className="rounded-2xl bg-indigo-50/80 p-3.5 border border-indigo-100 text-xs sm:text-sm text-indigo-900">
                            💡 <strong>Giải thích sư phạm:</strong> {item.explanation}
                          </div>

                          <button
                            onClick={() => {
                              setTransformChecked((prev) => ({ ...prev, [item.id]: false }));
                              setTransformInputs((prev) => ({ ...prev, [item.id]: "" }));
                            }}
                            className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="h-3 w-3" /> Làm lại câu này
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 2: ERROR SPOTTER (TÌM LỖI SAI GẠCH CHÂN A, B, C, D) */}
      {/* ========================================================= */}
      {activeMode === "errors" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-wider block">
                  Dạng bài tập 2 / 4:
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 mt-1">
                  Tìm và sửa lỗi sai trong 4 phần gạch chân (Error Identification)
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Chuẩn cấu trúc THPT Quốc Gia
              </span>
            </div>

            <div className="space-y-6">
              {exerciseData.errorIdentifications.map((item) => {
                const picked = selectedErrors[item.id];
                const isChecked = errorChecked[item.id];
                const isRight = picked === item.correctError;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200/80 p-5 sm:p-6 bg-slate-50/50 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="h-7 w-7 rounded-xl bg-rose-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {item.id}
                      </span>
                      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                        Hãy chọn vị trí [A], [B], [C] hoặc [D] bị sai ngữ pháp:
                      </p>
                    </div>

                    {/* Sentence with underlined segments */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-base sm:text-lg text-slate-800 leading-loose">
                      {item.sentence}
                    </div>

                    {/* Clickable 4 options */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {item.segments.map((seg) => {
                        const isChosen = picked === seg.key;
                        let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-100";
                        if (isChecked) {
                          if (seg.key === item.correctError) {
                            btnStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-200";
                          } else if (isChosen && seg.key !== item.correctError) {
                            btnStyle = "bg-slate-100 border-slate-300 text-slate-400 line-through";
                          }
                        } else if (isChosen) {
                          btnStyle = "bg-indigo-50 border-indigo-500 text-indigo-900 font-bold";
                        }

                        return (
                          <button
                            key={seg.key}
                            disabled={isChecked}
                            onClick={() => setSelectedErrors((prev) => ({ ...prev, [item.id]: seg.key }))}
                            className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${btnStyle}`}
                          >
                            <span className="font-black mr-1.5">[{seg.key}]</span>
                            <span>{seg.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {!isChecked ? (
                      <Button
                        size="sm"
                        disabled={!picked}
                        onClick={() => setErrorChecked((prev) => ({ ...prev, [item.id]: true }))}
                        className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2 cursor-pointer shadow-xs"
                      >
                        Kiểm tra vị trí sai
                      </Button>
                    ) : (
                      <div className="space-y-3 pt-2">
                        <div
                          className={`p-3.5 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                            isRight
                              ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium"
                              : "bg-red-50 border-red-200 text-red-950"
                          }`}
                        >
                          <p className="font-bold">
                            {isRight ? "🎉 Bạn đã phát hiện chính xác lỗi sai!" : "Chưa chính xác!"}
                          </p>
                          <p className="mt-1">
                            Vị trí sai là: <strong className="text-rose-600">[{item.correctError}]</strong> ➔ Sửa lại đúng thành:{" "}
                            <strong className="text-emerald-700 font-mono text-sm">{item.correction}</strong>
                          </p>
                        </div>

                        <div className="rounded-2xl bg-indigo-50/80 p-3.5 border border-indigo-100 text-xs sm:text-sm text-indigo-900">
                          💡 <strong>Phân tích lý do:</strong> {item.explanation}
                        </div>

                        <button
                          onClick={() => {
                            setErrorChecked((prev) => ({ ...prev, [item.id]: false }));
                            setSelectedErrors((prev) => {
                              const copy = { ...prev };
                              delete copy[item.id];
                              return copy;
                            });
                          }}
                          className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="h-3 w-3" /> Thử lại
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 3: SENTENCE UNSCRAMBLER (SẮP XẾP TỪ THÀNH CÂU) */}
      {/* ========================================================= */}
      {activeMode === "unscramble" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider block">
                  Dạng bài tập 3 / 4:
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 mt-1">
                  Sắp xếp các từ xáo trộn thành câu hoàn chỉnh (Sentence Unscramble)
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Tư duy cấu trúc ngữ pháp
              </span>
            </div>

            <div className="space-y-6">
              {exerciseData.sentenceUnscrambles.map((item) => {
                const pickedWords = unscramblePicked[item.id] || [];
                const isChecked = unscrambleChecked[item.id];
                const assembledSentence = pickedWords.join(" ");
                const isCorrect = cleanText(assembledSentence) === cleanText(item.correctSentence);

                // Words still available to pick
                const remainingWords = [...item.jumbledWords];
                pickedWords.forEach((w) => {
                  const idx = remainingWords.indexOf(w);
                  if (idx !== -1) remainingWords.splice(idx, 1);
                });

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200/80 p-5 sm:p-6 bg-slate-50/50 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="h-7 w-7 rounded-xl bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {item.id}
                      </span>
                      <div>
                        <span className="text-2xs sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Ý nghĩa cần diễn đạt:
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-slate-900">
                          &quot;{item.translationVi}&quot;
                        </p>
                      </div>
                    </div>

                    {/* Assembled Sentence Box */}
                    <div className="min-h-[56px] rounded-2xl bg-white border-2 border-dashed border-slate-300 p-3.5 flex flex-wrap items-center gap-2">
                      {pickedWords.length === 0 ? (
                        <span className="text-xs sm:text-sm text-slate-400 italic">
                          Bấm vào các từ bên dưới để ghép câu theo thứ tự đúng...
                        </span>
                      ) : (
                        pickedWords.map((word, wIdx) => (
                          <button
                            key={wIdx}
                            disabled={isChecked}
                            onClick={() => {
                              setUnscramblePicked((prev) => ({
                                ...prev,
                                [item.id]: pickedWords.filter((_, idx) => idx !== wIdx),
                              }));
                            }}
                            className="rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm px-3 py-1.5 shadow-2xs hover:bg-indigo-700 cursor-pointer transition-all"
                            title="Bấm để gỡ từ này"
                          >
                            {word}
                          </button>
                        ))
                      )}
                    </div>

                    {/* Available Jumbled Word Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {remainingWords.map((word, idx) => (
                        <button
                          key={idx}
                          disabled={isChecked}
                          onClick={() => {
                            setUnscramblePicked((prev) => ({
                              ...prev,
                              [item.id]: [...pickedWords, word],
                            }));
                          }}
                          className="rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-medium text-xs sm:text-sm px-3 py-1.5 shadow-2xs hover:bg-indigo-50 cursor-pointer transition-all"
                        >
                          {word}
                        </button>
                      ))}
                    </div>

                    {!isChecked ? (
                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          size="sm"
                          disabled={remainingWords.length > 0}
                          onClick={() => setUnscrambleChecked((prev) => ({ ...prev, [item.id]: true }))}
                          className="rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 cursor-pointer shadow-xs"
                        >
                          Kiểm tra thứ tự câu
                        </Button>
                        {pickedWords.length > 0 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setUnscramblePicked((prev) => ({ ...prev, [item.id]: [] }))}
                            className="rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800"
                          >
                            Xóa hết làm lại
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3 pt-2">
                        <div
                          className={`p-3.5 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                            isCorrect
                              ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium"
                              : "bg-red-50 border-red-200 text-red-950"
                          }`}
                        >
                          <p className="font-bold">
                            {isCorrect ? "Tuyệt vời! Bạn đã sắp xếp câu hoàn toàn chính xác:" : "Thứ tự từ chưa chính xác. Câu hoàn chỉnh là:"}
                          </p>
                          <p className="font-mono font-bold text-slate-900 mt-1">
                            {item.correctSentence}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-amber-50/80 p-3.5 border border-amber-100 text-xs sm:text-sm text-amber-950">
                          📌 <strong>Cấu trúc ngữ pháp trọng tâm:</strong> {item.grammarFocus}
                          <p className="mt-1 text-slate-700">{item.explanation}</p>
                        </div>

                        <button
                          onClick={() => {
                            setUnscrambleChecked((prev) => ({ ...prev, [item.id]: false }));
                            setUnscramblePicked((prev) => ({ ...prev, [item.id]: [] }));
                          }}
                          className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="h-3 w-3" /> Thử lại
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 4: COMMUNICATIVE SPEAKING PATTERNS (MẪU CÂU GIAO TIẾP) */}
      {/* ========================================================= */}
      {activeMode === "speaking" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block">
                  Dạng bài tập 4 / 4:
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-black text-slate-900 mt-1">
                  Mẫu câu đàm thoại &amp; Giao tiếp phản xạ theo chủ đề bài học
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Luyện nói Shadowing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {exerciseData.communicativePatterns.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50 space-y-3.5 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-emerald-100 text-emerald-900 text-[11px] font-black uppercase px-2.5 py-1">
                        Mẫu #{item.id}
                      </span>
                      <button
                        onClick={() => playAudio(item.dialogueEn)}
                        className="flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-white border border-emerald-200 px-3 py-1 rounded-xl shadow-2xs cursor-pointer hover:bg-emerald-50"
                        title="Nghe hội thoại mẫu"
                      >
                        <Volume2 className="h-3.5 w-3.5" /> Nghe đọc
                      </button>
                    </div>

                    <h4 className="font-heading font-black text-base sm:text-lg text-slate-900">
                      &quot;{item.pattern}&quot;
                    </h4>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 font-mono text-xs font-bold text-indigo-700">
                      {item.structure}
                    </div>

                    <div className="space-y-1 pt-1 text-xs sm:text-sm leading-relaxed">
                      <p className="font-semibold text-slate-900 italic">
                        {item.dialogueEn}
                      </p>
                      <p className="text-slate-600">
                        {item.dialogueVi}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                    🎯 <strong>Ngữ cảnh ứng dụng:</strong> {item.usageContext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
