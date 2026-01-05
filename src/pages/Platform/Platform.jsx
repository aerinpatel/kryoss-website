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
    <section className="relative py-32 bg-[#0B0F1A] overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/20 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <FadeUp>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
            What is <span className="text-orange-500">Zryoss?</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-gray-400 text-lg">
            Zryoss is a business operating platform that enables individuals and
            teams to build scalable businesses while we handle operations,
            demos, delivery, and vendor coordination.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="mt-24 grid md:grid-cols-2 gap-10 auto-rows-fr">

          {/* LEFT CARD */}
          <FadeUp>
            <div className="h-full flex flex-col justify-between bg-white/5 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Why Traditional Businesses Fail
                </h3>

                <ul className="mt-6 space-y-3 text-gray-400">
                  <li>• High operational overhead</li>
                  <li>• No centralized systems</li>
                  <li>• Poor delivery consistency</li>
                  <li>• Vendor management complexity</li>
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT CARD */}
          <FadeUp delay={0.2}>
            <div className="h-full flex flex-col justify-between bg-white/5 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all">
              <div>
                <h3 className="text-2xl font-semibold text-orange-400">
                  How Zryoss Solves This
                </h3>

                <ul className="mt-6 space-y-3 text-gray-400">
                  {systems.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Footer Box */}
        <FadeUp delay={0.4}>
          <div className="mt-24 bg-white/5 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-xl">
            <p className="text-lg text-gray-300 max-w-4xl">
              Zryoss removes the operational burden so partners can focus on
              growth, sales, and client relationships — without dealing with
              delivery chaos or vendor risk.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
