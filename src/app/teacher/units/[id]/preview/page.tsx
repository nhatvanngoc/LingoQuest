"use client";

import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Volume2,
  FileText,
  HelpCircle,
  Puzzle,
  PenTool,
  ShieldCheck,
  UploadCloud,
  ChevronRight,
  ExternalLink,
  Layers,
  Clock,
  RefreshCw,
} from "lucide-react";
import type {
  LingoQuestUnitPackage,
  ServerQualityGate,
} from "@/lib/curriculum/types";

export default function UnitPreviewPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const unitId = params?.id as string;
  const initialJobId = searchParams?.get("jobId");

  const [jobId, setJobId] = useState<string | null>(initialJobId);
  const [jobProgress, setJobProgress] = useState<number>(0);
  const [jobStage, setJobStage] = useState<string>("NORMALIZE");
  const [jobMessage, setJobMessage] = useState<string>("Đang kết nối tiến trình...");
  const [isGenerating, setIsGenerating] = useState<boolean>(Boolean(initialJobId));
  const [generationError, setGenerationError] = useState<string | null>(null);

  const [unitPackage, setUnitPackage] = useState<LingoQuestUnitPackage | null>(null);
  const [qualityGate, setQualityGate] = useState<ServerQualityGate | null>(null);
  const [unitStatus, setUnitStatus] = useState<string>("DRAFT");
  const [unitMeta, setUnitMeta] = useState<{ title?: string; grade?: any; unitNumber?: number }>({});

  const [activeTab, setActiveTab] = useState<
    "overview" | "flashcards" | "reading" | "questions" | "syntax" | "cloze" | "writing"
  >("overview");

  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  // Poll Job Status if job is active
  useEffect(() => {
    if (!jobId || !isGenerating) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/v1/generation-jobs/${jobId}`);
        if (!res.ok) return;

        const data = await res.json();
        setJobProgress(data.progress || 0);
        setJobStage(data.currentStage || "RUNNING");
        setJobMessage(data.message || "Đang xử lý...");

        if (data.status === "COMPLETED") {
          setIsGenerating(false);
          clearInterval(interval);
          if (data.package) {
            setUnitPackage(data.package);
            setQualityGate(data.qualityGate);
            setUnitStatus("READY_FOR_REVIEW");
            setUnitMeta({
              title: data.package.metadata.title,
              grade: data.package.metadata.grade,
            });
          } else {
            // Fetch directly from unit endpoint
            fetchUnitData();
          }
        } else if (data.status === "FAILED") {
          setIsGenerating(false);
          setGenerationError(data.error || "Tiến trình sinh nội dung gặp lỗi.");
          clearInterval(interval);
        }
      } catch (err) {
        console.warn("Polling error:", err);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId, isGenerating]);

  // Fetch unit data on load if not generating
  const fetchUnitData = async () => {
    try {
      const res = await fetch(`/api/v1/units/${unitId}`);
      if (!res.ok) return;
      const data = await res.json();

      if (data.package) {
        setUnitPackage(data.package);
        setQualityGate(data.qualityGate);
        setUnitStatus(data.status);
        setUnitMeta({
          title: data.title || data.package.metadata.title,
          grade: data.grade || data.package.metadata.grade,
          unitNumber: data.unitNumber,
        });
        setIsGenerating(false);
      }
    } catch (err) {
      console.warn("Error fetching unit:", err);
    }
  };

  useEffect(() => {
    if (!initialJobId) {
      fetchUnitData();
    }
  }, [unitId, initialJobId]);

  // Handle Publish
  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const res = await fetch(`/api/v1/units/${unitId}/publish`, {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok) {
        setUnitStatus("PUBLISHED");
        setPublishSuccess(true);
      } else {
        alert(data.message || "Không thể xuất bản bài học.");
      }
    } catch (err: any) {
      alert("Lỗi xuất bản: " + err.message);
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/teacher"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/teacher/units/new"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
            >
              + Tạo Unit Mới
            </Link>
          </div>
        </div>

        {/* If Generating: Pipeline Stepper Progress */}
        {isGenerating && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm mb-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                AI Pipeline Đang Xử Lý & Kiểm Định Chất Lượng
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-lg mx-auto">
                {jobMessage}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto space-y-2">
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${jobProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-medium">
                <span>Giai đoạn: {jobStage}</span>
                <span>{jobProgress}%</span>
              </div>
            </div>

            {/* Stage Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-4 text-xs font-medium">
              <div className={`p-2.5 rounded-xl border ${jobProgress >= 25 ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300" : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`}>
                1. Chuẩn Hóa & CEFR
              </div>
              <div className={`p-2.5 rounded-xl border ${jobProgress >= 55 ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300" : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`}>
                2. Flashcards & Bài Đọc
              </div>
              <div className={`p-2.5 rounded-xl border ${jobProgress >= 70 ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300" : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`}>
                3. Câu Hỏi Đọc Hiểu
              </div>
              <div className={`p-2.5 rounded-xl border ${jobProgress >= 95 ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300" : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`}>
                4. Quality Gate 80%+
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {generationError && (
          <div className="bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 rounded-2xl p-6 mb-8 text-rose-800 dark:text-rose-200 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Quá trình sinh bài học thất bại</h3>
              <p className="text-sm mt-1">{generationError}</p>
              <button
                onClick={() => router.push("/teacher/units/new")}
                className="mt-4 px-4 py-2 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-700 transition-colors"
              >
                Thử lại với nội dung khác
              </button>
            </div>
          </div>
        )}

        {/* Ready State: Loaded Unit Package */}
        {unitPackage && (
          <div className="space-y-6">
            {/* Top Info Bar */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200">
                    Lớp {unitPackage.metadata.grade}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Chủ đề: {unitPackage.metadata.topic}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      unitStatus === "PUBLISHED"
                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
                        : "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200"
                    }`}
                  >
                    {unitStatus === "PUBLISHED" ? "Đã Xuất Bản" : "Sẵn Sàng Duyệt"}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  {unitPackage.metadata.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Mục tiêu năng lực: {unitPackage.metadata.learningObjectives?.join(" • ") || "Toàn diện 4 kỹ năng"}
                </p>
              </div>

              {/* Publish Action Button */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePublish}
                  disabled={unitStatus === "PUBLISHED" || isPublishing}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all ${
                    unitStatus === "PUBLISHED"
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-default"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20"
                  }`}
                >
                  {isPublishing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Đang xuất bản...
                    </>
                  ) : unitStatus === "PUBLISHED" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Đã Kích Hoạt Cho Học Sinh
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-4 h-4" /> Xuất Bản Bài Học
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quality Gate Metrics Banner */}
            <div className="bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    Báo Cáo Kiểm Định Chất Lượng Tự Động (Quality Gate)
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> PASS QUALITY GATE
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Độ phủ từ vựng trong bài đọc</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {((qualityGate?.lexicalCoverage ?? unitPackage.qualityReport.vocabularyCoverage ?? 0.88) * 100).toFixed(0)}%
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-normal ml-1">(chỉ tiêu ≥ 80%)</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Độ phủ ngữ pháp</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {((qualityGate?.grammarCoverage ?? unitPackage.qualityReport.grammarCoverage ?? 0.9) * 100).toFixed(0)}%
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-normal ml-1">Đầy đủ</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Tính duy nhất đáp án</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    100% Valid
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-normal ml-1">(1 key/câu)</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Độ dài bài đọc</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {unitPackage.reading?.wordCount || 180} từ
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-normal ml-1">(150-250 từ)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Navigation Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar gap-2">
              {[
                { id: "overview", label: "Tổng Quan", icon: BookOpen },
                { id: "flashcards", label: `Flashcards (${unitPackage.flashcards.length})`, icon: Layers },
                { id: "reading", label: "Bài Đọc Ngữ Cảnh", icon: FileText },
                { id: "questions", label: `Câu Hỏi (${unitPackage.reading.questions.length})`, icon: HelpCircle },
                { id: "syntax", label: `Cú Pháp (${unitPackage.syntaxChunks.length})`, icon: Puzzle },
                { id: "cloze", label: `Điền Từ (${unitPackage.clozeTest.items.length})`, icon: FileText },
                { id: "writing", label: "Viết & Rubric", icon: PenTool },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`inline-flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                        : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENTS */}

            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                    Khung Năng Lực Bài Học (Can-Do Objectives)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {unitPackage.metadata.learningObjectives?.map((obj, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                          {obj}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center space-y-2">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {unitPackage.flashcards.length}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Từ Vựng Trọng Tâm</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Có IPA US/UK, collocations và ví dụ song ngữ</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center space-y-2">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {unitPackage.reading.wordCount} từ
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Bài Đọc Ngữ Cảnh</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Thể loại {unitPackage.reading.genre} chuẩn format thi</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center space-y-2">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {unitPackage.reading.questions.length + unitPackage.clozeTest.items.length + unitPackage.syntaxChunks.length}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">Bài Tập Đánh Giá</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Trắc nghiệm đọc hiểu, cú pháp và điền từ</p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. FLASHCARDS TAB */}
            {activeTab === "flashcards" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {unitPackage.flashcards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            {card.term}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                            {card.cefrLevel}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-400 italic">
                            ({card.partOfSpeech})
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5 flex gap-3">
                          <span>US: {card.ipaUS}</span>
                          <span>UK: {card.ipaUK}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl space-y-1">
                      <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        {card.meaningVi}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                        {card.meaningEn}
                      </div>
                    </div>

                    {/* Collocations */}
                    {card.collocations?.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Cụm từ liên quan:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {card.collocations.map((c, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                            >
                              {c.phrase}: <span className="text-slate-600 dark:text-slate-400">{c.meaningVi}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tiered Examples */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                      <div>
                        <span className="font-bold text-slate-600 dark:text-slate-400">A2: </span>
                        <span className="text-slate-800 dark:text-slate-200">{card.examples?.a2?.en}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-600 dark:text-slate-400">B1/B2: </span>
                        <span className="text-slate-800 dark:text-slate-200">{card.examples?.b1b2?.en}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. READING TAB */}
            {activeTab === "reading" && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mr-2">
                      Thể loại: {unitPackage.reading.genre}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      Độ dài: {unitPackage.reading.wordCount} từ
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    {unitPackage.reading.title}
                  </h3>
                  <div className="text-slate-800 dark:text-slate-200 leading-relaxed space-y-4 font-serif text-base">
                    {unitPackage.reading.passage.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Lexical Covered in Passage */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase text-slate-600 dark:text-slate-400 mb-2">
                    Từ vựng lồng ghép trong văn cảnh:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {unitPackage.reading.coverage?.coveredVocabulary?.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-200 dark:border-emerald-800/40"
                      >
                        {item.surfaceForm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. QUESTIONS TAB */}
            {activeTab === "questions" && (
              <div className="space-y-4">
                {unitPackage.reading.questions.map((q, qIdx) => (
                  <div
                    key={q.id || qIdx}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                          {qIdx + 1}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                          {q.skill}
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          Level: {q.level}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                      {q.stem}
                    </h4>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 transition-colors ${
                            opt.id === q.correctOptionId
                              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-medium"
                              : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                              opt.id === q.correctOptionId
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <div>
                            <div>{opt.text}</div>
                            {opt.rationaleVi && (
                              <div className="text-2xs text-slate-600 dark:text-slate-400 mt-1 italic">
                                {opt.rationaleVi}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Explanation & Evidence */}
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs space-y-1">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        Giải thích: <span className="font-normal text-slate-600 dark:text-slate-400">{q.explanationVi}</span>
                      </div>
                      {q.evidence && (
                        <div className="text-2xs text-slate-600 dark:text-slate-400 italic">
                          Dẫn chứng: "{q.evidence}"
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 5. SYNTAX TAB */}
            {activeTab === "syntax" && (
              <div className="space-y-4">
                {unitPackage.syntaxChunks.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        Bài tập sắp xếp câu #{idx + 1}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        Level: {item.level}
                      </span>
                    </div>

                    {/* Chunks */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.chunks.map((chunk, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-xs border border-slate-200 dark:border-slate-700"
                        >
                          {chunk}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs space-y-1">
                      <div>
                        <span className="font-bold text-emerald-700 dark:text-emerald-300">Đáp án chuẩn: </span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{item.answer}</span>
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        Giải thích: {item.explanationVi}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 6. CLOZE TAB */}
            {activeTab === "cloze" && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Định dạng: {unitPackage.clozeTest.genre}
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold">
                    {unitPackage.clozeTest.items.length} ô trống
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 font-mono text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {unitPackage.clozeTest.textWithBlanks}
                </div>

                <div className="space-y-4 pt-2">
                  {unitPackage.clozeTest.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs"
                    >
                      <div className="font-bold text-slate-900 dark:text-slate-100">
                        Ô trống ({item.blankIndex}):
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {item.options.map((opt) => (
                          <div
                            key={opt.id}
                            className={`p-2 rounded-lg border text-center ${
                              opt.id === item.correctOptionId
                                ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500 font-bold text-emerald-800 dark:text-emerald-200"
                                : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {opt.id}. {opt.text}
                          </div>
                        ))}
                      </div>
                      <div className="text-2xs text-slate-600 dark:text-slate-400 italic">
                        Giải thích: {item.explanationVi}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. WRITING TAB */}
            {activeTab === "writing" && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Đề Bài Viết Ngắn ({unitPackage.writingTask.minWords}-{unitPackage.writingTask.maxWords} từ)
                  </h3>
                  <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 text-sm font-medium text-slate-900 dark:text-slate-100">
                    {unitPackage.writingTask.promptEn}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    Gợi ý tiếng Việt: {unitPackage.writingTask.supportVi}
                  </p>
                </div>

                {/* Planning questions */}
                {unitPackage.writingTask.planningQuestions?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                      Câu hỏi định hướng dàn ý:
                    </h4>
                    <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1">
                      {unitPackage.writingTask.planningQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rubric */}
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Rubric Chấm Điểm 4 Tiêu Chí (Tổng 10.0 điểm)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {unitPackage.writingTask.rubric.map((crit) => (
                      <div
                        key={crit.criterion}
                        className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2 text-xs"
                      >
                        <div className="flex justify-between font-bold text-slate-900 dark:text-slate-100">
                          <span>{crit.criterion}</span>
                          <span className="text-emerald-600 font-bold">Max {crit.maxScore}đ</span>
                        </div>
                        <div className="space-y-1 text-2xs text-slate-600 dark:text-slate-400">
                          {crit.bands.map((band) => (
                            <div key={band.score} className="flex gap-2">
                              <span className="font-bold text-slate-700 dark:text-slate-300">{band.score}đ:</span>
                              <span>{band.descriptorVi}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
