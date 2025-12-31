import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function Apply() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Apply to Partner with Zryoss
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-4xl text-[var(--text-muted)] text-lg">
            Zryoss partnerships are designed for individuals and organizations
            serious about building sustainable, sales-driven businesses.
          </p>
        </FadeUp>

        {/* DISCLAIMER */}
        <FadeUp delay={0.25}>
          <div className="mt-12 border border-red-500/30 rounded-xl p-6 bg-red-500/10 text-sm text-[var(--text-muted)]">
            Zryoss is not a franchise, MLM, investment, or passive income
            opportunity. Applications are evaluated based on suitability and
            intent.
          </div>
        </FadeUp>

        {/* FORM */}
        <FadeUp delay={0.4}>
          <form className="mt-20 grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="input" />
            <input type="email" placeholder="Email Address" className="input" />
            <input type="text" placeholder="City / Location" className="input" />
            <select className="input">
              <option>Applying As</option>
              <option>Independent Profit Partner (IPP)</option>
              <option>Business Promotion Partner (BPP)</option>
            </select>
            <textarea
              placeholder="Briefly describe your background and intent"
              rows="5"
              className="input md:col-span-2"
            />

            <div className="md:col-span-2">
              <Button primary>Submit Application</Button>
            </div>
          </form>
        </FadeUp>

      </div>
    </section>
  );
}
