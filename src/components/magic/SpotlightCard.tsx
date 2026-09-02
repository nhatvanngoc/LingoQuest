"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(15,118,110,0.1)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md",
        "transition-all duration-300",
        className
      )}
    >
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  colSpan = "col-span-1",
  rowSpan = "",
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}) {
  return (
    <div className={cn("h-full rounded-xl border border-gray-200 bg-white shadow-md", colSpan, rowSpan, className)}>
      {children}
    </div>
  );
}