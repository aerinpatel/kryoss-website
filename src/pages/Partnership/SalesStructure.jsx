import FadeUp from "../../components/animations/FadeUp";

export default function SalesStructure() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Sales Team Structure
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss follows a simple, transparent sales structure designed to
            support business growth — without any multi-level or recruitment-
            based earning systems.
          </p>
        </FadeUp>

        {/* STRUCTURE VISUAL */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">

          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] text-center">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                IPP
              </h3>
              <p className="mt-4 text-[var(--text-secondary)]">
                Independent Profit Partner
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Owns sales strategy, clients, and growth
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] text-center">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                Sales Executives
              </h3>
              <p className="mt-4 text-[var(--text-secondary)]">
                Internal or hired by IPP
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Focus on lead generation & deal closure
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] text-center">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                BPP
              </h3>
              <p className="mt-4 text-[var(--text-secondary)]">
                Business Promotion Partner
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Independent sales contributors
              </p>
            </div>
          </FadeUp>

        </div>

        {/* EARNING CLARITY */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)]">
            <h3 className="text-3xl font-semibold text-[var(--accent)]">
              Earnings & Performance Logic
            </h3>

            <ul className="mt-6 space-y-3 text-[var(--text-secondary)] max-w-4xl">
              <li>• Earnings are linked only to direct sales contribution</li>
              <li>• No earnings from team size or recruitment</li>
              <li>• No cascading or multi-level payouts</li>
              <li>• Performance is evaluated individually</li>
            </ul>
          </div>
        </FadeUp>

        {/* NOT MLM DISCLAIMER */}
        <FadeUp delay={0.55}>
          <div className="mt-24 border border-red-500/30 rounded-xl p-10 bg-gradient-to-r from-red-500/10 to-transparent">
            <h3 className="text-3xl font-semibold text-red-400">
              This Is NOT an MLM Structure
            </h3>

            <ul className="mt-6 space-y-3 text-[var(--text-secondary)] max-w-4xl">
              <li>• No downline income</li>
              <li>• No recruitment incentives</li>
              <li>• No hierarchical earnings</li>
              <li>• No rewards for team expansion</li>
              <li>• Earnings stop if sales stop</li>
            </ul>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
