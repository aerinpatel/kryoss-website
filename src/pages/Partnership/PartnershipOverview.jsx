import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Building2,
  ArrowRight,
  CheckCircle,
  Rocket,
  TrendingUp,
} from "lucide-react";

/* =========================
   AUDIENCE DATA
========================= */
const audiences = [
  {
    icon: Rocket,
    title: "Founders & Startups",
    desc: "Build strong operational foundations with structured execution, compliance, and governance — without assembling large internal teams.",
  },
  {
    icon: TrendingUp,
    title: "Growing Companies",
    desc: "Scale teams, systems, and infrastructure while maintaining cost control, accountability, and execution clarity.",
  },
  {
    icon: Building2,
    title: "Enterprises",
    desc: "Execute across technology, legal, and infrastructure with governance-aligned, SLA-driven delivery models.",
  },
];

export default function Overview() {
  return (
    <div className="bg-[#0F172A] text-white overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0F172A]" />

        <div className="absolute -top-40 left-1/2 -translate-x-1/2
                        w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 text-sm tracking-widest uppercase
                       text-orange-400 font-semibold"
          >
            Overview
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Structured execution <br />
            across <span className="text-orange-500">business operations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 max-w-2xl text-gray-300 text-lg"
          >
            Kryoss is an execution-first operating platform helping organizations
            build, operate, and scale with clarity, compliance, and control.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-300">
            {[
              "Execution, not consulting",
              "Governance-driven delivery",
              "Verified partners only",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2
                           bg-white/5 border border-white/10 rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-orange-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE CAPABILITIES
      ====================================================== */}
      <section className="relative py-32">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2
                        w-[600px] h-[600px] bg-orange-500/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
              Core Capabilities
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              What <span className="text-orange-500">Kryoss</span> Does
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Kryoss delivers execution across critical business functions through
              structured processes, centralized governance, and accountable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Layers,
                title: "Technology Enablement",
                desc: "Scalable software, cloud, and digital systems aligned with long-term business objectives.",
              },
              {
                icon: ShieldCheck,
                title: "Legal & Compliance",
                desc: "Governance, contracts, and regulatory execution that reduce risk and ensure continuity.",
              },
              {
                icon: Building2,
                title: "Infrastructure & Operations",
                desc: "Execution-driven real estate and operational infrastructure via verified partners.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10
                             bg-white/5 backdrop-blur-md p-10
                             hover:border-orange-500/40 transition"
                >
                  <div className="w-14 h-14 rounded-xl mb-6
                                  bg-orange-500/10 border border-orange-500/30
                                  flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO KRYOSS IS BUILT FOR
      ====================================================== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2
                        w-[600px] h-[600px] bg-orange-500/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
              Target Audience
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Who <span className="text-orange-500">Kryoss</span> Is Built For
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Kryoss is designed for organizations that value execution clarity,
              governance, and long-term operational control.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid md:grid-cols-3 gap-10"
          >
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10
                             bg-white/5 backdrop-blur-md p-10
                             hover:border-orange-500/40 transition"
                >
                  <div className="w-12 h-12 rounded-xl mb-6
                                  bg-orange-500/10 border border-orange-500/30
                                  flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/*==============================================  Work Flow================= */}
      <section className="relative py-32 bg-black/40 overflow-hidden">
  {/* Subtle glow */}
  <div
    className="absolute -top-40 left-1/2 -translate-x-1/2
               w-[600px] h-[600px] bg-orange-500/10 blur-[160px]"
  />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-3xl mb-20">
      <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
        Operating Model
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
        Execution <span className="text-orange-500">Workflow</span>
      </h2>

      <p className="mt-6 text-gray-400 text-lg leading-relaxed">
        A structured, governance-driven execution framework designed to
        reduce ambiguity, improve accountability, and enable predictable outcomes
        across business operations.
      </p>
    </div>

    {/* Workflow */}
    <div className="grid md:grid-cols-5 gap-8">
      {[
        {
          step: "01",
          title: "Assess",
          desc: "Understand business context, constraints, risks, and execution scope before action.",
        },
        {
          step: "02",
          title: "Align",
          desc: "Define objectives, stakeholders, timelines, and governance responsibilities.",
        },
        {
          step: "03",
          title: "Execute",
          desc: "Deliver through verified partners with milestone-based execution and oversight.",
        },
        {
          step: "04",
          title: "Govern",
          desc: "Track progress, enforce SLAs, manage risks, and maintain compliance standards.",
        },
        {
          step: "05",
          title: "Scale",
          desc: "Optimize systems, expand execution, and support long-term operational growth.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative rounded-2xl border border-white/10
                     bg-gradient-to-br from-white/5 to-white/[0.02]
                     backdrop-blur-md p-8
                     hover:border-orange-500/40
                     transition-all duration-300"
        >
          {/* Step number */}
          <div
            className="absolute -top-4 -left-4 w-12 h-12 rounded-xl
                       bg-orange-500 text-white font-bold
                       flex items-center justify-center shadow-lg"
          >
            {item.step}
          </div>

          <h3
            className="mt-6 text-xl font-semibold text-white
                       group-hover:text-orange-400 transition"
          >
            {item.title}
          </h3>

          <p className="mt-3 text-white text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Footer credibility line */}
    <p className="mt-16 text-xs text-gray-500 max-w-2xl">
      This workflow is applied consistently across technology, legal, and
      infrastructure engagements to ensure execution clarity and governance.
    </p>
  </div>
</section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 rounded-3xl
                        border border-orange-500/30 bg-white/5 p-14">
          <h2 className="text-4xl font-bold mb-6">
            Build with clarity. <br />
            <span className="text-orange-500">Scale with confidence.</span>
          </h2>

          <p className="text-gray-300 mb-10">
            Talk to Zryoss about structured execution for your business.
          </p>

          <button className="inline-flex items-center gap-2 px-10 py-4
                             bg-orange-500 text-white font-semibold
                             rounded-xl hover:bg-orange-600 transition">
            Talk to Zryoss <ArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
}