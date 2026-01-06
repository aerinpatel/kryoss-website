import FadeUp from "../../animations/FadeUp";

export default function Hero({ tag, title, subtitle, description, image }) {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {/* Content */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center w-full">
          
          {tag && (
            <FadeUp>
              <div className="inline-flex px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/30 rounded-full">
                <span className="text-orange-400 text-sm font-medium">
                  {tag}
                </span>
              </div>
            </FadeUp>
          )}

          <FadeUp delay={0.05}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              {subtitle}
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </FadeUp>

        </div>
      </div>
    </div>
  );
}
