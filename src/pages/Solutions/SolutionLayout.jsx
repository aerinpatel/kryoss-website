import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function SolutionLayout({
  title,
  subtitle,
  description,
  offerings,
}) {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl">
            {title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            {subtitle}
          </p>
        </FadeUp>

        {/* DESCRIPTION */}
        <FadeUp delay={0.25}>
          <p className="mt-10 max-w-4xl text-[var(--text-muted)]">
            {description}
          </p>
        </FadeUp>

        {/* OFFERINGS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] h-full">
                <h3 className="text-xl font-semibold text-orange-400">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--text-muted)] text-sm">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-orange-500/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Talk to Our Solutions Team
            </h3>

            <p className="mt-4 max-w-3xl text-[var(--text-muted)]">
              Get a tailored solution designed around your business needs.
            </p>

            <div className="mt-8">
              <Button primary>Request Consultation</Button>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
