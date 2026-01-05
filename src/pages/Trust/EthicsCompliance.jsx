import FadeUp from "../../components/animations/FadeUp";

export default function EthicsCompliance() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl">
            Ethics & Compliance
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            Zryoss is committed to ethical business practices, regulatory
            compliance, and responsible conduct across all interactions with
            clients, partners, vendors, and stakeholders.
          </p>
        </FadeUp>

        {/* ETHICS PRINCIPLES */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity & Transparency",
              desc: "All business activities are conducted with honesty, clarity, and accountability.",
            },
            {
              title: "Client-First Approach",
              desc: "Client interests and service quality are prioritized in every engagement.",
            },
            {
              title: "Fair Business Practices",
              desc: "Zryoss prohibits misleading claims, false promises, and unethical sales behavior.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Operations comply with applicable laws, regulations, and statutory requirements.",
            },
            {
              title: "Partner & Vendor Conduct",
              desc: "Partners and vendors are expected to follow defined ethical and compliance standards.",
            },
            {
              title: "Data & Confidentiality",
              desc: "Client and business data is handled with confidentiality and responsible safeguards.",
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

        {/* COMPLIANCE STATEMENT */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Compliance Commitment
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Zryoss maintains compliance through internal guidelines, partner
              agreements, vendor contracts, and operational controls. Any
              violation of ethical or compliance standards may result in
              corrective action, suspension, or termination of association.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
