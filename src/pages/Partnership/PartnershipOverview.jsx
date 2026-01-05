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
  ChevronRight
} from 'lucide-react';

/** * INTERNAL ANIMATION UTILITIES 
 */
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
    up: 'translateY(20px)',
    down: 'translateY(-20px)',
    left: 'translateX(20px)',
    right: 'translateX(-20px)',
    none: 'none'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
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

/**
 * INTERACTIVE SPOTLIGHT CARD
 * Creates a glowing effect that follows the mouse cursor
 */
const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(249, 115, 22, 0.15)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm transition-colors duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

/**
 * UI COMPONENTS
 */
const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange-500/5 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6 hover:bg-orange-500/10 transition-colors cursor-default">
    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/>
    {children}
  </span>
);

const Button = ({ children, primary, className = "" }) => (
  <button
    className={`
      px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 group relative overflow-hidden
      ${primary 
        ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105' 
        : 'bg-transparent border border-neutral-700 text-white hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/5'}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </span>
    {primary && <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />}
  </button>
);

const ListItem = ({ text, delay, icon: Icon, colorClass }) => (
  <div 
    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={18} />
    </div>
    <span className="text-neutral-300 group-hover:text-white transition-colors text-lg">{text}</span>
  </div>
);

export default function PartnershipOverview() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500/30 overflow-hidden relative">
      
      {/* DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-600/10 rounded-[100%] blur-[120px] opacity-50 animate-pulse duration-[5000ms]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* --- HERO SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-32 relative">
          {/* Decorative glowing lines behind title */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200px] bg-orange-500/20 blur-[100px] -z-10 rounded-full pointer-events-none" />

          <FadeIn>
            <SectionLabel>Build Real Value</SectionLabel>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Partnership <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                Redefined
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light">
              No passive schemes. No hollow promises. Just <span className="text-white font-medium">active alliances</span> for professionals ready to dominate their market.
            </p>
          </FadeIn>
        </div>

        {/* --- INTERACTIVE SPLIT SECTION --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-40 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent -translate-x-1/2" />

          {/* LEFT: THE BUILDER (Active) */}
          <FadeIn delay={0.2} direction="right">
            <SpotlightCard className="h-full p-8 md:p-12 hover:border-orange-500/30 group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
                    <TrendingUp size={32} />
                  </div>
                  <span className="text-orange-500 text-sm font-bold tracking-widest uppercase bg-orange-500/10 px-3 py-1 rounded-full">Recommended</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-2">The Builder</h3>
                <p className="text-neutral-400 mb-10 text-lg">For those who want to own the outcome.</p>

                <div className="space-y-2">
                  {[
                    "Sales professionals & consultants",
                    "Agency owners & freelancers",
                    "Founders scaling without ops",
                    "Visionaries building equity"
                  ].map((item, i) => (
                    <ListItem 
                      key={i} 
                      text={item} 
                      delay={i * 100} 
                      icon={CheckCircle2} 
                      colorClass="bg-orange-500/20 text-orange-500" 
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>

          {/* RIGHT: THE SEEKER (Passive) */}
          <FadeIn delay={0.4} direction="left">
            <SpotlightCard className="h-full p-8 md:p-12 border-neutral-800/50 bg-neutral-900/30" spotlightColor="rgba(239, 68, 68, 0.1)">
              <div className="relative z-10 opacity-70 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-400 border border-neutral-700">
                    <ShieldCheck size={32} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-neutral-300 mb-2">The Passenger</h3>
                <p className="text-neutral-500 mb-10 text-lg">For those looking for a free ride.</p>

                <div className="space-y-2">
                  {[
                    "Seekers of 'passive' income",
                    "Recruitment-only expectations",
                    "Investors wanting guarantees",
                    "Aversion to client management"
                  ].map((item, i) => (
                    <ListItem 
                      key={i} 
                      text={item} 
                      delay={i * 100} 
                      icon={XCircle} 
                      colorClass="bg-red-900/20 text-red-400" 
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>
        </div>

        {/* --- PROCESS PIPELINE (FLOW) --- */}
        <div className="mb-40">
          <FadeIn>
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-6xl font-bold mb-6">The Growth <span className="text-orange-500">Engine</span></h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                We've decoupled the friction of operations from the freedom of sales.
              </p>
            </div>
          </FadeIn>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Horizontal Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

            {/* STEP 1 */}
            <FadeIn delay={0.2} direction="up">
              <div className="relative group">
                <div className="relative z-10 bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:border-orange-500/30 shadow-2xl">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full border border-neutral-700 flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    1
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    You <span className="text-neutral-600 text-sm font-normal uppercase tracking-wider">Drive</span>
                  </h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Operate under your own brand. You control the narrative, the client relationship, and the closing process.
                  </p>
                  
                  {/* Decorative icon background */}
                  <Users className="absolute bottom-4 right-4 text-neutral-800/50 -z-10" size={80} />
                </div>
              </div>
            </FadeIn>

            {/* STEP 2 */}
            <FadeIn delay={0.4} direction="up">
              <div className="relative group">
                <div className="relative z-10 bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:border-orange-500/30 shadow-2xl">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full border border-neutral-700 flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    2
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    We <span className="text-neutral-600 text-sm font-normal uppercase tracking-wider">Deliver</span>
                  </h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Zryoss engine activates. We handle demos, service delivery, vendor coordination, and quality assurance.
                  </p>
                  <Briefcase className="absolute bottom-4 right-4 text-neutral-800/50 -z-10" size={80} />
                </div>
              </div>
            </FadeIn>

            {/* STEP 3 */}
            <FadeIn delay={0.6} direction="up">
              <div className="relative group">
                <div className="relative z-10 bg-gradient-to-b from-orange-950/30 to-neutral-950 border border-orange-500/20 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:border-orange-500/50 shadow-2xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                    3
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    We <span className="text-orange-500/70 text-sm font-normal uppercase tracking-wider">Split</span>
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">
                    Earnings are distributed instantly based on closed deals. No pyramids, just pure profit sharing.
                  </p>
                  <Zap className="absolute bottom-4 right-4 text-orange-900/20 -z-10" size={80} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* --- IMMERSIVE CTA --- */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-[2.5rem] overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-orange-950/80" />
            
            <div className="relative z-10 px-8 py-24 md:py-32 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Ascend?</span>
              </h2>
              <p className="text-neutral-400 text-xl mb-12 font-light">
                The infrastructure is built. The market is waiting. The only variable missing is <span className="text-white font-medium">you</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button primary className="text-lg px-10 py-5">Apply for Partnership</Button>
                <Button className="text-lg px-10 py-5 backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">Talk to Team</Button>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}