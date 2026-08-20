import { cn } from "@/lib/utils";

type Tone = "brand" | "success" | "accent" | "danger" | "neutral";

const TONES: Record<Tone, string> = {
  brand: "bg-brand",
  success: "bg-success",
  accent: "bg-accent",
  danger: "bg-danger",
  neutral: "bg-slate-300",
};

/* Thanh tiến độ tái sử dụng — có màu theo ngữ cảnh */
export function ProgressBar({
  value,
  tone = "brand",
  className,
  showLabel = false,
  height = "h-2.5",
}: {
  value: number;
  tone?: Tone;
  className?: string;
  showLabel?: boolean;
  height?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("w-full", className)}>
      <div className={cn("w-full overflow-hidden rounded-full bg-slate-100", height)}>
        <div
          className={cn("h-full rounded-full transition-all duration-500", TONES[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-right text-xs font-bold text-slate-500">{Math.round(pct)}%</div>
      )}
    </div>
  );
}
