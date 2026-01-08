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
  Quote
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
    if (direction === "up") return "translateY(20px)";
    if (direction === "down") return "translateY(-20px)";
    if (direction === "left") return "translateX(20px)";
    if (direction === "right") return "translateX(-20px)";
    return "none";
  };

  return (
    <div
      ref={ref}
      style={{
        transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
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
   SUB-COMPONENTS
================================ */

const KeyboardIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
    <path d="M6 8h.001" />
    <path d="M10 8h.001" />
    <path d="M14 8h.001" />
    <path d="M18 8h.001" />
    <path d="M6 12h.001" />
    <path d="M10 12h.001" />
    <path d="M14 12h.001" />
    <path d="M18 12h.001" />
    <path d="M7 16h10" />
  </svg>
);

const InfiniteMarquee = ({ items }) => {
  return (
    <div className="relative flex overflow-x-hidden group py-10">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
        {[...items, ...items].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-orange-500/30 hover:bg-white/[0.06] transition-all cursor-default group/item"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover/item:bg-orange-500/20 transition-colors">
              <Globe className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-lg font-medium text-neutral-300 group-hover/item:text-white">{item}</span>
          </div>
        ))}
      </div>
      
      {/* Gradients to fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
    </div>
  );
};

/* ===============================
   DATA & CONFIG
================================ */

const problems = [
  { icon: Database, title: "Siloed Data", text: "Customer data trapped in disconnected tools." },
  { icon: KeyboardIcon, title: "Manual Entry", text: "Wasting hours copying data between sheets." },
  { icon: Clock, title: "Slow Reporting", text: "Waiting days for insights that should be instant." },
];

const features = [
  {
    title: "Advanced Analytics",
    description: "Turn raw data into actionable growth strategies. Visualize your entire funnel in real-time.",
    icon: BarChart3,
    image: "https://placehold.co/600x400/171717/ea580c?text=Analytics+Dashboard",
  },
  {
    title: "Real-time Collaboration",
    description: "Stop switching between Slack and email. Chat, tag, and approve directly within the context of the work.",
    icon: Users,
    image: "https://placehold.co/600x400/171717/ea580c?text=Collaboration+UI",
  },
  {
    title: "Automated Workflows",
    description: "Build complex logic without writing code. Save 20+ hours per week per employee.",
    icon: Workflow,
    image: "https://placehold.co/600x400/171717/ea580c?text=Workflow+Builder",
  },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    text: "This platform completely transformed how we handle our quarterly planning. It saved our Q4 by bridging the gap between product and marketing.",
    avatar: "SJ"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Ops, Nebula",
    text: "The no-code automation is the most intuitive I've ever used. We moved 400 manual workflows into Zryoss in less than a weekend.",
    avatar: "MT"
  },
  {
    name: "Elena Rodriguez",
    role: "Growth Lead, Oasis",
    text: "Seeing our entire funnel in one dashboard without writing a single SQL query is a game changer. The ROI was clear within month one.",
    avatar: "ER"
  }
];

const steps = [
  { number: "01", title: "Connect Data", desc: "One-click integration with your stack." },
  { number: "02", title: "Configure Rules", desc: "Set your automation triggers." },
  { number: "03", title: "Go Live", desc: "Watch your efficiency skyrocket." },
];

const useCases = {
  Marketing: {
    title: "Campaigns on Autopilot",
    desc: "Automatically segment leads and trigger personalized email sequences based on user behavior.",
    image: "https://placehold.co/500x300/171717/ea580c?text=Marketing+Automation",
    points: ["Dynamic Segmentation", "A/B Testing", "ROI Tracking"],
  },
  Sales: {
    title: "Close Deals Faster",
    desc: "Get notified the second a prospect engages. Automate follow-ups and contract generation.",
    image: "https://placehold.co/500x300/171717/ea580c?text=Sales+Pipeline",
    points: ["Lead Scoring", "Auto-Scheduling", "Contract AI"],
  },
  Engineering: {
    title: "Ship Code, Not Tickets",
    desc: "Sync Jira, GitHub, and Slack. Automate status updates and release notes.",
    image: "https://placehold.co/500x300/171717/ea580c?text=Dev+Ops",
    points: ["Git Sync", "Auto-Documentation", "Sprint Planning"],
  },
};

const integrations = ["Slack", "Salesforce", "HubSpot", "Shopify", "Zapier", "Notion", "Jira", "Stripe", "Asana", "Segment", "Intercom", "Airtable"];

const faqs = [
  {
    q: "How secure is my data?",
    a: "We use enterprise-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit. We are SOC2 Type II compliant."
  },
  {
    q: "Do I need coding skills to use Zryoss?",
    a: "Not at all. Our visual workflow builder and pre-built templates allow anyone to create complex automations without writing a single line of code."
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes, you can cancel or change your plan at any time through your dashboard. There are no long-term contracts for our monthly plans."
  },
  {
    q: "Do you offer custom integrations?",
    a: "Our Enterprise plan includes a dedicated integration specialist to help you connect Zryoss to custom internal tools or legacy systems."
  }
];

/* ===============================
   MAIN PAGE
================================ */

export default function Platform() {
  const [activeTab, setActiveTab] = useState("Marketing");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 40s linear reverse infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold text-orange-400 tracking-wide uppercase">New v2.0 Released</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              The One Platform to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Automate Everything.
              </span>
            </h1>
            <p className="text-lg text-neutral-400 mb-8 max-w-lg leading-relaxed">
              Stop stitching together disconnected tools. Build, scale, and manage your entire operation in one unified ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </button>
            </div>
          </Reveal>

          <Reveal delay={200} direction="left">
            <div className="relative rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-2xl overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10" />
              <img 
                src="https://placehold.co/800x600/1a1a1a/ea580c?text=Platform+UI+Preview" 
                alt="Dashboard Preview" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center gap-4 animate-bounce-slow">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">System Status</p>
                  <p className="font-bold text-sm">All Systems Operational</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SOCIAL PROOF */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-neutral-500 mb-6 uppercase tracking-[0.3em] font-bold">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {["Acme Corp", "GlobalTech", "Nebula", "Vertex", "Oasis"].map((logo) => (
               <span key={logo} className="text-xl font-bold font-serif tracking-tight text-white cursor-default hover:text-orange-500 transition-colors">{logo}</span>
             ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop wasting time on <br />the <span className="text-neutral-500 line-through decoration-orange-500 decoration-2">Old Way</span>.</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="p-8 h-full rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 hover:bg-neutral-900 transition-all group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500">
                    <problem.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{problem.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HUB & SPOKE */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">Everything you need in one <br /><span className="text-orange-500">Unified Ecosystem</span>.</h2>
            <p className="text-neutral-400 mb-8 text-base leading-relaxed">Centralize your operations. Our hub-and-spoke architecture ensures every module talks to each other perfectly without lag or friction.</p>
            <ul className="space-y-4">
              {["Centralized Data Lake", "Universal API Access", "Real-time Sync"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-medium group cursor-default">
                  <div className="bg-orange-500/10 p-1 rounded group-hover:bg-orange-500 transition-colors">
                    <CheckCircle2 className="text-orange-500 group-hover:text-white w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          
          <Reveal direction="left" className="relative flex justify-center items-center h-[500px]">
             <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full animate-spin-slow"></div>
             <div className="absolute w-[280px] h-[280px] border border-dashed border-orange-500/20 rounded-full animate-reverse-spin"></div>
             
             <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(234,88,12,0.4)]">
                <Layers className="w-10 h-10 text-white" />
             </div>

             <div className="absolute top-8 w-14 h-14 bg-neutral-800 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl hover:border-orange-500/50 transition-colors"><Database className="text-neutral-400 w-5 h-5"/></div>
             <div className="absolute bottom-8 w-14 h-14 bg-neutral-800 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl hover:border-orange-500/50 transition-colors"><Globe className="text-neutral-400 w-5 h-5"/></div>
             <div className="absolute left-8 w-14 h-14 bg-neutral-800 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl hover:border-orange-500/50 transition-colors"><Code2 className="text-neutral-400 w-5 h-5"/></div>
             <div className="absolute right-8 w-14 h-14 bg-neutral-800 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl hover:border-orange-500/50 transition-colors"><Lock className="text-neutral-400 w-5 h-5"/></div>
          </Reveal>
        </div>
      </section>

      {/* 5. INTEGRATIONS SECTION (REFINED) */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Plays well with the tools you already love.</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Seamlessly connect with 50+ enterprise apps. Our API first approach ensures you're never locked in.</p>
          </Reveal>
        </div>
        
        <Reveal delay={200}>
          <InfiniteMarquee items={integrations} />
        </Reveal>
      </section>

      {/* 6. USE CASES (TABS) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for every team.</h2>
            <p className="text-neutral-400">Customized workflows for every department.</p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.keys(useCases).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white/5 text-neutral-400 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-neutral-900/40 border border-white/5 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-[80px] rounded-full" />
              <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="animate-in slide-in-from-left duration-500">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{useCases[activeTab].title}</h3>
                  <p className="text-neutral-400 text-base mb-8 leading-relaxed">{useCases[activeTab].desc}</p>
                  <ul className="space-y-4">
                    {useCases[activeTab].points.map((point) => (
                      <li key={point} className="flex items-center gap-4 text-white font-medium group/li cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.8)] group-hover/li:scale-150 transition-transform" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative group/img">
                  <div className="absolute inset-0 bg-orange-500/10 blur-2xl group-hover/img:bg-orange-500/20 transition-colors" />
                  <img 
                    src={useCases[activeTab].image} 
                    alt={activeTab} 
                    className="rounded-2xl shadow-2xl border border-white/10 relative transition-all duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. TESTIMONIALS (REFINED) */}
      <section className="py-24 px-6 relative bg-[#070707]">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Loved by those pushing limits.</h2>
            <p className="text-neutral-400">Join thousands of high-performance teams.</p>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 150} className="group h-full">
                <div className="relative h-full flex flex-col p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/40 transition-all duration-500 hover:bg-white/[0.04] backdrop-blur-md">
                  <Quote className="text-orange-500/20 w-12 h-12 mb-6 group-hover:text-orange-500/40 transition-colors duration-500" />
                  <p className="text-neutral-300 text-base leading-relaxed mb-8 flex-grow">"{t.text}"</p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-xs font-black shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-tight">{t.name}</h4>
                      <p className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STATS BAR */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-400/30">
          <Reveal delay={0}>
            <div className="text-4xl font-black mb-2 text-white">30%</div>
            <div className="text-orange-100 font-bold tracking-widest text-[10px] uppercase">Increase in Revenue</div>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-4xl font-black mb-2 text-white">10h</div>
            <div className="text-orange-100 font-bold tracking-widest text-[10px] uppercase">Saved Per Week</div>
          </Reveal>
          <Reveal delay={200}>
            <div className="text-4xl font-black mb-2 text-white">2M+</div>
            <div className="text-orange-100 font-bold tracking-widest text-[10px] uppercase">Daily Automation</div>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="pt-24 px-6 max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-bold text-center mb-10 tracking-tight">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="border border-white/5 rounded-2xl bg-white/[0.01] overflow-hidden group">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-sm text-neutral-200 group-hover:text-white transition-colors">{item.q}</span>
                  <div className={`p-1.5 rounded-lg border border-white/5 transition-all duration-300 ${openFaq === idx ? 'bg-orange-500 border-orange-500' : 'bg-white/5'}`}>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-neutral-400 leading-relaxed text-sm">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 10. CTA */}
      <section className="py-32 px-6">
        <Reveal>
          <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-b from-neutral-800 to-black border border-white/5 text-center px-8 py-20 group">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-600/10 blur-[100px] pointer-events-none group-hover:bg-orange-600/20 transition-colors duration-1000" />
             
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to transform your <br />workflow?</h2>
               <p className="text-base text-neutral-400 mb-10 max-w-lg mx-auto leading-relaxed">Join 10,000+ high-growth teams. Start your 14-day free trial. No credit card required.</p>
               <button className="px-10 py-4 bg-white text-black hover:bg-orange-500 hover:text-white rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-orange-500/40">
                 Get Started Now
               </button>
             </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}