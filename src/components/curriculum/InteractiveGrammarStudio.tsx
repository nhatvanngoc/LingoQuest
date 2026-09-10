"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Clock,
  Volume2,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check,
  X,
  Layers,
  BookOpen,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveGrammarStudioProps {
  unitNumber: number;
  grammarTitle: string;
  grammarSummary: string;
  topic: string;
}

export function InteractiveGrammarStudio({
  unitNumber,
  grammarTitle,
  grammarSummary,
  topic,
}: InteractiveGrammarStudioProps) {
  // Active View Tab inside Grammar Studio
  const [grammarView, setGrammarView] = useState<"comparison" | "formulas" | "signals" | "minicheck">("comparison");

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

  // Mini-check questions
  const miniCheckQuestions = [
    {
      q: "1. She ________ in Ha Noi for 5 years and she still lives there now.",
      options: ["lived", "has lived", "lives", "is living"],
      correct: 1,
      hint: "Dấu hiệu 'for 5 years' và hành động vẫn đang tiếp diễn ở hiện tại -> Dùng Hiện tại hoàn thành.",
    },
    {
      q: "2. We ________ a great football match on TV yesterday evening.",
      options: ["have watched", "watched", "watch", "had watched"],
      correct: 1,
      hint: "Dấu hiệu thời gian xác định đã kết thúc trong quá khứ 'yesterday evening' -> Dùng Quá khứ đơn.",
    },
    {
      q: "3. Have you ________ taken antibiotics for a viral infection?",
      options: ["ever", "yet", "ago", "since"],
      correct: 0,
      hint: "Trong câu hỏi Hiện tại hoàn thành hỏi về trải nghiệm, dùng 'ever' (đã từng).",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Hero Concept Card with Visual Badge */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/90 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-amber-900 border border-amber-300">
              <Zap className="h-4 w-4 text-amber-600" />
              Chuyên đề ngữ pháp trọng tâm • Unit {unitNumber}
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-2.5">
              {grammarTitle}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {grammarSummary}
            </p>
          </div>

          {/* Grammar Mode Switcher */}
          <div className="flex flex-wrap items-center rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/70 shrink-0 gap-1">
            <button
              onClick={() => setGrammarView("comparison")}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "comparison"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚖️ So sánh đối đầu
            </button>
            <button
              onClick={() => setGrammarView("formulas")}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "formulas"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              📐 Thẻ công thức
            </button>
            <button
              onClick={() => setGrammarView("signals")}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "signals"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🎯 Mẹo nhận biết
            </button>
            <button
              onClick={() => setGrammarView("minicheck")}
              className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                grammarView === "minicheck"
                  ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚡ Thử thách nhanh
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Visual Timeline (Trục thời gian tương tác) */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500">
            Trực quan hóa Dòng thời gian (Timeline Infographic)
          </span>
          <span className="text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Bản chất thời gian
          </span>
        </div>

        {/* Timeline Graphic Bar */}
        <div className="relative py-8">
          <div className="h-3 w-full bg-slate-100 rounded-full relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-1/3 bg-blue-500 rounded-l-full" />
            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-3 w-1/3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-1/3 bg-slate-200 rounded-r-full" />

            {/* Marker 1: Past Simple Stop Point */}
            <div className="absolute left-[18%] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center text-[10px] text-white font-black">
                ⏹
              </div>
              <div className="absolute top-7 whitespace-nowrap text-center">
                <span className="block font-bold text-xs sm:text-sm text-blue-700">Quá khứ đơn</span>
                <span className="block text-xs text-slate-500 font-medium">Chấm dứt hoàn toàn</span>
              </div>
            </div>

            {/* Marker 2: Present Perfect Bridge Arrow */}
            <div className="absolute left-[50%] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white shadow-lg flex items-center justify-center text-xs text-white font-black animate-pulse">
                🔗
              </div>
              <div className="absolute top-7 whitespace-nowrap text-center">
                <span className="block font-bold text-xs sm:text-sm text-purple-700">Hiện tại hoàn thành</span>
                <span className="block text-xs text-slate-500 font-medium">Kéo dài đến Hiện tại</span>
              </div>
            </div>

            {/* Marker 3: Present Moment */}
            <div className="absolute left-[66.6%] top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="h-5 w-5 rounded-full bg-slate-900 border-2 border-white shadow-sm" />
              <div className="absolute top-7 whitespace-nowrap text-center">
                <span className="block font-bold text-xs sm:text-sm text-slate-900">NOW</span>
                <span className="block text-xs text-slate-500 font-medium">Hiện tại</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-blue-50/60 border border-blue-100 p-4">
            <span className="font-bold text-sm sm:text-base text-blue-900 block mb-1.5">🟦 Quá khứ đơn (Past Simple):</span>
            <p className="text-xs sm:text-sm text-blue-900/90 leading-relaxed font-normal">
              Hành động đã xảy ra và <strong>kết thúc trọn vẹn</strong> trong quá khứ. Luôn gắn liền với một thời điểm đã qua (ví dụ: <em>yesterday, in 2020, 2 days ago</em>).
            </p>
          </div>

          <div className="rounded-2xl bg-purple-50/60 border border-purple-100 p-4">
            <span className="font-bold text-sm sm:text-base text-purple-900 block mb-1.5">🟪 Hiện tại hoàn thành (Present Perfect):</span>
            <p className="text-xs sm:text-sm text-purple-900/90 leading-relaxed font-normal">
              Chiếc cầu nối giữa quá khứ và hiện tại. Hành động bắt đầu trong quá khứ và <strong>vẫn tiếp diễn</strong> hoặc để lại <strong>kết quả thấy rõ ở hiện tại</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: SIDE-BY-SIDE BATTLE MATRIX (SO SÁNH ĐỐI ĐẦU) */}
      {/* ========================================================= */}
      {grammarView === "comparison" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Left: Past Simple */}
          <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="rounded-full bg-blue-100 text-blue-900 px-3.5 py-1 text-xs sm:text-sm font-black tracking-wide">
                  PAST SIMPLE (Quá khứ đơn)
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                  S + V2/ed
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3.5">
                Khi nào cần dùng?
              </h3>

              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="h-6 w-6 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">1</span>
                  <span><strong>Sự việc đã dứt điểm:</strong> Diễn ra và chấm dứt tại thời điểm cụ thể trong quá khứ.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-6 w-6 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">2</span>
                  <span><strong>Chuỗi hành động liên tiếp:</strong> Kể lại các sự việc nối tiếp nhau trong quá khứ (kể chuyện).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-6 w-6 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">3</span>
                  <span><strong>Thói quen trong quá khứ:</strong> Hành động từng làm thường xuyên trước đây nhưng giờ đã dừng.</span>
                </li>
              </ul>

              {/* Interactive Examples */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider block">
                  Ví dụ thực tế (Bấm loa nghe giọng đọc):
                </span>

                <div className="rounded-2xl bg-slate-50 p-4 flex items-start justify-between gap-3 border border-slate-100">
                  <div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 italic leading-relaxed">
                      &quot;We <span className="text-blue-600 underline decoration-2">lived</span> in Ha Noi when I was little.&quot;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">→ Chúng tôi từng sống ở Hà Nội khi tôi còn nhỏ (giờ không sống ở đó nữa).</p>
                  </div>
                  <button
                    onClick={() => playSentenceAudio("We lived in Ha Noi when I was little.")}
                    className="p-2.5 rounded-xl bg-white text-blue-600 hover:bg-blue-100 transition-colors shadow-2xs shrink-0 cursor-pointer"
                    title="Nghe câu ví dụ"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase block mb-2">Dấu hiệu nhận biết:</span>
              <div className="flex flex-wrap gap-2">
                {["yesterday", "ago", "last week", "last year", "in 2019", "when I was young"].map((tag, idx) => (
                  <span key={idx} className="rounded-xl bg-blue-50 text-blue-700 px-3 py-1.5 text-xs sm:text-sm font-bold border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Right: Present Perfect */}
          <div className="rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="rounded-full bg-purple-100 text-purple-900 px-3.5 py-1 text-xs sm:text-sm font-black tracking-wide">
                  PRESENT PERFECT (Hiện tại hoàn thành)
                </span>
                <span className="text-sm sm:text-base font-mono font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-100">
                  S + have/has + V3/ed
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-3.5">
                Khi nào cần dùng?
              </h3>

              <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="h-6 w-6 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">1</span>
                  <span><strong>Hành động kéo dài đến hiện tại:</strong> Bắt đầu trong quá khứ và vẫn đang tiếp diễn.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-6 w-6 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">2</span>
                  <span><strong>Vừa mới xảy ra:</strong> Hành động xảy ra rất gần, có kết quả rõ ràng ở hiện tại.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-6 w-6 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">3</span>
                  <span><strong>Trải nghiệm &amp; Kinh nghiệm:</strong> Nhấn mạnh việc đã từng hoặc chưa từng làm điều gì tính đến nay.</span>
                </li>
              </ul>

              {/* Interactive Examples */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider block">
                  Ví dụ thực tế (Bấm loa nghe giọng đọc):
                </span>

                <div className="rounded-2xl bg-slate-50 p-4 flex items-start justify-between gap-3 border border-slate-100">
                  <div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 italic leading-relaxed">
                      &quot;We <span className="text-purple-600 underline decoration-2">have lived</span> in Ha Noi for ten years.&quot;
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">→ Chúng tôi đã sống ở Hà Nội được 10 năm (và hiện tại vẫn đang sống ở đây).</p>
                  </div>
                  <button
                    onClick={() => playSentenceAudio("We have lived in Ha Noi for ten years.")}
                    className="p-2.5 rounded-xl bg-white text-purple-600 hover:bg-purple-100 transition-colors shadow-2xs shrink-0 cursor-pointer"
                    title="Nghe câu ví dụ"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase block mb-2">Dấu hiệu nhận biết:</span>
              <div className="flex flex-wrap gap-2">
                {["since + mốc", "for + khoảng", "already", "yet", "just", "ever / never", "so far", "recently"].map((tag, idx) => (
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
      {/* VIEW 2: FORMULA CARDS (THẺ CÔNG THỨC MÀU SẮC) */}
      {/* ========================================================= */}
      {grammarView === "formulas" && (
        <div className="space-y-6">
          {/* Past Simple Formulas */}
          <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-blue-900 flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-blue-500" />
              Công thức Thì Quá Khứ Đơn (Past Simple Formula)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-blue-50/60 p-5 border border-blue-100">
                <span className="font-black text-blue-800 text-xs sm:text-sm uppercase tracking-wide block mb-2">(+) Thể Khẳng định:</span>
                <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-3 rounded-xl border border-blue-200 shadow-2xs">
                  S + V2 / V-ed
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 italic">&quot;They worked out yesterday.&quot;</p>
              </div>

              <div className="rounded-2xl bg-blue-50/60 p-5 border border-blue-100">
                <span className="font-black text-blue-800 text-xs sm:text-sm uppercase tracking-wide block mb-2">(-) Thể Phủ định:</span>
                <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-3 rounded-xl border border-blue-200 shadow-2xs">
                  S + didn&apos;t + V-inf
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 italic">&quot;They didn&apos;t work out.&quot;</p>
              </div>

              <div className="rounded-2xl bg-blue-50/60 p-5 border border-blue-100">
                <span className="font-black text-blue-800 text-xs sm:text-sm uppercase tracking-wide block mb-2">(?) Thể Nghi vấn:</span>
                <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-3 rounded-xl border border-blue-200 shadow-2xs">
                  Did + S + V-inf ?
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 italic">&quot;Did they work out?&quot;</p>
              </div>
            </div>
          </div>

          {/* Present Perfect Formulas */}
          <div className="rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-purple-900 flex items-center gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-purple-500" />
              Công thức Thì Hiện Tại Hoàn Thành (Present Perfect Formula)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-purple-50/60 p-5 border border-purple-100">
                <span className="font-black text-purple-800 text-xs sm:text-sm uppercase tracking-wide block mb-2">(+) Thể Khẳng định:</span>
                <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-3 rounded-xl border border-purple-200 shadow-2xs">
                  S + have/has + V3/ed
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 italic">&quot;I have taken antibiotics.&quot;</p>
              </div>

              <div className="rounded-2xl bg-purple-50/60 p-5 border border-purple-100">
                <span className="font-black text-purple-800 text-xs sm:text-sm uppercase tracking-wide block mb-2">(-) Thể Phủ định:</span>
                <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-3 rounded-xl border border-purple-200 shadow-2xs">
                  S + haven&apos;t/hasn&apos;t + V3
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 italic">&quot;I haven&apos;t taken antibiotics.&quot;</p>
              </div>

              <div className="rounded-2xl bg-purple-50/60 p-5 border border-purple-100">
                <span className="font-black text-purple-800 text-xs sm:text-sm uppercase tracking-wide block mb-2">(?) Thể Nghi vấn:</span>
                <div className="font-mono font-black text-slate-900 text-base sm:text-lg bg-white p-3 rounded-xl border border-purple-200 shadow-2xs">
                  Have/Has + S + V3 ?
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 italic">&quot;Have you taken antibiotics?&quot;</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 3: SIGNALS & MEMORY HACKS (MẸO NHẬN BIẾT) */}
      {/* ========================================================= */}
      {grammarView === "signals" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🎯 Mẹo nhận biết Quá khứ đơn trong bài thi</span>
            </h3>
            <div className="space-y-3.5">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-sm sm:text-base text-blue-700 block mb-1.5">Quy tắc 1: Có mốc thời gian rõ ràng</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Nếu trong câu xuất hiện <strong>yesterday, last night, last month, in 1995, 3 days ago</strong>, chọn ngay thì Quá khứ đơn!
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-sm sm:text-base text-blue-700 block mb-1.5">Quy tắc 2: Khi vế câu có &quot;When + Quá khứ&quot;</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Ví dụ: <em>&quot;When I was young, I played football every afternoon.&quot;</em> (Chỉ thói quen thời thơ ấu đã kết thúc).
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🎯 Mẹo nhận biết Hiện tại hoàn thành trong bài thi</span>
            </h3>
            <div className="space-y-3.5">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-sm sm:text-base text-purple-700 block mb-1.5">Quy tắc 1: Cặp đôi SINCE và FOR</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  • <strong>SINCE</strong> + mốc thời gian: <em>since 2015, since last week, since breakfast</em>.<br />
                  • <strong>FOR</strong> + khoảng thời gian: <em>for 10 years, for a long time, for 3 hours</em>.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-sm sm:text-base text-purple-700 block mb-1.5">Quy tắc 2: Từ chỉ kinh nghiệm &amp; trạng thái</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Gặp <strong>already, yet, just, ever, never, so far, recently, up to now</strong> ➡️ Ưu tiên chọn Hiện tại hoàn thành!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIEW 4: INSTANT MINI-CHECK (THỬ THÁCH NHANH TẠI CHỖ) */}
      {/* ========================================================= */}
      {grammarView === "minicheck" && (
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                Thử Thách Nhanh Ngữ Pháp (Mini-Check)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Chạm vào đáp án đúng để kiểm tra độ hiểu bài ngay lập tức
              </p>
            </div>
            <span className="rounded-full bg-amber-100 text-amber-900 px-3.5 py-1 text-xs sm:text-sm font-bold border border-amber-200">
              3 Câu hỏi chớp nhoáng
            </span>
          </div>

          <div className="space-y-4">
            {miniCheckQuestions.map((item, qIdx) => {
              const selected = userAnswers[qIdx];
              return (
                <div key={qIdx} className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5">
                  <p className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-3.5 leading-relaxed">{item.q}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.options.map((opt, optIdx) => {
                      const isChosen = selected === optIdx;
                      const isCorrect = item.correct === optIdx;
                      let style = "border-slate-200 bg-white text-slate-800 hover:bg-slate-50 font-medium";

                      if (checkedResults) {
                        if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-950 font-bold";
                        else if (isChosen && !isCorrect) style = "border-red-300 bg-red-50 text-red-900";
                      } else if (isChosen) {
                        style = "border-indigo-600 bg-indigo-50 text-indigo-950 font-bold";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => setUserAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                          className={`text-left rounded-xl border p-3.5 text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${style}`}
                        >
                          <span>{opt}</span>
                          {checkedResults && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {checkedResults && (
                    <div className="mt-3.5 rounded-xl bg-indigo-50/80 p-3 text-xs sm:text-sm text-indigo-900 border border-indigo-100 leading-relaxed">
                      <strong className="text-indigo-950">💡 Lời giải thích: </strong> {item.hint}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            {!checkedResults ? (
              <Button
                onClick={() => setCheckedResults(true)}
                disabled={Object.keys(userAnswers).length === 0}
                className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm px-6 py-3 shadow-xs cursor-pointer"
              >
                Kiểm tra kết quả ngay 🚀
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => {
                  setUserAnswers({});
                  setCheckedResults(false);
                }}
                className="rounded-xl text-xs sm:text-sm font-bold cursor-pointer py-3 px-5"
              >
                <RotateCcw className="mr-1.5 h-4 w-4" /> Thử sức lại
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
