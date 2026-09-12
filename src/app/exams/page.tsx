"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Trophy,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Search,
  Gamepad2,
  FileText,
  RotateCcw,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { getAllExams, type ExamData } from "@/lib/quiz/exam-store";

export default function ExamArenaPage() {
  const router = useRouter();
  const [exams, setExams] = useState<ExamData[]>([]);
  const [pinInput, setPinInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setExams(getAllExams());
  }, []);

  const handleJoinPin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = pinInput.trim();
    if (!clean) return;
    router.push(`/exams/${clean}`);
  };

  const filteredExams = exams.filter((e) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      !q ||
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.pinCode.includes(q)
    );
  });

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl pb-16">
        {/* Hero Section with PIN Input */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-indigo-200/90 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden mb-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3.5 py-1 text-xs font-bold text-indigo-300 backdrop-blur-md mb-4">
              <Trophy className="h-4 w-4 text-amber-400" />
              Đấu Trường Thi Đấu &amp; Khảo Thí Trực Tuyến LingoQuest
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Phòng Thi Azota &amp; Đấu Trường Quizizz
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Nhập mã PIN do giáo viên cung cấp hoặc thử sức với các bài thi trắc nghiệm chuẩn SGK 11. Hỗ trợ cả 2 chế độ: <strong>Đấu game Quizizz tính điểm streak</strong> hoặc <strong>Phiếu làm bài chuẩn Azota</strong>!
            </p>

            {/* PIN Code Form */}
            <form onSubmit={handleJoinPin} className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md">
              <div className="relative w-full">
                <input
                  type="text"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.trim())}
                  placeholder="Nhập mã PIN 6 số..."
                  className="w-full rounded-2xl border border-white/20 bg-white/10 py-3.5 pl-4 pr-3 text-base font-mono font-bold tracking-widest text-white placeholder:text-slate-400 placeholder:tracking-normal focus:border-indigo-400 focus:outline-none focus:bg-white/15 transition-all backdrop-blur-md"
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm py-6 px-7 shadow-lg cursor-pointer shrink-0"
              >
                Vào thi 🚀
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900">
              Đề thi có sẵn trên hệ thống ({filteredExams.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Chọn bất kỳ đề thi nào bên dưới để bắt đầu luyện tập ngay
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên đề, mã PIN..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/60 px-3 py-1 text-xs font-bold flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-amber-500" />
                    Mã PIN: <span className="font-mono font-black">{exam.pinCode}</span>
                  </span>

                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {exam.durationMinutes > 0 ? `${exam.durationMinutes} phút` : "Không giới hạn"}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                  {exam.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {exam.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-slate-600 font-semibold">
                    📝 {exam.questions.length} câu trắc nghiệm
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600 font-semibold">
                    👤 {exam.authorName}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Button
                  asChild
                  className="flex-1 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm py-5 shadow-xs"
                >
                  <Link href={`/exams/${exam.id}`}>
                    <Gamepad2 className="mr-1.5 h-4 w-4 text-amber-300" /> Vào thi ngay
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs sm:text-sm py-5"
                >
                  <Link href={`/exams/${exam.id}`}>
                    <FileText className="mr-1 h-3.5 w-3.5" /> Xem đề
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
