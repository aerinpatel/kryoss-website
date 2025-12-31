import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

export default function Contact() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Zryoss
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] text-lg">
            Reach out to discuss business requirements, solutions, or
            platform-related enquiries.
          </p>
        </FadeUp>

        {/* FORM */}
        <FadeUp delay={0.3}>
          <form className="mt-20 grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="input"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="input"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="input"
            />
            <textarea
              placeholder="Briefly describe your requirement"
              rows="5"
              className="input md:col-span-2"
            />

            <div className="md:col-span-2">
              <Button primary>Submit Enquiry</Button>
            </div>
          </form>
        </FadeUp>

      </div>
    </section>
  );
}
