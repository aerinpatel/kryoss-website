import React, { useState, useEffect } from "react";
import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

/* ---------- Shared Input Styles ---------- */
const INPUT_CLASSES = `
  w-full px-4 py-4 rounded-xl
  bg-[#0f0f0f]
  border border-[#ea580c]/20
  text-[var(--text-primary)]
  placeholder-[var(--text-muted)]
  outline-none transition-all duration-300
  focus:border-[#ea580c]
  focus:bg-[rgba(234,88,12,0.05)]
  focus:shadow-[0_0_25px_rgba(234,88,12,0.15)]
  caret-[#ea580c]
`;

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animateLine, setAnimateLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateLine(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application Submitted Successfully!");
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--bg-primary)] relative">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* ================= HEADER ================= */}
        <div className="relative rounded-3xl p-10 md:p-16 border border-[#ea580c]/60 shadow-[0_0_60px_rgba(234,88,12,0.35)]">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Apply to Partner <br className="hidden md:block" />
              with <span className="text-orange-500">Zryoss</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex gap-4 mt-8 min-h-[4rem]">
              <div
                className={`w-1.5 bg-orange-500 rounded-full transition-all duration-1000
                ${animateLine ? "h-16" : "h-0"}`}
              />
              <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
                Zryoss partnerships are designed for individuals and organizations
                serious about building sustainable, sales-driven businesses.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <FadeUp>
          <div className="rounded-xl border border-red-500/30 bg-red-900/10 p-6">
            <p className="text-sm md:text-base text-red-200/80 leading-relaxed">
              <strong className="text-red-400 block mb-1">
                Important Notice:
              </strong>
              Zryoss is not a franchise, MLM, investment, or passive income
              opportunity. Applications are evaluated carefully.
            </p>
          </div>
        </FadeUp>

        {/* ================= APPLICATION FORM ================= */}
        <FadeUp>
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--bg-secondary)] p-6 md:p-10 rounded-3xl
                       border border-[#ea580c]/30 shadow-[0_0_15px_rgba(234,88,12,0.05)]
                       hover:border-[#ea580c] hover:shadow-[0_0_50px_rgba(234,88,12,0.25)]
                       transition-all duration-500 max-w-5xl mx-auto space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={INPUT_CLASSES}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={INPUT_CLASSES}
                  required
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">City / Location</label>
                <input
                  type="text"
                  placeholder="Mumbai, India"
                  className={INPUT_CLASSES}
                  required
                />
              </div>

              {/* Applying As (FIXED DROPDOWN) */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Applying As</label>

                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className={`
                      ${INPUT_CLASSES}
                      appearance-none
                      cursor-pointer
                      bg-[#0f0f0f]
                      text-[var(--text-primary)]
                    `}
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#0f0f0f] text-gray-500"
                    >
                      Select Role
                    </option>

                    <option
                      value="IPP"
                      className="bg-[#0f0f0f] text-[var(--text-primary)]"
                    >
                      Independent Profit Partner (IPP)
                    </option>

                    <option
                      value="BPP"
                      className="bg-[#0f0f0f] text-[var(--text-primary)]"
                    >
                      Business Promotion Partner (BPP)
                    </option>
                  </select>

                  {/* Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-orange-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Background & Intent */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400">
                Background & Intent
              </label>
              <textarea
                rows="5"
                placeholder="Briefly describe your background and why you want to partner with Zryoss..."
                className={`${INPUT_CLASSES} resize-none`}
                required
              />
            </div>

            {/* Submit */}
            <Button primary disabled={isSubmitting} className="w-full py-4">
              {isSubmitting
                ? "Submitting Application..."
                : "Submit Application"}
            </Button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
