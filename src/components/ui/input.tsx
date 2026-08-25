import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 text-[15px] font-semibold text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 focus-visible:border-brand disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 aria-[invalid=true]:border-danger aria-[invalid=true]:focus:border-danger aria-[invalid=true]:focus:ring-danger/20 aria-[invalid=true]:focus-visible:ring-danger/50 visited:border-slate-200 active:border-brand/70 transition-all",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[160px] w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-[15px] leading-relaxed text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-0 focus-visible:border-brand disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 aria-[invalid=true]:border-danger aria-[invalid=true]:focus:border-danger aria-[invalid=true]:focus:ring-danger/20 aria-[invalid=true]:focus-visible:ring-danger/50 transition-all resize-y",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn("mb-1.5 block text-sm font-bold text-slate-700", className)}
    {...props}
  />
);
