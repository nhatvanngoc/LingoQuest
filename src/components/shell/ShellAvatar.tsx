"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ShellAvatar({
  name,
  color,
  size = "h-9 w-9",
}: {
  name: string;
  color: string;
  size?: string;
}) {
  const initials = name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("");

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative flex items-center justify-center rounded-full text-sm font-bold text-white shadow-sm overflow-hidden",
        size
      )}
      style={{ backgroundColor: color }}
    >
      <span className="relative z-10">{initials}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
    </motion.span>
  );
}
