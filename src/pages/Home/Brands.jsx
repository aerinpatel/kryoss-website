import FadeUp from "../../components/animations/FadeUp";

const brands = [
  "CLink HR",
  "Kryoss Softech",
  "Adryoss",
  "Future Verticals",
];

export default function Brands() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="text-4xl font-bold">
            Brands Under Zryoss
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {brands.map((brand, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="border border-gray-800 rounded-xl py-8 bg-[#111827]">
                <p className="font-medium">{brand}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
