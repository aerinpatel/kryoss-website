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
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 blur-[100px] rounded-full" />

      {/* ✅ width aligned with navbar/footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
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

                <div className="w-24 h-1 bg-orange-500 rounded-full mb-10" />

                <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl">
                  ZRYOSS provides a ready-to-use business operating backbone that
                  lets you focus on growth and relationships — while we handle the
                  complex execution behind the scenes.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-5 pt-4">
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
            </div>
          </FadeUp>

          {/* RIGHT (Image frame + Quote frame like screenshot) */}
          <FadeUp delay={0.15}>
            <div className="space-y-10">
              {/* ✅ TOP IMAGE FRAME (exact like screenshot - no extra inner border) */}
                  <div className="relative rounded-[42px] border border-orange-500/25 bg-black/40 overflow-hidden">
                    {/* padding like frame */}
                    <div className="p-10">
                      <div className="relative rounded-[28px] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.75)]">
                        <img
                          src="/what_imge.jpg"
                          alt="ZRYOSS Platform"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* subtle glow */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-70" />
                  </div>


              {/* ✅ BOTTOM QUOTE FRAME (like screenshot bottom card) */}
              <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="relative p-8 md:p-10">
                  {/* left orange bar */}
                  <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-orange-500 rounded-full" />

                  <p className="text-white text-lg md:text-xl font-light leading-relaxed italic pl-8">
                    “You focus on growth and relationships.
                    <br />
                    <span className="text-orange-400 font-semibold italic">
                      ZRYOSS handles execution and operations.
                    </span>
                    ”
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
