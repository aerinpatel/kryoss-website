import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    id: "it",
    title: "IT & Software",
    fullTitle: "IT & Software Solutions",
    subtitle:
      "Enterprise-grade technology systems built for scale, security, and performance.",
    link: "/solutions/it",
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    fullTitle: "HR & Recruitment Solutions",
    subtitle:
      "Structured hiring and workforce systems built for growing organizations.",
    link: "/solutions/hr",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    fullTitle: "Digital Marketing Solutions",
    subtitle: "Growth systems designed to generate revenue, not vanity metrics.",
    link: "/solutions/marketing",
  },
  {
    id: "payroll",
    title: "Payroll",
    fullTitle: "Payroll & Compliance Solutions",
    subtitle: "Accurate, compliant, and scalable payroll management.",
    link: "/solutions/payroll",
  },
  {
    id: "legal",
    title: "Legal",
    fullTitle: "Legal & Compliance Services",
    subtitle: "Structured legal support to operate with confidence.",
    link: "/solutions/legal",
  },
  {
    id: "realestate",
    title: "Real Estate",
    fullTitle: "Real Estate & Interior Solutions",
    subtitle: "Business-focused real estate and interior execution.",
    link: "/solutions/realestate",
  },
];

export default function Solutions() {
  const [active, setActive] = useState(solutions[0].id);
  const refs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);

            const activeTab = document.getElementById(`nav-${entry.target.id}`);
            if (activeTab && navRef.current) {
              const tabLeft = activeTab.offsetLeft;
              const tabWidth = activeTab.offsetWidth;
              const containerWidth = navRef.current.offsetWidth;
              const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);

              navRef.current.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
              });
            }
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    Object.values(refs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = refs.current[id];
    if (!element) return;

    const headerOffset = window.innerWidth < 1024 ? 130 : 110;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#050505] 
      py-12 sm:py-16 md:py-24 lg:py-44 
      border-t border-white/5"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 left-1/2 -translate-x-1/2 
          w-[200px] sm:w-[300px] md:w-[600px] lg:w-[900px] 
          h-[200px] sm:h-[300px] md:h-[600px] lg:h-[900px] 
          bg-orange-500/10 blur-[60px] sm:blur-[90px] md:blur-[140px] lg:blur-[200px]"
        />
      </div>

      <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32 max-w-[1600px]">
        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 max-w-4xl text-center mx-auto">
          <p className="text-orange-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 md:mb-6 font-semibold">
            Solutions
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight px-4 sm:px-0">
            Full-Spectrum Business
            <span className="block text-orange-400 mt-2 sm:mt-3 md:mt-4">
              Solutions That Actually Execute
            </span>
          </h2>
        </div>

        {/* MOBILE STICKY NAV */}
        <div className="lg:hidden sticky top-[60px] sm:top-[70px] z-50 
          -mx-4 sm:-mx-6 md:-mx-8
          px-4 sm:px-6 py-3 sm:py-3.5
          bg-[#050505]/95 backdrop-blur-md 
          border-y border-white/5 mb-6 sm:mb-8"
        >
          <div
            ref={navRef}
            className="flex overflow-x-auto gap-2 sm:gap-2.5 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {solutions.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  setActive(item.id);
                  if (window.innerWidth >= 1024) {
                    scrollToSection(item.id);
                  }
                }}
                className={`flex-shrink-0 px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full 
                  text-[11px] sm:text-xs font-medium transition-all duration-300 border whitespace-nowrap
                  ${active === item.id
                    ? "bg-orange-500 border-orange-500 text-black"
                    : "bg-white/5 border-white/10 text-gray-400"
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* LEFT STICKY (Desktop Only) */}
          <aside className="col-span-4 hidden lg:block">
            <div className="sticky top-32 xl:top-44 space-y-8 xl:space-y-10">
              {solutions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer pl-5 xl:pl-6 border-l-2 transition-all duration-300 ${active === item.id
                    ? "border-orange-400 text-white"
                    : "border-white/10 text-gray-500 hover:text-gray-300"
                    }`}
                >
                  <h4
                    className={`text-base xl:text-lg font-medium transition-colors ${active === item.id ? "text-orange-400" : ""
                      }`}
                  >
                    {item.fullTitle}
                  </h4>
                  <p className="text-xs xl:text-sm mt-1.5 xl:mt-2 leading-relaxed opacity-80">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="col-span-12 lg:col-span-8 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-32 xl:space-y-44">
            {solutions.map((item) => (
              <div
                key={item.id}
                id={item.id}
                ref={(el) => (refs.current[item.id] = el)}
                className={`group relative overflow-hidden
                  rounded-2xl sm:rounded-3xl md:rounded-[28px] lg:rounded-[32px]
                  border border-white/10 
                  bg-gradient-to-b from-white/[0.07] to-transparent
                  p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16
                  shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:shadow-[0_18px_70px_rgba(0,0,0,0.4)]
                  hover:border-white/20 transition-all duration-500
                  ${active === item.id ? "block" : "hidden lg:block"}
                  `}
              >
                {/* CTA Button */}
                <a
                  href={item.link}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6
                    w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full 
                    border border-white/15 bg-black/50
                    flex items-center justify-center
                    text-orange-400
                    transition-all duration-300
                    hover:scale-110 active:scale-95 group-hover:bg-orange-500/20
                    z-10"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <div className="max-w-3xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light 
                         mb-3 sm:mb-4 md:mb-5 lg:mb-6 pr-12 sm:pr-14 md:pr-16 leading-tight sm:leading-snug">
                    {item.fullTitle}
                  </h3>

                  <p className="text-gray-400 mb-6 sm:mb-8 md:mb-10 lg:mb-14 
                        text-sm sm:text-base md:text-lg leading-relaxed"
                  >
                    {item.subtitle}
                  </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  <div className="rounded-xl sm:rounded-2xl border border-white/5 p-4 sm:p-5 md:p-6 lg:p-8 bg-white/[0.03] backdrop-blur-sm">
                    <h5 className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-orange-400 mb-2 sm:mb-2.5 md:mb-3 font-bold">
                      What We Deliver
                    </h5>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                      Structured systems, reliable execution, and technology foundations built to support long-term scale.
                    </p>
                  </div>

                  <div className="rounded-xl sm:rounded-2xl border border-white/5 p-4 sm:p-5 md:p-6 lg:p-8 bg-white/[0.03] backdrop-blur-sm">
                    <h5 className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-orange-400 mb-2 sm:mb-2.5 md:mb-3 font-bold">
                      Why It Works
                    </h5>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                      Reduced chaos, predictable outcomes, and operational clarity across teams.
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-6 sm:left-8 md:left-10 right-6 sm:right-8 md:right-10 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}