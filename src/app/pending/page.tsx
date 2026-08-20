"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Send, LogOut, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/brand/Mascot";

/* Trang chờ phê duyệt — người dùng đăng nhập Google nhưng chưa có trong lớp */
export default function PendingPage() {
  const [sent, setSent] = useState(false);

  // Đăng xuất thật: điều hướng cấp cao tới route logout (xoá cookie + redirect về /login trong cùng 1 response).
  function logout() {
    window.location.href = "/api/auth/logout";
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-lift"
      >
        <div className="mb-2 flex justify-center">
          <Mascot mood="think" size={150} />
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1.5 text-xs font-bold text-amber-700">
          <Clock className="h-3.5 w-3.5" /> Chờ phê duyệt
        </span>

        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">
          Tài khoản của bạn chưa được giáo viên thêm vào lớp học
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Đừng lo! Hãy gửi yêu cầu tới giáo viên của bạn. Ngay khi được phê duyệt, bạn sẽ truy cập
          được toàn bộ bài học, flashcard và game.
        </p>

        {/* Trạng thái sau khi gửi yêu cầu */}
        {sent ? (
          <div className="mt-6 rounded-2xl bg-success-50 p-4 text-sm font-bold text-success">
            ✅ Đã gửi yêu cầu! Giáo viên sẽ xem xét sớm nhất có thể.
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-3">
            <Button size="lg" onClick={() => setSent(true)}>
              <Send className="h-4 w-4" /> Gửi yêu cầu cho giáo viên
            </Button>
            <Button size="lg" variant="outline" onClick={() => void logout()}>
              <LogOut className="h-4 w-4" /> Đăng xuất
            </Button>
          </div>
        )}

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" /> Về trang chủ
        </Link>
      </motion.div>
    </div>
  );
}
