import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Moon, Focus, Crosshair, Compass } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function DarkJourneyTimelineSection() {
  const journey = [
    { icon: Moon, title: "Dark", desc: "Silence. Reality. Honesty." },
    { icon: Focus, title: "Discipline", desc: "Focus replaces distraction." },
    { icon: Crosshair, title: "Precision", desc: "Effort becomes process." },
    { icon: Compass, title: "Direction", desc: "Execution becomes predictable." },
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
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            journey
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            From Darkness to Direction — <span className="text-orange-500">With Structure</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            The goal is not to escape the dark — the goal is to move through it with structure.
          </p>
        </motion.div>

        <div className="mt-14 rounded-[44px] border border-white/10 bg-white/5 p-10 md:p-14 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-6">
            {journey.map((j, i) => {
              const Icon = j.icon;
              return (
                <div key={i} className="flex-1">
                  <div className="rounded-[30px] border border-white/10 bg-[#0B1220]/55 p-7 h-full">
                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon size={22} className="text-orange-400" />
                    </div>

                    <h3 className="mt-5 text-white font-extrabold text-xl">
                      {j.title}
                    </h3>
                    <p className="mt-2 text-white/65 text-sm leading-relaxed">
                      {j.desc}
                    </p>
                  </div>

                  {/* arrow */}
                  {i !== journey.length - 1 && (
                    <div className="hidden lg:flex justify-center py-4">
                      <ArrowRight className="text-orange-500/70" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 text-center">
            <p className="text-white font-semibold">
              Dark does not mean negative.
            </p>
            <p className="mt-2 text-white/70">
              It represents focus, honesty and discipline — where clarity begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
