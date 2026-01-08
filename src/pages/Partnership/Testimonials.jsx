import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kryoss brought execution discipline to areas where we previously relied on fragmented vendors. Their governance-first approach significantly reduced operational risk.",
      name: "Director of Operations",
      company: "Mid-Market Technology Firm",
    },
    {
      quote:
        "Instead of managing multiple partners across legal, tech, and infrastructure, Kryoss gave us a single execution layer with accountability and visibility.",
      name: "Founder & CEO",
      company: "Growth-Stage Startup",
    },
    {
      quote:
        "What stood out was not advice, but ownership. Kryoss stayed accountable from planning through execution, which is rare in service providers.",
      name: "Head of Strategy",
      company: "Enterprise Services Company",
    },
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2
                      w-[700px] h-[700px] bg-orange-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
            Client Perspective
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Trusted for <span className="text-orange-500">Execution</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Organizations choose Kryoss for structured execution,
            governance clarity, and accountable delivery — not promises.
          </p>
        </div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10
                         bg-gradient-to-br from-white/5 to-white/[0.02]
                         backdrop-blur-md p-10
                         hover:border-orange-500/40
                         transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-500/40 mb-6" />

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                “{t.quote}”
              </p>

              {/* Divider */}
              <div className="h-px w-12 bg-orange-500/40 mb-6" />

              {/* Author */}
              <div>
                <p className="text-white font-semibold text-sm">
                  {t.name}
                </p>
                <p className="text-gray-500 text-xs">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Credibility Note */}
        <div className="mt-20 text-xs text-gray-500 max-w-3xl">
          Testimonials reflect real execution engagements. Client names are
          anonymized where confidentiality agreements apply.
        </div>
      </div>
    </section>
  );
}
