import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nunito } from "next/font/google";
import "./globals.css";
import { RoleProvider, type SessionUser } from "@/lib/auth/role-context";
import { getCurrentUser } from "@/lib/auth/session";
import { AppProvider } from "@/lib/state/app-context";
import { RoleSwitcher } from "@/components/RoleSwitcher";
import { Toaster } from "@/components/Toaster";
import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";

const nunito = Nunito({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LingoQuest — Học tiếng Anh qua Video, Flashcard & Game",
  description:
    "Nền tảng học tiếng Anh kết hợp Video, Flashcard thông minh, Bài tập và Game 2D — thân thiện, hiệu quả, vui như chơi.",
};

// User khách mặc định khi chưa đăng nhập (RoleSwitcher vẫn hiện nút đăng nhập).
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
    <html lang="vi" className={cn("font-sans", nunito.variable)}>
      {/* override --font-sans từ @theme bằng biến Nunito vừa nạp */}
      <body className="bg-cream text-ink antialiased">
        <RoleProvider user={sessionUser ?? GUEST_USER} role={sessionUser?.role ?? "pending"}>
          <AppProvider>
            {children}
            <RoleSwitcher />
            <Toaster />
          </AppProvider>
        </RoleProvider>
      </body>
    </html>
  );
}
