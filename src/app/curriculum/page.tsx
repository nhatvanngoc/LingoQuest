"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck,
  CheckCircle2,
  Lock,
  Compass,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/auth/role-context";
import { GRADE_11_CURRICULUM } from "@/lib/curriculum/grade11-data";

export default function CurriculumHubPage() {
  const { user } = useRole();

  const totalVocabGrade11 = GRADE_11_CURRICULUM.reduce(
    (acc, u) => acc + (u.vocabulary?.length || 0),
    0
  );

  const GRADES = [
    {
      grade: 10,
      title: "Tiếng Anh Lớp 10 — Global Success",
      subtitle: "Khởi đầu cấp THPT & Nền tảng CEFR A2 → B1",
      unitsCount: 10,
      grammarCount: 12,
      status: "coming_soon",
      statusLabel: "Lộ trình 2026-2027",
      href: "/curriculum/grade-11", // Friendly redirect or explore
      color: "from-blue-600 to-indigo-700",
      bgLight: "bg-blue-50/50 border-blue-200",
      description:
        "Tập trung xây dựng nền tảng từ vựng học thuật, phát âm chuẩn IPA và phản xạ giao tiếp đời sống THPT.",
    },
    {
      grade: 11,
      title: "Tiếng Anh Lớp 11 — Global Success",
      subtitle: "Chương trình Trọng tâm & Toàn diện (Đang hoạt động)",
      unitsCount: 10,
      reviewsCount: 4,
      grammarCount: 14,
      vocabCount: totalVocabGrade11,
      status: "active",
      statusLabel: "Đầy đủ 10 Units + 4 Reviews",
      href: "/curriculum/grade-11",
      color: "from-teal-600 via-emerald-600 to-teal-800",
      bgLight: "bg-teal-50/60 border-teal-300",
      badge: "SẴN SÀNG HỌC",
      description:
        "Tích hợp Studio Ngữ pháp trực quan Manim/Remotion, phòng Đọc hiểu tương tác, thẻ Flashcard 3D phản xạ tai và đấu trường thi Azota/Quizizz.",
    },
    {
      grade: 12,
      title: "Tiếng Anh Lớp 12 — Ôn thi Tốt nghiệp THPT",
      subtitle: "Bứt phá Đích đến & Chinh phục Điểm 9+ Đại học",
      unitsCount: 10,
      grammarCount: 15,
      status: "coming_soon",
      statusLabel: "Chuyên đề Luyện đề 2026",
      href: "/curriculum/grade-11",
      color: "from-purple-600 to-pink-700",
      bgLight: "bg-purple-50/50 border-purple-200",
      description:
        "Tổng ôn toàn diện ngữ pháp THPT, phương pháp giải nhanh bài đọc hiểu dài và kho đề thi thử chuẩn cấu trúc Bộ GD&ĐT.",
    },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl pb-16">
        {/* Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden mb-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-400/30 px-3.5 py-1 text-xs font-bold text-teal-300 backdrop-blur-md mb-4">
              <Compass className="h-4 w-4 text-teal-300" />
              Khung Chương Trình Chuẩn Bộ GD&ĐT 2018 (Global Success)
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Trung Tâm Giáo Trình Tiếng Anh THPT
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Lựa chọn khối lớp để bắt đầu lộ trình học thông minh: Flashcard phản xạ âm thanh, video bài giảng hoạt họa, phòng đọc hiểu thông minh và làm đề trắc nghiệm chuẩn kỳ thi.
            </p>

            {user?.grade && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-1.5 text-xs font-bold text-amber-300 border border-white/10 backdrop-blur-md">
                <span>⭐ Khối lớp của bạn:</span>
                <span className="text-white">Lớp {user.grade}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Grade Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {GRADES.map((g, idx) => {
            const isActive = g.status === "active";
            return (
              <motion.div
                key={g.grade}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl border p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all bg-white relative ${
                  isActive
                    ? "border-teal-300 shadow-md ring-2 ring-teal-500/20"
                    : "border-slate-200/90 opacity-90"
                }`}
              >
                {isActive && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-[10px] font-black px-3.5 py-1 uppercase tracking-wider shadow-sm">
                    {g.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white font-heading font-black text-xl shadow-xs">
                      {g.grade}
                    </span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        isActive
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      }`}
                    >
                      {g.statusLabel}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-extrabold text-slate-900 leading-tight">
                    {g.title}
                  </h2>
                  <p className="mt-1.5 text-xs font-bold text-teal-700">{g.subtitle}</p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {g.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-xl bg-slate-50 px-2.5 py-1 font-semibold text-slate-700 border border-slate-100">
                      📚 {g.unitsCount} Units
                    </span>
                    <span className="rounded-xl bg-slate-50 px-2.5 py-1 font-semibold text-slate-700 border border-slate-100">
                      ⚡ {g.grammarCount} Ngữ pháp
                    </span>
                    {g.vocabCount && (
                      <span className="rounded-xl bg-teal-50 px-2.5 py-1 font-bold text-teal-800 border border-teal-100">
                        🎯 {g.vocabCount}+ Từ vựng
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {isActive ? (
                    <Button
                      asChild
                      className="w-full rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-5 shadow-xs cursor-pointer"
                    >
                      <Link href={g.href} className="flex items-center justify-center gap-2">
                        Vào học ngay Lớp 11 <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-2xl text-slate-600 border-slate-200 hover:bg-slate-50 font-bold text-xs py-5"
                    >
                      <Link href="/curriculum/grade-11" className="flex items-center justify-center gap-1.5">
                        <span>Học thử nghiệm với Lớp 11</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
