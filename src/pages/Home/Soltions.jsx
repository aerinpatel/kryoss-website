import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  {
    id: "it",
    title: "IT & Software Solutions",
    subtitle:
      "Enterprise-grade technology systems built for scale, security, and performance.",
    link: "/solutions/it",
  },
  {
    id: "hr",
    title: "HR & Recruitment Solutions",
    subtitle:
      "Structured hiring and workforce systems built for growing organizations.",
    link: "/solutions/hr",
  },
  {
    id: "marketing",
    title: "Digital Marketing Solutions",
    subtitle:
      "Growth systems designed to generate revenue, not vanity metrics.",
    link: "/solutions/marketing",
  },
  {
    id: "payroll",
    title: "Payroll & Compliance Solutions",
    subtitle:
      "Accurate, compliant, and scalable payroll management.",
    link: "/solutions/payroll",
  },
  {
    id: "legal",
    title: "Legal & Compliance Services",
    subtitle:
      "Structured legal support to operate with confidence.",
    link: "/solutions/legal",
  },
  {
    id: "realestate",
    title: "Real Estate & Interior Solutions",
    subtitle:
      "Business-focused real estate and interior execution.",
    link: "/solutions/realestate",
  },
];

export default function Solutions() {
  const [active, setActive] = useState(solutions[0].id);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    Object.values(refs.current).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#050505] py-44 border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-[200px]" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32">
        {/* SECTION HEADER */}
        <div className="mb-28 max-w-4xl text-center mx-auto">
          <p className="text-orange-500 text-xs uppercase tracking-[0.4em] mb-6 block font-semibold">
            Solutions
          </p>
          <h2 className="text-5xl md:text-6xl font-light leading-[1.05]">
            Full-Spectrum Business
            <span className="block text-orange-400 mt-4">
              Solutions That Actually Execute
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-24 mx-auto">
          {/* LEFT STICKY */}
          <aside className="col-span-4 hidden lg:block">
            <div className="sticky top-44 space-y-10">
              {solutions.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    refs.current[item.id].scrollIntoView({ behavior: "smooth" })
                  }
                  className={`cursor-pointer pl-6 border-l transition-all duration-300 ${
                    active === item.id
                      ? "border-orange-400 text-white"
                      : "border-white/10 text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <h4 className={`text-lg font-medium ${active === item.id ? 'text-orange-400' : ''}`}>{item.title}</h4>
                  <p className="text-sm mt-2 leading-relaxed opacity-80">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="col-span-12 lg:col-span-8 space-y-44">
            {solutions.map((item) => (
              <div
                key={item.id}
                id={item.id}
                ref={(el) => (refs.current[item.id] = el)}
                className="group relative rounded-[28px] border border-white/10 
                  bg-gradient-to-b from-white/[0.06] to-black
                  p-14 md:p-16
                  shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                  hover:shadow-[0_60px_160px_rgba(0,0,0,0.8)]
                  transition-all duration-500"
              >
                {/* Arrow CTA */}
                <a
                  href={item.link}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full 
                    border border-white/15 bg-black/50
                    flex items-center justify-center
                    text-orange-400
                    transition-all duration-300
                    group-hover:-translate-y-1 group-hover:bg-orange-500/10"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-400 max-w-2xl mb-14 text-base">
                  {item.subtitle}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="rounded-2xl border border-white/10 p-7 bg-black/50">
                    <h5 className="text-xs uppercase tracking-wider text-orange-400 mb-3">
                      What We Deliver
                    </h5>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Structured systems, reliable execution, and technology
                      foundations built to support long-term scale.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 p-7 bg-black/50">
                    <h5 className="text-xs uppercase tracking-wider text-orange-400 mb-3">
                      Why It Works
                    </h5>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Reduced chaos, predictable outcomes, and operational
                      clarity across teams.
                    </p>
                  </div>
                </div>

                {/* Bottom subtle glow line */}
                <div className="absolute bottom-0 left-20 right-20 h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
