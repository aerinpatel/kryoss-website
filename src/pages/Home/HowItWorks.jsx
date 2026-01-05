import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, ShieldAlert, Image as ImageIcon } from "lucide-react";
import Brands from "./Brands";
import CTA from "./CTA";
/**
 * Image Placeholder Component
 * Designed to be replaced with <img> tags later.
 */
const VisualAsset = ({ label, src }) => {
  const [hasError, setHasError] = useState(false);

  // Reset error state when the source changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div className="relative w-full max-w-md aspect-square bg-[#0a0a0a] border border-orange-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
      {/* 1. Actual Image Layer */}
      {src && !hasError ? (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        /* 2. Fallback Placeholder UI */
        <>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
              <ImageIcon size={32} className="text-orange-500/50" />
            </div>
            <div className="text-center px-8">
              <p className="text-orange-500 font-mono text-[10px] uppercase tracking-widest mb-2">
                Visual Asset
              </p>
              <p className="text-white text-sm font-medium opacity-60 italic">
                "{label}"
              </p>
            </div>
          </div>
        </>
      )}

      {/* Border Glow & Decorative Overlays */}
      <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/20 transition-colors duration-500 rounded-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

/**
 * Main HowItWorks Component
 * Updated with Orange & Black theme and image placeholders.
 */
const HowItWorks = () => {
  const containerRef = useRef(null);
  const [currentVisual, setCurrentVisual] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    [0, 1, 2, 3, 4]
  );

  useMotionValueEvent(activeIndex, "change", (latest) => {
    const rounded = Math.round(latest);
    if (rounded !== currentVisual && rounded >= 0 && rounded < 5) {
      setCurrentVisual(rounded);
    }
  });

  const sections = [
    {
      label: "Step 01",
      title: "Partner Onboarding",
      desc: "Partners join Zryoss to run their own business under their brand, leveraging our established infrastructure from day one.",
      points: [
        "Brand Integration",
        "Portal Access",
        "Standard Operating Procedures",
      ],
      visualLabel: "Dashboard Onboarding Screen",
      image: "/Partner-Onboarding.jpg", 
    },
    {
      label: "Step 02",
      title: "Sales & Lead Gen",
      desc: "Partners focus exclusively on client acquisition and relationship management without worrying about technical overhead.",
      points: ["Market Expansion", "Client Acquisition", "CRM Management"],
      visualLabel: "Lead Generation Interface",
      image: "/Sales-&-Lead-Generation.jpg",
    },
    {
      label: "Step 03",
      title: "Demo by Zryoss",
      desc: "Our centralized demo and pre-sales team handles the technical heavy lifting, presenting your brand with expert precision.",
      points: [
        "Technical Expertise",
        "Professional Presentation",
        "Higher Conversion Rates",
      ],
      visualLabel: "Technical Demo Presentation",
      image: "/Brand.jpg",
    },
    {
      label: "Step 04",
      title: "Delivery by Brands",
      desc: "Execution is handled by Zryoss brands and verified vendors, ensuring high-quality results and scalable operations.",
      points: [
        "Verified Vendors",
        "Quality Assurance",
        "End-to-End Fulfillment",
      ],
      visualLabel: "Order Fulfillment Workflow",
      image: "/Demo-by-Zryoss.jpg",
    },
    {
      label: "Step 05",
      title: "Reporting & Payout",
      desc: "Transparent reporting with performance-based payouts. Track every metric of your business growth in real-time.",
      points: [
        "Real-time Tracking",
        "Performance Incentives",
        "Zero Hidden Fees",
      ],
      visualLabel: "Analytics & Payout Chart",
      image: "/pay.jpg",
    },
  ];

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-[#020617] top-90 text-white font-sans w-full isolate"
        style={{ overflow: "visible" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row px-6 lg:px-24 relative overflow-visible">
          {/* LEFT SIDE: Scrolling Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            {sections.map((section, i) => (
              <div
                key={i}
                className="min-h-screen flex flex-col justify-center py-24 lg:pr-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ margin: "-20%" }}
                  className="space-y-8"
                >
                  <div className="text-orange-500 text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-orange-500" />{" "}
                    {section.label}
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none text-white">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                    {section.desc}
                  </p>
                  <div className="space-y-3">
                    {section.points.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium text-gray-300"
                      >
                        <div className="w-5 h-5 rounded-full border border-orange-500/30 flex items-center justify-center text-[10px] text-orange-500">
                          <ArrowRight size={12} />
                        </div>
                        {p}
                      </div>
                    ))}
                  </div>

                  {/* Mobile-only visual display */}
                  <div className="lg:hidden py-10 flex justify-center">
                    <VisualAsset 
                      label={section.visualLabel} 
                      src={section.image} 
                    />
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Spacer for bottom padding */}
            <div className="h-[20vh]" />
          </div>

          {/* RIGHT SIDE: Sticky Visual Container */}
          <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center pl-10 pointer-events-none self-start z-30">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-auto">
              {/* Background radial glow */}
              <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-[120px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVisual}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 40,
                    filter: "blur(12px)",
                  }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    scale: 1.05,
                    y: -40,
                    filter: "blur(12px)",
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex justify-center"
                >
                  <VisualAsset
                    label={sections[currentVisual]?.visualLabel}
                    src={sections[currentVisual]?.image}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-90">
        
      </div>
    </>
  );
};

export default HowItWorks;
