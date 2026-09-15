"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUpReal, viewportOnce } from "@/lib/motion";
import { LANDING_STEPS, LANDING_IMAGES } from "@/config/landing";

export function LandingSteps() {
  return (
    <section className="relative bg-white border-y border-gray-100 overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative order-2 lg:order-1"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-white shadow-lg">
            <SmartImage
              src={LANDING_IMAGES.showcase}
              alt="Giáo viên đang hướng dẫn học sinh học tiếng Anh"
              className="aspect-[4/3] w-full object-cover"
              gradient="from-violet-100 to-teal-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-violet-500/10" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="order-1 lg:order-2"
        >
          <motion.div
            variants={fadeUpReal}
            className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700"
          >
            <Zap className="h-3.5 w-3.5" /> Quy trình 3 bước
          </motion.div>
          <motion.h2
            variants={fadeUpReal}
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight"
          >
            Hoạt động đơn giản,
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              hiệu quả rõ ràng
            </span>
          </motion.h2>
          <div className="mt-10 flex flex-col gap-8">
            {LANDING_STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fadeUpReal}
                transition={{ delay: i * 0.1 } as any}
                className="group flex gap-4"
              >
                <div className="relative">
                  <motion.span
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-md"
                  >
                    <s.icon className="h-5 w-5" />
                  </motion.span>
                  {i < LANDING_STEPS.length - 1 && (
                    <div className="absolute left-1/2 top-14 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-gray-100 to-transparent" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      {s.n}
                    </span>
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
