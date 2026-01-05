import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className="relative min-h-screen bg-[#0A0F1E] overflow-hidden">

      {/* Floating Glow */}
      <motion.div
        style={{ y }}
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/20 blur-[160px] rounded-full"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Build Your Own Business.
            <br />
            <span className="text-orange-500">
              <Typewriter
                words={[
                  "Let Zryoss Run the Backend.",
                  "Scale Without Hassle.",
                  "Focus on Growth.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-lg max-w-2xl">
            Zryoss empowers partners to focus on sales while we manage demos,
            operations, vendors, and delivery — seamlessly.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/apply"
              className="relative group px-8 py-3 bg-orange-500 text-black font-semibold rounded-xl overflow-hidden"
            >
              <span className="relative z-10">Apply as Partner</span>
              <span className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-white/20 text-white rounded-xl hover:border-orange-500 hover:text-orange-400 transition"
            >
              Talk to Zryoss Team
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-6 text-gray-400 text-sm"
          >
            <span>✔ No MLM</span>
            <span>✔ No Referral Income</span>
            <span>✔ Real Business Model</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
