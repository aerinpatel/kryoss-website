import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSVsTraditionalSection() {
  const traditional = [
    "Founder-dependent",
    "Service-driven",
    "Difficult to scale",
    "Inconsistent outcomes",
  ];

  const osModel = [
    "System-driven",
    "Execution-focused",
    "Designed for scale",
    "Repeatable and stable",
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            Comparison
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
            Business OS vs Traditional Business Models
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Zryoss builds systems that perform regardless of who is operating them.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Traditional */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[34px] border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-white font-extrabold text-2xl">Traditional Model</h3>
            <ul className="mt-6 space-y-4">
              {traditional.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-white/35 mt-0.5" />
                  <span className="text-white/75 font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="h-full w-px bg-white/10" />
            <div className="absolute h-12 w-12 rounded-full border border-white/10 bg-[#0B1220]/65 flex items-center justify-center shadow-[0_0_22px_rgba(249,115,22,0.12)]">
              <ArrowRight className="text-orange-500" />
            </div>
          </div>

          {/* Zryoss OS Model */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 shadow-[0_0_40px_rgba(249,115,22,0.10)]"
          >
            <h3 className="text-white font-extrabold text-2xl">
              Zryoss Business OS Model
            </h3>

            <ul className="mt-6 space-y-4">
              {osModel.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                  <span className="text-white/85 font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
