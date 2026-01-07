import FadeUp from "../../components/animations/FadeUp";

const posts = [
  {
    title: "What Is a Business Operating Platform?",
    excerpt:
      "How modern operating platforms help businesses scale without operational complexity.",
    date: "January 2025",
  },
  {
    title: "Why Traditional Business Models Struggle to Scale",
    excerpt:
      "Execution bottlenecks, vendor risk, and structural inefficiencies explained.",
    date: "February 2025",
  },
  {
    title: "Sales vs Delivery: Why Separation Matters",
    excerpt:
      "Why separating sales and execution improves quality and accountability.",
    date: "March 2025",
  },
  {
    title: "Asset-Light Business Models Explained",
    excerpt:
      "How centralized governance enables scalable, low-risk growth.",
    date: "April 2025",
  },
];

export default function Blog() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="Business insights"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                        w-[700px] h-[700px] bg-orange-500/20 blur-[160px]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <FadeUp>
              <span className="inline-block mb-4 text-sm tracking-widest uppercase 
                               text-orange-400 font-semibold">
                Knowledge & Insights
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Blog & <span className="text-orange-500">Insights</span>
              </h1>

              <p className="mt-6 max-w-2xl text-gray-300 text-lg">
                Thought leadership on business platforms, execution systems,
                and scalable growth models.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="py-32 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <article
                  className="group relative rounded-2xl p-8 
                             bg-white/5 border border-white/10
                             hover:border-orange-500/40
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-[3px]
                                  bg-gradient-to-b from-orange-400 to-orange-600
                                  opacity-0 group-hover:opacity-100 transition" />

                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    {post.date}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white 
                                 group-hover:text-orange-400 transition">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-gray-300 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 
                                  text-orange-400 text-sm font-medium">
                    Read article →
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="relative py-32 bg-[#0F172A] overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] 
                        bg-orange-500/20 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* IMAGE */}
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-2xl" />
                <img
                  src="https://illustrations.popsy.co/blue/online-article.svg"
                  alt="Newsletter"
                  className="relative w-full max-w-md rounded-2xl"
                />
              </div>

              {/* CONTENT */}
              <div>
                <span className="inline-block mb-4 text-sm tracking-widest uppercase 
                                 text-orange-400 font-semibold">
                  Subscribe our newsletter
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Get stories in your inbox{" "}
                  <span className="text-orange-500">twice a month</span>
                </h2>

                <p className="mt-6 max-w-xl text-gray-400 text-lg">
                  Curated insights, platform updates, and execution-focused
                  perspectives from Zryoss.
                </p>

                <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 
                               border border-white/10 text-white
                               placeholder-gray-500 focus:outline-none
                               focus:border-orange-500 transition"
                  />

                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-orange-500 
                               text-white font-semibold
                               hover:bg-orange-600
                               hover:shadow-[0_0_30px_rgba(249,115,22,0.45)]
                               transition"
                  >
                    Subscribe →
                  </button>
                </form>

                <p className="mt-4 text-xs text-gray-500">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}