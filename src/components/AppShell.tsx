"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type ReactNode } from "react";
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
} from "lucide-react";
import { useRole } from "@/lib/auth/role-context";
import { useApp } from "@/lib/state/app-context";
import { StreakBadge, XPCounter, LevelBadge } from "@/components/StreakBadge";
import { Notifications } from "@/components/Notifications";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";
import { layoutTransition, SPRING_SNAPPY } from "@/lib/motion";

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
    <Link href="/" className="group flex items-center gap-2">
      <motion.span
        whileHover={{ rotate: 12, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-glow-brand"
      >
        <GraduationCap className="h-5 w-5 relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.span>
      <span className="text-lg font-extrabold tracking-tight text-slate-900">
        Lingo<span className="bg-gradient-to-r from-brand to-violet-500 bg-clip-text text-transparent">Quest</span>
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
      className={cn("relative flex items-center justify-center rounded-full text-sm font-extrabold text-white shadow-soft overflow-hidden", size)}
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

  return (
    <div className="min-h-screen bg-cream relative">
      {/* subtle mesh background */}
      <div className="pointer-events-none fixed inset-0 bg-mesh-brand opacity-[0.03]" />
      
      {/* ===== Header với glassmorphism ===== */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 border-b border-slate-200/60 glass-strong"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <div className="flex items-center gap-2 sm:gap-3">
            {role === "student" && (
              <>
                <div className="hidden items-center gap-2 sm:flex">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  >
                    <StreakBadge count={streak} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                  >
                    <XPCounter xp={xp} />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                    className="hidden lg:flex"
                  >
                    <LevelBadge level={level} />
                  </motion.div>
                </div>
                {/* mobile compact */}
                <div className="flex sm:hidden">
                  <XPCounter xp={xp} />
                </div>
              </>
            )}

            <Notifications />

            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              className="group flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 py-1 pl-1 pr-1 shadow-soft backdrop-blur transition-all hover:shadow-card hover:bg-white sm:pr-3"
            >
              <Avatar name={user.name} color={user.avatarColor} />
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-sm font-bold text-slate-900 group-hover:text-brand transition-colors">{user.name}</p>
                <p className="text-[11px] text-slate-400">
                  {role === "student" ? user.className : role === "teacher" ? "Giáo viên" : "Chờ duyệt"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* beam bottom */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-200/50 to-transparent" />
      </motion.header>

      {/* ===== Thân trang ===== */}
      <div className="mx-auto flex max-w-6xl gap-6 px-4 pb-28 sm:px-6 lg:pb-10 relative z-10">
        {/* Sidebar desktop với shared layout pill */}
        {items.length > 0 && (
          <aside className="sticky top-[88px] hidden h-[calc(100vh-112px)] w-64 shrink-0 lg:block">
            <nav className="relative flex flex-col gap-1.5 py-4">
              {items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-colors",
                      active ? "text-white" : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-nav-pill"
                        transition={layoutTransition}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand to-brand-700 shadow-glow-brand"
                      />
                    )}
                    {!active && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                      />
                    )}
                    <span className="relative flex items-center gap-3">
                      <motion.span
                        whileHover={{ rotate: active ? 0 : 8, scale: 1.1 }}
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-xl transition-all",
                          active ? "bg-white/20 text-white" : "bg-white text-slate-500 group-hover:text-brand shadow-soft"
                        )}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </motion.span>
                      {item.label}
                      {item.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-black",
                            item.badge === "NEW" ? "bg-violet-500 text-white" : "bg-accent text-slate-900",
                            active && "bg-white text-brand"
                          )}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </span>
                    {active && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-3 h-1.5 w-1.5 rounded-full bg-white"
                      />
                    )}
                  </Link>
                );
              })}

              {/* Pro tip card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-brand-50 p-4"
              >
                <div className="flex gap-2">
                  <Sparkles className="h-4 w-4 text-violet-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-extrabold text-violet-900">Tip học nhanh</p>
                    <p className="mt-1 text-xs leading-relaxed text-violet-700/70">Hoàn thành nhiệm vụ hằng ngày để x2 XP!</p>
                  </div>
                </div>
              </motion.div>
            </nav>
          </aside>
        )}

        <main className="min-w-0 flex-1 py-5 sm:py-6">{children}</main>
      </div>

      {/* ===== Bottom navigation (mobile) với glass & layoutId ===== */}
      {items.length > 0 && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/60 glass-strong lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-stretch justify-around px-2 py-1">
            {items.slice(0, 5).map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex flex-1 flex-col items-center gap-1 rounded-2xl py-2.5 text-[10px] font-bold transition-colors",
                    active ? "text-brand" : "text-slate-400"
                  )}
                >
                  {active && (
                    <motion.div
                      layoutId="active-bottom-pill"
                      transition={layoutTransition}
                      className="absolute inset-1 rounded-2xl bg-brand-50 border border-brand-100"
                    />
                  )}
                  <motion.span
                    whileTap={{ scale: 0.8 }}
                    animate={active ? { y: [0, -2, 0], scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <Icon className={cn("h-5 w-5", active && "scale-110")} />
                    {item.badge && !active && (
                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                    )}
                  </motion.span>
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
