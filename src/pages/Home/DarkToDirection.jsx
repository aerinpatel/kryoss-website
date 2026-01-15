import React from "react";
import FadeUp from "../../components/animations/FadeUp";
import { ArrowRight } from "lucide-react";

export default function DarkToDirection() {
    const transitions = [
        { from: "Confusion", to: "Structure" },
        { from: "Effort", to: "Execution" },
        { from: "Chaos", to: "Control" }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-28 xl:px-32 relative z-10">
                <FadeUp>
                    <div className="text-center mb-16 sm:mb-20 md:mb-24">
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-500 font-semibold mb-4 sm:mb-6 block">
                            Moving Forward
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                            From Dark to <span className="text-orange-400">Direction</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light px-4">
                            Many start in confusion, job pressure, or failed businesses. ZRYOSS exists to shift your trajectory.
                        </p>
                    </div>
                </FadeUp>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    {transitions.map((item, idx) => (
                        <FadeUp key={idx} delay={idx * 0.2}>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 group">
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-700 group-hover:text-gray-500 transition-colors uppercase tracking-widest text-center md:text-right">
                                    {item.from}
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-500/30 flex items-center justify-center text-orange-500 transform group-hover:rotate-45 transition-transform duration-500 flex-shrink-0">
                                    <ArrowRight size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white group-hover:text-orange-400 transition-colors uppercase tracking-widest text-center md:text-left">
                                    {item.to}
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                {/* Visual Decoration */}
                <div className="mt-20 sm:mt-24 md:mt-32 flex justify-center">
                    <div className="relative">
                        <div className="w-1 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-orange-500 to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-500 blur-sm" />
                    </div>
                </div>
            </div>
        </section>
    );
}
