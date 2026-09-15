"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavItemConfig } from "./ShellSidebar";

interface ShellBottomNavProps {
  items: NavItemConfig[];
  activeHref: string | undefined;
}

export function ShellBottomNav({ items, activeHref }: ShellBottomNavProps) {
  if (items.length === 0) return null;

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/90 backdrop-blur-xl lg:hidden shadow-lg"
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
                "relative flex flex-1 flex-col items-center gap-1 rounded-lg py-2.5 text-[10px] font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-1 active:scale-95",
                active ? "text-teal-700" : "text-slate-400 hover:text-slate-600"
              )}
            >
              {active && (
                <div className="absolute inset-1 rounded-lg bg-teal-50 border border-teal-100" />
              )}
              <span className="relative">
                {Icon ? <Icon className={cn("h-5 w-5", active && "scale-110")} /> : null}
                {item.badge && !active && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
                )}
              </span>
              <span className="relative text-[11px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
