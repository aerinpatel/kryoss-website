import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Building2,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ZFrameworkLayersSection() {
  const layers = [
    {
      key: "structure",
      title: "Structure",
      icon: Building2,
      badge: "Layer 1",
      desc: "Define how the business is organized — clarity, roles and decision frameworks.",
      bullets: [
        "Positioning & clarity",
        "Roles & responsibilities",
        "Decision-making frameworks",
        "Core process architecture",
      ],
    },
    {
      key: "execution",
      title: "Execution",
      icon: ClipboardCheck,
      badge: "Layer 2",
      desc: "Turn plans into action — with workflows, SOPs and quality controls.",
      bullets: ["SOPs", "Workflow systems", "Performance tracking", "Quality control"],
    },
    {
      key: "scale",
      title: "Scale",
      icon: TrendingUp,
      badge: "Layer 3",
      desc: "Controlled growth — without chaos, through systems and automation.",
      bullets: [
        "Sales & distribution systems",
        "Marketing engines",
        "Partner-led expansion",
        "Tech-driven automation",
      ],
    },
    {
      key: "stability",
      title: "Stability",
      icon: ShieldCheck,
      badge: "Layer 4",
      desc: "Long-term protection — governance, talent, compliance and continuity.",
      bullets: [
        "HR & talent systems",
        "Vendor & partner governance",
        "Compliance & risk management",
        "Operational continuity",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-48 left-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Z-Framework
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            The Zryoss Framework{" "}
            <span className="text-orange-500">(Z-Framework)</span>
          </h2>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            A four-layer framework that works together as one operating system — preparing
            the foundation for each next stage.
          </p>
        </motion.div>

        {/* layers grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((l, idx) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={l.key}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: idx * 0.07 }}
                className="group rounded-[40px] border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition overflow-hidden relative"
              >
                {/* top stripe */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="p-8 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                        {l.badge}
                      </p>
                      <h3 className="mt-2 text-white text-2xl font-extrabold">
                        {l.title}
                      </h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                      <Icon size={22} className="text-orange-400" />
                    </div>
                  </div>

                  <p className="mt-4 text-white/70 leading-relaxed">{l.desc}</p>

                  <div className="mt-6 space-y-3">
                    {l.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 flex items-center justify-between gap-3"
                      >
                        <p className="text-white/80 text-sm font-semibold">{b}</p>
                        <ArrowRight size={16} className="text-orange-500/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="mt-12 rounded-[44px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_45px_rgba(249,115,22,0.10)] text-center">
          <p className="text-white font-semibold text-lg">
            Without structure, effort gets wasted. With structure, effort becomes directional.
          </p>
        </div>
      </div>
    </section>
  );
}
