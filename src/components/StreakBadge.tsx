import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatViNumber } from "@/lib/format";

/* Huy hiệu chuỗi ngày học (streak) 🔥 */
export function StreakBadge({ count, className }: { count: number; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 font-extrabold text-amber-600",
        className,
      )}
      title={`Chuỗi ${count} ngày`}
    >
      <Flame className="h-4 w-4 fill-accent text-accent" />
      <span>{count}</span>
    </div>
  );
}

/* Bộ đếm XP ⚡ */
export function XPCounter({ xp, className }: { xp: number; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 font-extrabold text-brand",
        className,
      )}
      title={`${xp} XP`}
    >
      <span className="text-base leading-none">⚡</span>
      <span>{formatViNumber(xp)}</span>
    </div>
  );
}
