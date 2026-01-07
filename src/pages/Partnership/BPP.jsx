import { ShieldCheck, Workflow, Users, Layers, ArrowRight } from "lucide-react";

export default function BPPContent() {
  return (
    <div className="bg-[#0F172A] text-white">

      {/* =====================================================
          WHY BPP EXISTS
      ====================================================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Why BPP Exists
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Organizations increasingly rely on external partners to execute
              critical work, yet most partner ecosystems lack governance,
              accountability, and delivery consistency.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-400">
              <li>• Fragmented vendor relationships</li>
              <li>• Unclear ownership and escalation paths</li>
              <li>• Inconsistent execution quality</li>
              <li>• Elevated compliance and delivery risk</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-300 text-sm leading-relaxed">
              The Business Process Platform (BPP) was created to replace informal,
              unstructured partner models with a governed execution framework
              designed for scale, control, and predictability.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT BPP IS
      ====================================================== */}
      <section className="py-28 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-14">
            What BPP Actually Is
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "Governance Framework",
                desc: "A standardized set of policies, controls, and accountability mechanisms governing partner execution.",
              },
              {
                icon: Workflow,
                title: "Execution Operating Layer",
                desc: "Defined workflows that manage engagements from onboarding through delivery, review, and continuity.",
              },
              {
                icon: Layers,
                title: "Partner Enablement System",
                desc: "Tools, documentation, and oversight that allow partners to operate within Kryoss execution standards.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <Icon className="w-6 h-6 text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW BPP WORKS
      ====================================================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-14">
            How the BPP Works
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-sm">
            {[
              "Partner Verification",
              "Capability Mapping",
              "Governed Assignment",
              "SLA-Based Execution",
              "Review & Continuity",
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="text-orange-400 font-semibold mb-2">
                  {i + 1}
                </div>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO IT’S FOR / NOT FOR
      ====================================================== */}
      <section className="py-28 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-orange-400">
              Who BPP Is For
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Execution-focused service firms</li>
              <li>• Governance-aligned professionals</li>
              <li>• Long-term delivery partners</li>
              <li>• Compliance-conscious operators</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-400">
              Who BPP Is Not For
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>• Freelance marketplaces</li>
              <li>• Commission-based selling</li>
              <li>• Short-term gig work</li>
              <li>• Unstructured vendor relationships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT PARTNERS GET
      ====================================================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-14">
            What Partners Get
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Structured engagement workflows",
              "Clear scopes and accountability",
              "Centralized governance support",
              "Operational visibility and coordination",
              "Long-term partnership continuity",
              "Alignment with enterprise clients",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY KRYOSS IS DIFFERENT
      ====================================================== */}
      <section className="py-28 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">
            Why Kryoss Is Different
          </h2>

          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
            Kryoss does not operate as a marketplace or broker.
            We act as a governed execution platform — owning delivery
            standards, accountability, and long-term operational outcomes.
          </p>
        </div>
      </section>

      {/* =====================================================
          HOW TO START
      ====================================================== */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 rounded-3xl border border-orange-500/30 bg-white/5 p-14">
          <h2 className="text-4xl font-bold mb-6">
            How to Get Started
          </h2>

          <p className="text-gray-300 mb-10">
            Participation in the Business Process Platform is selective
            and subject to governance review.
          </p>

          <button className="inline-flex items-center gap-2 px-10 py-4 bg-orange-500 text-black font-semibold rounded-xl">
            Submit Application <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
