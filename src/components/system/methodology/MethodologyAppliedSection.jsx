import React from "react";
import { motion } from "framer-motion";
import { FileText, BookOpenCheck, Users, LineChart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function MethodologyAppliedSection() {
  const items = [
    {
      icon: FileText,
      title: "System templates",
      desc: "Ready-to-use system assets so businesses don’t start from scratch.",
    },
    {
      icon: BookOpenCheck,
      title: "Execution playbooks",
      desc: "Step-by-step operating playbooks to guide implementation.",
    },
    {
      icon: Users,
      title: "Ecosystem support",
      desc: "Specialized support layers aligned to the same methodology.",
    },
    {
      icon: LineChart,
      title: "Continuous monitoring",
      desc: "Performance visibility so execution stays stable at scale.",
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
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start"
        >
          <div className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.12)]">
            <h2 className="text-white text-2xl md:text-4xl font-extrabold leading-tight">
              How the Methodology is Applied
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              The Zryoss Methodology is not theoretical. It is applied through practical
              assets, execution systems and monitoring.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220]/55 p-5">
              <p className="text-white font-semibold">
                Each partner follows the same methodology —
              </p>
              <p className="mt-1 text-orange-300 font-semibold">
                while maintaining their own identity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <div
                  key={i}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
                >
                  <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <h3 className="mt-5 text-white font-extrabold text-lg">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-white/65 text-sm leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
