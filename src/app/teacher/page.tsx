"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Plus,
  Users,
  ClipboardCheck,
  CheckCircle2,
  Video,
  ArrowRight,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import type { MatrixStatus } from "@/lib/types";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* Bảng điều khiển Giáo viên — Thống kê + Ma trận tiến độ */

const CELL: Record<MatrixStatus, { cls: string; label: string }> = {
  none: { cls: "bg-slate-100 text-slate-400", label: "Chưa làm" },
  doing: { cls: "bg-accent text-slate-900", label: "Đang làm" },
  submitted: { cls: "bg-success text-white", label: "Đã nộp" },
  graded: { cls: "bg-brand text-white", label: "Đã chấm" },
};

export default function TeacherPage() {
  const [data, setData] = useState<{
    stats: { activeStudents: number; pendingGrading: number; completionRate: number };
    matrix: { students: string[]; assignments: string[]; matrix: MatrixStatus[][] };
  } | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/teacher/overview")
      .then((r) => r.json())
      .then((d: {
        stats?: { activeStudents: number; pendingGrading: number; completionRate: number };
        matrix?: { students: string[]; assignments: string[]; matrix: MatrixStatus[][] };
      }) => {
        if (!active) return;
        setData({ stats: d.stats ?? { activeStudents: 0, pendingGrading: 0, completionRate: 0 }, matrix: d.matrix ?? { students: [], assignments: [], matrix: [] } });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const students = data?.matrix.students ?? [];
  const assignments = data?.matrix.assignments ?? [];
  const matrix = data?.matrix.matrix ?? [];
  const stats = data?.stats;

  return (
    <AppShell>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col gap-6">
        {/* Tiêu đề + CTA */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Bảng điều khiển</h1>
            <p className="text-sm text-slate-500">Tiếng Anh 10 — 10A1</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/teacher/lessons/new"><Video className="h-4 w-4" /> Đăng bài</Link>
            </Button>
            <Button asChild>
              <Link href="/teacher/assignments/new"><Plus className="h-4 w-4" /> Giao bài</Link>
            </Button>
          </div>
        </motion.div>

        {/* ===== Thống kê tổng quan ===== */}
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
          <StatCard
            icon={Users}
            label="Học sinh hoạt động tuần này"
            value={`${students.length}`}
            sub={students.length === 0 ? "chưa có học sinh" : `trên ${students.length} học sinh`}
            tone="brand"
          />
          <Link href="/teacher/grading" className="block transition-transform hover:-translate-y-1">
            <StatCard
              icon={ClipboardList}
              label="Bài đang chờ chấm"
              value={`${stats?.pendingGrading ?? 0}`}
              sub="nhấn để chấm →"
              tone="accent"
            />
          </Link>
          <StatCard
            icon={CheckCircle2}
            label="Tỉ lệ hoàn thành bài giao"
            value={`${students.length === 0 ? 0 : stats?.completionRate ?? 0}%`}
            sub="toàn lớp"
            tone="success"
          />
        </motion.div>

        {/* ===== Ma trận tiến độ ===== */}
        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft"
        >
          <div className="flex items-center justify-between p-5 pb-3">
            <h2 className="font-extrabold text-slate-900">Tiến độ học sinh theo bài tập</h2>
            {/* Chú giải màu */}
            <div className="hidden flex-wrap items-center gap-3 sm:flex">
              {(Object.keys(CELL) as MatrixStatus[]).map((k) => (
                <span key={k} className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <span className={cn("h-3 w-3 rounded", CELL[k].cls)} /> {CELL[k].label}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto px-5 pb-5">
            <table className="w-full border-separate border-spacing-1.5">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white p-2 text-left text-xs font-bold text-slate-400">
                    Học sinh
                  </th>
                  {assignments.map((a) => (
                    <th key={a} className="min-w-[88px] p-2 text-center text-xs font-bold text-slate-500">
                      {a}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={assignments.length + 1} className="p-6 text-center text-sm font-semibold text-slate-400">
                      Chưa có học sinh trong lớp. Danh sách học sinh được lấy từ database do giáo viên tạo.
                    </td>
                  </tr>
                ) : (
                  students.map((name, si) => (
                    <tr key={name}>
                      <td className="sticky left-0 z-10 whitespace-nowrap rounded-xl bg-slate-50 p-2 text-left text-sm font-bold text-slate-700">
                        {name}
                      </td>
                      {matrix[si].map((status, ai) => (
                        <td key={ai} className="p-0 text-center">
                          <div
                            className={cn(
                              "mx-auto flex h-9 w-full items-center justify-center rounded-xl text-[10px] font-extrabold transition-transform hover:scale-105",
                              CELL[status].cls,
                            )}
                            title={`${name} — ${assignments[ai]}: ${CELL[status].label}`}
                          >
                            {status === "graded" ? "✓" : status === "none" ? "–" : ""}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Chú giải mobile */}
          <div className="flex flex-wrap items-center gap-3 px-5 pb-5 sm:hidden">
            {(Object.keys(CELL) as MatrixStatus[]).map((k) => (
              <span key={k} className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <span className={cn("h-3 w-3 rounded", CELL[k].cls)} /> {CELL[k].label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ===== 2 thao tác nhanh ===== */}
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          <QuickAction
            href="/teacher/assignments/new"
            icon={ClipboardCheck}
            title="Giao bài tập mới"
            desc="Chọn nội dung, lớp và hạn nộp cho học sinh."
          />
          <QuickAction
            href="/teacher/lessons/new"
            icon={Video}
            title="Đăng bài học video"
            desc="Dán link YouTube và thêm từ vựng tự động."
          />
        </motion.div>
      </motion.div>
    </AppShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  sub: string;
  tone: "brand" | "accent" | "success";
}) {
  const tones = {
    brand: "bg-brand-50 text-brand",
    accent: "bg-accent-100 text-amber-600",
    success: "bg-success-50 text-success",
  };
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft">
      <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl", tones[tone])}>
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-3 text-3xl font-extrabold text-slate-900">{value}</p>
      <p className="text-sm font-bold text-slate-700">{label}</p>
      <p className="text-xs text-slate-400">{sub}</p>
    </div>
  );
}

function QuickAction({
  href,
  icon: Icon,
  title,
  desc,
}: {
  href: string;
  icon: typeof Users;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-soft transition-shadow hover:shadow-card"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand">
        <Icon className="h-6 w-6" />
      </span>
      <div className="flex-1">
        <h3 className="font-extrabold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
      <ArrowRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-brand" />
    </Link>
  );
}
