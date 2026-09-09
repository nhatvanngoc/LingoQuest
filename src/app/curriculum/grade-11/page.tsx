"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  Layers,
  GraduationCap,
  ChevronRight,
  Search,
  CheckCircle2,
  Bookmark,
  Zap,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { GRADE_11_CURRICULUM } from "@/lib/curriculum/grade11-data";
import { Button } from "@/components/ui/button";
import { useRole } from "@/lib/auth/role-context";
import { getUnitVocabStats, useVocabProgress } from "@/lib/curriculum/vocab-progress";

export default function Grade11CurriculumPage() {
  const { user } = useRole();
  const [selectedTerm, setSelectedTerm] = useState<"all" | 1 | 2>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Hook to keep stats reactive
  const { records } = useVocabProgress([], user?.id);

  const filteredUnits = useMemo(() => {
    return GRADE_11_CURRICULUM.filter((u) => {
      const matchTerm = selectedTerm === "all" || u.term === selectedTerm;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        u.titleEn.toLowerCase().includes(q) ||
        u.titleVi.toLowerCase().includes(q) ||
        u.topic.toLowerCase().includes(q) ||
        u.grammarTitle.toLowerCase().includes(q);
      return matchTerm && matchSearch;
    });
  }, [selectedTerm, searchQuery]);

  const totalVocab = useMemo(() => {
    return GRADE_11_CURRICULUM.reduce((acc, u) => acc + (u.vocabulary?.length || 0), 0);
  }, []);

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-emerald-800 to-slate-900 p-8 text-white shadow-xl md:p-10 mb-8"
        >
          {/* Background Decorative Rings */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-40 h-60 w-60 rounded-full bg-emerald-400/15 blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/20 px-3.5 py-1 text-xs font-semibold text-teal-200 backdrop-blur-md mb-4">
              <GraduationCap className="h-4 w-4 text-teal-300" />
              Chương trình chuẩn Bộ GD&ĐT 2018 • Tiếng Anh 11 Global Success
            </div>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Lộ trình Tiếng Anh Lớp 11 Toàn diện
            </h1>
            <p className="mt-3 text-base text-teal-100/90 leading-relaxed sm:text-lg">
              Đầy đủ 10 Units chuyên sâu và 4 bài Review ôn tập. Tích hợp từ vựng có phiên âm & phát âm audio,
              phương pháp phản xạ âm thanh Deep Imprint Flashcard, luyện nói AI Speech Checker, lý thuyết ngữ pháp chuẩn mực và 8 phân mục bài học SGK.
            </p>

            {/* Quick Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-md">
                <span className="text-2xl font-black text-white">10</span>
                <span className="block text-xs font-medium text-teal-200">Units Trọng tâm</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-md">
                <span className="text-2xl font-black text-white">{totalVocab}+</span>
                <span className="block text-xs font-medium text-teal-200">Từ vựng & Audio</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-md">
                <span className="text-2xl font-black text-white">14</span>
                <span className="block text-xs font-medium text-teal-200">Chuyên đề ngữ pháp</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-md">
                <span className="text-2xl font-black text-white">B1 - B2</span>
                <span className="block text-xs font-medium text-teal-200">Chuẩn CEFR</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Term Toggle Buttons */}
          <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-xs">
            <button
              onClick={() => setSelectedTerm("all")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedTerm === "all"
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Tất cả ({GRADE_11_CURRICULUM.length})
            </button>
            <button
              onClick={() => setSelectedTerm(1)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedTerm === 1
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Học kỳ 1 (Unit 1 - 5)
            </button>
            <button
              onClick={() => setSelectedTerm(2)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedTerm === 2
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Học kỳ 2 (Unit 6 - 10)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm unit, từ khóa, ngữ pháp..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredUnits.map((unit, index) => {
            const isReview = unit.isReview;
            const unitWordIds = unit.vocabulary.map((v) => v.id);
            const stats = getUnitVocabStats(unitWordIds, user?.id);

            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`group relative flex flex-col justify-between rounded-3xl border transition-all hover:shadow-lg ${
                  isReview
                    ? "border-amber-200/80 bg-gradient-to-b from-amber-50/60 to-white hover:border-amber-300"
                    : "border-slate-200/80 bg-white hover:border-teal-300"
                } p-6`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase ${
                        isReview
                          ? "bg-amber-100 text-amber-800"
                          : "bg-teal-50 text-teal-700 border border-teal-100"
                      }`}
                    >
                      {isReview ? "Review" : `Unit ${unit.unitNumber < 10 ? `0${unit.unitNumber}` : unit.unitNumber}`}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                        HK {unit.term}
                      </span>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                        {unit.cefrLevel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/curriculum/grade-11/${unit.slug}`}>
                    <h2 className="font-heading text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {unit.titleEn}
                    </h2>
                  </Link>
                  <p className="mt-1 text-xs font-medium text-slate-500 line-clamp-1">{unit.titleVi}</p>

                  {/* Topic & Grammar Details */}
                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Bookmark className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-700">Chủ đề:</span>
                      <span className="truncate">{unit.topic}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs text-slate-600">
                      <Zap className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-700">Ngữ pháp:</span>{" "}
                        <span className="text-slate-600">{unit.grammarTitle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Feature Stats */}
                  <div className="mt-4 flex items-center gap-4 rounded-xl bg-slate-50 p-2.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-teal-600" />
                      <span className="font-bold text-slate-900">{unit.vocabulary.length}</span> từ vựng
                    </div>
                    <div className="h-3 w-px bg-slate-200" />
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="font-bold text-slate-900">{unit.sections.length}</span> bài học
                    </div>
                  </div>

                  {/* Real SRS Vocabulary Progress Bar */}
                  {unit.vocabulary.length > 0 && (
                    <div className="mt-4 rounded-xl bg-slate-50/80 p-2.5 border border-slate-100">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-1">
                        <span>Tiến độ ghi nhớ:</span>
                        <span className={stats.percent > 0 ? "text-emerald-700 font-bold" : "text-slate-500"}>
                          {stats.mastered}/{stats.total} từ ({stats.percent}%)
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                          style={{ width: `${stats.percent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Button
                    asChild
                    className="w-full justify-between rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs"
                  >
                    <Link href={`/curriculum/grade-11/${unit.slug}`}>
                      <span>Vào học bài này</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state when search produces no result */}
        {filteredUnits.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center my-8">
            <Search className="mx-auto h-10 w-10 text-slate-300 mb-3" />
            <h3 className="font-heading text-base font-bold text-slate-800">Không tìm thấy bài học phù hợp</h3>
            <p className="mt-1 text-xs text-slate-500">Hãy thử tìm với từ khóa khác hoặc chuyển sang chế độ &quot;Tất cả&quot;.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedTerm("all");
              }}
              className="mt-4 rounded-xl"
            >
              Đặt lại bộ lọc
            </Button>
          </div>
        )}
      </div>
    </AppShell>
  );
}
