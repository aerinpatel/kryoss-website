import FadeUp from "../../components/animations/FadeUp";

export default function WhatZryossIsNot() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl">
            What Zryoss Is NOT
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            To ensure complete transparency, this page clearly outlines what
            Zryoss does not represent or operate as.
          </p>
        </FadeUp>

        {/* NOT LIST */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Not a Multi-Level Marketing (MLM) Program",
              desc: "Zryoss does not offer income based on recruitment, downlines, or network expansion.",
            },
            {
              title: "Not a Franchise Model",
              desc: "Partners do not purchase or operate a franchise under Zryoss branding.",
            },
            {
              title: "Not a Referral Income Scheme",
              desc: "There are no earnings for referrals without actual business execution.",
            },
            {
              title: "Not an Investment Scheme",
              desc: "Zryoss does not accept investments with promises of returns or fixed income.",
            },
            {
              title: "Not a Passive Income Opportunity",
              desc: "All earnings are linked to active sales and business participation.",
            },
            {
              title: "Not a Get-Rich-Quick Program",
              desc: "Zryoss promotes long-term, sustainable business building only.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="border border-red-500/30 rounded-xl p-8 bg-[var(--bg-card)]">
                <h3 className="text-xl font-semibold text-red-400">
                  {item.title}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] text-sm">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* FINAL CLARITY */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <p className="max-w-4xl text-[var(--text-secondary)]">
              Zryoss is a business operating platform designed to support real
              business activity. All participants are expected to engage in
              genuine sales, client management, and service delivery aligned
              with platform standards.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
