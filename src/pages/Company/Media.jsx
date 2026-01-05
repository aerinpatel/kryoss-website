import { motion } from "framer-motion";
import {
  BookOpen,
  BadgeCheck,
  Layers,
  Settings,
  Megaphone,
} from "lucide-react";

export default function WhyZryossWorks() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-orange-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built for{" "}
            <span className="text-orange-500">Clarity, Scale & Trust</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Zryoss is designed as a long-term business enablement platform —
            empowering founders, operators, and partners with clarity,
            structure, and accountability at every stage of growth.
          </p>
        </motion.div>

        {/* ================= FEATURE GRID ================= */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <BookOpen className="w-7 h-7" />,
              title: "Strong Storytelling",
              desc: "Clear, transparent narratives that communicate not just what we do, but why it matters.",
              delay: 0.1,
            },
            {
              icon: <BadgeCheck className="w-7 h-7" />,
              title: "Professional Credibility",
              desc: "High standards of governance, ethics, and consistency across every interaction.",
              delay: 0.2,
            },
            {
              icon: <Layers className="w-7 h-7" />,
              title: "Scalable Structure",
              desc: "Architected for controlled growth without sacrificing quality or accountability.",
              delay: 0.3,
            },
            {
              icon: <Settings className="w-7 h-7" />,
              title: "Easy to Maintain",
              desc: "Operational frameworks that reduce friction and evolve smoothly with scale.",
              delay: 0.4,
            },
            {
              icon: <Megaphone className="w-7 h-7" />,
              title: "Ready for PR & Branding",
              desc: "Consistent, credible, and brand-aligned communication across all public channels.",
              delay: 0.5,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-orange-500/20 bg-white/5 p-8 
                         hover:border-orange-500/40 transition-all"
            >
              <div className="mb-4 text-orange-400">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= START YOUR JOURNEY CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="mt-36 flex justify-center"
        >
          <div
            className="relative max-w-4xl w-full px-12 py-14 rounded-3xl
                       border border-orange-500/30
                       bg-white/5 backdrop-blur-md
                       shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-orange-500/10 blur-[160px] rounded-full -z-10" />

            {/* CTA Content */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your <span className="text-orange-500">Journey</span> with Zryoss
              </h3>

              <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Whether you are building from the ground up or scaling an existing
                organization, Zryoss provides the clarity, structure, and
                governance needed for long-term success.
              </p>

              <button
                className="px-14 py-4 bg-orange-500 text-black font-semibold rounded-xl
                           hover:bg-orange-600
                           hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
                           transition-all duration-300"
              >
                Start Your Journey →
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
