"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Gamepad2,
  BarChart3,
  Layers,
  GraduationCap,
  LayoutDashboard,
  ClipboardList,
  ClipboardCheck,
  Video,
  PlayCircle,
  Sparkles,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useRole } from "@/lib/auth/role-context";
import { useApp } from "@/lib/state/app-context";
import { StreakBadge, XPCounter, LevelBadge } from "@/components/StreakBadge";
import { Notifications } from "@/components/Notifications";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";
import { SPRING_SNAPPY } from "@/lib/motion";

interface NavItem {
  href: string;
  label: string;
  icon: typeof Home;
  badge?: string;
}

const NAV: Record<Role, NavItem[]> = {
  student: [
    { href: "/dashboard", label: "Trang chủ", icon: Home },
    { href: "/learn", label: "Học", icon: PlayCircle, badge: "NEW" },
    { href: "/flashcards/deck-1", label: "Flashcard", icon: Layers },
    { href: "/game", label: "Game", icon: Gamepad2, badge: "HOT" },
    { href: "/progress", label: "Hồ sơ", icon: BarChart3 },
  ],
  teacher: [
    { href: "/teacher", label: "Bảng điều khiển", icon: LayoutDashboard },
    { href: "/teacher/grading", label: "Chấm bài", icon: ClipboardCheck },
    { href: "/teacher/assignments/new", label: "Giao bài", icon: ClipboardList },
    { href: "/teacher/lessons/new", label: "Đăng bài", icon: Video },
    { href: "/progress", label: "Tiến độ", icon: BarChart3 },
  ],
  pending: [],
};

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 visited:opacity-90 active:opacity-80 active:scale-[0.98] transition-all">
      <motion.span
        whileHover={{ rotate: 12, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-md"
      >
        <GraduationCap className="h-5 w-5 relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Lingo<span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">Quest</span>
      </span>
    </Link>
  );
}

function Avatar({ name, color, size = "h-9 w-9" }: { name: string; color: string; size?: string }) {
  const initials = name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("");
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn("relative flex items-center justify-center rounded-full text-sm font-bold text-white shadow-sm overflow-hidden", size)}
      style={{ backgroundColor: color }}
    >
      <span className="relative z-10">{initials}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
    </motion.span>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { user, role } = useRole();
  const pathname = usePathname();
  const items = NAV[role];
  const { xp, streak, level } = useApp();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const activeHref = items
    .filter((i) => pathname === i.href || pathname.startsWith(i.href + "/"))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <div className="min-h-screen bg-cream relative">
      {/* ===== Header ===== */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

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

            <Notifications />

            {/* User menu */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <button
                type="button"
                onClick={() => setUserMenuOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={userMenuOpen}
                className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-2 shadow-sm backdrop-blur transition-all hover:shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <Avatar name={user.name} color={user.avatarColor} />
                <div className="hidden text-left leading-tight sm:block">
                  <p className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">{user.name}</p>
                  <p className="text-[11px] text-slate-400">
                    {role === "student" ? user.className : role === "teacher" ? "Giáo viên" : "Chờ duyệt"}
                  </p>
                </div>
                <ChevronDown className={cn("hidden h-3.5 w-3.5 text-slate-400 transition-transform sm:block", userMenuOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <>
                    <button
                      type="button"
                      aria-label="Đóng menu"
                      onClick={() => setUserMenuOpen(false)}
                      className="fixed inset-0 z-40 cursor-default"
                    />
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg"
                    >
                      <div className="border-b border-gray-100 px-3 py-2">
                        <p className="truncate text-sm font-bold text-slate-900">{user.name}</p>
                        <p className="truncate text-[11px] text-slate-400">{user.email}</p>
                      </div>
                      <a
                        href="/api/auth/logout"
                        className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 visited:text-red-700 active:bg-red-100 active:scale-[0.98]"
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

      <div className="mx-auto flex max-w-5xl gap-6 px-4 pb-28 sm:px-6 lg:px-8 lg:pb-10 relative z-10">
        {/* Sidebar desktop */}
        {items.length > 0 && (
          <aside className="sticky top-[88px] hidden h-[calc(100vh-112px)] w-60 shrink-0 lg:block">
            <nav className="relative flex flex-col gap-1 py-4">
              {items.map((item) => {
                const active = item.href === activeHref;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 visited:text-violet-700 active:scale-[0.98]",
                      active
                        ? "bg-brand-50 text-brand"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 visited:text-slate-600"
                    )}
                  >
                    {active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-brand" />
                    )}
                    <span className="relative flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg transition-all",
                          active ? "bg-brand text-white" : "bg-white text-slate-400 group-hover:text-brand group-hover:bg-brand-50 shadow-sm"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.label}
                      {item.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-bold",
                            item.badge === "NEW" ? "bg-brand text-white" : "bg-amber-100 text-amber-700",
                            active && "bg-brand text-white"
                          )}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </span>
                  </Link>
                );
              })}

              {/* Tip card — chỉ cho học sinh */}
              {role === "student" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-4"
                >
                  <div className="flex gap-2">
                    <Sparkles className="h-4 w-4 text-brand mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-brand-900">Tip học nhanh</p>
                      <p className="mt-1 text-xs leading-relaxed text-brand-700/70">Hoàn thành nhiệm vụ hàng ngày để x2 XP!</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </nav>
          </aside>
        )}

        <main className="min-w-0 flex-1 py-5 sm:py-6">{children}</main>
      </div>

      {/* ===== Bottom navigation (mobile) ===== */}
      {items.length > 0 && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-sm lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-stretch justify-around px-2 py-1">
            {items.slice(0, 5).map((item) => {
              const active = item.href === activeHref;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex flex-1 flex-col items-center gap-1 rounded-lg py-2.5 text-[10px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-1 visited:text-violet-700 active:scale-95",
                    active ? "text-brand" : "text-slate-400 hover:text-slate-600 visited:text-slate-500"
                  )}
                >
                  {active && (
                    <div className="absolute inset-1 rounded-lg bg-brand-50 border border-brand-100" />
                  )}
                  <span className="relative">
                    <Icon className={cn("h-5 w-5", active && "scale-110")} />
                    {item.badge && !active && (
                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-brand animate-pulse" />
                    )}
                  </span>
                  <span className="relative text-[11px]">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      )}
    </div>
  );
}