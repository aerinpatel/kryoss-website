import FadeUp from "../../components/animations/FadeUp";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is Zryoss an MLM or referral-based platform?",
    a: "No. Zryoss is not a multi-level marketing (MLM), referral income, or pyramid-based platform. All revenue is generated through legitimate business services and verified execution models.",
  },
  {
    q: "Is Zryoss a franchise opportunity?",
    a: "No. Zryoss does not offer franchise ownership. Partners operate independently while execution, governance, and service delivery are managed centrally by Zryoss.",
  },
  {
    q: "Does Zryoss provide guaranteed or passive income?",
    a: "No. Zryoss does not offer guaranteed, fixed, or passive income. Earnings are performance-based and depend on active participation and execution.",
  },
  {
    q: "Who handles service delivery?",
    a: "All service delivery is managed centrally by Zryoss through its internal teams and verified vendors, ensuring governance, compliance, and quality control.",
  },
  {
    q: "Can someone join without prior sales experience?",
    a: "Yes. While sales experience is beneficial, it is not mandatory. Success depends on learning, effort, and disciplined execution.",
  },
  {
    q: "Does Zryoss accept investments or provide returns?",
    a: "No. Zryoss does not accept investments, deposits, or capital in exchange for returns. It is strictly an execution and operations platform.",
  },
];

export default function FAQs() {
  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[85vh] flex items-center justify-center">

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b
                        from-[#0F172A]/85 via-[#0F172A]/85 to-[#0F172A]" />

        <FadeUp>
          <div className="relative max-w-4xl px-6 text-center">



            <h1 className="text-5xl md:text-6xl font-bold">
              Frequently Asked
              <span className="block text-orange-500 mt-2">Questions</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Transparent answers explaining how Zryoss works, what it is,
              and what it is not — with complete clarity.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* ================= FAQ LIST ================= */}
      <div className="relative max-w-6xl mx-auto px-6 py-32">

        {/* Ambient Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2
                        w-[800px] h-[800px] bg-orange-500/20 blur-[160px]" />

        <div className="relative space-y-8">
          {faqs.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10
                              bg-gradient-to-br from-white/5 to-white/[0.02]
                              backdrop-blur-md p-10">

                {/* Question */}
                <h3 className="text-lg font-semibold text-white mb-4">
                  {item.q}
                </h3>

                {/* Answer */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <FadeUp delay={0.3}>
          <div className="mt-32 text-center border border-orange-500/30
                          rounded-2xl p-10 bg-white/5 backdrop-blur-md">
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
              For clarity and compliance, Zryoss does not offer investments,
              guaranteed income, or referral-based earnings. Always rely on
              official documentation and verified communication channels.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
