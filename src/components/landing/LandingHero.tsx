"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Sparkles,
  Check,
  ArrowRight,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { BackgroundBeams } from "@/components/magic/BackgroundBeams";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUpReal, EASE_OUT } from "@/lib/motion";
import { LANDING_IMAGES } from "@/config/landing";

export function LandingHero() {
  return (
    <BackgroundBeams className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-12 lg:pb-20">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
          <motion.div variants={fadeUpReal}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3.5 py-1.5 text-xs font-bold text-teal-800 shadow-2xs">
              <Trophy className="h-3.5 w-3.5 text-amber-500" />
              <span>Chuẩn CEFR A1 → C1 & THPT Quốc Gia</span>
            </span>
          </motion.div>
          <motion.h1 variants={fadeUpReal} className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] lg:leading-[1.05]">
            Hệ thống luyện tiếng Anh thông minh cho{" "}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Học sinh THPT
            </span>
          </motion.h1>
          <motion.p variants={fadeUpReal} className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 font-normal">
            Kết hợp video bài giảng trực quan, thẻ flashcard 3D phản xạ, bài đọc hiểu chuẩn đề thi và mini-game hấp dẫn — học sâu, nhớ lâu và bứt phá điểm số.
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
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <Check className="h-3 w-3" />
              </span>{" "}
              Bám sát SGK Global Success
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm border border-gray-100">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                <ShieldCheck className="h-3 w-3" />
              </span>{" "}
              Lớp 10 – 11 – 12
            </span>
          </motion.div>
        </motion.div>

        {/* Hero image & preview card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-gray-200 shadow-2xl">
            <SmartImage
              src={LANDING_IMAGES.hero}
              alt="Học sinh đang học tiếng Anh vui vẻ bên laptop"
              className="h-full w-full object-cover"
              gradient="from-brand-100 to-violet-100"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-violet-500/20 mix-blend-overlay" />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-80 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-xl backdrop-blur-md z-20"
            >
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-md">
                  <PlayCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900">Talking About Your Weekend</p>
                  <p className="text-xs font-semibold text-slate-400">Bài học hôm nay · 8 phút</p>
                </div>
              </div>
              <div className="relative mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
                />
              </div>
              <div className="relative mt-2 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>65% hoàn thành</span>
                <span className="text-teal-700 font-extrabold">+30 XP</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </BackgroundBeams>
  );
}
