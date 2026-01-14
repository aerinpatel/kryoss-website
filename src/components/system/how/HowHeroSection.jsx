import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowHeroSection() {
  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      {/* glows */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              How Zryoss Works
            </p>
          </div>

          <h1 className="mt-6 text-3xl md:text-6xl font-extrabold text-white leading-tight">
            A Clear System. A Structured Path.{" "}
            <span className="text-orange-500">A Scalable Outcome.</span>
          </h1>

          <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
            Zryoss is designed to remove confusion from business building. It does not rely
            on motivation, guesswork, or individual effort alone.
          </p>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            It works through a{" "}
            <span className="text-white font-semibold">step-by-step operating system</span>{" "}
            that guides individuals and businesses to a structured, scalable brand.
          </p>

          {/* Progress pill */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Pill label="Connect" />
            <Pill label="Choose Path" />
            <Pill label="Build" />
            <Pill label="Execute" />
            <Pill label="Scale" />
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="rounded-2xl bg-orange-500 px-8 py-3 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
              Become an IPP
            </button>

            <button className="rounded-2xl border border-white/15 px-8 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center justify-center gap-2">
              Become a BPP <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ label }) {
  return (
    <div className="rounded-full border border-white/10 bg-[#0B1220]/55 px-5 py-2 text-white/80 text-sm font-semibold">
      {label}
    </div>
  );
}
