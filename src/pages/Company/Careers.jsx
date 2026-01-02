import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function Careers() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Careers at Zryoss
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Build meaningful work around operations, platforms, and scalable
            business execution.
          </p>
        </FadeUp>

        {/* WHY WORK */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Purpose-Driven Platform",
              desc: "Work on a platform designed for real business impact, not hype-driven growth.",
            },
            {
              title: "Structured & Scalable",
              desc: "Be part of a system-first organization focused on execution and governance.",
            },
            {
              title: "Long-Term Thinking",
              desc: "Zryoss values stability, learning, and sustainable growth.",
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

        {/* OPENINGS */}
        <FadeUp delay={0.35}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)]">
            <h3 className="text-3xl font-semibold text-[var(--accent)]">
              Current Openings
            </h3>

            <p className="mt-4 text-[var(--text-secondary)]">
              Zryoss hires selectively based on business needs.  
              Current roles may include:
            </p>

            <ul className="mt-6 space-y-2 text-[var(--text-secondary)]">
              <li>• Operations & Delivery Coordination</li>
              <li>• Platform & Systems Support</li>
              <li>• Quality & Compliance</li>
              <li>• Sales Enablement & Pre-Sales</li>
            </ul>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.5}>
          <div className="mt-20 flex">
            <Button primary>Send Your Profile</Button>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
