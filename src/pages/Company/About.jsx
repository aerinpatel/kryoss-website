import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Target,
  Award,
  ArrowUpRight,
} from "lucide-react";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-40 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.18),transparent_65%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              We Build <span className="text-orange-500">Structured</span>
              <br />
              Digital Businesses
            </h1>

            <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg">
              Zryoss is a multi-vertical business ecosystem helping companies
              operate, scale, and grow with discipline, clarity, and systems —
              not shortcuts.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Professional collaboration"
              className="rounded-3xl object-cover"
            />
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Who We Are
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Zryoss is not an agency, not a marketplace, and not a shortcut-driven
              platform. We are a structured execution ecosystem built to support
              long-term business growth.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our focus is on building strong foundations — technology, people,
              operations, and governance — that scale as businesses grow.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
              What We Do
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Target className="text-orange-500" />,
                title: "Business Systems",
                desc:
                  "Design and implementation of scalable technology and operational systems.",
              },
              {
                icon: <Users className="text-orange-500" />,
                title: "People & Execution",
                desc:
                  "Structured hiring, onboarding, and workforce execution models.",
              },
              {
                icon: <Award className="text-orange-500" />,
                title: "Governance & Growth",
                desc:
                  "Compliance, accountability, and sustainable long-term growth planning.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-black border border-white/10">
                  {item.icon}
                  <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
              Leadership & Core Team
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { name: "Amit Verma", role: "Founder & Strategy" },
              { name: "Rohit Sharma", role: "Technology Lead" },
              { name: "Neha Kapoor", role: "HR & Operations" },
              { name: "Arjun Mehta", role: "Growth & Marketing" },
            ].map((member, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt={member.name}
                    className="w-40 h-40 mx-auto rounded-2xl object-cover mb-6"
                  />
                  <h4 className="text-lg font-medium">{member.name}</h4>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
              Our Culture & Values
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Transparency over hype",
              "Systems over shortcuts",
              "Execution over promises",
              "Long-term thinking",
            ].map((text, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-500 mt-1" />
                  <p className="text-gray-300">{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Let’s Build Something That Lasts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              If you’re serious about building a scalable, ethical, and
              execution-driven business, Zryoss is built for you.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
            >
              Talk to Our Team
              <ArrowUpRight size={18} />
            </a>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
