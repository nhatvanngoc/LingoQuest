import type { Metadata } from "next";
import type { ReactNode } from "react";
// Nunito self-host qua @fontsource (file woff2 nằm trong repo, được Next phục vụ tĩnh):
// không còn phụ thuộc Google Fonts lúc build/dev → không rơi về font serif fallback.
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "./globals.css";
import { RoleProvider, type SessionUser } from "@/lib/auth/role-context";
import { getCurrentUser } from "@/lib/auth/session";
import { AppProvider } from "@/lib/state/app-context";
import { Toaster } from "@/components/Toaster";
import type { Role } from "@/lib/types";

export const metadata: Metadata = {
  title: "LingoQuest — Học tiếng Anh qua Video, Flashcard & Game",
  description:
    "Nền tảng học tiếng Anh kết hợp Video, Flashcard thông minh, Bài tập và Game 2D — thân thiện, hiệu quả, vui như chơi.",
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
