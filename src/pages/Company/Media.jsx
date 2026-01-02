import FadeUp from "../../components/animations/FadeUp";

export default function Media() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Media & Press
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-secondary)] text-lg">
            Official announcements, updates, and media references related to
            Zryoss and its platform.
          </p>
        </FadeUp>

        {/* MEDIA CONTENT */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)] h-full">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                Press Coverage
              </h3>
              <p className="mt-4 text-[var(--text-secondary)] text-sm">
                Media coverage and third-party references will be published
                here as they become available.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="border border-[var(--border)] rounded-xl p-10 bg-[var(--bg-card)] h-full">
              <h3 className="text-2xl font-semibold text-[var(--accent)]">
                Announcements
              </h3>
              <p className="mt-4 text-[var(--text-secondary)] text-sm">
                Platform updates, milestones, and official communications
                will be shared through this section.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* MEDIA CONTACT */}
        <FadeUp delay={0.4}>
          <div className="mt-24 border border-[var(--border)] rounded-xl p-10 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
            <h3 className="text-3xl font-semibold">
              Media Enquiries
            </h3>

            <p className="mt-4 max-w-3xl text-[var(--text-secondary)]">
              For press or media-related enquiries, please contact the Zryoss
              communications team through official channels.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
