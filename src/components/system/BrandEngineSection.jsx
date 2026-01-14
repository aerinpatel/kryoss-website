import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Cpu, Rocket, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function BrandEngineSection() {
  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      {/* glows */}
      <div className="absolute -top-44 left-0 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-44 right-0 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <Sparkles size={16} className="text-orange-500" />
              <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
                Operating Foundation
              </p>
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Your Brand.{" "}
              <span className="text-orange-500">Our Engine.</span>
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed text-base md:text-lg max-w-2xl">
              Zryoss does not take ownership of your vision. It provides the engine
              that powers it.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg max-w-2xl">
              Whether you are starting your journey or scaling an existing one, Zryoss
              gives you the{" "}
              <span className="text-white font-semibold">
                operating foundation
              </span>{" "}
              to move forward with confidence.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="rounded-2xl bg-orange-500 px-7 py-3 font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
                Explore the System
              </button>

              <button className="rounded-2xl border border-white/15 px-7 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center justify-center gap-2">
                Join as IPP / BPP <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT ENGINE CARD */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.12)] overflow-hidden relative"
          >
            {/* inner glow */}
            <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Cpu size={22} className="text-orange-400" />
              </div>

              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  The Engine
                </p>
                <h3 className="text-white text-xl font-extrabold">
                  System-powered execution
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-white/70 text-sm leading-relaxed">
              A structured engine designed to turn vision into operations — and
              operations into scalable growth.
            </p>

            {/* mini feature blocks */}
            <div className="relative mt-7 grid grid-cols-1 gap-4">
              <MiniFeature
                icon={Rocket}
                title="Speed with structure"
                text="Execution that doesn’t break at scale."
              />
              <MiniFeature
                icon={Shield}
                title="Lower risk"
                text="Governance + process-backed growth."
              />
              <MiniFeature
                icon={Cpu}
                title="Operating foundation"
                text="Technology + ecosystem support."
              />
            </div>

            {/* bottom highlight */}
            <div className="relative mt-7 rounded-2xl border border-white/10 bg-[#0B1220]/60 p-6">
              <p className="text-white font-semibold">
                Your vision stays yours.
              </p>
              <p className="mt-1 text-orange-300 font-semibold">
                We power the engine behind it.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function MiniFeature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/40 p-5 flex items-start gap-4">
      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
        <Icon size={20} className="text-orange-400" />
      </div>
      <div>
        <p className="text-white font-bold">{title}</p>
        <p className="mt-1 text-white/60 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
