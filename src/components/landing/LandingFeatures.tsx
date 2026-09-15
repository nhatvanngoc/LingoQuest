"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { staggerContainer, fadeUpReal, viewportOnce } from "@/lib/motion";
import { LANDING_FEATURES } from "@/config/landing";

export function LandingFeatures() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.div
          variants={fadeUpReal}
          className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-1.5 text-xs font-bold text-teal-700"
        >
          <Rocket className="h-4 w-4" /> Tính năng Pro v2
        </motion.div>
        <motion.h2
          variants={fadeUpReal}
          className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Mọi thứ bạn cần để{" "}
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            giỏi tiếng Anh
          </span>
        </motion.h2>
        <motion.p variants={fadeUpReal} className="mt-4 text-lg text-slate-500">
          Kết hợp 3 phương pháp hiệu quả nhất, gói gọn trong một nền tảng duy nhất.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 sm:grid-cols-3"
      >
        {LANDING_FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              variants={fadeUpReal}
              transition={{ delay: i * 0.1 } as any}
            >
              <Link href={f.href} className="block group">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:shadow-lg hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <SmartImage
                      src={f.img}
                      alt={f.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      gradient="from-teal-100 to-emerald-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
                    <div
                      className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${f.color}`}
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {f.title}
                      <Sparkles className="h-4 w-4 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{f.desc}</p>
                    <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-teal-700 transition-colors">
                      <span>Trải nghiệm</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
