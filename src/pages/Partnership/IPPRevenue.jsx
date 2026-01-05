import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function IPPRevenue() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            IPP Revenue Logic
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            This page explains how Independent Profit Partners generate revenue
            through real business activity, without any recruitment-based or
            passive earning structures.
          </p>
        </FadeUp>

        {/* REVENUE SOURCE */}
        <FadeUp delay={0.25}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
            <h3 className="text-2xl font-semibold text-[var(--accent)]">
              Where IPP Revenue Comes From
            </h3>

            <p className="mt-6 text-[var(--text-secondary)] max-w-4xl">
              IPP revenue is generated when an IPP successfully closes a
              business deal with a client and the agreed services are delivered
              through Zryoss-managed brands and vendors.
            </p>

            <p className="mt-4 text-[var(--text-secondary)] max-w-4xl">
              Revenue is tied to actual service execution, client satisfaction,
              and completion of business commitments.
            </p>
          </div>
        </FadeUp>

        {/* DEPENDS ON */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-xl font-semibold text-[var(--accent)]">
                Revenue Depends On
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• Quality of client acquisition</li>
                <li>• Successful deal closures</li>
                <li>• Scope of services delivered</li>
                <li>• Long-term client retention</li>
                <li>• Compliance with Zryoss processes</li>
              </ul>
            </div>
          </FadeUp>

          {/* DOES NOT DEPEND ON */}
          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-xl font-semibold text-red-400">
                Revenue Does NOT Depend On
              </h3>
              <ul className="mt-6 space-y-3 text-[var(--text-secondary)]">
                <li>• Recruitment of partners or team members</li>
                <li>• Referral chains or downlines</li>
                <li>• Fixed or guaranteed payouts</li>
                <li>• Passive participation</li>
                <li>• Investment or capital contribution</li>
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* LEGAL CLARITY */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Important Clarification
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Zryoss does not offer any form of assured income, returns,
              commissions on recruitment, or investment-linked earnings.
              All revenue is performance-based and tied strictly to real
              business outcomes.
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
