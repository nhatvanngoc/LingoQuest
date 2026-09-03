"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn, formatNumber } from "@/lib/utils";
import { NumberTicker } from "@/components/magic/NumberTicker";

interface StatCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  color?: "brand" | "violet" | "amber" | "emerald" | "blue";
  delay?: number;
  className?: string;
}

const COLOR_MAP = {
  brand: {
    bg: "from-brand-50 to-teal-50/50",
    iconBg: "from-brand to-brand-700",
    text: "text-brand",
    border: "border-brand-200",
  },
  violet: {
    bg: "from-violet-50 to-purple-50/50",
    iconBg: "from-violet-600 to-violet-800",
    text: "text-violet-700",
    border: "border-violet-200",
  },
  amber: {
    bg: "from-amber-50 to-orange-50/50",
    iconBg: "from-amber-500 to-orange-600",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  emerald: {
    bg: "from-emerald-50 to-green-50/50",
    iconBg: "from-emerald-500 to-green-600",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  blue: {
    bg: "from-blue-50 to-sky-50/50",
    iconBg: "from-blue-500 to-sky-600",
    text: "text-blue-700",
    border: "border-blue-200",
  },
};

export function StatCard({
  title,
  value,
  icon,
  trend,
  color = "brand",
  delay = 0,
  className,
}: StatCardProps) {
  const colors = COLOR_MAP[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={cn(
        "relative overflow-hidden rounded-xl border p-5 shadow-sm transition-all duration-300 bg-gradient-to-br",
        colors.bg,
        colors.border,
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-500">{title}</p>
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.2, type: "spring", stiffness: 300 }}
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
          >
            <NumberTicker value={value} />
          </motion.p>
          {trend && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 }}
              className={cn(
                "mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold",
                trend.positive !== false
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700"
              )}
            >
              <span>{trend.positive !== false ? "↑" : "↓"} {trend.value}%</span>
              <span className="opacity-70">{trend.label}</span>
            </motion.div>
          )}
        </div>
        {icon && (
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.1, type: "spring", stiffness: 300 }}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-md",
              colors.iconBg
            )}
          >
            {icon}
          </motion.div>
        )}
      </div>
      
      {/* Decorative gradient overlay */}
      <div className={cn(
        "absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br opacity-10 blur-xl",
        colors.iconBg
      )} />
    </motion.div>
  );
}
