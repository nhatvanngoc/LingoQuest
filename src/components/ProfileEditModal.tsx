"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, GraduationCap, Check, Palette, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "#2563EB", // Blue
  "#7C3AED", // Violet
  "#059669", // Emerald
  "#D97706", // Amber
  "#DB2777", // Pink
  "#4F46E5", // Indigo
  "#0891B2", // Cyan
  "#EA580C", // Orange
];

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: {
    name: string;
    email: string;
    grade?: string;
    avatarColor?: string;
  };
  onProfileUpdated?: (updated: { name: string; grade: string; avatarColor: string }) => void;
}

export function ProfileEditModal({
  isOpen,
  onClose,
  currentUser,
  onProfileUpdated,
}: ProfileEditModalProps) {
  const [name, setName] = useState(currentUser.name);
  const [grade, setGrade] = useState<"10" | "11" | "12">(
    (currentUser.grade as any) || "11"
  );
  const [avatarColor, setAvatarColor] = useState(
    currentUser.avatarColor || "#2563EB"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!name.trim() || name.trim().length < 2) {
      setError("Họ và tên phải có ít nhất 2 ký tự");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          grade,
          avatarColor,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Không thể cập nhật hồ sơ");
      }

      setSuccessMessage("Đã lưu thông tin hồ sơ và khối lớp thành công!");
      onProfileUpdated?.({ name: name.trim(), grade, avatarColor });

      setTimeout(() => {
        onClose();
        // Refresh page to sync all views
        window.location.reload();
      }, 1000);
    } catch (err: any) {
      setError(err.message || "Lỗi kết nối máy chủ");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
              <User className="w-4 h-4" />
            </span>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              Chỉnh Sửa Thông Tin Hồ Sơ
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4" /> {successMessage}
            </div>
          )}

          {/* Name */}
          <div>
            <Label htmlFor="profile-name">Họ và tên</Label>
            <div className="relative mt-1.5">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="profile-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ tên của bạn..."
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Grade Selection */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label>Khối Lớp Đang Học (CT GDPT 2018)</Label>
              <span className="text-2xs font-semibold text-teal-600 dark:text-teal-400">
                Đang chọn: Lớp {grade}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {(["10", "11", "12"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={cn(
                    "py-2.5 px-3 rounded-xl font-bold text-xs border flex flex-col items-center gap-1 transition-all",
                    grade === g
                      ? "bg-teal-600 text-white border-teal-600 shadow-sm shadow-teal-600/20 scale-102"
                      : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
                  )}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Lớp {g}</span>
                </button>
              ))}
            </div>
            <p className="text-2xs text-slate-500 mt-1.5">
              Thay đổi khối lớp sẽ tự động cập nhật bài học và lộ trình phù hợp với chương trình của bạn.
            </p>
          </div>

          {/* Avatar Color Picker */}
          <div>
            <Label className="flex items-center gap-1.5 mb-2">
              <Palette className="w-3.5 h-3.5 text-slate-500" /> Màu sắc đại diện
            </Label>
            <div className="flex items-center gap-2.5 overflow-x-auto py-1">
              {AVATAR_COLORS.map((col) => (
                <button
                  key={col}
                  type="button"
                  onClick={() => setAvatarColor(col)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 relative shrink-0"
                  style={{ backgroundColor: col }}
                >
                  {avatarColor === col && <Check className="w-4 h-4 text-white drop-shadow-xs" />}
                </button>
              ))}
            </div>
          </div>

          {/* Readonly Email */}
          <div>
            <Label>Email tài khoản</Label>
            <Input
              type="email"
              value={currentUser.email}
              disabled
              className="mt-1.5 bg-slate-100 dark:bg-slate-800/80 text-slate-500 cursor-not-allowed text-xs font-mono"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Hủy
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> Đang lưu...
                </>
              ) : (
                "Lưu Thay Đổi"
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
