import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build Your Own Business.
            <br />
            <span className="text-indigo-400">
              Let Zryoss Run the Backend.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-2xl text-gray-400 text-lg">
            Zryoss is a business operating platform where partners focus on sales
            while demos, delivery, vendors and operations are managed centrally.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-10 flex gap-4">
            <Button primary>Apply as Partner</Button>
            <button outline>Talk to Zryoss Team</button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
