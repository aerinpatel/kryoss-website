import React from "react";
import { motion } from "framer-motion";
import { User, Building2, ArrowUpRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HowPathSection() {
  const ipp = [
    "Job seekers",
    "Freelancers",
    "Solo entrepreneurs",
    "Build independent brands with guided execution",
  ];

  const bpp = [
    "Small & mid-sized businesses",
    "Agencies & consultants",
    "Growing startups",
    "Integrate business into Zryoss OS for scalability",
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
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
            Partner paths
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Choose Your Path: <span className="text-orange-500">IPP</span> or{" "}
            <span className="text-orange-500">BPP</span>
          </h2>

          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Zryoss works through two structured partner paths based on where you are today.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* IPP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-9 hover:border-orange-500/30 transition"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                  <User size={22} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                    IPP
                  </p>
                  <h3 className="text-white text-2xl font-extrabold">
                    Individual Platform Partner
                  </h3>
                </div>
              </div>

              <button className="rounded-2xl border border-white/15 px-4 py-2 text-white/85 font-semibold hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center gap-2">
                Become IPP <ArrowUpRight size={16} />
              </button>
            </div>

            <p className="mt-5 text-white/70 leading-relaxed">
              For individuals who want to build their own brand or income stream using a system.
            </p>

            <div className="mt-7 space-y-3">
              {ipp.map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/45 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                  <p className="text-white/85 font-semibold">{x}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BPP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[40px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-9 shadow-[0_0_45px_rgba(249,115,22,0.10)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                  <Building2 size={22} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                    BPP
                  </p>
                  <h3 className="text-white text-2xl font-extrabold">
                    Business Platform Partner
                  </h3>
                </div>
              </div>

              <button className="rounded-2xl bg-orange-500 px-4 py-2 text-white font-bold hover:bg-orange-600 transition inline-flex items-center gap-2 shadow-[0_0_18px_rgba(249,115,22,0.35)]">
                Become BPP <ArrowUpRight size={16} />
              </button>
            </div>

            <p className="mt-5 text-white/70 leading-relaxed">
              For founders and businesses who want to scale with structure and operating support.
            </p>

            <div className="mt-7 space-y-3">
              {bpp.map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-[#0B1220]/45 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                  <p className="text-white/85 font-semibold">{x}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
