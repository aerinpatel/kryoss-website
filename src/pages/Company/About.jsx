import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import SplitSection from "../../components/layout/SplitSection";

export default function About() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-32">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why <span className="text-orange-500">Zryoss</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Zryoss is a structured business enablement platform built to help
            individuals and organizations operate, scale, and grow with clarity,
            discipline, and confidence.
          </p>
        </motion.div>

        {/* ================= SECTION 1 ================= */}
        <SplitSection
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Business collaboration"
          delay={0}
        >
          <h3 className="text-2xl font-semibold text-orange-400">
            Structured Business Enablement
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Operational frameworks that eliminate chaos and replace it with
            clarity and repeatability.
          </p>

          <h3 className="text-2xl font-semibold text-orange-400">
            Centralized Governance
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Systems, quality standards, and accountability managed centrally
            for consistent execution.
          </p>

          <h3 className="text-2xl font-semibold text-orange-400">
            Built for Long-Term Success
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Sustainable, ethical, and scalable growth — no shortcuts.
          </p>
        </SplitSection>

        {/* ================= SECTION 2 ================= */}
        <SplitSection
          reverse
          image="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="What we do"
          delay={0.1}
        >
          <h3 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            What We Do
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Enable structured operations</li>
            <li>✔ Support scalable business models</li>
            <li>✔ Maintain governance & accountability</li>
            <li>✔ Turn strategy into execution</li>
          </ul>
        </SplitSection>

        {/* ================= SECTION 3 ================= */}
        <SplitSection
          image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
          alt="What we don’t do"
          delay={0.2}
        >
          <h3 className="text-2xl font-semibold text-red-400 flex items-center gap-2">
            <XCircle className="w-6 h-6" />
            What We Don’t Do
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>✘ No recruitment or job placement</li>
            <li>✘ No MLM or referral schemes</li>
            <li>✘ No guaranteed income promises</li>
            <li>✘ No misleading marketing</li>
          </ul>
        </SplitSection>

        {/* ================= FINAL CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            relative
            max-w-3xl
            mx-auto
            text-center
            bg-white/5
            border
            border-orange-500/30
            rounded-2xl
            p-10
            backdrop-blur-md
          "
        >
          <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-2xl" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Build with clarity. Scale with confidence.
            </h3>

            <p className="text-gray-400 mb-8">
              Zryoss provides the structure and governance modern businesses
              need to grow responsibly and sustainably.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex
                items-center
                gap-2
                px-10
                py-4
                bg-orange-500
                text-black
                font-semibold
                rounded-xl
                hover:bg-orange-600
                hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                transition-all
              "
            >
              Start Your Journey →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
