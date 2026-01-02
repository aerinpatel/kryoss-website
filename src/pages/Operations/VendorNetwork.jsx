import FadeUp from "../../components/animations/FadeUp";

export default function VendorNetwork() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Vendor Network
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss operates an asset-light delivery model powered by a curated
            network of verified vendors, enabling scalable execution without
            compromising quality or control.
          </p>
        </FadeUp>

        {/* VENDOR MODEL */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Vendor Onboarding",
              desc: "Vendors are onboarded through structured evaluation and capability checks.",
            },
            {
              title: "Service-Specific Allocation",
              desc: "Vendors are mapped based on expertise, industry, and service type.",
            },
            {
              title: "Centralized Coordination",
              desc: "Zryoss coordinates all vendor activity through defined processes.",
            },
            {
              title: "Quality-Linked Engagement",
              desc: "Vendor participation depends on delivery performance and quality metrics.",
            },
            {
              title: "Scalable Capacity",
              desc: "New vendors can be added without increasing fixed operational costs.",
            },
            {
              title: "Risk Mitigation",
              desc: "Multi-vendor availability reduces dependency and delivery risk.",
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

        {/* SCALE BLOCK */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Why the Vendor Network Matters
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              By leveraging a distributed vendor ecosystem, Zryoss can scale
              service delivery rapidly while maintaining centralized oversight,
              quality assurance, and risk control.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
