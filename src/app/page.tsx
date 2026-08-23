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
  Zap,
  Flame,
  BookOpen,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { SpotlightCard, BentoGrid } from "@/components/magic/SpotlightCard";
import { BackgroundBeams } from "@/components/magic/BackgroundBeams";
import { AnimatedShinyText } from "@/components/magic/BackgroundBeams";
import { StreakBadge, XPCounter } from "@/components/StreakBadge";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUpReal, EASE_OUT, viewportOnce, SPRING_BOUNCY } from "@/lib/motion";

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
    desc: "Video tương tác, bấm từ vựng để tua đúng đoạn, học tức thì với phụ đề thông minh.",
    color: "from-brand-500 to-violet-500",
    bg: "bg-brand-50",
    iconColor: "text-brand",
    stats: "500+ video",
  },
  {
    icon: Layers,
    img: IMG.flashcard,
    title: "Flashcard 3D",
    desc: "Thẻ lật 3D với hiệu ứng tilt, lặp ngắt quãng SRS, ưu tiên từ bạn hay quên.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-success-50",
    iconColor: "text-success",
    stats: "SRS thông minh",
  },
  {
    icon: Gamepad2,
    img: IMG.game,
    title: "Game 2D Pro",
    desc: "Word Defender & Sentence Builder với combo, laser, bảng xếp hạng sống động.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-accent-50",
    iconColor: "text-amber-600",
    stats: "2 game hot",
  },
];

const STEPS = [
  { n: 1, title: "Giáo viên giao bài", desc: "Đăng video YouTube, tạo flashcard tự động, giao bài cho cả lớp trong 30s.", icon: BookOpen },
  { n: 2, title: "Học sinh bứt phá", desc: "Xem video → lật thẻ 3D → kiểm tra game hóa, tích XP thật mỗi bước.", icon: Zap },
  { n: 3, title: "Theo dõi real-time", desc: "Ma trận tiến độ, XP, streak lửa, huy hiệu lấp lánh và bảng xếp hạng tuần.", icon: Trophy },
];

const POEMS = [
  {
    emoji: "🪶",
    lines: ["Học một ngôn ngữ", "Mở một thế giới"],
    author: "Ngạn ngữ",
    gradient: "from-slate-50 to-sky-50",
  },
  {
    emoji: "❤️",
    lines: ["Mỗi ngày một chút", "Tích tiểu thành đại"],
    author: "Kiên trì",
    gradient: "from-slate-50 to-rose-50",
  },
  {
    emoji: "💡",
    lines: ["Kiên trì hôm nay", "Rạng ngời mai sau"],
    author: "LingoQuest",
    gradient: "from-slate-50 to-amber-50",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden" data-lq-landing>
      {/* Không-JS / in ấn / crawler: gỡ mọi trạng thái ẩn ban đầu của framer-motion
          (opacity/transform inline) để nội dung luôn hiển thị đầy đủ */}
      <noscript>
        <style>{`[data-lq-landing] [style]{opacity:1 !important;transform:none !important;filter:none !important}`}</style>
      </noscript>
      {/* ===== Nav với glass ===== */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand"
            >
              <Sparkles className="h-5 w-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.span>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              Lingo<span className="bg-gradient-to-r from-brand to-violet-600 bg-clip-text text-transparent">Quest</span>
              <span className="ml-1.5 rounded-full bg-violet-500 px-2 py-0.5 text-[10px] font-black text-white">V2</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
              <Link href="/learn">Khám phá</Link>
            </Button>
            <ShimmerButton asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/dashboard" className="flex items-center gap-1.5"><GoogleIcon /> Đăng nhập</Link>
            </ShimmerButton>
          </div>
        </div>
      </motion.header>

      {/* ===== Hero với BackgroundBeams ===== */}
      <BackgroundBeams className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-20 lg:pb-24">
          {/* Cột chữ */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={fadeUpReal}>
              <span className="group inline-flex items-center gap-2 rounded-full border border-violet-200 bg-gradient-to-r from-violet-50 to-brand-50 px-4 py-1.5 text-xs font-black text-violet-700 shadow-soft hover:shadow-glow-brand transition-all hover:scale-105">
                <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}><Trophy className="h-4 w-4 text-accent" /></motion.span>
                <AnimatedShinyText>Học tiếng Anh vui như chơi game</AnimatedShinyText>
                <span className="h-1 w-1 rounded-full bg-violet-400 animate-ping" />
              </span>
            </motion.div>
            <motion.h1 variants={fadeUpReal} className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Chinh phục tiếng Anh cùng{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand via-violet-600 to-brand bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">LingoQuest</span>
                <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}>
                  <path d="M2 9C50 3 150 3 198 9" stroke="url(#grad)" strokeWidth="4" strokeLinecap="round" />
                  <defs><linearGradient id="grad" x1="0" x2="200" y1="0" y2="0"><stop offset="0%" stopColor="#2563eb"/><stop offset="50%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#fbbf24"/></linearGradient></defs>
                </motion.svg>
                <motion.div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-brand-100 via-violet-100 to-accent-100 blur-xl opacity-60" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} />
              </span>
            </motion.h1>
            <motion.p variants={fadeUpReal} className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              Video tương tác 3D, flashcard tilt lật, bài tập kiểu game và mini-game Phaser Pro —
              <span className="font-bold text-slate-900"> tất cả trong một nền tảng được giáo viên quản lý trực tiếp.</span>
            </motion.p>

            <motion.div variants={fadeUpReal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ShimmerButton asChild size="xl" className="group text-base">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <GoogleIcon /> Bắt đầu ngay
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ShimmerButton>
              <Button asChild size="xl" variant="outline" className="group border-2 hover:border-brand-200 hover:bg-brand-50">
                <Link href="/learn" className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform" /> Khám phá bài học
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUpReal} className="mt-8 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-600 shadow-soft border border-slate-100">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success-50 text-success"><Check className="h-3 w-3" /></span> Miễn phí
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-600 shadow-soft border border-slate-100">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-violet-600"><ShieldCheck className="h-3 w-3" /></span> Lớp 6–9
              </span>
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand-100 to-violet-100 flex items-center justify-center text-[10px] font-bold text-brand">U{i}</div>
                ))}
                <div className="h-7 w-7 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">+5k</div>
              </div>
            </motion.div>

            {/* thơ ngắn thay số liệu (màu dịu, không lấn át CTA) */}
            <motion.div variants={fadeUpReal} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {POEMS.map((p) => (
                <div
                  key={p.author}
                  className={`group rounded-2xl bg-gradient-to-br ${p.gradient} p-5 shadow-sm ring-1 ring-slate-100/50 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-lg shadow-sm">{p.emoji}</span>
                  <p className="mt-3 text-sm font-bold leading-snug text-slate-700">
                    {p.lines[0]}<br />{p.lines[1]}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-slate-400">— {p.author}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Cột ảnh với tilt & beams */}
          <motion.div className="relative mx-auto w-full max-w-md aspect-[4/3] overflow-visible sm:aspect-square lg:mx-0 lg:max-w-none lg:aspect-auto lg:h-[560px] xl:h-[600px]">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
              className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white shadow-lift"
            >
              <SmartImage src={IMG.hero} alt="Học sinh" className="h-full w-full object-cover" gradient="from-brand-100 to-violet-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-violet-500/20 mix-blend-overlay" />
            </motion.div>

            {/* floating mocks */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              animate-y={{}}
              className="absolute bottom-3 left-3 w-[min(16rem,78%)] rounded-[1.5rem] border border-white/50 bg-white/90 p-4 shadow-lift backdrop-blur-xl sm:-bottom-4 sm:-left-4 sm:w-64"
            >
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-brand-50/50 to-violet-50/50" />
              <div className="relative flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
                  <PlayCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold text-slate-900">Talking About Your Weekend</p>
                  <p className="text-[11px] font-bold text-slate-500">Bài học hôm nay · 8 phút · 🔥 hot</p>
                </div>
              </div>
              <div className="relative mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ delay: 1, duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-brand to-violet-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_linear_infinite]" />
              </div>
              <div className="relative mt-2 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span>65% hoàn thành</span><span className="text-brand">+30 XP</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              className="absolute right-2 top-4 sm:right-2 lg:right-4"
            >
              <div className="rounded-2xl border border-white/50 bg-white/90 p-2.5 shadow-lift backdrop-blur">
                <XPCounter xp={2480} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300 }}
              className="absolute right-2 bottom-20 sm:right-2 lg:right-4"
            >
              <div className="rounded-2xl border border-white/50 bg-white/90 p-2.5 shadow-lift backdrop-blur">
                <StreakBadge count={12} />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </BackgroundBeams>

      {/* ===== Features Bento ===== */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="mx-auto max-w-2xl text-center">
          <motion.div variants={fadeUpReal} className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-black text-violet-700">
            <Rocket className="h-4 w-4" /> Tính năng Pro v2
          </motion.div>
          <motion.h2 variants={fadeUpReal} className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Mọi thứ bạn cần để <span className="bg-gradient-to-r from-brand to-violet-600 bg-clip-text text-transparent">giỏi tiếng Anh</span>
          </motion.h2>
          <motion.p variants={fadeUpReal} className="mt-4 text-lg text-slate-600">Kết hợp 3 phương pháp hiệu quả nhất, gói gọn trong một nền tảng duy nhất.</motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={fadeUpReal} transition={{ delay: i * 0.1 } as any}>
                <SpotlightCard className="group h-full overflow-hidden p-0 border-0 shadow-card hover:shadow-lift transition-all duration-500" spotlightColor="rgba(139,92,246,0.1)">
                  <div className="relative h-48 overflow-hidden">
                    <SmartImage src={f.img} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" gradient="from-brand-100 to-violet-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    <div className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-glow-brand`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-black text-slate-700 backdrop-blur shadow-soft">
                      {f.stats}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.5 + i * 0.1 }} className={`h-full bg-gradient-to-r ${f.color}`} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 text-lg font-extrabold text-slate-900 group-hover:text-brand transition-colors">
                      {f.title}
                      <Sparkles className="h-4 w-4 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand">
                      <span>Khám phá ngay</span><ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ===== Steps với timeline ===== */}
      <section className="relative bg-white border-y border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-vibrant opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-lift">
              <SmartImage src={IMG.showcase} alt="Giáo viên" className="aspect-[4/3] w-full object-cover" gradient="from-violet-100 to-brand-100" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-violet-500/10" />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-lift border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-success to-emerald-600 flex items-center justify-center text-white"><Check className="h-5 w-5" /></div>
                <div><p className="text-sm font-black text-slate-900">82% hoàn thành</p><p className="text-xs text-slate-500">Toàn lớp</p></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="order-1 lg:order-2">
            <motion.div variants={fadeUpReal} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-black text-brand">
              <Zap className="h-3.5 w-3.5" /> Quy trình 3 bước
            </motion.div>
            <motion.h2 variants={fadeUpReal} className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Hoạt động đơn giản,<br />
              <span className="bg-gradient-to-r from-brand to-violet-600 bg-clip-text text-transparent">hiệu quả rõ ràng</span>
            </motion.h2>
            <div className="mt-10 flex flex-col gap-8">
              {STEPS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUpReal} transition={{ delay: i * 0.1 } as any} className="group flex gap-4">
                  <div className="relative">
                    <motion.span whileHover={{ scale: 1.1, rotate: 5 }} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-glow-brand">
                      <s.icon className="h-5 w-5" />
                    </motion.span>
                    {i < STEPS.length - 1 && <div className="absolute left-1/2 top-14 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-slate-200 to-transparent" />}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="flex items-center gap-2 font-extrabold text-slate-900 group-hover:text-brand transition-colors">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">{s.n}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUpReal} className="mt-10">
              <ShimmerButton asChild size="lg"><Link href="/dashboard" className="flex items-center gap-2">Bắt đầu ngay <Rocket className="h-4 w-4" /></Link></ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA cuối với beams ===== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUpReal} className="relative overflow-hidden rounded-[2.5rem] border border-violet-200 bg-gradient-to-br from-brand via-violet-600 to-brand-700 p-10 text-center shadow-lift sm:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          
          <div className="relative">
            <motion.div variants={fadeUpReal} className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white mb-6">
              <Rocket className="h-7 w-7" />
            </motion.div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">Sẵn sàng bứt phá<br />cùng LingoQuest v2?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-brand-100 leading-relaxed">Tham gia 5000+ học sinh đang học mỗi ngày. Miễn phí cho học sinh, mạnh mẽ cho giáo viên.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ShimmerButton asChild size="xl" className="bg-white text-brand hover:bg-white border-0 shadow-lift min-w-[220px]">
                <Link href="/dashboard" className="flex items-center gap-2"><GoogleIcon /> Đăng nhập bằng Google</Link>
              </ShimmerButton>
              <Button asChild size="xl" variant="ghost" className="text-white hover:bg-white/10 border border-white/20">
                <Link href="/learn">Xem demo <PlayCircle className="h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-white/70">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-white" /> Không cần thẻ tín dụng</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-white" /> Dùng ngay sau 30s</span>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-100 bg-white/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-violet-600 text-white"><Sparkles className="h-4 w-4" /></span>
            <span className="font-bold text-slate-600">LingoQuest v2</span><span className="rounded-full bg-violet-500 px-1.5 py-0.5 text-[10px] font-black text-white">PRO</span>
          </div>
          <p className="flex items-center gap-2">© 2026 LingoQuest · Crafted with <span className="text-red-500">♥</span> + MagicUI + Aceternity · Ảnh: Pexels</p>
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
