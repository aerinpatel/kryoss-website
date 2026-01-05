import { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  Truck,
  ShieldCheck,
  Lock,
  AlertCircle,
  ArrowRight,
  Clock,
  DollarSign,
  RefreshCw,
  Zap,
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";
import SlideIn from "../../components/animations/SlideIn";
import Stagger from "../../components/animations/Stagger";

/* ===============================
   DATA
================================ */

const systems = [
  { name: "CRM & Lead Management", icon: BarChart3 },
  { name: "Central Demo Team", icon: Users },
  { name: "Vendor & Delivery Network", icon: Truck },
  { name: "Quality Assurance", icon: ShieldCheck },
  { name: "Risk & Compliance Control", icon: Lock },
];

const problems = [
  { icon: Clock, text: "High operational overhead" },
  { icon: RefreshCw, text: "Fragmented systems and tools" },
  { icon: AlertCircle, text: "Inconsistent delivery quality" },
  { icon: DollarSign, text: "Complex vendor coordination" },
];

/* ===============================
   MAIN COMPONENT
================================ */

export default function Platform() {
  return (
    <section className="py-24 bg-[var(--bg-main)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-48">

        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                Your Brand. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Our Engine.
                </span>
              </h1>
              <p className="mt-8 text-[var(--text-secondary)] text-xl max-w-lg">
                Zryoss is the Business OS that scales your brand while we
                handle execution.
              </p>

              {/* STATS */}
              <FadeUp delay={400}>
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">500+</div>
                    <div className="text-sm text-[var(--text-secondary)]">Businesses Scaled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">99.9%</div>
                    <div className="text-sm text-[var(--text-secondary)]">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">24/7</div>
                    <div className="text-sm text-[var(--text-secondary)]">Support</div>
                  </div>
                </div>
              </FadeUp>

              {/* CTA BUTTON */}
              <FadeUp delay={600}>
                <button className="mt-12 px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full
                                   font-bold transition-all hover:scale-105
                                   shadow-[0_0_30px_rgba(234,88,12,0.35)]
                                   flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </FadeUp>
            </div>
          </FadeUp>

          <SlideIn direction="right">
            <img
              src="/images/platform/platform-overview.png"
              alt="Zryoss Platform Overview"
              className="w-full drop-shadow-2xl"
            />
          </SlideIn>
        </div>

        {/* ================= PROBLEM ================= */}
        <div className="py-20 px-10 rounded-[40px] bg-white/[0.02] border border-white/5">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <SlideIn>
              <img
                src="/images/platform/traditional-businesses.jpeg"
                alt="Traditional business problems"
                className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </SlideIn>

            <FadeUp>
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  Traditional Scaling <br />
                  <span className="text-orange-500">Is Broken</span>
                </h2>

                <div className="space-y-4">
                  <Stagger staggerDelay={150} initialDelay={300}>
                    {problems.map((p, i) => {
                      const Icon = p.icon;
                      return (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl">
                          <Icon className="w-5 h-5 text-red-500" />
                          <span className="text-[var(--text-main)]">{p.text}</span>
                        </div>
                      );
                    })}
                  </Stagger>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ================= ZRYOSS ECOSYSTEM (IMAGE + POINTS) ================= */}
        <div className="space-y-20">

          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-xs text-orange-400 uppercase">
                  One Unified Ecosystem
                </span>
              </div>

              <h2 className="text-5xl font-bold">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Zryoss Ecosystem
                </span>
              </h2>

              <p className="mt-6 text-[var(--text-secondary)] text-lg">
                A single operational backbone powering every function
                of your business.
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* POINTS */}
            <SlideIn>
              <div className="space-y-6">
                <Stagger staggerDelay={120} initialDelay={200}>
                  {systems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-5 p-6 rounded-2xl
                                      bg-white/[0.03] border border-white/10
                                      hover:border-orange-500/40 transition-all">
                        <div className="p-3 bg-orange-500/10 rounded-xl">
                          <Icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            Fully integrated into one execution-driven platform
                            ensuring visibility, control, and scale.
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Stagger>
              </div>
            </SlideIn>

            {/* IMAGE */}
            <SlideIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-[120px]" />
                <img
                  src="/images/platform/zryoss-solves.jpg"
                  alt="Zryoss solves business complexity"
                  className="relative rounded-3xl border border-white/10
                             hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </SlideIn>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <FadeUp>
          <div className="p-14 rounded-3xl bg-gradient-to-r from-orange-500/20 to-transparent text-center">
            <p className="text-2xl max-w-3xl mx-auto">
              Zryoss removes the{" "}
              <span className="text-orange-500 font-semibold">
                operational burden
              </span>{" "}
              so you can focus purely on growth.
            </p>

            <button className="mt-10 px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full
                               font-bold transition-all hover:scale-105
                               shadow-[0_0_30px_rgba(234,88,12,0.35)]
                               flex items-center gap-2 mx-auto">
              Launch Your Platform
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
