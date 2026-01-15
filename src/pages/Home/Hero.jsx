import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;

const Button = ({ children, primary, outline, className = "", onClick }) => {
  const baseStyles = "px-5 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 relative overflow-hidden group/btn cursor-pointer text-sm";
  const primaryStyles = primary ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/60 hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:skew-x-12" : "";
  const outlineStyles = outline ? "border-2 border-orange-500/50 text-orange-400 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-orange-600/20 hover:border-orange-500 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30" : "";
  
  return (
    <button className={`${baseStyles} ${primaryStyles} ${outlineStyles} ${className}`} onClick={onClick}>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <section className="relative h-screen bg-[#050505] text-white overflow-hidden">
      <style>{customStyles}</style>

      {/* STICKY BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/website-banner.jpg')`,
            opacity: videoLoaded ? 0 : 1,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source
            src="https://cdn.pixabay.com/video/2021/08/01/83542-583271427_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 lg:px-16 xl:px-20 max-w-7xl mx-auto">
          <div className="max-w-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">
                Your Brand. Our Engine.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5">
              Build, Run & Scale{" "}
              <span className="block mt-1">
                Real Businesses —
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mt-1">
                With a System, Not Chaos
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-3 mb-8">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                ZRYOSS is a Business Operating System designed to help individuals and organizations build independent brands, while ZRYOSS manages execution, operations, and delivery behind the scenes.
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-normal border-l-2 border-orange-500/30 pl-3 italic">
                ZRYOSS is not a company you work for. ZRYOSS is the system that works for your business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <Button primary>
                Explore How ZRYOSS Works
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              <Button outline>
                Join as IPP / BPP
              </Button>
            </div>

            {/* Demo Link */}
            <button className="text-xs text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center gap-2 group">
              <span className="w-8 h-px bg-gray-600 group-hover:w-12 group-hover:bg-orange-500 transition-all duration-300" />
              <Play size={12} className="group-hover:text-orange-400" />
              <span className="font-medium">Request a Solution Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-[5] pointer-events-none" />
    </section>
  );
}