import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Cpu, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSHeroSection() {
  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[680px] w-[680px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
        >
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Sparkles size={16} className="text-orange-500" />
              <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
                Business Operating System
              </p>
            </div>

            <h1 className="mt-6 text-3xl md:text-6xl font-extrabold text-white leading-tight">
              A System That Runs Your Business —{" "}
              <span className="text-orange-500">Not Just Supports It</span>
            </h1>

            <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              A Business Operating System (Business OS) is the foundation that allows a
              business to function consistently, scale efficiently, and grow sustainably.
            </p>

            <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Zryoss is built as a{" "}
              <span className="text-white font-semibold">Business Operating System</span>, not
              a service provider.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="rounded-2xl bg-orange-500 px-7 py-3 font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
                See How Zryoss Works
              </button>

              <button className="rounded-2xl border border-white/15 px-7 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center justify-center gap-2">
                Join as IPP / BPP <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Right visual card */}
          <div className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.12)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Cpu size={22} className="text-orange-400" />
              </div>

              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  Zryoss OS Concept
                </p>
                <h3 className="text-white text-xl font-extrabold">
                  System → Execution → Scale
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-white/70 text-sm leading-relaxed">
              Just like a computer cannot function without an OS, a business cannot grow
              without a structured system controlling execution, coordination and scalability.
            </p>

            <div className="relative mt-7 grid grid-cols-2 gap-3">
              <Mini label="Consistency" />
              <Mini label="Coordination" />
              <Mini label="Scalability" />
              <Mini label="Control" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mini({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center">
      <p className="text-white/80 text-xs font-semibold tracking-wide">{label}</p>
    </div>
  );
}
