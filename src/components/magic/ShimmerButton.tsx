"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ShimmerButton({
  children,
  className,
  asChild,
  ...props
}: {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
} & Omit<React.ComponentProps<typeof Button>, "asChild">) {
  return (
    <Button
      asChild={asChild}
      className={cn(
        "relative overflow-hidden group border-0",
        "bg-gradient-to-r from-brand to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white",
        "rounded-full font-bold shadow-md hover:shadow-glow transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        className
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      )}
    </Button>
  );
}

export function ShimmerBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex overflow-hidden rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold text-brand shadow-sm",
        className
      )}
    >
      <span className="relative">{children}</span>
    </span>
  );
}