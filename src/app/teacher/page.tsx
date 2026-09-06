"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Plus,
  Users,
  ClipboardCheck,
  CheckCircle2,
  Video,
  ArrowRight,
  BookOpen,
  Flame,
  Trash2,
  Eye,
  EyeOff,
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  FileQuestion,
  Edit3,
  BarChart3,
  RefreshCw,
  Copy,
  Download,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import type { MatrixStatus } from "@/lib/types";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useApp } from "@/lib/state/app-context";

/* Bảng điều khiển Giáo viên — Quản lý Bài tập, Bài giảng, Thống kê & Ma trận tiến độ */

interface TeacherAssignment {
  id: string;
  title: string;
  type: string;
  description: string;
  videoUrl: string;
  status: "published" | "hidden";
  dueAt: string | null;
  createdAt: string;
  lessonTitle: string | null;
  content?: any;
  vocabCount: number;
  quizCount: number;
  fillCount: number;
  hasWriting: boolean;
  submissionCount: number;
}

interface TeacherLesson {
  id: string;
  slug: string;
  title: string;
  titleVi: string | null;
  description: string;
  youtubeId: string;
  status: "published" | "hidden";
  createdAt: string;
  vocabCount: number;
}

const CELL: Record<MatrixStatus, { cls: string; label: string }> = {
  none: { cls: "bg-slate-100 text-slate-400", label: "Chưa làm" },
  doing: { cls: "bg-accent text-slate-900", label: "Đang làm" },
  submitted: { cls: "bg-success text-white", label: "Đã nộp" },
  graded: { cls: "bg-brand text-white", label: "Đã chấm" },
};

export default function TeacherPage() {
  const router = useRouter();
  const { pushToast } = useApp();
  const [activeTab, setActiveTab] = useState<"assignments" | "lessons" | "matrix">("assignments");
  const [exporting, setExporting] = useState(false);

  // Overview Data (stats & matrix)
  const [data, setData] = useState<{
    stats: {
      activeStudents: number;
      pendingGrading: number;
      completionRate: number;
      totalWordsLearned?: number;
      avgStreak?: number;
      totalXp?: number;
    };
    matrix: { students: string[]; assignments: string[]; matrix: MatrixStatus[][] };
  } | null>(null);

  // Assignments List
  const [assignmentsList, setAssignmentsList] = useState<TeacherAssignment[]>([]);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  // Lessons List
  const [lessonsList, setLessonsList] = useState<TeacherLesson[]>([]);
  const [loadingLessons, setLoadingLessons] = useState(true);

  // Action status loading tracking
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Load Overview Data
  const loadOverview = useCallback(() => {
    fetch("/api/teacher/overview")
      .then((r) => r.json())
      .then((d) => {
        setData({
          stats: d.stats ?? { activeStudents: 0, pendingGrading: 0, completionRate: 0 },
          matrix: d.matrix ?? { students: [], assignments: [], matrix: [] },
        });
      })
      .catch(() => {});
  }, []);

  // Load Assignments
  const loadAssignments = useCallback(() => {
    setLoadingAssignments(true);
    fetch("/api/teacher/assignments")
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && Array.isArray(d.assignments)) {
          setAssignmentsList(d.assignments);
        }
      })
      .catch(() => {})
      .finally(() => setLoadingAssignments(false));
  }, []);

  // Load Lessons
  const loadLessons = useCallback(() => {
    setLoadingLessons(true);
    fetch("/api/teacher/lessons")
      .then((r) => r.json())
      .then((d) => {
        if (d.ok && Array.isArray(d.lessons)) {
          setLessonsList(d.lessons);
        }
      })
      .catch(() => {})
      .finally(() => setLoadingLessons(false));
  }, []);

  useEffect(() => {
    loadOverview();
    loadAssignments();
    loadLessons();
  }, [loadOverview, loadAssignments, loadLessons]);

  // Nhân bản bài tập
  const handleCloneAssignment = (a: TeacherAssignment) => {
    const cloneData = {
      title: `${a.title} (Bản sao)`,
      description: a.description || "",
      videoUrl: a.videoUrl || "",
      content: a.content || null,
    };
    sessionStorage.setItem("lingoquest:clone-assignment", JSON.stringify(cloneData));
    pushToast({
      title: "Đã tạo bản sao bài tập",
      desc: "Đang chuyển đến Studio để bạn chỉnh sửa và giao bài...",
      icon: "📋",
      tone: "info",
    });
    router.push("/teacher/assignments/new");
  };

  // Xuất danh sách & bảng điểm học sinh ra CSV
  const handleExportRoster = async () => {
    setExporting(true);
    try {
      const res = await fetch("/api/teacher/students");
      const json = await res.json();
      if (json.ok && Array.isArray(json.students) && json.students.length > 0) {
        const headers = ["ID", "Họ và tên", "Email", "Cấp độ", "Kinh nghiệm (XP)", "Chuỗi học (Streak)", "Từ vựng đã thuộc", "Ngày đăng ký"];
        const rows = json.students.map((s: any) => [
          s.id,
          `"${(s.name || "").replace(/"/g, '""')}"`,
          `"${(s.email || "").replace(/"/g, '""')}"`,
          s.level ?? 1,
          s.xp ?? 0,
          s.streak ?? 0,
          s.wordsLearned ?? 0,
          s.createdAt ? new Date(s.createdAt).toLocaleDateString("vi-VN") : "",
        ]);
        const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r: any[]) => r.join(","))].join("\r\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `LingoQuest_Danh_Sach_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        pushToast({
          title: "Xuất dữ liệu thành công",
          desc: `Đã tải xuống file CSV danh sách ${json.students.length} học sinh (chuẩn UTF-8 mở trực tiếp bằng Excel).`,
          icon: "📊",
          tone: "info",
        });
      } else {
        alert("Chưa có học sinh nào trong hệ thống để xuất file.");
      }
    } catch {
      alert("Lỗi khi kết nối để xuất danh sách học sinh.");
    } finally {
      setExporting(false);
    }
  };

  // Xóa bài tập
  const handleDeleteAssignment = async (id: string, title: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa bài tập "${title}" không?\nThao tác này sẽ xóa bài tập và số liệu liên quan khỏi hệ thống.`)) {
      return;
    }

    setActionLoading(`delete-assign-${id}`);
    try {
      const res = await fetch(`/api/teacher/assignments?id=${id}`, { method: "DELETE" });
      const d = await res.json();
      if (d.ok) {
        setAssignmentsList((prev) => prev.filter((a) => a.id !== id));
        pushToast({
          title: "Đã xóa bài tập",
          desc: `Bài tập "${title}" đã được xóa thành công.`,
          icon: "🗑️",
          tone: "info",
        });
        loadOverview();
      } else {
        alert(d.error || "Không thể xóa bài tập.");
      }
    } catch {
      alert("Lỗi kết nối khi xóa bài tập.");
    } finally {
      setActionLoading(null);
    }
  };

  // Ẩn / Hiện bài tập
  const handleToggleAssignment = async (id: string, currentStatus: "published" | "hidden") => {
    setActionLoading(`toggle-assign-${id}`);
    const nextStatus = currentStatus === "hidden" ? "published" : "hidden";
    try {
      const res = await fetch("/api/teacher/assignments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      const d = await res.json();
      if (d.ok) {
        setAssignmentsList((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: nextStatus } : a))
        );
        pushToast({
          title: nextStatus === "published" ? "Đã hiện bài tập" : "Đã ẩn bài tập",
          desc: nextStatus === "published" ? "Học sinh hiện có thể nhìn thấy bài tập này." : "Bài tập đã được ẩn khỏi danh sách học sinh.",
          icon: nextStatus === "published" ? "👁️" : "🙈",
          tone: "info",
        });
      }
    } catch {
      alert("Lỗi khi cập nhật trạng thái bài tập.");
    } finally {
      setActionLoading(null);
    }
  };

  // Xóa video bài học
  const handleDeleteLesson = async (id: string, title: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa video bài học "${title}" không?\nThao tác này sẽ xóa các từ vựng gắn liền với bài học.`)) {
      return;
    }

    setActionLoading(`delete-lesson-${id}`);
    try {
      const res = await fetch(`/api/teacher/lessons?id=${id}`, { method: "DELETE" });
      const d = await res.json();
      if (d.ok) {
        setLessonsList((prev) => prev.filter((l) => l.id !== id));
        pushToast({
          title: "Đã xóa video bài học",
          desc: `Bài học "${title}" đã được xóa khỏi hệ thống.`,
          icon: "🗑️",
          tone: "info",
        });
      } else {
        alert(d.error || "Không thể xóa bài học.");
      }
    } catch {
      alert("Lỗi kết nối khi xóa bài học.");
    } finally {
      setActionLoading(null);
    }
  };

  // Ẩn / Hiện video bài học
  const handleToggleLesson = async (id: string, currentStatus: "published" | "hidden") => {
    setActionLoading(`toggle-lesson-${id}`);
    const nextStatus = currentStatus === "hidden" ? "published" : "hidden";
    try {
      const res = await fetch("/api/teacher/lessons", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nextStatus }),
      });
      const d = await res.json();
      if (d.ok) {
        setLessonsList((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: nextStatus } : l))
        );
        pushToast({
          title: nextStatus === "published" ? "Đã hiện bài học" : "Đã ẩn bài học",
          desc: nextStatus === "published" ? "Học sinh hiện có thể vào học video này." : "Bài học đã được ẩn khỏi danh sách.",
          icon: nextStatus === "published" ? "👁️" : "🙈",
          tone: "info",
        });
      }
    } catch {
      alert("Lỗi khi cập nhật trạng thái bài học.");
    } finally {
      setActionLoading(null);
    }
  };

  const students = data?.matrix.students ?? [];
  const matrixAssignments = data?.matrix.assignments ?? [];
  const matrix = data?.matrix.matrix ?? [];
  const stats = data?.stats;

  return (
    <AppShell>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="flex flex-col gap-6">
        {/* Tiêu đề + CTA */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Bảng điều khiển Giáo viên</h1>
            <p className="text-sm text-slate-500">Quản lý trực tiếp bài giảng, bài tập, chấm điểm và theo dõi tiến độ</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/teacher/lessons/new"><Video className="h-4 w-4" /> Đăng video bài học</Link>
            </Button>
            <Button asChild>
              <Link href="/teacher/assignments/new"><Plus className="h-4 w-4" /> Giao bài mới (Co-Pilot)</Link>
            </Button>
          </div>
        </motion.div>

        {/* ===== Thống kê tổng quan ===== */}
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            icon={Users}
            label="Học sinh hoạt động"
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
            label="Tỉ lệ nộp bài"
            value={`${students.length === 0 ? 0 : stats?.completionRate ?? 0}%`}
            sub="toàn lớp"
            tone="success"
          />
          <Link href="/teacher/students" className="block transition-transform hover:-translate-y-1">
            <StatCard
              icon={BookOpen}
              label="Từ vựng cả lớp"
              value={`${stats?.totalWordsLearned ?? 0}`}
              sub="từ đã thuộc →"
              tone="brand"
            />
          </Link>
          <Link href="/teacher/students" className="block transition-transform hover:-translate-y-1">
            <StatCard
              icon={Flame}
              label="Chuỗi trung bình"
              value={`${stats?.avgStreak ?? 0} ngày`}
              sub="phong độ lớp →"
              tone="accent"
            />
          </Link>
        </motion.div>

        {/* ===== BẢNG QUẢN LÝ TẬP TRUNG (TABS) ===== */}
        <motion.div variants={fadeUp} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
          {/* Tab Headers */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("assignments")}
                className={cn(
                  "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all",
                  activeTab === "assignments"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                <ClipboardCheck className="h-4 w-4" />
                <span>Bài tập đã giao</span>
                <span className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  activeTab === "assignments" ? "bg-white/20 text-white" : "bg-white text-slate-700"
                )}>
                  {assignmentsList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("lessons")}
                className={cn(
                  "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all",
                  activeTab === "lessons"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                <Video className="h-4 w-4" />
                <span>Kho video bài giảng</span>
                <span className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  activeTab === "lessons" ? "bg-white/20 text-white" : "bg-white text-slate-700"
                )}>
                  {lessonsList.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("matrix")}
                className={cn(
                  "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all",
                  activeTab === "matrix"
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                <BarChart3 className="h-4 w-4" />
                <span>Ma trận tiến độ học sinh</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportRoster}
                disabled={exporting}
                className="text-slate-700 border-slate-200 hover:bg-slate-50"
                title="Xuất bảng điểm & danh sách học sinh ra file CSV (chuẩn UTF-8 mở trực tiếp bằng Excel)"
              >
                <Download className="h-4 w-4 mr-1.5 text-emerald-600" />
                {exporting ? "Đang xuất..." : "Xuất Excel / CSV"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  loadOverview();
                  loadAssignments();
                  loadLessons();
                }}
                className="text-slate-500 hover:text-slate-900"
              >
                <RefreshCw className="h-4 w-4 mr-1.5" /> Làm mới
              </Button>
            </div>
          </div>

          {/* ===== TAB 1: BÀI TẬP ĐÃ GIAO ===== */}
          {activeTab === "assignments" && (
            <div className="pt-6">
              {loadingAssignments ? (
                <div className="py-12 text-center text-slate-400">Đang tải danh sách bài tập...</div>
              ) : assignmentsList.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                    <ClipboardCheck className="h-7 w-7" />
                  </div>
                  <h3 className="font-extrabold text-slate-800">Chưa có bài tập nào được giao</h3>
                  <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
                    Tạo ngay bài tập 5-trong-1 bằng AI Co-Pilot để giao cho học sinh làm bài và tự động thu nhận kết quả.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/teacher/assignments/new">
                      <Plus className="h-4 w-4 mr-1.5" /> Giao bài tập đầu tiên
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {assignmentsList.map((a) => {
                    const isHidden = a.status === "hidden";
                    return (
                      <div
                        key={a.id}
                        className={cn(
                          "flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border p-5 transition-all",
                          isHidden
                            ? "border-slate-200 bg-slate-50/60 opacity-80"
                            : "border-slate-100 bg-white shadow-soft hover:shadow-card"
                        )}
                      >
                        {/* Info */}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={cn(
                                "rounded-md px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide",
                                isHidden
                                  ? "bg-slate-200 text-slate-600"
                                  : "bg-emerald-100 text-emerald-800"
                              )}
                            >
                              {isHidden ? "Đã ẩn" : "Đang mở"}
                            </span>

                            <h3 className="font-extrabold text-slate-900 text-base">
                              {a.title}
                            </h3>
                          </div>

                          {a.description && (
                            <p className="mt-1 text-xs text-slate-500 line-clamp-1">{a.description}</p>
                          )}

                          {/* Components Badges */}
                          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                            {a.videoUrl && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-2 py-1 font-bold text-red-600">
                                <Video className="h-3.5 w-3.5" /> Video bài giảng
                              </span>
                            )}
                            {a.vocabCount > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2 py-1 font-bold text-blue-600">
                                <Layers className="h-3.5 w-3.5" /> {a.vocabCount} thẻ từ vựng
                              </span>
                            )}
                            {a.quizCount > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-purple-50 px-2 py-1 font-bold text-purple-600">
                                <FileQuestion className="h-3.5 w-3.5" /> {a.quizCount} câu trắc nghiệm
                              </span>
                            )}
                            {a.fillCount > 0 && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 font-bold text-amber-700">
                                <Edit3 className="h-3.5 w-3.5" /> {a.fillCount} câu điền từ
                              </span>
                            )}
                            {a.hasWriting && (
                              <span className="inline-flex items-center gap-1 rounded-lg bg-pink-50 px-2 py-1 font-bold text-pink-700">
                                <BookOpen className="h-3.5 w-3.5" /> Viết tự luận
                              </span>
                            )}

                            {a.dueAt && (
                              <span className="inline-flex items-center gap-1 text-slate-400">
                                <Calendar className="h-3.5 w-3.5" /> Hạn: {new Date(a.dueAt).toLocaleDateString("vi-VN")}
                              </span>
                            )}

                            <span className="inline-flex items-center gap-1 font-bold text-brand">
                              <Users className="h-3.5 w-3.5" /> {a.submissionCount} lượt nộp
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                          {/* Xem thử (Preview as student) */}
                          <Button asChild variant="outline" size="sm" className="h-9">
                            <Link href={`/exercise/${a.id}`} target="_blank">
                              <Eye className="h-3.5 w-3.5 mr-1 text-slate-500" /> Xem thử
                            </Link>
                          </Button>

                          {/* Nhân bản bài tập (Clone) */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCloneAssignment(a)}
                            className="h-9 text-indigo-600 border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300"
                            title="Nhân bản bài tập này để chỉnh sửa hoặc giao lại"
                          >
                            <Copy className="h-3.5 w-3.5 mr-1" /> Nhân bản
                          </Button>

                          {/* Ẩn / Hiện toggle */}
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={actionLoading === `toggle-assign-${a.id}`}
                            onClick={() => handleToggleAssignment(a.id, a.status)}
                            className={cn(
                              "h-9",
                              isHidden ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-600 hover:bg-slate-100"
                            )}
                            title={isHidden ? "Hiển thị cho học sinh" : "Ẩn khỏi học sinh"}
                          >
                            {isHidden ? (
                              <>
                                <Eye className="h-3.5 w-3.5 mr-1" /> Hiện bài
                              </>
                            ) : (
                              <>
                                <EyeOff className="h-3.5 w-3.5 mr-1" /> Ẩn bài
                              </>
                            )}
                          </Button>

                          {/* Xóa bài tập */}
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={actionLoading === `delete-assign-${a.id}`}
                            onClick={() => handleDeleteAssignment(a.id, a.title)}
                            className="h-9 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                            title="Xóa bài tập"
                          >
                            <Trash2 className="h-3.5 w-3.5 mr-1" /> Xóa
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ===== TAB 2: KHO VIDEO BÀI GIẢNG ===== */}
          {activeTab === "lessons" && (
            <div className="pt-6">
              {loadingLessons ? (
                <div className="py-12 text-center text-slate-400">Đang tải danh sách bài học...</div>
              ) : lessonsList.length === 0 ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand">
                    <Video className="h-7 w-7" />
                  </div>
                  <h3 className="font-extrabold text-slate-800">Chưa có video bài học nào</h3>
                  <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
                    Đăng video bài học từ YouTube và gắn thẻ từ vựng tương tác theo thời gian.
                  </p>
                  <Button asChild className="mt-4">
                    <Link href="/teacher/lessons/new">
                      <Plus className="h-4 w-4 mr-1.5" /> Đăng video bài học mới
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {lessonsList.map((l) => {
                    const isHidden = l.status === "hidden";
                    return (
                      <div
                        key={l.id}
                        className={cn(
                          "flex flex-col justify-between overflow-hidden rounded-2xl border transition-all",
                          isHidden
                            ? "border-slate-200 bg-slate-50 opacity-80"
                            : "border-slate-100 bg-white shadow-soft hover:shadow-card"
                        )}
                      >
                        {/* Video thumbnail embed */}
                        <div className="relative aspect-video w-full bg-slate-900">
                          <iframe
                            src={`https://www.youtube.com/embed/${l.youtubeId}`}
                            className="h-full w-full border-0 pointer-events-none"
                            title={l.title}
                            loading="lazy"
                          />
                          <span
                            className={cn(
                              "absolute top-2 left-2 rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase",
                              isHidden ? "bg-slate-900/80 text-white" : "bg-emerald-600 text-white"
                            )}
                          >
                            {isHidden ? "Đã ẩn" : "Đang mở"}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-extrabold text-slate-900 text-sm line-clamp-2">
                              {l.title}
                            </h3>
                            {l.titleVi && (
                              <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{l.titleVi}</p>
                            )}

                            <div className="mt-3 flex items-center gap-2 text-xs">
                              <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 font-bold text-brand">
                                <BookOpen className="h-3 w-3" /> {l.vocabCount} từ vựng
                              </span>
                              <span className="text-slate-400">
                                {new Date(l.createdAt).toLocaleDateString("vi-VN")}
                              </span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                            <Button asChild variant="outline" size="sm" className="h-8 text-xs">
                              <Link href={`/learn/${l.slug}`} target="_blank">
                                <Eye className="h-3 w-3 mr-1" /> Xem
                              </Link>
                            </Button>

                            <div className="flex items-center gap-1">
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={actionLoading === `toggle-lesson-${l.id}`}
                                onClick={() => handleToggleLesson(l.id, l.status)}
                                className={cn(
                                  "h-8 text-xs",
                                  isHidden ? "text-emerald-600" : "text-slate-600"
                                )}
                                title={isHidden ? "Hiện bài học" : "Ẩn bài học"}
                              >
                                {isHidden ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                              </Button>

                              <Button
                                variant="outline"
                                size="sm"
                                disabled={actionLoading === `delete-lesson-${l.id}`}
                                onClick={() => handleDeleteLesson(l.id, l.title)}
                                className="h-8 text-xs text-red-600 border-red-200 hover:bg-red-50"
                                title="Xóa video"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ===== TAB 3: MA TRẬN TIẾN ĐỘ HỌC SINH ===== */}
          {activeTab === "matrix" && (
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-slate-500">
                  Theo dõi trạng thái làm bài của từng học sinh đối với tất cả các bài tập đã giao trong lớp.
                </p>
                {/* Chú giải màu */}
                <div className="flex flex-wrap items-center gap-3">
                  {(Object.keys(CELL) as MatrixStatus[]).map((k) => (
                    <span key={k} className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <span className={cn("h-3 w-3 rounded", CELL[k].cls)} /> {CELL[k].label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-100 p-3">
                <table className="w-full border-separate border-spacing-1.5">
                  <thead>
                    <tr>
                      <th className="sticky left-0 z-10 bg-white p-2 text-left text-xs font-bold text-slate-400">
                        Học sinh
                      </th>
                      {matrixAssignments.map((a) => (
                        <th key={a} className="min-w-[88px] p-2 text-center text-xs font-bold text-slate-500">
                          {a}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {students.length === 0 ? (
                      <tr>
                        <td colSpan={Math.max(matrixAssignments.length + 1, 1)} className="p-6 text-center text-sm font-semibold text-slate-400">
                          Chưa có học sinh trong lớp. Danh sách học sinh sẽ hiển thị khi học sinh đăng ký tài khoản.
                        </td>
                      </tr>
                    ) : matrixAssignments.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="p-6 text-center text-sm font-semibold text-slate-400">
                          Đã có {students.length} học sinh ({students.join(", ")}). Chưa có bài tập nào được giao — hãy nhấn &quot;Giao bài&quot; ở trên để tạo bài tập đầu tiên!
                        </td>
                      </tr>
                    ) : (
                      students.map((name, si) => (
                        <tr key={name}>
                          <td className="sticky left-0 z-10 whitespace-nowrap rounded-xl bg-slate-50 p-2 text-left text-sm font-bold text-slate-700">
                            {name}
                          </td>
                          {(matrix[si] || []).map((status, ai) => (
                            <td key={ai} className="p-0 text-center">
                              <div
                                className={cn(
                                  "mx-auto flex h-9 w-full items-center justify-center rounded-xl text-[10px] font-extrabold transition-transform hover:scale-105",
                                  CELL[status].cls,
                                )}
                                title={`${name} — ${matrixAssignments[ai]}: ${CELL[status].label}`}
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
            </div>
          )}
        </motion.div>

        {/* ===== 2 thao tác nhanh ===== */}
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          <QuickAction
            href="/teacher/assignments/new"
            icon={ClipboardCheck}
            title="Giao bài tập mới (Co-Pilot AI)"
            desc="Soạn bài tập 5-trong-1 (Video + Flashcards + Quiz + Điền từ + Luận)."
          />
          <QuickAction
            href="/teacher/lessons/new"
            icon={Video}
            title="Đăng bài học video YouTube"
            desc="Dán link YouTube và tạo bộ từ vựng gắn với mốc thời gian bài giảng."
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
