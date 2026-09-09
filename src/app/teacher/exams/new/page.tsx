"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Sparkles,
  Zap,
  BookOpen,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  Shuffle,
  ShieldAlert,
  Eye,
  Send,
  FileText,
  Gamepad2,
  HelpCircle,
  Award,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { parseAzotaExamText, SAMPLE_AZOTA_EXAM, type ParsedQuestion } from "@/lib/quiz/azota-parser";
import { saveExam, generatePinCode, type ExamData } from "@/lib/quiz/exam-store";
import { GRADE_11_CURRICULUM } from "@/lib/curriculum/grade11-data";
import { getCollocationsForWord } from "@/lib/curriculum/vocab-collocations";

export default function TeacherExamCreatorPage() {
  const router = useRouter();

  // Mode: azota-paste, textbook-import, manual
  const [sourceMode, setSourceMode] = useState<"azota" | "textbook" | "manual">("azota");

  // Form Basic Info
  const [examTitle, setExamTitle] = useState("Bài kiểm tra 15 phút: Tiếng Anh 11");
  const [examDesc, setExamDesc] = useState("Kiểm tra trắc nghiệm từ vựng, ngữ pháp và kỹ năng đọc hiểu.");
  const [grade, setGrade] = useState("11");
  const [durationMinutes, setDurationMinutes] = useState<number>(15);

  // Azota Settings
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);
  const [antiCheatEnabled, setAntiCheatEnabled] = useState(true);
  const [showAnswersAfterSubmit, setShowAnswersAfterSubmit] = useState(true);

  // Raw Text for Azota Parser
  const [rawExamText, setRawExamText] = useState(SAMPLE_AZOTA_EXAM);
  const [parseErrors, setParseErrors] = useState<string[]>([]);

  // Current Question List
  const [questions, setQuestions] = useState<ParsedQuestion[]>(() => {
    return parseAzotaExamText(SAMPLE_AZOTA_EXAM).questions;
  });

  // Selected Textbook Unit for Import
  const [selectedUnitSlug, setSelectedUnitSlug] = useState(GRADE_11_CURRICULUM[0].slug);

  // Created Exam Result (Popup / Share modal)
  const [createdExam, setCreatedExam] = useState<ExamData | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Action: Parse Azota Text
  const handleParseRawText = () => {
    const res = parseAzotaExamText(rawExamText);
    setQuestions(res.questions);
    setParseErrors(res.errors);
    if (res.title && res.title !== "Đề kiểm tra trắc nghiệm tiếng Anh") {
      setExamTitle(res.title);
    }
  };

  // Action: Import from Grade 11 Textbook
  const handleImportFromUnit = () => {
    const unit = GRADE_11_CURRICULUM.find((u) => u.slug === selectedUnitSlug) || GRADE_11_CURRICULUM[0];
    setExamTitle(`Đề kiểm tra trắc nghiệm Unit ${unit.unitNumber}: ${unit.titleEn}`);
    setExamDesc(`Kiểm tra chuyên đề từ vựng ${unit.topic} và ngữ pháp ${unit.grammarTitle}.`);

    const generated: ParsedQuestion[] = [];
    const vocabs = unit.vocabulary;

    // Vocab questions
    for (let i = 0; i < Math.min(5, vocabs.length); i++) {
      const v = vocabs[i];
      const otherMeanings = vocabs
        .filter((x) => x.word !== v.word)
        .map((x) => x.meaningVi)
        .slice(0, 3);
      const options = [v.meaningVi, ...otherMeanings].sort(() => 0.5 - Math.random());
      const keys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
      const correctIdx = options.indexOf(v.meaningVi);

      generated.push({
        id: `q-u-${i + 1}`,
        questionNumber: i + 1,
        questionText: `Từ "${v.word}" (${v.partOfSpeech}) có nghĩa là gì trong tiếng Việt?`,
        options: options.map((opt, idx) => ({ key: keys[idx], text: opt })),
        correctAnswer: keys[correctIdx] || "A",
        explanation: `"${v.word}" (${v.ipa}) mang nghĩa chính xác: ${v.meaningVi}.`,
        difficulty: "easy",
      });
    }

    // Collocation question
    if (vocabs.length > 0) {
      const target = vocabs[0];
      const collocs = getCollocationsForWord(target.word, target.partOfSpeech);
      const correctColloc = collocs[0] || `${target.word} properly`;
      const fakes = [`break ${target.word}`, `take ${target.word} apart`, `drop ${target.word}`];
      const options = [correctColloc, ...fakes].sort(() => 0.5 - Math.random());
      const keys: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
      const correctIdx = options.indexOf(correctColloc);

      generated.push({
        id: `q-u-6`,
        questionNumber: 6,
        questionText: `Cụm từ (collocation) thường dùng chính xác với "${target.word}" là:`,
        options: options.map((opt, idx) => ({ key: keys[idx], text: opt })),
        correctAnswer: keys[correctIdx] || "A",
        explanation: `Cụm từ tự nhiên theo chuẩn SGK và ngữ cảnh là "${correctColloc}".`,
        difficulty: "medium",
      });
    }

    // Grammar question
    generated.push({
      id: `q-u-7`,
      questionNumber: 7,
      questionText: `Chuyên đề ngữ pháp trọng tâm của bài này là gì?`,
      options: [
        { key: "A", text: unit.grammarTitle },
        { key: "B", text: "Thì tương lai tiếp diễn và tương lai hoàn thành" },
        { key: "C", text: "Đảo ngữ câu điều kiện loại 3" },
        { key: "D", text: "Mệnh đề danh từ" },
      ],
      correctAnswer: "A",
      explanation: `Chuyên đề ngữ pháp chính thức là: ${unit.grammarTitle}.`,
      difficulty: "medium",
    });

    setQuestions(generated);
  };

  // Action: Add Manual Question
  const handleAddManualQuestion = () => {
    const nextNum = questions.length + 1;
    const newQ: ParsedQuestion = {
      id: `manual-${Date.now()}`,
      questionNumber: nextNum,
      questionText: "Nhập nội dung câu hỏi mới tại đây...",
      options: [
        { key: "A", text: "Lựa chọn A" },
        { key: "B", text: "Lựa chọn B" },
        { key: "C", text: "Lựa chọn C" },
        { key: "D", text: "Lựa chọn D" },
      ],
      correctAnswer: "A",
      explanation: "Nhập lời giải thích tại đây.",
      difficulty: "medium",
    };
    setQuestions([...questions, newQ]);
  };

  // Action: Remove Question
  const handleRemoveQuestion = (idx: number) => {
    const updated = questions.filter((_, i) => i !== idx).map((q, i) => ({ ...q, questionNumber: i + 1 }));
    setQuestions(updated);
  };

  // Action: Update Question Field
  const handleUpdateQuestion = (idx: number, field: keyof ParsedQuestion, val: any) => {
    const updated = [...questions];
    updated[idx] = { ...updated[idx], [field]: val };
    setQuestions(updated);
  };

  // Action: Save & Publish Exam
  const handlePublishExam = () => {
    if (questions.length === 0) {
      alert("Vui lòng thêm ít nhất 1 câu hỏi để tạo đề thi!");
      return;
    }

    const pin = generatePinCode();
    const examId = `exam-${Date.now().toString(36)}`;
    const newExam: ExamData = {
      id: examId,
      title: examTitle.trim() || "Bài kiểm tra tiếng Anh",
      description: examDesc.trim(),
      grade,
      subject: "Tiếng Anh",
      durationMinutes,
      pinCode: pin,
      shuffleQuestions,
      shuffleOptions,
      antiCheatEnabled,
      showAnswersAfterSubmit,
      questions,
      createdAt: new Date().toISOString(),
      authorName: "Giáo viên bộ môn (LingoQuest)",
    };

    saveExam(newExam);
    setCreatedExam(newExam);
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl pb-20">
        {/* Breadcrumb Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/teacher"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" /> Quay lại Bảng điều khiển Giáo viên
          </Link>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-100">
              ⚡ Azota &amp; Quizizz Generator Engine
            </span>
          </div>
        </div>

        {/* Hero Title Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-indigo-600 mb-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Bộ tạo đề kiểm tra thông minh
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Tạo Đề Thi Trắc Nghiệm Tốc Độ (Azota &amp; Quizizz)
              </h1>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed max-w-2xl">
                Tự động bóc tách từ văn bản thô theo phong cách Azota, import ngân hàng đề SGK Lớp 11, hỗ trợ chế độ thi nghiêm túc hoặc Game đấu Quizizz đối kháng!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={handlePublishExam}
                className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-5 shadow-sm cursor-pointer"
              >
                <Send className="mr-2 h-4 w-4" /> Xuất bản &amp; Lấy mã PIN
              </Button>
            </div>
          </div>

          {/* Exam Configuration Bar */}
          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Tên bài kiểm tra</label>
              <input
                type="text"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-2 text-xs font-semibold text-slate-900 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Thời gian làm bài (Phút)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  max="180"
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(Number(e.target.value))}
                  className="w-24 rounded-xl border border-slate-200 bg-slate-50/50 p-2 text-xs font-bold text-slate-900 focus:border-indigo-500 focus:outline-none"
                />
                <span className="text-xs text-slate-500">
                  {durationMinutes === 0 ? "Không giới hạn" : `${durationMinutes} phút`}
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Tính năng xáo trộn</label>
              <div className="flex items-center gap-3 pt-1">
                <label className="inline-flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={shuffleQuestions}
                    onChange={(e) => setShuffleQuestions(e.target.checked)}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Đảo câu</span>
                </label>
                <label className="inline-flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={shuffleOptions}
                    onChange={(e) => setShuffleOptions(e.target.checked)}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Đảo đáp án</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Bảo mật &amp; Lời giải</label>
              <div className="flex items-center gap-3 pt-1">
                <label className="inline-flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={antiCheatEnabled}
                    onChange={(e) => setAntiCheatEnabled(e.target.checked)}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Chống đổi tab</span>
                </label>
                <label className="inline-flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showAnswersAfterSubmit}
                    onChange={(e) => setShowAnswersAfterSubmit(e.target.checked)}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Hiện giải thích</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Source Mode Tabs */}
        <div className="mb-6 flex items-center rounded-2xl bg-slate-100 p-1.5 w-fit border border-slate-200">
          <button
            onClick={() => setSourceMode("azota")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              sourceMode === "azota"
                ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Zap className="h-4 w-4 text-amber-500" />
            1. Dán đề thông minh (Azota Parser)
          </button>

          <button
            onClick={() => setSourceMode("textbook")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              sourceMode === "textbook"
                ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BookOpen className="h-4 w-4 text-teal-600" />
            2. Trích xuất từ SGK Lớp 11
          </button>

          <button
            onClick={() => setSourceMode("manual")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              sourceMode === "manual"
                ? "bg-white text-indigo-700 shadow-xs border border-slate-900/10"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FileText className="h-4 w-4 text-indigo-600" />
            3. Soạn câu hỏi thủ công ({questions.length})
          </button>
        </div>

        {/* ========================================================= */}
        {/* SOURCE 1: AZOTA RAW TEXT PARSER */}
        {/* ========================================================= */}
        {sourceMode === "azota" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-900">
                  Dán nội dung đề thi văn bản (Copy từ Word / PDF / Web)
                </label>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setRawExamText(SAMPLE_AZOTA_EXAM)}
                  className="rounded-xl text-xs font-bold text-indigo-600"
                >
                  Nạp đề mẫu chuẩn
                </Button>
              </div>

              <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                Hệ thống tự động nhận diện cú pháp: <code>Câu 1: ...</code>, <code>A. ... B. ... C. ... D. ...</code>, <code>Đáp án: A</code>, <code>Lời giải: ...</code>
              </p>

              <textarea
                rows={12}
                value={rawExamText}
                onChange={(e) => setRawExamText(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 font-mono text-xs text-slate-800 leading-relaxed focus:border-indigo-500 focus:outline-none"
                placeholder="Dán nội dung đề thi tại đây..."
              />

              {parseErrors.length > 0 && (
                <div className="mt-3 rounded-xl bg-amber-50 p-3 border border-amber-200 text-xs text-amber-800 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5" /> Lưu ý một số câu chưa đủ đáp án:
                  </div>
                  {parseErrors.map((err, i) => (
                    <p key={i}>• {err}</p>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  Đã bóc tách được: <strong className="text-indigo-600">{questions.length} câu hỏi</strong>
                </span>

                <Button
                  onClick={handleParseRawText}
                  className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-2.5"
                >
                  <Zap className="mr-1.5 h-3.5 w-3.5 text-amber-300" />
                  Bóc tách câu hỏi ngay (Parse Text)
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SOURCE 2: TEXTBOOK GENERATOR */}
        {/* ========================================================= */}
        {sourceMode === "textbook" && (
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <label className="text-sm font-bold text-slate-900 block mb-2">
                Chọn Unit SGK Tiếng Anh 11 Global Success để sinh đề:
              </label>
              <select
                value={selectedUnitSlug}
                onChange={(e) => setSelectedUnitSlug(e.target.value)}
                className="w-full max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-800 focus:border-indigo-500 focus:outline-none"
              >
                {GRADE_11_CURRICULUM.map((u) => (
                  <option key={u.slug} value={u.slug}>
                    Unit {u.unitNumber}: {u.titleEn} — {u.titleVi} ({u.vocabulary.length} từ vựng)
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleImportFromUnit}
              className="rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-6 py-2.5"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-300" />
              Tạo đề tự động từ Unit đã chọn
            </Button>
          </div>
        )}

        {/* ========================================================= */}
        {/* QUESTIONS PREVIEW & MANUAL EDITING */}
        {/* ========================================================= */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-slate-900">
              Danh sách câu hỏi trong đề ({questions.length} câu)
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={handleAddManualQuestion}
              className="rounded-xl text-xs font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50"
            >
              <Plus className="mr-1 h-3.5 w-3.5" /> Thêm câu hỏi thủ công
            </Button>
          </div>

          {questions.map((q, qIdx) => (
            <div
              key={q.id || qIdx}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs relative transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
                  Câu {q.questionNumber || qIdx + 1}
                </span>

                <div className="flex items-center gap-2">
                  <select
                    value={q.correctAnswer}
                    onChange={(e) => handleUpdateQuestion(qIdx, "correctAnswer", e.target.value)}
                    className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800"
                    title="Chọn đáp án đúng"
                  >
                    <option value="A">Đáp án đúng: A</option>
                    <option value="B">Đáp án đúng: B</option>
                    <option value="C">Đáp án đúng: C</option>
                    <option value="D">Đáp án đúng: D</option>
                  </select>

                  <button
                    onClick={() => handleRemoveQuestion(qIdx)}
                    className="text-slate-400 hover:text-red-600 transition-colors p-1"
                    title="Xóa câu hỏi này"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <textarea
                rows={2}
                value={q.questionText}
                onChange={(e) => handleUpdateQuestion(qIdx, "questionText", e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2.5 text-xs font-bold text-slate-900 focus:border-indigo-500 focus:outline-none"
                placeholder="Nội dung câu hỏi..."
              />

              {/* Options */}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isCorrect = q.correctAnswer === opt.key;
                  return (
                    <div
                      key={opt.key || optIdx}
                      className={`flex items-center gap-2 rounded-xl border p-2 text-xs ${
                        isCorrect
                          ? "border-emerald-400 bg-emerald-50/60 font-semibold"
                          : "border-slate-200 bg-slate-50/50"
                      }`}
                    >
                      <span className="font-bold text-slate-500 w-5">{opt.key}.</span>
                      <input
                        type="text"
                        value={opt.text}
                        onChange={(e) => {
                          const updatedOptions = [...q.options];
                          updatedOptions[optIdx] = { ...updatedOptions[optIdx], text: e.target.value };
                          handleUpdateQuestion(qIdx, "options", updatedOptions);
                        }}
                        className="w-full bg-transparent text-xs focus:outline-none"
                        placeholder={`Lựa chọn ${opt.key}`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="mt-3">
                <input
                  type="text"
                  value={q.explanation || ""}
                  onChange={(e) => handleUpdateQuestion(qIdx, "explanation", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-3 py-1.5 text-[11px] text-slate-600 focus:border-indigo-500 focus:outline-none"
                  placeholder="Lời giải thích / Hướng dẫn giải..."
                />
              </div>
            </div>
          ))}
        </div>

        {/* POPUP / MODAL: EXAM PUBLISHED SUCCESSFULLY */}
        <AnimatePresence>
          {createdExam && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Đã tạo đề thi thành công!
                </h3>
                <p className="mt-1 text-xs text-slate-500">{createdExam.title}</p>

                {/* PIN CODE HIGHLIGHT */}
                <div className="my-6 rounded-2xl bg-indigo-50 p-5 border border-indigo-100">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                    MÃ PHÒNG THI PIN CODE
                  </span>
                  <div className="font-mono text-4xl font-black text-indigo-700 tracking-widest">
                    {createdExam.pinCode}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Học sinh có thể nhập mã này tại trang chủ để vào thi ngay
                  </p>
                </div>

                {/* Direct Link */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-700 flex items-center justify-between mb-6">
                  <span className="truncate font-mono">/exams/{createdExam.id}</span>
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        navigator.clipboard.writeText(`${window.location.origin}/exams/${createdExam.id}`);
                        setCopiedLink(true);
                        setTimeout(() => setCopiedLink(false), 2000);
                      }
                    }}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 ml-2 shrink-0 cursor-pointer"
                  >
                    {copiedLink ? "✓ Đã chép" : "Sao chép link"}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => router.push("/teacher")}
                    className="rounded-2xl text-xs font-bold py-5"
                  >
                    Về Bảng điều khiển
                  </Button>
                  <Button
                    onClick={() => router.push(`/exams/${createdExam.id}`)}
                    className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-5 shadow-xs"
                  >
                    Làm thử đề thi ngay 🚀
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppShell>
  );
}
