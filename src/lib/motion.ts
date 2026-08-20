import type { Variants } from "framer-motion";

/* ============================================================
   Tiện ích animation dùng chung (Framer Motion).
   Ép kiểu easing thành tuple 4 số để thoả mãn kiểu của framer-motion.
   ============================================================ */

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_BACK: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

/** Container tạo hiệu ứng xuất hiện so le */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/** Mục con: mờ + trượt lên.
 *  Lưu ý: hidden KHÔNG dùng opacity:0 tuyệt đối để tránh trường hợp
 *  animation không chạy (SSR/hydration lỗi) làm nội dung bị ẩn hẳn.
 *  Chỉ trượt y, luôn giữ opacity:1 → nội dung luôn hiển thị. */
export const fadeUp: Variants = {
  hidden: { opacity: 1, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/** Mục con: phóng to từ nhỏ (giữ opacity:1 để không bao giờ bị ẩn). */
export const popIn: Variants = {
  hidden: { opacity: 1, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_BACK } },
};
