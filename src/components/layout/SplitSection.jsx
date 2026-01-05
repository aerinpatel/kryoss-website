import { motion } from "framer-motion";

export default function SplitSection({
  image,
  alt,
  children,
  reverse = false,
  delay = 0,
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay }}
        className="relative"
      >
        <img
          src={image}
          alt={alt}
          className="
            w-full
            h-[420px]
            object-cover
            rounded-2xl
            shadow-2xl
          "
        />

        {/* subtle border */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay }}
        className="space-y-6"
      >
        {children}
      </motion.div>
    </div>
  );
}
