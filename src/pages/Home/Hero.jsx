import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import FadeUp from "../../components/animations/FadeUp";

/* ---------- Custom Styles ---------- */
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
`;

export default function Hero() {
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
    <section className="relative h-screen bg-[#050505] text-white overflow-hidden">
      <style>{customStyles}</style>

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/website-banner.jpg')`,
            opacity: videoLoaded ? 0 : 1,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover scale-110 transition-opacity duration-1000 ${
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
      <div className="relative z-10 h-full">
        <FadeUp>
          <header className="h-full flex flex-col justify-center px-6 lg:px-28 xl:px-32 max-w-[90rem] mx-auto">
            {/* TEXT */}
            <div className="max-w-xl mt-26">
              <h1 className="text-4xl md:text-5xl font-light leading-[1.05] tracking-tight mb-8">
                Build Your Own Business.
                <br />
                <span className="text-orange-400">
                  Let Zryoss Run the Backend.
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-light">
                Solana's most reliable and low latency RPCs, transaction landing
                services, and data streaming tools.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button primary>Apply as Partner</Button>
                <button className="text-gray-300 hover:text-orange-400 transition">
                  Talk to Zryoss Team
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 
              border border-white/10 border-t-white/20 
              pt-14 pb-12 px-10 
              backdrop-blur-md rounded-3xl 
              bg-black/40"
            >
              {[
                { label: "Reliability", val: "99.9%" },
                { label: "Latency", val: "< 10ms" },
                { label: "Data", val: "Real-time" },
                { label: "Support", val: "24/7" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-orange-400 font-semibold">
                    0{i + 1} / {item.label}
                  </span>
                  <span className="text-3xl md:text-4xl font-light">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </header>
        </FadeUp>
      </div>
    </section>
  );
}
