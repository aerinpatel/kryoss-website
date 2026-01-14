import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, XCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSWhyBreakSection() {
  const reasons = [
    "Decisions depend on individuals",
    "Processes are undocumented",
    "Execution is inconsistent",
    "Growth creates chaos instead of stability",
  ];

  const outcomes = [
    "Scaling increases risk",
    "Quality drops",
    "Teams lose direction",
    "Founders burn out",
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-48 left-[-120px] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          <div>
            <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Why Most Businesses Break Without a System
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Many businesses start with energy, ideas and ambition — but fail to sustain
              growth. The problem is rarely talent. The problem is structure.
            </p>

            <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-orange-400" />
                <p className="text-white font-bold">Without structure:</p>
              </div>

              <ul className="mt-4 space-y-3">
                {reasons.map((r, i) => (
                  <li key={i} className="flex gap-3">
                    <XCircle size={18} className="text-white/35 mt-0.5" />
                    <span className="text-white/75">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 shadow-[0_0_40px_rgba(249,115,22,0.10)]">
            <h3 className="text-white text-xl font-extrabold">
              The Cost of No System
            </h3>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Without a system, growth amplifies instability instead of creating momentum.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/45 p-4"
                >
                  <p className="text-white/85 font-semibold">{o}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-white/70">
              A Business OS solves this problem at the root level.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
