import { useState } from "react";
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
  {
    name: "CRM & Lead Management",
    icon: BarChart3,
    image: "https://picsum.photos/seed/crm-dashboard-ui/1400/900",
    description:
      "Centralized CRM system to manage leads, pipelines, and customer relationships with real-time insights.",
  },
  {
    name: "Central Demo Team",
    icon: Users,
    image: "https://picsum.photos/seed/product-demo-team/1400/900",
    description:
      "A centralized demo and onboarding team that ensures consistent product walkthroughs and faster conversions.",
  },
  {
    name: "Vendor & Delivery Network",
    icon: Truck,
    image: "https://picsum.photos/seed/vendor-management-system/1400/900",
    description:
      "Integrated vendor and delivery network enabling smooth coordination, tracking, and scalable execution.",
  },
  {
    name: "Quality Assurance",
    icon: ShieldCheck,
    image: "https://picsum.photos/seed/software-quality-testing/1400/900",
    description:
      "Structured quality assurance workflows with testing, monitoring, and performance validation at every stage.",
  },
  {
    name: "Risk & Compliance Control",
    icon: Lock,
    image: "https://picsum.photos/seed/security-compliance-dashboard/1400/900",
    description:
      "Compliance and risk management systems designed to safeguard data, operations, and regulatory requirements.",
  },
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
  const [activeSystem, setActiveSystem] = useState(systems[0]);

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

              <p className="mt-8 text-xl text-gray-400 max-w-lg">
                Zryoss is the Business OS that scales your brand while we handle execution.
              </p>

              <FadeUp delay={400}>
                <div className="mt-12 grid grid-cols-3 gap-8">
                  <Stat value="500+" label="Businesses Scaled" />
                  <Stat value="99.9%" label="Uptime Guarantee" />
                  <Stat value="24/7" label="Support" />
                </div>
              </FadeUp>

              <FadeUp delay={600}>
                <button className="mt-12 px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full
                  text-white font-bold transition-all hover:scale-105
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
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl"
                        >
                          <Icon className="w-5 h-5 text-orange-500" />
                          <span>{p.text}</span>
                        </div>
                      );
                    })}
                  </Stagger>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ================= ECOSYSTEM ================= */}
        <div className="space-y-16">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-xs text-orange-400 uppercase tracking-widest">
                  One Unified Ecosystem
                </span>
              </div>

              <h2 className="text-5xl font-bold">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Zryoss Ecosystem
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-400">
                A single operational backbone powering every function of your business.
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/[0.02] p-8 rounded-[40px] border border-white/5">

            {/* LEFT LIST */}
            <SlideIn>
              <div className="flex flex-col gap-4">
                <Stagger staggerDelay={80}>
                  {systems.map((item, i) => {
                    const Icon = item.icon;
                    const isActive = activeSystem.name === item.name;

                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setActiveSystem(item)}
                        className={`group flex items-start gap-5 p-5 rounded-2xl transition-all cursor-pointer border
                          ${isActive
                            ? "bg-orange-500/10 border-orange-500/30"
                            : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/10"}
                        `}
                      >
                        <div className={`p-3 rounded-xl shrink-0
                          ${isActive
                            ? "bg-orange-500 text-black"
                            : "bg-white/5 text-gray-400 group-hover:text-orange-500"}
                        `}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div>
                          <h4 className={`text-base font-bold ${isActive ? "text-orange-400" : "text-white"}`}>
                            {item.name}
                          </h4>
                          <p
                            className={`text-sm leading-relaxed transition-all duration-300
                              ${isActive
                                ? "text-gray-300 mt-2 opacity-100"
                                : "text-gray-500 h-0 opacity-0 overflow-hidden"}
                            `}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Stagger>
              </div>
            </SlideIn>

            {/* RIGHT IMAGE */}
            <SlideIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px]" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={activeSystem.image}
                    alt={activeSystem.name}
                    className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {activeSystem.name}
                    </h3>
                  </div>
                </div>
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
              text-white font-bold transition-all hover:scale-105
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

/* ===============================
   SMALL COMPONENT
================================ */

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-orange-500">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
