import FadeUp from "../../animations/FadeUp";

export default function Highlight({
  badge,
  title,
  highlightText,
  description,
  image,
  primaryCTA,
  secondaryCTA,
}) {
  return (
    <div className="mb-20">
      <div className="relative rounded-2xl overflow-hidden border border-gray-800">
        <div
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl p-10">

            {badge && (
              <FadeUp>
                <div className="inline-flex px-4 py-2 mb-4 bg-orange-500/20 border border-orange-500/30 rounded-full">
                  <span className="text-orange-400 text-sm">{badge}</span>
                </div>
              </FadeUp>
            )}

            <FadeUp delay={0.05}>
              <h2 className="text-4xl font-bold text-white mb-4">
                {title}
                {highlightText && (
                  <span className="text-orange-500"> {highlightText}</span>
                )}
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-gray-300 mb-6 text-lg">
                {description}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="flex gap-4">
                {primaryCTA && (
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
                    {primaryCTA}
                  </button>
                )}
                {secondaryCTA && (
                  <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10">
                    {secondaryCTA}
                  </button>
                )}
              </div>
            </FadeUp>

          </div>
        </div>
      </div>
    </div>
  );
}
