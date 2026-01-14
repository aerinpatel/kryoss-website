import { CheckCircle2 } from "lucide-react";

export default function ProblemZryossSolvesSection() {
  const points = [
    "Ideas without execution",
    "Businesses without structure",
    "Growth without scalability",
    "Individuals without direction",
  ];

  return (
    <section className="relative bg-[#070A0F] py-14 md:py-20">
      {/* subtle bg */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
              <img
                className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
                alt="Problem and solution system"
              />
            </div>

            {/* small floating label */}
            <div className="absolute top-6 left-6 rounded-full border border-white/10 bg-[#0B1220]/70 backdrop-blur px-4 py-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Problem → System
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
                The Core Problem
              </p>
            </div>

            <h2 className="mt-6 text-2xl md:text-4xl font-extrabold text-white leading-tight">
              The Problem Zryoss Solves
            </h2>

            <p className="mt-5 text-white/70 leading-relaxed text-base md:text-lg">
              Most people do not fail because they lack talent or ambition.
              <br />
              They fail because they lack a <span className="text-orange-400 font-semibold">system</span>.
            </p>

            {/* bullet points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0B1220]/50 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 text-orange-500" size={18} />
                  <p className="text-white/80 text-sm">{p}</p>
                </div>
              ))}
            </div>

            {/* highlight note */}
            <div className="mt-7 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5 glow">
              <p className="text-white/80 leading-relaxed">
                Traditional models focus on services, motivation, or short-term solutions.
                <br />
                <span className="text-orange-300 font-semibold">
                  Zryoss focuses on building a working system
                </span>{" "}
                that stays with you long term.
              </p>
            </div>

            {/* small footer */}
            <p className="mt-6 text-xs text-white/40 tracking-wide">
              Execution • Structure • Scalability • Direction
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
