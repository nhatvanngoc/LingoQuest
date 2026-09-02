import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap",
  {
    variants: {
      variant: {
        neutral: "bg-slate-100 text-slate-600",
        brand: "bg-brand-50 text-brand",
        success: "bg-green-50 text-green-700",
        accent: "bg-amber-50 text-amber-700",
        danger: "bg-red-50 text-red-700",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}