import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function BPP() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Business Promotion Partner (BPP)
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            A Business Promotion Partner (BPP) is a sales-focused partner who
            promotes Zryoss services and earns only on successful business
            closures — without any recruitment or hierarchy-based income.
          </p>
        </FadeUp>

        {/* WHAT IS BPP */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-orange-400">
                What a BPP Does
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-muted)]">
                <li>• Identifies potential clients</li>
                <li>• Promotes Zryoss services</li>
                <li>• Shares qualified leads</li>
                <li>• Supports deal closure when required</li>
                <li>• Works independently or under an IPP</li>
              </ul>
            </div>
          </FadeUp>

          {/* WHAT BPP DOES NOT DO */}
          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-red-400">
                What a BPP Does NOT Do
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-muted)]">
                <li>• Does not manage service delivery</li>
                <li>• Does not handle vendors</li>
                <li>• Does not build downlines</li>
                <li>• Does not earn from team recruitment</li>
                <li>• Does not receive passive income</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* EARNING LOGIC */}
        <FadeUp delay={0.35}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)]">
            <h3 className="text-3xl font-semibold text-orange-400">
              How BPP Earnings Work
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-muted)]">
              BPP earnings are generated only when a referred or supported
              business deal is successfully closed and services are delivered.
              Earnings are directly linked to real sales contribution.
            </p>

            <p className="mt-4 max-w-4xl text-[var(--text-muted)]">
              There are no earnings from referrals alone, no recruitment-based
              incentives, and no income without actual business outcomes.
            </p>
          </div>
        </FadeUp>

        {/* ANTI MLM BLOCK */}
        <FadeUp delay={0.5}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-orange-500/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Important Clarification
            </h3>

            <ul className="mt-6 space-y-3 text-[var(--text-muted)] max-w-4xl">
              <li>• BPP is not a network marketing role</li>
              <li>• No earnings from recruiting others</li>
              <li>• No hierarchical or downline structure</li>
              <li>• No fixed or guaranteed income</li>
              <li>• Earnings depend solely on sales contribution</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button primary>Apply as BPP</Button>
              <Button outline>Talk to Zryoss Team</Button>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
