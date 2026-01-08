import React, { useState } from "react";
import { ChevronDown, Plus, HelpCircle } from "lucide-react";

/* --- FAQ Data --- */
const faqData = [
  {
    question: "Can I switch from BPP to IPP later on?",
    answer: "Absolutely. Many partners start as BPP (referral-based) to test the waters. Once they see the demand, they transition to IPP to take full control of the branding and increase their profit margins."
  },
  {
    question: "Is there a setup fee for the IPP White-Label portal?",
    answer: "The IPP model typically involves a monthly retainer that covers your dedicated portal, white-labeled support desk, and priority developer access. Specific pricing depends on your projected project volume."
  },
  {
    question: "How are BPP commissions paid out?",
    answer: "BPP commissions are paid out automatically via our partner dashboard. Once a client milestone is cleared and the invoice is paid, your percentage is released to your linked account within 7 business days."
  },
  {
    question: "Who owns the Intellectual Property (IP)?",
    answer: "In the IPP model, you own the client contract, but Kryoss maintains the underlying engine IP. However, we provide full licensing for your clients to use the software indefinitely as part of your brand offering."
  },
  {
    question: "Do you provide sales training for Business Partners?",
    answer: "Yes. All Business Prime Partners (BPP) receive a 'Partner Sales Toolkit' which includes pitch decks, technical case studies, and access to a Kryoss Sales Engineer for high-level enterprise calls."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center border border-orange-500/20">
            <HelpCircle className="text-orange-500" size={20} />
          </div>
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase font-bold">Inquiry Desk</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
          Common <span className="text-neutral-500 italic">Questions.</span>
        </h2>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div 
              key={idx}
              className={`group rounded-3xl border transition-all duration-300 overflow-hidden ${
                openIndex === idx 
                ? "bg-neutral-900 border-orange-500/30 shadow-lg shadow-orange-600/5" 
                : "bg-neutral-900/40 border-white/5 hover:border-white/10"
              }`}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === idx ? "text-orange-500" : "text-white group-hover:text-orange-400"}`}>
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-orange-500" : "text-neutral-500"}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out px-8 overflow-hidden ${
                  openIndex === idx ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-neutral-400 leading-relaxed font-light border-t border-white/5 pt-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Help Text */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            Don't see your question? <button className="text-orange-500 hover:underline font-bold">Chat with a Partner Manager</button>
          </p>
        </div>
      </div>
    </section>
  );
}