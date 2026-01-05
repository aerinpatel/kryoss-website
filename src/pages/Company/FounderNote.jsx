import { motion } from "framer-motion";
import FadeUp from "../../components/animations/FadeUp";

export default function FounderNote() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Soft ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Founder’s Note
          </h1>

          <p className="mt-6 max-w-3xl text-gray-400 text-lg">
            A message of purpose, responsibility, and long-term vision behind
            the foundation of Zryoss.
          </p>
        </motion.div>

        {/* ================= CONTENT SECTION ================= */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT CONTENT */}
          <FadeUp>
            <div className="border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-md space-y-6 text-gray-300 leading-relaxed">
              <p>
                Zryoss was created to address a fundamental challenge seen across
                growing businesses — strong ambition without structured
                execution. Many organizations struggle not due to lack of
                potential, but due to missing systems, clarity, and alignment.
              </p>

              <p>
                Our vision is to build an operating ecosystem where individuals
                and teams can focus on meaningful work while systems handle
                complexity. Zryoss exists to bring structure, accountability,
                and sustainability into everyday business operations.
              </p>

              <p>
                By centralizing governance, delivery, and performance standards,
                we enable organizations to scale with confidence. Our goal is
                not rapid expansion, but stable, repeatable, and responsible
                growth.
              </p>

              <p>
                At its core, Zryoss is built on integrity, discipline, and
                long-term thinking. We believe true success comes from clarity,
                trust, and consistency — values that guide every decision we
                make.
              </p>
            </div>
          </FadeUp>

          {/* IMAGE / PLACEHOLDER */}
          <FadeUp delay={0.2}>
            <div className="relative flex items-center justify-center h-[420px] rounded-2xl 
                            border border-white/10 
                            bg-gradient-to-br from-white/5 to-transparent 
                            backdrop-blur-md overflow-hidden">

              <div className="flex flex-col items-center text-center px-6">
                <div className="w-24 h-24 rounded-full bg-orange-500/20 
                                flex items-center justify-center mb-4">
                  <span className="text-4xl">👤</span>
                </div>

                <h4 className="text-lg font-semibold text-white">
                  Founder Image Placeholder
                </h4>

                <p className="mt-2 text-sm text-gray-400 max-w-xs">
                  This space will feature the founder’s image to represent
                  leadership, vision, and commitment to excellence.
                </p>
              </div>

              {/* Subtle overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
