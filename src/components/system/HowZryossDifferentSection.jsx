import { motion } from "framer-motion";
import { Quote, XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import GlowDivider from "../common/GlowDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function HowZryossDifferentSection() {
  const traditional = [
    "Service-based",
    "Founder-dependent",
    "Hard to scale",
    "Inconsistent results",
  ];

  const zryoss = [
    "System-first",
    "Execution-driven",
    "Ecosystem-supported",
    "Scalable and repeatable",
  ];

  return (
    <section className="relative bg-[#070A0F] py-16 md:py-24 overflow-hidden">
      {/* glow bg */}
      <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Difference
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            How <span className="text-orange-500">Zryoss</span> is Different
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
            Most platforms focus on selling. Zryoss focuses on the system you need to
            build for long-term stability and growth.
          </p>
        </motion.div>

        {/* ✅ Animated divider */}
        <GlowDivider />

        {/* Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Most platforms */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl border border-white/10 bg-[#0B1220]/60 flex items-center justify-center">
                <Quote size={18} className="text-white/70" />
              </div>

              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                Most Platforms Ask
              </p>
            </div>

            <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-white leading-snug">
              “What do you want to sell?”
            </h3>

            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              This mindset creates dependency on services and short-term actions rather
              than building stability.
            </p>
          </motion.div>

          {/* Zryoss asks */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
            className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-8 shadow-[0_0_35px_rgba(249,115,22,0.12)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl border border-white/10 bg-[#0B1220]/40 flex items-center justify-center">
                <Quote size={18} className="text-orange-400" />
              </div>

              <p className="text-orange-300 text-sm font-semibold uppercase tracking-widest">
                Zryoss Asks
              </p>
            </div>

            <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-white leading-snug">
              “What system do you need to build?”
            </h3>

            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Because long-term growth comes from systems — not luck, hype or dependency.
            </p>
          </motion.div>
        </div>

        {/* Compare */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Traditional */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h4 className="text-xl font-extrabold text-white">
              Traditional Approach
            </h4>

            <ul className="mt-6 space-y-4">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle size={18} className="text-white/40 mt-0.5" />
                  <p className="text-white/70">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="h-full w-px bg-white/10" />
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              <div className="h-12 w-12 rounded-full border border-white/10 bg-[#0B1220]/60 flex items-center justify-center shadow-[0_0_22px_rgba(249,115,22,0.14)]">
                <ArrowRight className="text-orange-500" />
              </div>
            </motion.div>
          </div>

          {/* Zryoss */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-8 shadow-[0_0_35px_rgba(249,115,22,0.12)]"
          >
            <h4 className="text-xl font-extrabold text-white">Zryoss Approach</h4>

            <ul className="mt-6 space-y-4">
              {zryoss.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                  <p className="text-white/85">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
