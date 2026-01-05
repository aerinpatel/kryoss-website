import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Partner Onboarding",
    desc: "Partners join Zryoss to run their own business under their brand.",
  },
  {
    title: "Sales & Lead Generation",
    desc: "Partners focus on client acquisition and relationship management.",
  },
  {
    title: "Demo by Zryoss",
    desc: "Our centralized demo and pre-sales team handles client demos.",
  },
  {
    title: "Delivery by Brands",
    desc: "Execution is handled by Zryoss brands and verified vendors.",
  },
  {
    title: "Reporting & Payout",
    desc: "Transparent reporting with performance-based payouts.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-28 bg-[#0F172A] overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          How <span className="text-orange-500">Zryoss</span> Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-center text-gray-400 max-w-3xl mx-auto"
        >
          Zryoss is a business operating platform where partners focus on sales
          while operations, demos, vendors, and delivery are centrally managed.
        </motion.p>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.25,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative border border-orange-500/30 bg-white/5 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]"
            >
              <div className="text-orange-400 font-semibold mb-2">
                Step {index + 1}
              </div>

              <h3 className="text-white font-semibold">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.desc}</p>

              {index !== steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-orange-500" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto text-center border border-orange-500/30 rounded-xl p-6 bg-white/5 backdrop-blur-md"
        >
          <p className="text-sm text-gray-300">
            ⚠️ <span className="text-orange-400 font-semibold">Important:</span>{" "}
            Zryoss does not offer recruitment-based income, passive earnings,
            or referral commissions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
