import FadeUp from "../../components/animations/FadeUp";

export default function VisionMission() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Vision & Mission
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            The long-term direction and purpose that guide Zryoss as a business
            operating platform.
          </p>
        </FadeUp>

        {/* VISION */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)] h-full">
              <h2 className="text-3xl font-semibold text-[var(--accent)]">
                Our Vision
              </h2>
              <p className="mt-6 text-[var(--text-secondary)]">
                To build a scalable and trusted business operating platform
                that enables individuals and organizations to create real,
                sustainable businesses without operational complexity.
              </p>
            </div>
          </FadeUp>

          {/* MISSION */}
          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)] h-full">
              <h2 className="text-3xl font-semibold text-[var(--accent)]">
                Our Mission
              </h2>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• Centralize operations, delivery, and governance</li>
                <li>• Enable sales-focused partners to grow responsibly</li>
                <li>• Maintain quality, compliance, and accountability</li>
                <li>• Support asset-light and scalable execution models</li>
                <li>• Build long-term trust with all stakeholders</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* GUIDING PRINCIPLES */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Guiding Principles
            </h3>
            <ul className="mt-6 space-y-3 text-[var(--text-secondary)] max-w-4xl">
              <li>• Execution over promises</li>
              <li>• Transparency over hype</li>
              <li>• Structure over chaos</li>
              <li>• Sustainability over shortcuts</li>
            </ul>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
