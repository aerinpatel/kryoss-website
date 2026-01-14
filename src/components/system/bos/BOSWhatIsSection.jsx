import React from "react";
import { motion } from "framer-motion";
import { Layers, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function BOSWhatIsSection() {
  const includes = [
    "Strategy and structure",
    "Execution and operations",
    "Sales and marketing",
    "Technology and automation",
    "Talent, vendors, and compliance",
  ];

  return (
    <section className="relative bg-[#0B0F14] py-16 md:py-24 overflow-hidden">
      <div className="absolute -top-40 right-[-120px] h-[540px] w-[540px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start"
        >
          {/* left content */}
          <div>
            <p className="text-orange-500 font-semibold tracking-widest text-xs uppercase">
              What it is
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              What is the Zryoss Business Operating System?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
              The Zryoss Business Operating System is a{" "}
              <span className="text-white font-semibold">
                centralized framework
              </span>{" "}
              that manages how a business is built, operated, and scaled.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
              Instead of managing everything separately, the Business OS{" "}
              <span className="text-white font-semibold">
                aligns all parts of the business under one system.
              </span>
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includes.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-orange-400 mt-0.5" />
                    <p className="text-white/85 font-semibold leading-snug">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right card */}
          <div className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.12)] overflow-hidden relative">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/55 flex items-center justify-center">
                <Layers size={22} className="text-orange-400" />
              </div>

              <div>
                <p className="text-orange-300 text-xs font-semibold tracking-widest uppercase">
                  Centralized Framework
                </p>
                <h3 className="text-white text-xl font-extrabold">
                  One system. One operating foundation.
                </h3>
              </div>
            </div>

            <p className="relative mt-5 text-white/70 text-sm leading-relaxed">
              Structure is not paperwork — it’s the mechanism that makes execution stable,
              predictable and scalable.
            </p>

            <div className="relative mt-7 grid grid-cols-2 gap-3">
              <Mini label="Alignment" />
              <Mini label="Control" />
              <Mini label="Repeatability" />
              <Mini label="Scale-ready" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mini({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center">
      <p className="text-white/80 text-xs font-semibold tracking-wide">{label}</p>
    </div>
  );
}
