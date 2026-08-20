import { cn } from "@/lib/utils";

/* ============================================================
   Lingo Mascot — Linh vật SVG tự vẽ (không phụ thuộc ảnh ngoài).
   Hỗ trợ mood: wave (vẫy) / happy / think / sad để dùng nhiều màn hình.
   ============================================================ */
type Mood = "wave" | "happy" | "think" | "sad";

export function Mascot({
  mood = "happy",
  className,
  size = 160,
}: {
  mood?: Mood;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
      role="img"
      aria-label="Linh vật LingoQuest"
    >
      {/* Bóng đổ nhẹ */}
      <ellipse cx="100" cy="178" rx="52" ry="10" fill="#0f172a" opacity="0.08" />

      {/* Tai / sừng nhỏ */}
      <path d="M64 56c-6-16-2-30-2-30s14 8 18 24" fill="#1d4ed8" />
      <path d="M136 56c6-16 2-30 2-30s-14 8-18 24" fill="#1d4ed8" />

      {/* Thân — hình giọt nước bo tròn */}
      <path
        d="M100 38c34 0 60 26 60 60 0 30-22 44-30 64-5 12-15 20-30 20s-25-8-30-20c-8-20-30-34-30-64 0-34 26-60 60-60Z"
        fill="#2563EB"
      />
      {/* Mặt sáng hơn (bụng) */}
      <ellipse cx="100" cy="120" rx="34" ry="38" fill="#3B82F6" />
      <ellipse cx="100" cy="122" rx="24" ry="28" fill="#DBEAFE" opacity="0.85" />

      {/* Má hồng */}
      <circle cx="74" cy="120" r="7" fill="#FBBF24" opacity="0.8" />
      <circle cx="126" cy="120" r="7" fill="#FBBF24" opacity="0.8" />

      {/* Mắt */}
      {mood === "happy" && (
        <>
          <path d="M82 100c0 6 4 10 8 10" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M118 100c0 6-4 10-8 10" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
        </>
      )}
      {mood !== "happy" && (
        <>
          <circle cx="86" cy="104" r="7" fill="#0f172a" />
          <circle cx="114" cy="104" r="7" fill="#0f172a" />
          <circle cx="88" cy="102" r="2.4" fill="#fff" />
          <circle cx="116" cy="102" r="2.4" fill="#fff" />
        </>
      )}

      {/* Miệng theo mood */}
      {mood === "happy" && (
        <path d="M88 132c5 6 19 6 24 0" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
      )}
      {mood === "wave" && (
        <path d="M86 130q14 12 28 0" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
      )}
      {mood === "think" && (
        <>
          <path d="M90 132h20" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="150" cy="58" r="9" fill="#fff" stroke="#10B981" strokeWidth="3" />
          <text x="150" y="63" textAnchor="middle" fontSize="12" fill="#10B981" fontWeight="bold">?</text>
        </>
      )}
      {mood === "sad" && (
        <path d="M88 138c5-6 19-6 24 0" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
      )}

      {/* Cánh vẫy khi mood wave */}
      {mood === "wave" && (
        <path
          d="M160 64c14-6 24-18 24-18s-2 14-12 24"
          fill="#1d4ed8"
          style={{ transformOrigin: "160px 64px", animation: "pop 0.6s ease infinite alternate" }}
        />
      )}
    </svg>
  );
}
