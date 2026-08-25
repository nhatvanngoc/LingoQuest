import type { Metadata } from "next";
import type { ReactNode } from "react";
// Be Vietnam Pro self-host qua @fontsource — tối ưu dấu tiếng Việt, dễ đọc hơn Nunito:
/* WOFF2 total ~80-120KB for 3 weights, font-display:swap via @fontsource, fallback stack documented */
// Fallback stack: "Be Vietnam Pro", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif (defined in globals.css --font-sans)
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "./globals.css";
import { RoleProvider, type SessionUser } from "@/lib/auth/role-context";
import { getCurrentUser } from "@/lib/auth/session";
import { AppProvider } from "@/lib/state/app-context";
import { Toaster } from "@/components/Toaster";
import type { Role } from "@/lib/types";

/* Checklist 1.5 — Favicon & Icons
   - Favicon exists at public/favicon.ico (32x32+16x16 ICO) + public/favicon.svg (vector)
   - 512×512 PNG at public/icon-512.png (PWA, high-res) + 192×192 + 180×180 apple-touch
   - Generated via scripts/generate_favicon.py (gradient #2563EB→#8B5CF6, Sparkles white)
     — same source as favicon.svg; rounded rx 112, square, SVG black-base lucide icons.
   - To regenerate at higher quality or add Safari pinned tab/manifest:
     run `python scripts/generate_favicon.py` or upload icon-512.png to https://realfavicongenerator.net
   - Declared here via Metadata.icons so Next.js injects <link rel="icon"> automatically.
   - Icons elsewhere are lucide-react SVG, same square dimension (h-4 w-4 / h-5 w-5),
     black base stroke → tinted via Tailwind (text-brand etc). Custom icons must be
     named icon-* lowercase with dashes under public/icons/ or public/images/icons/.
*/
export const metadata: Metadata = {
  title: "LingoQuest — Học tiếng Anh qua Video, Flashcard & Game",
  description:
    "Nền tảng học tiếng Anh kết hợp Video, Flashcard thông minh, Bài tập và Game 2D — thân thiện, hiệu quả, vui như chơi.",
  // Favicon & PWA icons — checklist 1.5: at least favicon.ico + 512 PNG; SVG and Apple included
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32 16x16", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
};

// User khách mặc định khi chưa đăng nhập (đăng xuất nằm trong menu avatar ở AppShell).
const GUEST_USER: SessionUser = {
  id: "",
  name: "Khách",
  email: "",
  role: "pending" as Role,
  avatarColor: "#94A3B8",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Đọc phiên thật từ cookie (server). Trả null nếu chưa đăng nhập.
  const sessionUser = await getCurrentUser();

  return (
    <html lang="vi" className="font-sans">
      <body className="bg-cream text-ink antialiased">
        <RoleProvider user={sessionUser ?? GUEST_USER} role={sessionUser?.role ?? "pending"}>
          <AppProvider>
            {children}
            <Toaster />
          </AppProvider>
        </RoleProvider>
      </body>
    </html>
  );
}
