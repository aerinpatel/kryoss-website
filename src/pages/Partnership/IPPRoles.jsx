import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function IPPRoles() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            IPP Roles & Responsibilities
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Independent Profit Partners operate as business owners.
            This page outlines exactly what IPPs are responsible for
            and how Zryoss supports them operationally.
          </p>
        </FadeUp>

        {/* CORE RESPONSIBILITIES */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sales & Business Development",
              points: [
                "Lead generation and prospecting",
                "Client meetings and requirement discovery",
                "Negotiation and deal closure",
                "Pipeline management",
              ],
            },
            {
              title: "Client Relationship Management",
              points: [
                "Primary client point of contact",
                "Expectation setting",
                "Ongoing communication",
                "Relationship retention",
              ],
            },
            {
              title: "Team & Growth Management",
              points: [
                "Building a sales team if required",
                "Managing BPPs or sales executives",
                "Performance tracking",
                "Market expansion strategy",
              ],
            },
          ].map((block, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] h-full">
                <h3 className="text-xl font-semibold text-[var(--accent)]">
                  {block.title}
                </h3>
                <ul className="mt-6 space-y-2 text-[var(--text-secondary)]">
                  {block.points.map((p, j) => (
                    <li key={j}>• {p}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* OWNERSHIP SPLIT */}
        <FadeUp delay={0.35}>
          <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                IPP Owns
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• Sales strategy and execution</li>
                <li>• Client acquisition and retention</li>
                <li>• Brand positioning</li>
                <li>• Sales team performance</li>
              </ul>
            </div>

            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                Zryoss Owns
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• Demos and pre-sales execution</li>
                <li>• Service delivery and vendors</li>
                <li>• Quality assurance & SLAs</li>
                <li>• Operations, systems & compliance</li>
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* ACCOUNTABILITY */}
        <FadeUp delay={0.5}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Accountability & Performance
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              IPP performance is evaluated based on sales quality,
              client satisfaction, and business sustainability.
              There are no rewards for recruitment, referrals,
              or team size alone.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button primary>Apply as IPP</Button>
              <Button outline>Talk to Zryoss Team</Button>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
