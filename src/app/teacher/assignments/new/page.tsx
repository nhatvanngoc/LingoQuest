"use client";

import { useEffect, useState, useId } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  CalendarDays,
  CheckCircle2,
  Sparkles,
  Loader2,
  Video,
  Plus,
  Trash2,
  BookOpen,
  HelpCircle,
  PenTool,
  Send,
  Layers,
  Check,
  Eye,
  FileQuestion,
  Wand2,
  ExternalLink,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Label, Input } from "@/components/ui/input";
import { CLASS_OPTIONS } from "@/lib/mock/data";
import { cn } from "@/lib/utils";

/* ============================================================
   Unified Co-Pilot Studio (5 trong 1)
   Gộp giao diện Thủ công & AI:
   1. Video bài giảng (YouTube)
   2. Bộ Flashcards từ vựng
   3. Câu hỏi Trắc nghiệm (Multiple Choice)
   4. Câu hỏi Điền vào chỗ trống (Fill-in-the-blank)
   5. Bài viết Tự luận (Writing Essay)
   ============================================================ */

interface VocabCard {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  exampleVi: string;
}

interface QuizItem {
  id: string;
  question: string;
  options: string[]; // 4 lựa chọn
  answer: string;   // "A" | "B" | "C" | "D"
  explanation: string;
}

interface FillItem {
  id: string;
  sentence: string; // chứa [___]
  answer: string;
  hint: string;
  explanation: string;
}

interface WritingItem {
  prompt: string;
  minWords: number;
  outline: string[];
}

function extractYoutubeId(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.length === 11 && !trimmed.includes("/") && !trimmed.includes(".")) {
    return trimmed;
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = trimmed.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}

export default function UnifiedNewAssignmentPage() {
  // ===== Co-Pilot AI State =====
  const [aiTopic, setAiTopic] = useState("");
  const [aiLevel, setAiLevel] = useState("A2-B1");
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);
  const [subAiLoading, setSubAiLoading] = useState<string | null>(null);

  // ===== General Info =====
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueAt, setDueAt] = useState("");
  const [classroom, setClassroom] = useState(CLASS_OPTIONS[0]);

  // ===== 1. Video =====
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=aq4U66pQz-E");
  const [suggestedQuery, setSuggestedQuery] = useState("");

  // ===== 2. Vocabulary / Flashcards =====
  const [vocabList, setVocabList] = useState<VocabCard[]>([
    {
      id: "v-1",
      word: "explore",
      phonetic: "/ɪkˈsplɔːr/",
      meaning: "khám phá, thám hiểm",
      example: "We explored the ancient town last Sunday.",
      exampleVi: "Chúng tôi đã khám phá phố cổ Chủ nhật trước.",
    },
    {
      id: "v-2",
      word: "relaxing",
      phonetic: "/rɪˈlæksɪŋ/",
      meaning: "thư giãn, thoải mái",
      example: "I had a very relaxing weekend at the beach.",
      exampleVi: "Tôi đã có một cuối tuần rất thư giãn ở bãi biển.",
    },
    {
      id: "v-3",
      word: "memorable",
      phonetic: "/ˈmemərəbl/",
      meaning: "đáng nhớ, không quên",
      example: "It was a memorable trip with my best friends.",
      exampleVi: "Đó là một chuyến đi đáng nhớ cùng những người bạn thân.",
    },
  ]);

  // ===== 3. Multiple Choice Questions =====
  const [quizList, setQuizList] = useState<QuizItem[]>([
    {
      id: "q-1",
      question: "Where _______ you go for your last summer vacation?",
      options: ["A. do", "B. did", "C. were", "D. are"],
      answer: "B",
      explanation: "Thì quá khứ đơn trong câu hỏi với động từ thường 'go' mượn trợ động từ 'did'.",
    },
    {
      id: "q-2",
      question: "We _______ delicious seafood at the seaside restaurant yesterday.",
      options: ["A. eat", "B. ate", "C. eaten", "D. eating"],
      answer: "B",
      explanation: "Dấu hiệu 'yesterday' chia động từ eat ở quá khứ đơn là 'ate'.",
    },
  ]);

  // ===== 4. Fill in the Blank Questions =====
  const [fillList, setFillList] = useState<FillItem[]>([
    {
      id: "f-1",
      sentence: "Last night, she _______ (stay) at home and watched a documentary.",
      answer: "stayed",
      hint: "Quá khứ đơn có quy tắc của stay",
      explanation: "Thì quá khứ đơn có quy tắc thêm đuôi -ed vào sau động từ.",
    },
    {
      id: "f-2",
      sentence: "They _______ (explore) the famous cave during their weekend trip.",
      answer: "explored",
      hint: "Động từ tận cùng bằng 'e' chỉ cần thêm 'd'",
      explanation: "explore -> explored trong thì quá khứ đơn.",
    },
  ]);

  // ===== 5. Writing Prompt =====
  const [writingPrompt, setWritingPrompt] = useState<WritingItem>({
    prompt: "Viết một đoạn văn ngắn (80-120 từ) bằng tiếng Anh kể về kỳ nghỉ hoặc một hoạt động cuối tuần đáng nhớ của em.",
    minWords: 80,
    outline: [
      "Mở bài: Kỳ nghỉ diễn ra khi nào, ở đâu và cùng với ai?",
      "Thân bài: Kể 2-3 hoạt động nổi bật đã trải nghiệm.",
      "Kết bài: Cảm nghĩ hoặc ấn tượng sâu sắc nhất sau chuyến đi.",
    ],
  });

  // ===== Submission State =====
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdId, setCreatedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const youtubeId = extractYoutubeId(videoUrl);

  // Khôi phục dữ liệu bài tập khi bấm "Nhân bản" từ Dashboard
  useEffect(() => {
    const cloneStr = sessionStorage.getItem("lingoquest:clone-assignment");
    if (cloneStr) {
      try {
        const data = JSON.parse(cloneStr);
        sessionStorage.removeItem("lingoquest:clone-assignment");
        if (data.title) setTitle(data.title);
        if (data.description) setDescription(data.description);
        if (data.videoUrl) setVideoUrl(data.videoUrl);
        if (data.content) {
          if (Array.isArray(data.content.vocabulary) && data.content.vocabulary.length > 0) {
            setVocabList(
              data.content.vocabulary.map((v: any, idx: number) => ({
                id: v.id || `v-clone-${idx + 1}-${Date.now()}`,
                word: v.word || "",
                phonetic: v.phonetic || "",
                meaning: v.meaning || "",
                example: v.example || "",
                exampleVi: v.exampleVi || "",
              }))
            );
          }
          if (Array.isArray(data.content.quizQuestions) && data.content.quizQuestions.length > 0) {
            setQuizList(
              data.content.quizQuestions.map((q: any, idx: number) => ({
                id: q.id || `q-clone-${idx + 1}-${Date.now()}`,
                question: q.question || "",
                options: Array.isArray(q.options) && q.options.length === 4 ? q.options : ["A. ", "B. ", "C. ", "D. "],
                answer: q.answer || "A",
                explanation: q.explanation || "",
              }))
            );
          }
          if (Array.isArray(data.content.fillQuestions) && data.content.fillQuestions.length > 0) {
            setFillList(
              data.content.fillQuestions.map((f: any, idx: number) => ({
                id: f.id || `f-clone-${idx + 1}-${Date.now()}`,
                sentence: f.sentence || "",
                answer: f.answer || "",
                hint: f.hint || "",
                explanation: f.explanation || "",
              }))
            );
          }
          if (data.content.writingPrompt && data.content.writingPrompt.prompt) {
            setWritingPrompt({
              prompt: data.content.writingPrompt.prompt,
              minWords: data.content.writingPrompt.minWords || 80,
              outline: Array.isArray(data.content.writingPrompt.outline) ? data.content.writingPrompt.outline : [],
            });
          }
        }
      } catch (e) {
        console.error("Error restoring cloned assignment:", e);
      }
    }
  }, []);

  // ===== AI Co-Pilot: Generate ALL 5-in-1 =====
  const handleGenerateAll = async () => {
    if (!aiTopic.trim()) {
      setError("Vui lòng nhập chủ đề bài học để AI thiết kế trọn bộ!");
      return;
    }
    setError(null);
    setIsGeneratingAll(true);

    try {
      const res = await fetch("/api/teacher/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "all",
          input: aiTopic.trim(),
          level: aiLevel,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Không thể tạo bài tập bằng AI");
      }

      const data = json.data;
      if (data.title) setTitle(data.title);
      if (data.description) setDescription(data.description);
      if (data.suggestedVideoQuery) {
        setSuggestedQuery(data.suggestedVideoQuery);
      }

      if (Array.isArray(data.vocabulary) && data.vocabulary.length > 0) {
        setVocabList(data.vocabulary);
      }

      if (Array.isArray(data.quizQuestions) && data.quizQuestions.length > 0) {
        setQuizList(data.quizQuestions);
      }

      if (Array.isArray(data.fillQuestions) && data.fillQuestions.length > 0) {
        setFillList(data.fillQuestions);
      }

      if (data.writingPrompt && data.writingPrompt.prompt) {
        setWritingPrompt({
          prompt: data.writingPrompt.prompt,
          minWords: data.writingPrompt.minWords || 80,
          outline: Array.isArray(data.writingPrompt.outline) ? data.writingPrompt.outline : [],
        });
      }
    } catch (e: any) {
      console.error(e);
      setError(e.message || "Lỗi khi gọi AI");
    } finally {
      setIsGeneratingAll(false);
    }
  };

  // ===== AI Sub-Generators =====
  const handleAddMoreVocab = async () => {
    const topic = aiTopic || title || "English Communication";
    setSubAiLoading("vocab");
    try {
      const res = await fetch("/api/teacher/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "vocab", input: topic, level: aiLevel }),
      });
      const json = await res.json();
      if (json.ok && Array.isArray(json.data?.vocabulary)) {
        setVocabList((prev) => [...prev, ...json.data.vocabulary]);
      }
    } catch {
      /* ignore */
    } finally {
      setSubAiLoading(null);
    }
  };

  const handleAddMoreQuiz = async () => {
    const topic = aiTopic || title || "English Grammar";
    setSubAiLoading("quiz");
    try {
      const words = vocabList.map((v) => v.word);
      const res = await fetch("/api/teacher/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "quiz", input: topic, vocab: words }),
      });
      const json = await res.json();
      if (json.ok && Array.isArray(json.data?.quizQuestions)) {
        setQuizList((prev) => [...prev, ...json.data.quizQuestions]);
      }
    } catch {
      /* ignore */
    } finally {
      setSubAiLoading(null);
    }
  };

  const handleAddMoreFill = async () => {
    const topic = aiTopic || title || "English Grammar";
    setSubAiLoading("fill");
    try {
      const words = vocabList.map((v) => v.word);
      const res = await fetch("/api/teacher/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "fill", input: topic, vocab: words }),
      });
      const json = await res.json();
      if (json.ok && Array.isArray(json.data?.fillQuestions)) {
        setFillList((prev) => [...prev, ...json.data.fillQuestions]);
      }
    } catch {
      /* ignore */
    } finally {
      setSubAiLoading(null);
    }
  };

  const handleRegenWriting = async () => {
    const topic = aiTopic || title || "English Writing";
    setSubAiLoading("writing");
    try {
      const res = await fetch("/api/teacher/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "writing", input: topic }),
      });
      const json = await res.json();
      if (json.ok && json.data?.writingPrompt?.prompt) {
        setWritingPrompt({
          prompt: json.data.writingPrompt.prompt,
          minWords: json.data.writingPrompt.minWords || 80,
          outline: json.data.writingPrompt.outline || [],
        });
      }
    } catch {
      /* ignore */
    } finally {
      setSubAiLoading(null);
    }
  };

  // ===== Manual item handlers =====
  const addVocabCard = () => {
    setVocabList((prev) => [
      ...prev,
      {
        id: `v-${Date.now()}`,
        word: "",
        phonetic: "",
        meaning: "",
        example: "",
        exampleVi: "",
      },
    ]);
  };

  const updateVocab = (idx: number, field: keyof VocabCard, val: string) => {
    setVocabList((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const removeVocab = (idx: number) => {
    setVocabList((prev) => prev.filter((_, i) => i !== idx));
  };

  const addQuizQuestion = () => {
    setQuizList((prev) => [
      ...prev,
      {
        id: `q-${Date.now()}`,
        question: "",
        options: ["A. ", "B. ", "C. ", "D. "],
        answer: "A",
        explanation: "",
      },
    ]);
  };

  const updateQuiz = (idx: number, field: keyof QuizItem, val: any) => {
    setQuizList((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const updateQuizOption = (qIdx: number, optIdx: number, val: string) => {
    setQuizList((prev) => {
      const copy = [...prev];
      const opts = [...copy[qIdx].options];
      opts[optIdx] = val;
      copy[qIdx] = { ...copy[qIdx], options: opts };
      return copy;
    });
  };

  const removeQuiz = (idx: number) => {
    setQuizList((prev) => prev.filter((_, i) => i !== idx));
  };

  const addFillQuestion = () => {
    setFillList((prev) => [
      ...prev,
      {
        id: `f-${Date.now()}`,
        sentence: "",
        answer: "",
        hint: "",
        explanation: "",
      },
    ]);
  };

  const updateFill = (idx: number, field: keyof FillItem, val: string) => {
    setFillList((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const removeFill = (idx: number) => {
    setFillList((prev) => prev.filter((_, i) => i !== idx));
  };

  const addOutlineItem = () => {
    setWritingPrompt((prev) => ({
      ...prev,
      outline: [...prev.outline, ""],
    }));
  };

  const updateOutlineItem = (idx: number, val: string) => {
    setWritingPrompt((prev) => {
      const copy = [...prev.outline];
      copy[idx] = val;
      return { ...prev, outline: copy };
    });
  };

  const removeOutlineItem = (idx: number) => {
    setWritingPrompt((prev) => ({
      ...prev,
      outline: prev.outline.filter((_, i) => i !== idx),
    }));
  };

  // ===== Publish Assignment =====
  const handleSubmitAssignment = async () => {
    if (!title.trim()) {
      setError("Vui lòng nhập Tiêu đề bài tập!");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const payloadContent = {
      videoUrl: videoUrl.trim(),
      youtubeId,
      vocabulary: vocabList.filter((v) => v.word.trim()),
      quizQuestions: quizList.filter((q) => q.question.trim()),
      fillQuestions: fillList.filter((f) => f.sentence.trim()),
      writingPrompt: writingPrompt.prompt.trim() ? writingPrompt : undefined,
    };

    try {
      const res = await fetch("/api/teacher/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          videoUrl: videoUrl.trim(),
          dueAt: dueAt ? new Date(dueAt).toISOString() : null,
          content: payloadContent,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Không thể lưu bài tập");
      }

      setCreatedId(json.id);
    } catch (e: any) {
      console.error(e);
      setError(e.message || "Lỗi lưu bài tập");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===== Màn hình hoàn thành =====
  if (createdId) {
    return (
      <AppShell>
        <div className="mx-auto max-w-2xl py-12 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-soft">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900">Giao bài thành công!</h1>
            <p className="mt-2 text-sm text-slate-500">
              Bài tập <strong className="text-slate-800">“{title}”</strong> (chuẩn thống nhất 5 trong 1) đã được phát hành cho lớp {classroom}. Toàn bộ học sinh đã có thể bắt đầu làm bài!
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline">
                <Link href="/teacher">Về Bảng điều khiển</Link>
              </Button>
              <Button asChild className="bg-brand hover:bg-brand-600 text-white">
                <Link href={`/exercise/${createdId}`}>
                  Xem bài tập như học sinh <Eye className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl pb-24">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/teacher"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-brand transition-colors mb-1 group"
            >
              <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Quay lại Bảng điều khiển
            </Link>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Tạo & Giao bài tập mới
            </h1>
            <p className="text-xs text-slate-500">
              Mô hình Co-Pilot Studio: Kết hợp Trợ lý AI và Chỉnh sửa thủ công cho trọn bộ 5 hợp phần.
            </p>
          </div>

          <Button
            onClick={handleSubmitAssignment}
            disabled={isSubmitting}
            className="bg-gradient-to-r from-brand to-teal-600 text-white shadow-md hover:shadow-lg font-bold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Đang phát hành...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Phát hành & Giao bài
              </>
            )}
          </Button>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700 flex items-center justify-between">
            <span>⚠️ {error}</span>
            <button onClick={() => setError(null)} className="text-red-500 hover:text-red-800">×</button>
          </div>
        )}

        {/* ===== AI Co-Pilot Master Bar ===== */}
        <div className="mb-8 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50/70 via-white to-teal-50/50 p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            <h2 className="font-extrabold text-slate-900 text-base">Trợ lý AI Co-Pilot (Tạo nhanh 5 trong 1)</h2>
            <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-bold text-brand ml-auto">
              Qwen Powered
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-3">
            Nhập chủ đề bài học để AI tự động soạn trước Tiêu đề, Video gợi ý, Từ vựng, Trắc nghiệm, Điền từ và Đề bài tự luận. Bạn có thể tự do sửa lại bất kỳ mục nào sau đó!
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <Input
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              placeholder="Ví dụ: Simple Past Tense - Weekend Activities, IELTS Environment, Lớp 10..."
              className="flex-1 bg-white border-slate-200 text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleGenerateAll();
              }}
            />
            <select
              value={aiLevel}
              onChange={(e) => setAiLevel(e.target.value)}
              aria-label="Chọn trình độ CEFR bài học"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="A1-A2">Trình độ A1-A2 (Cơ bản)</option>
              <option value="A2-B1">Trình độ A2-B1 (Lớp 10-11)</option>
              <option value="B1-B2">Trình độ B1-B2 (Nâng cao)</option>
            </select>
            <Button
              onClick={handleGenerateAll}
              disabled={isGeneratingAll}
              className="bg-brand hover:bg-brand-600 text-white font-bold shrink-0"
            >
              {isGeneratingAll ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> AI đang thiết kế...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" /> AI Soạn toàn bộ
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* ===== SECTION 1: Thông tin chung & Video bài giảng ===== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-xs font-black">1</span>
              Thông tin chung & Video bài giảng
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label className="text-xs font-bold text-slate-600 mb-1.5 block">Tiêu đề bài tập *</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ví dụ: Ôn tập Thì Quá khứ đơn & Cuối tuần ý nghĩa"
                  className="font-semibold text-slate-800"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-600 mb-1.5 block">Lớp áp dụng</Label>
                <select
                  value={classroom}
                  onChange={(e) => setClassroom(e.target.value)}
                  aria-label="Chọn lớp học áp dụng"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  {CLASS_OPTIONS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-600 mb-1.5 block">Hạn nộp bài</Label>
                <Input
                  type="date"
                  value={dueAt}
                  onChange={(e) => setDueAt(e.target.value)}
                  className="text-sm font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <Label className="text-xs font-bold text-slate-600 mb-1.5 block">Mô tả / Hướng dẫn học sinh</Label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Xem video, học từ vựng, làm bài trắc nghiệm và nộp bài viết trước hạn."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {/* Video URL */}
              <div className="sm:col-span-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-rose-500" /> Link Video YouTube bài giảng
                  </Label>
                  {suggestedQuery && (
                    <span className="text-[11px] text-slate-400">
                      Gợi ý tìm kiếm: <em>{suggestedQuery}</em>
                    </span>
                  )}
                </div>
                <Input
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="Dán link YouTube (vd: https://www.youtube.com/watch?v=...)"
                  className="bg-white text-sm"
                />

                {youtubeId && (
                  <div className="mt-3 aspect-video max-w-md mx-auto overflow-hidden rounded-xl border border-slate-200 bg-black shadow-sm">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                      title="YouTube Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ===== SECTION 2: Bộ Flashcards Từ vựng ===== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 text-xs font-black">2</span>
                  Bộ Flashcards Từ vựng ({vocabList.length} từ)
                </h2>
                <p className="text-xs text-slate-400">Học sinh sẽ học và ghi nhớ các thẻ này trước khi làm quiz.</p>
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddMoreVocab}
                  disabled={subAiLoading === "vocab"}
                  className="text-xs font-bold text-brand hover:bg-brand-50"
                >
                  {subAiLoading === "vocab" ? (
                    <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  )}
                  AI thêm 4 từ
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addVocabCard}
                  className="text-xs font-bold"
                >
                  <Plus className="mr-1.5 h-3.5 w-3.5" /> Thêm thẻ
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {vocabList.map((v, i) => (
                <div
                  key={v.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:border-slate-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Thẻ #{i + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeVocab(i)}
                      className="text-slate-400 hover:text-red-600 transition-colors"
                      title="Xóa thẻ này"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Từ tiếng Anh *</Label>
                      <Input
                        value={v.word}
                        onChange={(e) => updateVocab(i, "word", e.target.value)}
                        placeholder="explore"
                        className="bg-white font-bold"
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Phiên âm IPA</Label>
                      <Input
                        value={v.phonetic}
                        onChange={(e) => updateVocab(i, "phonetic", e.target.value)}
                        placeholder="/ɪkˈsplɔːr/"
                        className="bg-white text-xs font-mono"
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Nghĩa tiếng Việt *</Label>
                      <Input
                        value={v.meaning}
                        onChange={(e) => updateVocab(i, "meaning", e.target.value)}
                        placeholder="khám phá"
                        className="bg-white"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Câu ví dụ tiếng Anh</Label>
                      <Input
                        value={v.example}
                        onChange={(e) => updateVocab(i, "example", e.target.value)}
                        placeholder="We explored the city."
                        className="bg-white text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Dịch ví dụ</Label>
                      <Input
                        value={v.exampleVi}
                        onChange={(e) => updateVocab(i, "exampleVi", e.target.value)}
                        placeholder="Chúng tôi đã khám phá thành phố."
                        className="bg-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== SECTION 3: Câu hỏi Trắc nghiệm (Multiple Choice) ===== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600 text-xs font-black">3</span>
                  Câu hỏi Trắc nghiệm ({quizList.length} câu)
                </h2>
                <p className="text-xs text-slate-400">4 lựa chọn A, B, C, D — Chấm điểm tự động.</p>
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddMoreQuiz}
                  disabled={subAiLoading === "quiz"}
                  className="text-xs font-bold text-amber-700 hover:bg-amber-50"
                >
                  {subAiLoading === "quiz" ? (
                    <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  )}
                  AI thêm 3 câu trắc nghiệm
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addQuizQuestion}
                  className="text-xs font-bold"
                >
                  <Plus className="mr-1.5 h-3.5 w-3.5" /> Thêm câu hỏi
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {quizList.map((q, qIdx) => (
                <div
                  key={q.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-400">Câu hỏi #{qIdx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeQuiz(qIdx)}
                      className="text-slate-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <Input
                    value={q.question}
                    onChange={(e) => updateQuiz(qIdx, "question", e.target.value)}
                    placeholder="Nhập nội dung câu hỏi tiếng Anh..."
                    className="bg-white font-semibold mb-3 text-sm"
                  />

                  <div className="grid gap-2 sm:grid-cols-2 mb-3">
                    {["A", "B", "C", "D"].map((optLetter, optIdx) => {
                      const isCorrect = q.answer === optLetter;
                      return (
                        <div
                          key={optLetter}
                          className={cn(
                            "flex items-center gap-2 rounded-lg border bg-white p-2 transition-all",
                            isCorrect ? "border-amber-400 ring-1 ring-amber-300 bg-amber-50/40" : "border-slate-200"
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => updateQuiz(qIdx, "answer", optLetter)}
                            className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all",
                              isCorrect ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            )}
                            title="Chọn làm đáp án đúng"
                          >
                            {optLetter}
                          </button>
                          <input
                            type="text"
                            value={q.options[optIdx] ?? ""}
                            onChange={(e) => updateQuizOption(qIdx, optIdx, e.target.value)}
                            placeholder={`Lựa chọn ${optLetter}`}
                            className="w-full bg-transparent text-xs font-medium focus:outline-none"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Giải thích đáp án</Label>
                    <Input
                      value={q.explanation}
                      onChange={(e) => updateQuiz(qIdx, "explanation", e.target.value)}
                      placeholder="Giải thích vì sao chọn đáp án này..."
                      className="bg-white text-xs text-slate-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== SECTION 4: Câu hỏi Điền vào chỗ trống (Fill-in-the-blank) ===== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-600 text-xs font-black">4</span>
                  Câu hỏi Điền từ vào chỗ trống ({fillList.length} câu)
                </h2>
                <p className="text-xs text-slate-400">Dùng ký hiệu [___] trong câu để tạo ô điền từ.</p>
              </div>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddMoreFill}
                  disabled={subAiLoading === "fill"}
                  className="text-xs font-bold text-teal-700 hover:bg-teal-50"
                >
                  {subAiLoading === "fill" ? (
                    <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  )}
                  AI thêm 3 câu điền từ
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addFillQuestion}
                  className="text-xs font-bold"
                >
                  <Plus className="mr-1.5 h-3.5 w-3.5" /> Thêm câu điền từ
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {fillList.map((f, fIdx) => (
                <div
                  key={f.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-400">Câu điền từ #{fIdx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeFill(fIdx)}
                      className="text-slate-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mb-3">
                    <Label className="text-[11px] font-bold text-slate-500 mb-1 block">
                      Câu hỏi (chứa ký hiệu [___] để làm ô trống) *
                    </Label>
                    <Input
                      value={f.sentence}
                      onChange={(e) => updateFill(fIdx, "sentence", e.target.value)}
                      placeholder="She _______ (visit) her grandparents last Sunday."
                      className="bg-white font-semibold text-sm"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Từ đáp án đúng *</Label>
                      <Input
                        value={f.answer}
                        onChange={(e) => updateFill(fIdx, "answer", e.target.value)}
                        placeholder="visited"
                        className="bg-white font-bold text-brand"
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Gợi ý cho học sinh</Label>
                      <Input
                        value={f.hint}
                        onChange={(e) => updateFill(fIdx, "hint", e.target.value)}
                        placeholder="Dạng quá khứ của visit"
                        className="bg-white text-xs"
                      />
                    </div>
                    <div>
                      <Label className="text-[11px] font-bold text-slate-500 mb-1 block">Giải thích ngữ pháp</Label>
                      <Input
                        value={f.explanation}
                        onChange={(e) => updateFill(fIdx, "explanation", e.target.value)}
                        placeholder="Dấu hiệu last Sunday chia quá khứ đơn"
                        className="bg-white text-xs text-slate-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== SECTION 5: Bài viết Tự luận (Writing Essay) ===== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600 text-xs font-black">5</span>
                  Đề bài Viết tự luận (Writing Essay)
                </h2>
                <p className="text-xs text-slate-400">Học sinh nộp bài viết để giáo viên chấm điểm và nhận xét.</p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleRegenWriting}
                disabled={subAiLoading === "writing"}
                className="text-xs font-bold text-purple-700 hover:bg-purple-50"
              >
                {subAiLoading === "writing" ? (
                  <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                )}
                AI gợi ý đề viết
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-xs font-bold text-slate-600 mb-1.5 block">Đề bài yêu cầu</Label>
                <textarea
                  rows={3}
                  value={writingPrompt.prompt}
                  onChange={(e) => setWritingPrompt((prev) => ({ ...prev, prompt: e.target.value }))}
                  placeholder="Viết một đoạn văn ngắn (80-120 từ) kể về..."
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <Label className="text-xs font-bold text-slate-600 mb-1.5 block">Số từ tối thiểu</Label>
                <Input
                  type="number"
                  value={writingPrompt.minWords}
                  onChange={(e) => setWritingPrompt((prev) => ({ ...prev, minWords: parseInt(e.target.value, 10) || 80 }))}
                  className="w-36 font-bold"
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Label className="text-xs font-bold text-slate-600">Gợi ý dàn bài cho học sinh</Label>
                  <button
                    type="button"
                    onClick={addOutlineItem}
                    className="text-xs font-bold text-brand hover:underline"
                  >
                    + Thêm ý gợi ý
                  </button>
                </div>
                <div className="space-y-2">
                  {writingPrompt.outline.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 w-5 text-right">{idx + 1}.</span>
                      <Input
                        value={item}
                        onChange={(e) => updateOutlineItem(idx, e.target.value)}
                        placeholder="Gợi ý nội dung..."
                        className="text-xs bg-slate-50"
                      />
                      <button
                        type="button"
                        onClick={() => removeOutlineItem(idx)}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <Button asChild variant="outline">
              <Link href="/teacher">Hủy bỏ</Link>
            </Button>
            <Button
              onClick={handleSubmitAssignment}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-brand to-teal-600 text-white shadow-md hover:shadow-lg font-bold px-8"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Đang phát hành...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Phát hành & Giao bài cho lớp
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
