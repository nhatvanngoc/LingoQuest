import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cho phép dev server phục vụ preview qua proxy (vd. https://<port>-<sandbox>.e2b.app).
  // Nếu thiếu, Next 16 chặn cross-origin → trang preview load nhưng JS/HMR chết (trang trắng).
  allowedDevOrigins: ["*.e2b.app"],
  // Checklist 1.5 — Image optimization: allow Pexels for future next/image migration
  // (current SmartImage uses <img> with fallback; remotePatterns prepares for next/image).
  // Pexels images are already optimized via ?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=900
  // All SmartImage usages have alt + loading="lazy" (cards) / priority (hero) + sizes.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    // If switching SmartImage to next/image, keep deviceSizes/imageSizes defaults;
    // current <img> already respects sizes attribute.
  },
};

export default nextConfig;
