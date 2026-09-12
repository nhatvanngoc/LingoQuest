"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileCheck,
  Plus,
  Clock,
  Check,
  Copy,
  ExternalLink,
  ShieldAlert,
  Shuffle,
  Users,
  Search,
  Eye,
  Trash2,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { getAllExams, type ExamData } from "@/lib/quiz/exam-store";

export default function TeacherExamsPage() {
  const [exams, setExams] = useState<ExamData[]>([]);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setExams(getAllExams());
  }, []);

  const handleCopyPin = (pin: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(pin);
      setCopiedPin(pin);
      setTimeout(() => setCopiedPin(null), 2000);
    }
  };

  const filteredExams = exams.filter((e) => {
    const q = searchQuery.toLowerCase().trim();
    return !q || e.title.toLowerCase().includes(q) || e.pinCode.includes(q);
  });

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl pb-16">
        {/* Header Banner */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3.5 py-1 text-xs font-bold border border-indigo-100 mb-2">
                <FileCheck className="h-4 w-4 text-indigo-600" />
                Cổng Quản Lý Khảo Thí Giáo Viên
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Ngân Hàng Đề Thi &amp; Phòng Thi Trực Tuyến
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                Tạo đề thi trắc nghiệm bằng AI / Parser Azota, cấp mã PIN cho học sinh và giám sát gian lận tự động.
              </p>
            </div>

            <Button
              asChild
              className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm py-6 px-5 shadow-xs shrink-0 cursor-pointer"
            >
              <Link href="/teacher/exams/new" className="flex items-center gap-2">
                <Plus className="h-4 w-4" /> Tạo đề thi mới (Azota)
              </Link>
            </Button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-700">
              Danh sách đề thi hiện có ({filteredExams.length})
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên đề, mã PIN..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Exams List */}
        <div className="space-y-4">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:border-indigo-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="rounded-xl bg-indigo-50 text-indigo-800 border border-indigo-200/60 px-3 py-1 text-xs font-mono font-black flex items-center gap-1.5">
                    PIN: {exam.pinCode}
                  </span>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {exam.durationMinutes > 0 ? `${exam.durationMinutes} phút` : "Không giới hạn"}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {exam.questions.length} câu hỏi
                  </span>
                  {exam.antiCheatEnabled && (
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100 flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> Chống gian lận
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                  {exam.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                  {exam.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap sm:flex-nowrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopyPin(exam.pinCode)}
                  className="rounded-xl text-xs font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 py-2.5 px-3.5 cursor-pointer"
                >
                  {copiedPin === exam.pinCode ? (
                    <>
                      <Check className="mr-1 h-3.5 w-3.5 text-emerald-600" /> Đã copy PIN!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1 h-3.5 w-3.5" /> Copy PIN cho trò
                    </>
                  )}
                </Button>

                <Button
                  asChild
                  size="sm"
                  className="rounded-xl bg-slate-900 hover:bg-indigo-900 text-white font-bold text-xs py-2.5 px-4"
                >
                  <Link href={`/exams/${exam.id}`} target="_blank">
                    <Eye className="mr-1.5 h-3.5 w-3.5" /> Xem trước đề
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
