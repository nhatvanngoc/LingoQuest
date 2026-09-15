import { PlayCircle, Layers, Gamepad2, BookOpen, Zap, Trophy } from "lucide-react";

export const LANDING_IMAGES = {
  hero: "https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  video: "https://images.pexels.com/photos/8055848/pexels-photo-8055848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  flashcard: "https://images.pexels.com/photos/7319198/pexels-photo-7319198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  game: "https://images.pexels.com/photos/8185907/pexels-photo-8185907.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  showcase: "https://images.pexels.com/photos/6502822/pexels-photo-6502822.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
};

export const LANDING_FEATURES = [
  {
    icon: PlayCircle,
    img: LANDING_IMAGES.video,
    title: "Học qua Video",
    desc: "Video tương tác, bấm từ vựng để tua đúng đoạn, học tức thì với phụ đề thông minh.",
    color: "from-teal-500 to-violet-500",
    href: "/learn",
  },
  {
    icon: Layers,
    img: LANDING_IMAGES.flashcard,
    title: "Flashcard 3D",
    desc: "Thẻ lật 3D với hiệu ứng tilt, lặp ngắt quãng SRS, ưu tiên từ bạn hay quên.",
    color: "from-emerald-400 to-teal-500",
    href: "/curriculum/grade-11",
  },
  {
    icon: Gamepad2,
    img: LANDING_IMAGES.game,
    title: "Game 2D Pro",
    desc: "Word Defender & Sentence Builder với combo, laser, bảng xếp hạng sống động.",
    color: "from-amber-400 to-orange-500",
    href: "/game",
  },
];

export const LANDING_STEPS = [
  {
    n: 1,
    title: "Giáo viên giao bài",
    desc: "Đăng video YouTube, tạo flashcard tự động, giao bài cho cả lớp trong 30s.",
    icon: BookOpen,
  },
  {
    n: 2,
    title: "Học sinh bứt phá",
    desc: "Xem video → lật thẻ 3D → kiểm tra game hóa, tích XP thật mỗi bước.",
    icon: Zap,
  },
  {
    n: 3,
    title: "Theo dõi real-time",
    desc: "Ma trận tiến độ, XP, streak lửa, huy hiệu và bảng xếp hạng tuần.",
    icon: Trophy,
  },
];
