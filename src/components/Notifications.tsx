"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, ClipboardList, Flame, CheckCircle2, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

/* Notifications — Chuông thông báo có dropdown, dấu chấm chưa đọc, đánh dấu đã đọc */

interface Notif {
  id: string;
  icon: typeof Bell;
  tone: "brand" | "accent" | "danger" | "success";
  title: string;
  time: string;
}

const SEED: Notif[] = [
  { id: "n1", icon: ClipboardList, tone: "brand", title: "Bài tập mới: Thì quá khứ đơn (còn 3 ngày).", time: "2 giờ trước" },
  { id: "n2", icon: Flame, tone: "accent", title: "Đừng bỏ cuộc! Bạn đang có chuỗi 12 ngày 🔥", time: "5 giờ trước" },
  { id: "n3", icon: CheckCircle2, tone: "success", title: "Cô Lan đã chấm bài viết của bạn: 85/100.", time: "Hôm qua" },
  { id: "n4", icon: Trophy, tone: "danger", title: "Bạn vượt qua Bùi Đức Anh trên bảng xếp hạng!", time: "2 ngày trước" },
];

const TONE_BG: Record<Notif["tone"], string> = {
  brand: "bg-brand-50 text-brand",
  accent: "bg-accent-100 text-amber-600",
  danger: "bg-danger-50 text-danger",
  success: "bg-success-50 text-success",
};

export function Notifications() {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<Record<string, boolean>>({});
  const unread = SEED.filter((n) => !read[n.id]).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100"
        aria-label="Thông báo"
      >
        <Bell className="h-5 w-5" />
        {unread > 0 && (
          <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-extrabold text-white ring-2 ring-white">
            {unread}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Lớp mờ đóng khi bấm ra ngoài */}
            <button className="fixed inset-0 z-40 cursor-default" onClick={() => setOpen(false)} aria-hidden />
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              className="absolute right-0 top-12 z-50 w-[min(88vw,340px)] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lift"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <p className="font-extrabold text-slate-900">Thông báo</p>
                {unread > 0 && (
                  <button
                    onClick={() => setRead(Object.fromEntries(SEED.map((n) => [n.id, true])))}
                    className="text-xs font-bold text-brand hover:underline"
                  >
                    Đánh dấu đã đọc
                  </button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto no-scrollbar">
                {SEED.map((n) => {
                  const Icon = n.icon;
                  const isRead = read[n.id];
                  return (
                    <button
                      key={n.id}
                      onClick={() => setRead((r) => ({ ...r, [n.id]: true }))}
                      className={cn(
                        "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50",
                        !isRead && "bg-brand-50/40",
                      )}
                    >
                      <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", TONE_BG[n.tone])}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-slate-700">{n.title}</span>
                        <span className="block text-xs text-slate-400">{n.time}</span>
                      </span>
                      {!isRead && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
