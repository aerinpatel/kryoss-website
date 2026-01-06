import Hero from "./Hero";
import Stats from "./Stats";
import WhoThisIsFor from "./WhoThisIsFor";
import Highlight from "./Highlight";
import Process from "./Process";
import Offerings from "./Offerings";
import FAQs from "./FAQs";
import Success from "./Success";
import CTA from "./CTA";

export default function SolutionLayout({
  hero,
  stats,
  whoThisIsFor,
  highlight,
  offerings,
  faqs,
  success,
}) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <Hero {...hero} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {stats && <Stats stats={stats} />}

        {whoThisIsFor && <WhoThisIsFor items={whoThisIsFor} />}

        {highlight && <Highlight {...highlight} />}

        <Process />

        <Offerings offerings={offerings} />

        <FAQs faqs={faqs} />

        {success && <Success success={success} />}

        <CTA />
      </div>
    </div>
  );
}
