import FadeUp from "../../components/animations/FadeUp";

export default function RiskControl() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Risk & Control Framework
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss implements structured risk management and control mechanisms
            to protect clients, partners, vendors, and the platform across all
            business operations.
          </p>
        </FadeUp>

        {/* RISK AREAS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Operational Risk",
              desc: "Risks related to delivery execution, timelines, and coordination.",
            },
            {
              title: "Vendor Risk",
              desc: "Risks arising from vendor performance, availability, or compliance.",
            },
            {
              title: "Quality Risk",
              desc: "Risks related to service standards and client expectations.",
            },
            {
              title: "Compliance Risk",
              desc: "Risks associated with regulatory, legal, and contractual obligations.",
            },
            {
              title: "Reputational Risk",
              desc: "Risks that may impact brand trust and client confidence.",
            },
            {
              title: "Scalability Risk",
              desc: "Risks involved in rapid growth and capacity expansion.",
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

        {/* CONTROL MECHANISMS */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Control Mechanisms
            </h3>

            <ul className="mt-6 space-y-3 text-[var(--text-secondary)] max-w-4xl">
              <li>• Centralized operational oversight</li>
              <li>• Defined escalation and resolution processes</li>
              <li>• Vendor accountability and performance tracking</li>
              <li>• Quality assurance and SLA enforcement</li>
              <li>• Periodic reviews and corrective actions</li>
            </ul>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
