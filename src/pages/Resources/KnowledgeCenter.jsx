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
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Knowledge Center
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            In-depth explanations of Zryoss concepts, terminology, and
            operational models to support informed engagement.
          </p>
        </FadeUp>

        {/* TOPICS */}
        <div className="mt-20 space-y-8">
          {topics.map((topic, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
                <h3 className="text-xl font-semibold text-[var(--accent)]">
                  {topic.title}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] text-sm">
                  {topic.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
