import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";
import SplitSection from "../../components/layout/SplitSection";

export default function Careers() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-32">
        {/* ================= HEADER ================= */}
        <div className="max-w-4xl">
          <FadeUp>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Careers at <span className="text-orange-500">Zryoss</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Join a purpose-driven organization focused on building sustainable
              systems, scalable operations, and meaningful professional growth.
            </p>
          </FadeUp>
        </div>

        {/* ================= WHY WORK WITH US ================= */}
        <SplitSection
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team collaboration"
        >
          <h2 className="text-3xl font-semibold text-orange-400">
            Why Work With Us?
          </h2>

          <p className="text-gray-300 leading-relaxed">
            At Zryoss, meaningful work comes from clarity, accountability, and
            impact. We design systems that help people perform at their best —
            without chaos or confusion.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our culture values ownership, learning, and long-term thinking. We
            invest in people who want to grow with responsibility and purpose.
          </p>

          <p className="text-gray-300 leading-relaxed">
            If you enjoy solving real problems and building systems that last,
            you’ll feel at home here.
          </p>
        </SplitSection>

        {/* ================= VALUES ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Ownership Mindset",
              desc: "Take responsibility, think proactively, and act with accountability.",
            },
            {
              icon: "📈",
              title: "Structured Growth",
              desc: "Clear systems built for scalability, consistency, and clarity.",
            },
            {
              icon: "🧭",
              title: "Long-Term Thinking",
              desc: "We prioritize sustainable progress over short-term wins.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="h-full border border-white/10 rounded-xl p-8 bg-white/5 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ================= TEAM / CULTURE ================= */}
        <SplitSection
          reverse
          image="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="Work culture"
        >
          <h2 className="text-3xl font-semibold text-orange-400">
            How We Work
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Zryoss operates with discipline, structure, and transparency. Every
            role is clearly defined, and every contribution matters.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We avoid chaos-driven environments and instead focus on execution,
            accountability, and measurable impact.
          </p>
        </SplitSection>

        {/* ================= OPEN ROLES ================= */}
        <FadeUp>
          <div className="border border-white/10 rounded-xl p-10 bg-white/5 max-w-4xl">
            <h3 className="text-3xl font-semibold text-orange-400">
              Current Openings
            </h3>

            <p className="mt-4 text-gray-400">
              We hire selectively based on long-term needs. Roles may include:
            </p>

            <ul className="mt-6 space-y-2 text-gray-400">
              <li>• Operations & Business Coordination</li>
              <li>• Platform Support & System Management</li>
              <li>• Sales Enablement & Pre-Sales</li>
              <li>• Quality, Compliance & Process Management</li>
            </ul>
          </div>
        </FadeUp>

        {/* ================= CTA ================= */}
        <FadeUp>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl border border-orange-500/30 rounded-xl bg-white/5 backdrop-blur-md px-10 py-12 text-center">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Ready to Build Something Meaningful?
              </h3>

              <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                If structured growth, responsibility, and long-term impact
                excite you — we’d love to hear from you.
              </p>

              <Button primary className="px-10 py-3 text-base">
                Apply to Join Zryoss
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
