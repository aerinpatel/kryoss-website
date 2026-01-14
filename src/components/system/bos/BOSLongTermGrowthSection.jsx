import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSLongTermGrowthSection() {
  const bullets = [
    "Adapt with market changes",
    "Scale across industries",
    "Support multiple brands",
    "Maintain quality over time",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Built to Last
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Built for <span className="text-orange-500">Long-Term Growth</span>
          </h2>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            The Zryoss Business Operating System is not a short-term solution or temporary
            framework. As your business grows, the system grows with you.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                <p className="text-white/85 font-semibold leading-snug">{b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
