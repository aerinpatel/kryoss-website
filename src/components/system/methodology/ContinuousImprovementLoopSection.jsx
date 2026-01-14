import React from "react";
import { motion } from "framer-motion";
import { RefreshCcw, Database, ClipboardList, Settings2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ContinuousImprovementLoopSection() {
  const cycle = [
    { icon: Database, title: "Data collection", desc: "Capture real performance signals." },
    { icon: ClipboardList, title: "Performance review", desc: "Track results & identify gaps." },
    { icon: Settings2, title: "System optimization", desc: "Improve layers based on evidence." },
    { icon: RefreshCcw, title: "Process refinement", desc: "Refine execution continuously." },
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-48 left-[-140px] h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            improvement loop
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Continuous Improvement Loop
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            The methodology evolves through experience — not assumptions.
          </p>
        </motion.div>

        <div className="mt-14 rounded-[44px] border border-white/10 bg-white/5 p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center">
            {cycle.map((c, i) => {
              const Icon = c.icon;
              return (
                <React.Fragment key={i}>
                  <div className="rounded-[30px] border border-white/10 bg-[#0B1220]/55 p-7">
                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon className="text-orange-400" size={22} />
                    </div>

                    <h3 className="mt-5 text-white font-extrabold text-xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-white/65 text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  {i !== cycle.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <ArrowRight className="text-orange-500/70" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="relative mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 text-center">
            <p className="text-white font-semibold">
              The system improves with experience — not guesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
