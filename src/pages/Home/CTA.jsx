import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import Footer from '../../components/layout/Footer';

/**
 * Custom Animation Component
 */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background Ambience & Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_70%)] z-0" />
      
      {/* Decorative Carbon Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative py-12 lg:py-20 px-6 lg:px-12">
          {/* FIX: Removed negative margins (-m-6 lg:-m-12) which cause layout shifts in stacks.
              Using inset-0 with a standard rounded border for a cleaner fit.
          */}
          <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[40px] z-0 backdrop-blur-md pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <ShieldCheck size={14} />
                Partner Program 2024
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] md:leading-[0.9] mb-8">
                Ready to Build a <br />
                <span className="text-orange-500">Real Business?</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                Join Zryoss as a partner and focus exclusively on sales while we 
                orchestrate the technical demos, delivery, and backend operations.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Primary Action Button */}
                <button 
                  type="button"
                  className="group relative px-8 py-5 bg-orange-600 hover:bg-orange-500 text-black font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(234,88,12,0.2)]"
                >
                  <span className="relative z-10 uppercase text-xs tracking-widest">
                    Apply as Partner
                  </span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>

                {/* Secondary Action Button */}
                <button 
                  type="button"
                  className="flex items-center gap-3 text-white/60 hover:text-orange-500 transition-colors py-4 px-6 font-medium tracking-wide group"
                >
                  <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Talk to Zryoss Team</span>
                </button>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Floating Accents */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
      </div>
      <Footer/>
    </section>
  );
}