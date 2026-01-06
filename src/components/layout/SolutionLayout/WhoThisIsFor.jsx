import FadeUp from "../../animations/FadeUp";

export default function WhoThisIsFor({ items }) {
  return (
    <FadeUp>
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Who This Is <span className="text-orange-500">For</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Our digital marketing solutions are designed for teams that need
          clarity, execution, and measurable business outcomes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/60 transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
