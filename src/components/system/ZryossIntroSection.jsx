import { ArrowUpRight } from "lucide-react";

export default function ZryossIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#070A0F] py-14 md:py-20">
      {/* background glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
                Business Operating System
              </p>
            </div>

            {/* heading */}
            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Zryoss is <span className="text-orange-500">not a company.</span>
            </h1>

            {/* subheading */}
            <h2 className="mt-3 text-xl md:text-2xl font-semibold text-white/90">
              It is a <span className="text-orange-400">Business Operating System.</span>
            </h2>

            {/* content */}
            <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
              Zryoss is a system-driven business ecosystem designed to help individuals and
              organizations{" "}
              <span className="text-white font-semibold">
                build, run, and scale their own brands
              </span>{" "}
              in a structured and sustainable way.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
              In a world where jobs are limited and businesses often fail due to lack of execution,
              Zryoss exists to provide{" "}
              <span className="text-orange-300 font-semibold">
                clarity, structure, and operational support
              </span>{" "}
              — not just advice.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
                Explore the System
              </button>

              <button className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-400 transition inline-flex items-center gap-2">
                Learn More <ArrowUpRight size={18} />
              </button>
            </div>

            {/* small trust line */}
            <p className="mt-6 text-xs text-white/40 tracking-wide">
              Built for long-term stability • System-first execution • Ecosystem support
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-2xl -z-10" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
              <img
                className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Business Dashboard"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0B1220]/70 backdrop-blur p-5">
              <p className="text-white font-semibold">Your Brand. Our Engine.</p>
              <p className="text-white/60 text-sm mt-1">
                A structured system that supports execution and scalable growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
