"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Role } from "@/lib/types";

/* ============================================================
   RoleProvider — Cấp thông tin người dùng THẬT từ server layout.
   Không còn mock localStorage / USERS. user & role được truyền từ
   RootLayout (đọc qua getCurrentUser() ở server).
   ============================================================ */

/** Người dùng cấp cho client (khớp với SessionUser ở session.ts). */
export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarColor: string;
  className?: string;
}

interface RoleContextValue {
  user: SessionUser;
  role: Role;
  isReady: boolean; // luôn true — dữ liệu đã có từ server, không nhấp nháy
}

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({
  children,
  user,
  role,
}: {
  children: ReactNode;
  user: SessionUser;
  role: Role;
}) {
  const value = useMemo<RoleContextValue>(
    () => ({ user, role, isReady: true }),
    [user, role],
  );

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole phải được dùng bên trong <RoleProvider>");
  return ctx;
}
