import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Shield,
  Sparkles,
  ArrowUpRight,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* Animation wrapper */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const brands = [
  {
    id: 1,
    name: "IT & Software",
    tagline: "Kryoss Softech",
    desc:
      "Next-generation software development, cloud infrastructure, and enterprise digital transformation delivered with precision.",
    icon: <Zap size={28} />,
    color: "#3b82f6",
    bgGradient: "from-blue-600/20 to-black",
  },
  {
    id: 2,
    name: "Digital Marketing",
    tagline: "Adryoss",
    desc:
      "Performance marketing, brand acceleration, and data-driven customer acquisition strategies to drive real-world growth.",
    icon: <Sparkles size={28} />,
    color: "#f97316",
    bgGradient: "from-orange-600/20 to-black",
  },
  {
    id: 3,
    name: "HR & Recruitment",
    tagline: "Clink HR",
    desc:
      "Strategic recruitment, talent management, and workforce solutions designed for high-growth enterprises.",
    icon: <Users size={28} />,
    color: "#10b981",
    bgGradient: "from-emerald-600/20 to-black",
  },
  {
    id: 4,
    name: "Education & EdTech",
    tagline: "Edulinker",
    desc:
      "Innovative learning platforms and educational technology solutions designed to bridge the skills gap.",
    icon: <Layers size={28} />,
    color: "#a855f7",
    bgGradient: "from-purple-600/20 to-black",
  },
  {
    id: 5,
    name: "Healthcare Tech",
    tagline: "Medikryoss",
    desc:
      "Advanced healthcare IT, medical technology platforms, and patient management systems.",
    icon: <Shield size={28} />,
    color: "#ef4444",
    bgGradient: "from-red-600/20 to-black",
  },
  {
    id: 6,
    name: "Interior & Infrastructure",
    tagline: "Vyombiz",
    desc:
      "End-to-end interior design, infrastructure planning, and commercial space optimization.",
    icon: <Zap size={28} />,
    color: "#eab308",
    bgGradient: "from-yellow-600/20 to-black",
  },
  {
    id: 7,
    name: "Professional Services",
    tagline: "Business Consult",
    desc:
      "Legal, compliance, and professional business services governed by centralized quality standards.",
    icon: <Sparkles size={28} />,
    color: "#6366f1",
    bgGradient: "from-indigo-600/20 to-black",
  },
];

// duplicate for infinite loop
const infiniteBrands = [...brands, ...brands, ...brands];

export default function Brands() {
  const trackRef = useRef(null);
  const [x, setX] = useState(0);
  const [paused, setPaused] = useState(false);

  const SPEED = 0.4;

  useEffect(() => {
    if (paused) return;

    let raf;
    const animate = () => {
      setX((prev) => {
        const width = trackRef.current.scrollWidth / 3;
        if (Math.abs(prev) >= width) {
          return 0;
        }
        return prev - SPEED;
      });
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const handlePrev = () => setX((prev) => prev + 300);
  const handleNext = () => setX((prev) => prev - 300);

  return (
    <section
      id="ecosystem"
      className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden"
    >
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32">
        {/* HEADER */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <FadeUp>
            <span className="text-orange-500 text-xs uppercase tracking-[0.4em] block mb-6">
              The Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Pillars of <span className="text-orange-500">Zryoss</span>
            </h2>
          </FadeUp>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex gap-6"
              style={{ transform: `translateX(${x}px)` }}
            >
              {infiniteBrands.map((brand, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
                  whileHover={{ scale: 1.03 }}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  <div className="h-[420px] rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden relative group cursor-pointer">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${brand.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                      {/* Top Section */}
                      <div className="flex justify-between items-start">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300"
                          style={{ color: brand.color }}
                        >
                          {brand.icon}
                        </div>
                        <span className="text-xs font-semibold text-white/20 group-hover:text-white/30 transition-colors">
                          {String((i % brands.length) + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Bottom Section */}
                      <div>
                        <span
                          className="text-xs uppercase tracking-widest font-semibold block mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                          style={{ color: brand.color }}
                        >
                          {brand.tagline}
                        </span>

                        <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white transition-colors">
                          {brand.name}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                          {brand.desc}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                          <span className="border-b border-transparent group-hover:border-white/50">
                            View Division
                          </span>
                          <ArrowUpRight
                            size={16}
                            className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
