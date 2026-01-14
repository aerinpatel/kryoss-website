import React from "react";
import { motion } from "framer-motion";
import { Moon, Briefcase, TrendingDown, Compass } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function DarkRealitySection() {
  const points = [
    { icon: Briefcase, title: "Jobs feel limited", desc: "You work hard, but options feel narrow." },
    { icon: TrendingDown, title: "Business feels unstable", desc: "Growth is unpredictable, outcomes inconsistent." },
    { icon: Moon, title: "Effort feels invisible", desc: "You try daily, but progress looks silent." },
    { icon: Compass, title: "Direction feels missing", desc: "You want more, but don’t know the next step." },
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
            Reality check
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            The Reality of the Dark Phase
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            The dark phase is not weakness. It is uncertainty — common, but rarely acknowledged.
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
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 hover:border-orange-500/30 hover:bg-white/[0.07] transition"
              >
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                  <Icon size={22} className="text-orange-400" />
                </div>
                <h3 className="mt-5 text-white font-extrabold text-lg">{p.title}</h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
