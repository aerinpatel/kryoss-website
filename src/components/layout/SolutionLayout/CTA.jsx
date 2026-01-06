import FadeUp from "../../animations/FadeUp";
import Button from "../../ui/Button";

export default function CTA() {
  return (
    <FadeUp>
      <div className="max-w-4xl mx-auto mt-28 mb-10 text-center bg-gray-900 border border-orange-500/30 rounded-2xl p-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Move Forward with Confidence?
        </h3>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Talk to our experts and understand how Zryoss can support your
          business with structured, reliable solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button primary className="px-10 py-4 text-base">
            Talk to an Expert
          </Button>

          <Button className="px-10 py-4 border border-white/20 text-white">
            Request Consultation
          </Button>
        </div>
      </div>
    </FadeUp>
  );
}
