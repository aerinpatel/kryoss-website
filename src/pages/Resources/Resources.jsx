import FadeUp from "../../components/animations/FadeUp";

export default function Resources() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Resources
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-secondary)] text-lg">
            Access insights, documentation, and guidance to better understand
            Zryoss, its ecosystem, and how to engage effectively.
          </p>
        </FadeUp>

        {/* RESOURCE CARDS */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Blog",
              desc: "Insights, updates, and industry perspectives from Zryoss.",
              path: "/resources/blog",
            },
            {
              title: "FAQs",
              desc: "Common questions answered clearly and transparently.",
              path: "/resources/faqs",
            },
            {
              title: "Knowledge Center",
              desc: "Detailed explanations of platform concepts and operations.",
              path: "/resources/knowledge-center",
            },
            {
              title: "Partner Guidelines",
              desc: "Operational and behavioral guidelines for partners.",
              path: "/resources/partner-guidelines",
            },
            {
              title: "Case-Style Examples",
              desc: "Illustrative scenarios demonstrating platform usage.",
              path: "/resources/examples",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <a
                href={item.path}
                className="block border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] hover:border-[var(--accent)] transition"
              >
                <h3 className="text-xl font-semibold text-[var(--accent)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] text-sm">
                  {item.desc}
                </p>
              </a>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
