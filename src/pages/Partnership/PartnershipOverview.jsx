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
  Globe,
  Rocket,
  Shield,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

/* --- UTILITIES & ANIMATIONS --- */

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
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

  const transformMap = {
    up: 'translateY(30px)',
    down: 'translateY(-30px)',
    left: 'translateX(30px)',
    right: 'translateX(-30px)',
    none: 'none'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : transformMap[direction],
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(249, 115, 22, 0.12)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm transition-all duration-500 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

/* --- UI COMPONENTS --- */

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/>
    {children}
  </span>
);

const Button = ({ children, primary, className = "" }) => (
  <button
    className={`
      px-8 py-4 rounded-full font-bold text-sm tracking-tight transition-all duration-300 flex items-center gap-2 group relative overflow-hidden
      ${primary 
        ? 'bg-orange-600 text-white shadow-xl hover:shadow-orange-600/20 hover:scale-105 active:scale-95' 
        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
    </span>
  </button>
);

const ListItem = ({ text, icon: Icon, colorClass, active = true }) => (
  <div className="flex items-start gap-4 p-2 group transition-all duration-300">
    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${colorClass}`}>
      <Icon size={14} strokeWidth={3} />
    </div>
    <span className={`text-base leading-snug ${active ? 'text-neutral-300' : 'text-neutral-500'}`}>{text}</span>
  </div>
);

/* --- MAIN PAGE --- */

export default function PartnershipOverview() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-orange-600/10 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] opacity-30" />
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7">
                <FadeIn direction="right">
                  <SectionLabel>Independent Prime Partner Program</SectionLabel>
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                    Build Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                      Agency Empire.
                    </span>
                  </h1>
                  <p className="text-xl text-neutral-400 max-w-xl mb-10 font-light leading-relaxed">
                    Scale without technical overhead. We provide the infrastructure, the delivery, and the engineering. You provide the vision and the brand.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button primary>Become a Partner</Button>
                    <Button>Explore Infrastructure</Button>
                  </div>
                </FadeIn>
              </div>

              {/* Banner Placeholder Column */}
              <div className="lg:col-span-5 relative">
                <FadeIn delay={0.3} direction="left">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative aspect-square md:aspect-[4/5] bg-neutral-900 border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center overflow-hidden">
                      {/* BANNER PLACEHOLDER - Replace the div below with an <img /> */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-50" />
                      <div className="relative flex flex-col items-center gap-4 text-neutral-600">
                        <ImageIcon size={64} strokeWidth={1} />
                        
                        <p className="text-xs font-mono uppercase tracking-[0.3em]">Hero Banner Placeholder</p>
                      </div>
                      
                      {/* Floating UI Elements over placeholder for polish */}
                      <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Network Operational</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-2xl font-bold text-white">$2.4M+</p>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Partner Earnings Distributed</p>
                          </div>
                          <TrendingUp className="text-orange-500 mb-1" size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* IDENTITY SECTION - "Who is this for?" */}
        <section className="py-24 px-6 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Builders, Not Passengers</h2>
              <p className="text-neutral-500 max-w-2xl mx-auto">We are looking for strategic partners who value active growth over passive schemes.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1} direction="right">
                <SpotlightCard className="p-10 border-orange-500/10 hover:border-orange-500/30">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500">
                      <Rocket size={32} />
                    </div>
                    <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full uppercase tracking-widest">The Ideal Partner</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Active Builder</h3>
                  <p className="text-neutral-400 mb-8 leading-relaxed">You own the narrative. You are ready to leverage a global tech stack to serve high-ticket clients.</p>
                  <div className="space-y-4">
                    <ListItem icon={CheckCircle2} colorClass="bg-orange-500/20 text-orange-500" text="Consultants with existing client networks" />
                    <ListItem icon={CheckCircle2} colorClass="bg-orange-500/20 text-orange-500" text="Agency owners scaling without hiring" />
                    <ListItem icon={CheckCircle2} colorClass="bg-orange-500/20 text-orange-500" text="Founders focusing on brand and equity" />
                  </div>
                </SpotlightCard>
              </FadeIn>

              <FadeIn delay={0.2} direction="left">
                <SpotlightCard className="p-10 opacity-60 hover:opacity-100 transition-opacity" spotlightColor="rgba(239, 68, 68, 0.05)">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-neutral-800 rounded-2xl text-neutral-500">
                      <ShieldCheck size={32} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">The Passive Seeker</h3>
                  <p className="text-neutral-500 mb-8 leading-relaxed">This program is NOT a recruitment pyramid or a "set and forget" investment scheme.</p>
                  <div className="space-y-4">
                    <ListItem icon={XCircle} colorClass="bg-red-900/10 text-red-900" active={false} text="Expecting income without client management" />
                    <ListItem icon={XCircle} colorClass="bg-red-900/10 text-red-900" active={false} text="Aversion to sales and relationship building" />
                    <ListItem icon={XCircle} colorClass="bg-red-900/10 text-red-900" active={false} text="Seeking 'get rich quick' frameworks" />
                  </div>
                </SpotlightCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PROCESS FLOW - "The Growth Engine" */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <FadeIn className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Decoupling <span className="text-orange-500">Friction</span> from Growth.</h2>
                <p className="text-neutral-400 text-lg leading-relaxed">Our infrastructure acts as your engine room. You drive the brand; we handle the mechanics of delivery.</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button primary>View Sample Deliverables</Button>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {[
                { 
                  step: "01", 
                  title: "You Brand", 
                  desc: "Operate under your own entity. We provide white-label proposals, pitch decks, and case studies to help you close.",
                  icon: Layers
                },
                { 
                  step: "02", 
                  title: "We Build", 
                  desc: "Zryoss engineers activate. From software development to vendor coordination, we handle 100% of the fulfillment.",
                  icon: Briefcase
                },
                { 
                  step: "03", 
                  title: "We Scale", 
                  desc: "Profit distribution is instant. You maintain the long-term equity of the client relationship and the brand name.",
                  icon: Zap
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="relative group">
                    <div className="text-[120px] font-bold text-white/[0.02] absolute -top-16 -left-4 select-none group-hover:text-orange-500/5 transition-colors">
                      {item.step}
                    </div>
                    <div className="relative pt-4">
                      <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                      <p className="text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6 mb-24">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="relative rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-indigo-600/10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                
                <div className="relative z-10 p-12 md:p-24 text-center">
                  <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                    Ready to Claim <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Your Territory?</span>
                  </h2>
                  <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    The infrastructure is battle-tested. The demand is surging. We are only accepting a limited number of Prime Partners for this cohort.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button primary className="px-12 py-5 text-lg">Apply for Access</Button>
                    <Button className="px-12 py-5 text-lg">Schedule a Demo</Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SIMPLE FOOTER */}
        <footer className="py-12 px-6 border-t border-white/5 text-center text-neutral-600">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-bold tracking-tighter text-white">
              ZRYOSS<span className="text-orange-500">.</span> PARTNER
            </div>
            <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white transition-colors">Infrastructure</a>
              <a href="#" className="hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-xs">© 2024 Zryoss Network. All Rights Reserved.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}