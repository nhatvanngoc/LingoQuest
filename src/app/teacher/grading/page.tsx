"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  PenLine,
  CheckCircle2,
  Clock,
  MessageSquare,
  Star,
  Loader2,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/lib/state/app-context";
import { cn } from "@/lib/utils";

/* Trang chấm bài viết — giáo viên đọc bài, cho điểm + nhận xét (dữ liệu từ DB) */

const RUBRIC = ["Ngữ pháp", "Từ vựng", "Bố cục", "Chính tả"];

interface Submission {
  id: string;
  student: string;
  avatarColor: string;
  lesson: string;
  prompt: string;
  text: string;
  words: number;
  status: string;
  score: number;
  submittedAt: string;
}

export default function GradingPage() {
  const { pushToast } = useApp();
  const [graded, setGraded] = useState<Record<string, { score: number; comment: string }>>({});
  const [active, setActive] = useState("");
  const [score, setScore] = useState(85);
  const [comment, setComment] = useState("");
  const [busy, setBusy] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ok = true;
    fetch("/api/teacher/submissions")
      .then((r) => r.json())
      .then((data: { submissions?: Submission[] }) => {
        if (!ok) return;
        // API trả lessonTitle → ánh xạ sang lesson cho giao diện.
        setSubmissions(
          (data.submissions ?? []).map((s) => ({ ...s, lesson: (s as Submission & { lessonTitle?: string }).lessonTitle ?? s.lesson })),
        );
      })
      .catch(() => {})
      .finally(() => ok && setLoading(false));
    return () => {
      ok = false;
    };
  }, []);

  const pending = submissions.filter((s) => !graded[s.id]);
  const sub = submissions.find((s) => s.id === active) ?? submissions[0];

  useEffect(() => {
    if (!active && submissions.length > 0) {
      // Set active submission khi có danh sách submissions - dùng requestAnimationFrame để tránh setState trong effect
      requestAnimationFrame(() => setActive(submissions[0].id));
    }
  }, [submissions]);

  const submitGrade = async () => {
    if (!sub || busy) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/teacher/submissions/${sub.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score, comment }),
      });
      if (res.ok) {
        setGraded((g) => ({ ...g, [sub.id]: { score, comment } }));
        pushToast({
          title: `Đã chấm: ${sub.student}`,
          desc: `Điểm ${score}/100 · ${Object.keys(graded).length + 1}/${submissions.length}`,
          icon: "✅",
          tone: "badge",
        });
        setComment("");
        setScore(85);
        // Chuyển sang bài kế tiếp chưa chấm
        const next = submissions.find((s) => s.id !== sub.id && !graded[s.id]);
        if (next) setActive(next.id);
      }
    } finally {
      setBusy(false);
    }
  };

  const gradedCount = Object.keys(graded).length;

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl">
        <Link href="/teacher" className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand">
          <ChevronLeft className="h-4 w-4" /> Quay lại bảng điều khiển
        </Link>

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-extrabold text-slate-900">
              <PenLine className="h-6 w-6 text-brand" /> Chấm bài viết
            </h1>
            <p className="mt-1 text-slate-500">
              Còn {pending.length} bài chờ chấm · Đã chấm {gradedCount}/{submissions.length}
            </p>
          </div>
          <div className="flex w-40 flex-col">
            <div className="mb-1 flex justify-between text-xs font-bold text-slate-400">
              <span>Tiến độ chấm</span>
              <span>{submissions.length === 0 ? 0 : Math.round((gradedCount / submissions.length) * 100)}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-success transition-all duration-500"
                style={{ width: `${submissions.length === 0 ? 0 : (gradedCount / submissions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[320px_1fr]">
          {/* Danh sách bài chờ chấm */}
          <div className="flex flex-col gap-2">
            {loading && <div className="rounded-2xl bg-slate-50 p-6 text-center text-sm font-semibold text-slate-400">Đang tải…</div>}
            {!loading && submissions.map((s) => {
              const done = graded[s.id];
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition-colors",
                    isActive ? "border-brand bg-brand-50" : "border-slate-100 bg-white hover:border-brand-100",
                    done && !isActive && "opacity-50",
                  )}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                    style={{ backgroundColor: s.avatarColor }}
                  >
                    {s.student.split(" ").slice(-2).map((w) => w[0]).join("")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-slate-900">{s.student}</span>
                    <span className="block truncate text-xs text-slate-400">{s.lesson} · {s.words} từ</span>
                  </span>
                  {done ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  ) : (
                    <Clock className="h-4 w-4 shrink-0 text-amber-500" />
                  )}
                </button>
              );
            })}
            {!loading && pending.length === 0 && (
              <div className="rounded-2xl bg-success-50 p-6 text-center text-sm font-bold text-success">
                🎉 Đã chấm hết! Tuyệt vời.
              </div>
            )}
          </div>

          {/* Bài viết + khung chấm */}
          <AnimatePresence mode="wait">
            {!sub ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-slate-100 bg-white p-8 text-center text-sm font-semibold text-slate-400"
              >
                Chưa có học sinh nên chưa có bài viết để chấm.
              </motion.div>
            ) : (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
                  <div className="flex items-center justify-between">
                    <Badge variant="brand">Đề bài</Badge>
                    <span className="text-xs font-bold text-slate-400">{sub.submittedAt}</span>
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{sub.prompt}</p>

                  <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                    <p className="whitespace-pre-wrap leading-relaxed text-slate-700">{sub.text}</p>
                  </div>
                  <p className="mt-2 text-right text-xs font-bold text-slate-400">{sub.words} từ</p>
                </div>

                {graded[sub.id] ? (
                  <div className="flex items-center justify-center gap-3 rounded-3xl border border-success-100 bg-success-50 p-6 text-success">
                    <CheckCircle2 className="h-8 w-8" />
                    <div>
                      <p className="font-extrabold">Đã chấm bài này — {graded[sub.id].score}/100</p>
                      <p className="text-sm">{graded[sub.id].comment || "Chưa có nhận xét."}</p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
                    <h3 className="mb-3 font-extrabold text-slate-900">Tiêu chí & điểm</h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {RUBRIC.map((r) => (
                        <span key={r} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand">
                          {r}
                        </span>
                      ))}
                    </div>

                    <label className="mb-1.5 block text-sm font-bold text-slate-700">
                      Điểm: <span className="text-brand">{score}/100</span>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={score}
                      onChange={(e) => setScore(Number(e.target.value))}
                      className="w-full accent-[#2563eb]"
                    />

                    <label className="mb-1.5 mt-4 block text-sm font-bold text-slate-700">
                      <MessageSquare className="mr-1 inline h-4 w-4" /> Nhận xét cho học sinh
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="VD: Bài viết tốt! Chú ý chia thì quá khứ..."
                      className="min-h-[90px] w-full resize-y rounded-2xl border-2 border-slate-200 p-4 text-[15px] leading-relaxed text-slate-900 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15"
                    />

                    <Button className="mt-4 w-full" onClick={submitGrade} disabled={busy || pending.length === 0}>
                      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Star className="h-4 w-4" />}
                      Chấm điểm & lưu
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AppShell>
  );
}
