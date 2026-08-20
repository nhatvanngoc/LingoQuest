"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "1rem",
  background = "radial-gradient(ellipse 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
  asChild,
  ...props
}: {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  asChild?: boolean;
} & Omit<React.ComponentProps<typeof Button>, "asChild">) {
  // If asChild, we still want shimmer effect but need to handle Slot correctly
  // ShimmerButton with asChild will forward styling to child via Button's asChild handling
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex"
    >
      <Button
        asChild={asChild}
        className={cn(
          "relative overflow-hidden group border border-white/10 shadow-glow-brand",
          "bg-gradient-to-br from-brand to-brand-800 hover:from-brand-700 hover:to-brand text-white",
          "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:content-[''] before:-z-10",
          className
        )}
        style={{
          borderRadius,
          background,
          // @ts-ignore custom CSS vars
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
        } as any}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span className="relative z-10 flex items-center gap-2">
              {children}
            </span>
            {/* shimmer sweep - only when not asChild (to avoid Slot multi-child error) */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_linear_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30" />
            <div className="absolute -inset-[2px] -z-10 rounded-[inherit] bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
          </>
        )}
      </Button>
    </motion.div>
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
    <div
      className={cn(
        "relative inline-flex overflow-hidden rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-bold text-brand shadow-soft",
        "before:absolute before:inset-0 before:animate-[shimmer_2s_linear_infinite] before:bg-gradient-to-r before:from-transparent before:via-brand-100/80 before:to-transparent",
        className
      )}
    >
      <span className="relative">{children}</span>
    </div>
  );
}
