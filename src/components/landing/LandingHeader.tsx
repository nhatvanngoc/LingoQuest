"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

export function LandingHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.02)]"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.span
            whileHover={{ rotate: 6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 text-white shadow-sm ring-1 ring-white/20"
          >
            <Sparkles className="h-5 w-5 relative z-10" />
          </motion.span>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900 leading-none">
              Lingo<span className="text-teal-600">Quest</span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-0.5">EdTech THPT</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-teal-700 transition-colors"
          >
            Vào học ngay
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
