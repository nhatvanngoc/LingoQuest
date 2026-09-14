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
  Compass,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/auth/role-context";
import { GRADE_10_CURRICULUM } from "@/lib/curriculum/grade10-data";
import { GRADE_11_CURRICULUM } from "@/lib/curriculum/grade11-data";
import { GRADE_12_CURRICULUM } from "@/lib/curriculum/grade12-data";

export default function CurriculumHubPage() {
  const { user } = useRole();

  const totalVocabGrade10 = GRADE_10_CURRICULUM.reduce(
    (acc, u) => acc + (u.vocabulary?.length || 0),
    0
  );
  const totalVocabGrade11 = GRADE_11_CURRICULUM.reduce(
    (acc, u) => acc + (u.vocabulary?.length || 0),
    0
  );
  const totalVocabGrade12 = GRADE_12_CURRICULUM.reduce(
    (acc, u) => acc + (u.vocabulary?.length || 0),
    0
  );

  const GRADES = [
    {
      grade: 10,
      title: "Tiếng Anh Lớp 10 — Global Success",
      subtitle: "Khởi đầu cấp THPT & Nền tảng CEFR A2 → B1",
      unitsCount: 10,
      reviewsCount: 4,
      grammarCount: 14,
      vocabCount: totalVocabGrade10,
      status: "active",
      statusLabel: "Đầy đủ 10 Units + 4 Reviews",
      href: "/curriculum/grade-10",
      themeColor: "blue",
      btnClass: "bg-blue-600 hover:bg-blue-700 text-white",
      borderClass: "border-blue-300 ring-2 ring-blue-500/20",
      badge: "SẴN SÀNG HỌC",
      badgeClass: "from-blue-600 to-indigo-600",
      description:
        "Tập trung xây dựng nền tảng từ vựng học thuật, phát âm chuẩn IPA và phản xạ giao tiếp đời sống THPT: Gia đình, Môi trường, Âm nhạc, Đổi mới học tập và Sinh thái.",
    },
    {
      grade: 11,
      title: "Tiếng Anh Lớp 11 — Global Success",
      subtitle: "Chương trình Trọng tâm & Toàn diện",
      unitsCount: 10,
      reviewsCount: 4,
      grammarCount: 14,
      vocabCount: totalVocabGrade11,
      status: "active",
      statusLabel: "Đầy đủ 10 Units + 4 Reviews",
      href: "/curriculum/grade-11",
      themeColor: "teal",
      btnClass: "bg-teal-600 hover:bg-teal-700 text-white",
      borderClass: "border-teal-300 ring-2 ring-teal-500/20",
      badge: "PHỔ BIẾN NHẤT",
      badgeClass: "from-teal-600 to-emerald-600",
      description:
        "Tích hợp Studio Ngữ pháp trực quan, phòng Đọc hiểu tương tác, thẻ Flashcard phản xạ âm thanh Deep Imprint và kiểm tra phát âm giọng nói AI.",
    },
    {
      grade: 12,
      title: "Tiếng Anh Lớp 12 — Global Success",
      subtitle: "Bứt phá Đích đến & Ôn thi Tốt nghiệp THPT",
      unitsCount: 10,
      reviewsCount: 4,
      grammarCount: 14,
      vocabCount: totalVocabGrade12,
      status: "active",
      statusLabel: "Đầy đủ 10 Units + 4 Reviews",
      href: "/curriculum/grade-12",
      themeColor: "purple",
      btnClass: "bg-purple-600 hover:bg-purple-700 text-white",
      borderClass: "border-purple-300 ring-2 ring-purple-500/20",
      badge: "CHUẨN TỐT NGHIỆP",
      badgeClass: "from-purple-600 to-pink-600",
      description:
        "Tổng ôn toàn diện ngữ pháp THPT phân hóa cao (Đảo ngữ, Thể truyền khiến, Cụm động từ), vốn từ vựng học thuật B2+ và chuyên đề luyện đề chuẩn Bộ GD&ĐT.",
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
              Hệ Sinh Thái Giáo Trình Tiếng Anh THPT
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Hoàn chỉnh trọn bộ 3 khối lớp 10, 11 và 12. Mỗi khối lớp tích hợp đầy đủ 10 Units + 4 bài Review, Flashcard phản xạ âm thanh Deep Imprint, kiểm tra phát âm AI Speech Checker và phòng luyện đề chuẩn cấu trúc khảo thí.
            </p>

            {user?.grade && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-1.5 text-xs font-bold text-amber-300 border border-white/10 backdrop-blur-md">
                <span>⭐ Khối lớp hiện tại của bạn:</span>
                <span className="text-white">Lớp {user.grade}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Grade Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {GRADES.map((g, idx) => {
            const isUserGrade = user?.grade ? Number(user.grade) === g.grade : false;

            return (
              <motion.div
                key={g.grade}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl border p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all bg-white relative hover:shadow-lg ${
                  isUserGrade ? `${g.borderClass} ring-4` : "border-slate-200/90"
                }`}
              >
                <span className={`absolute -top-3 right-6 rounded-full bg-gradient-to-r ${g.badgeClass} text-white text-[10px] font-black px-3.5 py-1 uppercase tracking-wider shadow-sm`}>
                  {g.badge}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white font-heading font-black text-xl shadow-xs">
                      {g.grade}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200">
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
                    <span className="rounded-xl bg-teal-50 px-2.5 py-1 font-bold text-teal-800 border border-teal-100">
                      🎯 {g.vocabCount}+ Từ vựng
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button
                    asChild
                    className={`w-full rounded-2xl ${g.btnClass} font-bold text-sm py-5 shadow-xs cursor-pointer`}
                  >
                    <Link href={g.href} className="flex items-center justify-center gap-2">
                      Vào học Lớp {g.grade} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
