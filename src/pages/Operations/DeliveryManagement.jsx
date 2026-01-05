import FadeUp from "../../components/animations/FadeUp";

export default function DeliveryManagement() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Delivery Management
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss manages the complete delivery lifecycle to ensure projects
            are executed with clarity, accountability, and transparency from
            initiation to completion.
          </p>
        </FadeUp>

        {/* DELIVERY LIFECYCLE */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Project Initiation",
              desc: "Scope finalization, timelines, and delivery alignment before execution.",
            },
            {
              title: "Resource Allocation",
              desc: "Assignment of vendors, teams, and responsibilities.",
            },
            {
              title: "Execution Tracking",
              desc: "Ongoing monitoring of progress against agreed milestones.",
            },
            {
              title: "Coordination & Communication",
              desc: "Central coordination between clients, partners, and vendors.",
            },
            {
              title: "Issue Resolution",
              desc: "Timely identification and resolution of delivery issues.",
            },
            {
              title: "Completion & Handover",
              desc: "Structured delivery closure and documentation handover.",
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

        {/* TRANSPARENCY BLOCK */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Transparency & Accountability
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Delivery progress, risks, and milestones are tracked centrally,
              ensuring all stakeholders have visibility into execution status
              and outcomes.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
