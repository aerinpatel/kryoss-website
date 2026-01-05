import { motion } from "framer-motion";
import FadeUp from "../../components/animations/FadeUp";

export default function VisionMission() {
  return (
    <section className="relative py-36 bg-[#0F172A] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-750px h-750px bg-orange-500/20 blur-180px" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <FadeUp>
          <motion.h1
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-5xl md:text-6xl font-bold text-center"
          >
            <span className="text-white">Vision</span>{" "}
            <span
              className="text-transparent bg-clip-text 
               bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500
               bg-length:200%_200%"
            >
              & Mission
            </span>
          </motion.h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-8 max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed">
            The principles, purpose, and direction that guide Zryoss in building
            long-term, responsible, and scalable business ecosystems.
          </p>
        </FadeUp>

        {/* ================= VISION ================= */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Vision"
            className="rounded-2xl shadow-2xl max-w-md mx-auto"
          />

          <FadeUp>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-md"
            >
              <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
                Our Vision
              </span>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Clarity-Led, Scalable Growth
              </h2>

              <p className="mt-6 text-gray-300 leading-relaxed">
                To create a transparent and scalable operating platform that
                empowers individuals and organizations to build meaningful,
                sustainable growth — without unnecessary complexity.
              </p>
            </motion.div>
          </FadeUp>
        </div>

        {/* ================= MISSION ================= */}
        <div className="mt-36 grid lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-12 backdrop-blur-md"
            >
              <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
                Our Mission
              </span>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Build Structure That Enables Execution
              </h2>

              <ul className="mt-6 space-y-4 text-gray-300">
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
            </motion.div>
          </FadeUp>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Mission"
            className="rounded-2xl shadow-2xl max-w-md mx-auto"
          />
        </div>

        {/* ================= PRINCIPLES ================= */}
        <FadeUp delay={0.25}>
          <div className="mt-40 bg-white/5 border border-white/10 rounded-2xl p-14 backdrop-blur-md">
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
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ================= FINAL CTA ================= */}
        <FadeUp delay={0.4}>
          <div className="mt-32 max-w-3xl mx-auto text-center bg-white/5 border border-orange-500/30 rounded-2xl p-12 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Built for founders who value clarity.
            </h3>
            <p className="text-gray-400 mb-8">
              Zryoss replaces chaos with structure — enabling confident
              execution and sustainable growth.
            </p>
            <button
              className="px-10 py-4 bg-orange-500 text-black font-semibold rounded-xl
                               hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                               transition"
            >
              Start Your Journey →
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
