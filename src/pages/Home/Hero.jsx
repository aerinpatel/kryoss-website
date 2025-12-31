import React, { useState, useEffect, useRef } from 'react';
import WhatIsNot from "./WhatIsNot";
import HowItWorks from "./HowItWorks";
import Brands from "./Brands";
import Button from "../../components/ui/Button";
import CTA from "./CTA";
import { 
  ChevronDown, 
  ChevronRight, 
  Zap, 
  Globe, 
  Cpu, 
  Code, 
  BarChart3, 
  Terminal,
  BookOpen,
  Users,
  Menu,
  X,
  Target,
  Rocket,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import Footer from '../../components/layout/Footer';
/**
 * Custom CSS for the marquee and cinematic animations
 */
const customStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee {
    animation: marquee 50s linear infinite;
  }
  .animate-marquee-reverse {
    animation: marquee-reverse 50s linear infinite;
  }
  .pause-hover:hover .animate-marquee,
  .pause-hover:hover .animate-marquee-reverse {
    animation-play-state: paused;
  }
  .fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.21, 0.45, 0.32, 0.9) forwards;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);
  const partnersRow1 = [
    { name: "Stripe", color: "#6366F1", logo: "💳" },
    { name: "AWS", color: "#FFFFFF", logo: "☁️" },
    { name: "Deel", color: "#FFFFFF", logo: "🌍" },
    { name: "Mercury", color: "#FFFFFF", logo: "🏦" },
    { name: "Intercom", color: "#3B82F6", logo: "💬" },
    { name: "Slack", color: "#FFFFFF", logo: "⌨️" },
  ];

  const partnersRow2 = [
    { name: "Zoom", color: "#3B82F6", logo: "📹" },
    { name: "Vercel", color: "#FFFFFF", logo: "▲" },
    { name: "Notion", color: "#FFFFFF", logo: "📓" },
    { name: "Airtable", color: "#F97316", logo: "📊" },
    { name: "Figma", color: "#FFFFFF", logo: "🎨" },
    { name: "PostHog", color: "#FFFFFF", logo: "🦔" },
  ];

  return (
    <div className="min-h-screen -mb-110 bg-[#050505] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <style>{customStyles}</style>
      
      {/* --- CINEMATIC BACKGROUND SYSTEM --- */}
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-0"
          style={{ 
            backgroundImage: `url('/website-banner.jpg')`,
            opacity: videoLoaded ? 0 : 1 
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-10" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 z-0 scale-110 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="https://cdn.pixabay.com/video/2021/08/01/83542-583271427_large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-20">
        <header className="relative pt-20 pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="">
            <div className='max-w-lg'>
              <h1 className="text-4xl md:text-5xl font-normal leading-[1.02] tracking-tight mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
                Build Your Own Business.
                <br/>
                <span className="text-orange-400">
              Let Zryoss Run the Backend.
            </span>
              </h1>
            </div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-light drop-shadow-lg">
              Solana's most reliable and low latency RPCs, transaction landing services, and data streaming tools.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button primary>Apply as Partner</Button>
            <button outline>Talk to Zryoss Team</button>
            </div>
          </div>

          <div className="mt-44 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-90 border-t border-white/10 pt-12 backdrop-blur-md rounded-2xl p-8 bg-black/20">
            {[
              { label: 'Reliability', val: '99.9%' },
              { label: 'Latency', val: '< 10ms' },
              { label: 'Data', val: 'Real-time' },
              { label: 'Support', val: '24/7' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">0{i+1} / {item.label}</span>
                <span className="text-lg font-light text-white">{item.val}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Partners Marquee */}
        <section className="bg-black/80 backdrop-blur-md border-y border-white/5 py-16 overflow-hidden pause-hover flex flex-col gap-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4">
              POWERING OPERATIONS FOR GLOBAL TEAMS
            </h2>
          </div>

          <div className="relative flex">
            <div className="flex whitespace-nowrap items-center gap-16 animate-marquee">
              {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer transition-all duration-500">
                  <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">{partner.logo}</span>
                  <span className="text-2xl md:text-3xl font-bold tracking-tighter opacity-20 group-hover:opacity-100 transition-all" style={{ color: partner.color }}>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex">
            <div className="flex whitespace-nowrap items-center gap-16 animate-marquee-reverse">
              {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer transition-all duration-500">
                  <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">{partner.logo}</span>
                  <span className="text-2xl md:text-3xl font-bold tracking-tighter opacity-20 group-hover:opacity-100 transition-all" style={{ color: partner.color }}>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="bg-black ">
          <WhatIsNot />
          <HowItWorks />
          <Brands />
          <CTA />
          <Footer/>
        </section>
      </div>
    </div>
  );
};

export default App;