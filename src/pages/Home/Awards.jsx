import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
  {
    title: "Top App Development Company",
    org: "by AppFutura",
    logo: "🏆",
  },
  {
    title: "Top Blockchain App Developers",
    org: "by GoodFirms",
    logo: "🛡️",
  },
  {
    title: "Top Mobile App Development Companies",
    org: "by ITFirms",
    logo: "📱",
  },
  {
    title: "Top Mobile App Developers in India",
    org: "by Clutch",
    logo: "⭐",
  },
];

export default function Awards() {
  return (
    <section className="relative bg-[#050505] py-40 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[180px]" />
      </div>

      {/* Grid floor */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to top, transparent 0%, black 40%, black 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-24">
        {/* CENTER HEADING */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <p className="text-[11px] tracking-[0.4em] uppercase text-orange-400 mb-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Awards
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Every Award Marks a Milestone
            <br />
            <span className="text-white">
              in Our Journey of Excellence
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="relative flex items-center gap-8">
          {/* Left Arrow */}
          <button className="hidden md:flex w-14 h-14 rounded-full border border-white/15 items-center justify-center text-white hover:bg-white/10 transition">
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex-1">
            {awards.map((award, i) => (
              <div
                key={i}
                className="relative group
                  rounded-xl
                  border border-white/15
                  bg-gradient-to-b from-white/[0.06] to-black
                  p-10 text-center
                  aspect-square
                  flex flex-col justify-center
                  shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                  hover:shadow-[0_50px_120px_rgba(0,0,0,0.9)]
                  transition-all duration-500"
              >
                {/* Logo */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-lg
                  bg-black/60 border border-white/15 
                  flex items-center justify-center text-3xl">
                  {award.logo}
                </div>

                <div className="h-px w-16 mx-auto mb-6 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <h4 className="text-lg font-normal leading-snug mb-2">
                  {award.title}
                </h4>
                <p className="text-sm text-gray-400">{award.org}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex w-14 h-14 rounded-full border border-white/15 items-center justify-center text-white hover:bg-white/10 transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
