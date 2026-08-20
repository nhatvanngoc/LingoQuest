/* ============================================================
   Format số theo kiểu tiếng Việt (dấu chấm ngăn nhóm hàng nghìn).
   Dùng hàm deterministic này THAY CHO `number.toLocaleString("vi-VN")`
   vì kết quả `toLocaleString` có thể khác nhau giữa Node (server) và
   trình duyệt (client) → gây hydration mismatch → React huỷ hydrate
   trang → toàn bộ animation Framer Motion bị kẹt ở opacity:0 (trắng).
   Hàm này cho kết quả y hệt trên server lẫn client.
   ============================================================ */

export function formatViNumber(n: number): string {
  const safe = Number.isFinite(n) ? Math.trunc(n) : 0;
  return safe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
