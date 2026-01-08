import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

/* ---------- Visual Placeholder ---------- */
const VisualAsset = ({ label, src }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  return (
    <div className="relative w-full max-w-md aspect-square bg-[#0a0a0a] border border-orange-500/20 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
      {src && !hasError ? (
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/30">
              <ImageIcon size={32} className="text-orange-500/50" />
            </div>
            <p className="text-white text-sm font-light opacity-60 italic">
              "{label}"
            </p>
          </div>
        </>
      )}
    </div>
  );
};

/* ---------- MAIN COMPONENT ---------- */
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
      desc:
        "Partners join Zryoss to run their own business under their brand, leveraging our established infrastructure from day one.",
      points: ["Brand Integration", "Portal Access", "Standard Operating Procedures"],
      visualLabel: "Dashboard Onboarding Screen",
      image: "/Partner-Onboarding.jpg",
    },
    {
      label: "Step 02",
      title: "Sales & Lead Gen",
      desc:
        "Partners focus exclusively on client acquisition and relationship management without worrying about technical overhead.",
      points: ["Market Expansion", "Client Acquisition", "CRM Management"],
      visualLabel: "Lead Generation Interface",
      image: "/Sales-&-Lead-Generation.jpg",
    },
    {
      label: "Step 03",
      title: "Demo by Zryoss",
      desc:
        "Our centralized demo and pre-sales team handles the technical heavy lifting, presenting your brand with expert precision.",
      points: ["Technical Expertise", "Professional Presentation", "Higher Conversion Rates"],
      visualLabel: "Technical Demo Presentation",
      image: "/Brand.jpg",
    },
    {
      label: "Step 04",
      title: "Delivery by Brands",
      desc:
        "Execution is handled by Zryoss brands and verified vendors, ensuring high-quality results and scalable operations.",
      points: ["Verified Vendors", "Quality Assurance", "End-to-End Fulfillment"],
      visualLabel: "Order Fulfillment Workflow",
      image: "/Demo-by-Zryoss.jpg",
    },
    {
      label: "Step 05",
      title: "Reporting & Payout",
      desc:
        "Transparent reporting with performance-based payouts. Track every metric of your business growth in real-time.",
      points: ["Real-time Tracking", "Performance Incentives", "Zero Hidden Fees"],
      visualLabel: "Analytics & Payout Chart",
      image: "/pay.jpg",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] text-white w-full isolate"
    >
      {/* ✅ SECTION HEADING (RESTORED) */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32 pt-28 pb-16 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.4em] text-orange-500 font-semibold block mb-6">
          How It Works
        </span>
        <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-4xl">
          A Structured Execution Model
          <span className="block text-orange-400 mt-3">
            Built for Scale & Control
          </span>
        </h2>
      </div>

      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row px-6 lg:px-28 xl:px-32">
        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2">
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
                <div className="text-orange-500 text-xs uppercase tracking-[0.4em] font-semibold flex items-center gap-3">
                  <span className="w-8 h-px bg-orange-500" />
                  {section.label}
                </div>

                <h3 className="text-4xl md:text-5xl font-light leading-tight">
                  {section.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                  {section.desc}
                </p>

                <div className="space-y-3">
                  {section.points.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <div className="w-5 h-5 rounded-full border border-orange-500/30 flex items-center justify-center">
                        <ArrowRight size={12} className="text-orange-500" />
                      </div>
                      {p}
                    </div>
                  ))}
                </div>

                <div className="lg:hidden py-10 flex justify-center">
                  <VisualAsset label={section.visualLabel} src={section.image} />
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-[20vh]" />
        </div>

        {/* RIGHT STICKY VISUAL */}
        <div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVisual}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <VisualAsset
                label={sections[currentVisual]?.visualLabel}
                src={sections[currentVisual]?.image}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
