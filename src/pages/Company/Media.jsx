import { motion } from "framer-motion";
import {
  BookOpen,
  BadgeCheck,
  Layers,
  Settings,
  Megaphone,
} from "lucide-react";

/* Motion presets for consistency */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhyZryossWorks() {
  return (
    <section className="relative py-36 bg-gradient-to-b from-[#020617] via-[#0B1220] to-[#020617] overflow-hidden">

      {/* Ambient editorial glow */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/15 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= EDITORIAL HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-orange-400 mb-6">
            Zryoss · Media & Perspective
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Built to{" "}
            <span className="text-orange-500">Scale Responsibly</span>,  
            Communicate Clearly,  
            and Operate with Trust
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed">
            Zryoss is not just a platform — it is a structured operating
            philosophy designed for founders, partners, and organizations
            that value long-term credibility over short-term noise.
          </p>
        </motion.div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-28 flex justify-center">
          <div className="w-[140px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </div>

        {/* ================= MEDIA PRINCIPLES ================= */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              Icon: BookOpen,
              title: "Clarity in Narrative",
              desc: "We communicate with intent — ensuring that every message reflects purpose, transparency, and long-term vision.",
              delay: 0.1,
            },
            {
              Icon: BadgeCheck,
              title: "Credibility by Design",
              desc: "Governance, ethics, and consistency are embedded into how Zryoss presents itself publicly and operationally.",
              delay: 0.2,
            },
            {
              Icon: Layers,
              title: "Structured Scalability",
              desc: "Growth without structure creates noise. Our ecosystem scales with discipline, not chaos.",
              delay: 0.3,
            },
            {
              Icon: Settings,
              title: "Operational Maturity",
              desc: "Built to evolve — systems, messaging, and execution remain aligned as the organization grows.",
              delay: 0.4,
            },
            {
              Icon: Megaphone,
              title: "Media-Ready Presence",
              desc: "From PR to partnerships, Zryoss maintains a consistent and credible voice across all channels.",
              delay: 0.5,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: item.delay,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 220, damping: 22 },
              }}
              className="relative group rounded-2xl p-8
                         border border-white/10
                         bg-white/[0.03]
                         hover:border-orange-500/40
                         transition-colors"
            >
              {/* subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              bg-gradient-to-br from-orange-500/10 via-transparent to-transparent rounded-2xl" />

              <div className="relative z-10">
                <div className="mb-6 w-fit p-3 rounded-xl bg-orange-500/10 text-orange-400">
                  <item.Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= EDITORIAL CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40 flex justify-center"
        >
          <div className="relative max-w-4xl w-full px-14 py-16 rounded-3xl
                          border border-orange-500/30
                          bg-white/[0.04] backdrop-blur-md">
            <div className="absolute inset-0 bg-orange-500/10 blur-[180px] rounded-full -z-10" />

            <div className="text-center">
              <p className="uppercase tracking-[0.2em] text-xs text-orange-400 mb-4">
                The Zryoss Approach
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                Building Companies That{" "}
                <span className="text-orange-500">Last</span>
              </h3>

              <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Zryoss partners with organizations that believe in clarity,
                accountability, and sustainable growth — not shortcuts.
              </p>

              <button
                className="px-16 py-4 bg-orange-500 text-black font-semibold rounded-xl
                           hover:bg-orange-600
                           hover:shadow-[0_0_45px_rgba(249,115,22,0.6)]
                           transition-all duration-300"
              >
                Explore the Zryoss Vision →
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
