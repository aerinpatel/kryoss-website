import {
  Sparkles,
  PlugZap,
  ArrowUpRight,
  Layers,
  Workflow,
  Cpu,
  Users,
} from "lucide-react";

export default function WhatExactlyZryossSection() {
  const modules = [
    {
      id: "01",
      title: "Strategy & Structure",
      desc: "A clear framework that builds direction.",
      icon: Layers,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "02",
      title: "Execution & Support",
      desc: "Guided execution with support layers.",
      icon: Workflow,
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "03",
      title: "Technology & Operations",
      desc: "Tools + workflows built for scale.",
      icon: Cpu,
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "04",
      title: "Talent, Vendors & Growth",
      desc: "Channels & resources already available.",
      icon: Users,
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="relative bg-[#070A0F] py-16 md:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              What Exactly is Zryoss
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight text-white">
            A{" "}
            <span className="text-orange-500">Business Operating System</span>{" "}
            that brings everything together.
          </h2>

          <p className="mt-5 text-white/70 leading-relaxed text-base md:text-lg">
            Zryoss connects the essential building blocks needed to build and scale a
            brand — inside one execution-ready ecosystem.
          </p>
        </div>

        {/* SaaS Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Left: SaaS Modules */}
          <div className="space-y-5">
            {modules.map((m, idx) => {
              const Icon = m.icon;

              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition duration-300 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="sm:w-[180px] w-full h-[140px] sm:h-auto relative overflow-hidden">
                      <img
                        src={m.img}
                        alt={m.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition duration-500"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80";
                        }}
                      />

                      {/* Number pill */}
                      <div className="absolute top-3 left-3 rounded-full border border-white/15 bg-[#0B1220]/70 backdrop-blur px-3 py-1">
                        <p className="text-xs font-bold text-white">{m.id}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-white font-extrabold text-lg leading-snug">
                            {m.title}
                          </h3>
                          <p className="mt-1 text-white/65 text-sm leading-relaxed">
                            {m.desc}
                          </p>
                        </div>

                        {/* Icon */}
                        <div className="h-11 w-11 rounded-2xl border border-white/10 bg-[#0B1220]/60 flex items-center justify-center shadow-[0_0_25px_rgba(249,115,22,0.10)]">
                          <Icon size={20} className="text-orange-500" />
                        </div>
                      </div>

                      {/* Micro tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Tag>System-first</Tag>
                        <Tag>Execution-ready</Tag>
                        <Tag>Scalable</Tag>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Plug-in panel */}
          <aside className="rounded-[32px] border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 shadow-[0_0_40px_rgba(249,115,22,0.12)]">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl border border-white/10 bg-[#0B1220]/40 flex items-center justify-center">
                <PlugZap size={22} className="text-orange-400" />
              </div>

              <p className="text-orange-300 font-semibold tracking-widest text-xs uppercase">
                Plug into the Ecosystem
              </p>
            </div>

            <h4 className="mt-5 text-2xl font-extrabold text-white leading-snug">
              Don’t start from scratch.
            </h4>

            <p className="mt-4 text-white/75 text-sm leading-relaxed">
              Individuals and businesses can{" "}
              <span className="text-white font-semibold">
                plug into an already-built ecosystem
              </span>{" "}
              and start creating value immediately.
            </p>

            {/* Statement */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220]/50 p-6">
              <p className="text-white font-semibold">
                Zryoss does not replace your brand.
              </p>
              <p className="mt-1 text-orange-300 font-semibold text-sm">
                It empowers your brand.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3">
              <button className="rounded-2xl bg-orange-500 px-6 py-3 font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition">
                Explore the System
              </button>

              <button className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white hover:border-orange-500 hover:text-orange-300 transition inline-flex items-center justify-center gap-2">
                Join as IPP / BPP <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Bottom tags */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              <MiniCard label="System-first" />
              <MiniCard label="Ecosystem-backed" />
              <MiniCard label="Repeatable" />
              <MiniCard label="Long-term Growth" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-[#0B1220]/40 px-3 py-1 text-[11px] font-semibold text-white/75">
      {children}
    </span>
  );
}

function MiniCard({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center">
      <p className="text-white/80 text-xs font-semibold">{label}</p>
    </div>
  );
}
