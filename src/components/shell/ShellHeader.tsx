"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";
import { ShellLogo } from "./ShellLogo";
import { ShellAvatar } from "./ShellAvatar";
import { StreakBadge, XPCounter, LevelBadge } from "@/components/StreakBadge";
import { Notifications } from "@/components/Notifications";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";
import type { SessionUser } from "@/lib/auth/role-context";

interface ShellHeaderProps {
  role: Role;
  user: SessionUser;
  streak: number;
  xp: number;
  level: number;
  muted: boolean;
  onToggleSound: () => void;
  userMenuOpen: boolean;
  onSetUserMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  onOpenProfileModal: () => void;
}

export function ShellHeader({
  role,
  user,
  streak,
  xp,
  level,
  muted,
  onToggleSound,
  userMenuOpen,
  onSetUserMenuOpen,
  onOpenProfileModal,
}: ShellHeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.03)]"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <ShellLogo />

        <div className="flex items-center gap-2 sm:gap-3">
          {role === "student" && (
            <>
              <div className="hidden items-center gap-2 sm:flex">
                <StreakBadge count={streak} />
                <XPCounter xp={xp} />
                <div className="hidden lg:flex">
                  <LevelBadge level={level} />
                </div>
              </div>
              <div className="flex sm:hidden">
                <XPCounter xp={xp} />
              </div>
            </>
          )}

          {/* Audio haptic toggle */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={onToggleSound}
            title={muted ? "Bật âm thanh hiệu ứng" : "Tắt âm thanh hiệu ứng"}
            aria-label={muted ? "Bật âm thanh" : "Tắt âm thanh"}
            className={cn(
              "relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 shadow-2xs backdrop-blur transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50",
              muted ? "text-slate-400" : "text-teal-700"
            )}
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </motion.button>

          <Notifications />

          {/* User menu */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <button
              type="button"
              onClick={() => onSetUserMenuOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={userMenuOpen}
              className="group flex items-center gap-2 rounded-full border border-slate-200/80 bg-white py-1 pl-1 pr-3 shadow-2xs backdrop-blur transition-all hover:shadow-xs hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <ShellAvatar name={user.name} color={user.avatarColor} />
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {user.name}
                </p>
                <p className="text-[11px] font-semibold text-slate-400">
                  {role === "student" ? user.className : role === "teacher" ? "Giáo viên" : "Chờ duyệt"}
                </p>
              </div>
              <ChevronDown
                className={cn(
                  "hidden h-3.5 w-3.5 text-slate-400 transition-transform sm:block",
                  userMenuOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {userMenuOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Đóng menu"
                    onClick={() => onSetUserMenuOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-1.5 shadow-xl"
                  >
                    <div className="border-b border-slate-100 px-3 py-2">
                      <p className="truncate text-sm font-bold text-slate-900">{user.name}</p>
                      <p className="truncate text-[11px] text-slate-400">{user.email}</p>
                      {user.grade && (
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-3xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                          Học sinh Lớp {user.grade}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onSetUserMenuOpen(false);
                        onOpenProfileModal();
                      }}
                      className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 text-left"
                    >
                      <User className="h-4 w-4 text-teal-600" /> Chỉnh sửa hồ sơ & lớp
                    </button>
                    <a
                      href="/api/auth/logout"
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-rose-600 transition-colors hover:bg-rose-50"
                    >
                      <LogOut className="h-4 w-4" /> Đăng xuất
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
