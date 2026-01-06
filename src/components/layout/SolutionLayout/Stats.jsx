import FadeUp from "../../animations/FadeUp";

export default function Stats({ stats }) {
  return (
    <FadeUp>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map(([value, label], i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-orange-500/50 transition"
          >
            <div className="text-3xl font-bold text-orange-500 mb-2">
              {value}
            </div>
            <div className="text-gray-300">{label}</div>
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
