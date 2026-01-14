import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ZryossApproachSection() {
  const modules = [
    {
      id: "01",
      title: "System-first",
      desc: "Build structure before speed.",
      tag: "Structure",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "02",
      title: "Execution-driven",
      desc: "Framework that turns ideas into delivery.",
      tag: "Execution",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "03",
      title: "Ecosystem-supported",
      desc: "Support layers that remove dependency.",
      tag: "Ecosystem",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "04",
      title: "Scalable & repeatable",
      desc: "Designed to work again and again.",
      tag: "Scale",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="relative bg-[#070A0F] py-16 md:py-24 overflow-hidden">
      {/* background glows */}
      <div className="absolute -top-44 left-0 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-44 right-0 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Sparkles size={16} className="text-orange-500" />
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold">
              Zryoss Approach
            </p>
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Built for <span className="text-orange-500">Long-Term Growth</span>, not
            short-term wins.
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed text-base md:text-lg">
            Zryoss does not focus on short-term success. It is designed for{" "}
            <span className="text-white font-semibold">
              long-term stability and growth
            </span>
            <span className="text-white/70">.</span>
          </p>
        </motion.div>

        {/* ✅ Layout swapped: Spotlight LEFT, Modules RIGHT */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          {/* LEFT: spotlight panel */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="rounded-[34px] border border-orange-500/20 bg-gradient-to-b from-orange-500/12 to-transparent p-8 shadow-[0_0_45px_rgba(249,115,22,0.14)] overflow-hidden relative"
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

            <div className="flex items-center gap-3 relative">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-[#0B1220]/45 flex items-center justify-center">
                <TrendingUp size={22} className="text-orange-400" />
              </div>

              <div>
                <p className="text-orange-300 font-semibold tracking-widest text-xs uppercase">
                  Stability Framework
                </p>
                <h4 className="text-white font-extrabold text-2xl leading-snug">
                  Long-term stability + growth
                </h4>
              </div>
            </div>

            <p className="mt-6 text-white/75 text-sm leading-relaxed relative">
              Zryoss is designed like an operating system — where structure, execution,
              support and scalability work together to produce repeatable outcomes.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 relative">
              <Chip label="Clarity → Direction" />
              <Chip label="Direction → Structure" />
              <Chip label="Structure → Execution" />
              <Chip label="Execution → Growth" />
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-[#0B1220]/45 p-6 relative">
              <p className="text-white font-semibold">Not built for hype.</p>
              <p className="mt-1 text-orange-300 font-semibold">
                Built for repeatable outcomes.
              </p>
            </div>

            <button className="mt-7 w-full rounded-2xl bg-orange-500 px-6 py-3 font-bold text-black shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:bg-orange-600 transition inline-flex items-center justify-center gap-2">
              Explore the System <ArrowUpRight size={18} />
            </button>
          </motion.aside>

          {/* RIGHT: modules list */}
          <div className="space-y-5">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: idx * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/[0.07] transition duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-[190px] w-full h-[140px] sm:h-auto relative overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.05] transition duration-700"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80";
                      }}
                    />

                    <div className="absolute top-3 left-3 rounded-full border border-white/15 bg-[#0B1220]/70 backdrop-blur px-3 py-1">
                      <p className="text-xs font-bold text-white">{m.id}</p>
                    </div>
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-white font-extrabold text-lg leading-snug">
                          {m.title}
                        </h3>
                        <p className="mt-2 text-white/65 text-sm leading-relaxed">
                          {m.desc}
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-[#0B1220]/40 px-3 py-1 text-[11px] font-semibold text-white/70">
                        {m.tag}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Tag>System-first</Tag>
                      <Tag>Execution-ready</Tag>
                      <Tag>Repeatable</Tag>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* small components */
function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-[#0B1220]/40 px-3 py-1 text-[11px] font-semibold text-white/75">
      {children}
    </span>
  );
}

function Chip({ label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/45 px-4 py-3 text-center">
      <p className="text-white/80 text-xs font-semibold tracking-wide">{label}</p>
    </div>
  );
}
