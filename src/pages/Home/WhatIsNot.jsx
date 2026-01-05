import React from 'react';
import { ShieldAlert, Users, Store, Repeat, TrendingDown, X } from 'lucide-react';
import FadeUp from '../../components/animations/FadeUp';
const items = [
  {
    title: "Not MLM",
    description: "No pyramid earnings.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Not Franchise",
    description: "Independent legacy.",
    icon: <Store className="w-5 h-5" />,
  },
  {
    title: "Not Referral Income",
    description: "Skill-based rewards.",
    icon: <Repeat className="w-5 h-5" />,
  },
  {
    title: "Not Investment Scheme",
    description: "Legitimate business.",
    icon: <TrendingDown className="w-5 h-5" />,
  },
];

export default function WhatIsNot() {
  // SVG Path Data for the 4 branches
  const paths = [
    "M450 0V15C450 35 112 35 112 64",
    "M450 0V15C450 35 337 35 337 64",
    "M450 0V15C450 35 562 35 562 64",
    "M450 0V15C450 35 787 35 787 64"
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden text-white font-sans">
      <style>{`
        @keyframes heartbeat {
          0% { stroke-dashoffset: 1000; opacity: 0; }
          10% { opacity: 1; }
          40% { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .pulse-line {
          stroke-dasharray: 100;
          animation: heartbeat 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Ambience - Shifted to Orange */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-900/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldAlert className="w-4 h-4" />
              Structural Integrity
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Business Model Tree
            </h2>
          </FadeUp>
        </div>

        {/* Tree Structure Container */}
        <div className="flex flex-col items-center">
          
          {/* Root Node: Zryoss */}
          <FadeUp>
            <div className="relative group">
              {/* Changed glow to orange */}
              <div className="absolute -inset-4 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-48 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                <span className="text-xl font-bold tracking-wider text-white">ZRYOSS</span>
              </div>
            </div>
          </FadeUp>

          {/* Vertical Connection 1 - Changed to Orange */}
          <div className="w-0.5 h-12 bg-gradient-to-b from-slate-700 to-orange-500" />

          {/* Logic Branch: What we are NOT */}
          <FadeUp delay={0.2}>
            <div className="relative flex flex-col items-center">
              {/* Changed badge to Orange */}
              <div className="px-6 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-semibold flex items-center gap-2 z-20">
                <X className="w-4 h-4" />
                Excluded Models
              </div>
              
              {/* Complex Connector Lines (SVG) */}
              <div className="hidden md:block w-[900px] h-16 relative -mt-2">
                <svg width="100%" height="100%" viewBox="0 0 900 64" fill="none" preserveAspectRatio="none">
                  <defs>
                    <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {paths.map((d, i) => (
                    <React.Fragment key={i}>
                      {/* Base Static Line - Changed to Orange */}
                      <path 
                        d={d} 
                        stroke="#f97316" 
                        strokeWidth="3" 
                        strokeOpacity="0.2" 
                        strokeLinecap="round" 
                      />
                      {/* Animated Pulse Line (Orange Heartbeat) */}
                      <path 
                        d={d} 
                        className="pulse-line"
                        stroke="#fb923c" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        filter="url(#orange-glow)"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </React.Fragment>
                  ))}
                </svg>
              </div>
              {/* Mobile Line - Changed to Orange */}
              <div className="md:hidden w-0.5 h-8 bg-orange-500/50" />
            </div>
          </FadeUp>

          {/* Leaf Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-4 md:mt-0 relative z-10">
            {items.map((item, i) => (
              <FadeUp key={i} delay={0.4 + (i * 0.1)}>
                <div className="group relative">
                  {/* Branch Line for Mobile - Changed to Orange */}
                  <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-orange-500/50" />
                  
                  {/* Changed hover border to Orange */}
                  <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md hover:border-orange-500/50 transition-all duration-300 flex flex-col items-center text-center shadow-lg group-hover:shadow-orange-500/10 h-full">
                    {/* Changed icon hover background to Orange */}
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-500 flex items-center justify-center mb-5 rotate-3 group-hover:rotate-0">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto pt-4">
                      {/* Changed dot to Orange */}
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-orange-500 transition-colors" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={1}>
          <div className=" text-center flex flex-col items-center">
            <div className="w-48 mt-10 h-0.5 bg-gradient-to-r from-slate-800 via-transparent to-slate-800 mb-6" />
            <p className="text-slate-500 text-sm font-medium tracking-widest max-w-lg uppercase">
              Committed to a Higher Standard
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}