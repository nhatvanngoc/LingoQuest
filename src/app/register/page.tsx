"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap, Mail, Lock, Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { staggerContainer, fadeUp } from "@/lib/motion";

/* ============================================================
   Trang đăng ký — tạo tài khoản mới qua POST /api/auth/register.
   Role mặc định student, điều hướng theo role trả về.
   ============================================================ */

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const loginWithGoogle = () => {
    window.location.href = "/api/auth/google";
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim() || name.trim().length < 2) {
      setError("Tên phải có ít nhất 2 ký tự");
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email.trim())) {
      setError("Email không hợp lệ");
      return;
    }
    if (!password || password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        role?: string;
        ok?: boolean;
      };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Đăng ký thất bại");
        return;
      }
      if (data.role === "teacher") router.push("/teacher");
      else if (data.role === "pending") router.push("/pending");
      else router.push("/dashboard");
    } catch {
      setError("Lỗi mạng, thử lại sau");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 via-cream to-white p-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lift"
      >
        {/* ===== Header brand ===== */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-3 bg-gradient-to-br from-brand to-brand-700 px-8 pb-7 pt-9 text-center text-white"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 shadow-soft backdrop-blur">
            <GraduationCap className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Lingo<span className="opacity-90">Quest</span>
            </h1>
            <p className="mt-1 text-sm text-white/80">Tạo tài khoản</p>
            <p className="text-sm text-white/80">Bắt đầu hành trình học tiếng Anh</p>
          </div>
        </motion.div>

        {/* ===== Form ===== */}
        <motion.form variants={fadeUp} onSubmit={onSubmit} className="flex flex-col gap-4 px-8 py-7">
          <div>
            <Label htmlFor="name">Họ tên</Label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Nguyễn Văn A"
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@lingoquest.app"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Mật khẩu</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="pl-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && (
            <p className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-2.5 text-sm font-semibold text-danger">
              {error}
            </p>
          )}

          <Button type="submit" size="lg" className="mt-1 w-full" disabled={busy}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            Tạo tài khoản
          </Button>
        </motion.form>

        {/* ===== Divider + Google OAuth ===== */}
        <div className="flex items-center gap-3 px-8 pt-1">
          <span className="h-px flex-1 bg-slate-100" />
          <span className="text-xs font-bold uppercase tracking-wide text-slate-400">hoặc</span>
          <span className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="px-8 pb-1 pt-3">
          <Button type="button" variant="outline" size="lg" className="w-full" onClick={loginWithGoogle}>
            <GoogleG className="h-4 w-4" />
            Tiếp tục với Google
          </Button>
        </div>

        {/* ===== Footer link ===== */}
        <p className="px-8 pb-7 pt-4 text-center text-sm text-slate-500">
          Đã có tài khoản?{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            Đăng nhập
          </Link>
        </p>
      </motion.div>
    </main>
  );
}

/* Logo chữ G 4 màu của Google (inline SVG — không phụ thuộc lucide brand icon). */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" role="img">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
