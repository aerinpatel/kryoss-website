import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import { CheckCircle2 } from "lucide-react";

export default function WhatIsZryoss() {
  const points = [
    "Launch your own independent brand",
    "Acquire and manage clients directly",
    "Deliver services professionally via specialist brands",
    "Scale without the burden of building internal teams",
    "Operate with absolute clarity and systemized control",
  ];

  return (
    <section
      id="platform"
      className="py-24 bg-[#050505] relative overflow-hidden scroll-mt-24 z-10"
    >
      {/* Background Decor (same as ProblemSection style) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <FadeUp>
            <div className="space-y-10">
              {/* Header */}
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 block">
                  A Business Operating System
                </span>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                  What is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    ZRYOSS
                  </span>
                  ?
                </h2>

                <div className="w-24 h-1 bg-orange-500 rounded-full mb-6" />

                <p className="text-gray-400 text-lg leading-relaxed font-light max-w-xl">
                  ZRYOSS provides a ready-to-use business operating backbone that
                  lets you focus on growth and relationships — while we handle the
                  complex execution behind the scenes.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4 pt-2">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    </div>

                    <span className="text-gray-300 text-lg font-light leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote Card */}
              <div className="pt-6">
                <div className="relative p-7 md:p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="relative z-10 text-white text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-orange-500 pl-6">
                    “You focus on growth and relationships.
                    <br />
                    <span className="text-orange-400 font-medium italic">
                      ZRYOSS handles execution and operations.
                    </span>
                    ”
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT IMAGE */}
          <FadeUp delay={0.2}>
            <div className="relative w-full max-w-xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent group hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Pattern Layer */}
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:22px_22px]" />

                {/* Image */}
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"

                    alt="ZRYOSS Platform"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {["Execution", "Systems", "Delivery", "Scale"].map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-gray-200 text-xs uppercase tracking-[0.25em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                    The backbone behind every ZRYOSS business
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed font-light max-w-md">
                    A system that enables founders to operate like enterprises — without
                    building enterprise overhead.
                  </p>
                </div>
              </div>

              {/* Corner Status Label */}
              <div className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_14px_rgba(34,197,94,0.6)]" />
                System Active
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
