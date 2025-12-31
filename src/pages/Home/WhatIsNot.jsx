import FadeUp from "../../components/animations/FadeUp";

const items = [
  "Not MLM",
  "Not Franchise",
  "Not Referral Income",
  "Not Investment Scheme",
];

export default function WhatIsNot() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="text-4xl font-bold">What Zryoss Is NOT</h2>
        </FadeUp>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="border border-red-500/30 rounded-xl py-6 text-red-400">
                {item}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
