import { useState } from "react";
import FadeUp from "../../components/animations/FadeUp";

const faqs = [
  {
    q: "Is Zryoss an MLM or referral-based platform?",
    a: "No. Zryoss is not a multi-level marketing or referral income platform. All earnings are generated through real business sales and verified service delivery.",
  },
  {
    q: "Is Zryoss a franchise?",
    a: "No. Zryoss does not offer franchise ownership. Partners operate independently while Zryoss manages centralized systems and delivery.",
  },
  {
    q: "Does Zryoss offer guaranteed or passive income?",
    a: "No. Zryoss does not provide guaranteed, fixed, or passive income. Active participation is required.",
  },
  {
    q: "Who handles service delivery?",
    a: "Service delivery is handled centrally by Zryoss through its brands and verified vendors.",
  },
  {
    q: "Can I join without sales experience?",
    a: "Prior sales experience is helpful but not mandatory. Success depends on effort, learning, and execution.",
  },
  {
    q: "Does Zryoss accept investments?",
    a: "No. Zryoss does not accept investments or provide returns on capital.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-[#0F172A] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[85vh] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          alt="Support & clarity"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
                        from-[#0F172A]/80 via-[#0F172A]/80 to-[#0F172A]" />

        {/* Content */}
        <FadeUp>
          <div className="relative text-center max-w-4xl px-6">
            
            <div className="flex justify-center mb-6">
              
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Frequently Asked
              <span className="block text-orange-500 mt-2">Questions</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Clear, transparent answers about Zryoss, partnerships,
              operations, and how the platform truly works.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="relative max-w-6xl mx-auto px-6 py-32">

        {/* Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                        w-[800px] h-[800px] bg-orange-500/20 blur-[160px]" />

        <div className="relative space-y-6">
          {faqs.map((item, i) => {
            const open = true;

            return (
              <FadeUp key={i} delay={i * 0.05}>
                <div
                  className={`group relative rounded-2xl overflow-hidden
                    border transition-all duration-300
                    ${
                      open
                        ? "border-orange-500/40 bg-white/10"
                        : "border-white/10 bg-white/5"
                    }
                    hover:border-orange-500/40 hover:-translate-y-1`}
                >
                  {/* Left Accent */}
                  <div
                    className={`absolute left-0 top-0 h-full w-[3px]
                      bg-gradient-to-b from-orange-400 to-orange-600
                      transition-opacity
                      ${open ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                  />

                  {/* Question */}
                  <button
                    className="w-full px-8 py-6 flex justify-between items-center
                               text-left focus:outline-none"
                  >
                    <span className="text-white font-medium text-lg">
                      {item.q}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out
                      ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden px-8 pb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>

                  {/* Hover shimmer */}
                  <div className="pointer-events-none absolute inset-0 
                                  bg-gradient-to-r from-transparent via-white/5 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <FadeUp delay={0.4}>
          <div className="mt-32 text-center border border-orange-500/30 
                          rounded-2xl p-10 bg-white/5 backdrop-blur-md">
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
              For full transparency, we recommend reviewing official Zryoss
              documentation and communicating only through verified channels.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}