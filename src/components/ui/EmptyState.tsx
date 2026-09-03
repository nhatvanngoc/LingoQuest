"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
    variant?: "default" | "success" | "accent" | "outline" | "ghost";
  };
  illustration?: "learning" | "success" | "search" | "empty";
  className?: string;
}

const ILLUSTRATIONS = {
  learning: (
    <svg viewBox="0 0 200 200" className="h-32 w-32">
      <circle cx="100" cy="100" r="80" fill="#F0FDFA" />
      <rect x="60" y="70" width="80" height="60" rx="8" fill="#0F766E" opacity="0.1" />
      <circle cx="100" cy="90" r="15" fill="#0F766E" opacity="0.2" />
      <rect x="70" y="110" width="60" height="4" rx="2" fill="#0F766E" opacity="0.15" />
      <rect x="70" y="118" width="45" height="4" rx="2" fill="#0F766E" opacity="0.15" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 200 200" className="h-32 w-32">
      <circle cx="100" cy="100" r="80" fill="#ECFDF5" />
      <circle cx="100" cy="85" r="30" fill="#047857" opacity="0.1" />
      <path d="M85 85 L95 95 L115 75" stroke="#047857" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="70" y="125" width="60" height="4" rx="2" fill="#047857" opacity="0.15" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 200 200" className="h-32 w-32">
      <circle cx="100" cy="100" r="80" fill="#F5F3FF" />
      <circle cx="90" cy="90" r="35" stroke="#7C3AED" strokeWidth="6" fill="none" opacity="0.2" />
      <line x1="115" y1="115" x2="140" y2="140" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" opacity="0.2" />
      <circle cx="90" cy="90" r="15" fill="#7C3AED" opacity="0.1" />
    </svg>
  ),
  empty: (
    <svg viewBox="0 0 200 200" className="h-32 w-32">
      <circle cx="100" cy="100" r="80" fill="#FEF3C7" />
      <rect x="65" y="75" width="70" height="50" rx="6" fill="#D97706" opacity="0.1" />
      <rect x="75" y="85" width="50" height="4" rx="2" fill="#D97706" opacity="0.15" />
      <rect x="75" y="95" width="35" height="4" rx="2" fill="#D97706" opacity="0.15" />
      <rect x="75" y="105" width="45" height="4" rx="2" fill="#D97706" opacity="0.15" />
    </svg>
  ),
};

export function EmptyState({
  icon,
  title,
  description,
  action,
  illustration = "empty",
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center",
        className
      )}
    >
      {icon || ILLUSTRATIONS[illustration]}
      
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 text-xl font-bold tracking-tight text-slate-900"
      >
        {title}
      </motion.h3>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-2 max-w-sm text-sm font-semibold leading-relaxed text-slate-500"
        >
          {description}
        </motion.p>
      )}
      
      {action && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <Button asChild size="lg" variant={action.variant || "default"}>
            <a href={action.href}>{action.label}</a>
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
