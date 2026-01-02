import FadeUp from "../../components/animations/FadeUp";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Partner Onboarding",
    desc: "Partners join Zryoss to run their own business under their brand.",
  },
  {
    title: "Sales & Lead Generation",
    desc: "Partners focus on client acquisition and relationship management.",
  },
  {
    title: "Demo by Zryoss",
    desc: "Our centralized demo and pre-sales team handles client demos.",
  },
  {
    title: "Delivery by Brands",
    desc: "Execution is handled by Zryoss brands and verified vendors.",
  },
  {
    title: "Reporting & Payout",
    desc: "Transparent reporting with performance-based payouts.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-4xl font-bold text-center">
            How Zryoss Works
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-4 text-center text-[var(--text-secondary)] max-w-3xl mx-auto">
            Zryoss is a business operating platform where partners focus on sales
            while operations, demos, vendors, and delivery are centrally managed.
          </p>
        </FadeUp>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="relative border border-gray-800 rounded-xl p-6 bg-[#020617] h-full">
                <div className="text-indigo-400 text-sm font-semibold">
                  Step {index + 1}
                </div>

                <h3 className="mt-3 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {step.desc}
                </p>

                {/* Arrow for desktop */}
                {index !== steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Anti-MLM Disclaimer */}
        <FadeUp delay={0.4}>
          <div className="mt-16 max-w-4xl mx-auto text-center border border-gray-800 rounded-xl p-6 bg-[#020617]">
            <p className="text-sm text-[var(--text-secondary)]">
              ⚠️ <span className="text-white font-medium">Important:</span>{" "}
              Zryoss does not offer recruitment-based income, passive earnings,
              or referral commissions. All earnings are strictly linked to real
              business sales and service delivery.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
