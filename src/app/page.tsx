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
  BookOpen,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { BackgroundBeams } from "@/components/magic/BackgroundBeams";
import { AnimatedShinyText } from "@/components/magic/BackgroundBeams";
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
  },
  {
    icon: Layers,
    img: IMG.flashcard,
    title: "Flashcard 3D",
    desc: "Thẻ lật 3D với hiệu ứng tilt, lặp ngắt quãng SRS, ưu tiên từ bạn hay quên.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Gamepad2,
    img: IMG.game,
    title: "Game 2D Pro",
    desc: "Word Defender & Sentence Builder với combo, laser, bảng xếp hạng sống động.",
    color: "from-amber-400 to-orange-500",
  },
];

const STEPS = [
  { n: 1, title: "Giáo viên giao bài", desc: "Đăng video YouTube, tạo flashcard tự động, giao bài cho cả lớp trong 30s.", icon: BookOpen },
  { n: 2, title: "Học sinh bứt phá", desc: "Xem video → lật thẻ 3D → kiểm tra game hóa, tích XP thật mỗi bước.", icon: Zap },
  { n: 3, title: "Theo dõi real-time", desc: "Ma trận tiến độ, XP, streak lửa, huy hiệu và bảng xếp hạng tuần.", icon: Trophy },
];

const POEMS = [
  { emoji: "🪶", lines: ["Học một ngôn ngữ", "Mở một thế giới"], author: "Ngạn ngữ", gradient: "from-slate-50 to-sky-50" },
  { emoji: "❤️", lines: ["Mỗi ngày một chút", "Tích tiểu thành đại"], author: "Kiên trì", gradient: "from-slate-50 to-rose-50" },
  { emoji: "💡", lines: ["Kiên trì hôm nay", "Rạng ngời mai sau"], author: "LingoQuest", gradient: "from-slate-50 to-amber-50" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden" data-lq-landing>
      <noscript>
        <style>{`[data-lq-landing] [style]{opacity:1 !important;transform:none !important;filter:none !important}`}</style>
      </noscript>

      {/* ===== Nav ===== */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-violet-600 text-white shadow-md"
            >
              <Sparkles className="h-5 w-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Lingo<span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">Quest</span>
              <span className="ml-1.5 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white">V2</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 visited:text-violet-700 active:text-brand-700 active:scale-95">
              <Link href="/learn" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 rounded-lg visited:text-violet-700 hover:underline underline-offset-4 active:text-brand-700">Khám phá</Link>
            </Button>
            <ShimmerButton asChild size="sm" className="hidden sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50">
              <Link href="/dashboard" className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand rounded-lg visited:text-white/90 active:opacity-90 hover:underline underline-offset-4">Bắt đầu</Link>
            </ShimmerButton>
          </div>
        </div>
      </motion.header>

      {/* ===== Hero ===== */}
      <BackgroundBeams className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-8 px-4 pt-6 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-10 lg:pb-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={fadeUpReal}>
              <span className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-bold text-brand shadow-sm hover:shadow-md transition-all hover:scale-105">
                <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}><Trophy className="h-4 w-4 text-amber" /></motion.span>
                <AnimatedShinyText>Học tiếng Anh vui như chơi game</AnimatedShinyText>
                <span className="h-1 w-1 rounded-full bg-brand-300" />
              </span>
            </motion.div>
            <motion.h1 variants={fadeUpReal} className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] lg:leading-[1.05]">
              Chinh phục tiếng Anh cùng{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand via-brand-700 to-brand bg-[length:200%_100%] bg-clip-text text-transparent">LingoQuest</span>
                <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}>
                  <path d="M2 9C50 3 150 3 198 9" stroke="url(#grad)" strokeWidth="4" strokeLinecap="round" />
                  <defs><linearGradient id="grad" x1="0" x2="200" y1="0" y2="0"><stop offset="0%" stopColor="#0F766E"/><stop offset="50%" stopColor="#7C3AED"/><stop offset="100%" stopColor="#D97706"/></linearGradient></defs>
                </motion.svg>
              </span>
            </motion.h1>
            <motion.p variants={fadeUpReal} className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
              Video tương tác 3D, flashcard tilt lật, bài tập kiểu game và mini-game Phaser Pro —
              <span className="font-bold text-slate-800"> tất cả trong một nền tảng được giáo viên quản lý trực tiếp.</span>
            </motion.p>

            <motion.div variants={fadeUpReal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ShimmerButton asChild size="xl" className="group text-lg">
                <Link href="/dashboard" className="flex items-center gap-2">
                  Bắt đầu ngay
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ShimmerButton>
              <Button asChild size="xl" variant="outline" className="group border-2 text-lg hover:border-brand-200 hover:bg-brand-50">
                <Link href="/learn" className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform" /> Khám phá bài học
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUpReal} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm border border-gray-100">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-600"><Check className="h-3 w-3" /></span> Miễn phí
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm border border-gray-100">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-violet-600"><ShieldCheck className="h-3 w-3" /></span> Lớp 10–12
              </span>
            </motion.div>

            {/* Poetry */}
            <motion.div variants={fadeUpReal} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {POEMS.map((p) => (
                <div key={p.author} className={`group rounded-xl bg-gradient-to-br ${p.gradient} p-5 shadow-sm ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-0.5`}>
                  <p className="mt-1 text-[15px] font-bold leading-snug text-slate-700">
                    {p.lines[0]}<br />{p.lines[1]}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-slate-400">— {p.author}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image — landscape 16:9 CỰC ĐẠI, tràn viền */}
          <motion.div className="relative mx-auto w-full max-w-[820px] aspect-video overflow-hidden sm:aspect-video lg:mx-0 lg:max-w-[760px] xl:max-w-[880px] scale-[1.62] lg:scale-[1.78] origin-center lg:origin-left lg:-mr-16 xl:-mr-24">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
              className="absolute inset-0 overflow-hidden rounded-[2rem] border border-gray-200 shadow-lg"
            >
              <SmartImage src={IMG.hero} alt="Học sinh đang học tiếng Anh vui vẻ bên laptop" className="h-full w-full object-cover" gradient="from-brand-100 to-violet-100" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-violet-500/20 mix-blend-overlay" />
            </motion.div>

            {/* Single floating card — simple, not cluttered */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute bottom-3 left-3 w-[min(16rem,78%)] rounded-xl border border-gray-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:-bottom-4 sm:-left-4 sm:w-64"
            >
              <div className="relative flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-700 text-white shadow-md">
                  <PlayCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900">Talking About Your Weekend</p>
                  <p className="text-[11px] font-semibold text-slate-400">Bài học hôm nay · 8 phút</p>
                </div>
              </div>
              <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ delay: 1, duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-brand to-brand-500" />
              </div>
              <div className="relative mt-1 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span>65% hoàn thành</span><span className="text-brand">+30 XP</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </BackgroundBeams>

      {/* ===== Features ===== */}
      <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="mx-auto max-w-2xl text-center">
          <motion.div variants={fadeUpReal} className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand">
            <Rocket className="h-4 w-4" /> Tính năng Pro v2
          </motion.div>
          <motion.h2 variants={fadeUpReal} className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mọi thứ bạn cần để <span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">giỏi tiếng Anh</span>
          </motion.h2>
          <motion.p variants={fadeUpReal} className="mt-4 text-lg text-slate-500">Kết hợp 3 phương pháp hiệu quả nhất, gói gọn trong một nền tảng duy nhất.</motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-12 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={fadeUpReal} transition={{ delay: i * 0.1 } as any}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <SmartImage src={f.img} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" gradient="from-brand-100 to-violet-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    <div className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.5 + i * 0.1 }} className={`h-full bg-gradient-to-r ${f.color}`} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
                      {f.title}
                      <Sparkles className="h-4 w-4 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand">
                      <span>Khám phá ngay</span><ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ===== Steps ===== */}
      <section className="relative bg-white border-y border-gray-100 overflow-hidden">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border-2 border-white shadow-lg">
              <SmartImage src={IMG.showcase} alt="Giáo viên đang hướng dẫn học sinh học tiếng Anh" className="aspect-[4/3] w-full object-cover" gradient="from-violet-100 to-brand-100" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-violet-500/10" />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer} className="order-1 lg:order-2">
            <motion.div variants={fadeUpReal} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand">
              <Zap className="h-3.5 w-3.5" /> Quy trình 3 bước
            </motion.div>
            <motion.h2 variants={fadeUpReal} className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Hoạt động đơn giản,<br />
              <span className="bg-gradient-to-r from-brand to-brand-700 bg-clip-text text-transparent">hiệu quả rõ ràng</span>
            </motion.h2>
            <div className="mt-10 flex flex-col gap-8">
              {STEPS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUpReal} transition={{ delay: i * 0.1 } as any} className="group flex gap-4">
                  <div className="relative">
                    <motion.span whileHover={{ scale: 1.1, rotate: 5 }} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-md">
                      <s.icon className="h-5 w-5" />
                    </motion.span>
                    {i < STEPS.length - 1 && <div className="absolute left-1/2 top-14 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-gray-100 to-transparent" />}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-brand transition-colors">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">{s.n}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
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

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUpReal} className="relative overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand via-brand-700 to-brand-800 p-8 text-center shadow-lg sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          <div className="relative">
            <motion.div variants={fadeUpReal} className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white mb-6">
              <Rocket className="h-7 w-7" />
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">Sẵn sàng bứt phá<br />cùng LingoQuest v2?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-brand-100 leading-relaxed">Tham gia 5000+ học sinh đang học mỗi ngày. Miễn phí cho học sinh, mạnh mẽ cho giáo viên.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ShimmerButton asChild size="xl" className="bg-white text-brand hover:bg-white border-0 shadow-lg min-w-[220px]">
                <Link href="/dashboard" className="flex items-center gap-2">Bắt đầu với Google</Link>
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

      <footer className="border-t border-gray-100 bg-white/50">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-700 text-white"><Sparkles className="h-4 w-4" /></span>
            <span className="font-bold text-slate-600">LingoQuest v2</span>
          </div>
          <p className="flex items-center gap-2">© 2026 LingoQuest · Được thiết kế với tâm huyết</p>
        </div>
      </footer>
    </div>
  );
}