"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Video, Plus, Trash2, Sparkles, CheckCircle2, Wand2, Loader2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Label, Input } from "@/components/ui/input";

/* Đăng bài học — dán link YouTube → preview → thêm từ vựng (động) → xuất bản */

interface VocabRow {
  id: number;
  word: string;
  meaning: string;
  time: string;
}

let counter = 1;
const newId = () => counter++;

const SAMPLE_ROWS: VocabRow[] = [
  { id: newId(), word: "relaxing", meaning: "thư giãn", time: "0:18" },
  { id: newId(), word: "hang out", meaning: "đi chơi", time: "0:52" },
];

/** Rút trọn YouTube ID từ nhiều dạng link */
function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export default function NewLessonPage() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=WUfv5FD-x2g");
  const [title, setTitle] = useState("Talking About Your Weekend");
  const [rows, setRows] = useState<VocabRow[]>(SAMPLE_ROWS);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const videoId = extractYouTubeId(url);

  const publish = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/teacher/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          url,
          vocab: rows.map((r) => ({ word: r.word, meaning: r.meaning, time: r.time })),
        }),
      });
      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        setError(d.error ?? "Xuất bản thất bại");
        return;
      }
      setDone(true);
    } catch {
      setError("Lỗi mạng, thử lại");
    } finally {
      setBusy(false);
    }
  };

  const addRow = () => setRows((r) => [...r, { id: newId(), word: "", meaning: "", time: "" }]);
  const removeRow = (id: number) => setRows((r) => r.filter((row) => row.id !== id));
  const updateRow = (id: number, field: keyof VocabRow, value: string) =>
    setRows((r) => r.map((row) => (row.id === id ? { ...row, [field]: value } : row)));

  if (done) {
    return (
      <AppShell>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto mt-10 max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card"
        >
          <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
          <h1 className="mt-3 text-2xl font-extrabold text-slate-900">Đã xuất bản bài học!</h1>
          <p className="mt-1 text-slate-500">
            Hệ thống đã tự động tạo <span className="font-extrabold text-brand">bộ flashcard {rows.length} từ</span> từ danh sách từ vựng của bạn.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild variant="outline"><Link href="/teacher/lessons/new">Đăng bài khác</Link></Button>
            <Button asChild><Link href="/teacher">Về bảng điều khiển</Link></Button>
          </div>
        </motion.div>
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
          <Video className="h-6 w-6 text-brand" /> Đăng bài học mới
        </h1>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-col gap-6">
          {/* Link YouTube + preview */}
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
            <h2 className="mb-4 flex items-center gap-2 font-extrabold text-slate-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">1</span>
              Dán link video YouTube
            </h2>
            <Label>Tiêu đề bài học</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="VD: Ordering Food in English" className="mb-3" />
            <Label>Đường dẫn YouTube</Label>
            <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://youtube.com/watch?v=..." />

            {/* Preview video */}
            <div className="mt-4">
              {videoId ? (
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Preview"
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-400">
                  Nhập link YouTube hợp lệ để xem trước
                </div>
              )}
            </div>
          </div>

          {/* Bảng từ vựng động */}
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">2</span>
                Danh sách từ vựng & timestamp
              </h2>
              <span className="rounded-full bg-success-50 px-3 py-1 text-xs font-extrabold text-success">
                {rows.length} từ
              </span>
            </div>

            {/* Header (desktop) */}
            <div className="hidden grid-cols-[1fr_1fr_90px_40px] gap-2 px-1 pb-2 text-xs font-bold text-slate-400 sm:grid">
              <span>Từ tiếng Anh</span>
              <span>Nghĩa tiếng Việt</span>
              <span>Thời điểm</span>
              <span />
            </div>

            <div className="flex flex-col gap-2">
              {rows.map((row) => (
                <div key={row.id} className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_90px_40px]">
                  <Input value={row.word} onChange={(e) => updateRow(row.id, "word", e.target.value)} placeholder="word" />
                  <Input value={row.meaning} onChange={(e) => updateRow(row.id, "meaning", e.target.value)} placeholder="nghĩa" />
                  <Input value={row.time} onChange={(e) => updateRow(row.id, "time", e.target.value)} placeholder="0:00" />
                  <button
                    onClick={() => removeRow(row.id)}
                    className="flex items-center justify-center rounded-2xl border-2 border-slate-200 text-slate-400 transition-colors hover:border-danger hover:text-danger"
                    aria-label="Xóa dòng"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <Button variant="outline" className="mt-3 w-full" onClick={addRow}>
              <Plus className="h-4 w-4" /> Thêm dòng
            </Button>
            <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <Wand2 className="h-3.5 w-3.5 text-accent" /> Khi xuất bản, hệ thống sẽ tự tạo bộ flashcard từ danh sách này.
            </p>
          </div>

          {error && (
            <p className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-2.5 text-sm font-semibold text-danger">
              {error}
            </p>
          )}

          <Button size="lg" onClick={publish} disabled={busy || !videoId || rows.length === 0}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            Xuất bản bài học
          </Button>
        </motion.div>
      </div>
    </AppShell>
  );
}
