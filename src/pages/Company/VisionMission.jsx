import { motion } from "framer-motion";
import FadeUp from "../../components/animations/FadeUp";
import SplitSection from "../../components/layout/SplitSection";

export default function VisionMission() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-32">
        {/* ================= HEADER ================= */}
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Vision{" "}
              <span className="text-orange-500">
                & Mission
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              The principles, purpose, and direction that guide Zryoss in
              building long-term, responsible, and scalable business
              ecosystems.
            </p>
          </FadeUp>
        </div>

        {/* ================= VISION ================= */}
        <SplitSection
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Vision"
        >
          <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
            Our Vision
          </span>

          <h2 className="text-3xl font-semibold text-white">
            Clarity-Led, Scalable Growth
          </h2>

          <p className="text-gray-300 leading-relaxed">
            To create a transparent and scalable operating platform that
            empowers individuals and organizations to build meaningful,
            sustainable growth — without unnecessary complexity.
          </p>
        </SplitSection>

        {/* ================= MISSION ================= */}
        <SplitSection
          reverse
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Mission"
        >
          <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
            Our Mission
          </span>

          <h2 className="text-3xl font-semibold text-white">
            Build Structure That Enables Execution
          </h2>

          <ul className="space-y-4 text-gray-300">
            {[
              "Centralize operations, delivery, and governance",
              "Empower partners with scalable business systems",
              "Ensure transparency, accountability, and trust",
              "Support long-term, sustainable growth",
              "Deliver reliable digital infrastructure",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-orange-400 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SplitSection>

        {/* ================= PRINCIPLES ================= */}
        <FadeUp>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-14 backdrop-blur-md">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Guiding Principles
            </h3>

            <p className="text-gray-400 max-w-4xl mb-12">
              These principles shape how Zryoss thinks, builds, and partners —
              ensuring trust, consistency, and long-term value creation.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Execution Over Promises",
                  desc: "We build systems that work in real-world conditions, not theory.",
                },
                {
                  title: "Transparency Over Hype",
                  desc: "Clear communication, honest expectations, no hidden processes.",
                },
                {
                  title: "Structure Over Chaos",
                  desc: "Defined workflows that eliminate uncertainty and inefficiency.",
                },
                {
                  title: "Sustainability Over Shortcuts",
                  desc: "Long-term growth built on ethics and consistency.",
                },
                {
                  title: "Partnership Over Transactions",
                  desc: "Relationships designed for mutual, lasting value.",
                },
                {
                  title: "Growth With Purpose",
                  desc: "Every decision aligned with meaningful impact.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="p-6 rounded-xl border border-white/10 bg-black/20"
                >
                  <h4 className="text-orange-400 font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ================= FINAL CTA ================= */}
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center bg-white/5 border border-orange-500/30 rounded-2xl p-12 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Built for founders who value clarity.
            </h3>

            <p className="text-gray-400 mb-8">
              Zryoss replaces chaos with structure — enabling confident
              execution and sustainable growth.
            </p>

            <button
              className="
                px-10 py-4 bg-orange-500 text-black font-semibold rounded-xl
                hover:bg-orange-600
                hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                transition-all
              "
            >
              Start Your Journey →
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
