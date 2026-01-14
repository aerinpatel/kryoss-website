import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSAdvantageSection() {
  const points = [
    "Decisions become structured",
    "Execution becomes predictable",
    "Growth becomes manageable",
    "Risk reduces as scale increases",
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-48 left-[-120px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-center">
          {/* left card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.12)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <ShieldCheck size={22} className="text-orange-400" />
              </div>

              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  System-first advantage
                </p>
                <h3 className="text-white text-xl font-extrabold">
                  Clarity and control at scale
                </h3>
              </div>
            </div>

            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              Instead of firefighting daily issues, businesses operate with clarity and
              control — powered by a system designed to scale.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Mini label="Predictability" />
              <Mini label="Control" />
              <Mini label="Quality" />
              <Mini label="Scale" />
            </div>
          </motion.div>

          {/* right content */}
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
                Advantage
              </p>
            </div>

            <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              The Advantage of a{" "}
              <span className="text-orange-500">System-First</span> Approach
            </h2>

            <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
              With the Zryoss Business Operating System:
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                  <p className="text-white/80 font-semibold">{p}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-white/70">
              Instead of firefighting daily issues, businesses operate with{" "}
              <span className="text-white font-semibold">clarity and control.</span>
            </p>
          </motion.div>
        </div>
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
