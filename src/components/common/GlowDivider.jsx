import { motion } from "framer-motion";

export default function GlowDivider() {
  return (
    <div className="relative my-14">
      {/* base line */}
      <div className="h-px w-full bg-white/10" />

      {/* animated glow */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      />

      {/* center dot */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.55)]"
      />
    </div>
  );
}
