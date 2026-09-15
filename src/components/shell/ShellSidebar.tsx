"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";

export interface NavItemConfig {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

interface ShellSidebarProps {
  items: NavItemConfig[];
  activeHref: string | undefined;
  role: Role;
}

export function ShellSidebar({ items, activeHref, role }: ShellSidebarProps) {
  if (items.length === 0) return null;

  return (
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
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2 active:scale-[0.98]",
                active
                  ? "bg-teal-50 text-teal-900 font-bold border border-teal-200/80 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
              )}
            >
              {active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-teal-600" />
              )}
              <span className="relative flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg transition-all",
                    active
                      ? "bg-teal-600 text-white shadow-2xs"
                      : "bg-white text-slate-400 group-hover:text-teal-700 group-hover:bg-teal-50 shadow-2xs border border-slate-100"
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
                      item.badge === "NEW"
                        ? "bg-teal-600 text-white"
                        : "bg-amber-100 text-amber-800",
                      active && "bg-teal-600 text-white"
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
            className="mt-6 rounded-2xl border border-teal-200/70 bg-gradient-to-br from-teal-50/80 to-emerald-50/80 p-4 shadow-2xs"
          >
            <div className="flex gap-2">
              <Sparkles className="h-4 w-4 text-teal-600 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-teal-950">Tip học nhanh</p>
                <p className="mt-1 text-xs leading-relaxed text-teal-800/80">
                  Hoàn thành nhiệm vụ hàng ngày để x2 XP!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </aside>
  );
}
