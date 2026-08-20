import crypto from "node:crypto";

/* ============================================================
   password.ts — Băm & xác thực mật khẩu (SERVER ONLY).
   Dùng node:crypto (scrypt), KHÔNG thêm bcrypt/jose.
   Định dạng lưu: "scrypt$<saltHex>$<hashHex>".
   ============================================================ */

const KEYLEN = 64; // độ dài hash (byte)
const SALT_BYTES = 16;

/** Băm mật khẩu thành chuỗi "scrypt$<saltHex>$<hashHex>" */
export function hashPassword(pw: string): string {
  const salt = crypto.randomBytes(SALT_BYTES).toString("hex");
  const hash = crypto.scryptSync(pw, salt, KEYLEN).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

/** So sánh mật khẩu thô với chuỗi đã lưu (bằng timingSafeEqual) */
export function verifyPassword(pw: string, stored: string): boolean {
  if (!stored || !stored.startsWith("scrypt$")) return false;
  const parts = stored.split("$");
  const salt = parts[1];
  const hash = parts[2];
  if (!salt || !hash) return false;

  let computed: string;
  try {
    computed = crypto.scryptSync(pw, salt, KEYLEN).toString("hex");
  } catch {
    return false;
  }

  const a = Buffer.from(hash, "hex");
  const b = Buffer.from(computed, "hex");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
