import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function IPPvsBPP() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            IPP vs BPP — Which Partnership Is Right for You?
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Zryoss offers two partnership models designed for different
            professional goals. This comparison helps you choose the
            right path based on responsibility and involvement.
          </p>
        </FadeUp>

        {/* COMPARISON TABLE */}
        <FadeUp delay={0.25}>
          <div className="mt-24 overflow-x-auto">
            <table className="w-full border border-[var(--border)] rounded-xl overflow-hidden">
              <thead className="bg-[var(--bg-card)]">
                <tr>
                  <th className="p-4 text-left">Criteria</th>
                  <th className="p-4 text-left text-[var(--accent)]">
                    IPP (Independent Profit Partner)
                  </th>
                  <th className="p-4 text-left text-[var(--accent)]">
                    BPP (Business Promotion Partner)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--border)]">
                {[
                  [
                    "Primary Role",
                    "Business owner & sales leader",
                    "Sales & promotion focused",
                  ],
                  [
                    "Brand Ownership",
                    "Operates under own brand",
                    "No independent brand ownership",
                  ],
                  [
                    "Client Management",
                    "Owns and manages clients",
                    "Supports client acquisition",
                  ],
                  [
                    "Sales Team",
                    "Can build & manage a sales team",
                    "Works independently or under IPP",
                  ],
                  [
                    "Operational Responsibility",
                    "Handled by Zryoss",
                    "Handled by Zryoss",
                  ],
                  [
                    "Revenue Basis",
                    "Based on closed business & delivery",
                    "Based on sales contribution only",
                  ],
                  [
                    "Recruitment Income",
                    "Not applicable",
                    "Not applicable",
                  ],
                  [
                    "Passive Income",
                    "Not applicable",
                    "Not applicable",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="bg-[var(--bg-main)]">
                    <td className="p-4 text-[var(--text-secondary)]">
                      {row[0]}
                    </td>
                    <td className="p-4 text-[var(--text-secondary)]">
                      {row[1]}
                    </td>
                    <td className="p-4 text-[var(--text-secondary)]">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        {/* DECISION GUIDANCE */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              How to Decide
            </h3>

            <p className="mt-6 max-w-4xl text-[var(--text-secondary)]">
              Choose IPP if you want to build and scale a full business with
              long-term responsibility and leadership. Choose BPP if you
              prefer a focused sales role without operational ownership.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button primary>Apply as IPP</Button>
              <Button outline>Apply as BPP</Button>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
