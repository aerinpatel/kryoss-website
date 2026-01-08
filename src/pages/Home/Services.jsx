import React from "react";
import { Briefcase, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section className="relative bg-[#050505] py-24 text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ---------- CENTER HEADING ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-medium">
              Collaboration
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Strategic <span className="text-orange-500">Partnership</span> Models
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed font-light">
            Zryoss offers high-impact partnership models designed to help you
            scale without the burden of operational complexity.
          </p>
        </div>

        {/* ---------- CARDS GRID ---------- */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* IPP CARD */}
          <div className="group relative rounded-[2.5rem] p-8 md:p-10 bg-[#0A0A0A] border border-white/5 transition-all duration-500 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 overflow-hidden">

            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Operator Model
            </div>

            <div className="flex flex-col gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-500">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-1">IPP</h3>
                <p className="text-sm font-medium text-orange-500/90 uppercase tracking-widest">
                  Independent Profit Partner
                </p>
              </div>
            </div>

            <p className="text-gray-100 text-base leading-relaxed mb-6 font-light">
              Perfect for deal-closers who want to build their own revenue stream
              while Zryoss manages execution and delivery.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Operational execution by Zryoss",
                "Access to full technology ecosystem",
                "Dedicated account coordination",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-gray-300 font-light"
                >
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="
              w-full py-3.5 rounded-xl
              bg-white/5 border border-white/10
              flex items-center justify-center gap-2
              transition-all duration-300
              font-medium
              hover:bg-orange-500 hover:text-white
            ">
              Become an IPP <ArrowUpRight size={18} />
            </button>
          </div>

          {/* BPP CARD */}
          <div className="group relative rounded-[2.5rem] p-8 md:p-10 bg-[#0A0A0A] border border-white/5 transition-all duration-500 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 overflow-hidden">

            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Referral Model
            </div>

            <div className="flex flex-col gap-5 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-500">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-light mb-1">BPP</h3>
                <p className="text-sm font-medium text-orange-500/90 uppercase tracking-widest">
                  Business Promotion Partner
                </p>
              </div>
            </div>

            <p className="text-gray-100 text-base leading-relaxed mb-6 font-light">
              Designed for professionals and networks who want to monetize
              introductions while Zryoss handles sales and fulfillment.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Lead-driven earning structure",
                "No operational responsibility",
                "Transparent performance tracking",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-gray-300 font-light"
                >
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="
              w-full py-3.5 rounded-xl
              bg-white/5 border border-white/10
              flex items-center justify-center gap-2
              transition-all duration-300
              font-medium
              hover:bg-orange-500 hover:text-white
            ">
              Apply as BPP <ArrowUpRight size={18} />
            </button>
          </div>

        </div>

        <p className="text-center mt-16 text-gray-300 text-sm font-light">
          Not sure which model fits?{" "}
          <span className="text-orange-400 cursor-pointer hover:underline">
            Speak with a Partnership Expert
          </span>
        </p>

      </div>
    </section>
  );
}
