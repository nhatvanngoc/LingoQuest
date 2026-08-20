"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Layers,
  Gamepad2,
  Sparkles,
  Check,
  ArrowRight,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StreakBadge, XPCounter } from "@/components/StreakBadge";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUp, EASE_OUT } from "@/lib/motion";

/* Ảnh thật từ Pexels (miễn phí bản quyền) */
const IMG = {
  hero: "https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  video: "https://images.pexels.com/photos/8055848/pexels-photo-8055848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  flashcard: "https://images.pexels.com/photos/7319198/pexels-photo-7319198.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  game: "https://images.pexels.com/photos/8185907/pexels-photo-8185907.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  showcase: "https://images.pexels.com/photos/6502822/pexels-photo-6502822.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
};

const FEATURES = [
  {
    icon: PlayCircle,
    img: IMG.video,
    title: "Học qua Video",
    desc: "Xem video có phụ đề, bấm vào từ vựng để tua đúng đoạn và học tức thì.",
    color: "bg-brand-50 text-brand",
  },
  {
    icon: Layers,
    img: IMG.flashcard,
    title: "Flashcard thông minh",
    desc: "Thẻ lật 3D ôn tập theo chu kỳ lặp ngắt quãng, ưu tiên từ bạn hay quên.",
    color: "bg-success-50 text-success",
  },
  {
    icon: Gamepad2,
    img: IMG.game,
    title: "Game 2D luyện từ",
    desc: "Bắn chữ Word Defender và xếp câu Sentence Builder — học mà như chơi.",
    color: "bg-accent-100 text-amber-600",
  },
];

const STEPS = [
  { n: 1, title: "Giáo viên giao bài", desc: "Đăng video, tạo bộ flashcard và bài tập cho cả lớp." },
  { n: 2, title: "Học sinh luyện tập", desc: "Xem video, ôn thẻ, làm bài kiểm tra kiểu game." },
  { n: 3, title: "Theo dõi tiến độ", desc: "XP, streak, huy hiệu và bảng xếp hạng tạo động lực." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ===== Nav ===== */}
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            Lingo<span className="text-brand">Quest</span>
          </span>
        </div>
        <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
          <Link href="/dashboard">Đăng nhập bằng Google</Link>
        </Button>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative flex min-h-[calc(100vh_-_4rem)] items-center overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-20">
          {/* Cột chữ */}
          <motion.div variants={staggerContainer} initial={false} animate="show">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand shadow-soft">
                <Trophy className="h-3.5 w-3.5 text-accent" /> Học tiếng Anh vui như chơi game
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Chinh phục tiếng Anh cùng{" "}
              <span className="relative whitespace-nowrap text-brand">
                LingoQuest
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9C50 3 150 3 198 9" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg text-slate-500">
              Video tương tác, flashcard lật 3D, bài tập kiểu game và mini-game 2D — tất cả trong một
              nền tảng được giáo viên quản lý trực tiếp.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  <GoogleIcon /> Đăng nhập bằng Google
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/learn">
                  Khám phá bài học <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-success" /> Miễn phí cho học sinh
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-success" /> Dành cho lớp 6–9
              </span>
            </motion.div>
          </motion.div>

          {/* Cột ảnh thật + mockup UI */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="relative mx-auto h-[380px] w-full max-w-md sm:h-[460px]"
          >
            {/* Ảnh lớp học thật */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-4 border-white shadow-lift sm:rotate-2">
              <SmartImage src={IMG.hero} alt="Học sinh học tiếng Anh trong lớp" className="h-full w-full object-cover" gradient="from-brand-100 to-accent-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Mockup "bài học hôm nay" đè lên ảnh */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-3 w-60 rounded-2xl border border-slate-100 bg-white p-3 shadow-lift sm:-left-8"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white">
                  <PlayCircle className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-extrabold text-slate-900">Talking About Your Weekend</p>
                  <p className="text-[10px] font-semibold text-slate-400">Bài học hôm nay · 8 phút</p>
                </div>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-2/5 rounded-full bg-brand" />
              </div>
            </motion.div>

            {/* Chip XP */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -right-2 top-6 sm:-right-6"
            >
              <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-lift">
                <XPCounter xp={2480} />
              </div>
            </motion.div>

            {/* Chip streak */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute -right-1 bottom-16 sm:right-2"
            >
              <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-lift">
                <StreakBadge count={12} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 3 tính năng (có ảnh thật) ===== */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Mọi thứ bạn cần để giỏi tiếng Anh
          </h2>
          <p className="mt-3 text-slate-500">Bốn phương pháp học hiệu quả nhất, gói gọn trong một nền tảng.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_OUT }}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft"
              >
                <div className="relative h-44 overflow-hidden">
                  <SmartImage
                    src={f.img}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    gradient="from-brand-100 to-accent-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  <span className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl shadow-soft ${f.color}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== Cách hoạt động (ảnh thật lớn) ===== */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-lift sm:-rotate-2">
              <SmartImage src={IMG.showcase} alt="Giáo viên kèm học sinh" className="aspect-[4/3] w-full object-cover" gradient="from-accent-100 to-brand-100" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Hoạt động đơn giản, hiệu quả rõ ràng</h2>
            <div className="mt-8 flex flex-col gap-6">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand text-lg font-extrabold text-white shadow-soft">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8" size="lg">
              <Link href="/dashboard">Bắt đầu ngay <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== CTA cuối ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-8 text-center shadow-lift sm:p-14">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Sẵn sàng bắt đầu hành trình?</h2>
            <p className="mx-auto mt-3 max-w-md text-brand-100">Đăng nhập bằng Google và gia nhập lớp học của bạn ngay hôm nay.</p>
            <Button asChild size="lg" variant="accent" className="mt-8">
              <Link href="/dashboard">
                <GoogleIcon /> Đăng nhập bằng Google
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-bold text-slate-600">LingoQuest</span>
          </div>
          <p>© 2026 LingoQuest · Ảnh: Pexels · Template EdTech.</p>
        </div>
      </footer>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
    </svg>
  );
}
