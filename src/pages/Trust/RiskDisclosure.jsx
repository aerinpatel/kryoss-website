import FadeUp from "../../components/animations/FadeUp";

export default function RiskDisclosure() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl">
            Risk Disclosure
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            This page outlines potential risks associated with engaging with
            the Zryoss platform. It is intended to promote transparency and
            informed decision-making.
          </p>
        </FadeUp>

        {/* RISK TYPES */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Business Performance Risk",
              desc: "Business outcomes depend on market conditions, client demand, and execution quality. No guaranteed results are offered.",
            },
            {
              title: "Operational Risk",
              desc: "Service delivery involves coordination between multiple parties, which may introduce execution risks.",
            },
            {
              title: "Vendor Dependency Risk",
              desc: "Certain services rely on third-party vendors whose performance may impact outcomes.",
            },
            {
              title: "Regulatory & Compliance Risk",
              desc: "Changes in laws or regulations may affect business operations or service availability.",
            },
            {
              title: "Market Risk",
              desc: "Competitive and economic factors may influence demand for services.",
            },
            {
              title: "Technology Risk",
              desc: "Platform availability and performance may be affected by technical issues or upgrades.",
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

        {/* FINAL DISCLAIMER */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-red-500/30 rounded-xl p-10 bg-gradient-to-r from-red-500/10 to-transparent">
            <p className="max-w-4xl text-[var(--text-secondary)] text-sm">
              Zryoss does not provide any assurance of income, business success,
              or financial returns. Participation in the platform involves
              inherent risks, and individuals or organizations should evaluate
              their suitability before engaging.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
