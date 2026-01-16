import React from "react";
import { ArrowRight } from "lucide-react";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
];

const INPUT =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20";

export default function HeroContact() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,146,60,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.18),transparent_50%)]" />

      {/* ✅ same width + padding as navbar/footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-12 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6 space-y-10">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-orange-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              Contact Us
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Ready To Fuel Your <span className="text-orange-400">Vision</span>{" "}
              With <span className="block mt-3">AI-Powered Innovation?</span>
            </h1>
          </div>

          {/* PRESENCE */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-5">
              Our Presence
            </p>
            <div className="flex items-center gap-4">
              {countries.map((c) => (
                <div
                  key={c.name}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={c.flag}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-4 text-sm text-gray-300 max-w-md leading-relaxed">
            <p>
              Office No. 837-A, 8th Floor <br />
              JMD Megapolis, Sohna Road <br />
              Gurgaon, Haryana, India
            </p>

            <p className="underline underline-offset-4">info@zryoss.com</p>

            <p className="underline underline-offset-4">+91 98765 43210</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-2xl p-8 md:p-10 shadow-2xl">
            {/* Decorative shape */}
            <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-orange-400/40 rounded-xl rotate-45" />

            <p className="text-lg mb-8 max-w-sm text-white/90">
              Partner With Experts Who Leverage AI & Tech To Transform Ideas
              Into Market-Leading Solutions.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" className={INPUT} />
                <input placeholder="Last Name" className={INPUT} />
              </div>

              <input placeholder="Email" className={INPUT} />

              <input placeholder="Phone Number" className={INPUT} />

              <textarea
                rows="4"
                placeholder="Message"
                className={`${INPUT} resize-none`}
              />

              <button
                type="submit"
                className="w-full mt-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 rounded-xl flex items-center justify-between px-6 transition-all"
              >
                Lets Connect
                <span className="rounded-lg p-2 bg-white/10">
                  <ArrowRight size={16} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
