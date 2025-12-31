import FadeUp from "../../components/animations/FadeUp";

const systems = [
  "CRM & Lead Management",
  "Central Demo Team",
  "Vendor & Delivery Network",
  "Quality Assurance",
  "Risk & Compliance Control",
];

export default function Platform() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            What is Zryoss?
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-gray-400 text-lg">
            Zryoss is a business operating platform that enables individuals and
            teams to run real businesses under their own brand while Zryoss
            manages operations, demos, delivery, and vendor coordination.
          </p>
        </FadeUp>

        {/* Why Businesses Fail */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-neutral-800 rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold">
                Why Traditional Businesses Fail
              </h3>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li>• High operational overhead</li>
                <li>• No centralized systems</li>
                <li>• Poor delivery consistency</li>
                <li>• Vendor management complexity</li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="border border-neutral-800 rounded-xl p-8 bg-[var(--bg-card)]">
              <h3 className="text-2xl font-semibold text-orange-400">
                How Zryoss Solves This
              </h3>
              <ul className="mt-6 space-y-3 text-gray-400">
                {systems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Core Message */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-neutral-800 rounded-xl p-8 bg-gradient-to-r from-orange-500/10 to-transparent">
            <p className="text-lg text-gray-300 max-w-4xl">
              Zryoss removes the operational burden so partners can focus on
              sales, growth, and client relationships — without dealing with
              delivery chaos or vendor risk.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
