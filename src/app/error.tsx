"use client";

import Link from "next/link";
import { Sparkles, RefreshCw, Home, AlertTriangle, ArrowLeft, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-cream">
      {/* Background — mesh + grid */}
      <div className="pointer-events-none absolute inset-0 bg-mesh-brand opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-danger-100 to-orange-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-brand-100 to-violet-100 opacity-40 blur-3xl" />

      {/* Top brand */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            Lingo<span className="bg-gradient-to-r from-brand to-violet-600 bg-clip-text text-transparent">Quest</span>
          </span>
        </Link>
        <span className="rounded-full border border-red-200 bg-danger-50 px-3 py-1 text-xs font-black text-danger shadow-soft">500</span>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-8 shadow-lift sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-danger via-accent to-brand" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-danger-50 to-accent-50 opacity-60 blur-2xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-danger to-red-600 text-white shadow-soft">
                <AlertTriangle className="h-8 w-8" />
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-accent-50 px-3 py-1 text-xs font-black text-amber-700">
                  <Bug className="h-3.5 w-3.5" /> Có lỗi xảy ra
                </p>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  5<span className="bg-gradient-to-r from-danger to-accent bg-clip-text text-transparent">0</span>0
                </h1>
                <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">Ối — máy chủ gặp sự cố</h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">
                  Đã có lỗi không mong muốn. Đội ngũ LingoQuest đã ghi nhận. Bạn có thể thử lại ngay hoặc quay về trang chủ để tiếp tục học.
                </p>
              </div>

              {/* Error digest / message — hữu ích cho debug, ẩn chi tiết nhạy cảm */}
              {(error?.digest || error?.message) && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left">
                  <p className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-500">
                    <Bug className="h-3.5 w-3.5" /> Chi tiết lỗi
                  </p>
                  {error.digest && (
                    <p className="mt-1 font-mono text-xs font-bold text-slate-700">
                      Digest: <span className="rounded bg-white px-1.5 py-0.5 ring-1 ring-slate-200">{error.digest}</span>
                    </p>
                  )}
                  {error.message && (
                    <p className="mt-2 line-clamp-3 break-words font-mono text-xs leading-relaxed text-slate-600">{error.message}</p>
                  )}
                  <p className="mt-2 text-xs font-semibold text-slate-400">Gửi mã digest này cho giáo viên/quản trị để được hỗ trợ nhanh hơn.</p>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button onClick={() => reset()} size="xl" className="w-full sm:w-auto">
                  <RefreshCw className="h-4 w-4" /> Thử lại
                </Button>
                <Button asChild size="xl" variant="outline" className="w-full sm:w-auto">
                  <Link href="/" className="flex items-center justify-center gap-2">
                    <Home className="h-4 w-4" /> Về trang chủ
                  </Link>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-400">
                <Link
                  href="/learn"
                  className="rounded-full bg-slate-50 px-3 py-1.5 font-bold text-slate-600 ring-1 ring-slate-200 transition hover:bg-white hover:text-brand"
                >
                  Bài học
                </Link>
                <span>·</span>
                <Link
                  href="/dashboard"
                  className="rounded-full bg-slate-50 px-3 py-1.5 font-bold text-slate-600 ring-1 ring-slate-200 transition hover:bg-white hover:text-brand"
                >
                  Bảng điều khiển
                </Link>
                <span>·</span>
                <button
                  onClick={() => reset()}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1.5 font-bold text-slate-600 ring-1 ring-slate-200 transition hover:bg-white hover:text-brand"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Tải lại trang
                </button>
              </div>

              <p className="mt-8 text-center font-mono text-xs text-slate-400">Mã lỗi: 500 · INTERNAL_ERROR · Thử lại thường sẽ khắc phục được.</p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs font-semibold text-slate-400">Cùng design language với 404 · Gradient + Sparkles · LingoQuest v2</p>
        </div>
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 text-center text-xs font-semibold text-slate-400 sm:px-6 lg:px-8">
        © 2026 LingoQuest · Nếu lỗi lặp lại, vui lòng báo giáo viên
      </footer>
    </div>
  );
}
