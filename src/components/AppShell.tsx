"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type ReactNode } from "react";
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
} from "lucide-react";
import { useRole } from "@/lib/auth/role-context";
import { useApp } from "@/lib/state/app-context";
import { StreakBadge, XPCounter } from "@/components/StreakBadge";
import { Notifications } from "@/components/Notifications";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";

/* ============================================================
   AppShell — Khung giao diện chung: Header + Sidebar (desktop)
   + Bottom Navigation (mobile). Điều hướng thay đổi theo vai trò.
   ============================================================ */

interface NavItem {
  href: string;
  label: string;
  icon: typeof Home;
}

const NAV: Record<Role, NavItem[]> = {
  student: [
    { href: "/dashboard", label: "Trang chủ", icon: Home },
    { href: "/learn", label: "Học", icon: PlayCircle },
    { href: "/flashcards/deck-1", label: "Flashcard", icon: Layers },
    { href: "/game", label: "Game", icon: Gamepad2 },
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

/** Logo LingoQuest nhỏ */
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
        <GraduationCap className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-slate-900">
        Lingo<span className="text-brand">Quest</span>
      </span>
    </Link>
  );
}

/** Avatar tròn từ tên người dùng (initials) */
function Avatar({ name, color, size = "h-9 w-9" }: { name: string; color: string; size?: string }) {
  const initials = name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("");
  return (
    <span
      className={cn("flex items-center justify-center rounded-full text-sm font-extrabold text-white", size)}
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { user, role } = useRole();
  const pathname = usePathname();
  const items = NAV[role];
  const { xp, streak } = useApp();

  return (
    <div className="min-h-screen bg-cream">
      {/* ===== Header cố định trên cùng ===== */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <div className="flex items-center gap-2 sm:gap-3">
            {role === "student" && (
              <>
                <div className="hidden sm:block">
                  <StreakBadge count={streak} />
                </div>
                <div className="hidden sm:block">
                  <XPCounter xp={xp} />
                </div>
              </>
            )}

            {/* Chuông thông báo (có dropdown) */}
            <Notifications />

            <div className="flex items-center gap-2 rounded-full bg-slate-50 py-1 pl-1 pr-1 sm:pr-3">
              <Avatar name={user.name} color={user.avatarColor} />
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-sm font-bold text-slate-900">{user.name}</p>
                <p className="text-[11px] text-slate-400">
                  {role === "student" ? user.className : role === "teacher" ? "Giáo viên" : "Chờ duyệt"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Thân trang ===== */}
      <div className="mx-auto flex max-w-6xl gap-6 px-4 pb-28 sm:px-6 lg:pb-10">
        {/* Sidebar desktop */}
        {items.length > 0 && (
          <aside className="sticky top-[88px] hidden h-[calc(100vh-112px)] w-56 shrink-0 lg:block">
            <nav className="flex flex-col gap-1 py-4">
              {items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-colors",
                      active
                        ? "bg-brand text-white shadow-soft"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        )}

        <main className="min-w-0 flex-1 py-5 sm:py-6">{children}</main>
      </div>

      {/* ===== Bottom navigation (mobile) ===== */}
      {items.length > 0 && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-100 bg-white/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-md items-stretch justify-around px-2">
            {items.slice(0, 5).map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-bold transition-colors",
                    active ? "text-brand" : "text-slate-400",
                  )}
                >
                  <Icon className={cn("h-5 w-5", active && "scale-110")} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
