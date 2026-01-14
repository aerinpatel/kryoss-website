import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Building2, ClipboardCheck, TrendingUp, LifeBuoy } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSLayersSection() {
  const layers = [
    {
      id: "01",
      title: "Structure Layer",
      icon: Building2,
      points: [
        "Roles and responsibilities",
        "Process frameworks",
        "Decision-making models",
      ],
    },
    {
      id: "02",
      title: "Execution Layer",
      icon: ClipboardCheck,
      points: ["SOPs", "Quality checks", "Performance tracking"],
    },
    {
      id: "03",
      title: "Growth Layer",
      icon: TrendingUp,
      points: ["Sales & distribution systems", "Marketing engines", "Partner-led expansion"],
    },
    {
      id: "04",
      title: "Support Layer",
      icon: LifeBuoy,
      points: ["HR & talent systems", "Technology infrastructure", "Vendor & compliance support"],
    },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -bottom-48 left-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
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
              Working Layers
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            How the Zryoss Business OS Works
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
            The Business OS works through clearly defined layers. Each layer operates
            independently, yet stays connected through one system.
          </p>
        </motion.div>

        {/* layers grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((l, idx) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: idx * 0.08 }}
                className="rounded-[34px] border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                        Layer {l.id}
                      </p>
                      <h3 className="mt-2 text-white font-extrabold text-2xl">
                        {l.title}
                      </h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                      <Icon size={22} className="text-orange-400" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {l.points.map((p, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3"
                      >
                        <p className="text-white/80 font-semibold">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
