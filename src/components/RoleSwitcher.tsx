"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, ChevronUp, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================================================
   RoleSwitcher — Công cụ nổi (floating) để đăng xuất nhanh.
   ============================================================ */

export function RoleSwitcher() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);

  async function logout() {
    setBusy("logout");
    setBusy(null);
    // Điều hướng cấp cao tới route logout: route sẽ xoá cookie phiên VÀ
    // redirect về /login trong cùng một response → đăng xuất chắc chắn.
    window.location.href = "/api/auth/logout";
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="w-64 overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-lift"
          >
            <button
              onClick={() => void logout()}
              disabled={Boolean(busy)}
              className="mt-1 flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-danger transition-colors hover:bg-danger/5 disabled:opacity-60"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-danger/10">
                {busy === "logout" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <LogOut className="h-4 w-4" />
                )}
              </span>
              <span className="text-sm font-bold">Đăng xuất</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 items-center gap-2 rounded-full bg-slate-900 px-4 text-sm font-bold text-white shadow-lift transition-transform hover:scale-105"
      >
        <ChevronUp className={cn("h-4 w-4 transition-transform", open ? "" : "rotate-180")} />
        Tài khoản
      </button>
    </div>
  );
}
