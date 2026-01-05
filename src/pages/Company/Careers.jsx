import { motion } from "framer-motion"; // ✅ REQUIRED
import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function Careers() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Careers at <span className="text-orange-500">Zryoss</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-gray-400 text-lg">
            Join a purpose-driven organization focused on building sustainable
            systems, scalable operations, and meaningful professional growth.
          </p>
        </FadeUp>

        {/* ================= WHY WORK WITH US ================= */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <FadeUp>
              <h2 className="text-3xl font-semibold text-orange-400 mb-6">
                Why Work With Us?
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-gray-300 mb-5">
                At Zryoss, we believe meaningful work comes from clarity,
                accountability, and impact. We build systems that help people
                perform at their best — without chaos or confusion.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-gray-300 mb-5">
                Our culture values ownership, learning, and long-term thinking.
                We invest in people who want to grow with responsibility and
                contribute to building something sustainable.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-gray-300">
                If you enjoy solving real problems, working with structure, and
                creating impact beyond short-term results — you’ll feel at home
                here.
              </p>
            </FadeUp>
          </div>

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team collaboration"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* ================= WHAT WE VALUE ================= */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Ownership Mindset",
              desc: "We empower individuals to take responsibility, think proactively, and act with accountability. Ownership at Zryoss means treating every task as a mission that contributes to long-term success.",
            },
            {
              icon: "📈",
              title: "Structured Growth",
              desc: "Our systems are built for clarity, scalability, and consistency. Every process is designed to support measurable progress without unnecessary complexity.",
            },
            {
              icon: "🧭",
              title: "Long-Term Thinking",
              desc: "We prioritize sustainable growth over short-term wins, ensuring stability, resilience, and value creation for all stakeholders.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="h-full group border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] flex flex-col">
                {/* Icon */}
                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-orange-400 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ================= OPEN ROLES ================= */}
        <FadeUp delay={0.3}>
          <div className="mt-32 border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)]">
            <h3 className="text-3xl font-semibold text-orange-400">
              Current Openings
            </h3>

            <p className="mt-4 text-[var(--text-muted)]">
              We hire selectively based on long-term needs and growth potential.
              Roles may include:
            </p>

            <ul className="mt-6 space-y-2 text-[var(--text-muted)]">
              <li>• Operations & Business Coordination</li>
              <li>• Platform Support & System Management</li>
              <li>• Sales Enablement & Pre-Sales</li>
              <li>• Quality, Compliance & Process Management</li>
            </ul>
          </div>
        </FadeUp>

        {/* ================= CTA ================= */}
        <FadeUp delay={0.4}>
  <div className="mt-28 flex justify-center">
    <div className="w-full max-w-4xl border border-orange-500/30 rounded-xl bg-white/5 backdrop-blur-md px-10 py-12 text-center">

      {/* Heading */}
      <h3 className="text-3xl font-semibold text-white mb-4">
        Ready to Build Something Meaningful?
      </h3>

      {/* Description */}
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
        If you’re passionate about structured growth, long-term impact, and
        working within a purpose-driven organization, we’d love to hear from
        you. Join us in building systems that create real value.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button primary className="px-10 py-3 text-base">
          Apply to Join Zryoss
        </Button>
      </div>

    </div>
  </div>
</FadeUp>


      </div>
    </section>
  );
}
