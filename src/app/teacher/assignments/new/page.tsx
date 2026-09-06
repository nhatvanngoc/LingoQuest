"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ClipboardCheck,
  Layers,
  CalendarDays,
  CheckCircle2,
  Sparkles,
  Loader2,
  Wand2,
  FileText,
  Eye,
  AlertCircle,
  PenLine,
  Video,
  Users,
  Plus,
  Trash2,
  BookOpen,
  ListPlus,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Label, Input } from "@/components/ui/input";
import { CLASS_OPTIONS } from "@/lib/mock/data";
import { cn } from "@/lib/utils";
import { parseExerciseMarkdown, type ParsedExercise } from "@/lib/ai/markdown-parser";

interface Option { id: string; title: string; }
interface StudentItem { id: string; name: string; email: string; avatarColor?: string; }
type Mode = "manual" | "ai";
type ManualKind = "custom_flashcards" | "custom_writing" | "existing_deck" | "existing_lesson";

interface CustomCardItem {
  front: string;
  back: string;
  phonetic: string;
  example: string;
}

export default function NewAssignmentPage() {
  const [mode, setMode] = useState<Mode>("manual"); // Mặc định thủ công

  // ===== Manual state =====
  const [customTitle, setCustomTitle] = useState("");
  const [manualKind, setManualKind] = useState<ManualKind>("custom_flashcards");
  const [customPrompt, setCustomPrompt] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [customCards, setCustomCards] = useState<CustomCardItem[]>([
    { front: "", back: "", phonetic: "", example: "" },
    { front: "", back: "", phonetic: "", example: "" },
    { front: "", back: "", phonetic: "", example: "" },
  ]);
  const [bulkInput, setBulkInput] = useState("");
  const [showBulk, setShowBulk] = useState(false);
  const [aiFillingCards, setAiFillingCards] = useState(false);
  const [lessons, setLessons] = useState<Option[]>([]);
  const [decks, setDecks] = useState<Option[]>([]);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedDeckId, setSelectedDeckId] = useState("");
  const [target, setTarget] = useState<"class" | "students">("class");
  const [classroom, setClassroom] = useState(CLASS_OPTIONS[0]);
  const [pickedStudents, setPickedStudents] = useState<string[]>([]);
  const [studentsList, setStudentsList] = useState<StudentItem[]>([]);
  const [due, setDue] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addCard = () => {
    setCustomCards((prev) => [...prev, { front: "", back: "", phonetic: "", example: "" }]);
  };

  const removeCard = (idx: number) => {
    if (customCards.length <= 1) return;
    setCustomCards((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateCard = (idx: number, field: keyof CustomCardItem, val: string) => {
    setCustomCards((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const applyBulkImport = () => {
    if (!bulkInput.trim()) return;
    const lines = bulkInput.split("\n");
    const parsed: CustomCardItem[] = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      const parts = trimmed.split(/[:\-\–\/]+/);
      if (parts.length >= 2) {
        parsed.push({
          front: parts[0].trim(),
          back: parts.slice(1).join(" - ").trim(),
          phonetic: "",
          example: "",
        });
      } else {
        parsed.push({
          front: trimmed,
          back: "",
          phonetic: "",
          example: "",
        });
      }
    }
    if (parsed.length > 0) {
      setCustomCards(parsed);
      setShowBulk(false);
      setBulkInput("");
    }
  };

  const autoFillWithAi = async () => {
    const wordsToFetch = customCards.map((c) => c.front.trim()).filter(Boolean);
    if (wordsToFetch.length === 0) {
      setError("Vui lòng nhập ít nhất một từ vựng tiếng Anh (Mặt trước)");
      return;
    }
    setAiFillingCards(true);
    setError(null);
    try {
      const res = await fetch("/api/teacher/flashcards/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ words: wordsToFetch }),
      });
      const data = await res.json();
      if (data.ok && Array.isArray(data.cards)) {
        setCustomCards((prev) =>
          prev.map((card) => {
            const found = data.cards.find(
              (sc: any) => sc.front.toLowerCase() === card.front.trim().toLowerCase()
            );
            if (found) {
              return {
                front: card.front,
                back: card.back || found.back || "",
                phonetic: card.phonetic || found.phonetic || "",
                example: card.example || found.example || "",
              };
            }
            return card;
          })
        );
      } else {
        setError(data.error || "Không thể gọi AI điền tự động");
      }
    } catch {
      setError("Lỗi kết nối khi gọi AI gợi ý");
    } finally {
      setAiFillingCards(false);
    }
  };

  // ===== AI state =====
  const [aiInput, setAiInput] = useState("Chủ đề: Quá khứ đơn - kể về cuối tuần, 8 từ vựng, 5 câu trắc nghiệm");
  const [aiLevel, setAiLevel] = useState("A2-B1");
  const [aiCount, setAiCount] = useState(5);
  const [aiBusy, setAiBusy] = useState(false);
  const [aiMarkdown, setAiMarkdown] = useState("");
  const [aiParsed, setAiParsed] = useState<ParsedExercise | null>(null);
  const [aiWarning, setAiWarning] = useState<string | null>(null);
  const [aiTab, setAiTab] = useState<"preview" | "markdown">("preview");

  useEffect(() => {
    let active = true;
    fetch("/api/lessons")
      .then((r) => r.json())
      .then((data: { lessons?: Option[]; decks?: Option[] }) => {
        if (!active) return;
        setLessons(data.lessons ?? []);
        setDecks(data.decks ?? []);
        if (data.lessons?.length) setSelectedLessonId(data.lessons[0].id);
        if (data.decks?.length) setSelectedDeckId(data.decks[0].id);
      })
      .catch(() => {});

    // Lấy danh sách học sinh thật từ PostgreSQL
    fetch("/api/teacher/students")
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        if (data.ok && Array.isArray(data.students)) {
          setStudentsList(data.students);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const toggleStudent = (idOrName: string) => {
    setPickedStudents((p) =>
      p.includes(idOrName) ? p.filter((s) => s !== idOrName) : [...p, idOrName]
    );
  };

  const selectedLessonTitle = lessons.find((l) => l.id === selectedLessonId)?.title ?? "";
  const selectedDeckTitle = decks.find((d) => d.id === selectedDeckId)?.title ?? "";

  const submitManual = async () => {
    setBusy(true);
    setError(null);

    let titleToSubmit = customTitle.trim();
    if (!titleToSubmit) {
      if (manualKind === "existing_lesson") titleToSubmit = selectedLessonTitle;
      else if (manualKind === "existing_deck") titleToSubmit = selectedDeckTitle;
      else if (manualKind === "custom_flashcards") titleToSubmit = "Bộ Flashcard từ vựng mới";
      else titleToSubmit = "Bài tập luyện viết mới";
    }

    if (!titleToSubmit) {
      setError("Vui lòng nhập tiêu đề bài tập");
      setBusy(false);
      return;
    }

    if (manualKind === "custom_writing" && !customPrompt.trim()) {
      setError("Vui lòng nhập đề bài / yêu cầu viết cho học sinh");
      setBusy(false);
      return;
    }

    if (manualKind === "custom_flashcards") {
      const validCards = customCards.filter((c) => c.front.trim() && c.back.trim());
      if (validCards.length === 0) {
        setError("Vui lòng điền đầy đủ Từ tiếng Anh và Nghĩa tiếng Việt cho ít nhất một thẻ flashcard");
        setBusy(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/teacher/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleToSubmit,
          type: manualKind === "custom_flashcards" || manualKind === "existing_deck" ? "deck" : "exercise",
          description: customDescription.trim(),
          prompt: customPrompt.trim(),
          customCards: manualKind === "custom_flashcards" ? customCards.filter((c) => c.front.trim()) : undefined,
          lessonId: manualKind === "existing_lesson" ? selectedLessonId : null,
          deckId: manualKind === "existing_deck" ? selectedDeckId : null,
          dueAt: due ? new Date(due).toISOString() : null,
        }),
      });

      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        setError(d.error ?? "Giao bài thất bại");
        return;
      }
      setDone(true);
    } catch {
      setError("Lỗi mạng, thử lại");
    } finally {
      setBusy(false);
    }
  };

  const generateAI = async () => {
    setAiBusy(true);
    setError(null);
    setAiWarning(null);
    try {
      const res = await fetch("/api/teacher/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: aiInput, level: aiLevel, count: aiCount }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        markdown?: string;
        parsed?: ParsedExercise;
        warning?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Tạo bài tập thất bại");
        return;
      }
      setAiMarkdown(data.markdown ?? "");
      const parsed = data.parsed ?? parseExerciseMarkdown(data.markdown ?? "");
      setAiParsed(parsed);
      if (data.warning) setAiWarning(data.warning);
      setAiTab("preview");
    } catch {
      setError("Lỗi mạng khi gọi Groq API");
    } finally {
      setAiBusy(false);
    }
  };

  const onMarkdownChange = (v: string) => {
    setAiMarkdown(v);
    try {
      setAiParsed(parseExerciseMarkdown(v));
    } catch {}
  };

  const submitAI = async () => {
    if (!aiParsed) {
      setError("Chưa có bài tập AI để giao");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      let lessonId: string | null = null;
      if (aiParsed.vocab.length > 0) {
        const r1 = await fetch("/api/teacher/lessons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: aiParsed.title,
            url: "https://www.youtube.com/watch?v=WUfv5FD-x2g",
            vocab: aiParsed.vocab.map((v) => ({
              word: v.word,
              meaning: v.meaning,
              time: `${Math.floor(v.start / 60)}:${String(v.start % 60).padStart(2, "0")}`,
            })),
          }),
        });
        if (r1.ok) {
          const d = await r1.json().catch(() => ({} as any));
          lessonId = (d as any).lesson?.id ?? (d as any).id ?? null;
        }
      }

      const res = await fetch("/api/teacher/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: aiParsed.title,
          type: "exercise",
          description: aiParsed.description || "",
          prompt: aiParsed.writing?.prompt || "",
          lessonId,
          deckId: null,
          dueAt: due ? new Date(due).toISOString() : null,
        }),
      });

      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        setError(d.error ?? "Giao bài AI thất bại");
        return;
      }
      setDone(true);
    } catch {
      setError("Lỗi mạng khi giao bài AI");
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    const displayTitle = customTitle.trim() || aiParsed?.title || selectedLessonTitle || selectedDeckTitle || "Bài tập mới";
    return (
      <AppShell>
        <SuccessCard
          title="Đã giao bài thành công!"
          desc={`Đã giao bài "${displayTitle}" cho ${target === "class" ? classroom : `${pickedStudents.length} học sinh đã chọn`}.`}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <Link
          href="/teacher"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Quay lại bảng điều khiển
        </Link>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
          <ClipboardCheck className="h-6 w-6 text-brand" /> Giao bài mới
        </h1>

        {/* Mode tabs: Thủ công (Custom) vs AI */}
        <div className="mt-4 inline-flex rounded-2xl bg-slate-100 p-1">
          <button
            onClick={() => setMode("manual")}
            className={cn(
              "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all",
              mode === "manual" ? "bg-white text-brand shadow-soft" : "text-slate-500 hover:text-slate-800"
            )}
          >
            <FileText className="h-4 w-4" /> Thủ công (Tự điền nội dung)
          </button>
          <button
            onClick={() => setMode("ai")}
            className={cn(
              "flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all",
              mode === "ai" ? "bg-brand text-white shadow-soft" : "text-slate-500 hover:text-slate-800"
            )}
          >
            <Wand2 className="h-4 w-4" /> AI tạo bài tự động
          </button>
        </div>

        {mode === "manual" ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col gap-6">
            {/* Bước 1: Tiêu đề bài tập */}
            <Section step={1} title="Tiêu đề bài tập">
              <Label>Tên bài tập giao cho học sinh*</Label>
              <Input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="VD: Luyện viết: Kể về kỳ nghỉ hè đáng nhớ của bạn"
                className="mt-1"
              />
              <p className="mt-1.5 text-xs text-slate-400">
                Tên bài tập sẽ hiển thị trên trang chủ và danh sách bài làm của học sinh.
              </p>
            </Section>

            {/* Bước 2: Hình thức & Nội dung bài tập */}
            <Section step={2} title="Hình thức & Nội dung">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <TypeCard
                  active={manualKind === "custom_flashcards"}
                  onClick={() => setManualKind("custom_flashcards")}
                  icon={Layers}
                  label="Soạn Flashcard mới"
                  desc="Tự tạo bộ thẻ từ vựng thủ công"
                />
                <TypeCard
                  active={manualKind === "custom_writing"}
                  onClick={() => setManualKind("custom_writing")}
                  icon={PenLine}
                  label="Luyện viết tự do"
                  desc="Tự ra đề & yêu cầu bài viết"
                />
                <TypeCard
                  active={manualKind === "existing_deck"}
                  onClick={() => setManualKind("existing_deck")}
                  icon={BookOpen}
                  label="Flashcard CSDL"
                  desc="Giao bộ thẻ có sẵn trên CSDL"
                />
                <TypeCard
                  active={manualKind === "existing_lesson"}
                  onClick={() => setManualKind("existing_lesson")}
                  icon={Video}
                  label="Bài học video"
                  desc="Gắn bài học video có sẵn"
                />
              </div>

              {manualKind === "custom_flashcards" && (
                <div className="mt-5 space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/30 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100/80 pb-3">
                    <div>
                      <h4 className="font-extrabold text-slate-900 flex items-center gap-1.5">
                        <Layers className="h-4 w-4 text-emerald-600" /> Danh sách thẻ từ vựng ({customCards.length} thẻ)
                      </h4>
                      <p className="text-xs text-slate-500">
                        Nhập từ vựng, nghĩa tiếng Việt, phiên âm và ví dụ cho học sinh luyện tập.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowBulk(!showBulk)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                      >
                        <ListPlus className="h-3.5 w-3.5 text-slate-500" />
                        {showBulk ? "Đóng nhập nhanh" : "Nhập nhanh (Paste)"}
                      </button>
                      <button
                        type="button"
                        onClick={autoFillWithAi}
                        disabled={aiFillingCards}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:brightness-110 disabled:opacity-50 transition-all"
                      >
                        {aiFillingCards ? (
                          <>
                            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Đang dịch...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-3.5 w-3.5" /> AI điền nghĩa (Qwen)
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {showBulk && (
                    <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm space-y-2">
                      <Label className="text-xs font-bold text-slate-700">
                        Dán danh sách từ (Mỗi dòng một từ theo dạng: <code className="text-brand">Từ: Nghĩa</code> hoặc <code className="text-brand">Từ - Nghĩa</code>)
                      </Label>
                      <textarea
                        value={bulkInput}
                        onChange={(e) => setBulkInput(e.target.value)}
                        rows={4}
                        placeholder={"accomplish: đạt được, hoàn thành\nperseverance: sự kiên trì\nsustainable - bền vững"}
                        className="w-full rounded-xl border-2 border-slate-200 p-2.5 text-xs font-mono text-slate-800 focus:border-emerald-500 focus:outline-none"
                      />
                      <div className="flex justify-end">
                        <Button type="button" size="sm" onClick={applyBulkImport} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                          Chuyển thành danh sách thẻ
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                    {customCards.map((card, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs transition-all hover:border-emerald-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-extrabold text-emerald-700">
                            Thẻ #{idx + 1}
                          </span>
                          {customCards.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeCard(idx)}
                              className="text-xs font-bold text-rose-500 hover:text-rose-700 hover:underline flex items-center gap-1"
                            >
                              <Trash2 className="h-3 w-3" /> Xóa
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <div>
                            <label className="text-xs font-bold text-slate-600">Từ tiếng Anh (Front)*</label>
                            <input
                              type="text"
                              value={card.front}
                              onChange={(e) => updateCard(idx, "front", e.target.value)}
                              placeholder="VD: remarkable"
                              className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-600">Nghĩa tiếng Việt (Back)*</label>
                            <input
                              type="text"
                              value={card.back}
                              onChange={(e) => updateCard(idx, "back", e.target.value)}
                              placeholder="VD: đáng chú ý, xuất sắc"
                              className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-500">Phiên âm IPA</label>
                            <input
                              type="text"
                              value={card.phonetic}
                              onChange={(e) => updateCard(idx, "phonetic", e.target.value)}
                              placeholder="VD: /rɪˈmɑːkəbl/"
                              className="mt-1 h-8 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-slate-500">Ví dụ minh họa</label>
                            <input
                              type="text"
                              value={card.example}
                              onChange={(e) => updateCard(idx, "example", e.target.value)}
                              placeholder="VD: He made a remarkable achievement."
                              className="mt-1 h-8 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={addCard}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-emerald-300 bg-white py-2.5 text-xs font-bold text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" /> Thêm thẻ từ vựng mới
                  </button>
                </div>
              )}

              {manualKind === "custom_writing" && (
                <div className="mt-5 space-y-4 rounded-2xl border border-brand-100 bg-brand-50/40 p-4">
                  <div>
                    <Label className="text-brand-900 font-bold">Đề bài / Yêu cầu bài viết*</Label>
                    <textarea
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      rows={3}
                      placeholder="VD: Hãy viết một đoạn văn từ 80 đến 120 từ kể về chuyến du lịch yêu thích của bạn. Chú ý sử dụng thì quá khứ đơn và ít nhất 3 tính từ miêu tả cảm xúc..."
                      className="mt-1.5 w-full rounded-2xl border-2 border-slate-200 bg-white p-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
                    />
                  </div>
                  <div>
                    <Label className="text-brand-900 font-bold">Gợi ý dàn ý / Từ vựng khuyến nghị (Không bắt buộc)</Label>
                    <textarea
                      value={customDescription}
                      onChange={(e) => setCustomDescription(e.target.value)}
                      rows={2}
                      placeholder="VD: Gợi ý: 1. Mở bài (ở đâu, với ai). 2. Thân bài (hoạt động chính, món ăn ngon). 3. Kết bài (cảm xúc). Từ vựng gợi ý: memorable, wonderful, breathtaking..."
                      className="mt-1.5 w-full rounded-2xl border-2 border-slate-200 bg-white p-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
                    />
                  </div>
                </div>
              )}

              {manualKind === "existing_lesson" && (
                <div className="mt-4">
                  <Label>Chọn bài học video đã đăng trên hệ thống</Label>
                  {lessons.length === 0 ? (
                    <p className="mt-1 text-sm text-slate-400 italic">Chưa có bài học nào. Bạn có thể chọn "Luyện viết tự do" hoặc đăng bài trước.</p>
                  ) : (
                    <select
                      value={selectedLessonId}
                      onChange={(e) => setSelectedLessonId(e.target.value)}
                      className="mt-1 h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
                    >
                      {lessons.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.title}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}

              {manualKind === "existing_deck" && (
                <div className="mt-4">
                  <Label>Chọn bộ flashcard từ vựng</Label>
                  {decks.length === 0 ? (
                    <p className="mt-1 text-sm text-slate-400 italic">Chưa có bộ flashcard nào.</p>
                  ) : (
                    <select
                      value={selectedDeckId}
                      onChange={(e) => setSelectedDeckId(e.target.value)}
                      className="mt-1 h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
                    >
                      {decks.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.title}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}
            </Section>

            {/* Bước 3: Đối tượng giao bài */}
            <Section step={3} title="Giao cho">
              <div className="mb-3 inline-flex rounded-2xl bg-slate-100 p-1">
                <Seg active={target === "class"} onClick={() => setTarget("class")} label="Cả lớp" />
                <Seg active={target === "students"} onClick={() => setTarget("students")} label="Từng học sinh cụ thể" />
              </div>

              {target === "class" ? (
                <select
                  value={classroom}
                  onChange={(e) => setClassroom(e.target.value)}
                  className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none"
                >
                  {CLASS_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="grid gap-2 sm:grid-cols-2 max-h-60 overflow-y-auto p-1">
                  {studentsList.length === 0 ? (
                    <div className="col-span-full rounded-2xl bg-slate-50 p-4 text-center text-sm font-semibold text-slate-400">
                      Chưa có học sinh nào đăng ký tài khoản.
                    </div>
                  ) : (
                    studentsList.map((st) => {
                      const on = pickedStudents.includes(st.name) || pickedStudents.includes(st.id);
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => toggleStudent(st.name)}
                          className={cn(
                            "flex items-center gap-3 rounded-2xl border-2 p-3 text-left text-sm font-bold transition-all",
                            on
                              ? "border-brand bg-brand-50 text-brand"
                              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2",
                              on ? "border-brand bg-brand text-white" : "border-slate-300"
                            )}
                          >
                            {on && <CheckCircle2 className="h-3.5 w-3.5" />}
                          </span>
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-xs"
                            style={{ backgroundColor: st.avatarColor || "#4361ee" }}
                          >
                            {st.name.slice(0, 2).toUpperCase()}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-xs font-bold">{st.name}</p>
                            <p className="truncate text-[10px] font-normal text-slate-400">{st.email}</p>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              )}
            </Section>

            {/* Bước 4: Hạn nộp */}
            <Section step={4} title="Hạn nộp bài">
              <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4 py-2">
                <CalendarDays className="h-5 w-5 text-brand" />
                <Input
                  type="datetime-local"
                  value={due}
                  onChange={(e) => setDue(e.target.value)}
                  className="border-0 px-0 focus:ring-0 text-sm font-bold text-slate-700"
                />
              </div>
            </Section>

            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <Button
              size="lg"
              onClick={submitManual}
              disabled={busy}
              className="w-full bg-brand text-white shadow-md hover:bg-brand-600 py-3 text-base font-bold"
            >
              {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />} Giao bài cho học sinh
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col gap-6">
            <Section step={1} title="Nhập yêu cầu cho AI (Tạo tự động)">
              <Label>Chủ đề / Yêu cầu</Label>
              <textarea
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                rows={3}
                placeholder="VD: Quá khứ đơn - kể về cuối tuần, 8 từ vựng, 5 câu trắc nghiệm"
                className="w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
              />
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <Label>Trình độ</Label>
                  <select
                    value={aiLevel}
                    onChange={(e) => setAiLevel(e.target.value)}
                    className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-3 font-bold text-slate-700"
                  >
                    <option>A2-B1</option>
                    <option>A2</option>
                    <option>B1</option>
                  </select>
                </div>
                <div>
                  <Label>Số câu Quiz</Label>
                  <select
                    value={String(aiCount)}
                    onChange={(e) => setAiCount(parseInt(e.target.value, 10))}
                    className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-3 font-bold text-slate-700"
                  >
                    <option value="5">5 câu</option>
                    <option value="6">6 câu</option>
                    <option value="7">7 câu</option>
                  </select>
                </div>
              </div>
              <Button
                size="lg"
                onClick={generateAI}
                disabled={aiBusy || aiInput.trim().length < 3}
                className="mt-3 w-full"
              >
                {aiBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}{" "}
                {aiBusy ? "Đang tạo với AI..." : "Tạo bài tập với AI"}
              </Button>
            </Section>

            {aiMarkdown && (
              <Section step={2} title="Kết quả AI — Markdown & Preview">
                <div className="mb-3 inline-flex rounded-2xl bg-slate-100 p-1">
                  <button
                    onClick={() => setAiTab("preview")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold",
                      aiTab === "preview" ? "bg-white text-brand shadow-soft" : "text-slate-500"
                    )}
                  >
                    <Eye className="h-4 w-4" /> Preview
                  </button>
                  <button
                    onClick={() => setAiTab("markdown")}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-bold",
                      aiTab === "markdown" ? "bg-white text-brand shadow-soft" : "text-slate-500"
                    )}
                  >
                    Markdown
                  </button>
                </div>
                {aiWarning && (
                  <p className="mb-3 flex items-center gap-2 rounded-2xl bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                    <AlertCircle className="h-4 w-4" />
                    {aiWarning}
                  </p>
                )}
                {aiTab === "markdown" ? (
                  <textarea
                    value={aiMarkdown}
                    onChange={(e) => onMarkdownChange(e.target.value)}
                    rows={18}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 font-mono text-xs text-slate-700"
                  />
                ) : aiParsed ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900">{aiParsed.title}</h3>
                      <p className="text-sm text-slate-500">{aiParsed.description}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h4 className="mb-2 font-bold text-slate-700">VOCAB ({aiParsed.vocab.length} từ)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="text-left font-bold text-slate-500">
                              <th className="pb-1">Từ</th>
                              <th>Phiên âm</th>
                              <th>Nghĩa</th>
                              <th>Ví dụ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {aiParsed.vocab.map((v, i) => (
                              <tr key={i} className="border-t border-slate-200">
                                <td className="py-1 font-bold">{v.word}</td>
                                <td>{v.phonetic}</td>
                                <td>{v.meaning}</td>
                                <td className="max-w-[200px] truncate">{v.example}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-700">QUIZ ({aiParsed.quiz.length} câu)</h4>
                      {aiParsed.quiz.map((q, idx) => (
                        <div key={q.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="font-bold text-slate-800">
                            {idx + 1}. {q.prompt}
                          </p>
                          <ul className="mt-2 space-y-1">
                            {q.options.map((o, i) => (
                              <li
                                key={i}
                                className={cn(
                                  "rounded-xl border px-3 py-2 text-sm",
                                  i === q.answer
                                    ? "border-emerald-500 bg-emerald-50 font-bold text-emerald-800"
                                    : "border-slate-100"
                                )}
                              >
                                {String.fromCharCode(65 + i)}. {o} {i === q.answer && "✓"}
                              </li>
                            ))}
                          </ul>
                          {q.explain && <p className="mt-2 text-xs text-slate-500">Giải thích: {q.explain}</p>}
                        </div>
                      ))}
                    </div>
                    {aiParsed.writing && (
                      <div className="rounded-2xl bg-brand-50 p-4">
                        <h4 className="font-bold text-brand">WRITING</h4>
                        <p className="mt-1 text-sm font-semibold">{aiParsed.writing.prompt}</p>
                        <p className="mt-1 text-xs text-slate-500">Gợi ý: {aiParsed.writing.hint}</p>
                      </div>
                    )}
                  </div>
                ) : null}
              </Section>
            )}

            <Section step={aiMarkdown ? 3 : 2} title="Chọn hạn nộp">
              <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4 py-2">
                <CalendarDays className="h-5 w-5 text-brand" />
                <Input
                  type="datetime-local"
                  value={due}
                  onChange={(e) => setDue(e.target.value)}
                  className="border-0 px-0 focus:ring-0 text-sm font-bold text-slate-700"
                />
              </div>
            </Section>

            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}
            <Button size="lg" onClick={submitAI} disabled={busy || !aiParsed}>
              <Sparkles className="h-4 w-4" /> Giao bài AI
            </Button>
          </motion.div>
        )}
      </div>
    </AppShell>
  );
}

/* helpers */
function Section({ step, title, children }: { step: number; title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
      <h2 className="mb-4 flex items-center gap-2 font-extrabold text-slate-900">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">
          {step}
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function TypeCard({
  active,
  onClick,
  icon: Icon,
  label,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Layers;
  label: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-all cursor-pointer",
        active ? "border-brand bg-brand-50/70 shadow-xs" : "border-slate-200 hover:bg-slate-50"
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-2xl transition-colors",
          active ? "bg-brand text-white shadow-sm" : "bg-slate-100 text-slate-500"
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-extrabold text-slate-900 text-sm">{label}</span>
      <span className="text-xs text-slate-400">{desc}</span>
    </button>
  );
}

function Seg({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-bold transition-all cursor-pointer",
        active ? "bg-white text-brand shadow-soft" : "text-slate-500 hover:text-slate-800"
      )}
    >
      {label}
    </button>
  );
}

function SuccessCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"
    >
      <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
      <h1 className="mt-3 text-2xl font-extrabold text-slate-900">{title}</h1>
      <p className="mt-1 text-slate-500 text-sm leading-relaxed">{desc}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild variant="outline">
          <Link href="/teacher/assignments/new">Giao bài khác</Link>
        </Button>
        <Button asChild className="bg-brand text-white">
          <Link href="/teacher">Về bảng điều khiển</Link>
        </Button>
      </div>
    </motion.div>
  );
}
