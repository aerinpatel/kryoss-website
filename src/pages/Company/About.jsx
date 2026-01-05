import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Why <span className="text-orange-500">Zryoss</span>
          </motion.h2>

          <motion.p variants={item} className="mt-6 text-gray-400 text-lg">
            Zryoss is a structured business enablement platform built to help
            individuals and organizations operate, scale, and grow with clarity,
            discipline, and confidence.
          </motion.p>
        </motion.div>

        {/* =====================================================
            WHY ZRYOSS – CORE VALUE
        ====================================================== */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "Structured Business Enablement",
                desc: "Operational frameworks that eliminate chaos and replace it with clarity and repeatability.",
              },
              {
                title: "Centralized Governance",
                desc: "Systems, quality standards, and accountability managed centrally for consistent execution.",
              },
              {
                title: "Built for Long-Term Success",
                desc: "Sustainable, ethical, and scalable growth — no shortcuts or fragile models.",
              },
            ].map((itemData, i) => (
              <motion.div key={i} variants={item}>
                <h4 className="text-xl font-semibold text-orange-400">
                  {itemData.title}
                </h4>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  {itemData.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Business collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-orange-500 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* =====================================================
            WHAT WE DO
        ====================================================== */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            className="rounded-2xl shadow-xl"
            alt="What we do"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-orange-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" /> What We Do
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Enable structured operations</li>
              <li>✔ Support scalable business models</li>
              <li>✔ Maintain governance & accountability</li>
              <li>✔ Turn strategy into execution</li>
            </ul>
          </motion.div>
        </div>

        {/* =====================================================
            WHAT WE DON’T DO
        ====================================================== */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-red-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6" /> What We Don’t Do
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✘ No recruitment or job placement</li>
              <li>✘ No MLM or referral schemes</li>
              <li>✘ No guaranteed income promises</li>
              <li>✘ No misleading marketing</li>
            </ul>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
            className="rounded-2xl shadow-xl"
            alt="What we don’t do"
          />
        </div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-28 max-w-3xl mx-auto text-center 
             bg-white/5 border border-orange-500/30 
             rounded-2xl p-10 backdrop-blur-md overflow-hidden"
        >
          {/* Animated Glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-2xl"
          />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Build with clarity. Scale with confidence.
            </h3>

            <p className="text-gray-400 mb-8">
              Zryoss provides the structure and governance modern businesses
              need to grow responsibly and sustainably.
            </p>

            {/* Animated Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 
                 px-10 py-4 bg-orange-500 text-black 
                 font-semibold rounded-xl 
                 hover:bg-orange-600 
                 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                 transition-all duration-300"
            >
              Start Your Journey
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
