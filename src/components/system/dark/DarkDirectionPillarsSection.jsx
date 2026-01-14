import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ListTodo, Clock3, Settings, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function DarkDirectionPillarsSection() {
  const pillars = [
    { icon: ListTodo, title: "What to do", desc: "Clear steps, not confusion." },
    { icon: Clock3, title: "When to do it", desc: "Sequence matters — timing becomes structured." },
    { icon: Settings, title: "How to do it", desc: "Frameworks, SOPs and operating models." },
    { icon: Users, title: "Who supports it", desc: "Ecosystem support replaces isolation." },
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
            direction
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Direction Comes from <span className="text-orange-500">Systems</span>
          </h2>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Direction is not a feeling. It is a result of knowing exactly what to do, when to do it, how to do it, and who supports it.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
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

        <div className="mt-12 rounded-[40px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-10 shadow-[0_0_45px_rgba(249,115,22,0.10)]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-orange-400 mt-0.5" />
            <p className="text-white/85 text-lg font-semibold leading-relaxed">
              Zryoss organizes effort into a{" "}
              <span className="text-orange-400">working operating system</span>.
              You stop guessing. You start executing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
