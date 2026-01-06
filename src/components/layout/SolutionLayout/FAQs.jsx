import { useState } from "react";
import FadeUp from "../../animations/FadeUp";
import { ChevronDown } from "lucide-react";

export default function FAQs({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-20">
      <FadeUp>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="max-w-4xl mx-auto space-y-4">
          {(faqs.length ? faqs : Array(4).fill({})).map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-white font-medium">
                  {item.question || "Sample question will appear here"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 transition ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {item.answer ||
                    "This is a placeholder answer. Real FAQ content will be added later."}
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
