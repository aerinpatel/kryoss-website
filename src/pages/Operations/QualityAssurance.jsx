import FadeUp from "../../components/animations/FadeUp";

export default function QualityAssurance() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Quality Assurance
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss maintains centralized quality assurance processes to ensure
            consistent service standards, vendor accountability, and client
            satisfaction across all engagements.
          </p>
        </FadeUp>

        {/* QA PILLARS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Defined Service Standards",
              desc: "Each service follows documented quality benchmarks and delivery guidelines.",
            },
            {
              title: "SLA-Based Monitoring",
              desc: "Service-level agreements are tracked throughout the delivery lifecycle.",
            },
            {
              title: "Vendor Performance Reviews",
              desc: "Vendors are periodically reviewed based on delivery quality and compliance.",
            },
            {
              title: "Issue Escalation Framework",
              desc: "Clear escalation paths ensure issues are resolved quickly and transparently.",
            },
            {
              title: "Client Feedback Loop",
              desc: "Structured feedback mechanisms help improve service outcomes.",
            },
            {
              title: "Corrective Actions",
              desc: "Underperformance triggers corrective steps or vendor reassignment.",
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

        {/* QA VALUE */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Why Quality Assurance Matters
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Centralized quality assurance ensures clients receive reliable
              outcomes, partners build long-term trust, and vendors remain
              accountable to agreed standards.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
