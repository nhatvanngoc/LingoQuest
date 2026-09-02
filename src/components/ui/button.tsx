import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
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