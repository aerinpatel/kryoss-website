import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Cpu, ShieldCheck, Target, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowWhyItWorksSection() {
  const points = [
    {
      icon: Cpu,
      title: "System-driven",
      desc: "Not personality-driven. The framework works even when people change.",
    },
    {
      icon: Target,
      title: "Execution-focused",
      desc: "Not advice-based. Every step is designed for delivery.",
    },
    {
      icon: ShieldCheck,
      title: "Scalable",
      desc: "Not founder-dependent. Growth becomes stable.",
    },
    {
      icon: Users,
      title: "Ecosystem-powered",
      desc: "Not isolated. You get layers of support across functions.",
    },
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
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Why it works
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            What Makes This System Work
          </h2>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Zryoss works because it brings order to complexity and direction to effort.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
              >
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                  <Icon size={22} className="text-orange-400" />
                </div>
                <h3 className="mt-5 text-white font-extrabold text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="mt-12 rounded-[40px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_45px_rgba(249,115,22,0.10)]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-orange-400 mt-0.5" />
            <p className="text-white/85 text-lg font-semibold leading-relaxed">
              Different people. Different businesses.{" "}
              <span className="text-orange-400">One operating system.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
