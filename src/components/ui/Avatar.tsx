"use client";

import { motion } from "framer-motion";
import { cn, getInitials } from "@/lib/utils";

interface AvatarProps {
  name: string;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showInitials?: boolean;
}

const SIZE_CLASSES = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

const DEFAULT_COLORS = [
  "#0F766E", // brand teal
  "#7C3AED", // violet
  "#D97706", // amber
  "#DC2626", // red
  "#059669", // emerald
  "#2563EB", // blue
  "#DB2777", // pink
  "#4F46E5", // indigo
];

export function Avatar({
  name,
  color,
  size = "md",
  className,
  showInitials = true,
}: AvatarProps) {
  const avatarColor = color || DEFAULT_COLORS[name.length % DEFAULT_COLORS.length];
  const initials = showInitials ? getInitials(name) : "";

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative flex items-center justify-center rounded-full font-bold text-white shadow-md overflow-hidden ring-2 ring-white/50",
        SIZE_CLASSES[size],
        className
      )}
      style={{ backgroundColor: avatarColor }}
    >
      {showInitials && (
        <>
          <span className="relative z-10">{initials}</span>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
        </>
      )}
    </motion.span>
  );
}

export function AvatarGroup({
  names,
  colors,
  size = "md",
  max = 4,
  className,
}: {
  names: string[];
  colors?: string[];
  size?: "sm" | "md" | "lg";
  max?: number;
  className?: string;
}) {
  const displayNames = names.slice(0, max);
  const remaining = names.length - max;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayNames.map((name, i) => (
        <Avatar
          key={name}
          name={name}
          color={colors?.[i]}
          size={size}
          className="ring-2 ring-white hover:z-10 transition-all"
        />
      ))}
      {remaining > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={cn(
            "flex items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold ring-2 ring-white",
            SIZE_CLASSES[size]
          )}
        >
          +{remaining}
        </motion.span>
      )}
    </div>
  );
}
