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
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Label, Input } from "@/components/ui/input";
import { CLASS_OPTIONS } from "@/lib/mock/data";
import { cn } from "@/lib/utils";

/* Form giao bài tập — chọn loại → nội dung (bài học/flashcard) → lớp → hạn nộp → lưu DB */

interface Option {
  id: string;
  title: string;
}

export default function NewAssignmentPage() {
  const [type, setType] = useState<"exercise" | "deck">("exercise");
  const [lessons, setLessons] = useState<Option[]>([]);
  const [decks, setDecks] = useState<Option[]>([]);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [selectedDeckId, setSelectedDeckId] = useState("");
  const [target, setTarget] = useState<"class" | "students">("class");
  const [classroom, setClassroom] = useState(CLASS_OPTIONS[0]);
  const [picked, setPicked] = useState<string[]>([]);
  const [students, setStudents] = useState<string[]>([]);
  const [due, setDue] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    fetch("/api/classroom/students")
      .then((r) => r.json())
      .then((data: { students?: { name: string }[] }) => {
        if (!active) return;
        setStudents((data.students ?? []).map((s) => s.name));
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const toggleStudent = (name: string) =>
    setPicked((p) => (p.includes(name) ? p.filter((s) => s !== name) : [...p, name]));

  const contentTitle =
    type === "exercise"
      ? lessons.find((l) => l.id === selectedLessonId)?.title ?? ""
      : decks.find((d) => d.id === selectedDeckId)?.title ?? "";

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/teacher/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: contentTitle || (type === "exercise" ? "Bài tập mới" : "Bộ flashcard mới"),
          type,
          lessonId: type === "exercise" ? selectedLessonId : null,
          deckId: type === "deck" ? selectedDeckId : null,
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

  if (done) {
    return (
      <AppShell>
        <SuccessCard
          title="Đã giao bài thành công!"
          desc={`Đã giao ${type === "exercise" ? "bài tập" : "bộ flashcard"} “${contentTitle}” cho ${
            target === "class" ? "cả lớp" : `${picked.length} học sinh`
          }.`}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl">
        <Link href="/teacher" className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand">
          <ChevronLeft className="h-4 w-4" /> Quay lại bảng điều khiển
        </Link>

        <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
          <ClipboardCheck className="h-6 w-6 text-brand" /> Giao bài mới
        </h1>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col gap-6">
          {/* Loại bài */}
          <Section step={1} title="Chọn loại bài">
            <div className="grid grid-cols-2 gap-3">
              <TypeCard active={type === "exercise"} onClick={() => setType("exercise")} icon={ClipboardCheck} label="Bài tập" desc="Trắc nghiệm & bài viết" />
              <TypeCard active={type === "deck"} onClick={() => setType("deck")} icon={Layers} label="Bộ Flashcard" desc="Ôn tập từ vựng" />
            </div>
          </Section>

          {/* Nội dung */}
          <Section step={2} title="Chọn nội dung">
            <Label>{type === "exercise" ? "Bài học" : "Bộ flashcard"}</Label>
            {type === "exercise" ? (
              <select
                value={selectedLessonId}
                onChange={(e) => setSelectedLessonId(e.target.value)}
                className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
              >
                {lessons.map((l) => (
                  <option key={l.id} value={l.id}>{l.title}</option>
                ))}
              </select>
            ) : (
              <select
                value={selectedDeckId}
                onChange={(e) => setSelectedDeckId(e.target.value)}
                className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
              >
                {decks.map((d) => (
                  <option key={d.id} value={d.id}>{d.title}</option>
                ))}
              </select>
            )}
          </Section>

          {/* Giao cho ai */}
          <Section step={3} title="Giao cho">
            <div className="mb-3 inline-flex rounded-2xl bg-slate-100 p-1">
              <Seg active={target === "class"} onClick={() => setTarget("class")} label="Cả lớp" />
              <Seg active={target === "students"} onClick={() => setTarget("students")} label="Từng học sinh" />
            </div>
            {target === "class" ? (
              <select
                value={classroom}
                onChange={(e) => setClassroom(e.target.value)}
                className="h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-bold text-slate-700 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
              >
                {CLASS_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                {students.length === 0 ? (
                  <div className="col-span-full rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-400">
                    Chưa có học sinh trong lớp. Giáo viên cần tạo/thêm học sinh trong database trước.
                  </div>
                ) : (
                  students.map((s) => {
                    const on = picked.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleStudent(s)}
                        className={cn(
                          "flex items-center gap-3 rounded-2xl border-2 p-3 text-left text-sm font-bold transition-colors",
                          on ? "border-brand bg-brand-50 text-brand" : "border-slate-200 text-slate-600 hover:border-brand-100",
                        )}
                      >
                        <span className={cn("flex h-5 w-5 items-center justify-center rounded-md border-2", on ? "border-brand bg-brand text-white" : "border-slate-300")}>
                          {on && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </span>
                        {s}
                      </button>
                    );
                  })
                )}
              </div>
            )}
            {target === "students" && (
              <p className="mt-2 text-xs font-semibold text-slate-400">Đã chọn {picked.length} học sinh</p>
            )}
          </Section>

          {/* Hạn nộp */}
          <Section step={4} title="Chọn hạn nộp">
            <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4">
              <CalendarDays className="h-5 w-5 text-brand" />
              <Input
                type="datetime-local"
                value={due}
                onChange={(e) => setDue(e.target.value)}
                className="border-0 px-0 focus:ring-0"
              />
            </div>
          </Section>

          {error && (
            <p className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-2.5 text-sm font-semibold text-danger">
              {error}
            </p>
          )}

          <Button size="lg" onClick={submit} disabled={busy || (target === "students" && picked.length === 0)}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            Giao bài
          </Button>
        </motion.div>
      </div>
    </AppShell>
  );
}

/* ---------- Các component phụ của form ---------- */
function Section({ step, title, children }: { step: number; title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
      <h2 className="mb-4 flex items-center gap-2 font-extrabold text-slate-900">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">{step}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function TypeCard({ active, onClick, icon: Icon, label, desc }: { active: boolean; onClick: () => void; icon: typeof Layers; label: string; desc: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-colors",
        active ? "border-brand bg-brand-50" : "border-slate-200 hover:border-brand-100",
      )}
    >
      <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", active ? "bg-brand text-white" : "bg-slate-100 text-slate-500")}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-extrabold text-slate-900">{label}</span>
      <span className="text-xs text-slate-400">{desc}</span>
    </button>
  );
}

function Seg({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className={cn("rounded-xl px-4 py-2 text-sm font-bold transition-colors", active ? "bg-white text-brand shadow-soft" : "text-slate-500")}>
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
      <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
      <h1 className="mt-3 text-2xl font-extrabold text-slate-900">{title}</h1>
      <p className="mt-1 text-slate-500">{desc}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild variant="outline"><Link href="/teacher/assignments/new">Giao bài khác</Link></Button>
        <Button asChild><Link href="/teacher">Về bảng điều khiển</Link></Button>
      </div>
    </motion.div>
  );
}
