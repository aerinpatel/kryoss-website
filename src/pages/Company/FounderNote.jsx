import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";

export default function FounderNote() {
  return (
    <section className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[420px] h-[420px] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[420px] h-[420px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-10 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-[0.25em] text-xs">
              Leadership Vision
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15]"
          >
            A Message from <br />
            <span className="text-orange-500">Our Founder</span>
          </motion.h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl font-light max-w-2xl">
            Building the infrastructure for sustainable, execution-driven
            enterprises.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT — NOTE */}
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="space-y-10">
                {/* Highlight Quote */}
                <div className="relative pl-10">
                  <Quote className="absolute left-0 top-0 text-orange-500/20 w-10 h-10" />
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
                    Zryoss was born from a simple observation — most businesses
                    don’t fail due to lack of talent, but due to lack of
                    structure.
                  </p>
                </div>

                {/* Body */}
                <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed border-l border-white/10 pl-8">
                  <p>
                    Ambition is common. Discipline is not. We repeatedly saw
                    capable teams struggle because systems, accountability, and
                    clarity were missing.
                  </p>

                  <p>
                    Zryoss exists to remove that friction. We build operating
                    frameworks that allow individuals and organizations to
                    focus on meaningful work while complexity is handled
                    systematically.
                  </p>

                  <p className="text-gray-300">
                    We do not optimize for speed alone. We optimize for
                    sustainability, repeatability, and trust.
                  </p>
                </div>

                {/* Founder Signature */}
                <div className="pt-10">
                  <p className="text-xl font-serif text-white italic">
                    Founder Name
                  </p>
                  <p className="mt-1 text-xs text-orange-500 font-bold uppercase tracking-widest">
                    Founder & CEO, Zryoss
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — FOUNDER CARD */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeUp delay={0.2}>
              <div className="relative rounded-3xl border border-white/10 bg-[#0F172A]/60 backdrop-blur-xl p-10 text-center">
                {/* Avatar */}
                <div className="mx-auto mb-8 w-24 h-24 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>

                <h4 className="text-white text-lg font-semibold mb-4">
                  Build for strength, not just speed.
                </h4>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                  Sustainable growth is built through clarity, governance, and
                  long-term thinking — not shortcuts.
                </p>

                <button className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-500 hover:text-white transition">
                  Read Company Story
                  <ArrowRight size={14} />
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
