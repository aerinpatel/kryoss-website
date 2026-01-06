import FadeUp from "../../animations/FadeUp";

const steps = [
  {
    step: "01",
    title: "Discovery & Understanding",
    desc: "We understand your business goals, constraints, and expectations.",
  },
  {
    step: "02",
    title: "Planning & Strategy",
    desc: "We design a structured plan aligned with your objectives.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Our team executes with ownership, timelines, and accountability.",
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    desc: "Continuous tracking, improvements, and performance optimization.",
  },
];

export default function Process() {
  return (
    <div className="mb-20">
      <FadeUp>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our <span className="text-orange-500">Process</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition"
            >
              <div className="text-orange-500 font-bold text-2xl mb-4">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
