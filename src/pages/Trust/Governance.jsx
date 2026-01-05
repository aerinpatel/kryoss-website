import FadeUp from "../../components/animations/FadeUp";

export default function Governance() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl">
            Governance Model
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            Zryoss operates under a structured governance framework designed
            to ensure accountability, transparency, and responsible decision-
            making across all business activities.
          </p>
        </FadeUp>

        {/* GOVERNANCE PILLARS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Centralized Decision Making",
              desc: "Core platform, operational, and compliance decisions are managed centrally by the Zryoss leadership team.",
            },
            {
              title: "Defined Roles & Ownership",
              desc: "Clear ownership is established for platform operations, delivery oversight, and partner enablement.",
            },
            {
              title: "Process-Driven Execution",
              desc: "Business activities follow documented processes to ensure consistency and accountability.",
            },
            {
              title: "Oversight & Review",
              desc: "Regular reviews are conducted to evaluate performance, risks, and compliance adherence.",
            },
            {
              title: "Partner & Vendor Governance",
              desc: "Partners and vendors operate within defined guidelines and contractual obligations.",
            },
            {
              title: "Scalable Governance Framework",
              desc: "Governance processes are designed to scale with business growth and expansion.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] h-full">
                <h3 className="text-xl font-semibold text-[var(--accent)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] text-sm">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ACCOUNTABILITY */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Accountability & Transparency
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Zryoss maintains accountability through defined ownership,
              structured reporting, and transparent communication across
              internal teams, partners, and vendors.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
