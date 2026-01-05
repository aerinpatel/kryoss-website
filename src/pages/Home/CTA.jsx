import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function CTA() {
  return (
    <section className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-orange-500/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Build a{" "}
            <span className="text-orange-500">Real Business?</span>
          </h2>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.2}>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Join Zryoss as a partner and focus on sales while we manage demos,
            delivery, vendors, and operations — so you can scale without limits.
          </p>
        </FadeUp>

        {/* Buttons */}
        <FadeUp delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button primary to="/apply" className="px-8 py-3 text-lg">
              Apply as Partner
            </Button>

            <Button outline to="/contact" className="px-8 py-3 text-lg">
              Talk to Zryoss Team
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
