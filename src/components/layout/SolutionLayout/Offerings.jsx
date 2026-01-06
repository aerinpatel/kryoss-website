import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeUp from "../../animations/FadeUp";

export default function Offerings({ offerings }) {
  return (
    <div className="mb-20">
      
      {/* Section Heading */}
      <FadeUp>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our <span className="text-orange-500">Solutions</span>
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-orange-500 transition overflow-hidden"
          >
            <div className="relative h-40">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute top-4 left-4 bg-orange-500/20 border border-orange-500/30 rounded-lg p-2">
                <div className="text-orange-400">{item.icon}</div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.desc}</p>
              <div className="flex items-center text-orange-500 text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
