import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format số ngắn gọn (1200 → 1.2k) */
export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toString();
}

/** Format thời gian tương đối */
export function timeAgo(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
  
  const intervals = [
    { label: "năm", seconds: 31536000 },
    { label: "tháng", seconds: 2592000 },
    { label: "tuần", seconds: 604800 },
    { label: "ngày", seconds: 86400 },
    { label: "giờ", seconds: 3600 },
    { label: "phút", seconds: 60 },
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label} trước`;
    }
  }
  return "Vừa xong";
}

/** Generate màu avatar từ tên */
export function getAvatarColor(name: string): string {
  const colors = [
    "#0F766E", // brand
    "#7C3AED", // violet
    "#D97706", // amber
    "#DC2626", // red
    "#059669", // emerald
    "#2563EB", // blue
  ];
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

/** Get initials từ tên đầy đủ */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(-2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

/** Clamp value trong khoảng */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Calculate progress percentage */
export function calculateProgress(current: number, target: number): number {
  if (target <= 0) return 0;
  return clamp(Math.round((current / target) * 100), 0, 100);
}
