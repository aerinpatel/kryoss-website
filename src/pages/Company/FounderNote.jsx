import FadeUp from "../../components/animations/FadeUp";

export default function FounderNote() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Founder’s Note
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            A message on intent, responsibility, and the long-term vision behind Zryoss.
          </p>
        </FadeUp>

        {/* NOTE CONTENT */}
        <FadeUp delay={0.3}>
          <div className="mt-20 border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)] space-y-6 text-[var(--text-secondary)]">
            <p>
              Zryoss was built to solve a recurring problem observed across
              businesses — strong sales capability without reliable execution,
              and strong execution capability without scalable sales.
            </p>

            <p>
              The intent behind Zryoss is not to create a shortcut to income or
              an alternative to hard work, but to provide a structured operating
              platform where effort is aligned with real business outcomes.
            </p>

            <p>
              By centralizing operations, delivery, governance, and quality
              control, Zryoss enables individuals and organizations to focus on
              building sustainable businesses without unnecessary operational
              burden.
            </p>

            <p>
              Transparency, compliance, and long-term trust form the foundation
              of this platform. Growth without integrity is not a goal we
              pursue.
            </p>

            <p>
              Zryoss is being built for durability — not speed alone, but
              stability, responsibility, and scale over time.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
