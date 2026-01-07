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

          <h3
            className="mt-6 text-xl font-semibold text-white
                       group-hover:text-orange-400 transition"
          >
            {item.title}
          </h3>

          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Footer credibility line */}
    <p className="mt-16 text-xs text-gray-500 max-w-2xl">
      This workflow is applied consistently across technology, legal, and
      infrastructure engagements to ensure execution clarity and governance.
    </p>
  </div>
</section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 rounded-3xl
                        border border-orange-500/30 bg-white/5 p-14">
          <h2 className="text-4xl font-bold mb-6">
            Build with clarity. <br />
            <span className="text-orange-500">Scale with confidence.</span>
          </h2>

          <p className="text-gray-300 mb-10">
            Talk to Kryoss about structured execution for your business.
          </p>

          <button className="inline-flex items-center gap-2 px-10 py-4
                             bg-orange-500 text-black font-semibold
                             rounded-xl hover:bg-orange-600 transition">
            Talk to Kryoss <ArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
}
