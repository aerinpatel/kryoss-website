import { motion } from "framer-motion";
import FadeUp from "../../animations/FadeUp";
import Button from "../../ui/Button";

export default function SolutionLayout({
  hero,
  stats,
  highlight,
  offerings,
  success,
}) {
  return (
    <section className="relative bg-[#0F172A] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

      {/* ================= HERO ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeUp>
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                {hero.tag}
              </span>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {hero.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-xl text-orange-400 font-medium">
                {hero.subtitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                {hero.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-10 flex gap-4">
                <Button primary className="px-8 py-3">
                  {hero.primaryCTA || "Talk to an Expert"}
                </Button>
                {hero.secondaryCTA && (
                  <Button className="px-8 py-3 border border-white/20 text-white">
                    {hero.secondaryCTA}
                  </Button>
                )}
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <FadeUp delay={0.15}>
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src={hero.image}
                alt={hero.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ================= STATS ================= */}
      {stats && (
        <div className="max-w-7xl mx-auto px-6 pb-28">
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(([value, label], i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {value}
                  </div>
                  <div className="text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      )}

      {/* ================= HIGHLIGHT ================= */}
      {highlight && (
        <div className="max-w-7xl mx-auto px-6 pb-32">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                  {highlight.badge}
                </span>
                <h2 className="text-4xl font-bold text-white mb-6">
                  {highlight.title}
                  <span className="text-orange-400">
                    {highlight.highlightText}
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">
                  {highlight.description}
                </p>
              </div>

              <div className="relative h-[360px] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={highlight.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      )}

      {/* ================= OFFERINGS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <FadeUp>
          <h2 className="text-3xl font-semibold text-white mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] transition"
              >
                <div className="text-orange-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* ================= SUCCESS ================= */}
      {success && (
        <div className="max-w-7xl mx-auto px-6 pb-32">
          <FadeUp>
            <h2 className="text-3xl font-semibold text-white mb-12 text-center">
              Success Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {success.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      )}

      {/* ================= CTA ================= */}
      <FadeUp>
        <div className="max-w-3xl mx-auto mb-32 text-center bg-white/5 border border-orange-500/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Start with Clarity
          </h3>
          <p className="text-gray-400 mb-8">
            No fluff. No overspending. Just structured execution.
          </p>
          <Button primary className="px-10 py-4">
            Get Started →
          </Button>
        </div>
      </FadeUp>
    </section>
  );
}
