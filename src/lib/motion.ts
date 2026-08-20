import type { Variants, Transition } from "framer-motion";

/* ============================================================
   LingoQuest — Motion System v2 (inspired by framer-motion-demos,
   magicui, aceternity)
   Đã nâng cấp từ 2 variant đơn điệu lên 20+ preset production
   ============================================================ */

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const EASE_BACK: [number, number, number, number] = [0.34, 1.56, 0.64, 1];
export const EASE_BOUNCE: [number, number, number, number] = [0.68, -0.55, 0.265, 1.55];
export const EASE_SNAPPY: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 24,
};
export const SPRING_BOUNCY: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 0.8,
};
export const SPRING_SMOOTH: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};
export const SPRING_WOBBLY: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 12,
};

/** Container stagger - nhanh hơn, mượt hơn */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.02 } },
};
export const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

/** Fade Up - phiên bản cũ giữ lại để không vỡ */
export const fadeUp: Variants = {
  hidden: { opacity: 1, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

/** Fade Up mượt thực sự (opacity) */
export const fadeUpReal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: SPRING_BOUNCY },
};

export const popIn: Variants = {
  hidden: { opacity: 1, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_BACK } },
};

/** Slide từ các hướng */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: SPRING_SMOOTH },
};
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: SPRING_SMOOTH },
};
export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: SPRING_SMOOTH },
};

/** Bounce & Wobble */
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: SPRING_WOBBLY },
};
export const wobble: Variants = {
  hidden: { rotate: -2, scale: 0.98 },
  show: {
    rotate: [ -2, 2, -1, 1, 0 ],
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Card hover lift - dùng chung */
export const hoverLift = {
  rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0 },
  hover: { y: -6, scale: 1.02, transition: SPRING_SNAPPY },
};
export const hoverTilt = {
  rest: { rotateY: 0, rotateX: 0, scale: 1 },
  hover: { scale: 1.03, transition: SPRING_SNAPPY },
};

/** Button interactions */
export const tapSqueeze = { scale: 0.96, transition: { duration: 0.1 } };
export const tapBounce = { scale: 0.92, transition: SPRING_SNAPPY };

/** Shared layout for nav active pill */
export const layoutTransition: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

/** Shimmer variants for progress */
export const shimmerVariants: Variants = {
  initial: { x: "-100%" },
  animate: { 
    x: "100%",
    transition: { duration: 1.5, repeat: Infinity, ease: "linear" as const }
  },
};

/** Page transitions */
export const pageTransition = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { 
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT }
  },
  exit: {
    opacity: 0, y: -20, filter: "blur(8px)",
    transition: { duration: 0.3, ease: EASE_OUT }
  },
};

/** List FLIP */
export const listItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: SPRING_SMOOTH },
  exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.25 } },
};

/** For viewport - chỉ animate 1 lần */
export const viewportOnce = { once: true, margin: "-80px" };
