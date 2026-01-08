import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Factory,
  Stethoscope,
  Laptop,
  Truck,
} from "lucide-react";

export  default function IndustriesWeServe() {
  const industries = [
    {
      icon: Laptop,
      title: "Technology & SaaS",
      desc: "Execution support for product companies, SaaS platforms, and digital-first businesses across compliance, infrastructure, and scale readiness.",
      scope: ["Cloud & DevOps", "Data security", "Vendor governance"],
    },
    {
      icon: Landmark,
      title: "Finance & FinTech",
      desc: "Governance-led execution for regulated environments where compliance, auditability, and operational control are non-negotiable.",
      scope: ["Regulatory compliance", "Risk controls", "Process audits"],
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      desc: "Operational execution across physical infrastructure, compliance workflows, and multi-vendor coordination.",
      scope: ["Plant setup", "Compliance execution", "Vendor SLAs"],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      desc: "Execution frameworks for logistics-heavy businesses with distributed operations and complex vendor ecosystems.",
      scope: ["Warehouse ops", "Infra execution", "Process governance"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Life Sciences",
      desc: "Compliance-first execution for organizations operating under strict regulatory and data protection requirements.",
      scope: ["Regulatory readiness", "Infra compliance", "Audit support"],
    },
    {
      icon: Building2,
      title: "Real Estate & Infrastructure",
      desc: "End-to-end execution across commercial real estate, facilities, and infrastructure development.",
      scope: ["Project execution", "Legal & approvals", "Vendor management"],
    },
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2
                      w-[700px] h-[700px] bg-orange-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
            Industry Coverage
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Kryoss operates across sectors where execution complexity,
            compliance, and multi-vendor coordination demand structured
            governance — not ad-hoc service delivery.
          </p>
        </div>

        {/* ================= INDUSTRY CARDS ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10
                           bg-gradient-to-br from-white/5 to-white/[0.02]
                           backdrop-blur-md p-10
                           hover:border-orange-500/40
                           transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl mb-6
                             bg-orange-500/10 border border-orange-500/30
                             flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>

                <h3
                  className="text-xl font-semibold text-white mb-4
                             group-hover:text-orange-400 transition"
                >
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Scope */}
                <ul className="space-y-2 text-xs text-gray-400">
                  {item.scope.map((s, idx) => (
                    <li key={idx}>• {s}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= FOOTER NOTE ================= */}
        <p className="mt-20 text-xs text-gray-500 max-w-3xl">
          Kryoss selectively engages in industries where structured execution,
          compliance accountability, and long-term operational governance are
          required. We do not operate in purely transactional or advisory-only
          models.
        </p>
      </div>
    </section>
  );
}
