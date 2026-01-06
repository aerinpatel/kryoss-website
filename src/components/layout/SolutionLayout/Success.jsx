import { TrendingUp, Award, Globe } from "lucide-react";
import FadeUp from "../../animations/FadeUp";

const icons = [TrendingUp, Award, Globe];

export default function Success({ success }) {
  return (
    <div className="mt-20">
      
      <FadeUp>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Success <span className="text-orange-500">Stories</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="grid md:grid-cols-3 gap-8">
          {success.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition"
              >
                <div className="text-orange-500 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </FadeUp>

    </div>
  );
}
