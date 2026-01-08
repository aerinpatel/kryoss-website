import React from "react";
import {
  ShieldAlert,
  Users,
  Store,
  Repeat,
  TrendingDown,
  X,
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";

const items = [
  {
    title: "Not MLM",
    description: "No pyramid earnings or chain-based income structures.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Not Franchise",
    description: "No brand licensing or territory-based dependency.",
    icon: <Store className="w-5 h-5" />,
  },
  {
    title: "Not Referral Income",
    description: "No incentive-driven referral dependency for revenue.",
    icon: <Repeat className="w-5 h-5" />,
  },
  {
    title: "Not Investment Scheme",
    description: "No speculative or passive return-based promises.",
    icon: <TrendingDown className="w-5 h-5" />,
  },
];

export default function WhatIsNot() {
  const paths = [
    "M450 0V15C450 35 112 35 112 64",
    "M450 0V15C450 35 337 35 337 64",
    "M450 0V15C450 35 562 35 562 64",
    "M450 0V15C450 35 787 35 787 64",
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden text-white">
      {/* Background ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-900/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium uppercase tracking-widest mb-4">
              <ShieldAlert className="w-4 h-4" />
              What We Are Not
            </div>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              <span className="text-orange-400">Business Model</span>{" "}
              <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                Clarity
              </span>
            </h2>
          </FadeUp>
        </div>

        {/* TREE */}
        <div className="flex flex-col items-center">
          {/* ROOT */}
          <FadeUp>
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-48 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl">
                <span className="text-xl font-medium tracking-wider text-white">
                  ZRYOSS
                </span>
              </div>
            </div>
          </FadeUp>

          <div className="w-0.5 h-12 bg-gradient-to-b from-slate-700 to-orange-500" />

          {/* EXCLUDED MODELS */}
          <FadeUp delay={0.2}>
            <div className="relative flex flex-col items-center">
              <div className="px-6 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-medium flex items-center gap-2 z-20">
                <X className="w-4 h-4" />
                Excluded Models
              </div>

              <div className="hidden md:block w-[900px] h-16 relative -mt-2">
                <svg width="100%" height="100%" viewBox="0 0 900 64" fill="none">
                  <defs>
                    <filter id="orange-glow-tree">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                  </defs>

                  {paths.map((d, i) => (
                    <React.Fragment key={i}>
                      <path
                        d={d}
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeOpacity="0.2"
                        strokeLinecap="round"
                      />
                      <path
                        d={d}
                        className="pulse-line"
                        stroke="#fb923c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#orange-glow-tree)"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </React.Fragment>
                  ))}
                </svg>
              </div>
            </div>
          </FadeUp>

          {/* LEAF CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-6">
            {items.map((item, i) => (
              <FadeUp key={i} delay={0.4 + i * 0.1}>
                <div className="relative group p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md flex flex-col items-center text-center shadow-lg h-full overflow-hidden">
                  {/* Orange hover strip */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-500 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h3 className="relative z-10 text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="relative z-10 text-base text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={1}>
          <div className="text-center mt-20">
            <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
              Built on Transparency. Not Shortcuts.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
