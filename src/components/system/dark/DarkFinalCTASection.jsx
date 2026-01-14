import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function DarkFinalCTASection() {
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
          className="rounded-[48px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-10 md:p-14 shadow-[0_0_55px_rgba(249,115,22,0.14)] overflow-hidden relative text-center"
        >
          <div className="absolute -top-28 right-[-80px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <h2 className="relative text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Move Forward?
          </h2>

          <p className="relative mt-5 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            If you are in the dark, you are not lost. You are at the beginning.
            Connect with the system and choose direction.
          </p>

          <div className="relative mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="rounded-2xl bg-orange-500 px-8 py-3 font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
              See How Zryoss Works
            </button>

            <button className="rounded-2xl border border-white/15 px-8 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center justify-center gap-2">
              Join as IPP / BPP <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
