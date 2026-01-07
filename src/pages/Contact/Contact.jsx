import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import FadeUp from "../../components/animations/FadeUp";

/* ---------- INPUT STYLES ---------- */
const INPUT_CLASSES = `
  w-full px-4 py-3.5 rounded-xl
  bg-[#0f0f0f]
  border border-white/10
  text-white placeholder-gray-500
  outline-none transition-all duration-200
  focus:border-orange-500/60
  focus:ring-1 focus:ring-orange-500/30
`;

/* ---------- MAIN COMPONENT ---------- */
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    contactNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.435967072558!2d77.0366883!3d28.436341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1879c2980d23%3A0x676e2730626359d9!2sJMD%20Megapolis!5e0!3m2!1sen!2sin!4v1700000000000";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Enquiry submitted successfully!");
    }, 1500);
  };

  return (
    <section className="py-28 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER ---------- */}
        <FadeUp>
          <div className="max-w-3xl mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-500 font-bold">
              Enterprise Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Let’s talk about <br />
              <span className="text-gray-400">your business execution</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Reach out to Zryoss for platform demos, partnerships, or
              enterprise-level execution support.
            </p>
          </div>
        </FadeUp>

        {/* ---------- GRID ---------- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ---------- LEFT: MAP + INFO ---------- */}
          <div className="lg:col-span-5 space-y-10">
            <FadeUp delay={0.1}>
              <div>
                <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">
                  <MapPin size={14} className="text-orange-500" />
                  Headquarters
                </h3>
                <p className="text-lg font-medium leading-relaxed">
                  Office No. 837-A, 8th Floor <br />
                  JMD Megapolis, Sohna Road <br />
                  Gurgaon, Haryana
                </p>
              </div>
            </FadeUp>

            {/* MAP – REAL & CLEAR */}
            <FadeUp delay={0.2}>
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  title="Zryoss Headquarters"
                  src={mapEmbedUrl}
                  loading="lazy"
                  className="w-full h-full"
                />
                {/* Map label */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-orange-500 font-bold uppercase">
                      Gurgaon, India
                    </p>
                    <p className="text-[11px] text-gray-400">
                      GMT +5:30 IST
                    </p>
                  </div>
                  <Globe size={16} className="text-gray-400" />
                </div>
              </div>
            </FadeUp>

            {/* CONTACT CARDS */}
            <FadeUp delay={0.25}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-sm">info@zryoss.com</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="font-semibold text-sm">+91 98765 43210</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ---------- RIGHT: FORM ---------- */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.3}>
              <form
                onSubmit={handleSubmit}
                className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <ShieldCheck className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Secure Enquiry</h3>
                    <p className="text-xs text-gray-500">
                      Enterprise-grade communication
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      name="fullName"
                      placeholder="Full Name"
                      onChange={handleInputChange}
                      className={INPUT_CLASSES}
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Work Email"
                      onChange={handleInputChange}
                      className={INPUT_CLASSES}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      name="companyName"
                      placeholder="Company Name"
                      onChange={handleInputChange}
                      className={INPUT_CLASSES}
                    />
                    <input
                      name="contactNumber"
                      placeholder="Phone Number"
                      onChange={handleInputChange}
                      className={INPUT_CLASSES}
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your requirement"
                    onChange={handleInputChange}
                    className={`${INPUT_CLASSES} resize-none`}
                    required
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-orange-500 hover:text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    {!isSubmitting && <ArrowRight size={18} />}
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
