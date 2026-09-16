"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  BookOpen,
  Award,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Gamepad2,
  Sparkles,
  Trophy,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export type UnitTabType = "vocab" | "grammar" | "reading" | "exercises" | "objectives" | "quiz";

interface UnitLearningStepperProps {
  activeTab: UnitTabType;
  onTabChange: (tab: UnitTabType) => void;
  vocabCount?: number;
  quizSubmitted?: boolean;
}

const STEPS: {
  id: UnitTabType;
  stepNum: number;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "vocab",
    stepNum: 1,
    label: "Từ vựng & Flashcard",
    sublabel: "Nạp từ qua ảnh & phát âm",
    icon: Layers,
  },
  {
    id: "grammar",
    stepNum: 2,
    label: "Ngữ pháp chuyên sâu",
    sublabel: "Công thức & so sánh thì",
    icon: Zap,
  },
  {
    id: "reading",
    stepNum: 3,
    label: "Đọc hiểu SGK",
    sublabel: "Đọc & tra từ ngữ cảnh",
    icon: BookOpen,
  },
  {
    id: "exercises",
    stepNum: 4,
    label: "Bài tập đa dạng",
    sublabel: "Viết lại câu, Lỗi sai & Ghép câu",
    icon: PenTool,
  },
  {
    id: "quiz",
    stepNum: 5,
    label: "Kiểm tra phản xạ",
    sublabel: "Đánh giá & tích luỹ XP",
    icon: Award,
  },
];

export function UnitLearningStepper({
  activeTab,
  onTabChange,
  vocabCount,
  quizSubmitted,
}: UnitLearningStepperProps) {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Lộ trình 5 bước tiếp thu kiến thức chuẩn THPT
          </span>
        </div>
        <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
          Học tuần tự để đạt hiệu quả ghi nhớ tối ưu
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        {STEPS.map((step) => {
          const isActive = activeTab === step.id;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => onTabChange(step.id)}
              className={`group relative flex flex-col justify-between rounded-2xl p-3 sm:p-3.5 text-left transition-all duration-200 ${
                isActive
                  ? "bg-blue-50/80 border-2 border-blue-600 shadow-sm ring-2 ring-blue-500/20"
                  : "border border-slate-200 bg-slate-50/40 hover:bg-slate-100/70 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-black ${
                      isActive
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-200/80 text-slate-700 group-hover:bg-slate-300"
                    }`}
                  >
                    {step.stepNum}
                  </span>
                  <Icon
                    className={`h-4 w-4 ${
                      isActive
                        ? step.id === "grammar"
                          ? "text-amber-500"
                          : step.id === "exercises"
                          ? "text-indigo-600"
                          : step.id === "quiz"
                          ? "text-emerald-600"
                          : "text-blue-600"
                        : "text-slate-400"
                    }`}
                  />
                </div>

                {isActive && (
                  <span className="rounded-md bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white tracking-wide">
                    Đang học
                  </span>
                )}
                {step.id === "quiz" && quizSubmitted && !isActive && (
                  <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800 flex items-center gap-0.5">
                    <CheckCircle2 className="h-3 w-3" /> Đã nộp
                  </span>
                )}
              </div>

              <div>
                <p
                  className={`text-xs font-bold leading-snug ${
                    isActive ? "text-blue-900 font-extrabold" : "text-slate-800"
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 truncate">{step.sublabel}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface UnitNextStepCardProps {
  currentTab: "vocab" | "grammar" | "reading" | "exercises";
  onNext: () => void;
}

const NEXT_CONFIG = {
  vocab: {
    badge: "Bước 2 / 5",
    title: "Đã nạp xong từ vựng bài học?",
    desc: "Khám phá ngay công thức, bản chất thời gian và các cấu trúc ngữ pháp trọng tâm của Unit.",
    btnText: "Tiếp tục: Học Ngữ pháp chuyên sâu",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  grammar: {
    badge: "Bước 3 / 5",
    title: "Đã hiểu rõ các cấu trúc ngữ pháp?",
    desc: "Bước vào phòng đọc hiểu để đọc văn bản chuẩn SGK và chạm tra từ vựng ngữ cảnh tức thì.",
    btnText: "Tiếp tục: Vào Phòng Đọc hiểu SGK",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  reading: {
    badge: "Bước 4 / 5",
    title: "Đã nắm bắt trọn vẹn bài đọc?",
    desc: "Rèn luyện các dạng bài tập thực hành: Viết lại câu, Tìm & sửa lỗi sai ABCD, Ghép câu và Mẫu câu giao tiếp.",
    btnText: "Tiếp tục: Luyện Bài tập đa dạng",
    btnColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  exercises: {
    badge: "Bước 5 / 5",
    title: "Đã làm chủ các dạng bài tập?",
    desc: "Thử thách trắc nghiệm phản xạ 50 câu để kiểm tra mức độ tiếp thu và nhận thưởng tích luỹ XP.",
    btnText: "Tiếp tục: Làm bài Kiểm tra & Thử thách",
    btnColor: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
};

export function UnitNextStepCard({ currentTab, onNext }: UnitNextStepCardProps) {
  const conf = NEXT_CONFIG[currentTab];

  return (
    <div className="mt-10 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-white p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="rounded-full bg-blue-600/10 px-2.5 py-0.5 text-[11px] font-black text-blue-700">
              {conf.badge}
            </span>
            <span className="text-xs font-bold text-slate-500">Mạch tiếp thu bài học tuần tự</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">{conf.title}</h3>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed">{conf.desc}</p>
        </div>

        <Button
          onClick={() => {
            onNext();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`shrink-0 rounded-2xl px-6 py-6 font-heading text-xs font-bold shadow-md transition-all active:scale-98 ${conf.btnColor}`}
        >
          {conf.btnText}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

interface QuizCelebrationCardProps {
  score: number;
  total: number;
  xpEarned: number;
  nextUnit?: { slug: string; titleEn: string; unitNumber: number };
  grade: number;
  onReset: () => void;
}

export function QuizCelebrationCard({
  score,
  total,
  xpEarned,
  nextUnit,
  grade,
  onReset,
}: QuizCelebrationCardProps) {
  const percent = Math.round((score / Math.max(1, total)) * 100);
  const isPass = percent >= 70;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-8 shadow-sm"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-emerald-100">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
            <Trophy className="h-8 w-8 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-black text-emerald-800 uppercase tracking-wide">
                Đã hoàn thành kiểm tra
              </span>
              <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5" /> +{xpEarned} XP
              </span>
            </div>
            <h3 className="font-heading text-xl font-black text-slate-900">
              {percent === 100
                ? "Xuất sắc! Bạn đã tiếp thu trọn vẹn bài học!"
                : isPass
                ? "Rất tốt! Bạn đã nắm vững kiến thức trọng tâm!"
                : "Cần luyện tập thêm để củng cố phản xạ nhé!"}
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Kết quả: <strong className="text-emerald-700 font-bold">{score}/{total} câu đúng ({percent}%)</strong>.
              Bạn đã hoàn tất toàn bộ chu trình 4 bước của Unit này.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={onReset}
            variant="outline"
            className="rounded-2xl border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
          >
            <RotateCcw className="h-3.5 w-3.5 mr-1.5" /> Làm lại bài
          </Button>
        </div>
      </div>

      {/* Recommended Next Actions */}
      <div className="mt-6">
        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
          Bước tiếp theo đề xuất:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nextUnit ? (
            <Button
              asChild
              className="h-auto py-4 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white justify-between shadow-sm"
            >
              <Link href={`/curriculum/grade-${grade}/${nextUnit.slug}`}>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-200">Bài học tiếp theo</p>
                  <p className="text-xs font-black truncate max-w-[200px]">
                    Unit {nextUnit.unitNumber}: {nextUnit.titleEn}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 ml-2 shrink-0" />
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              className="h-auto py-4 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white justify-between shadow-sm"
            >
              <Link href={`/curriculum/grade-${grade}`}>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-blue-200">Danh mục bài học</p>
                  <p className="text-xs font-black">Xem toàn bộ Units Lớp {grade}</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-2 shrink-0" />
              </Link>
            </Button>
          )}

          <Button
            asChild
            variant="outline"
            className="h-auto py-4 px-5 rounded-2xl border-amber-300/80 bg-amber-50/50 hover:bg-amber-100/70 text-amber-900 justify-between shadow-2xs"
          >
            <Link href="/game">
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-amber-700">Đua top bảng vàng</p>
                <p className="text-xs font-black">Luyện phản xạ qua Minigame 🎮</p>
              </div>
              <Gamepad2 className="h-4 w-4 ml-2 text-amber-600 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
