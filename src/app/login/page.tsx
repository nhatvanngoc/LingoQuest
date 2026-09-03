"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCap, Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { staggerContainer, fadeUp } from "@/lib/motion";

/* ============================================================
   Trang đăng nhập — email + mật khẩu qua bảng users Postgres.
   Không có mock: gọi POST /api/auth/login, lưu session cookie,
   rồi điều hướng theo vai trò.
   ============================================================ */

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Lỗi từ query (vd. thất bại OAuth Google) hoặc từ form.
  // Khởi tạo null để server/client khớp nhau; đọc query sau khi mount
  // (tránh mismatch hydration do nhánh typeof window).
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const e = new URLSearchParams(window.location.search).get("error");
    if (!e) return;
    const reasons: Record<string, string> = {
      google_config:
        "Thiếu cấu hình Google: GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET chưa được điền vào .env (hoặc chưa khởi động lại server dev).",
      google_state:
        "Phiên OAuth không khớp (cookie lq_oauth bị mất). Thử lại; nếu trên Vercel, hãy để GOOGLE_REDIRECT_URI trống hoặc đặt đúng https://<domain>.vercel.app/api/auth/google/callback và thêm URI này vào Google Cloud Console → Authorized redirect URIs.",
      google_token:
        "Google từ chối cấp token — sai GOOGLE_CLIENT_SECRET hoặc redirect_uri không khớp với Google Console.",
      google_user: "Không lấy được thông tin người dùng từ Google.",
      google_email: "Tài khoản Google không cung cấp email.",
      google_exception: "Lỗi mạng khi gọi Google. Thử lại.",
    };
    // Cập nhật error state dựa trên query param - chỉ chạy một lần sau mount
    const newError = reasons[e] ?? "Đăng nhập Google thất bại, thử lại.";
    // Dùng requestAnimationFrame để tránh setState trong effect body
    requestAnimationFrame(() => setError(newError));
  }, []);

  const loginWithGoogle = () => {
    // Điều hướng toàn trang để bắt đầu luồng OAuth2 PKCE.
    window.location.href = "/api/auth/google";
  };

  async function doLogin(loginEmail: string, loginPassword: string) {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        role?: string;
        ok?: boolean;
      };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Đăng nhập thất bại");
        return false;
      }
      router.push(data.role === "teacher" ? "/teacher" : "/dashboard");
      return true;
    } catch {
      setError("Lỗi mạng, thử lại sau");
      return false;
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    void doLogin(email, password);
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
            <p className="mt-1 text-sm text-white/80">Đăng nhập để tiếp tục học tiếng Anh</p>
          </div>
        </motion.div>

        {/* ===== Form ===== */}
        <motion.form variants={fadeUp} onSubmit={onSubmit} aria-label="Form đăng nhập" className="flex flex-col gap-4 px-8 py-7">
          <div>
            <Label htmlFor="email">Email<span className="text-danger ml-1" aria-hidden="true">*</span></Label>
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
                aria-required="true"
                aria-invalid={error ? true : undefined}
                disabled={busy}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Mật khẩu<span className="text-danger ml-1" aria-hidden="true">*</span></Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
                aria-invalid={error ? true : undefined}
                disabled={busy}
              />
            </div>
          </div>

          {error && (
            <p role="alert" aria-live="polite" className="rounded-2xl border border-danger/20 bg-danger/5 px-4 py-2.5 text-sm font-semibold text-danger">
              {error}
            </p>
          )}

          <Button type="submit" size="lg" className="mt-1 w-full" disabled={busy} aria-busy={busy}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            Đăng nhập
          </Button>
        </motion.form>

        {/* ===== Đăng nhập Google (OAuth2 PKCE) ===== */}
        <div className="flex items-center gap-3 px-8 pt-1">
          <span className="h-px flex-1 bg-slate-100" />
          <span className="text-xs font-bold uppercase tracking-wide text-slate-400">hoặc</span>
          <span className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="px-8 pb-1 pt-3">
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            onClick={loginWithGoogle}
            disabled={busy}
          >
            <GoogleG className="h-4 w-4" />
            Tiếp tục với Google
          </Button>
        </div>

        <p className="px-8 pb-7 pt-4 text-center text-sm text-slate-500">
          Chưa có tài khoản?{" "}
          <Link href="/register" className="font-semibold text-brand hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 rounded visited:text-violet-700 active:text-brand-700 active:underline">
            Tạo tài khoản
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
