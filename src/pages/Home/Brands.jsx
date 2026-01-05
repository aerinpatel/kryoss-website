import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Shield, Sparkles, ArrowUpRight } from 'lucide-react';

/**
 * Custom Animation Component
 */
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
    desc: "Strategic recruitment and workforce management solutions designed for high-growth enterprises.", 
    icon: <Layers size={28} />, // Slightly smaller base size for better mobile fit
    color: "#f97316", // Orange
    bgGradient: "from-orange-600/20 to-black"
  },
  { 
    id: 2,
    name: "Kryoss Softech", 
    tagline: "Digital Systems",
    desc: "Next-generation software development, cloud infrastructure, and enterprise digital transformation.", 
    icon: <Zap size={28} />,
    color: "#3b82f6", // Blue
    bgGradient: "from-blue-600/20 to-black"
  },
  { 
    id: 3,
    name: "Adryoss", 
    tagline: "Growth Engine",
    desc: "Performance marketing, brand acceleration, and data-driven customer acquisition strategies.", 
    icon: <Sparkles size={28} />,
    color: "#a855f7", // Purple
    bgGradient: "from-purple-600/20 to-black"
  },
  { 
    id: 4,
    name: "Future Verticals", 
    tagline: "R&D Lab",
    desc: "Emerging technology research, market innovation labs, and future-proofing business models.", 
    icon: <Shield size={28} />,
    color: "#10b981", // Emerald
    bgGradient: "from-emerald-600/20 to-black"
  },
];

export default function Brands() {
  const [activeBrand, setActiveBrand] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 bg-[#050505] overflow-hidden min-h-[900px] lg:min-h-[800px] flex flex-col justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.03),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="mb-12 lg:mb-16 text-center">
          <FadeUp>
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
              The Ecosystem
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">
              Pillars of <span className="text-orange-500">Zryoss</span>
            </h2>
          </FadeUp>
        </div>

        {/* Interactive Accordion Container */}
        {/* Mobile: Vertical column (h-[850px]), Desktop: Horizontal row (h-[500px]) */}
        <div className="flex flex-col lg:flex-row gap-4 h-[850px] lg:h-[500px]">
          {brands.map((brand, index) => {
            const isActive = activeBrand === index;
            
            return (
              <motion.div
                key={brand.id}
                layout
                onClick={() => setActiveBrand(index)}
                onHoverStart={() => setActiveBrand(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/5
                  ${isActive 
                    ? 'lg:flex-[3] flex-[3] bg-[#0a0a0a]' // Takes up 3 units of space when active
                    : 'lg:flex-[1] flex-[1] bg-black hover:bg-[#0a0a0a]' // Takes up 1 unit when inactive
                  }
                `}
              >
                {/* Background Gradient (Active Only) */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-b ${brand.bgGradient}`}
                />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between z-10">
                  
                  {/* Top: Icon & Number */}
                  <div className="flex justify-between items-start">
                    <motion.div 
                      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center border backdrop-blur-md transition-colors duration-500
                        ${isActive 
                          ? `bg-${brand.color}/20 border-${brand.color}/30 text-white` 
                          : 'bg-white/5 border-white/10 text-gray-500'
                        }`}
                        style={{ color: isActive ? brand.color : undefined }}
                    >
                      {brand.icon}
                    </motion.div>
                    <span className="text-[10px] font-black text-white/20">0{index + 1}</span>
                  </div>

                  {/* Middle: Rotated Text for Inactive State (Desktop Only) */}
                  {!isActive && (
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                      <h3 className="text-2xl font-bold text-gray-600 -rotate-90 whitespace-nowrap tracking-widest uppercase">
                        {brand.name}
                      </h3>
                    </div>
                  )}

                  {/* Bottom: Main Content */}
                  <div className="relative">
                     <motion.div
                        layout
                        className="flex flex-col gap-2"
                     >
                        {/* Tagline */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.span 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-xs font-bold uppercase tracking-widest"
                              style={{ color: brand.color }}
                            >
                              {brand.tagline}
                            </motion.span>
                          )}
                        </AnimatePresence>
                        
                        {/* Title - Visible in plain white when inactive on mobile, colored/larger when active */}
                        <motion.h3 
                          layout="position"
                          className={`font-bold text-white transition-all duration-500 leading-tight
                            ${isActive 
                                ? 'text-2xl md:text-3xl lg:text-4xl' 
                                : 'text-lg lg:opacity-0' // lg:opacity-0 hides it on desktop inactive, but shows on mobile inactive
                            }
                          `}
                        >
                          {brand.name}
                        </motion.h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                              <p className="text-gray-400 mt-2 lg:mt-4 text-sm md:text-base leading-relaxed max-w-md">
                                {brand.desc}
                              </p>
                              
                              <div className="mt-6 lg:mt-8 flex items-center gap-2 text-sm font-bold text-white group">
                                <span className="border-b border-transparent group-hover:border-white transition-colors">View Division</span>
                                <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                     </motion.div>
                  </div>
                </div>

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}