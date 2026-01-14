import React from "react";
import { motion } from "framer-motion";
import { Network, Building2, Users, GraduationCap, HeartPulse, Cpu } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSEcosystemSection() {
  const domains = [
    { icon: Building2, title: "Growth" },
    { icon: Users, title: "HR & Talent" },
    { icon: GraduationCap, title: "Education" },
    { icon: HeartPulse, title: "Healthcare" },
    { icon: Cpu, title: "Technology" },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -bottom-48 left-[-120px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[40px] border border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Network size={22} className="text-orange-400" />
              </div>
              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  Business OS Ecosystem
                </p>
                <h2 className="text-white text-2xl md:text-4xl font-extrabold">
                  Business OS as an Ecosystem
                </h2>
              </div>
            </div>

            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-4xl">
              The Zryoss Business OS does not operate in isolation. It powers an
              ecosystem of specialized brands and partners across multiple domains.
              Each one follows the same operating principles — ensuring consistency and
              coordinated execution.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
              {domains.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={i}
                    className="rounded-3xl border border-white/10 bg-[#0B1220]/45 p-5 text-center hover:border-orange-500/30 transition"
                  >
                    <div className="mx-auto h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon className="text-orange-400" size={22} />
                    </div>
                    <p className="mt-4 text-white/85 font-semibold">{d.title}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
              <p className="text-white font-semibold">
                Independent brands. Same operating principles.
              </p>
              <p className="mt-1 text-white/70">
                Faster execution • Better coordination • Long-term reliability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
