import React from "react";
import { motion } from "framer-motion";
import { Network, Building2, Users, GraduationCap, HeartPulse, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowEcosystemFitSection() {
  const brands = [
    { icon: Building2, title: "Growth" },
    { icon: Users, title: "HR & Talent" },
    { icon: GraduationCap, title: "Education" },
    { icon: HeartPulse, title: "Healthcare" },
    { icon: Cpu, title: "Technology" },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-44 left-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            Ecosystem alignment
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            How the Ecosystem Fits Together
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Zryoss operates as a central operating system powering multiple independent brands.
            Each brand maintains identity, but follows the same system principles.
          </p>
        </motion.div>

        <div className="mt-14 rounded-[44px] border border-white/10 bg-white/5 p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.10),transparent_60%)] pointer-events-none" />

          {/* Hub */}
          <div className="relative flex flex-col items-center">
            <div className="h-20 w-20 rounded-[26px] border border-orange-500/30 bg-orange-500/15 shadow-[0_0_45px_rgba(249,115,22,0.20)] flex items-center justify-center">
              <Network size={28} className="text-orange-400" />
            </div>
            <p className="mt-4 text-white font-extrabold tracking-wide text-lg">
              Zryoss OS
            </p>
            <p className="text-white/60 text-sm">Central Operating System</p>
          </div>

          {/* Brand chips */}
          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {brands.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-[#0B1220]/50 p-5 text-center hover:border-orange-500/30 transition"
                >
                  <div className="mx-auto h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <p className="mt-4 text-white/85 font-semibold">{b.title}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom line */}
          <div className="relative mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 text-center">
            <p className="text-white font-semibold">
              Horizontal + vertical growth — without losing control.
            </p>
            <p className="mt-2 text-white/70">
              One OS → multiple brands → consistent execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
