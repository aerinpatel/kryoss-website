import { motion } from "framer-motion";
import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function SolutionLayout({
  title,
  subtitle,
  description,
  offerings,
  heroImage,
}) {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-32">

        {/* ================= HERO ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeUp>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-xl text-orange-400 font-medium">
                {subtitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                {description}
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-10 flex gap-4">
                <Button primary className="px-8 py-3">
                  Talk to an Expert
                </Button>
                <Button className="px-8 py-3 border border-white/20 text-white">
                  View Case Studies
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <FadeUp delay={0.2}>
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </FadeUp>
        </div>

        {/* ================= WHY THIS MATTERS ================= */}
        <FadeUp>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Built for Entrepreneurs with Limited Resources
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Early-stage businesses don’t need bloated agencies or random
              campaigns. They need clarity, execution, and measurable outcomes.
              Our digital marketing systems are designed to deliver results
              without unnecessary spend or complexity.
            </p>
          </div>
        </FadeUp>

        {/* ================= OFFERINGS ================= */}
        <FadeUp>
          <div>
            <h2 className="text-3xl font-semibold text-white mb-12">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {offerings.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] transition"
                >
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ================= PROCESS ================= */}
        <FadeUp>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-14">
            <h2 className="text-3xl font-semibold text-white mb-10">
              How We Work
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                "Audit & Clarity",
                "Strategy Design",
                "Execution & Optimization",
                "Reporting & Scale",
              ].map((step, i) => (
                <div key={i}>
                  <p className="text-orange-400 font-bold text-lg mb-2">
                    {`0${i + 1}`}
                  </p>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ================= CTA ================= */}
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center bg-white/5 border border-orange-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Marketing with Clarity
            </h3>
            <p className="text-gray-400 mb-8">
              No fluff. No overspending. Just structured growth.
            </p>
            <Button primary className="px-10 py-4 text-base">
              Get Started →
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
