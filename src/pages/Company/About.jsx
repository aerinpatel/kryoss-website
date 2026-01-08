import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Target,
  Rocket,
  Globe,
  Heart,
  Shield,
  Zap,
  Cpu,
  ArrowRight,
  Eye,
  History,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Command,
  Compass,
  Anchor,
  Database,
  Server,
  Code,
  Share2,
  Terminal,
  Award
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
    if (direction === "up") return "translateY(40px)";
    if (direction === "down") return "translateY(-40px)";
    if (direction === "left") return "translateX(40px)";
    if (direction === "right") return "translateX(-40px)";
    return "none";
  };

  return (
    <div
      ref={ref}
      style={{
        transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
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
   DATA
================================ */

const stats = [
  { label: "Founded", value: "2018" },
  { label: "Global Offices", value: "12" },
  { label: "Team Members", value: "450+" },
  { label: "Lines of Code", value: "12M+" },
];

const values = [
  {
    title: "Radical Transparency",
    desc: "We build in the open. Our roadmap is public, and our failures are shared lessons.",
    icon: Eye,
    color: "from-blue-500/20"
  },
  {
    title: "Velocity First",
    desc: "Perfection is the enemy of progress. We ship daily and iterate in real-time.",
    icon: Zap,
    color: "from-orange-500/20"
  },
  {
    title: "User Sovereignty",
    desc: "You own your data. We just provide the engine to make it move faster.",
    icon: Shield,
    color: "from-emerald-500/20"
  },
  {
    title: "Infinite Scalability",
    desc: "Architected to handle the world's most demanding data workloads without a blink.",
    icon: Cpu,
    color: "from-purple-500/20"
  }
];

const timeline = [
  { year: "2018", title: "The Spark", desc: "Zryoss founded in a garage in Palo Alto with a mission to kill manual spreadsheets." },
  { year: "2020", title: "Series A", desc: "Raised $25M to build the core Visual Logic Engine and Unified Data Lake." },
  { year: "2022", title: "Global Scale", desc: "Reached 1,000 enterprise customers across 40 countries." },
  { year: "2024", title: "AI Integration", desc: "Launched Zryoss Intelligence, automating 90% of routine operations." },
];

const team = [
  {
    name: "Dr. Aris Thorne",
    role: "Founder & CEO",
    bio: "Ex-NASA Engineer. Obsessed with systemic efficiency and orbital mechanics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Lena Sokolov",
    role: "Chief Product Officer",
    bio: "Pioneer of Minimalist UI. Designed the first 10 interfaces at Zryoss.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "David Chen",
    role: "Head of Infrastructure",
    bio: "The architect behind our 99.99% uptime guarantee and global edge network.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Vane",
    role: "VP of Growth",
    bio: "Scaling communities from zero to millions. Expert in human-centric growth.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

const partners = [
  { name: "Acme Corp", icon: Command },
  { name: "Global Bank", icon: Globe },
  { name: "TechStart", icon: Cpu },
  { name: "FutureLabs", icon: Rocket },
  { name: "DataFlow", icon: Database },
  { name: "SecureNet", icon: Shield }
];

const techStack = [
  {
    title: "Ingestion Layer",
    icon: Database,
    desc: "Real-time streaming pipelines capable of handling 5PB/day with zero latency.",
    features: ["Kafka Streams", "Custom ETL", "Edge Caching"]
  },
  {
    title: "Neural Core",
    icon: Cpu,
    desc: "Our proprietary AI engine that predicts system bottlenecks before they happen.",
    features: ["Predictive Scaling", "Auto-Healing", "Rust Kernel"]
  },
  {
    title: "Global Mesh",
    icon: Server,
    desc: "A decentralized delivery network spanning 200+ edge locations worldwide.",
    features: ["Anycast DNS", "WASM Modules", "Sub-ms TTL"]
  }
];

const investors = [
  { name: "Sequioa Capital", tier: "Series A Lead" },
  { name: "Y Combinator", tier: "Seed" },
  { name: "Andreessen Horowitz", tier: "Series A" },
  { name: "Founders Fund", tier: "Strategic" }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
];

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO (Updated Design) */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center border-b border-white/5 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-20"
               alt="Zryoss Infrastructure Background"
             />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
               <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
               <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">Zryoss Infrastructure v9.0</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tight">
               WE BUILD THE <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 italic">
                 INFRASTRUCTURE
               </span> <br />
               OF TOMORROW.
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
               Zryoss was born from a simple realization: the world's most innovative companies were being held back by 20th-century tools. We're here to change that.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <button className="px-10 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(234,88,12,0.5)] flex items-center gap-2 group">
                 Start Building 
                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
               </button>
               <button className="px-10 py-4 bg-transparent border border-neutral-700 hover:border-white text-white rounded-full font-bold text-lg transition-all hover:bg-white/5">
                 View Documentation
               </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="py-20 px-6 relative border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:text-orange-500 transition-colors duration-500">{s.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-hover:text-white transition-colors">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. TRUSTED BY (NEW) */}
      <section className="py-12 px-6 border-b border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
           <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 whitespace-nowrap">
             Trusted by builders at
           </div>
           <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 w-full opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {partners.map((p, i) => (
               <div key={i} className="flex items-center gap-2 group">
                 <p.icon className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" />
                 <span className="font-bold text-lg text-white">{p.name}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. THE MISSION (DEEP DIVE) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <Reveal direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Solving the <span className="text-orange-500">Complexity Crisis</span>.</h2>
              <div className="space-y-6 text-neutral-400 text-base leading-relaxed">
                <p>
                  In the last decade, the average enterprise software stack has grown by 400%. Instead of making us more productive, this explosion of "solutions" has created a nightmare of fragmented data and broken workflows.
                </p>
                <p>
                  At Zryoss, we don't believe in adding more tools. We believe in building a <strong>unified foundation</strong>. A single place where data, logic, and interface coexist perfectly.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Our 2030 Vision</h4>
                  <p className="text-xs text-neutral-500 italic mt-1">"To automate 1 billion hours of manual work."</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex-1 w-full">
            <Reveal delay={200}>
              <div className="aspect-square relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-purple-600 rounded-[3rem] rotate-3 blur-2xl opacity-20 group-hover:rotate-6 transition-transform duration-700" />
                <div className="relative h-full w-full bg-[#0A0A0A] rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center p-12 shadow-2xl">
                   <div className="grid grid-cols-3 gap-4 w-full">
                     {[...Array(9)].map((_, i) => (
                       <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 animate-pulse" style={{ animationDelay: `${i * 150}ms`, animationDuration: '3s' }} />
                     ))}
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-10 left-10 right-10">
                     <div className="h-1 w-full bg-white/10 rounded-full mb-4 overflow-hidden">
                       <div className="h-full w-2/3 bg-orange-500 rounded-full animate-[width_2s_ease-in-out_infinite]" style={{ width: '65%' }} />
                     </div>
                     <div className="flex justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                       <span>Architecture Alpha</span>
                       <span className="text-orange-500">v9.2.4 Active</span>
                     </div>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (GLASS CARDS) */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The DNA of Zryoss.</h2>
            <p className="text-neutral-500 text-sm tracking-wide">Principles that guide every pixel and every line of code.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 100} direction="up">
                <div className="group h-full p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-orange-500/50 hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${v.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  <v.icon className="w-8 h-8 text-orange-500 mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-4">{v.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK (NEW) */}
      <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        {/* Background Schematic Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
             <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            <Reveal className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-orange-500" />
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Under the Hood</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The Engine of Speed.</h2>
                <p className="text-neutral-500 max-w-xl mx-auto">We abstracted away the complexity so you can focus on the product. Here is what powers the Zryoss Cloud.</p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
                {techStack.map((tech, i) => (
                    <Reveal key={i} delay={i * 150} direction="up">
                        <div className="relative p-1">
                            {/* Connecting Line for Desktop */}
                            {i !== techStack.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 z-0">
                                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-neutral-800 border border-white/20" />
                                </div>
                            )}
                            
                            <div className="h-full bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/5 group-hover:bg-orange-500/20 group-hover:border-orange-500/20 transition-all">
                                    <tech.icon className="w-6 h-6 text-white group-hover:text-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">{tech.desc}</p>
                                <ul className="space-y-2">
                                    {tech.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                                            <div className="w-1 h-1 rounded-full bg-orange-500" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* 7. INTERACTIVE TIMELINE */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-20">
             <div className="inline-block p-3 rounded-2xl bg-orange-500/10 mb-6">
                <History className="w-5 h-5 text-orange-500" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold">Six years of shipping.</h2>
          </Reveal>
          <div className="relative border-l-2 border-white/5 pl-8 md:pl-20 space-y-16">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 100} direction="right">
                <div className="relative">
                  <div className="absolute -left-[41px] md:-left-[101px] top-1 w-5 h-5 rounded-full bg-black border-4 border-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.5)]" />
                  <span className="text-4xl md:text-5xl font-black text-white/5 absolute -top-4 -left-4 md:-left-8 select-none tracking-tighter z-0">{t.year}</span>
                  <div className="relative z-10 pl-2">
                      <h4 className="text-xl font-bold mb-3 text-white">{t.title}</h4>
                      <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INVESTORS (NEW) */}
      <section className="py-20 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
              <Reveal className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-md">
                      <h3 className="text-2xl font-bold mb-2">Backed by the best.</h3>
                      <p className="text-neutral-500 text-sm">We are supported by world-class investors who share our long-term vision for the future of software.</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
                      {investors.map((inv, i) => (
                          <div key={i} className="flex flex-col items-start p-4 border-l border-white/10 hover:border-orange-500 transition-colors">
                              <span className="font-bold text-lg mb-1">{inv.name}</span>
                              <span className="text-[10px] uppercase tracking-widest text-neutral-600">{inv.tier}</span>
                          </div>
                      ))}
                  </div>
              </Reveal>
          </div>
      </section>

      {/* 9. LEADERSHIP TEAM */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <Reveal className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Architects.</h2>
              <p className="text-neutral-500 text-base">A diverse team of engineers, designers, and dreamers unified by a single obsession: speed.</p>
            </Reveal>
            <Reveal delay={200}>
              <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all text-[10px] uppercase tracking-widest group">
                Join the Team <Users className="w-3 h-3 group-hover:text-orange-500 transition-colors"/>
              </button>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 mb-6 relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-orange-600 transition-colors border border-white/10"><Linkedin className="w-4 h-4"/></button>
                          <button className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-orange-600 transition-colors border border-white/10"><Twitter className="w-4 h-4"/></button>
                       </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors">{member.name}</h4>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-3">{member.role}</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. GLOBAL FOOTPRINT */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Built globally, deployed locally.</h2>
            <div className="relative aspect-[21/9] w-full bg-[#0A0A0A] rounded-[3rem] border border-white/5 flex items-center justify-center group overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '1s'}} />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '2s'}} />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '0.5s'}} />
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full stroke-orange-500/20 stroke-1 fill-none">
                   <path d="M 300 150 Q 600 50 900 300" />
                   <path d="M 400 400 Q 600 300 800 200" />
                </svg>
              </div>
              
              <Globe className="w-32 h-32 text-white/5 group-hover:text-orange-500/20 transition-colors duration-1000 group-hover:rotate-[15deg]" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-white/5 font-black text-6xl md:text-9xl uppercase tracking-tighter select-none">World Wide</div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6">
              {["San Francisco", "London", "Tokyo", "Berlin", "Singapore", "Sydney"].map(city => (
                <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{city}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. CULTURE & GALLERY (NEW/UPDATED) */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-orange-900/10">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <Reveal>
            <div className="inline-block p-4 rounded-full bg-orange-600/10 mb-8 border border-orange-600/20">
                 <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic leading-tight">"We don't have employees,<br/> we have partners in progress."</h2>
            <p className="text-neutral-500 text-base mb-12 max-w-xl mx-auto">
              Our culture is built on trust, autonomy, and a relentless pursuit of the "Better Way." We hate meetings, we love code, and we champion the individual.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { t: "Fully Remote", d: "Work from wherever you're happiest.", i: Globe },
                { t: "Ownership", d: "Equity for every single team member.", i: Award },
                { t: "Unplugged", d: "4 weeks of mandatory 'no-ping' vacation.", i: Zap }
              ].map((c, i) => (
                <div key={i} className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:bg-white/5 transition-colors group">
                  <c.i className="w-6 h-6 text-neutral-600 mb-4 group-hover:text-orange-500 transition-colors"/>
                  <h4 className="font-bold text-white text-lg mb-2">{c.t}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed uppercase tracking-wide">{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Life at Zryoss Gallery */}
        <div className="max-w-7xl mx-auto">
            <Reveal delay={200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-80">
                    {galleryImages.map((img, i) => (
                        <div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                            <img src={img} alt="Life at Zryoss" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
      </section>

      {/* 12. FINAL CTA - CAREERS */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-orange-600 p-12 md:p-24 text-center relative overflow-hidden shadow-[0_0_100px_rgba(234,88,12,0.3)]">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />
          
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Want to build the <br /> infrastructure of the future?</h2>
            <p className="text-orange-100 text-lg mb-12 max-w-lg mx-auto opacity-90">
              We're always looking for brilliant minds to join our mission. No matter where you are in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2 justify-center text-sm shadow-xl">
                View Open Roles <ChevronRight className="w-4 h-4"/>
              </button>
              <button className="px-8 py-4 bg-orange-500 text-white border border-white/20 rounded-full font-bold hover:bg-orange-400 transition-all text-sm">
                Our Values Handbook
              </button>
            </div>
          </Reveal>
        </div>
      </section>
      
    </div>
  );
}