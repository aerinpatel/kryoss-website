import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    id: "it",
    title: "IT & Software",
    fullTitle: "IT & Software Solutions",
    subtitle: "Enterprise-grade technology systems built for scale, security, and performance.",
    link: "/solutions/it",
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    fullTitle: "HR & Recruitment Solutions",
    subtitle: "Structured hiring and workforce systems built for growing organizations.",
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
  const navRef = useRef(null); // Mobile nav scroll support

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            // Mobile nav auto-scroll to active item
            const activeTab = document.getElementById(`nav-${entry.target.id}`);
            if (activeTab && navRef.current) {
              navRef.current.scrollTo({
                left: activeTab.offsetLeft - 20,
                behavior: "smooth",
              });
            }
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    Object.values(refs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = refs.current[id];
    if (!element) return;
    const offset = 100; // Sticky header offset
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative bg-[#050505] py-20 lg:py-44 border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-orange-500/10 blur-[100px] md:blur-[200px]" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-5 md:px-10 lg:px-28 xl:px-32">
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-28 max-w-4xl text-center mx-auto">
          <p className="text-orange-500 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 md:mb-6 block font-semibold">
            Solutions
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.2] md:leading-[1.05]">
            Full-Spectrum Business
            <span className="block text-orange-400 mt-2 md:mt-4">
              Solutions That Actually Execute
            </span>
          </h2>
        </div>

        {/* MOBILE STICKY NAVIGATION (Visible only on mobile/tablet) */}
        <div className="lg:hidden sticky top-0 z-50 -mx-5 px-5 py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 mb-10">
          <div 
            ref={navRef}
            className="flex overflow-x-auto gap-3 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {solutions.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-[11px] font-medium transition-all duration-300 border ${
                  active === item.id
                    ? "bg-orange-500 border-orange-500 text-black"
                    : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-24">
          {/* LEFT STICKY (Desktop Only) */}
          <aside className="col-span-4 hidden lg:block">
            <div className="sticky top-44 space-y-10">
              {solutions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer pl-6 border-l transition-all duration-300 ${
                    active === item.id
                      ? "border-orange-400 text-white"
                      : "border-white/10 text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <h4 className={`text-lg font-medium transition-colors ${active === item.id ? 'text-orange-400' : ''}`}>
                    {item.fullTitle}
                  </h4>
                  <p className="text-sm mt-2 leading-relaxed opacity-80">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT - Optimized for Responsiveness */}
          <div className="col-span-12 lg:col-span-8 space-y-12 md:space-y-44">
            {solutions.map((item) => (
              <div
                key={item.id}
                id={item.id}
                ref={(el) => (refs.current[item.id] = el)}
                className="group relative rounded-[24px] md:rounded-[32px] border border-white/10 
                  bg-gradient-to-b from-white/[0.07] to-transparent
                  p-6 md:p-12 lg:p-16
                  shadow-[0_20px_80px_rgba(0,0,0,0.4)]
                  hover:border-white/20 transition-all duration-500"
              >
                {/* Mobile-Friendly Arrow CTA */}
                <a
                  href={item.link}
                  className="absolute top-5 right-5 w-9 h-9 md:w-12 md:h-12 rounded-full 
                    border border-white/15 bg-black/50
                    flex items-center justify-center
                    text-orange-400
                    transition-all duration-300
                    hover:scale-110 active:scale-95 group-hover:bg-orange-500/20"
                >
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>

                {/* Text Content */}
                <div className="max-w-3xl">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 pr-10 leading-snug">
                    {item.fullTitle}
                  </h3>
                  <p className="text-gray-400 mb-8 md:mb-14 text-sm md:text-base lg:text-lg leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Responsive Bento-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="rounded-2xl border border-white/5 p-5 md:p-8 bg-white/[0.03] backdrop-blur-sm">
                    <h5 className="text-[10px] md:text-xs uppercase tracking-widest text-orange-400 mb-3 font-bold">
                      What We Deliver
                    </h5>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      Structured systems, reliable execution, and technology
                      foundations built to support long-term scale.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/5 p-5 md:p-8 bg-white/[0.03] backdrop-blur-sm">
                    <h5 className="text-[10px] md:text-xs uppercase tracking-widest text-orange-400 mb-3 font-bold">
                      Why It Works
                    </h5>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      Reduced chaos, predictable outcomes, and operational
                      clarity across teams.
                    </p>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}