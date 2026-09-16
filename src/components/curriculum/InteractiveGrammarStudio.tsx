"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Volume2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check,
  X,
  Layers,
  BookOpen,
  Award,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGrammarTopicData } from "@/lib/curriculum/grammar-bank";

interface InteractiveGrammarStudioProps {
  unitNumber: number;
  grammarTitle: string;
  grammarSummary: string;
  topic: string;
  grammarHtml?: string;
}

export function InteractiveGrammarStudio({
  unitNumber,
  grammarTitle,
  grammarSummary,
  topic,
  grammarHtml,
}: InteractiveGrammarStudioProps) {
  // Look up comprehensive grammar data for this specific topic
  const grammarData = getGrammarTopicData(grammarTitle || grammarSummary);

  // Active View Tab inside Grammar Studio
  const [grammarView, setGrammarView] = useState<"comparison" | "formulas" | "signals" | "minicheck" | "textbook">("comparison");

  // Mini-check state
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [checkedResults, setCheckedResults] = useState(false);

  // Audio helper
  const playSentenceAudio = (sentence: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(sentence);
      utter.lang = "en-US";
      utter.rate = 0.88;
      window.speechSynthesis.speak(utter);
    }
  };

  const miniQuestions = grammarData.quizQuestions.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* 1. Hero Concept Card with Visual Badge */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/90 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-amber-900 border border-amber-300">
              <Zap className="h-4 w-4 text-amber-600" />
              {grammarData.badge || `Chuyên đề ngữ pháp • Unit ${unitNumber}`}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-2.5">
              {grammarTitle}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {grammarSummary || grammarData.summary}
            </p>
          </div>

          {/* Grammar Mode Switcher */}
          <div className="flex flex-wrap items-center rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/70 shrink-0 gap-1">
            <button
              onClick={() => setGrammarView("comparison")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "comparison"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚖️ So sánh đối đầu
            </button>
            <button
              onClick={() => setGrammarView("formulas")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "formulas"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              📐 Thẻ công thức
            </button>
            <button
              onClick={() => setGrammarView("signals")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "signals"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🎯 Mẹo nhận biết
            </button>
            <button
              onClick={() => setGrammarView("minicheck")}
              className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "minicheck"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚡ Thử thách nhanh
            </button>
            {grammarHtml && (
              <button
                onClick={() => setGrammarView("textbook")}
                className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  grammarView === "textbook"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-indigo-700 hover:bg-indigo-50 font-bold"
                }`}
              >
                📖 Bài học SGK
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Interactive Visual Timeline / Core Concept (if available) */}
      {grammarData.timeline && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500">
              Trực quan hóa Bản chất Ngữ pháp (Visual Concept)
            </span>
            <span className="text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Tư duy bản chất
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl bg-blue-50/70 border border-blue-100 p-4">
              <span className="font-bold text-sm sm:text-base text-blue-900 block mb-1.5">
                🟦 {grammarData.timeline.leftLabel}:
              </span>
              <p className="text-xs sm:text-sm text-blue-900/90 leading-relaxed font-normal">
                {grammarData.timeline.leftDesc}
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50/70 border border-purple-100 p-4">
              <span className="font-bold text-sm sm:text-base text-purple-900 block mb-1.5">
                🟪 {grammarData.timeline.rightLabel}:
              </span>
              <p className="text-xs sm:text-sm text-purple-900/90 leading-relaxed font-normal">
                {grammarData.timeline.rightDesc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 1: SIDE-BY-SIDE BATTLE MATRIX (SO SÁNH ĐỐI ĐẦU) */}
      {/* ========================================================= */}
      {grammarView === "comparison" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Left */}
          <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="rounded-full bg-blue-100 text-blue-900 px-3.5 py-1 text-xs sm:text-sm font-black tracking-wide">
                  {grammarData.cardLeft.title}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                  {grammarData.cardLeft.formula}
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3.5">
                Quy tắc cốt lõi:
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {grammarData.cardLeft.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-6 w-6 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              {/* Sample Sentences */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block">
                    Ví dụ mẫu câu thực tế:
                  </span>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    Bấm loa nghe đọc
                  </span>
                </div>

                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1.5 scrollbar-thin">
                  {grammarData.cardLeft.examples.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-50/90 p-3.5 flex items-start justify-between gap-3 border border-slate-100 hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-3xs sm:text-2xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-md">
                          {item.tag}
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-slate-900 italic leading-relaxed pt-0.5">
                          &quot;{item.en}&quot;
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-snug">→ {item.vi}</p>
                      </div>
                      <button
                        onClick={() => playSentenceAudio(item.en)}
                        className="p-2.5 rounded-xl bg-white text-blue-600 hover:bg-blue-100 transition-colors shadow-2xs shrink-0 cursor-pointer border border-slate-100 mt-1"
                        title="Nghe câu ví dụ"
                      >
                        <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase block mb-2">Dấu hiệu nhận biết:</span>
              <div className="flex flex-wrap gap-2">
                {grammarData.cardLeft.signals.map((tag, idx) => (
                  <span key={idx} className="rounded-xl bg-blue-50 text-blue-700 px-3 py-1.5 text-xs sm:text-sm font-bold border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Right */}
          <div className="rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="rounded-full bg-purple-100 text-purple-900 px-3.5 py-1 text-xs sm:text-sm font-black tracking-wide">
                  {grammarData.cardRight.title}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-100">
                  {grammarData.cardRight.formula}
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3.5">
                Quy tắc cốt lõi:
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {grammarData.cardRight.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-6 w-6 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              {/* Sample Sentences */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider block">
                    Ví dụ mẫu câu thực tế:
                  </span>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                    Bấm loa nghe đọc
                  </span>
                </div>

                <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1.5 scrollbar-thin">
                  {grammarData.cardRight.examples.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-50/90 p-3.5 flex items-start justify-between gap-3 border border-slate-100 hover:bg-purple-50/40 hover:border-purple-200 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-3xs sm:text-2xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded-md">
                          {item.tag}
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-slate-900 italic leading-relaxed pt-0.5">
                          &quot;{item.en}&quot;
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-snug">→ {item.vi}</p>
                      </div>
                      <button
                        onClick={() => playSentenceAudio(item.en)}
                        className="p-2.5 rounded-xl bg-white text-purple-600 hover:bg-purple-100 transition-colors shadow-2xs shrink-0 cursor-pointer border border-slate-100 mt-1"
                        title="Nghe câu ví dụ"
                      >
                        <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase block mb-2">Dấu hiệu nhận biết:</span>
              <div className="flex flex-wrap gap-2">
                {grammarData.cardRight.signals.map((tag, idx) => (
                  <span key={idx} className="rounded-xl bg-purple-50 text-purple-700 px-3 py-1.5 text-xs sm:text-sm font-bold border border-purple-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 2: FORMULA CARDS */}
      {/* ========================================================= */}
      {grammarView === "formulas" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-blue-900 flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-blue-500" />
              Công thức: {grammarData.cardLeft.title}
            </h3>
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
              <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-4 rounded-xl border border-blue-200 shadow-2xs">
                {grammarData.cardLeft.formula}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-3">
                Áp dụng: {grammarData.cardLeft.rules.join(" ")}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-purple-900 flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-purple-500" />
              Công thức: {grammarData.cardRight.title}
            </h3>
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
              <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-4 rounded-xl border border-purple-200 shadow-2xs">
                {grammarData.cardRight.formula}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-3">
                Áp dụng: {grammarData.cardRight.rules.join(" ")}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 3: SIGNALS & TIPS */}
      {/* ========================================================= */}
      {grammarView === "signals" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900">
              🎯 Mẹo nhận biết: {grammarData.cardLeft.title}
            </h3>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Khi trong câu xuất hiện các từ/cụm từ dấu hiệu sau, hãy ưu tiên vận dụng cấu trúc này:
              </p>
              <div className="flex flex-wrap gap-2">
                {grammarData.cardLeft.signals.map((s, idx) => (
                  <span key={idx} className="rounded-xl bg-blue-50 text-blue-700 font-bold px-3 py-1.5 text-xs sm:text-sm border border-blue-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900">
              🎯 Mẹo nhận biết: {grammarData.cardRight.title}
            </h3>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Khi trong câu xuất hiện các từ/cụm từ dấu hiệu sau, hãy ưu tiên vận dụng cấu trúc này:
              </p>
              <div className="flex flex-wrap gap-2">
                {grammarData.cardRight.signals.map((s, idx) => (
                  <span key={idx} className="rounded-xl bg-purple-50 text-purple-700 font-bold px-3 py-1.5 text-xs sm:text-sm border border-purple-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 4: INSTANT MINI-CHECK */}
      {/* ========================================================= */}
      {grammarView === "minicheck" && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                ⚡ Bài tập củng cố nhanh tại chỗ (Instant Mini-check)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Luyện tập 4 câu trắc nghiệm trọng tâm để tự đánh giá mức độ hiểu bài ngay lập tức.
              </p>
            </div>
            {checkedResults && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setUserAnswers({});
                  setCheckedResults(false);
                }}
                className="rounded-xl text-xs font-bold"
              >
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Làm lại
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {miniQuestions.map((item, qIdx) => {
              const selected = userAnswers[qIdx];
              return (
                <div key={qIdx} className="rounded-2xl border border-slate-200/80 p-5 bg-slate-50/50 space-y-3">
                  <p className="font-bold text-sm sm:text-base text-slate-900">
                    {qIdx + 1}. {item.q}
                  </p>
                  {item.s && (
                    <p className="font-mono text-sm bg-white p-3 rounded-xl border border-slate-200 text-indigo-950 font-semibold">
                      {item.s}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.opts.map((opt, optIdx) => {
                      const isChosen = selected === optIdx;
                      let btnStyle = "bg-white border-slate-200 text-slate-700 hover:bg-slate-100";
                      if (checkedResults) {
                        if (optIdx === item.c) {
                          btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                        } else if (isChosen && optIdx !== item.c) {
                          btnStyle = "bg-red-50 border-red-300 text-red-900";
                        }
                      } else if (isChosen) {
                        btnStyle = "bg-indigo-50 border-indigo-500 text-indigo-900 font-bold";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={checkedResults}
                          onClick={() => setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                          className={`rounded-xl border p-3 text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {checkedResults && (
                    <div className="mt-3 p-3 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs sm:text-sm text-indigo-900 font-medium">
                      💡 <strong>Giải thích sư phạm:</strong> {item.exp}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!checkedResults && (
            <Button
              onClick={() => setCheckedResults(true)}
              disabled={Object.keys(userAnswers).length === 0}
              className="w-full sm:w-auto rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 shadow-xs cursor-pointer"
            >
              Kiểm tra kết quả ngay
            </Button>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 5: FULL TEXTBOOK HTML LESSON (GIÁO TRÌNH SGK) */}
      {/* ========================================================= */}
      {grammarView === "textbook" && grammarHtml && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200">
                <BookOpen className="h-3.5 w-3.5" />
                Nguyên bản Giáo trình SGK Global Success
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-900 mt-2">
                Bài học chi tiết: {grammarTitle}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Bộ Giáo dục và Đào tạo
            </span>
          </div>

          <div
            className="prose prose-slate max-w-none prose-table:border prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-p:leading-relaxed text-slate-800 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: grammarHtml }}
          />
        </div>
      )}
    </div>
  );
}
