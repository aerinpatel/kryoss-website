import FadeUp from "../../components/animations/FadeUp";

export default function About() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl">
            About Zryoss
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            Zryoss is a business operating platform designed to enable scalable,
            structured, and execution-focused business growth across multiple
            service verticals.
          </p>
        </FadeUp>

        {/* ABOUT CONTENT */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                What We Do
              </h3>
              <p className="mt-4 text-[var(--text-secondary)] text-sm">
                Zryoss provides centralized systems for sales enablement,
                operations, service delivery, vendor management, and quality
                assurance—allowing partners and clients to focus on business
                outcomes.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                How We Operate
              </h3>
              <p className="mt-4 text-[var(--text-secondary)] text-sm">
                Our platform separates sales from delivery, leverages a verified
                vendor ecosystem, and applies centralized governance to ensure
                consistency, scalability, and risk control.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* POSITIONING */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <p className="max-w-4xl text-[var(--text-secondary)]">
              Zryoss is not a marketplace, franchise, or investment platform.
              It is a structured business ecosystem designed for real-world
              execution and long-term sustainability.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
