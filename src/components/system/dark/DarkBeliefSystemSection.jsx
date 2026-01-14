import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function DarkBeliefSystemSection() {
  const beliefs = [
    { a: "You don’t need luck —", b: "you need structure" },
    { a: "You don’t need hype —", b: "you need execution" },
    { a: "You don’t need to be everywhere —", b: "you need direction" },
    { a: "You don’t need to do it alone —", b: "you need a system" },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-48 left-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

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
            belief system
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            The Zryoss Belief System
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            These beliefs shape every layer of the Zryoss ecosystem.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beliefs.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-7 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
            >
              <div className="h-11 w-11 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Quote className="text-orange-400" size={18} />
              </div>

              <p className="mt-5 text-white font-bold leading-snug">
                <span className="text-white/80">{b.a}</span>{" "}
                <span className="text-orange-400">{b.b}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
