import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    id: "it",
    title: "IT & Software",
    fullTitle: "IT & Software Solutions",
    subtitle:
      "Enterprise-grade technology systems built for scale, security, and performance.",
    link: "/solutions/it-software",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    fullTitle: "Digital Marketing Solutions",
    subtitle:
      "Growth systems designed to generate revenue through data-driven performance marketing.",
    link: "/solutions/digital-marketing",
  },
  {
    id: "hr",
    title: "HR & Recruitment",
    fullTitle: "HR & Recruitment Solutions",
    subtitle: "Structured hiring and workforce systems built for high-growth enterprises.",
    link: "/solutions/hr-recruitment",
  },
  {
    id: "education",
    title: "Education & EdTech",
    fullTitle: "Education & EdTech Solutions",
    subtitle: "Innovative learning platforms and educational technology solutions.",
    link: "/solutions/education-edtech",
  },
  {
    id: "healthcare",
    title: "Healthcare Tech",
    fullTitle: "Healthcare & Medical Technology",
    subtitle: "Advanced healthcare IT and patient management platforms.",
    link: "/solutions/healthcare-technology",
  },
  {
    id: "interior",
    title: "Interior & Infra",
    fullTitle: "Interior & Infrastructure Solutions",
    subtitle: "Commercial space design and infrastructure optimization services.",
    link: "/solutions/interior-infrastructure",
  },
  {
    id: "business",
    title: "Business Services",
    fullTitle: "Business & Professional Services",
    subtitle: "Legal, compliance, and consulting services for business operation.",
    link: "/solutions/business-services",
  },
];

export default function Solutions() {
  const [active, setActive] = useState(solutions[0].id);

  const refs = useRef({});
  const navRef = useRef(null);

  // ✅ Right scroll container ref
  const scrollRootRef = useRef(null);

  useEffect(() => {
    // ✅ Important: observe inside right scroll container
    const rootEl = scrollRootRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);

            // ✅ auto scroll active tab in mobile tabs
            const activeTab = document.getElementById(`nav-${entry.target.id}`);
            if (activeTab && navRef.current) {
              navRef.current.scrollTo({
                left: activeTab.offsetLeft - 16,
                behavior: "smooth",
              });
            }
          }
        });
      },
      {
        root: rootEl || null, // ✅ key change
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = refs.current[id];
    if (!element) return;

    // ✅ If desktop: scroll inside right container
    if (window.innerWidth >= 1024 && scrollRootRef.current) {
      const container = scrollRootRef.current;

      // relative position
      const top =
        element.offsetTop - 18; // small gap from top (you can adjust)

      container.scrollTo({
        top,
        behavior: "smooth",
      });

      return;
    }

    // ✅ Mobile: window scroll (same old behavior)
    const headerOffset = window.innerWidth < 1024 ? 86 : 110;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="solutions"
      className="relative bg-[#050505]
        py-16 sm:py-20 md:py-28 lg:py-44
        border-t border-white/5 scroll-mt-24 z-10"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2
            w-[260px] sm:w-[380px] md:w-[900px]
            h-[260px] sm:h-[380px] md:h-[900px]
            bg-orange-500/10 blur-[90px] sm:blur-[120px] md:blur-[200px]"
        />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-5 sm:px-6 md:px-10 lg:px-28 xl:px-32">
        {/* HEADER */}
        <div className="mb-10 sm:mb-14 md:mb-20 lg:mb-28 max-w-4xl text-center mx-auto">
          <p className="text-orange-500 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] mb-4 md:mb-6 block font-semibold">
            Solutions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Full-Spectrum Business
            <span className="block text-orange-400 mt-2 md:mt-4">
              Solutions That Actually Execute
            </span>
          </h2>
        </div>

        {/* MOBILE STICKY NAV */}
        <div
          className="lg:hidden sticky top-[72px] z-50
            -mx-5 px-5 py-3
            bg-[#050505]/92 backdrop-blur-md
            border-y border-white/5 mb-8"
        >
          <div
            ref={navRef}
            className="flex overflow-x-auto gap-2.5 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {solutions.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full
                  text-[10px] sm:text-[11px] font-medium transition-all duration-300 border
                  ${
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

        <div className="grid grid-cols-12 gap-8 sm:gap-10 lg:gap-24">
          {/* LEFT STICKY */}
          <aside className="col-span-4 hidden lg:block">
            <div className="sticky top-40 space-y-10">
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
                  <h4
                    className={`text-lg font-medium transition-colors ${
                      active === item.id ? "text-orange-400" : ""
                    }`}
                  >
                    {item.fullTitle}
                  </h4>
                  <p className="text-sm mt-2 leading-relaxed opacity-80">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* ✅ RIGHT SCROLL AREA (Observer root) */}
          <div className="col-span-12 lg:col-span-8">
            <div
              ref={scrollRootRef}
              className="
                lg:max-h-[calc(100vh-180px)]
                lg:overflow-y-auto
                lg:pr-2
                no-scrollbar
              "
            >
              <div className="space-y-10 sm:space-y-14 md:space-y-24 lg:space-y-32">
                {solutions.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    ref={(el) => (refs.current[item.id] = el)}
                    className="group relative rounded-[22px] sm:rounded-[26px] md:rounded-[32px]
                      border border-white/10
                      bg-gradient-to-b from-white/[0.07] to-transparent
                      p-5 sm:p-6 md:p-12 lg:p-16
                      shadow-[0_18px_70px_rgba(0,0,0,0.4)]
                      hover:border-white/20 transition-all duration-500"
                  >
                    <a
                      href={item.link}
                      className="absolute top-4 right-4 sm:top-5 sm:right-5
                        w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full
                        border border-white/15 bg-black/50
                        flex items-center justify-center
                        text-orange-400
                        transition-all duration-300
                        hover:scale-110 active:scale-95 group-hover:bg-orange-500/20"
                    >
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </a>

                    <div className="max-w-3xl">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-3 sm:mb-4 md:mb-6 pr-10 leading-snug">
                        {item.fullTitle}
                      </h3>

                      <p className="text-gray-400 mb-7 sm:mb-10 md:mb-14 text-[13px] sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
                      <div className="rounded-2xl border border-white/5 p-4 sm:p-5 md:p-8 bg-white/[0.03] backdrop-blur-sm">
                        <h5 className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-orange-400 mb-2.5 md:mb-3 font-bold">
                          What We Deliver
                        </h5>
                        <p className="text-[12px] sm:text-xs md:text-sm text-gray-400 leading-relaxed">
                          Structured systems, reliable execution, and technology
                          foundations built to support long-term scale.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/5 p-4 sm:p-5 md:p-8 bg-white/[0.03] backdrop-blur-sm">
                        <h5 className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-orange-400 mb-2.5 md:mb-3 font-bold">
                          Why It Works
                        </h5>
                        <p className="text-[12px] sm:text-xs md:text-sm text-gray-400 leading-relaxed">
                          Reduced chaos, predictable outcomes, and operational
                          clarity across teams.
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-8 sm:left-10 right-8 sm:right-10 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ✅ END */}
        </div>
      </div>
    </section>
  );
}
