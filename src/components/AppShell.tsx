"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useState, useEffect, useMemo } from "react";
import {
  Home,
  Gamepad2,
  BarChart3,
  Layers,
  LayoutDashboard,
  ClipboardList,
  ClipboardCheck,
  Video,
  PlayCircle,
  Users,
  BookOpen,
  Trophy,
  Plus,
  Compass,
} from "lucide-react";
import { useRole } from "@/lib/auth/role-context";
import { useApp } from "@/lib/state/app-context";
import { sound } from "@/lib/sound";
import { ProfileEditModal } from "@/components/ProfileEditModal";
import { ShellHeader } from "./shell/ShellHeader";
import { ShellSidebar, type NavItemConfig } from "./shell/ShellSidebar";
import { ShellBottomNav } from "./shell/ShellBottomNav";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user, role } = useRole();
  const { xp, streak, level } = useApp();

  const items: NavItemConfig[] = useMemo(() => {
    if (role === "teacher") {
      return [
        { href: "/teacher", label: "Bảng điều khiển", icon: LayoutDashboard },
        { href: "/teacher/exams", label: "Phòng thi & Đề", icon: ClipboardCheck, badge: "Azota" },
        { href: "/teacher/students", label: "Học sinh", icon: Users },
        { href: "/teacher/grading", label: "Chấm bài", icon: ClipboardList },
        { href: "/teacher/assignments/new", label: "Giao bài", icon: Plus },
      ];
    }
    // Student & Guest navigation
    const grade = user.grade || "11";
    const gradeLabel = `Lớp ${grade}`;
    const gradeHref = `/curriculum/grade-${grade}`;
    return [
      { href: "/dashboard", label: "Trang chủ", icon: Home },
      { href: gradeHref, label: gradeLabel, icon: BookOpen, badge: "GS" },
      { href: "/curriculum", label: "Giáo trình", icon: Compass },
      { href: "/exams", label: "Phòng thi", icon: Trophy, badge: "PIN" },
      { href: "/learn", label: "Bài giảng", icon: PlayCircle, badge: "NEW" },
      { href: "/flashcards/deck-1", label: "Flashcard", icon: Layers },
      { href: "/game", label: "Game", icon: Gamepad2, badge: "HOT" },
      { href: "/progress", label: "Hồ sơ", icon: BarChart3 },
    ];
  }, [role, user.grade]);

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(sound.getMuted());
    const onToggle = (e: Event) => {
      const custom = e as CustomEvent<{ muted: boolean }>;
      if (custom.detail) {
        setMuted(custom.detail.muted);
      }
    };
    window.addEventListener("lingoquest:sound-toggle", onToggle);
    return () => window.removeEventListener("lingoquest:sound-toggle", onToggle);
  }, []);

  const handleToggleSound = () => {
    const next = sound.toggleMute();
    setMuted(next);
  };

  const activeHref = items
    .filter((i) => pathname === i.href || pathname.startsWith(i.href + "/"))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 relative selection:bg-teal-500/20 selection:text-teal-900">
      {/* Top subtle ambient mesh */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(13,148,136,0.08),rgba(255,255,255,0))] -z-10" />

      {/* ===== Header ===== */}
      <ShellHeader
        role={role}
        user={user}
        streak={streak}
        xp={xp}
        level={level}
        muted={muted}
        onToggleSound={handleToggleSound}
        userMenuOpen={userMenuOpen}
        onSetUserMenuOpen={setUserMenuOpen}
        onOpenProfileModal={() => setProfileModalOpen(true)}
      />

      {/* Modal Chỉnh Sửa Thông Tin Hồ Sơ & Chọn Lớp */}
      <ProfileEditModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        currentUser={user}
      />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-28 sm:px-6 lg:px-8 lg:pb-10 relative z-10">
        {/* Sidebar desktop */}
        <ShellSidebar items={items} activeHref={activeHref} role={role} />

        {/* Main Content Area */}
        <main className="min-w-0 flex-1 py-5 sm:py-6">{children}</main>
      </div>

      {/* ===== Bottom navigation (mobile) ===== */}
      <ShellBottomNav items={items} activeHref={activeHref} />
    </div>
  );
}