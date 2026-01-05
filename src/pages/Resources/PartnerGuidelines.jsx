import { motion } from "framer-motion";
import FadeUp from "../../components/animations/FadeUp";

export default function PartnerGuidelines() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="Business ethics and compliance"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                        w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block mb-4 text-sm tracking-widest uppercase 
                               text-orange-400 font-semibold">
                Governance & Compliance
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Partner <span className="text-orange-500">Guidelines</span>
              </h1>

              <p className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed">
                Ethical standards, communication rules, and operational
                responsibilities required to represent and operate within the
                Zryoss ecosystem.
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                <span>
                  <strong className="text-white">Last updated:</strong> January 2026
                </span>

                <a
                  href="/docs/zryoss-partner-guidelines.pdf"
                  download
                  className="text-orange-400 hover:text-orange-300 transition"
                >
                  ⬇ Download PDF
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= GUIDELINES SECTION ================= */}
      <section className="relative py-32 bg-[#0F172A] overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">

          <div className="space-y-8">
            {[
              {
                title: "Ethical Representation",
                desc: "Partners must represent Zryoss accurately and avoid misleading claims related to income, partnerships, or outcomes.",
              },
              {
                title: "No Income Guarantees",
                desc: "Partners must not promise fixed, guaranteed, or passive income to any individual or organization.",
              },
              {
                title: "No Recruitment-Based Promotion",
                desc: "Zryoss must never be positioned as an MLM, referral, or recruitment income opportunity.",
              },
              {
                title: "Client Communication Standards",
                desc: "All client communication must remain professional, transparent, and within approved service scope.",
              },
              {
                title: "Brand Usage Policy",
                desc: "Brand assets and references must be used strictly according to approved Zryoss brand guidelines.",
              },
              {
                title: "Compliance & Reporting",
                desc: "Partners must comply with reporting requirements, platform policies, and operational processes.",
              },
              {
                title: "Violations & Consequences",
                desc: "Any violation may result in corrective action, suspension, or termination of partnership.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border border-white/10 rounded-xl p-8 
                                bg-white/5 backdrop-blur-md
                                hover:border-orange-500/40 transition">
                  <h3 className="text-xl font-semibold text-orange-400">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ================= LEGAL NOTE ================= */}
          <FadeUp delay={0.4}>
            <div className="mt-28 border border-red-500/30 rounded-xl p-8 
                            bg-gradient-to-r from-red-500/10 to-transparent">
              <p className="text-gray-400 text-sm leading-relaxed">
                Adherence to these guidelines is mandatory for continued
                association with the Zryoss platform. Zryoss reserves the right
                to modify policies to ensure compliance, integrity, and
                long-term sustainability.
              </p>
            </div>
          </FadeUp>

        </div>
      </section>
    </>
  );
}