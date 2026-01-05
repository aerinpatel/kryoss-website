import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Users,
  Target,
  Zap,
  ChevronRight,
  Cpu,
  Layers,
  Ban,
  Globe,
  Activity
} from 'lucide-react';

/** * ANIMATION HOOKS & UTILITIES 
 */
const useScrollVisibility = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const AnimatedSection = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, isVisible] = useScrollVisibility(0.15);
  
  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    scale: 'scale(0.95)',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0) scale(1)' : transforms[direction],
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

/**
 * UI COMPONENTS
 */
const ImagePlaceholder = ({ label, className = "" }) => (
  <div className={`relative overflow-hidden rounded-[2rem] bg-neutral-900 border border-neutral-800 flex items-center justify-center group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-50" />
    <div className="relative z-10 text-center p-6">
      <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mx-auto mb-4 border border-neutral-700 group-hover:scale-110 transition-transform duration-500">
        <Globe className="text-orange-500/50" />
      </div>
      <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.2em]">{label || "Visual Asset Placeholder"}</p>
    </div>
    {/* Animated Scanner line */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-[scan_3s_linear_infinite]" />
  </div>
);

const GlassShard = ({ icon: Icon, title, items, delay = 0 }) => (
  <AnimatedSection delay={delay} className="group">
    <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:rotate-[10deg] transition-transform">
        <Icon size={24} />
      </div>
      <h4 className="text-2xl font-bold mb-6 text-white">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-neutral-400 group-hover:text-neutral-200 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
            <span className="text-sm md:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </AnimatedSection>
);

export default function PartnershipOverview() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* GLOBAL UI BACKGROUND */}
      <style>{`
        @keyframes scan { 0% { top: 0% } 100% { top: 100% } }
        @keyframes float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-900/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* --- 1. THE CINEMATIC HERO --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-500 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                <Activity size={12} className="animate-pulse" />
                Live: IPP Program 2024
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">IPP</span><br/>
                MANIFESTO.
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-lg mb-12">
                This isn't just a partnership. It's the total decoupling of business brand and operational friction.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 rounded-full bg-orange-600 text-white font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)]">
                  Apply Now <ArrowRight size={20} />
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="scale" delay={200}>
            <ImagePlaceholder 
              label="Global Infrastructure Visual" 
              className="aspect-[4/5] lg:aspect-square shadow-2xl scale-110 lg:translate-x-12" 
            />
          </AnimatedSection>
        </div>
      </section>

      {/* --- 2. THE DUALITY (ROLES) --- */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <AnimatedSection direction="right" className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The Split Responsibility <span className="text-orange-600">Protocol.</span></h2>
              <p className="text-neutral-500 text-lg">You scale the brand. We scale the delivery. Total synchronization.</p>
            </AnimatedSection>
            <div className="hidden md:block w-32 h-px bg-neutral-800" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <GlassShard 
              icon={Users}
              title="Your Strategic Orbit"
              items={[
                "Full autonomy over your brand identity",
                "Direct leadership of your sales force",
                "High-level client relationship stewardship",
                "Market penetration & localized strategies",
                "Long-term business equity building"
              ]}
              delay={100}
            />
            <div className="lg:mt-32">
              <GlassShard 
                icon={Cpu}
                title="The Zryoss Core"
                items={[
                  "Zero-friction product demonstrations",
                  "Automated service delivery pipelines",
                  "Vendor management & quality loops",
                  "Real-time operational transparency",
                  "Institutional-grade compliance & risk"
                ]}
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE "NOT" SECTION (DYNAMIC CARDS) --- */}
      <section className="py-40 bg-neutral-900/20 relative border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Standard <span className="text-orange-600">Exclusions.</span></h3>
            <p className="text-neutral-500 mt-4 italic">Clarity over marketing fluff.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Franchise", icon: Ban },
              { label: "MLM", icon: Ban },
              { label: "Passive", icon: Ban },
              { label: "Recruitment", icon: Ban },
              { label: "Investment", icon: Ban }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} direction="up">
                <div className="h-40 flex flex-col items-center justify-center p-6 rounded-[2rem] border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/[0.02] transition-all group">
                  <item.icon className="text-neutral-700 group-hover:text-orange-500 transition-colors mb-4" size={24} />
                  <span className="text-neutral-400 font-bold group-hover:text-white transition-colors">Not a {item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. DATA VISUALIZATION AREA --- */}
      <section className="py-40 px-6 ml-10 overflow-hidden">
        <div className="max-w-7xl mr-4 mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="right">
            <ImagePlaceholder 
              label="Real-time Performance Dashboard" 
              className="aspect-video lg:scale-125 lg:-translate-x-12" 
            />
          </AnimatedSection>
          
          <AnimatedSection direction="left">
            <div className="space-y-8 ">
              <div className="p-1 px-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-widest uppercase w-fit">Performance Linked</div>
              <h2 className="text-4xl md:text-5xl font-bold">Earnings rooted in <br/><span className="text-orange-600 underline decoration-neutral-800 underline-offset-8">Actual Value.</span></h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                We've eliminated the fluff. IPP earnings are mathematically linked to verified sales and successful service delivery cycles. 
                No referrals. No recruitment. Just business.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-white mb-1">0%</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Recruitment Dependency</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Delivery Alignment</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* --- 5. THE FINAL ASCENT --- */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-orange-600/20 blur-[120px] rounded-full" />
          
          <AnimatedSection direction="scale" className="relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">
              READY TO <br/>
              <span className="text-orange-600 italic">TRANSCEND?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto px-12 py-6 rounded-full bg-white text-black font-black hover:bg-orange-600 hover:text-white transition-all duration-300">
                INITIATE APPLICATION
              </button>
              <button className="w-full md:w-auto px-12 py-6 rounded-full bg-transparent border border-neutral-800 text-white font-bold hover:border-orange-500 transition-all">
                CONSULT WITH TEAM
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="py-20 border-t border-white/5 text-center text-neutral-600 text-xs font-mono tracking-widest">
        ZRYOSS // INDEPENDENT PROFIT PARTNER PROTOCOL // 2024
      </footer>
    </div>
  );
}