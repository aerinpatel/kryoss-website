import FadeUp from "../../components/animations/FadeUp";

const items = [
  "Not MLM",
  "Not Franchise",
  "Not Referral Income",
  "Not Investment Scheme",
];

export default function WhatIsNot() {
  return (
    <section className="relative py-28 bg-[#0f172a] overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
            What <span className="text-orange-500">Zryoss</span> Is{" "}
            <span className="text-orange-500">NOT</span>
          </h2>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div
                className="
                  group relative
                  rounded-2xl
                  border border-orange-500/30
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                  text-orange-300
                  font-semibold
                  transition-all duration-300
                  hover:scale-110
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
                "
              >
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-orange-500/10 blur-xl"></div>

                <span className="relative z-10">{item}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
