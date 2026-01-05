import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-white">
            Why <span className="text-orange-500">Zryoss</span>
          </motion.h2>

          <motion.p variants={item} className="mt-6 text-gray-400 text-lg">
            Zryoss is a structured business enablement platform designed to help
            organizations operate, scale, and grow with clarity, discipline, and confidence.
          </motion.p>
        </motion.div>

        {/* ================= CORE VALUE ================= */}
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
                desc: "Operational frameworks that replace chaos with clarity and repeatability.",
              },
              {
                title: "Centralized Governance",
                desc: "Quality standards and accountability managed centrally for consistent execution.",
              },
              {
                title: "Built for Long-Term Success",
                desc: "Ethical, sustainable, and scalable growth — no shortcuts.",
              },
            ].map((data, i) => (
              <motion.div key={i} variants={item}>
                <h4 className="text-xl font-semibold text-orange-400">{data.title}</h4>
                <p className="mt-2 text-gray-300 leading-relaxed">{data.desc}</p>
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

        {/* ================= WHAT WE DO ================= */}
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

        {/* ================= WHAT WE DON’T DO (FIXED IMAGE) ================= */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT CARD */}
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

          {/* PROFESSIONAL IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Soft red glow */}
            <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-2xl" />

            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                alt="What we don’t do"
                className="w-full h-[340px] object-cover scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-28 max-w-3xl mx-auto text-center 
                     bg-white/5 border border-orange-500/30 
                     rounded-2xl p-10 backdrop-blur-md"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Build with clarity. Scale with confidence.
          </h3>

          <p className="text-gray-400 mb-8">
            Zryoss provides the structure and governance modern businesses need
            to grow responsibly and sustainably.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-orange-500 text-black font-semibold rounded-xl
                       hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                       transition-all"
          >
            Start Your Journey →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
