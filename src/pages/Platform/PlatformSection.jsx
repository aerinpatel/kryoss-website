import FadeUp from "../../components/animations/FadeUp";

export default function PlatformSection({ title, intro, points }) {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h1 className="text-5xl font-bold">{title}</h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            {intro}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <ul className="mt-16 space-y-4 text-gray-300">
            {points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
