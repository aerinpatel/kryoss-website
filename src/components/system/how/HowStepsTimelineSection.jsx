import React from "react";
import { motion } from "framer-motion";
import { Link2, Route, Hammer, Zap, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowStepsTimelineSection() {
  const steps = [
    {
      id: "01",
      title: "Connect with the System",
      icon: Link2,
      desc:
        "Start by connecting with Zryoss. Instead of starting from zero, you begin with a system already in place.",
      bullets: ["Proven business framework", "Execution support", "Existing ecosystem"],
    },
    {
      id: "02",
      title: "Choose Your Path (IPP or BPP)",
      icon: Route,
      desc:
        "Pick the path that matches your stage today — individual growth or business scaling.",
      bullets: ["IPP: individuals", "BPP: businesses", "Structured partner paths"],
    },
    {
      id: "03",
      title: "Build Using the Framework",
      icon: Hammer,
      desc:
        "Zryoss provides a structured build process so you don’t figure everything out alone.",
      bullets: ["Positioning & structure", "Processes & workflows", "Systems setup"],
    },
    {
      id: "04",
      title: "Execute with Ecosystem Support",
      icon: Zap,
      desc:
        "Execution is where most fail. Zryoss solves this through ecosystem-led support layers.",
      bullets: ["Marketing engines", "HR & talent", "Tech & automation"],
    },
    {
      id: "05",
      title: "Scale Without Chaos",
      icon: TrendingUp,
      desc:
        "As growth happens, the OS ensures stability — roles, quality control, predictable systems.",
      bullets: ["Accountability", "Quality control", "Reduced dependency"],
    },
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
            Step-by-step system
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            A Predictable Journey — Not a Gamble
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            You always know what step you’re on, what comes next, and what support is available.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: idx * 0.07 }}
                className="rounded-[34px] border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                        Step {s.id}
                      </p>
                      <h3 className="mt-2 text-white text-2xl font-extrabold">
                        {s.title}
                      </h3>
                    </div>

                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                      <Icon size={22} className="text-orange-400" />
                    </div>
                  </div>

                  <p className="mt-4 text-white/70 leading-relaxed">{s.desc}</p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {s.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center"
                      >
                        <p className="text-white/80 text-xs font-semibold">{b}</p>
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
