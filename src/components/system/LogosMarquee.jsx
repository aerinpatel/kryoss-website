import React from "react";
import { motion } from "framer-motion";

export default function BrandsTextMarquee() {
  const brands = [
    { name: "Vyombiz", url: "https://vyombiz.com" },
    { name: "Clink HR", url: "https://clinkhr.com" },
    { name: "Edulinker", url: "https://edulinker.com" },
    { name: "Medikryoss", url: "https://medikryoss.com" },
    { name: "Kryoss Softech", url: "https://kryoss.com" },
  ];

  const loop = [...brands, ...brands, ...brands];

  return (
    <section className="bg-[#0B0F14] py-10 overflow-hidden relative">
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="relative overflow-hidden">
          {/* fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-44 bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-44 bg-gradient-to-l from-[#0B0F14] via-[#0B0F14]/80 to-transparent z-20" />

          {/* marquee */}
          <div className="flex items-center h-[110px] md:h-[140px]">
            <motion.div
              className="flex items-center flex-none"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                duration: 22,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loop.map((b, i) => (
                <a
                  key={i}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 md:px-14 flex items-center justify-center"
                >
                  {/* hover glow */}
                  <span className="absolute inset-0 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* text */}
                  <span
                    className="
                      relative font-extrabold tracking-wide
                      text-2xl md:text-4xl lg:text-4xl
                      text-white/75
                      transition-all duration-300
                      group-hover:text-orange-400
                      group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.40)]
                    "
                    style={{
                      fontFamily:
                        "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial",
                    }}
                  >
                    {b.name}
                  </span>

                  {/* underline */}
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 bg-orange-500 transition-all duration-500 group-hover:w-[65%]" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
