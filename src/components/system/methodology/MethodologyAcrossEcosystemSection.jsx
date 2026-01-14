import React from "react";
import { motion } from "framer-motion";
import { Network, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function MethodologyAcrossEcosystemSection() {
  const benefits = [
    "Alignment across teams",
    "Consistent quality",
    "Faster execution",
    "Reduced operational risk",
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[48px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-10 md:p-14 shadow-[0_0_55px_rgba(249,115,22,0.14)] overflow-hidden relative"
        >
          <div className="absolute -top-28 right-[-80px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/60 flex items-center justify-center">
              <Network className="text-orange-400" size={22} />
            </div>
            <div>
              <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                ecosystem alignment
              </p>
              <h2 className="text-white text-2xl md:text-4xl font-extrabold">
                Methodology Across the Ecosystem
              </h2>
            </div>
          </div>

          <p className="relative mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-4xl">
            All brands and partners follow the same methodology — creating consistency,
            alignment, and repeatable execution at scale.
          </p>

          <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-[28px] border border-white/10 bg-[#0B1220]/45 p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-400 mt-0.5" size={18} />
                  <p className="text-white/85 font-semibold">{b}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="relative mt-10 text-white font-semibold text-lg text-center">
            Different brands.{" "}
            <span className="text-orange-400">One operating logic.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
