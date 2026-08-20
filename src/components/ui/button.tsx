import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-brand text-white shadow-soft hover:bg-brand-700 active:translate-y-px hover:shadow-glow-brand before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/15 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        success: "bg-gradient-to-br from-emerald-400 to-success text-white shadow-soft hover:shadow-glow-success hover:from-emerald-500 hover:to-success/90 active:translate-y-px",
        accent: "bg-gradient-to-br from-amber-300 to-accent text-ink shadow-soft hover:shadow-glow-accent hover:from-amber-400 hover:to-accent/90 active:translate-y-px",
        outline: "border border-slate-200 bg-white text-ink hover:bg-cream hover:border-slate-300 hover:shadow-card active:translate-y-px",
        ghost: "text-ink hover:bg-cream",
        danger: "bg-gradient-to-br from-red-400 to-danger text-white shadow-soft hover:from-red-500 hover:to-danger/90 active:translate-y-px",
        shimmer: "bg-gradient-to-br from-brand via-violet-500 to-brand text-white shadow-glow-brand hover:shadow-glow-brand border border-white/20",
        glass: "glass border border-white/40 text-ink hover:bg-white/80 hover:shadow-card",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-xl px-4 text-sm",
        lg: "h-13 px-7 text-base font-extrabold",
        xl: "h-14 px-8 text-base font-extrabold rounded-3xl",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Wrapper with framer motion for micro-interactions
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  shimmer?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, shimmer, children, ...props }, ref) => {
    const isShimmer = variant === "shimmer" || shimmer;

    // asChild must have single child for Slot - no extra shimmer divs
    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {children as any}
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {/* shimmer effect */}
        {isShimmer && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-[shimmer_2s_linear_infinite]" />
        )}
        {/* subtle shine for all primary buttons */}
        {(variant === "default" || variant === "success" || variant === "accent") && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out] transition-opacity" />
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
