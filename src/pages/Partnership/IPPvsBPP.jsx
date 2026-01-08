import React, { useState } from "react";
import Testimonials from "./Testimonials";
import {
  Check,
  X,
  Shield,
  Zap,
  Users,
  Briefcase,
  ArrowRight,
  ChevronDown,
  Info,
} from "lucide-react";
import FAQSection from "./FAQSection";
import ContactOffice from "./ContactOffice";



/* --- Comparison Data --- */
const comparisonData = [
  {
    feature: "Brand Ownership",
    ipp: "Your Own Brand (White-Label)",
    bpp: "Kryoss Powered/Co-Branded",
    info: "IPP allows you to hide Kryoss entirely from your clients.",
  },
  {
    feature: "Client Relationship",
    ipp: "Direct (You own the contract)",
    bpp: "Shared (Kryoss handles delivery)",
    info: "In BPP, Kryoss often joins the client calls as your technical arm.",
  },
  {
    feature: "Revenue Model",
    ipp: "Wholesale (You set the markup)",
    bpp: "Commission / Project Split",
    info: "IPP partners enjoy unlimited margins by controlling the retail price.",
  },
  {
    feature: "Technical Overhead",
    ipp: "None (Kryoss is the engine)",
    bpp: "Low (Kryoss handles execution)",
    info: "Both models remove the need for you to hire developers.",
  },
  {
    feature: "Support & Maintenance",
    ipp: "White-labeled SLAs",
    bpp: "Direct Kryoss Support",
    info: "IPP support appears to come from your agency's domain.",
  },
  {
    feature: "Minimum Commitment",
    ipp: "Monthly Retainer / Volume",
    bpp: "Project-based",
    info: "BPP is more flexible for occasional leads; IPP is for scaling agencies.",
  },
];

export default function IPPvsBPP() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000"
            alt="Global Network"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505] to-[#050505]" />

          {/* Animated Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500">
              Kryoss Ecosystem
            </span>
          </div>

          <h1 className="text-4xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter">
            One Engine. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-orange-500">
              Two Paths to Scale.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Compare our <strong>Independent Prime Partner</strong> and{" "}
            <strong>Business Prime Partner</strong> programs to find the perfect
            fit for your agency's operational style.
          </p>

          {/* Visual Path Selector Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-orange-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative px-8 py-4 bg-black rounded-full font-bold flex items-center gap-3 border border-white/10 group-hover:border-orange-500 transition-colors">
                Explore IPP <Shield size={18} className="text-orange-500" />
              </button>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-orange-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <button className="relative px-8 py-4 bg-black rounded-full font-bold flex items-center gap-3 border border-white/10 group-hover:border-orange-500 transition-colors">
                Explore BPP <Briefcase size={18} className="text-orange-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Metrics Decor */}
        <div className="hidden lg:block absolute bottom-10 left-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-bounce-slow">
          <p className="text-[10px] text-neutral-500 uppercase font-bold mb-1">
            IPP Focus
          </p>
          <p className="text-white font-mono">100% White-Label</p>
        </div>
        <div className="hidden lg:block absolute bottom-10 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-bounce-slow delay-700">
          <p className="text-[10px] text-neutral-500 uppercase font-bold mb-1">
            BPP Focus
          </p>
          <p className="text-white font-mono">Market Authority</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-[2rem] overflow-hidden bg-neutral-900/20 backdrop-blur-sm">
            {/* Header Labels (Desktop) */}
            <div className="hidden md:flex flex-col border-r border-white/5 bg-black/40">
              <div className="p-12 h-40 flex items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                  Feature Comparison
                </span>
              </div>
              {comparisonData.map((item, i) => (
                <div
                  key={i}
                  className="p-8 h-24 border-t border-white/5 flex items-center gap-2 group"
                >
                  <span className="text-neutral-300 font-medium">
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>

            {/* IPP Column */}
            <div className="flex flex-col border-r border-white/5 relative group">
              <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 md:p-12 h-40 flex flex-col justify-center relative z-10">
                <div className="text-orange-500 font-mono text-sm mb-2 font-bold">
                  MODEL 01
                </div>
                <h3 className="text-3xl font-bold">
                  Independent Partner (IPP)
                </h3>
              </div>
              {comparisonData.map((item, i) => (
                <div
                  key={i}
                  className="p-8 h-24 border-t border-white/5 flex flex-col justify-center relative z-10"
                >
                  <span className="md:hidden text-xs text-neutral-500 mb-1 uppercase tracking-tighter">
                    {item.feature}
                  </span>
                  <span className="text-white font-semibold">{item.ipp}</span>
                </div>
              ))}
              <div className="p-8 border-t border-white/5">
                <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-bold transition-all">
                  Select IPP Path
                </button>
              </div>
            </div>

            {/* BPP Column */}
            <div className="flex flex-col relative group">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 md:p-12 h-40 flex flex-col justify-center relative z-10">
                <div className="text-orange-500 font-mono text-sm mb-2 font-bold">
                  MODEL 02
                </div>
                <h3 className="text-3xl font-bold">Business Partner (BPP)</h3>
              </div>
              {comparisonData.map((item, i) => (
                <div
                  key={i}
                  className="p-8 h-24 border-t border-white/5 flex flex-col justify-center relative z-10"
                >
                  <span className="md:hidden text-xs text-neutral-500 mb-1 uppercase tracking-tighter">
                    {item.feature}
                  </span>
                  <span className="text-white font-semibold">{item.bpp}</span>
                </div>
              ))}
              <div className="p-8 border-t border-white/5">
                <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 rounded-xl font-bold transition-all">
                  Select BPP Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide Cards */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Which one is right for you?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-neutral-900 border border-orange-500/20 hover:border-orange-500 transition-colors">
              <Shield className="text-orange-500 w-12 h-12 mb-6" />
              <h4 className="text-2xl font-bold mb-4 text-white">
                Choose IPP If...
              </h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You have an
                  existing agency brand.
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You want 100%
                  control over pricing.
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You want to
                  own the intellectual property.
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You prefer
                  silent, backend delivery.
                </li>
              </ul>
            </div>

            <div className="p-10 rounded-3xl bg-neutral-900 border border-blue-500/20 hover:border-orange-500 transition-colors">
              <Briefcase className="text-orange-500 w-12 h-12 mb-6" />
              <h4 className="text-2xl font-bold mb-4 text-white">
                Choose BPP If...
              </h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You want to
                  leverage Kryoss's authority.
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You focus on
                  sales, not project management.
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You want
                  shared technical responsibility.
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-orange-500" /> You prefer a
                  commission-based revenue model.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    PARTNERSHIP DEPLOYMENT TIMELINE
===================================================== */}
      <section className="relative py-32 bg-[#020617] border-y border-white/5 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2
               w-[600px] h-[600px] bg-orange-500/10 blur-[160px]"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-sm uppercase tracking-widest text-orange-400 font-semibold">
              Onboarding Framework
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
              Path to <span className="text-orange-500">Partnership</span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              A structured, governance-led onboarding process designed to ensure
              alignment, compliance, and execution readiness — not rushed
              activations.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Partner Evaluation",
                desc: "Submission and internal assessment of capability, alignment, and execution readiness.",
              },
              {
                step: "03",
                title: "Model Alignment",
                desc: "Strategy discussion to finalize IPP or BPP based on governance and delivery scope.",
              },
              {
                step: "05",
                title: "Legal & Compliance",
                desc: "Execution of NDAs, agreements, and compliance documentation.",
              },
              {
                step: "07",
                title: "Operational Activation",
                desc: "Structured onboarding into Kryoss systems with defined roles and execution flow.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl
                     border border-white/10
                     bg-gradient-to-br from-white/5 to-white/[0.02]
                     backdrop-blur-md p-8
                     hover:border-orange-500/40
                     transition-all duration-300"
              >
                {/* Step Number */}
                <div
                  className="absolute -top-5 -left-5 w-12 h-12 rounded-xl
                       bg-orange-500 text-black font-bold
                       flex items-center justify-center shadow-lg"
                >
                  {item.step}
                </div>

                {/* Content */}
                <h4
                  className="mt-6 text-xl font-semibold text-white
                       group-hover:text-orange-400 transition"
                >
                  {item.title}
                </h4>

                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-16 text-xs text-gray-500 max-w-3xl">
            Timelines are indicative and may vary based on compliance checks,
            documentation completeness, and operational readiness.
          </p>
        </div>
      </section>
      
      <Testimonials />
      <FAQSection />
      <ContactOffice />
      
    </div>
  );
}
