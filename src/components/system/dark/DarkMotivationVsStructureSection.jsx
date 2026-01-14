import React from "react";
import { motion } from "framer-motion";
import { Flame, Grid2X2, XCircle, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function DarkMotivationVsStructureSection() {
  const withoutSystem = [
    "Effort becomes scattered",
    "Decisions become emotional",
    "Growth becomes unpredictable",
  ];

  const withSystem = [
    "Clarity replaces confusion",
    "Execution becomes consistent",
    "Growth becomes structured",
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            truth
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Why Motivation Is <span className="text-orange-500">Not Enough</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Motivation fades. Energy fluctuates. Confidence breaks under pressure. What remains is structure.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Without system */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-9"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Flame size={22} className="text-white/60" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold tracking-widest uppercase">
                  motivation-only
                </p>
                <h3 className="text-white text-2xl font-extrabold">Without a System</h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {withoutSystem.map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/45 p-4 flex items-start gap-3"
                >
                  <XCircle size={18} className="text-white/35 mt-0.5" />
                  <p className="text-white/75 font-semibold">{x}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* With structure */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[40px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-9 shadow-[0_0_45px_rgba(249,115,22,0.10)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Grid2X2 size={22} className="text-orange-400" />
              </div>
              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  system-first
                </p>
                <h3 className="text-white text-2xl font-extrabold">With Zryoss</h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {withSystem.map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/45 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                  <p className="text-white/85 font-semibold">{x}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-white/70">
              Zryoss replaces uncertainty with <span className="text-white font-semibold">clarity and structure</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
