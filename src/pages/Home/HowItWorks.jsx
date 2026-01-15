import React from "react";
import { CheckCircle2, ArrowDown } from "lucide-react";

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <div
      className="opacity-0 animate-fadeUp"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default function HowItWorks() {
  const sections = [
    {
      label: "Step 01",
      title: "Brand Ownership",
      desc: "You create and own your brand. ZRYOSS provides the underlying structure, but your business identity remains entirely yours.",
      points: ["Full Brand Identity", "Independent Ownership", "Legal Independence"],
    },
    {
      label: "Step 02",
      title: "Client Acquisition",
      desc: "You focus on bringing clients or opportunities. Whether it's a small project or a large enterprise deal, your job is the relationship.",
      points: ["Relationship Management", "Lead Generation", "Opportunity Identification"],
    },
    {
      label: "Step 03",
      title: "Central Validation",
      desc: "Requirements are validated centrally by ZRYOSS to ensure technical feasibility and commercial viability before moving to the next stage.",
      points: ["Technical Auditing", "Feasibility Check", "Commercial Alignment"],
    },
    {
      label: "Step 04",
      title: "Expert Demos",
      desc: "Solutions and demos are delivered by domain experts under your brand name, ensuring the highest professional standards in every pitch.",
      points: ["Subject Matter Experts", "Professional Pitching", "White-labeled Presentation"],
    },
    {
      label: "Step 05",
      title: "Routed Execution",
      desc: "Execution is routed to our network of specialist brands and verified vendors who specialize in specific technology and business domains.",
      points: ["Specialist Branding", "Domain Expertise", "Scale-ready Delivery"],
    },
    {
      label: "Step 06",
      title: "Governance & Quality",
      desc: "Quality and timelines are strictly governed by ZRYOSS. We monitor every stage of the lifecycle to ensure delivery excellence.",
      points: ["SLA Monitoring", "Quality Control", "Timeline Governance"],
    },
    {
      label: "Step 07",
      title: "Seamless Coordination",
      desc: "A dedicated account manager coordinates everything. You stay client-facing while the system runs everything behind you.",
      points: ["Single Point of Contact", "Resource Management", "Unified Reporting"],
    },
  ];

  return (
    <section className="relative bg-[#050505] text-white py-24 overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.75s ease-out; }
      `}</style>

      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/7 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
              How It Works
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-6">
              A Structured Execution Model
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                Built for Scale & Control
              </span>
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6" />

            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
              Seven systematic steps that transform your business idea into a professionally executed reality
            </p>
          </div>
        </FadeUp>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="relative group">
                {/* Connecting Line */}
                {i < sections.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-orange-500/10 group-hover:from-orange-500 group-hover:to-orange-500/30 transition-all duration-500" />
                )}

                <div className="relative flex gap-6 md:gap-8">
                  {/* Step Number Circle */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-10 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-1">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
                        {section.label}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                        {section.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mb-6">
                        {section.desc}
                      </p>

                      {/* Key Points */}
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {section.points.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-orange-500/20 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-sm font-light leading-snug">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator (between steps) */}
                {i < sections.length - 1 && (
                  <div className="absolute left-6 top-[4.5rem] -translate-x-1/2">
                    <ArrowDown className="w-4 h-4 text-orange-500/50 animate-bounce" />
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.8}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-orange-500/30 bg-orange-500/10">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
                Systemized • Structured • Scale-Ready
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
