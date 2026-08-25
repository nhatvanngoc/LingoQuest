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
} from "lucide-react"; // checklist 1.5: all icons SVG, same square dimension (h-4 w-4 etc.), black base → Tailwind tint; custom icons → icon-* lowercase-dash in public/icons/
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
    <Link href="/" className="group flex items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 visited:opacity-90 active:opacity-80 active:scale-[0.98] transition-all">
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
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Chỉ MỘT mục active: chọn href dài nhất khớp pathname.
  // (Tránh lỗi "/teacher" luôn active kèm "/teacher/grading"… do đo `startsWith`,
  //  khiến 2 mục cùng "active" và pill nền layoutId chỉ vẽ cho một cái → chữ trắng trên nền trắng.)
  const activeHref = items
    .filter((i) => pathname === i.href || pathname.startsWith(i.href + "/"))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

            {/* Chip tài khoản: bấm mở menu (thay nút "Tài khoản" nổi che nội dung) */}
            <motion.div whileHover={{ scale: 1.02, y: -1 }} className="relative">
              <button
                type="button"
                onClick={() => setUserMenuOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={userMenuOpen}
                className="group flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 py-1 pl-1 pr-2 shadow-soft backdrop-blur transition-all hover:shadow-card hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 active:scale-[0.98]"
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
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-lift"
                    >
                      <div className="border-b border-slate-100 px-3 py-2">
                        <p className="truncate text-sm font-extrabold text-slate-900">{user.name}</p>
                        <p className="truncate text-[11px] text-slate-400">{user.email}</p>
                      </div>
                      {/* Đăng xuất qua route server: xoá cookie + redirect trong 1 response */}
                      <a
                        href="/api/auth/logout"
                        className="mt-1 flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-danger transition-colors hover:bg-danger/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 visited:text-red-700 active:bg-danger/10 active:scale-[0.98]"
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

        {/* beam bottom */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-200/50 to-transparent" />
      </motion.header>

      {/* ===== Thân trang ===== */}
      <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-28 sm:px-6 lg:px-8 lg:pb-10 relative z-10">
        {/* Sidebar desktop với shared layout pill */}
        {items.length > 0 && (
          <aside className="sticky top-[88px] hidden h-[calc(100vh-112px)] w-64 shrink-0 lg:block">
            <nav className="relative flex flex-col gap-1.5 py-4">
              {items.map((item) => {
                const active = item.href === activeHref;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 visited:text-violet-700 active:scale-[0.98] active:brightness-95",
                      active ? "text-white" : "text-slate-500 hover:text-slate-900 visited:text-slate-600 hover:underline underline-offset-4"
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

              {/* Pro tip card — chỉ dành cho học sinh (giáo viên không có nhiệm vụ/XP) */}
              {role === "student" && (
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
              )}
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
              const active = item.href === activeHref;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex flex-1 flex-col items-center gap-1 rounded-2xl py-2.5 text-[10px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-1 visited:text-violet-700 active:scale-95",
                    active ? "text-brand" : "text-slate-400 hover:text-slate-600 visited:text-slate-500"
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
