"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { sound } from "@/lib/sound"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-brand text-white shadow-md hover:bg-brand-700 active:translate-y-px active:scale-[0.97]",
        success: "bg-emerald-600 text-white shadow-md hover:bg-emerald-700 active:translate-y-px active:scale-[0.97]",
        accent: "bg-amber-600 text-white shadow-md hover:bg-amber-700 active:translate-y-px active:scale-[0.97]",
        outline: "border-2 border-brand-200 bg-white text-brand hover:bg-brand-50 hover:border-brand-300 hover:shadow-md active:translate-y-px active:scale-[0.97] visited:border-violet-200 visited:text-violet-700",
        ghost: "text-slate-600 hover:bg-slate-100 hover:underline underline-offset-4 visited:text-violet-700 active:text-brand-700 active:bg-slate-100",
        danger: "bg-red-600 text-white shadow-md hover:bg-red-700 active:translate-y-px active:scale-[0.97]",
        glass: "bg-white/80 border border-white/40 text-ink hover:bg-white hover:shadow-md active:scale-[0.97]",
        /* ---- SOTA 3D Arcade Push Variants (Duolingo Style) ---- */
        arcade: "bg-brand text-white font-bold border-b-4 border-brand-800 active:border-b-0 active:translate-y-1 shadow-sm hover:brightness-105 transition-[transform,border,filter]",
        "arcade-emerald": "bg-emerald-500 text-white font-bold border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 shadow-sm hover:brightness-105 transition-[transform,border,filter]",
        "arcade-coral": "bg-rose-500 text-white font-bold border-b-4 border-rose-700 active:border-b-0 active:translate-y-1 shadow-sm hover:brightness-105 transition-[transform,border,filter]",
        "arcade-amber": "bg-amber-500 text-white font-bold border-b-4 border-amber-700 active:border-b-0 active:translate-y-1 shadow-sm hover:brightness-105 transition-[transform,border,filter]",
        "arcade-outline": "bg-white text-brand font-bold border-2 border-brand-200 border-b-4 border-b-brand-400 active:border-b-2 active:translate-y-0.5 hover:bg-brand-50/80 transition-[transform,border,background]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-13 px-7 text-base font-bold",
        xl: "h-14 px-8 text-base font-bold rounded-xl",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  playHaptic?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, playHaptic = true, onClick, children, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (playHaptic) {
        sound.playPop();
      }
      onClick?.(e);
    };

    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {children}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }