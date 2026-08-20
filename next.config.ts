import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cho phép dev server phục vụ preview qua proxy (vd. https://<port>-<sandbox>.e2b.app).
  // Nếu thiếu, Next 16 chặn cross-origin → trang preview load nhưng JS/HMR chết (trang trắng).
  allowedDevOrigins: ["*.e2b.app"],
};

export default nextConfig;
