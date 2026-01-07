import React, { useState, useEffect } from 'react';
import { CheckCircle2, Monitor, Rocket, Megaphone, FileText, Headphones, PieChart } from 'lucide-react';

// Wrapper component for animations (simplified version)
const AnimatedSection = ({ children, delay = 0, className = "" }) => (
  <div 
    className={`transition-all duration-700 ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const checklistItems = [
    {
      title: "Full-cycle software development & delivery",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      label: "ENGINEERING",
      stats: { label: "Sprint Progress", value: "92%", color: "bg-blue-500" }
    },
    {
      title: "Enterprise-grade consulting",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      label: "STRATEGY",
      stats: { label: "Architecture Score", value: "98/100", color: "bg-purple-500" }
    },
    {
      title: "Marketing campaign execution",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      label: "MARKETING",
      stats: { label: "Ad Reach", value: "1.2M", color: "bg-pink-500" }
    },
    {
      title: "Sales collateral & pitch decks",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
      label: "SALES ENABLEMENT",
      stats: { label: "Decks Ready", value: "15", color: "bg-yellow-500" }
    },
    {
      title: "24/7 Client support teams",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=1000",
      label: "SUPPORT",
      stats: { label: "Response Time", value: "< 5 min", color: "bg-green-500" }
    },
    {
      title: "Transparent commission tracking",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      label: "PARTNER DASHBOARD",
      stats: { label: "Total Leads", value: "48", color: "bg-orange-500" }
    }
  ];

  const handleHover = (index) => {
    if (activeTab !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className="bg-neutral-950 min-h-[90vh] text-white font-sans flex items-center overflow-hidden">
      <section className="h-[90vh] w-full flex flex-col justify-center py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Interactive List */}
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                We Handle The Tech.<br/>
                <span className="text-orange-500">You Handle The Business.</span>
              </h2>
              <p className="text-neutral-400 text-base mb-8 font-light max-w-lg">
                Think of us as your elite technical delivery arm. While you focus on strategy and sales, we execute with precision.
              </p>
              
              <div className="grid gap-2">
                {checklistItems.map((item, i) => (
                  <div 
                    key={i} 
                    onMouseEnter={() => handleHover(i)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 cursor-pointer group ${
                      activeTab === i 
                        ? "bg-white/10 border-orange-500/50 translate-x-2" 
                        : "bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/20"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeTab === i ? "bg-orange-600 scale-110" : "bg-orange-600/20"
                    }`}>
                      <CheckCircle2 
                        className={`transition-colors duration-300 ${activeTab === i ? "text-white" : "text-orange-500"}`} 
                        size={16} 
                      />
                    </div>
                    <span className={`text-base transition-colors duration-300 ${
                      activeTab === i ? "text-white font-medium" : "text-neutral-200"
                    }`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Right Column: Dynamic Visuals */}
            <AnimatedSection delay={200} className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  
                  {/* Background Image with Crossfade */}
                  <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                    <img 
                      src={checklistItems[activeTab].img} 
                      alt={checklistItems[activeTab].title} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${isTransitioning ? 'scale-110 blur-sm' : 'scale-100'}`}
                    />
                  </div>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-orange-950/10 mix-blend-overlay" />

                  {/* Dynamic Dashboard Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="bg-black/60 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 transform transition-all duration-500 translate-y-0 opacity-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-orange-500 uppercase">
                          {checklistItems[activeTab].label}
                        </span>
                        <span className="flex items-center gap-2 text-[10px] font-mono text-green-400">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> LIVE FEED
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="transition-all duration-300">
                           <div className="flex justify-between text-[10px] text-neutral-400 font-mono mb-1.5">
                             <span>{checklistItems[activeTab].stats.label}</span>
                             <span className="text-white font-bold">{checklistItems[activeTab].stats.value}</span>
                           </div>
                           <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                             <div 
                               className={`h-full transition-all duration-1000 ease-out rounded-full ${checklistItems[activeTab].stats.color}`}
                               style={{ width: isTransitioning ? '0%' : '85%' }}
                             />
                           </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono pt-3 border-t border-white/10">
                           <div className="flex flex-col">
                             <span className="text-[9px] uppercase opacity-50 mb-0.5">Status</span>
                             <span className="text-white">Active Delivery</span>
                           </div>
                           <div className="text-right">
                             <span className="text-[9px] uppercase opacity-50 mb-0.5">Commission</span>
                             <div className="text-orange-500 font-bold text-xs">₹ 1,24,000</div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 blur-[100px] rounded-full -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 blur-[100px] rounded-full -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;