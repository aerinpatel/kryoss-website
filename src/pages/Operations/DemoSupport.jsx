import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function DemoSupport() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Demo & Pre-Sales Support
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss provides centralized demo and pre-sales support to ensure
            consistent, professional, and accurate solution presentation
            across all business engagements.
          </p>
        </FadeUp>

        {/* CORE POINTS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Centralized Demo Team",
              desc: "Experienced professionals conduct solution demos on behalf of partners.",
            },
            {
              title: "Requirement Validation",
              desc: "Business and technical requirements are validated before commitment.",
            },
            {
              title: "Solution Mapping",
              desc: "Client needs are mapped to appropriate services and vendors.",
            },
            {
              title: "Sales Enablement",
              desc: "Partners receive structured support during the sales cycle.",
            },
            {
              title: "Consistency & Accuracy",
              desc: "Standardized demo processes ensure clarity and trust.",
            },
            {
              title: "Reduced Sales Risk",
              desc: "Pre-sales validation minimizes delivery and expectation risks.",
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

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Why This Matters
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Centralized pre-sales ensures clients receive accurate commitments,
              partners avoid over-promising, and delivery teams execute with clarity.
            </p>

            <div className="mt-8">
              <Button primary>Talk to Operations Team</Button>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
