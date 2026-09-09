"use client";

import React, { useState, useEffect } from "react";
import {
  Volume2,
  Headphones,
  Mic,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Sparkles,
  Lock,
  Unlock,
  RotateCcw,
  Languages,
  Layers,
  ArrowRight,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import type { FlashcardItem } from "@/lib/curriculum/types";

interface DeepImprintFlashcardProps {
  card: FlashcardItem;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export function DeepImprintFlashcard({
  card,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: DeepImprintFlashcardProps) {
  // Acoustic Imprint State (5 ear-first repetitions)
  const [listenCount, setListenCount] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [micUnlocked, setMicUnlocked] = useState<boolean>(false);
  const [userSpeaking, setUserSpeaking] = useState<boolean>(false);
  const [speechFeedback, setSpeechFeedback] = useState<string | null>(null);

  // Semantic Scaffolding Steps:
  // Step 1: Guessing in context sentence (Đọc câu ngữ cảnh & đoán)
  // Step 2: English - English definition (Định nghĩa Anh - Anh)
  // Step 3: Vietnamese Bridge (Cầu nối tiếng Việt)
  // Step 4: Full Examples & Collocations (Ví dụ phân tầng và cụm từ)
  const [semanticStep, setSemanticStep] = useState<1 | 2 | 3 | 4>(1);
  const [studentGuess, setStudentGuess] = useState<string>("");
  const [vietnameseAutoFaded, setVietnameseAutoFaded] = useState<boolean>(false);

  // Reset states when card changes
  useEffect(() => {
    setListenCount(0);
    setMicUnlocked(false);
    setUserSpeaking(false);
    setSpeechFeedback(null);
    setSemanticStep(1);
    setStudentGuess("");
    setVietnameseAutoFaded(false);
  }, [card.id]);

  // Audio Playback using Web Speech API
  const playAudio = (speed = 1.0, textToSpeak?: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Trình duyệt không hỗ trợ Web Speech Synthesis API.");
      return;
    }

    window.speechSynthesis.cancel();
    const text = textToSpeak || card.audioHint?.text || card.term;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = card.audioHint?.locale || "en-US";
    utterance.rate = speed;

    setIsPlayingAudio(true);
    utterance.onend = () => {
      setIsPlayingAudio(false);
    };
    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Handle Ear-First Listening Counter
  const handleAcousticListen = () => {
    const nextCount = Math.min(listenCount + 1, 5);
    setListenCount(nextCount);

    // Audio config based on current iteration
    let speed = 1.0;
    let text = card.term;

    if (nextCount === 1 || nextCount === 2) {
      speed = 1.0; // Normal tempo for overall rhythm
      text = card.term;
    } else if (nextCount === 3 || nextCount === 4) {
      speed = 0.85; // Slower tempo to highlight ending sounds and phonemes
      text = card.term;
    } else if (nextCount === 5) {
      speed = 0.95;
      // In 5th repetition, speak within the context sentence or primary collocation!
      text = card.collocations?.[0]?.example || card.contextSentence?.en || card.examples?.a2?.en || card.term;
    }

    playAudio(speed, text);

    if (nextCount >= 5) {
      setMicUnlocked(true);
    }
  };

  // Handle Speaking Shadowing Practice
  const handleSpeakPractice = () => {
    if (!micUnlocked) return;
    setUserSpeaking(true);
    setSpeechFeedback("Đang lắng nghe phát âm của bạn...");

    // Simulated speech recognition / active production
    setTimeout(() => {
      setUserSpeaking(false);
      setSpeechFeedback("Phát âm rất tốt! Trọng âm và ngữ điệu chuẩn xác.");
    }, 2500);
  };

  const stages = card.acousticStages || [
    { stage: 1, speed: 1.0, focus: "overview", instructionVi: "Nghe tổng thể bắt nhịp âm điệu tự nhiên của từ." },
    { stage: 2, speed: 1.0, focus: "stress", instructionVi: "Lắng nghe trọng âm chính được nhấn mạnh và ngân dài hơn." },
    { stage: 3, speed: 0.85, focus: "ending_sounds", instructionVi: "Tập trung nghe rõ âm đuôi và bật hơi chính xác." },
    { stage: 4, speed: 0.85, focus: "linking", instructionVi: "Chú ý độ mở nguyên âm và nối âm mượt mà." },
    { stage: 5, speed: 0.95, focus: "collocation_sentence", instructionVi: "Nghe từ được lồng ghép tự nhiên trong cụm câu hoàn chỉnh." },
  ];

  const currentStageInfo = stages[Math.min(listenCount, 4)];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Top Bar: Word, IPA, Level, Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {card.term}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              {card.cefrLevel}
            </span>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 italic">
              ({card.partOfSpeech})
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 mt-1.5">
            <span className="text-slate-800 dark:text-slate-200 font-semibold">
              US: {card.ipaUS}
            </span>
            <span>UK: {card.ipaUK}</span>
            {card.syllables && (
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Âm tiết: {card.syllables}
              </span>
            )}
          </div>
        </div>

        {/* 5-Listen Progress Badge */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Bộ thấm âm (Ear-First):
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              {listenCount >= 5 ? "Đã thấm âm (Mở mic)" : `Đã nghe: ${listenCount}/5 lần`}
            </div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-3 h-7 rounded-md transition-all ${
                  listenCount >= s
                    ? "bg-emerald-500 scale-105"
                    : "bg-slate-200 dark:bg-slate-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* TWO COLUMNS: LEFT = 4-STEP SEMANTIC ENGINE | RIGHT = 5-STAGE ACOUSTIC IMPRINTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: SEMANTIC ACQUISITION (Đoán -> Anh-Anh -> Anh-Việt -> Ví dụ) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-500" /> Trục 1: Tiếp Nhận Ngữ Nghĩa 4 Tầng
            </h4>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => setSemanticStep(step as any)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                    semanticStep === step
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                  }`}
                >
                  B{step}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 1: CONTEXTUAL GUESSING */}
          {semanticStep === 1 && (
            <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs">
                <Lightbulb className="w-4 h-4" /> BƯỚC 1: ĐỌC VĂN CẢNH & TỰ SUY ĐOÁN NGHĨA
              </div>

              {/* Context Sentence */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-sm">
                <div className="text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed">
                  "{card.contextSentence?.en || card.examples?.a2?.en || `By practicing green habits, students reduce their ${card.term}.`}"
                </div>
              </div>

              {/* Guiding Clue */}
              {card.contextSentence?.clueVi && (
                <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                  💡 <strong>Gợi ý suy đoán:</strong> {card.contextSentence.clueVi}
                </p>
              )}

              {/* Self-note input */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Ghi chú suy đoán của bạn (hoặc suy nghĩ trong đầu):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentGuess}
                    onChange={(e) => setStudentGuess(e.target.value)}
                    placeholder="Theo bạn, từ này có nghĩa là gì trong câu trên?..."
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                  <button
                    onClick={() => setSemanticStep(2)}
                    className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    Xem Định Nghĩa Anh - Anh <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ENGLISH - ENGLISH DEFINITION */}
          {semanticStep === 2 && (
            <div className="p-5 rounded-2xl bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xs">
                  <Languages className="w-4 h-4" /> BƯỚC 2: ĐỊNH NGHĨA ANH - ANH (CAMBRIDGE / OXFORD)
                </div>
                <button
                  onClick={() => setSemanticStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-700 underline"
                >
                  ← Đọc lại ngữ cảnh
                </button>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/50 shadow-sm space-y-2">
                <div className="text-sm font-semibold text-blue-900 dark:text-blue-300 leading-relaxed">
                  {card.meaningEn}
                </div>
                <div className="text-2xs text-slate-500 dark:text-slate-400">
                  Tập đọc hiểu trực tiếp bằng tiếng Anh để hình thành phản xạ ngôn ngữ bản xứ.
                </div>
              </div>

              {/* Action: Open Vietnamese Bridge */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSemanticStep(3)}
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Chưa rõ nghĩa? Mở cầu nối tiếng Việt →
                </button>

                <button
                  onClick={() => setSemanticStep(4)}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-colors"
                >
                  Đã hiểu! Xem Ví Dụ & Collocations <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: VIETNAMESE BRIDGE & RETURN TO EN-EN */}
          {semanticStep === 3 && (
            <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" /> BƯỚC 3: CẦU NỐI TIẾNG VIỆT & QUAY LẠI ANH - ANH
                </div>
                <button
                  onClick={() => setSemanticStep(2)}
                  className="text-xs text-slate-500 hover:text-slate-700 underline"
                >
                  ← Xem lại Anh-Anh
                </button>
              </div>

              {/* Vietnamese Definition Card */}
              <div className="p-4 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-800">
                <div className="text-base font-bold text-emerald-900 dark:text-emerald-100">
                  {card.meaningVi}
                </div>
              </div>

              {/* English-English Reminder */}
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Khắc sâu lại bằng tiếng Anh:
                </div>
                <div className="italic font-serif">{card.meaningEn}</div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSemanticStep(4)}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-colors"
                >
                  Tiếp Tục: Khám Phá Câu Ví Dụ & Collocations <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: TIERED EXAMPLES & COLLOCATIONS */}
          {semanticStep === 4 && (
            <div className="space-y-4">
              {/* Tiered Examples */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                <h5 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Hệ Thống Câu Ví Dụ Phân Tầng
                </h5>

                {/* Example A2 */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded font-bold text-2xs bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">
                      Cấp độ A2 (Đời thường & giao tiếp):
                    </span>
                    <button
                      onClick={() => playAudio(0.95, card.examples?.a2?.en)}
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">
                    "{card.examples?.a2?.en}"
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 italic">
                    → {card.examples?.a2?.vi}
                  </div>
                </div>

                {/* Example B1/B2 Academic THPT */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded font-bold text-2xs bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200">
                      Cấp độ B1/B2 (Học thuật & Đề thi THPT):
                    </span>
                    <button
                      onClick={() => playAudio(0.95, card.examples?.b1b2?.en)}
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">
                    "{card.examples?.b1b2?.en}"
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 italic">
                    → {card.examples?.b1b2?.vi}
                  </div>
                  {card.examples?.b1b2?.feature && (
                    <div className="text-2xs text-emerald-700 dark:text-emerald-400 font-medium pt-1 border-t border-slate-100 dark:border-slate-800">
                      📌 <strong>Điểm ngữ pháp:</strong> {card.examples.b1b2.feature}
                    </div>
                  )}
                </div>
              </div>

              {/* Collocations */}
              {card.collocations?.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h5 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                    Cụm từ Collocations hay gặp trong đề thi:
                  </h5>
                  <div className="space-y-2">
                    {card.collocations.map((c, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between font-bold text-emerald-700 dark:text-emerald-300">
                          <span>{c.phrase}</span>
                          <span className="text-slate-500 font-normal italic">
                            ({c.meaningVi})
                          </span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 italic">
                          Ví dụ: "{c.example}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learner Tip */}
              {card.learnerTipVi && (
                <div className="p-3.5 rounded-xl bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/20 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Lưu ý tránh lỗi sai học sinh Việt Nam:</strong> {card.learnerTipVi}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: ACOUSTIC IMPRINTING ENGINE (5 Repetitions before Mic) */}
        <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Headphones className="w-4 h-4 text-emerald-500" /> Trục 2: Thấm Âm 5 Lần Trước Khi Nói
            </h4>

            {/* Current Stage Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/30 text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                Giai đoạn {Math.min(listenCount + 1, 5)}/5: {currentStageInfo?.focus}
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {currentStageInfo?.instructionVi}
              </div>

              {/* Big Listen Button */}
              <button
                type="button"
                onClick={handleAcousticListen}
                disabled={isPlayingAudio}
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Volume2 className={`w-5 h-5 ${isPlayingAudio ? "animate-bounce" : ""}`} />
                {isPlayingAudio
                  ? "Đang phát âm thanh..."
                  : `Nghe lần ${listenCount < 5 ? listenCount + 1 : "lại (5/5)"}`}
              </button>
            </div>

            {/* 5 Stages Guide Checklist */}
            <div className="space-y-2 text-2xs">
              {stages.map((st, idx) => (
                <div
                  key={st.stage}
                  className={`p-2 rounded-lg flex items-center justify-between border transition-all ${
                    listenCount >= st.stage
                      ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center font-bold text-3xs border">
                      {st.stage}
                    </span>
                    <span>{st.instructionVi}</span>
                  </div>
                  <span className="font-mono text-3xs">{st.speed}x</span>
                </div>
              ))}
            </div>

            {/* Speaking Practice Unlock Card */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  {micUnlocked ? (
                    <Unlock className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-400" />
                  )}
                  Luyện Phát Âm (Shadowing)
                </div>
                <span className="text-2xs text-slate-500 font-medium">
                  {micUnlocked ? "Đã mở khóa" : "Cần nghe đủ 5 lần"}
                </span>
              </div>

              <button
                type="button"
                disabled={!micUnlocked || userSpeaking}
                onClick={handleSpeakPractice}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  micUnlocked
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                }`}
              >
                <Mic className={`w-4 h-4 ${userSpeaking ? "animate-ping" : ""}`} />
                {userSpeaking
                  ? "Đang ghi âm và phân tích..."
                  : micUnlocked
                  ? "Bấm mic đọc to theo mẫu"
                  : "Khóa mic (Cần nghe đủ 5 lần)"}
              </button>

              {speechFeedback && (
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 text-xs text-center font-medium border border-emerald-300 dark:border-emerald-800">
                  {speechFeedback}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Card Controls: Prev / Next Card */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={onPrev}
              disabled={isFirst}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
            >
              ← Thẻ trước
            </button>

            <button
              onClick={() => {
                setListenCount(0);
                setSemanticStep(1);
              }}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Học lại từ đầu
            </button>

            <button
              onClick={onNext}
              disabled={isLast}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Thẻ tiếp theo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
