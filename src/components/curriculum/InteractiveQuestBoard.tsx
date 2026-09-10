"use client";

import Link from "next/link";
import {
  Target,
  Trophy,
  Award,
  Sparkles,
  Layers,
  Zap,
  Volume2,
  CheckCircle2,
  ArrowRight,
  Shield,
  Star,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface InteractiveQuestBoardProps {
  unitNumber: number;
  titleEn: string;
  topic: string;
  cefrLevel: string;
  totalVocab: number;
  masteredVocab: number;
  percentVocab: number;
  onJumpToTab: (tab: "vocab" | "grammar" | "reading" | "quiz") => void;
}

export function InteractiveQuestBoard({
  unitNumber,
  titleEn,
  topic,
  cefrLevel,
  totalVocab,
  masteredVocab,
  percentVocab,
  onJumpToTab,
}: InteractiveQuestBoardProps) {
  const quests = [
    {
      id: 1,
      icon: <Layers className="h-5 w-5 text-indigo-600" />,
      title: "Thợ Săn Từ Vựng (Vocabulary Hunter)",
      desc: `Luyện phản xạ và thuộc trọn vẹn ${totalVocab} từ vựng chủ đề ${topic}.`,
      progress: `${masteredVocab}/${totalVocab} từ`,
      percent: percentVocab,
      reward: "+30 XP",
      isDone: percentVocab === 100,
      actionText: "Luyện Flashcard",
      actionTab: "vocab" as const,
    },
    {
      id: 2,
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      title: "Chiến Thần Ngữ Pháp (Grammar Master)",
      desc: "Nắm vững công thức, dấu hiệu nhận biết và vượt qua Thử Thách Nhanh Ngữ Pháp.",
      progress: "Đã mở khóa",
      percent: 100,
      reward: "+20 XP",
      isDone: true,
      actionText: "Xem Ngữ pháp",
      actionTab: "grammar" as const,
    },
    {
      id: 3,
      icon: <Volume2 className="h-5 w-5 text-emerald-500" />,
      title: "Giọng Điệu Bản Xứ (Speech AI Challenge)",
      desc: "Thấm âm 5 lần và đạt điểm phát âm Speech AI ≥ 80% trên thẻ từ vựng.",
      progress: "Đang thử thách",
      percent: 60,
      reward: "+20 XP",
      isDone: false,
      actionText: "Luyện phát âm",
      actionTab: "vocab" as const,
    },
    {
      id: 4,
      icon: <Trophy className="h-5 w-5 text-purple-600" />,
      title: "Phá Đảo Bài Kiểm Tra 10 Câu (Exam Conqueror)",
      desc: "Vượt qua bài trắc nghiệm tổng hợp với số điểm ≥ 8/10 để mở khóa kho báu bài học.",
      progress: "Chờ thực hiện",
      percent: 0,
      reward: "+30 XP",
      isDone: false,
      actionText: "Làm bài kiểm tra",
      actionTab: "quiz" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <div className="rounded-3xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold border border-emerald-200">
              <Target className="h-3.5 w-3.5 text-emerald-600" />
              Bảng Nhiệm Vụ Game &amp; Chuẩn Đầu Ra (Quest Board)
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              Chinh Phục Unit {unitNumber}: {titleEn}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Chuẩn GDPT 2018 &amp; Khung tham chiếu Châu Âu <strong>CEFR {cefrLevel}</strong> • Hoàn thành cả 4 nhiệm vụ để nhận rương thưởng!
            </p>
          </div>

          {/* Treasure Box Preview */}
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-emerald-200 shadow-xs shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 font-black text-xl shadow-inner">
              🎁
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Phần Thưởng Tối Thượng
              </span>
              <span className="font-heading text-base font-black text-indigo-700">
                +100 XP &amp; Huy Hiệu
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Quest Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quests.map((q) => (
          <div
            key={q.id}
            className={`rounded-3xl border p-6 shadow-xs transition-all flex flex-col justify-between bg-white ${
              q.isDone ? "border-emerald-200 bg-emerald-50/20" : "border-slate-200/90 hover:border-indigo-300"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs">
                    {q.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-900">{q.title}</h3>
                    <span className="text-[11px] font-bold text-emerald-600">{q.reward}</span>
                  </div>
                </div>

                {q.isDone && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 px-2.5 py-0.5 text-xs font-bold">
                    <Check className="h-3 w-3" /> Hoàn thành
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{q.desc}</p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                  <span>Tiến độ</span>
                  <span>{q.progress}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                    style={{ width: `${q.percent}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onJumpToTab(q.actionTab)}
                className="w-full rounded-xl text-xs font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 cursor-pointer"
              >
                {q.actionText} <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
