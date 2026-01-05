import React, { useState, useEffect } from "react";
import FadeUp from "../../components/animations/FadeUp";
import Button from "../../components/ui/Button";

// --- Form Input Styles ---
const INPUT_CLASSES = `
  w-full px-4 py-4 rounded-xl
  bg-[#0f0f0f] 
  border border-[#ea580c]/20 
  text-[var(--text-primary)] placeholder-[var(--text-muted)]
  outline-none transition-all duration-300
  focus:border-[#ea580c] 
  focus:bg-[rgba(234,88,12,0.05)] 
  focus:shadow-[0_0_25px_rgba(234,88,12,0.15)] 
  caret-[#ea580c] 
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    contactNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [animateLine, setAnimateLine] = useState(false); // State for line animation

  // Trigger the line animation after component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLine(true);
    }, 500); // Slight delay to sync with FadeUp
    return () => clearTimeout(timer);
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/place/JMD+Megapolis";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.435967072558!2d77.03668831507817!3d28.43634098249625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1879c2980d23%3A0x676e2730626359d9!2sJMD%20Megapolis!5e0!3m2!1sen!2sin!4v1679000000000!5m2!1sen!2sin";
  
  const headerBgImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Enquiry submitted!");
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--bg-primary)] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER WITH ORANGE THEME BACKGROUND */}
        {/* Changed: Increased shadow opacity for outer glow, increased border opacity */}
        <div className="relative mb-16 rounded-3xl overflow-hidden p-10 md:p-16 border border-[#ea580c]/60 shadow-[0_0_60px_rgba(234,88,12,0.35)]">
         
          
          <div className="relative z-10">
            <FadeUp>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] drop-shadow-lg">
      Contact <span className="text-orange-500">Us</span>
    </h1>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex items-start gap-4 mt-6 h-16"> {/* Added fixed height to container to prevent layout shift */}
                {/* Changed: Added dynamic classes for height transition */}
                <div 
                  className={`
                    w-1.5 bg-[#ea580c] rounded-full shrink-0 shadow-[0_0_15px_#ea580c]
                    transition-all duration-1000 ease-out origin-top
                    ${animateLine ? 'h-16 opacity-100' : 'h-0 opacity-0'}
                  `}
                ></div>
                <p className="max-w-2xl text-[var(--text-secondary)] text-lg leading-relaxed">
                  Reach out to discuss business requirements, solutions, or
                  platform-related enquiries. We are here to help you build the future.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
          
          {/* LEFT: INFO, MAP & CONTACT DETAILS */}
          <div className="flex flex-col w-full h-full">
            
            {/* Address Section */}
            <FadeUp delay={0.2} className="mb-8 shrink-0">
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                Headquarters
              </h2>
              <address className="text-[var(--text-secondary)] mt-4 not-italic leading-relaxed text-lg">
                Office No. 837-A, 8th Floor, JMD Megapolis,<br />
                Sohna Road, Sector 48, Gurgaon, Haryana
              </address>
            </FadeUp>
            <br />

            {/* MAP CONTAINER */}
            <FadeUp delay={0.25} className="w-full h-[350px] mb-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(234,88,12,0.1)] border border-[#ea580c]/30 group">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 cursor-pointer"
                  aria-label="View Headquarters on Google Maps"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-[#ea580c] text-white font-bold py-3 px-6 rounded-full shadow-2xl">
                      Open in Google Maps ↗
                    </span>
                  </div>
                </a>

                <div className="w-full h-full bg-[#121212]">
                  <iframe
                    title="Headquarters"
                    className="w-full h-full pointer-events-none transition-transform duration-[2000ms] ease-out group-hover:scale-110 filter invert-[.9] hue-rotate-180 contrast-[1.2] brightness-[.85]"
                    src={mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-[#ea580c] border border-[#ea580c]/50 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg pointer-events-none">
                  📍 JMD Megapolis, Gurgaon
                </div>
              </div>
            </FadeUp>
            <br />

            {/* CONTACT DETAILS CARDS */}
            <FadeUp delay={0.3} className="grid sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <a href="mailto:info@zryoss.com" className="group block">
                <div className="bg-[#0f0f0f] border border-[#ea580c]/20 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-[#ea580c] hover:bg-[rgba(234,88,12,0.05)]">
                  <div className="w-12 h-12 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Email Us</p>
                    <p className="text-[var(--text-primary)] font-semibold group-hover:text-[#ea580c] transition-colors">
                      info@zryoss.com
                    </p>
                  </div>
                </div>
              </a>
              <br />

              {/* Phone Card */}
              <a href="tel:+919876543210" className="group block">
                <div className="bg-[#0f0f0f] border border-[#ea580c]/20 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-[#ea580c] hover:bg-[rgba(234,88,12,0.05)]">
                  <div className="w-12 h-12 rounded-full bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)] font-medium">Call Us</p>
                    <p className="text-[var(--text-primary)] font-semibold group-hover:text-[#ea580c] transition-colors">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
              </a>
            </FadeUp>
          </div>

          {/* RIGHT: GLOWING FORM */}
          <FadeUp delay={0.3} className="w-full relative z-30">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-[var(--bg-secondary)] p-6 md:p-8 rounded-3xl
                         border border-[#ea580c]/30 shadow-[0_0_15px_rgba(234,88,12,0.05)]
                         hover:border-[#ea580c] hover:shadow-[0_0_50px_rgba(234,88,12,0.25)]
                         transition-all duration-500 ease-in-out"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="fullName"
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={INPUT_CLASSES}
                  required
                />
                <input
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={INPUT_CLASSES}
                  required
                />
              </div>
              
              <input
                name="companyName"
                onChange={handleInputChange}
                placeholder="Company Name"
                className={INPUT_CLASSES}
              />
              
              <input
                name="contactNumber"
                type="tel"
                onChange={handleInputChange}
                placeholder="Contact Number"
                className={INPUT_CLASSES}
                required
              />
              
              <textarea
                name="message"
                onChange={handleInputChange}
                placeholder="How can we help you?"
                className={`${INPUT_CLASSES} resize-none min-h-[150px]`}
                required
              />

              <Button 
                primary 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}