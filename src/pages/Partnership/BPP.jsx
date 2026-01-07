import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Stethoscope,
  Plane,
  Landmark,
  Truck,
  Film,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Plus,
  Minus,
  Globe,
  ShieldCheck,
  TrendingUp,
  Star,
  Quote,
  BarChart4,
  Briefcase,
  Users2,
  Wallet,
  Clock
} from 'lucide-react';
import BenifitsSection from '../../components/ui/BenifitsSection'

/* --- Hooks & Utility Components --- */

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

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollVisibility(0.1);
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-orange-500' : 'text-white group-hover:text-orange-400'}`}>
          {question}
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">{answer}</p>
        </div>
      </div>
    </div>
  );
};

/* --- Main Application Component --- */

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  
  const clients = [
    'TechCorp', 'GlobalSoft', 'InnoVentures', 'DataFlow', 'CloudNine',
    'NextGen', 'SmartHub', 'ProSystems', 'FutureTech', 'Quantum'
  ];

  const testimonials = [
    {
      name: "Rajesh Malhotra",
      role: "Strategic Consultant",
      content: "Transitioning to the Zryoss BPP model was the best career move I've made. I focus on high-level networking, and their technical team delivers beyond expectations. My commissions have tripled in 6 months.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      stats: "₹18L Earned"
    },
    {
      name: "Sarah Jenkins",
      role: "Enterprise Tech Lead",
      content: "What impressed me most was the zero recruitment pressure. It's a pure performance model. The transparency in deal tracking and the quality of implementation is world-class.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      stats: "12 Successful Deals"
    },
    {
      name: "Ananya Sharma",
      role: "Business Architect",
      content: "I've worked with many partner programs, but Zryoss provides the strongest collateral and post-sale support. It makes the conversion cycle incredibly smooth for enterprise clients.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      stats: "Global Reach Partner"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target;
    const originalText = btn.innerText;
    btn.innerText = "Sent!";
    setTimeout(() => btn.innerText = originalText, 2000);
  };

  const industries = [
    { icon: Stethoscope, name: "Healthcare IT", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" },
    { icon: Plane, name: "Travel Tech", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600" },
    { icon: Landmark, name: "Fintech", img: "https://images.unsplash.com/photo-1565514020176-db79269ce330?auto=format&fit=crop&q=80&w=600" },
    { icon: Truck, name: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" },
    { icon: Film, name: "Media", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=600" },
    { icon: GraduationCap, name: "EdTech", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" }
  ];

  const workflowSteps = [
    { 
      num: "01", 
      title: "Join & Verify", 
      desc: "Complete digital onboarding.",
      icon: Users2,
      detail: "24hr Approval"
    },
    { 
      num: "02", 
      title: "Master Catalog", 
      desc: "Access premium services.",
      icon: Briefcase,
      detail: "Full Training"
    },
    { 
      num: "03", 
      title: "Connect Leads", 
      desc: "Introduce solutions.",
      icon: Zap,
      detail: "Zero Selling"
    },
    { 
      num: "04", 
      title: "Auto-Payout", 
      desc: "Direct commission deposit.",
      icon: Wallet,
      detail: "Instant Transfer"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-600/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center border-b border-white/5 relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-30"
               alt="Background"
             />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">Official BPP Program 2025</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
                Promote Value.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Earn with Precision.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                High-ticket business promotion with zero recruitment. Scale your income by connecting enterprises with world-class solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="px-10 py-4 bg-orange-600 hover:bg-orange-500 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(234,88,12,0.5)] flex items-center gap-2 group">
                  Become a Partner 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <button className="px-10 py-4 bg-transparent border border-neutral-700 hover:border-white text-white rounded-full font-bold text-lg transition-all hover:bg-white/5">
                  View Commission Structure
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Section - Split Layout */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Business Meeting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-1">₹50Cr+</div>
                    <div className="text-sm text-neutral-300">Revenue Generated by Partners</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                The Partnership Model <br />
                <span className="text-neutral-500">Reimagined.</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-400 font-light">
                <p>
                  The Zryoss Business Promotion Partner (BPP) program is built for visionaries who want to earn based on their network, not their headcount.
                </p>
                <p>
                  We act as your delivery engine. You own the relationship and the introduction. We provide the heavy lifting—implementation, consulting, and support—while you earn significant commissions on every deal.
                </p>
                <div className="pt-6">
                  <div className="flex items-center gap-4 text-white font-medium">
                    <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500">
                      <Zap size={24} />
                    </div>
                    <span>No joining fees. No recruitment targets.</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NEW: Why Join Us - Beautiful Data Cards */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-[#080808] relative">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatedSection className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-8 border-b border-white/5">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Become a BPP?</h2>
                <p className="text-neutral-400 text-lg">Unlock specific advantages designed to accelerate your professional earnings with clear data-driven benefits.</p>
              </div>
              <a href="#contact" className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-orange-600 hover:border-orange-600 text-white transition-all flex items-center gap-2">
                Join Program <ArrowRight size={16} />
              </a>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Uncapped Earnings",
                desc: "Direct percentage on deal value. High-ticket services mean high-ticket payouts.",
                metrics: [
                  { label: "Commission Cap", value: "Unlimited" },
                  { label: "Payout Cycle", value: "Weekly" }
                ],
                color: "text-green-400"
              },
              {
                icon: ShieldCheck,
                title: "Zero Risk Entry",
                desc: "No capital expenditure required. We handle the tech stack, you handle the network.",
                metrics: [
                  { label: "Investment", value: "₹0.00" },
                  { label: "Staff Needed", value: "0" }
                ],
                color: "text-blue-400"
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Your location doesn't define your market. Sell to enterprises across 50+ countries.",
                metrics: [
                  { label: "Territory", value: "Global" },
                  { label: "Currency", value: "Multi" }
                ],
                color: "text-purple-400"
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="h-full bg-neutral-900/40 border border-white/5 rounded-3xl p-8 hover:bg-neutral-900/80 hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                      <item.icon size={28} className={item.color} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed mb-8">{item.desc}</p>
                    
                    {/* Data Points Divider */}
                    <div className="w-full h-px bg-white/5 mb-6" />
                    
                    {/* Data Points Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-black/20 rounded-lg p-3 border border-white/5">
                          <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-semibold">{metric.label}</div>
                          <div className="text-lg font-mono text-white font-bold">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BenifitsSection/>

      {/* NEW: Workflow Section - Pipeline Design */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 relative z-10 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative">
          <AnimatedSection className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Workflow</h2>
             <p className="text-neutral-400 text-lg">Four distinct phases to your next commission check.</p>
          </AnimatedSection>
          
          <div className="relative">
             {/* Connecting Line - Desktop (Horizontal) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-neutral-800 -translate-y-1/2 rounded-full z-0">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-neutral-800 via-orange-900/50 to-neutral-800" />
             </div>
             
             {/* Connecting Line - Mobile (Vertical) */}
             <div className="md:hidden absolute top-0 left-8 h-full w-1 bg-neutral-800 rounded-full z-0" />

             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                {workflowSteps.map((step, i) => (
                   <AnimatedSection key={i} delay={i * 150} className="relative">
                      <div className="flex flex-col md:items-center relative group">
                         {/* Number Node */}
                         <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0a0a0a] border-4 border-neutral-800 text-neutral-500 font-bold text-xl mb-6 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,1)] relative z-20 md:ml-0 ml-0">
                            {step.num}
                         </div>
                         
                         {/* Card Content */}
                         <div className="pl-4 md:pl-0 md:text-center w-full">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/5 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-2">
                               <div className="mb-4 inline-flex p-3 rounded-lg bg-orange-500/10 text-orange-500">
                                  <step.icon size={24} />
                               </div>
                               <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                               <p className="text-sm text-neutral-400 mb-4 h-10">{step.desc}</p>
                               
                               <div className="inline-block px-3 py-1 rounded text-xs font-mono bg-white/5 text-neutral-300 border border-white/5">
                                  {step.detail}
                               </div>
                            </div>
                         </div>
                      </div>
                   </AnimatedSection>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden bg-neutral-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto w-full relative">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner Success Stories</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the professionals who are scaling their income with the Zryoss BPP model.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150} className="h-full">
                <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 flex flex-col h-full hover:bg-neutral-900 transition-colors group relative overflow-hidden">
                  {/* Decorative quote icon */}
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:text-orange-500/10 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  <p className="text-lg text-neutral-300 italic mb-10 relative z-10 leading-relaxed">
                    "{t.content}"
                  </p>

                  <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/50">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">{t.role}</p>
                      <div className="text-[10px] font-mono font-bold text-orange-500 px-2 py-0.5 bg-orange-500/10 rounded inline-block">
                        {t.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Image Grid */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto w-full">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries You Can Serve</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Our expertise spans across critical sectors, giving you a massive market to target.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg">
                  <img 
                    src={industry.img} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <industry.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white transform group-hover:-translate-y-2 transition-transform duration-300">{industry.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Scroller */}
      <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
           <span className="text-sm font-mono text-neutral-500 tracking-widest uppercase">Trusted By Industry Leaders</span>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 px-6">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default">
                {client.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="animate-marquee2 absolute top-0 whitespace-nowrap flex gap-16 px-6">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-neutral-800 hover:text-white transition-colors cursor-default">
                {client.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-6">
        <div className="max-w-3xl mx-auto w-full">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
            {[
              {
                question: "Is this a multi-level marketing (MLM) scheme?",
                answer: "Absolutely not. The BPP program is a direct sales commission model. You earn only from the deals you facilitate. There are no downlines, no recruitment requirements, and no pyramid structures."
              },
              {
                question: "What is the typical ramp-up time?",
                answer: "Once partnership agreements are signed, you can start promoting immediately. Our most successful partners close their first deal within 30 days."
              },
              {
                question: "Do you offer post-sale support?",
                answer: "Yes, we handle all post-sale delivery and client support. Your role focuses on the relationship and the initial sale; we take care of the rest."
              },
              {
                question: "What is the cost structure?",
                answer: "There are zero joining fees. You simply sign the partner agreement and get access to our sales collateral and dashboard."
              }
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <FAQItem 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={true}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-12 bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl">
            {/* Left Side Info */}
            <div className="lg:col-span-2 bg-orange-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold mb-6">Ready to Scale?</h3>
                 <p className="text-orange-100 mb-12">
                   Join the Zryoss BPP program today and transform your professional network into a revenue stream.
                 </p>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <Mail className="mt-1 opacity-80" />
                     <div>
                       <div className="text-xs uppercase opacity-70 mb-1">Email Us</div>
                       <div className="font-medium">partners@zryoss.com</div>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <Phone className="mt-1 opacity-80" />
                     <div>
                       <div className="text-xs uppercase opacity-70 mb-1">Call Us</div>
                       <div className="font-medium">+91 98765 43210</div>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <MapPin className="mt-1 opacity-80" />
                     <div>
                       <div className="text-xs uppercase opacity-70 mb-1">Headquarters</div>
                       <div className="font-medium">Business Park, Mumbai<br/>Maharashtra 400001</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right Side Form */}
            <div className="lg:col-span-3 p-12">
               <h3 className="text-2xl font-bold mb-8 text-white">Application Request</h3>
               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Full Name</label>
                     <input 
                       type="text" 
                       className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                       placeholder="John Doe"
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Work Email</label>
                     <input 
                       type="email" 
                       className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                       placeholder="john@company.com"
                       value={formData.email}
                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                     />
                   </div>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Message / Inquiry</label>
                   <textarea 
                     rows={4}
                     className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                     placeholder="Tell us about your background..."
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                   />
                 </div>
                 
                 <button 
                   onClick={handleSubmit}
                   className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                 >
                   Submit Application
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="h-[400px] relative group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Office Map View" 
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-full border border-white/20 hover:scale-110 transition-transform cursor-pointer shadow-2xl">
            <MapPin size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-black py-16 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter text-white mb-2">ZRYOSS<span className="text-orange-600">.</span></div>
            <p className="text-neutral-500 text-sm">Empowering professionals through high-value partnerships.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Partner Agreement</a>
          </div>
          
          <div className="text-neutral-600 text-xs">
            © 2025 Zryoss BPP. All rights reserved.
          </div>
        </div>
      </footer> */}
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
}