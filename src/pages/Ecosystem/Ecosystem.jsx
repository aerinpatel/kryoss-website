import FadeUp from "../../components/animations/FadeUp";

export default function Ecosystem() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Zryoss Ecosystem
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            Zryoss operates as a multi-layered business ecosystem where
            platform systems, brands, vendors, and partners work together
            under centralized governance.
          </p>
        </FadeUp>

        <div className="mt-24 grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Platform Layer",
              desc: "Central systems, governance, reporting, and controls.",
            },
            {
              title: "Brand Layer",
              desc: "Execution brands delivering domain-specific services.",
            },
            {
              title: "Vendor Layer",
              desc: "Verified vendors executing delivery at scale.",
            },
            {
              title: "Partner Layer",
              desc: "Sales-focused partners driving client acquisition.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
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

      </div>
    </section>
  );
}
