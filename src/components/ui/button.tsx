import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand text-white shadow-soft hover:bg-brand-700 active:translate-y-px",
        success: "bg-success text-white shadow-soft hover:bg-success/90 active:translate-y-px",
        accent: "bg-accent text-ink shadow-soft hover:bg-accent/90 active:translate-y-px",
        outline:
          "border border-slate-200 bg-white text-ink hover:bg-cream active:translate-y-px",
        ghost: "text-ink hover:bg-cream",
        danger: "bg-danger text-white shadow-soft hover:bg-danger/90 active:translate-y-px",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-xl px-4 text-sm",
        lg: "h-13 px-7 text-base",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
