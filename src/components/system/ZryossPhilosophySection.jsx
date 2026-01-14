import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ZryossPhilosophySection() {
  const beliefs = [
    {
      left: "You don’t need luck —",
      right: "you need structure",
    },
    {
      left: "You don’t need motivation —",
      right: "you need a system",
    },
    {
      left: "You don’t need to do everything alone —",
      right: "you need an ecosystem",
    },
  ];

  const direction = [
    { from: "Confusion", to: "Clarity" },
    { from: "Struggle", to: "Structure" },
    { from: "Effort", to: "Execution" },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      {/* glow bg */}
      <div className="absolute -top-44 left-0 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-44 right-0 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
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
              Philosophy
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            The <span className="text-orange-500">Zryoss Philosophy</span>
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
            Zryoss exists to give people direction — through systems, structure and an
            ecosystem that supports execution.
          </p>
        </motion.div>

        {/* layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Belief cards */}
          <div className="space-y-5">
            {beliefs.map((b, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                    <Quote size={20} className="text-orange-400" />
                  </div>

                  <p className="text-white text-lg md:text-xl font-bold leading-snug">
                    <span className="text-white/80">{b.left}</span>{" "}
                    <span className="text-orange-400">{b.right}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Direction timeline */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_45px_rgba(249,115,22,0.12)] overflow-hidden relative"
          >
            {/* inner glow */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <h3 className="relative text-white font-extrabold text-2xl leading-snug">
              From struggle to direction.
            </h3>

            <p className="relative mt-3 text-white/70 text-sm leading-relaxed">
              Zryoss is designed to move people forward — with clarity, structure, and
              execution.
            </p>

            {/* timeline */}
            <div className="relative mt-8 space-y-5">
              {direction.map((d, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/55 p-5 flex items-center justify-between gap-4"
                >
                  <span className="text-white/70 font-semibold text-base">
                    {d.from}
                  </span>

                  <div className="flex items-center gap-2 text-orange-400">
                    <span className="h-[2px] w-10 bg-orange-500/60 rounded-full" />
                    <ArrowRight size={18} />
                  </div>

                  <span className="text-white font-extrabold text-base">
                    {d.to}
                  </span>
                </div>
              ))}
            </div>

            {/* closing statement */}
            <div className="relative mt-8 rounded-2xl border border-white/10 bg-[#0B1220]/70 p-6">
              <p className="text-white font-semibold leading-relaxed">
                Zryoss exists to bring direction.
              </p>
              <p className="mt-2 text-orange-300 font-semibold">
                From confusion → clarity. From effort → execution.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
