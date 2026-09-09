"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  BookOpen,
  Send,
  Layers,
  FileText,
  AlertCircle,
  HelpCircle,
  Clock,
  CheckCircle2,
  ListFilter,
} from "lucide-react";

export default function NewUnitPage() {
  const router = useRouter();

  const [grade, setGrade] = useState<10 | 11 | 12>(10);
  const [textbookSeries, setTextbookSeries] = useState<string>("GLOBAL_SUCCESS");
  const [unitNumber, setUnitNumber] = useState<number>(2);
  const [unitTitle, setUnitTitle] = useState<string>("Humans and the Environment");
  const [rawVocabulary, setRawVocabulary] = useState<string>(
    `adopt (a green lifestyle)\ncarbon footprint\neco-friendly\nappliances\nlitter\nrelease\nreduce\nawareness`
  );
  const [rawGrammar, setRawGrammar] = useState<string>(
    `Will vs. Be going to (future intentions vs predictions);\nPassive voice with modal verbs (should/can/must be protected)`
  );
  const [teacherNotes, setTeacherNotes] = useState<string>(
    `Tập trung vào ngữ cảnh bảo vệ môi trường trường học và gia đình Việt Nam theo chương trình GDPT 2018.`
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFillSample = () => {
    setGrade(10);
    setTextbookSeries("GLOBAL_SUCCESS");
    setUnitNumber(2);
    setUnitTitle("Humans and the Environment");
    setRawVocabulary(
      `adopt (a green lifestyle) [B1]\ncarbon footprint [B1]\neco-friendly [B1]\nhousehold appliances [A2]\nlitter (v, n) [B1]\nrelease (harmful gases) [B2]\nreduce (waste) [A2]\nraise awareness [B2]`
    );
    setRawGrammar(
      `Will vs. Be going to (predictions vs predetermined intentions);\nPassive voice with modals (can/must/should be done)`
    );
    setTeacherNotes(
      `Bám sát định dạng đề thi THPT Quốc gia 2018 (đoạn văn 180-220 từ, câu hỏi 4 lựa chọn, câu sắp xếp từ và bài tập điền từ).`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        grade,
        textbookSeries,
        unitNumber,
        unitTitle,
        rawVocabulary,
        rawGrammar,
        teacherNotes: teacherNotes || undefined,
        generationOptions: {
          locale: "vi-VN",
          targetExamProfile: "THPT_2018_CURRENT",
          passageWordCount: { min: 150, max: 250 },
          questionCount: 4,
        },
      };

      const res = await fetch("/api/v1/units/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Không thể khởi tạo tiến trình sinh bài học.");
      }

      // Redirect to preview/live status page
      router.push(`/teacher/units/${data.unitId}/preview?jobId=${data.jobId}`);
    } catch (err: any) {
      console.error("Submit error:", err);
      setErrorMessage(err.message || "Đã xảy ra lỗi không xác định. Vui lòng kiểm tra lại thông tin.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/teacher"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại Dashboard Giáo viên
          </Link>

          <button
            type="button"
            onClick={handleFillSample}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" /> Nạp nhanh dữ liệu mẫu (Unit 2 Lớp 10)
          </button>
        </div>

        {/* Main Header Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
                <Clock className="w-3.5 h-3.5" /> Thao tác nhanh dưới 30 giây
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Tạo Chuyên Đề Bài Học Mới (AI Factory)
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Giáo viên chỉ cần nhập danh sách từ vựng & chủ điểm ngữ pháp. Hệ thống AI tự động phân tích chuẩn CEFR, tạo Flashcards, bài đọc ngữ cảnh, câu hỏi trắc nghiệm và rubric kiểm định chất lượng.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" />
            <div>
              <h4 className="text-sm font-semibold">Lỗi khởi tạo</h4>
              <p className="text-xs mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Unit Info */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" /> 1. Khung Chương Trình & Đơn Vị Bài Học
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Khối Lớp (CT GDPT 2018)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[10, 11, 12].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGrade(g as any)}
                      className={`py-2 text-center text-sm font-bold rounded-xl border transition-all ${
                        grade === g
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      Lớp {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Bộ Sách Giáo Khoa
                </label>
                <select
                  value={textbookSeries}
                  onChange={(e) => setTextbookSeries(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="GLOBAL_SUCCESS">Global Success (Kết nối tri thức)</option>
                  <option value="FRIENDS_GLOBAL">Friends Global (Chân trời sáng tạo)</option>
                  <option value="BRIGHT">Bright (Cánh diều)</option>
                  <option value="OTHER">Bộ SGK / Chuyên đề khác</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Số Thứ Tự Unit
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none font-semibold"
                  />
                  <span className="absolute right-3 top-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    Unit {unitNumber}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Tên Chủ Đề Bài Học (Unit Title)
              </label>
              <input
                type="text"
                required
                value={unitTitle}
                onChange={(e) => setUnitTitle(e.target.value)}
                placeholder="VD: Humans and the Environment, Life Stories, Healthy Living..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none font-medium"
              />
            </div>
          </div>

          {/* Section 2: Raw Vocabulary & Grammar Input */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" /> 2. Nhập Từ Vựng & Ngữ Pháp Trọng Tâm
            </h2>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Danh Sách Từ Vựng Thô (Một từ/cụm trên mỗi dòng hoặc cách nhau bằng dấu phẩy)
                </label>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Hỗ trợ cụm từ, chú thích trong ngoặc đơn, tag CEFR tùy chọn
                </span>
              </div>
              <textarea
                rows={5}
                required
                value={rawVocabulary}
                onChange={(e) => setRawVocabulary(e.target.value)}
                placeholder={`adopt (a green lifestyle)\ncarbon footprint\neco-friendly\nappliances\nlitter\nrelease\nreduce\nawareness`}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none leading-relaxed"
              />
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Hệ thống sẽ tự động tách cụm từ, tra phiên âm IPA (US/UK), xác định nghĩa ngữ cảnh và xếp level CEFR (A1-B2).
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Chủ Điểm Ngữ Pháp Mục Tiêu (Raw Grammar)
                </label>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Nhập cấu trúc, thì hoặc chủ điểm ngữ pháp
                </span>
              </div>
              <textarea
                rows={2}
                required
                value={rawGrammar}
                onChange={(e) => setRawGrammar(e.target.value)}
                placeholder="VD: Will vs. Be going to; Passive voice with modal verbs"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Ghi Chú Hoặc Chỉ Dẫn Riêng Của Giáo Viên (Tùy chọn)
              </label>
              <input
                type="text"
                value={teacherNotes}
                onChange={(e) => setTeacherNotes(e.target.value)}
                placeholder="VD: Nhấn mạnh vào bối cảnh các chiến dịch bảo vệ môi trường của học sinh..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Section 3: AI Pipeline Configuration Gating */}
          <div className="bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" /> Quy trình tự động chuẩn hóa & kiểm định
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Khi bấm khởi tạo, AI Orchestrator DAG sẽ chạy qua 7 bước: Chuẩn hóa từ → Phân tích CEFR → Blueprint sư phạm → Flashcards song ngữ → Bài đọc 150-250 từ → Trắc nghiệm 4 lựa chọn có giải thích → Cú pháp/Cloze/Writing → Quality Gate.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Đang khởi tạo...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Bắt đầu Sinh Bài Học AI
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
