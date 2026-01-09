import FadeUp from "../../components/animations/FadeUp";

export default function HowItWorksSection({ title, intro, steps }) {
  return (
    <section className="py-32 bg-[var(--bg-section)]">
      <div className="max-w-6xl mx-auto px-6">

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

        <div className="mt-20 space-y-6">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={0.25 + i * 0.1}>
              <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--bg-card)]">
                <h3 className="text-xl font-semibold text-orange-400">
                  {step.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
