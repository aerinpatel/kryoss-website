import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    point: "Dependability",
    traditional: "Founder-dependent & limited by personal bandwidth",
    zryoss: "System-driven & independent of any single individual",
  },
  {
    point: "Execution",
    traditional: "Vendor chaos and fragmented coordination",
    zryoss: "Centralized execution via domain-specific specialist brands",
  },
  {
    point: "Quality Control",
    traditional: "Inconsistent results and lack of delivery standards",
    zryoss: "Platform-governed quality with protocol-based monitoring",
  },
  {
    point: "Scalability",
    traditional: "Growth creates operational friction and breakdown",
    zryoss: "Built-to-scale architecture that thrives with volume",
  },
];

export default function WhyZryoss() {
  return (
    <section className="py-20 md:py-24 bg-[#050505] relative overflow-hidden z-10">
      {/* ✅ Removed orange background shade/glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-14 md:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
              The Fundamental Difference
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                ZRYOSS
              </span>{" "}
              is Different
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
              Traditional models break at scale because they rely on human effort
              over systemic structure. ZRYOSS flips the script.
            </p>
          </div>
        </FadeUp>

        {/* Desktop SaaS Table */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
            {/* ✅ shadow overlay starting from divider between col1 & col2 */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-y-0 left-1/3 w-[66.666%]"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.07), rgba(0,0,0,0.55))",
                }}
              />
            </div>

            {/* Header */}
            <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.03] relative">
              <div className="col-span-4 p-8 border-r border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
                  Comparison Point
                </p>
              </div>

              <div className="col-span-4 p-8 border-r border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
                  Traditional Models
                </p>
              </div>

              <div className="col-span-4 p-8 relative">
                <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-bold">
                  ZRYOSS System
                </p>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/10 relative">
              {comparisons.map((item, idx) => (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div
                    className={`grid grid-cols-12 transition-all duration-300
                      ${idx % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"}
                      hover:bg-white/[0.035]`}
                  >
                    {/* Point */}
                    <div className="col-span-4 p-8 border-r border-white/10 flex items-center">
                      <p className="text-white font-semibold text-lg">
                        {item.point}
                      </p>
                    </div>

                    {/* Traditional */}
                    <div className="col-span-4 p-8 border-r border-white/10">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center shrink-0">
                          <X className="w-5 h-5 text-red-500/60" />
                        </div>
                        <p className="text-gray-300 text-base font-light leading-relaxed">
                          {item.traditional}
                        </p>
                      </div>
                    </div>

                    {/* ZRYOSS */}
                    <div className="col-span-4 p-8 relative">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-2xl border border-orange-500/25 bg-orange-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-gray-100 text-base font-light leading-relaxed">
                          {item.zryoss}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange-400/25 to-transparent" />
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {comparisons.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 relative overflow-hidden">
                <h3 className="text-xl font-semibold text-white mb-4 pb-3 border-b border-white/10 relative">
                  {item.point}
                </h3>

                <div className="space-y-5 relative">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <X className="w-4 h-4 text-red-500/60 shrink-0" />
                      <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">
                        Traditional
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed pl-6">
                      {item.traditional}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/6 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-xs uppercase tracking-[0.3em] text-orange-400 font-bold">
                        ZRYOSS
                      </span>
                    </div>

                    <p className="text-sm text-gray-200 font-light leading-relaxed pl-6">
                      {item.zryoss}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Quote */}
        <FadeUp delay={0.45}>
          <div className="mt-14 md:mt-20 text-center px-4">
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed italic">
              "ZRYOSS does not sell services. <br className="hidden sm:block" />
              <span className="text-orange-400 font-semibold italic">
                It runs businesses through systems.
              </span>"
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
