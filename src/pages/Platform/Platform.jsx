import React, { useState, useEffect, useRef } from "react";
import {
  BarChart3,
  Users,
  ShieldCheck,
  Lock,
  ArrowRight,
  Clock,
  CheckCircle2,
  Layers,
  Code2,
  Globe,
  Database,
  ChevronDown,
  ChevronUp,
  Play,
  MessageSquare,
  Workflow,
  Quote,
  Zap,
  Cpu,
  Server,
  Terminal,
  Shield,
  Search,
  BookOpen,
  LifeBuoy,
  Calendar,
  Sparkles,
  Layout,
  Briefcase,
  XCircle,
  TrendingUp,
  UserPlus
} from "lucide-react";

/* ===============================
   ANIMATION WRAPPER
================================ */
const Reveal = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (direction === "up") return "translateY(30px)";
    if (direction === "down") return "translateY(-30px)";
    if (direction === "left") return "translateX(30px)";
    if (direction === "right") return "translateX(-30px)";
    return "none";
  };

  return (
    <div
      ref={ref}
      style={{
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : getTransform(),
      }}
      className={className}
    >
      {children}
    </div>
  );
};

/* ===============================
   DATA & CONFIG
================================ */

const integrations = ["Slack", "Salesforce", "HubSpot", "Shopify", "Zapier", "Notion", "Jira", "Stripe", "Asana", "Segment", "Intercom", "Airtable"];

const powerFeatures = [
  { title: "Custom CSS", icon: Code2, desc: "Total control over UI styling." },
  { title: "Webhooks", icon: Zap, desc: "Real-time event triggering." },
  { title: "SSO/SAML", icon: Lock, desc: "Enterprise-grade auth." },
  { title: "Audit Logs", icon: Search, desc: "Track every single change." },
  { title: "Multi-tenancy", icon: Layers, desc: "Manage separate orgs." },
  { title: "Version Control", icon: Terminal, desc: "Roll back with one click." },
  { title: "Bulk Editing", icon: Layout, desc: "Update thousands of rows." },
  { title: "Custom Roles", icon: Users, desc: "Granular permission logic." },
];

const templates = [
  { title: "Project Tracker", category: "Ops", icon: Calendar },
  { title: "CRM Lite", category: "Sales", icon: Users },
  { title: "Inventory Manager", category: "Retail", icon: Database },
  { title: "Sprint Planner", category: "Dev", icon: Cpu },
  { title: "Content Calendar", category: "Marketing", icon: Layout },
];

const faqs = [
  { q: "How secure is my data?", a: "We use AES-256 encryption at rest and TLS 1.3 in transit. SOC2 Type II compliant." },
  { q: "Do I need coding skills?", a: "No. Our visual builder is 100% no-code, though we offer CSS/JS overrides for power users." },
  { q: "What is the uptime SLA?", a: "We guarantee 99.9% uptime for our Business and Enterprise customers." }
];

/* ===============================
   COMPONENTS
================================ */

const InfiniteMarquee = ({ items }) => (
  <div className="relative flex overflow-x-hidden py-12">
    <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
      {[...items, ...items].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-orange-500/30 transition-all cursor-default group">
          <Globe className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
          <span className="text-lg font-medium text-neutral-300 group-hover:text-white">{item}</span>
        </div>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [openFaq, setOpenFaq] = useState(null);

  const useCases = {
    Marketing: { title: "Campaigns on Autopilot", desc: "Automate lead scoring and behavioral triggers.", points: ["Dynamic Segmentation", "A/B Testing"] },
    Sales: { title: "Close Deals Faster", desc: "Real-time engagement alerts and auto-follow-ups.", points: ["Lead Routing", "Contract AI"] },
    Product: { title: "Iterate with Data", desc: "Sync feedback loops directly into your roadmap.", points: ["User Mapping", "Feature Flags"] },
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } }
      `}</style>

      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] font-bold text-orange-400 tracking-[0.2em] uppercase">V2.0 Intelligence Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              The Operating System for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Modern Business.</span>
            </h1>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Consolidate your stack, automate your workflows, and scale without friction on the world's first unified enterprise platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]">
                Start Building Free
              </button>
              <button className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all backdrop-blur-md flex items-center gap-2 justify-center">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] text-center text-neutral-500 mb-8 uppercase tracking-[0.4em] font-black">Trusted by Global Challengers</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale items-center">
            {["ACME", "VOLT", "NEBULA", "QUARK", "APEX"].map(l => (
              <span key={l} className="text-2xl font-black tracking-tighter">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM/AGITATION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complexity is killing your <span className="text-orange-500 italic">momentum</span>.</h2>
            <p className="text-neutral-400 text-lg">Every new tool adds a new silo. Every silo adds an hour of manual work. It's time to break the cycle.</p>
          </Reveal>
        </div>
      </section>

      {/* 4. DAY IN THE LIFE (COMPARISON) */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold">The difference is night and day.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-1 border border-white/5 rounded-[2.5rem] overflow-hidden bg-white/5">
            {/* Before */}
            <div className="bg-[#0c0c0c] p-10 md:p-16">
              <div className="flex items-center gap-3 mb-8 text-red-500/50">
                <XCircle className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">The Old Chaos</span>
              </div>
              <ul className="space-y-8">
                {[
                  { t: "Manual Spreadsheets", d: "Data grows stale the second it's entered." },
                  { t: "Lost Email Threads", d: "Context disappears in 50+ message chains." },
                  { t: "Missed Deadlines", d: "Silos mean nobody knows who owns what." }
                ].map((item, i) => (
                  <li key={i} className="group">
                    <h4 className="text-neutral-300 font-bold mb-1 group-hover:text-red-400 transition-colors">{item.t}</h4>
                    <p className="text-sm text-neutral-500">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="bg-orange-600 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20"><TrendingUp className="w-32 h-32" /></div>
              <div className="flex items-center gap-3 mb-8 text-white">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">The Zryoss Way</span>
              </div>
              <ul className="space-y-8 relative z-10">
                {[
                  { t: "One Source of Truth", d: "Real-time data shared across every team." },
                  { t: "Automated Alerts", d: "System handles the nagging, you do the work." },
                  { t: "Exponential Growth", d: "Scalable processes that run themselves." }
                ].map((item, i) => (
                  <li key={i}>
                    <h4 className="text-white font-bold mb-1">{item.t}</h4>
                    <p className="text-sm text-orange-100/70">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTION OVERVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { title: "Connect", icon: Globe, desc: "Bridge your entire stack in minutes." },
            { title: "Automate", icon: Workflow, desc: "Design complex logic without code." },
            { title: "Scale", icon: Zap, desc: "Grow from 10 to 10,000 without lag." }
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-orange-500/30 transition-all">
                <s.icon className="w-8 h-8 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. ZIG-ZAG FEATURE DEEP DIVES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {[
            { t: "Visual Logic Engine", d: "Drag, drop, and deploy. Build internal tools and customer-facing apps in a unified canvas.", img: "Logic", color: "from-orange-500/20" },
            { t: "Unified Data Lake", d: "Stop hunting for passwords. Access all your Salesforce, HubSpot, and Jira data in one clean SQL-ready pool.", img: "Data", color: "from-blue-500/20", rev: true }
          ].map((f, i) => (
            <div key={i} className={`flex flex-col ${f.rev ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
              <Reveal className="flex-1" direction={f.rev ? "left" : "right"}>
                <h3 className="text-3xl font-bold mb-6">{f.t}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">{f.d}</p>
                <button className="text-orange-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">Learn more <ArrowRight className="w-4 h-4"/></button>
              </Reveal>
              <Reveal className="flex-1 w-full" delay={200}>
                <div className={`aspect-video rounded-[2rem] bg-gradient-to-br ${f.color} to-transparent border border-white/10 flex items-center justify-center`}>
                  <div className="text-white/20 font-black text-4xl uppercase tracking-tighter">{f.img} UI Preview</div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* 7. POWER USER GRID */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for those who want more.</h2>
            <p className="text-neutral-400">Deep features for developers and technical architects.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {powerFeatures.map((f, i) => (
              <Reveal key={i} delay={i * 50} direction="down">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-all group">
                  <f.icon className="w-5 h-5 text-orange-500/50 mb-4 group-hover:text-orange-500 transition-colors" />
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VIDEO PRODUCT TOUR */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="relative group">
            <div className="aspect-video rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/10 flex items-center justify-center relative shadow-2xl">
              <div className="absolute inset-0 bg-orange-600/5 group-hover:bg-orange-600/10 transition-colors" />
              <button className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform shadow-xl shadow-orange-600/40 relative z-10">
                <Play className="w-8 h-8 fill-white" />
              </button>
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold mb-2">See it in action.</h2>
              <p className="text-neutral-500 text-sm italic">"The fastest onboarding experience our team has ever had." — Mark S., CTO</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. USE CASES (TABS) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(useCases).map(k => (
              <button key={k} onClick={() => setActiveTab(k)} className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === k ? 'bg-orange-600' : 'bg-white/5 hover:bg-white/10'}`}>
                {k}
              </button>
            ))}
          </div>
          <Reveal>
            <div className="p-12 rounded-[3rem] bg-neutral-900/40 border border-white/5 flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">{useCases[activeTab].title}</h3>
                <p className="text-neutral-400 mb-8">{useCases[activeTab].desc}</p>
                <div className="flex flex-wrap gap-4">
                  {useCases[activeTab].points.map(p => (
                    <span key={p} className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-lg text-xs font-bold">{p}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1 aspect-video w-full bg-neutral-800 rounded-2xl border border-white/10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. TEMPLATES PREVIEW */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
          <Reveal>
            <h2 className="text-3xl font-bold mb-2">Start fast.</h2>
            <p className="text-neutral-500">Choose from 100+ pre-built templates.</p>
          </Reveal>
          <button className="text-sm font-bold text-orange-500 hover:underline">Browse Gallery →</button>
        </div>
        <div className="flex gap-6 animate-marquee-slow">
          {[...templates, ...templates].map((t, i) => (
            <div key={i} className="min-w-[280px] p-8 rounded-3xl bg-neutral-900 border border-white/5 hover:border-orange-500/40 transition-all group">
              <t.icon className="w-10 h-10 text-orange-500/30 mb-6 group-hover:text-orange-500 transition-colors" />
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 mb-1">{t.category}</div>
              <h4 className="text-lg font-bold">{t.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 11. INTEGRATIONS */}
      <section className="py-24 border-y border-white/5">
        <h2 className="text-center text-3xl font-bold mb-4">Plays well with your stack.</h2>
        <InfiniteMarquee items={integrations} />
      </section>

      {/* 12. ARCHITECTURE (LAYER CAKE) */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for speed and scale.</h2>
            <p className="text-neutral-400">Our 3-tier global infrastructure.</p>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { l: "User Interface Layer", d: "Next.js fueled responsive frontend with Edge rendering.", c: "bg-orange-500" },
              { l: "Platform API Layer", d: "GraphQL mesh connecting 50+ services with <50ms latency.", c: "bg-orange-600" },
              { l: "Global Infrastructure", d: "Multi-cloud AWS/Azure clusters with 99.9% uptime.", c: "bg-orange-800" }
            ].map((layer, i) => (
              <Reveal key={i} delay={i * 150} direction="right">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-8 group hover:bg-white/[0.05] transition-all">
                  <div className={`w-3 h-20 ${layer.c} rounded-full`} />
                  <div>
                    <h4 className="text-lg font-bold mb-1">{layer.l}</h4>
                    <p className="text-sm text-neutral-500">{layer.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. STATS */}
      <section className="py-24 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { v: "30%", l: "Revenue Lift" },
            { v: "10h", l: "Saved Weekly" },
            { v: "99.9%", l: "System Uptime" },
            { v: "10k+", l: "Active Teams" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black mb-2">{s.v}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-200">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { n: "Sarah J.", r: "CTO", t: "This saved our Q4. The bridge between product and sales is now seamless." },
            { n: "Marcus T.", r: "Ops Lead", t: "Moved 400 workflows in a weekend. Most intuitive builder I've used." },
            { n: "Elena R.", r: "VP Growth", t: "Real-time funnel visibility without writing single line of SQL." }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-orange-500/10 group-hover:text-orange-500/20 transition-colors" />
              <p className="text-neutral-400 mb-8 relative z-10">"{t.t}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-600" />
                <div>
                  <div className="font-bold text-sm">{t.n}</div>
                  <div className="text-[10px] text-neutral-600 uppercase font-black">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 15. LEARNING & SUPPORT */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: "Academy", i: BookOpen, d: "Self-paced certification courses." },
            { t: "Documentation", i: File, d: "Deep API guides and tutorials." },
            { t: "24/7 Support", i: LifeBuoy, d: "Direct human access for Enterprise." }
          ].map((s, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 hover:border-orange-500/20 transition-all text-center">
              <s.i className="w-10 h-10 text-orange-500 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-2">{s.t}</h4>
              <p className="text-neutral-500 text-sm mb-6">{s.d}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-white transition-colors">Access Portal</button>
            </div>
          ))}
        </div>
      </section>

      {/* 16. ROADMAP */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-16">Innovating at speed.</h2>
          <div className="space-y-12 relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-px before:bg-white/10">
            {[
              { t: "AI Insights", d: "Q1 2024 • Generative data storytelling.", s: "Next Up" },
              { t: "Mobile Native v2", d: "Q4 2023 • Full offline sync capabilities.", s: "Beta" },
              { t: "Universal Search", d: "Q3 2023 • Command+K across all integrations.", s: "Live" }
            ].map((r, i) => (
              <div key={i} className="pl-12 relative">
                <div className="absolute left-0 top-1 w-10 h-10 bg-black border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest mb-2">{r.s}</div>
                <h4 className="text-lg font-bold mb-1">{r.t}</h4>
                <p className="text-sm text-neutral-500">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. FAQ */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/5 rounded-2xl bg-white/[0.01]">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center">
                <span className="font-bold text-sm">{f.q}</span>
                {openFaq === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openFaq === i && <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* 18. CHOOSE YOUR PATH */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-12 rounded-[3rem] bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 transition-all">
            <h3 className="text-2xl font-bold mb-4">For Startups</h3>
            <p className="text-neutral-400 mb-8">Get up and running in minutes with pre-built flows.</p>
            <button className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all">Start Free Trial</button>
          </div>
          <div className="p-12 rounded-[3rem] bg-orange-600/10 border border-orange-500/30">
            <h3 className="text-2xl font-bold mb-4">For Enterprise</h3>
            <p className="text-neutral-400 mb-8">Custom governance, SSO, and dedicated success manager.</p>
            <button className="w-full py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-all">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* 19. FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Scale at the speed of light.</h2>
          <button className="px-12 py-5 bg-orange-600 text-white font-black rounded-full text-lg shadow-2xl shadow-orange-600/20 hover:scale-105 transition-all">Get Started for Free</button>
        </Reveal>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-neutral-600 text-[10px] font-black tracking-[0.4em] uppercase">
        &copy; 2024 ZRYOSS PLATFORM • BUILT FOR SCALE
      </footer>
    </div>
  );
}

const File = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>;