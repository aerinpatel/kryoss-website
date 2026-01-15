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
    description: "No pyramid earnings, no recruitment-based income, and no chain structures.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Not Franchise",
    description: "No brand licensing fees, no territory restrictions, and no fixed royalty dependency.",
    icon: <Store className="w-5 h-5" />,
  },
  {
    title: "Not a Job",
    description: "This is a partnership and ownership model. You are not an employee; you are the owner of your brand.",
    icon: <Repeat className="w-5 h-5" />,
  },
  {
    title: "Not Investment",
    description: "This is not a passive or speculative return scheme. Income comes from real-world execution.",
    icon: <TrendingDown className="w-5 h-5" />,
  },
  {
    title: "Not Guaranteed",
    description: "Revenue is generated only from successful business execution and client delivery.",
    icon: <ShieldAlert className="w-5 h-5" />,
  },
];

export default function WhatIsNot() {
  const paths = [
    "M450 0V15C450 35 90 35 90 64",
    "M450 0V15C450 35 270 35 270 64",
    "M450 0V15C450 35 450 35 450 64",
    "M450 0V15C450 35 630 35 630 64",
    "M450 0V15C450 35 810 35 810 64",
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#020617] overflow-hidden text-white">
      {/* Background ambience */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-orange-900/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-slate-900/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-4">
              <ShieldAlert className="w-3 h-3 sm:w-4 sm:h-4" />
              What We Are Not
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight px-4">
              <span className="text-orange-400">Business Model</span>{" "}
              <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                Clarity
              </span>
            </h2>
          </FadeUp>
        </div>

        {/* TREE - Desktop Only */}
        <div className="hidden lg:flex flex-col items-center">
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

          {/* TREE DIAGRAM */}
          <FadeUp delay={0.2}>
            <div className="relative flex flex-col items-center">
              <div className="px-6 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-medium flex items-center gap-2 z-20">
                <X className="w-4 h-4" />
                Excluded Models
              </div>

              <div className="w-[900px] h-16 relative -mt-2">
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

          {/* LEAF CARDS - Desktop */}
          <div className="grid grid-cols-5 gap-6 w-full mt-6">
            {items.map((item, i) => (
              <FadeUp key={i} delay={0.4 + i * 0.1}>
                <div className="relative group p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md flex flex-col items-center text-center shadow-lg h-full overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-500 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* MOBILE/TABLET VIEW - Simplified */}
        <div className="lg:hidden">
          <FadeUp>
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-medium">
                <X className="w-4 h-4" />
                Excluded Models
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative group p-6 sm:p-7 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md flex flex-col items-center text-center shadow-lg overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-500 flex items-center justify-center mb-4 sm:mb-6">
                    {item.icon}
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* FOOTER NOTE */}
        <FadeUp delay={0.8}>
          <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
            <p className="text-xs sm:text-sm text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
              ZRYOSS is a structured business operating system designed for real execution, not passive income or speculative returns.
            </p>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        @keyframes pulse-line {
          0%, 100% { stroke-opacity: 0.3; }
          50% { stroke-opacity: 0.8; }
        }
        .pulse-line {
          animation: pulse-line 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
