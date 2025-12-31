import FadeUp from "../../components/animations/FadeUp";

const posts = [
  {
    title: "What Is a Business Operating Platform?",
    excerpt:
      "Understanding how modern platforms help businesses scale without operational overhead.",
    date: "Jan 2025",
  },
  {
    title: "Why Traditional Business Models Struggle to Scale",
    excerpt:
      "Operational complexity, vendor risk, and execution challenges explained.",
    date: "Feb 2025",
  },
  {
    title: "Sales vs Delivery: Why Separation Matters",
    excerpt:
      "How separating sales and execution improves quality and growth.",
    date: "Mar 2025",
  },
  {
    title: "Asset-Light Business Models Explained",
    excerpt:
      "Why vendor-driven delivery enables scalability and risk control.",
    date: "Apr 2025",
  },
];

export default function Blog() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Blog & Insights
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            Insights, explanations, and updates around business platforms,
            operations, and scalable execution models.
          </p>
        </FadeUp>

        {/* BLOG LIST */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <article className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] hover:border-orange-500 transition">
                <p className="text-xs text-[var(--text-muted)]">
                  {post.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-orange-400">
                  {post.title}
                </h3>
                <p className="mt-4 text-[var(--text-muted)] text-sm">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-sm text-orange-400">
                  Read more →
                </p>
              </article>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
