"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  Zap,
  Flame,
  BookOpen,
  Star,
  ChevronLeft,
  Calendar,
  ClipboardList,
  ClipboardCheck,
  UserCheck,
  Sparkles,
  ArrowUpDown,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/magic/NumberTicker";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StudentStats {
  id: string;
  name: string;
  email: string;
  avatarColor: string;
  createdAt: string;
  xp: number;
  streak: number;
  wordsLearned: number;
  level: number;
}

export default function TeacherStudentsPage() {
  const [students, setStudents] = useState<StudentStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"xp" | "streak" | "wordsLearned" | "name">("xp");
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/teacher/students")
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        if (data.ok && Array.isArray(data.students)) {
          setStudents(data.students);
        }
      })
      .catch((e) => console.error("Fetch students error:", e))
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const filteredStudents = useMemo(() => {
    let list = [...students];
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(
        (s) => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q)
      );
    }
    list.sort((a, b) => {
      if (sortBy === "name") {
        return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      const diff = (a[sortBy] ?? 0) - (b[sortBy] ?? 0);
      return sortAsc ? diff : -diff;
    });
    return list;
  }, [students, search, sortBy, sortAsc]);

  const totalXP = students.reduce((acc, s) => acc + (s.xp || 0), 0);
  const activeStudentsCount = students.filter((s) => s.streak > 0 || s.xp > 0).length;
  const avgWords =
    students.length > 0
      ? Math.round(students.reduce((acc, s) => acc + (s.wordsLearned || 0), 0) / students.length)
      : 0;

  const toggleSort = (col: "xp" | "streak" | "wordsLearned" | "name") => {
    if (sortBy === col) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(col);
      setSortAsc(false);
    }
  };

  return (
    <AppShell>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-6"
      >
        {/* Navigation & Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/teacher"
              className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-brand transition-colors group"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Quay lại Tổng quan
            </Link>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-md">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <h1 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Danh sách học sinh
                </h1>
                <p className="text-sm text-slate-500">
                  Theo dõi tiến độ, cấp độ và số liệu học tập của học viên trong lớp
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/teacher/assignments/new">
              <Button variant="outline" size="sm" className="gap-1.5 border-slate-200">
                <ClipboardList className="h-4 w-4 text-brand" /> Giao bài
              </Button>
            </Link>
            <Link href="/teacher/grading">
              <Button size="sm" className="gap-1.5 bg-brand text-white shadow-sm hover:bg-brand-600">
                <ClipboardCheck className="h-4 w-4" /> Chấm bài
              </Button>
            </Link>
          </div>
        </div>

        {/* 4 KPI Summary Cards */}
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tổng học sinh
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Users className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-2xl font-black text-slate-900">
              <NumberTicker value={students.length} />
            </p>
            <p className="mt-1 text-xs text-slate-500">Đã đăng ký tài khoản</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Học sinh tích cực
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <UserCheck className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-2xl font-black text-slate-900">
              <NumberTicker value={activeStudentsCount} />
            </p>
            <p className="mt-1 text-xs text-slate-500">Có điểm XP hoặc streak</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tổng điểm XP lớp
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand">
                <Zap className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-2xl font-black text-slate-900">
              <NumberTicker value={totalXP} />
            </p>
            <p className="mt-1 text-xs text-slate-500">Điểm kinh nghiệm tích lũy</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Trung bình từ vựng
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <BookOpen className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-2 text-2xl font-black text-slate-900">
              <NumberTicker value={avgWords} />
            </p>
            <p className="mt-1 text-xs text-slate-500">Từ / học sinh</p>
          </div>
        </motion.div>

        {/* Filter and Search Bar */}
        <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm theo tên hoặc email học sinh..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Sắp xếp theo:</span>
            <button
              onClick={() => toggleSort("xp")}
              className={cn(
                "rounded-lg px-3 py-1.5 transition-colors border",
                sortBy === "xp"
                  ? "bg-brand text-white border-brand font-bold"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              XP {sortBy === "xp" && (sortAsc ? "↑" : "↓")}
            </button>
            <button
              onClick={() => toggleSort("streak")}
              className={cn(
                "rounded-lg px-3 py-1.5 transition-colors border",
                sortBy === "streak"
                  ? "bg-brand text-white border-brand font-bold"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              Chuỗi ngày {sortBy === "streak" && (sortAsc ? "↑" : "↓")}
            </button>
            <button
              onClick={() => toggleSort("wordsLearned")}
              className={cn(
                "rounded-lg px-3 py-1.5 transition-colors border",
                sortBy === "wordsLearned"
                  ? "bg-brand text-white border-brand font-bold"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              Từ vựng {sortBy === "wordsLearned" && (sortAsc ? "↑" : "↓")}
            </button>
          </div>
        </motion.div>

        {/* Students Table */}
        <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="py-16 text-center text-sm font-semibold text-slate-400">
              Đang tải danh sách học sinh...
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="py-16 text-center">
              <Users className="mx-auto h-12 w-12 text-slate-300" />
              <p className="mt-3 text-base font-bold text-slate-700">
                {search ? "Không tìm thấy học sinh phù hợp" : "Chưa có học sinh nào trong lớp"}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {search
                  ? "Vui lòng thử tìm với từ khóa khác"
                  : "Khi học sinh đăng ký tài khoản mới, danh sách sẽ hiển thị tại đây"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="border-b border-slate-100 bg-slate-50/70 text-xs font-bold uppercase text-slate-400">
                  <tr>
                    <th className="px-6 py-4">Học sinh</th>
                    <th className="px-6 py-4">Cấp độ</th>
                    <th className="px-6 py-4">Điểm XP</th>
                    <th className="px-6 py-4">Chuỗi ngày</th>
                    <th className="px-6 py-4">Từ vựng</th>
                    <th className="px-6 py-4">Ngày tham gia</th>
                    <th className="px-6 py-4 text-right">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((st) => {
                    const initials = st.name
                      .split(" ")
                      .slice(-2)
                      .map((w) => w[0])
                      .join("");

                    return (
                      <tr key={st.id} className="transition-colors hover:bg-slate-50/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-xs"
                              style={{ backgroundColor: st.avatarColor || "#4361ee" }}
                            >
                              {initials}
                            </span>
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 truncate">{st.name}</p>
                              <p className="text-xs text-slate-400 truncate">{st.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                            <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Cấp {st.level}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900">
                          <div className="inline-flex items-center gap-1.5 text-brand">
                            <Zap className="h-4 w-4" />
                            <span>{st.xp} XP</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-700">
                          <div className="inline-flex items-center gap-1.5 text-orange-600">
                            <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
                            <span>{st.streak} ngày</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-700">
                          <div className="inline-flex items-center gap-1.5 text-emerald-600">
                            <BookOpen className="h-4 w-4" />
                            <span>{st.wordsLearned} từ</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-400">
                          {st.createdAt ? new Date(st.createdAt).toLocaleDateString("vi-VN") : "—"}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {st.xp > 0 || st.streak > 0 ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-100">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Tích cực
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                              Mới tạo
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AppShell>
  );
}
