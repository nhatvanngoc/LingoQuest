"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, PlayCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magic/ShimmerButton";
import { fadeUpReal, viewportOnce } from "@/lib/motion";

export function LandingCTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUpReal}
        className="relative overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 p-8 text-center shadow-lg sm:p-12"
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative">
          <motion.div
            variants={fadeUpReal}
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white mb-6"
          >
            <Rocket className="h-7 w-7" />
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
            Sẵn sàng bứt phá
            <br />
            cùng LingoQuest v2?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-teal-100 leading-relaxed">
            Tham gia 5000+ học sinh đang học mỗi ngày. Miễn phí cho học sinh, mạnh mẽ cho giáo viên.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ShimmerButton
              asChild
              size="xl"
              className="bg-white text-teal-900 hover:bg-white border-0 shadow-lg min-w-[220px]"
            >
              <Link href="/dashboard" className="flex items-center gap-2">
                Bắt đầu miễn phí
              </Link>
            </ShimmerButton>
            <Button
              asChild
              size="xl"
              variant="ghost"
              className="text-white hover:bg-white/10 border border-white/20"
            >
              <Link href="/curriculum/grade-11/unit-1-a-long-and-healthy-life">
                Xem demo Unit 1 <PlayCircle className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white/80">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-teal-300" /> Học trực tiếp trên trình duyệt
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-teal-300" /> Đồng bộ tiến độ tức thì
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
