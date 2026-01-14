import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Building2, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSWhoNeedsSection() {
  const audience = [
    {
      icon: Users,
      title: "Individuals building their first brand",
      desc: "Turn ideas into structured businesses with support.",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurs managing growing businesses",
      desc: "Replace chaos with systems that scale.",
    },
    {
      icon: Building2,
      title: "Companies struggling with execution",
      desc: "Build predictable execution with SOPs and structure.",
    },
    {
      icon: Target,
      title: "Organizations planning long-term scale",
      desc: "Create stability and growth that lasts.",
    },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

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
            Who it’s for
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Who Needs a Business Operating System?
          </h2>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            If your business depends entirely on you, it is not scalable.
            If it runs on a system, it is sustainable.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audience.map((a, idx) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: idx * 0.07 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
              >
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                  <Icon size={22} className="text-orange-400" />
                </div>

                <h3 className="mt-5 text-white font-extrabold text-lg leading-snug">
                  {a.title}
                </h3>

                <p className="mt-2 text-white/65 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
