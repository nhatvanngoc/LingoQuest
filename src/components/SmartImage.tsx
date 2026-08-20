"use client";

import { useState, type ReactNode } from "react";

/* ============================================================
   SmartImage — <img> có fallback gradient khi không load được
   (môi trường offline / bị chặn external CDN).
   - Có mạng: hiện ảnh thật (src).
   - Lỗi load: tự thay bằng div gradient (giữ nguyên kích thước).
   Giúp trang không bao giờ xuất hiện "hộp ảnh rỗng".
   ============================================================ */

export function SmartImage({
  src,
  alt,
  className = "",
  gradient = "from-brand-100 to-accent-100",
  icon,
}: {
  src: string;
  alt: string;
  /** Class sizing/layout áp dụng CHUNG cho cả <img> và fallback (vd. h-full w-full object-cover). */
  className?: string;
  /** Gradient fallback (tailwind from-/to- classes, phải tồn tại trong theme). */
  gradient?: string;
  /** Icon tuỳ chọn hiển thị giữa fallback. */
  icon?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
        role="img"
        aria-label={alt}
      >
        {icon}
      </div>
    );
  }

  return (
    // Nền gradient có sẵn dưới ảnh + text-transparent: chống "lóe" alt-text xấu
    // trong khoảnh khắc trước khi onError kịp đổi sang fallback (mạng rất chậm).
    <img
      src={src}
      alt={alt}
      className={`bg-gradient-to-br from-slate-100 to-slate-200 text-transparent ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
