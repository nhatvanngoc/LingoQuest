"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Sparkles, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface GradeSwitcherProps {
  currentGrade: 10 | 11 | 12;
  className?: string;
  compact?: boolean;
}

const GRADES = [
  {
    grade: 10,
    label: "Tiếng Anh 10",
    shortLabel: "Lớp 10",
    cefr: "A2+ → B1",
    href: "/curriculum/grade-10",
    badge: "Nền tảng",
    theme: "from-blue-600 to-indigo-600",
    activeBg: "bg-blue-600 text-white shadow-xs",
    borderActive: "border-blue-500",
    textActive: "text-blue-700",
  },
  {
    grade: 11,
    label: "Tiếng Anh 11",
    shortLabel: "Lớp 11",
    cefr: "B1 → B2",
    href: "/curriculum/grade-11",
    badge: "Trọng tâm",
    theme: "from-teal-600 to-emerald-600",
    activeBg: "bg-teal-600 text-white shadow-xs",
    borderActive: "border-teal-500",
    textActive: "text-teal-700",
  },
  {
    grade: 12,
    label: "Tiếng Anh 12",
    shortLabel: "Lớp 12",
    cefr: "B2+ • Tốt nghiệp",
    href: "/curriculum/grade-12",
    badge: "Luyện thi THPT",
    theme: "from-purple-600 to-pink-600",
    activeBg: "bg-purple-600 text-white shadow-xs",
    borderActive: "border-purple-500",
    textActive: "text-purple-700",
  },
];

export function GradeSwitcher({ currentGrade, className, compact = false }: GradeSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white/95 p-1.5 shadow-2xs backdrop-blur-sm",
        className
      )}
      role="tablist"
      aria-label="Chọn khối lớp THPT"
    >
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-slate-400">
        <GraduationCap className="h-3.5 w-3.5 text-slate-500" />
        <span>Khối lớp:</span>
      </div>

      {GRADES.map((g) => {
        const isActive = currentGrade === g.grade;
        return (
          <Link
            key={g.grade}
            href={g.href}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "group relative flex items-center gap-2 rounded-xl transition-all duration-200 select-none",
              compact ? "px-3 py-1.5 text-xs font-bold" : "px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold",
              isActive
                ? g.activeBg
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
            )}
          >
            <span>{compact ? g.shortLabel : g.label}</span>
            <span
              className={cn(
                "rounded-md px-1.5 py-0.2 text-[10px] font-extrabold uppercase tracking-wide transition-colors",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"
              )}
            >
              {g.badge}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
