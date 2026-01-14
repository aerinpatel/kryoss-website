import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Network,
  Building2,
  Users,
  GraduationCap,
  HeartPulse,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function ZryossEcosystemSection() {
  const nodes = [
    {
      icon: Building2,
      title: "Business Growth",
      tag: "Vyombiz",
    },
    {
      icon: Users,
      title: "Hiring & HR",
      tag: "Clink HR",
    },
    {
      icon: GraduationCap,
      title: "Education & Skills",
      tag: "Edulinker",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      tag: "Medikryoss",
    },
    {
      icon: Cpu,
      title: "Technology",
      tag: "Kryoss Softech",
    },
  ];

  const benefits = [
    "Better coordination",
    "Faster execution",
    "Lower risk",
    "Higher scalability",
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      {/* bg glows */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[650px] w-[650px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-48 right-[-120px] h-[550px] w-[550px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
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
              Ecosystem
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Zryoss as an <span className="text-orange-500">Ecosystem</span>
          </h2>

          <p className="mt-5 text-white/70 leading-relaxed text-base md:text-lg">
            Zryoss operates as a parent system that powers multiple specialized brands
            across domains like business growth, HR, education, healthcare and technology.
            Each brand works independently — but stays connected through one central
            operating system: <span className="text-white font-semibold">Zryoss</span>.
          </p>
        </motion.div>

        {/* ecosystem map */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Map UI */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative rounded-[36px] border border-white/10 bg-white/5 p-6 md:p-10 overflow-hidden"
          >
            {/* inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.10),transparent_65%)] pointer-events-none" />

            {/* hub */}
            <div className="relative mx-auto flex items-center justify-center">
              <div className="relative">
                <div className="h-28 w-28 md:h-32 md:w-32 rounded-[28px] bg-orange-500/15 border border-orange-500/30 shadow-[0_0_45px_rgba(249,115,22,0.25)] flex items-center justify-center">
                  <div className="h-16 w-16 rounded-2xl bg-[#0B1220]/70 border border-white/10 flex items-center justify-center">
                    <Network className="text-orange-400" size={28} />
                  </div>
                </div>

                <p className="mt-4 text-center text-white font-extrabold tracking-wide">
                  Zryoss OS
                </p>
                <p className="text-center text-white/50 text-xs">
                  Central Operating System
                </p>
              </div>
            </div>

            {/* connector lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] md:h-[420px] md:w-[420px] rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-full border border-white/10" />
            </div>

            {/* nodes */}
            <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nodes.map((n, i) => {
                const Icon = n.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-[#0B1220]/40 p-4 hover:border-orange-500/30 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        <Icon size={20} className="text-orange-500" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-bold truncate">{n.title}</p>
                        <p className="text-white/55 text-sm truncate">{n.tag}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Explanation / Benefits */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="rounded-[36px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_40px_rgba(249,115,22,0.10)]"
          >
            <h3 className="text-white text-2xl font-extrabold leading-snug">
              One engine powering multiple specialized brands.
            </h3>

            <p className="mt-4 text-white/70 leading-relaxed">
              This ecosystem approach ensures that every brand benefits from shared
              structure, processes and execution support — while keeping its own identity.
            </p>

            {/* benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/40 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="text-orange-400 mt-0.5" size={18} />
                  <p className="text-white/80 font-semibold">{b}</p>
                </div>
              ))}
            </div>

            {/* bottom note */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0B1220]/55 p-5">
              <p className="text-white font-semibold">
                Independent brands. Connected execution.
              </p>
              <p className="mt-1 text-orange-300 font-semibold">
                One ecosystem. One system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
