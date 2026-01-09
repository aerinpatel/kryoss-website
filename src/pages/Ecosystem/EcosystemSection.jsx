import FadeUp from "../../components/animations/FadeUp";

export default function EcosystemSection({ title, intro, blocks }) {
  return (
    <section className="py-32 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto px-6">

        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            {title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-lg text-[var(--text-muted)]">
            {intro}
          </p>
        </FadeUp>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {blocks.map((block, i) => (
            <FadeUp key={i} delay={0.25 + i * 0.1}>
              <div className="h-full border border-[var(--border)] rounded-2xl p-8 bg-[var(--bg-card)] hover:border-orange-500/40 transition-colors">
                <h3 className="text-xl font-semibold text-orange-400">
                  {block.title}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
