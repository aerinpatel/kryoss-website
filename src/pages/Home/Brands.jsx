import { motion } from "framer-motion";

const brands = [
  {
    name: "CLink HR",
    logo: "/media/media/image/clink.png",
    desc: "HR & Talent Solutions",
  },
  {
    name: "Kryoss Softech",
    logo: "/media/media/image/kryoss.png",
    desc: "Technology & Software",
  },
  {
    name: "Adryoss",
    logo: "/media/media/image/adryoss.png",
    desc: "Marketing & Growth",
  },
  {
    name: "Future Verticals",
    logo: "/media/media/image/future.png",
    desc: "Emerging Innovations",
  },
];

export default function Brands() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-orange-500/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Brands Under <span className="text-orange-500">Zryoss</span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Powering innovation through trusted brands and scalable solutions.
        </p>

        {/* Carousel */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="relative group min-w-[240px] bg-white/5 border border-orange-500/30 rounded-xl p-6 backdrop-blur-xl hover:scale-105 transition"
              >
                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 mx-auto mb-4 object-contain"
                />

                {/* Name */}
                <p className="text-white font-semibold">{brand.name}</p>

                {/* Tooltip */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition text-xs text-gray-300">
                  {brand.desc}
                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-orange-500/10 blur-xl transition" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>  
    </section>
  );
}
