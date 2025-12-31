import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function IPP() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Independent Profit Partner (IPP)
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            An IPP is an independent business operator who runs their own
            brand and sales operations while leveraging Zryoss’s centralized
            delivery, demo, and operational infrastructure.
          </p>
        </FadeUp>

        {/* WHAT IS IPP */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-orange-400">
                What an IPP Does
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-muted)]">
                <li>• Builds and promotes their own business brand</li>
                <li>• Acquires and manages clients</li>
                <li>• Leads sales strategy and growth</li>
                <li>• Can build and manage a sales team</li>
                <li>• Owns client relationships</li>
              </ul>
            </div>
          </FadeUp>

          {/* ZRYOSS ROLE */}
          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-orange-400">
                What Zryoss Handles
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-muted)]">
                <li>• Product demos & pre-sales support</li>
                <li>• Service delivery & vendor coordination</li>
                <li>• Quality assurance & SLAs</li>
                <li>• Operations & reporting systems</li>
                <li>• Risk and compliance management</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* WHAT IPP IS NOT */}
        <FadeUp delay={0.35}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-orange-500/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              What IPP Is NOT
            </h3>

            <ul className="mt-6 space-y-3 text-[var(--text-muted)] max-w-4xl">
              <li>• Not a franchise</li>
              <li>• Not an MLM or network program</li>
              <li>• Not a passive income model</li>
              <li>• Not recruitment-based earnings</li>
              <li>• Not an investment scheme</li>
            </ul>

            <p className="mt-6 text-sm text-[var(--text-muted)] max-w-4xl">
              IPP earnings are directly linked to real business sales and
              successful service delivery — not referrals or team recruitment.
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
