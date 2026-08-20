/* ============================================================
   oauth-crypto.ts — Hàm thuần dùng Web Crypto (tương thích cả
   Edge lẫn Node) cho luồng OAuth2 PKCE. KHÔNG thêm dependency.
   ============================================================ */

function b64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Chuỗi ngẫu nhiên an toàn (base64url) từ crypto.getRandomValues. */
export function randomBytesB64(len: number): string {
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return b64url(arr);
}

/** SHA-256 của chuỗi → base64url (dùng làm code_challenge PKCE). */
export async function sha256B64url(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return b64url(new Uint8Array(digest));
}
