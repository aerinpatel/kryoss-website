import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import {
  BarChart3,
  ShieldCheck,
  Users2,
  PenTool,
  Presentation,
  FileCheck,
  Headphones,
} from "lucide-react";

const services = [
  {
    title: "Brand & Business Setup",
    desc: "Complete infrastructure for your brand launch, from legal frameworks to operational setup.",
    icon: <PenTool className="w-8 h-8" />, 
  },
  {
    title: "Sales & Demo Enablement",
    desc: "Domain experts handle your technical pitches and product demos, ensuring professional closure.",
    icon: <Presentation className="w-8 h-8" />, 
  },
  {
    title: "Execution & Delivery",
    desc: "End-to-end fulfillment handled by specialist brands, guaranteeing technical excellence.",
    icon: <FileCheck className="w-8 h-8" />, 
  },
  {
    title: "Vendor Coordination",
    desc: "Management of all external partners and technical teams so you never have to chase execution.",
    icon: <Users2 className="w-8 h-8" />, 
  },
  {
    title: "Quality Governance",
    desc: "Strict protocol-driven quality control at every stage of the project lifecycle.",
    icon: <ShieldCheck className="w-8 h-8" />, 
  },
  {
    title: "Account Management",
    desc: "A dedicated lead coordinates all backend activities, serving as your internal primary contact.",
    icon: <Headphones className="w-8 h-8" />, 
  },
  {
    title: "Reporting & Escalation",
    desc: "Transparent real-time visibility into project health, performance metrics, and rapid resolution.",
    icon: <BarChart3 className="w-8 h-8" />, 
  },
];

export default function ManagementSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a] border-y border-white/5 relative z-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-28 xl:px-32">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4 sm:mb-6 block">
                The Backend Engine
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6">
                What ZRYOSS <br className="hidden sm:block" />
                <span className="text-orange-400">Manages for You</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                We operate as your complete backend business engine, removing the
                operational friction of running a professional service brand.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-orange-500/5 border border-orange-500/20 max-w-sm">
              <p className="text-orange-400 text-sm sm:text-base font-medium italic">
                "You never chase execution. <br />
                You never manage vendors."
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {services.map((svc, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="group p-8 rounded-3xl bg-[#121212] border border-white/5 
                /* Subtle Orange Shadow for Base State */
                shadow-[0_4px_20px_rgba(249,115,22,0.04)] 
                /* Glowing Orange Shadow on Hover */
                hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] 
                hover:bg-[#1a1a1a] hover:-translate-y-2 hover:rotate-1 
                transition-all duration-500 ease-out h-full flex flex-col cursor-default">
                
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {svc.icon}
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                  {svc.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {svc.desc}
                </p>
              </div>
            </FadeUp>
          ))}

          <FadeUp delay={0.8}>
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-orange-600 to-red-600 h-full flex flex-col justify-center items-center text-center 
              /* Matching Glow for the CTA Card */
              shadow-[0_10px_30px_rgba(249,115,22,0.2)]
              hover:shadow-[0_20px_50px_rgba(249,115,22,0.35)]
              hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 ease-out">
              <h3 className="text-xl font-bold text-white mb-4">
                Scale Without Limits
              </h3>
              <p className="text-white/80 text-sm mb-6 font-light">
                Ready to delegate your operations to a proven system?
              </p>
              <button className="px-6 py-2 bg-white text-orange-600 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Apply as Partner
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}