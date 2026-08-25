"use client";

import { useState, type ReactNode } from "react";

/* ============================================================
   SmartImage — <img> có fallback gradient khi không load được
   (môi trường offline / bị chặn external CDN).
   - Có mạng: hiện ảnh thật (src).
   - Lỗi load: tự thay bằng div gradient (giữ nguyên kích thước).
   Giúp trang không bao giờ xuất hiện "hộp ảnh rỗng".

   === Checklist 1.5 — Images & Icons (documented here) ===
   1) Favicon:
      - public/favicon.ico exists (32x32 + 16x16 multi-ICO, generated via scripts/generate_favicon.py)
      - public/icon-512.png 512×512 PNG (for PWA / manifest / SEO)
      - public/favicon.svg 512×512 vector (black→violet gradient, white lucide Sparkles)
      - public/icon-192.png (192×192) + public/apple-touch-icon.png (180×180) for Apple
      - Declared in src/app/layout.tsx metadata.icons (see layout.tsx)
      - If you need regenerate at higher quality: run `python scripts/generate_favicon.py`
        or use https://realfavicongenerator.net (upload icon-512.png → download pack)
      - Sparkles logo is single source; all favicons share same rounded-square gradient
        (#2563EB → #8B5CF6, rx 112) for consistent brand.

   2) Icons:
      - All UI icons are SVG, same square dimension, black base stroke via `lucide-react`
        (https://lucide.dev). They inherit `currentColor` → tinted with Tailwind
        (e.g. text-brand, text-violet-600). This guarantees no pixelation, same stroke
        width (consistent visual weight), and same bounding box.
      - Same square dimension: every <Icon className="h-5 w-5" /> or h-4 w-4 —
        width == height — ensures grid alignment; never stretch to rectangle.
      - Color rule: base black (#000) → then Tailwind color classes; do NOT hardcode hex
        inside icon files. lucide icons are monochrome; avoid 2-tone icons.
      - Naming: any custom SVG file MUST be lowercase with dashes and prefix `icon-`,
        e.g. public/icons/icon-sparkles.svg, public/icons/icon-flame.svg,
        public/images/icons/icon-book.svg. This enforces scan-ability and mirrors
        project convention (kebab-case, no spaces, no caps).
      - If adding custom icons: place under public/icons/ or public/images/icons/,
        optimize with SVGO, set viewBox="0 0 24 24", stroke="currentColor", fill="none".

   3) Image folder structure (expected, documented; create as needed):
      public/images/
        background/  → bg-*  (e.g. bg-hero-gradient.jpg, bg-mesh-violet.svg)
        banners/     → banner-* (e.g. banner-welcome-1200x400.jpg)
        icons/       → icon-*  (e.g. icon-sparkles-24.svg)
        layout/      → hero-*, banner-*, layout-* (e.g. hero-student-1200x900.jpg)
      public/icons/  → icon-* (generic UI icons, same as above)
      Prefixes enforce searchability: `bg-` for backgrounds, `icon-` for icons,
      `hero-` for hero/large imagery, `banner-` for wide banners.
      Example: images/background/bg-hero-1920x1080.jpg, images/layout/hero-student.jpg

   4) Image optimization:
      - Pexels URLs MUST include w=1200&h=900 (or w=800&h=600 for cards),
        plus `auto=compress&cs=tinysrgb&fit=crop` (see constants IMG in page.tsx)
        → reduces ~70% bytes vs original, serves consistent crop, respects src CDN caching.
        Example: https://images.pexels.com/photos/6503100/…?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200
      - Every <SmartImage> requires meaningful `alt` (no empty unless decorative).
      - Above-fold hero: pass `priority` → loading="eager", fetchPriority="high", decoding="sync"
        (LCP optimization). Below-fold cards/lists: default loading="lazy", fetchPriority="auto",
        decoding="async" (prevents main-thread blocking, saves bandwidth).
      - Always provide `sizes` for responsive: hero → "(max-width:1024px) 100vw, 50vw",
        cards → "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw".
        This lets browser pick smallest sufficient resource (even with Pexels fixed size,
        signals intent; if switching to next/image or srcSet, will be ready).
      - We deliberately use <img> (not next/image) to keep instant fallback to gradient div
        onError (next/image hides onError behind fill + requires remotePatterns). For
        external Pexels images this also avoids needing next.config remotePatterns.
        All optimization attrs (loading/sizes/decoding/fetchPriority) are still honoured.
      - sizes, loading, decoding, alt together satisfy Lighthouse "Properly size images"
        and "Defer offscreen images" audits.

   DO NOT edit grid/colors/fonts/forms here — only images/icons.
   ============================================================ */

type SmartImageProps = {
  src: string;
  alt: string;
  /** Class sizing/layout áp dụng CHUNG cho cả <img> và fallback (vd. h-full w-full object-cover). */
  className?: string;
  /** Gradient fallback (tailwind from-/to- classes, phải tồn tại trong theme). */
  gradient?: string;
  /** Icon tuỳ chọn hiển thị giữa fallback. */
  icon?: ReactNode;
  /**
   * Priority hint for LCP/hero images (above-the-fold).
   * - true  → loading="eager", fetchPriority="high", decoding="sync"
   * - false → loading="lazy",  fetchPriority="auto",  decoding="async"
   * Pass `priority` for the hero banner; leave false for cards/below-fold.
   */
  priority?: boolean;
  /** Override loading; defaults to priority ? "eager" : "lazy" */
  loading?: "eager" | "lazy";
  /** Responsive sizes hint; e.g. "(max-width: 1024px) 100vw, 50vw" for hero */
  sizes?: string;
  /** Image decoding mode */
  decoding?: "async" | "sync" | "auto";
  /** Fetch priority hint */
  fetchPriority?: "high" | "low" | "auto";
};

export function SmartImage({
  src,
  alt,
  className = "",
  gradient = "from-brand-100 to-accent-100",
  icon,
  priority = false,
  loading,
  sizes,
  decoding,
  fetchPriority,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  // Derive optimization attrs: hero (priority) is eager/high/sync, others lazy/auto/async
  const resolvedLoading = loading ?? (priority ? "eager" : "lazy");
  const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : "auto");
  const resolvedDecoding = decoding ?? (priority ? "sync" : "async");
  // Sensible default sizes: hero should override, cards use this default
  const resolvedSizes =
    sizes ?? (priority ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw");

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
      loading={resolvedLoading}
      fetchPriority={resolvedFetchPriority}
      decoding={resolvedDecoding}
      sizes={resolvedSizes}
    />
  );
}
