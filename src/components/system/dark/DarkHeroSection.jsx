import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function DarkHeroSection() {
  return (
    <section className="relative bg-[#070A0F] py-16 md:py-24 overflow-hidden">
      {/* cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_55%)]" />
      <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Dark to Direction
            </p>
          </div>

          <h1 className="mt-6 text-4xl md:text-7xl font-extrabold text-white leading-tight">
            From <span className="text-orange-500">Confusion</span> to Clarity.
            <br />
            From <span className="text-orange-500">Effort</span> to Execution.
          </h1>

          <p className="mt-6 text-white/70 text-base md:text-xl leading-relaxed">
            Most people are not failing. They are simply stuck — between ideas and execution,
            effort and results, ambition and structure.
          </p>

          <div className="mt-10 rounded-[40px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_55px_rgba(249,115,22,0.14)]">
            <p className="text-white text-xl md:text-2xl font-extrabold">
              Zryoss exists to guide this journey —
              <span className="text-orange-400"> from darkness to direction.</span>
            </p>
            <p className="mt-3 text-white/65">
              Not motivation. Not hype. A system.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
