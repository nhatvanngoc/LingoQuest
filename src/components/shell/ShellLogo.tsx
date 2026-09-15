"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function ShellLogo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2 active:scale-[0.98] transition-all"
    >
      <motion.span
        whileHover={{ rotate: 6, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 text-white shadow-sm ring-1 ring-white/20"
      >
        <GraduationCap className="h-5 w-5 relative z-10 drop-shadow-xs" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.span>
      <div className="flex flex-col">
        <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900 leading-none">
          Lingo<span className="text-teal-600">Quest</span>
        </span>
        <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-0.5">EdTech THPT</span>
      </div>
    </Link>
  );
}
