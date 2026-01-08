import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2600, suffix: "+", label: "Business Ventures Transformed" },
  { value: 8, suffix: "+", label: "Mission-Critical Government Initiatives" },
  { value: 11, suffix: "+", label: "Years of Digital Engineering Excellence" },
  { value: 50, suffix: "+", label: "Technology Partnerships" },
  { value: 25, suffix: "+", label: "Enterprise AI Solutions Engineered" },
];

// fake / small company logos
const companies = [
  "NovaTech",
  "CloudNest",
  "ByteForge",
  "Growthly",
  "DataSprout",
  "CoreStack",
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = Math.ceil(value / 40);

          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              current = value;
              clearInterval(interval);
            }
            setCount(current);
          }, 25);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="relative bg-[#0b0b0b] py-40 overflow-hidden border-t border-white/5">
      {/* soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[900px] h-[900px] bg-orange-500/8 blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-24">
        {/* FAKE COMPANIES ROW */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-24 opacity-80">
          {companies.map((name, i) => (
            <div
              key={i}
              className="px-5 py-2 rounded-full border border-white/15
                         text-sm text-gray-300 tracking-wide
                         bg-white/[0.02]"
            >
              {name}
            </div>
          ))}
        </div>

        {/* MAIN BLOCK */}
        <div className="border border-white/10 rounded-3xl overflow-hidden shadow-[0_80px_180px_rgba(0,0,0,0.65)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-white">
                Architecting Digital Excellence
                <br />
                <span className="font-medium">
                  For 5,000+ Industry Leaders
                </span>
              </h2>
            </div>

            {/* RIGHT BIG NUMBER */}
            <div className="p-16 lg:p-20 flex flex-col justify-center">
              <div className="text-6xl md:text-7xl font-light text-white mb-6">
                <Counter value={2600} suffix="+" />
              </div>
              <p className="text-base text-gray-400">
                Business Ventures Transformed
              </p>
            </div>
          </div>

          {/* BOTTOM STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {stats.slice(1).map((item, i) => (
              <div
                key={i}
                className="p-12 text-center border-r last:border-r-0 border-white/10"
              >
                <div className="text-5xl font-light text-white mb-4">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
