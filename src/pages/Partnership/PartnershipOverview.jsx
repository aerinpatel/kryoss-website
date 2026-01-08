import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
import Contact from "../Contact/Contact";
import Industries from "./Industries"

import {
  ShieldCheck,
  Building2,
  ArrowRight,
  Cpu,
  Users,
  TrendingUp,
  Landmark,
} from "lucide-react";
import FAQSection from "./FAQSection";

export default function Overview() {
  
  return (
    <div className="bg-[#020617] text-white overflow-hidden font-sans">
      {/* =====================================================
          HERO SECTION (WITH REALISTIC IMAGE)
      ====================================================== */}
      <section className="relative min-h-screen flex items-center border-b border-white/5">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&fit=crop"
          alt="Business execution"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-[#020617]" />

        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[160px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1.5 text-[11px] tracking-widest uppercase
                       text-orange-400 bg-white/5 border border-white/10 rounded-full"
          >
            Execution-First Operating Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Structured <span className="text-orange-500">Execution</span>
            <br />
            for Modern Organizations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Kryoss provides a governed execution layer across technology, legal,
            and infrastructure — enabling businesses to operate with clarity,
            accountability, and control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition flex items-center gap-2">
              Book Operating Audit <ArrowRight size={16} />
            </button>

            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
              Platform Overview
            </button>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CORE CAPABILITIES
      ====================================================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Capabilities
          </h2>
          <p className="text-slate-400 max-w-xl mb-14">
            Integrated execution across the most critical operational pillars.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Capability
              icon={<Cpu />}
              title="Technology Enablement"
              desc="Cloud systems, secure architectures, and scalable software execution."
            />
            <Capability
              icon={<ShieldCheck />}
              title="Legal & Compliance"
              desc="Governance frameworks, regulatory execution, and risk control."
            />
            <Capability
              icon={<Building2 />}
              title="Infrastructure & Operations"
              desc="Real estate, vendors, and operational execution through verified partners."
            />
          </div>
        </div>
      </section>
      {/*     industries    */}
      <Industries />

      {/* =====================================================
          WHO KRYOSS IS BUILT FOR
      ====================================================== */}
      <section className="relative py-28 bg-black/40">
        {/* Soft background image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05]"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who Kryoss Is Built For
          </h2>

          <p className="text-slate-400 max-w-2xl mb-16">
            Kryoss is designed for organizations that require execution
            discipline, governance, and predictable outcomes — not ad-hoc
            services.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Audience
              icon={<Users />}
              title="Founders & Startups"
              desc="Build compliant, execution-ready foundations without hiring large internal teams."
            />
            <Audience
              icon={<TrendingUp />}
              title="Growing Companies"
              desc="Scale operations, systems, and infrastructure while maintaining control and governance."
            />
            <Audience
              icon={<Landmark />}
              title="Enterprises"
              desc="Execute across technology, legal, and infrastructure with SLA-driven accountability."
            />
          </div>
        </div>
      </section>
     {/* =====================================================
          client testomnial
      ====================================================== */}
      <Testimonials />
      <Contact />



      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl bg-orange-500 p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to systematize execution?
          </h2>
          <button className="px-10 py-4 bg-black text-white rounded-xl font-semibold">
            Apply Now
          </button>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-600 border-t border-white/5">
        KRYOSS OPERATING SYSTEMS © 2026
      </footer>
      <FAQSection />
    </div>
  );
}

/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

function Capability({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-500/40 transition">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function Audience({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-orange-500/40 transition">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>

  );
}
