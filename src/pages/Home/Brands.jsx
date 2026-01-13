import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Zap, Shield, Sparkles, ArrowUpRight } from "lucide-react";

/* Animation wrapper (unchanged) */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const brands = [
  {
    id: 1,
    name: "CLink HR",
    tagline: "Human Capital",
    desc:
      "Strategic recruitment and workforce management solutions designed for high-growth enterprises.",
    icon: <Layers size={28} />,
    color: "#f97316",
    bgGradient: "from-orange-600/20 to-black",
  },
  {
    id: 2,
    name: "Kryoss Softech",
    tagline: "Digital Systems",
    desc:
      "Next-generation software development, cloud infrastructure, and enterprise digital transformation.",
    icon: <Zap size={28} />,
    color: "#3b82f6",
    bgGradient: "from-blue-600/20 to-black",
  },
  {
    id: 3,
    name: "Adryoss",
    tagline: "Growth Engine",
    desc:
      "Performance marketing, brand acceleration, and data-driven customer acquisition strategies.",
    icon: <Sparkles size={28} />,
    color: "#a855f7",
    bgGradient: "from-purple-600/20 to-black",
  },
  {
    id: 4,
    name: "Future Verticals",
    tagline: "R&D Lab",
    desc:
      "Emerging technology research, market innovation labs, and future-proofing business models.",
    icon: <Shield size={28} />,
    color: "#10b981",
    bgGradient: "from-emerald-600/20 to-black",
  },
];

export default function Brands() {
  const [activeBrand, setActiveBrand] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden min-h-[900px] flex flex-col justify-center">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32 w-full">
        {/* HEADER */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <FadeUp>
            <span className="text-orange-500 text-xs uppercase tracking-[0.4em] mb-6 block font-semibold">
              The Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Pillars of{" "}
              <span className="text-orange-500">Zryoss</span>
            </h2>
          </FadeUp>
        </div>

        {/* ACCORDION */}
        <div className="flex flex-col lg:flex-row gap-6 h-[850px] lg:h-[520px]">
          {brands.map((brand, index) => {
            const isActive = activeBrand === index;

            return (
              <motion.div
                key={brand.id}
                layout
                onClick={() => setActiveBrand(index)}
                onHoverStart={() => setActiveBrand(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 transition-all duration-700
                  ${isActive
                    ? "lg:flex-[3] flex-[3] bg-[#0a0a0a]"
                    : "lg:flex-[1] flex-[1] bg-black hover:bg-[#0a0a0a]"
                  }`}
              >
                {/* Active Gradient */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-b ${brand.bgGradient}`}
                />

                {/* CONTENT */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between z-10">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center border backdrop-blur-md
                        ${isActive
                          ? "border-white/20 bg-white/10"
                          : "border-white/10 bg-white/5"
                        }`}
                      style={{ color: isActive ? brand.color : "#6b7280" }}
                    >
                      {brand.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Rotated title (desktop inactive) */}
                  {!isActive && (
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                      <h3 className="text-xl font-semibold text-gray-600 -rotate-90 tracking-widest uppercase">
                        {brand.name}
                      </h3>
                    </div>
                  )}

                  {/* Bottom */}
                  <div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs uppercase tracking-widest font-semibold"
                          style={{ color: brand.color }}
                        >
                          {brand.tagline}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <motion.h3
                      layout="position"
                      className={`mt-2 font-light text-white transition-all
                        ${isActive
                          ? "text-2xl md:text-3xl"
                          : "text-lg lg:opacity-0"
                        }`}
                    >
                      {brand.name}
                    </motion.h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-md leading-relaxed">
                            {brand.desc}
                          </p>

                          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white group">
                            <span className="border-b border-transparent group-hover:border-white transition-colors">
                              View Division
                            </span>
                            <ArrowUpRight
                              size={16}
                              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
