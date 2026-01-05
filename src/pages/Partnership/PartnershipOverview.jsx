import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function PartnershipOverview() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Partnership at Zryoss
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss partnerships are designed for professionals who want to
            build real businesses — not passive income schemes, franchises,
            or referral networks.
          </p>
        </FadeUp>

        {/* WHO SHOULD JOIN */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                Who Should Join
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• Sales professionals & consultants</li>
                <li>• Agency owners & freelancers</li>
                <li>• Founders looking to scale without operations</li>
                <li>• People who want to build a long-term business</li>
              </ul>
            </div>
          </FadeUp>

          {/* WHO SHOULD NOT JOIN */}
          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-red-400">
                Who Should NOT Join
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• People looking for passive income</li>
                <li>• Anyone expecting recruitment-based earnings</li>
                <li>• Investors seeking guaranteed returns</li>
                <li>• People unwilling to sell or manage clients</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* HOW PARTNERSHIP WORKS */}
        <FadeUp delay={0.35}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              How Partnership Actually Works
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Partners operate under their own brand and focus on sales,
              business development, and client relationships. Zryoss
              centrally manages demos, delivery, vendors, quality control,
              and operational systems.
            </p>

            <p className="mt-4 max-w-4xl text-[var(--text-secondary)]">
              Earnings are directly linked to successful business closures
              and service delivery — not recruitment, referrals, or network
              building.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button primary>Apply as Partner</Button>
              <Button outline>Talk to Zryoss Team</Button>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
