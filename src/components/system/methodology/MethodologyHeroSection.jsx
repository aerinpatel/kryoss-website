import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function MethodologyHeroSection() {
  return (
    <section className="relative bg-[#070A0F] py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 h-[820px] w-[820px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Zryoss Methodology
            </p>
          </div>

          <h1 className="mt-6 text-4xl md:text-7xl font-extrabold text-white leading-tight">
            A Structured Framework for{" "}
            <span className="text-orange-500">Sustainable Businesses</span>
          </h1>

          <p className="mt-6 text-white/70 text-base md:text-xl leading-relaxed">
            Zryoss Methodology is the{" "}
            <span className="text-white font-semibold">core execution framework</span>{" "}
            powering the entire ecosystem — defining how businesses are built, operated
            and scaled through a repeatable system.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="rounded-2xl bg-orange-500 px-8 py-3 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
              See How Zryoss Works
            </button>

            <button className="rounded-2xl border border-white/15 px-8 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center justify-center gap-2">
              Join as IPP / BPP <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="mt-12 rounded-[42px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_55px_rgba(249,115,22,0.14)]">
            <div className="flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/60 flex items-center justify-center">
                <Layers className="text-orange-400" size={22} />
              </div>
              <div className="text-left">
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  Z-Framework
                </p>
                <p className="text-white font-extrabold text-xl">
                  Structure • Execution • Scale • Stability
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
