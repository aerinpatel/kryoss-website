import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build a Real Business?
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Join Zryoss as a partner and focus on sales while we manage demos,
            delivery, vendors, and operations.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button primary>Apply as Partner</Button>
            <Button outline>Talk to Zryoss Team</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
