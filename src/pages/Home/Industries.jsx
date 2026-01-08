import React from "react";

const industries = [
  {
    title: "Healthcare & Fitness",
    icon: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
  },
  {
    title: "Manufacturing & Automobile Industry",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
  },
  {
    title: "E-commerce & Retail",
    icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", // colorful icon (FIXED)
  },
  {
    title: "Education and E-Learning",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  },
  {
    title: "Banking & Finance",
    icon: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
  },
  {
    title: "News & Publication",
    icon: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
  },
  {
    title: "Supplychain & Logistics",
    icon: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
  },
  {
    title: "Food & Beverages",
    icon: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
];

export default function Industries() {
  return (
    <section className="relative bg-[#080808] py-28">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Industries <span className="text-orange-400">We Serve</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden rounded-3xl p-10
                bg-white/[0.05]
                border border-white/20
                backdrop-blur-md
                min-h-[220px]
                flex flex-col justify-between
              "
            >
              {/* ORANGE HOVER SHEET */}
              <div
                className="
                  absolute inset-0
                  bg-orange-500/90
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  z-0
                "
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON (COLORFUL – SAME ICON) */}
                <div className="mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-light text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
