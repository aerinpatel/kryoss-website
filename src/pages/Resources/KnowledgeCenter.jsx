import FadeUp from "../../components/animations/FadeUp";

const topics = [
  {
    title: "What Is a Business Operating Platform?",
    desc: "A business operating platform provides centralized systems for sales enablement, delivery coordination, vendor management, and quality control, allowing participants to focus on business growth.",
  },
  {
    title: "Sales Layer vs Delivery Layer",
    desc: "In the Zryoss ecosystem, sales activities are handled by partners, while delivery is executed by brands and vendors under centralized operational control.",
  },
  {
    title: "Asset-Light Business Model",
    desc: "Zryoss leverages a distributed vendor network instead of fixed internal teams, enabling scalability without high operational overhead.",
  },
  {
    title: "Centralized Operations",
    desc: "Operations, demos, reporting, and quality assurance are managed centrally to ensure consistency and accountability.",
  },
  {
    title: "Vendor Governance",
    desc: "Vendors operate within defined frameworks, SLAs, and performance standards governed by Zryoss.",
  },
  {
    title: "Risk & Compliance Framework",
    desc: "Zryoss implements risk management, compliance checks, and escalation processes to protect all stakeholders.",
  },
];

export default function KnowledgeCenter() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Knowledge and systems"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                        w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <span className="inline-block mb-4 text-sm tracking-widest uppercase 
                               text-orange-400 font-semibold">
                Learn the System
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Knowledge <span className="text-orange-500">Center</span>
              </h1>

              <p className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed">
                Clear explanations of Zryoss concepts, operating models,
                governance structures, and execution frameworks — built for
                informed decision-making.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= TOPICS SECTION ================= */}
      <section className="py-32 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6">

          {/* TOPICS GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {topics.map((topic, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  className="group relative rounded-2xl p-8 
                             bg-white/5 border border-white/10
                             hover:border-orange-500/40
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  {/* Accent line */}
                  <div
                    className="absolute left-0 top-0 h-full w-[3px]
                               bg-gradient-to-b from-orange-400 to-orange-600
                               opacity-0 group-hover:opacity-100 transition"
                  />

                  <h3 className="text-xl font-semibold text-white 
                                 group-hover:text-orange-400 transition">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ================= CTA BOX ================= */}
          <FadeUp delay={0.4}>
            <div
              className="mt-32 max-w-4xl mx-auto text-center
                         border border-orange-500/30 rounded-2xl
                         p-12 bg-white/5 backdrop-blur-md
                         shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your <span className="text-orange-500">Journey</span> with Zryoss
              </h3>

              <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Whether you are building from the ground up or scaling an existing
                organization, Zryoss provides the clarity, structure, and
                governance needed for long-term success.
              </p>

              <button
                className="px-14 py-4 bg-orange-500 text-white font-semibold rounded-xl
                           hover:bg-orange-600
                           hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
                           transition-all duration-300"
              >
                Start Your Journey →
              </button>
            </div>
          </FadeUp>

        </div>
      </section>
    </>
  );
}