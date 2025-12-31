import FadeUp from "../../components/animations/FadeUp";

const faqs = [
  {
    q: "Is Zryoss an MLM or referral-based platform?",
    a: "No. Zryoss is not a multi-level marketing, referral income, or network-based platform. Earnings are linked only to real business sales and service delivery.",
  },
  {
    q: "Is Zryoss a franchise?",
    a: "No. Zryoss does not offer franchise ownership. Partners operate under their own brand while Zryoss manages operations and delivery.",
  },
  {
    q: "Does Zryoss offer guaranteed or passive income?",
    a: "No. Zryoss does not provide any guaranteed, fixed, or passive income. Participation requires active business involvement.",
  },
  {
    q: "Who handles service delivery?",
    a: "Service delivery is managed centrally by Zryoss through its brands and verified vendor network.",
  },
  {
    q: "Can I join Zryoss without sales experience?",
    a: "Zryoss partnerships are sales-focused. While prior experience is beneficial, success depends on active effort and learning.",
  },
  {
    q: "Does Zryoss accept investments?",
    a: "No. Zryoss does not accept investments or offer returns on capital.",
  },
  {
    q: "Are there any joining fees?",
    a: "Any applicable onboarding or platform-related fees are communicated transparently during the application process.",
  },
];

export default function FAQs() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            Clear answers to common questions about Zryoss, its platform,
            partnerships, and operations.
          </p>
        </FadeUp>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-6">
          {faqs.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--bg-card)]">
                <h3 className="text-lg font-semibold text-orange-400">
                  {item.q}
                </h3>
                <p className="mt-3 text-[var(--text-muted)] text-sm">
                  {item.a}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
