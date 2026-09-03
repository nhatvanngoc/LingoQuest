"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "title" | "onDrag"> {
  hover?: boolean;
  lift?: boolean;
  border?: "default" | "brand" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, lift = false, border = "default", padding = "md", ...props }, ref) => {
    const paddingClasses = {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-6 sm:p-7",
    };

    const borderClasses = {
      default: "border-gray-200 bg-white",
      brand: "border-brand-200 bg-brand-50/30",
      gradient: "border-transparent bg-gradient-to-br from-white to-brand-50/20",
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={hover || lift ? { y: lift ? -6 : -2, scale: lift ? 1.02 : 1 } : undefined}
        className={cn(
          "relative overflow-hidden rounded-xl border shadow-sm transition-all duration-300",
          borderClasses[border],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex items-center justify-between gap-4", className)} {...props} />;
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-bold tracking-tight text-slate-900", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm font-semibold text-slate-500", className)} {...props} />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-4 flex items-center gap-3 pt-4 border-t border-gray-100", className)} {...props} />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
