import type { Role } from "@/lib/types";

/* ============================================================
   token.ts — Ký & xác thực session token (PURE, chạy được cả
   Edge runtime lẫn Node). KHÔNG import db / next-headers / node:crypto.
   - Dùng Web Crypto (crypto.subtle) thay node:crypto để middleware
     (Edge) có thể verify chữ ký.
   - Token: <payloadBase64url>.<hmacBase64url>
   - Payload: { uid, role, exp }  (có role để middleware guard vai trò)
   ============================================================ */

const SESSION_SECRET = process.env.SESSION_SECRET ?? "dev-only-insecure-secret-change-me";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 ngày

export interface SessionPayload {
  uid: string;
  role: Role;
  exp: number; // epoch ms
}

const enc = new TextEncoder();
const dec = new TextDecoder();

function secretBytes(): Uint8Array {
  return enc.encode(SESSION_SECRET);
}

/* base64url <-> Uint8Array (dùng btoa/atob thay Buffer để tương thích Edge) */
function b64urlFromBytes(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlToBytes(str: string): Uint8Array {
  const norm = str.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(norm);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function importKey() {
  return crypto.subtle.importKey(
    "raw",
    secretBytes(),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

/** Ký HMAC-SHA256 (base64url) của `data` — hằng số thời gian qua subtle.verify. */
async function signData(data: string): Promise<string> {
  const key = await importKey();
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return b64urlFromBytes(new Uint8Array(sig));
}

/** Tạo token phiên chứa uid + role. */
export async function createSessionToken(uid: string, role: Role): Promise<string> {
  const payload: SessionPayload = {
    uid,
    role,
    exp: Date.now() + MAX_AGE_SECONDS * 1000,
  };
  const body = b64urlFromBytes(enc.encode(JSON.stringify(payload)));
  const sig = await signData(body);
  return `${body}.${sig}`;
}

/** Xác thực token. Trả payload nếu hợp lệ & chưa hết hạn, ngược lại null. */
export async function verifySessionToken(token?: string | null): Promise<SessionPayload | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [body, sig] = parts;

  try {
    const key = await importKey();
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      b64urlToBytes(sig),
      enc.encode(body),
    );
    if (!valid) return null;

    const payload = JSON.parse(dec.decode(b64urlToBytes(body))) as SessionPayload;
    if (typeof payload.uid !== "string" || typeof payload.role !== "string") return null;
    if (typeof payload.exp !== "number" || Date.now() > payload.exp) return null; // hết hạn
    return payload;
  } catch {
    return null;
  }
}
