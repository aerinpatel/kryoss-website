import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

/* FadeUp stays same */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function HeroCTA() {
  return (
    <section className="relative bg-[#050505] border-t border-white/5">
      {/* ✅ same width + padding as navbar/footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT – TEXT */}
        <div className="lg:col-span-7">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-6">
              Partner Program
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Ready to build a{" "}
              <span className="text-orange-400">real, scalable business</span>{" "}
              with Zryoss?
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
              Partner with Zryoss and focus on client relationships and growth,
              while we handle product strategy, demos, delivery, and backend
              execution.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="group inline-flex items-center gap-4 px-7 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all">
                Apply as Partner
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="inline-flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                <MessageSquare size={18} />
                Talk to Zryoss Team
              </button>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT – SUBTLE SUPPORT CARD */}
        <div className="lg:col-span-5">
          <FadeUp delay={0.25}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                What you focus on
              </p>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>• Client acquisition & relationship building</li>
                <li>• Market expansion & partnerships</li>
                <li>• Strategic growth conversations</li>
              </ul>

              <div className="h-px bg-white/10 my-6" />

              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                What we handle
              </p>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>• Product strategy & technical demos</li>
                <li>• Execution, delivery & operations</li>
                <li>• Long-term platform scalability</li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Soft hero glow */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] pointer-events-none" />
    </section>
  );
}
