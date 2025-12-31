import FadeUp from "../../components/animations/FadeUp";

export default function PartnerGuidelines() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Partner Guidelines
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            These guidelines outline the expected conduct, communication
            standards, and operational responsibilities for all Zryoss partners.
          </p>
        </FadeUp>

        {/* GUIDELINES */}
        <div className="mt-20 space-y-8">
          {[
            {
              title: "Ethical Representation",
              desc: "Partners must represent Zryoss accurately and avoid misleading claims related to income, partnerships, or business outcomes.",
            },
            {
              title: "No Income Guarantees",
              desc: "Partners must not promise fixed, guaranteed, or passive income to any individual or organization.",
            },
            {
              title: "No Recruitment-Based Promotion",
              desc: "Partners must not promote Zryoss as a recruitment, network, or referral income opportunity.",
            },
            {
              title: "Client Communication",
              desc: "All client interactions must be professional, transparent, and aligned with approved service scope and commitments.",
            },
            {
              title: "Brand Usage",
              desc: "Zryoss brand assets and references must be used only as per approved guidelines.",
            },
            {
              title: "Compliance & Reporting",
              desc: "Partners must comply with platform policies, reporting requirements, and operational processes.",
            },
            {
              title: "Violation & Consequences",
              desc: "Any violation of guidelines may result in corrective action, suspension, or termination of partnership.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
                <h3 className="text-xl font-semibold text-orange-400">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--text-muted)] text-sm">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* FINAL NOTE */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-red-500/30 rounded-xl p-8 bg-gradient-to-r from-red-500/10 to-transparent">
            <p className="text-[var(--text-muted)] text-sm">
              Adherence to these guidelines is mandatory for continued
              association with the Zryoss platform.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
