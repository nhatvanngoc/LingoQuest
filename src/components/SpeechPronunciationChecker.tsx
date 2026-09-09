"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, Sparkles, CheckCircle2, AlertCircle, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpeechPronunciationCheckerProps {
  targetWord: string;
  minListenCountNeeded?: number;
  currentListenCount?: number;
  onSuccess?: (score: number) => void;
}

// Levenshtein distance for fuzzy speech comparison
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "");
  const s2 = str2.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "");

  if (s1 === s2) return 100;
  if (!s1 || !s2) return 0;
  if (s1.includes(s2) || s2.includes(s1)) return 90;

  const track = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1).fill(null));

  for (let i = 0; i <= s1.length; i += 1) track[0][i] = i;
  for (let j = 0; j <= s2.length; j += 1) track[j][0] = j;

  for (let j = 1; j <= s2.length; j += 1) {
    for (let i = 1; i <= s1.length; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      );
    }
  }

  const distance = track[s2.length][s1.length];
  const maxLen = Math.max(s1.length, s2.length);
  const similarity = Math.max(0, Math.round(((maxLen - distance) / maxLen) * 100));
  return similarity;
}

export function SpeechPronunciationChecker({
  targetWord,
  minListenCountNeeded = 3,
  currentListenCount = 0,
  onSuccess,
}: SpeechPronunciationCheckerProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const isUnlocked = currentListenCount >= minListenCountNeeded;

  useEffect(() => {
    // Reset when word changes
    setRecognizedText(null);
    setScore(null);
    setErrorMsg(null);
    setIsRecording(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (_) {}
    }
  }, [targetWord]);

  const startListening = () => {
    setErrorMsg(null);
    setRecognizedText(null);
    setScore(null);

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMsg("Trình duyệt không hỗ trợ nhận diện giọng nói trực tiếp.");
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        const spoken = event.results[0][0].transcript;
        setRecognizedText(spoken);

        const computedScore = calculateSimilarity(spoken, targetWord);
        setScore(computedScore);

        if (computedScore >= 75 && onSuccess) {
          onSuccess(computedScore);
        }
      };

      recognition.onerror = (event: any) => {
        setIsRecording(false);
        if (event.error === "no-speech") {
          setErrorMsg("Không nghe thấy âm thanh. Vui lòng thử lại gần micro hơn.");
        } else if (event.error === "not-allowed") {
          setErrorMsg("Vui lòng cấp quyền Microphone cho trình duyệt.");
        } else {
          setErrorMsg(`Lỗi nhận diện: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      setIsRecording(false);
      setErrorMsg("Không thể khởi động Microphone.");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
            <Mic className="h-4 w-4" />
          </div>
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
            Chấm phát âm AI (Ear-First Practice)
          </span>
        </div>

        {!isUnlocked && (
          <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Volume2 className="h-3 w-3" /> Nghe thêm {minListenCountNeeded - currentListenCount} lần để mở mic
          </span>
        )}
      </div>

      {!isUnlocked ? (
        <p className="text-xs text-slate-500 leading-relaxed">
          Theo phương pháp giáo viên yêu cầu, hãy bấm biểu tượng loa nghe mẫu ít nhất{" "}
          <strong>{minListenCountNeeded} lần</strong> để ngấm âm trước khi luyện phát âm nhé!
        </p>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Button
              onClick={isRecording ? stopListening : startListening}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all shadow-xs flex items-center gap-2 ${
                isRecording
                  ? "bg-red-600 hover:bg-red-700 text-white animate-pulse"
                  : "bg-teal-600 hover:bg-teal-700 text-white"
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="h-4 w-4" /> Đang lắng nghe... (Bấm để dừng)
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4" /> Bắt đầu phát âm: &quot;{targetWord}&quot;
                </>
              )}
            </Button>

            {score !== null && (
              <Button
                variant="outline"
                size="sm"
                onClick={startListening}
                className="rounded-xl text-xs font-semibold"
              >
                <RotateCcw className="h-3.5 w-3.5 mr-1" /> Thử lại
              </Button>
            )}
          </div>

          {/* Feedback & Score */}
          {score !== null && (
            <div
              className={`rounded-xl border p-3 text-xs transition-all ${
                score >= 85
                  ? "border-emerald-200 bg-emerald-50/80 text-emerald-900"
                  : score >= 65
                  ? "border-amber-200 bg-amber-50/80 text-amber-900"
                  : "border-rose-200 bg-rose-50/80 text-rose-900"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold flex items-center gap-1">
                  {score >= 85 ? (
                    <>
                      <Sparkles className="h-4 w-4 text-emerald-600" /> Xuất sắc! Phát âm chuẩn xác
                    </>
                  ) : score >= 65 ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-amber-600" /> Khá tốt! Chú ý âm đuôi
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 text-rose-600" /> Cần cải thiện, hãy nghe lại mẫu
                    </>
                  )}
                </span>
                <span className="font-black text-sm">{score}%</span>
              </div>

              {recognizedText && (
                <p className="mt-1 text-slate-600">
                  Âm thanh ghi nhận: <span className="font-semibold italic">&quot;{recognizedText}&quot;</span>
                </p>
              )}
            </div>
          )}

          {errorMsg && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-xs text-rose-700 flex items-center gap-1.5">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
