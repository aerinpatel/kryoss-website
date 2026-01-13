import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
];

const INPUT =
  "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none transition-all duration-300";

export default function HeroContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        return '';

      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Last name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';

      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true
    });

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setTouched({});
        setIsSubmitting(false);

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,146,60,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.18),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
        py-16 sm:py-20 md:py-24 lg:py-32 
        grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-6 space-y-8 sm:space-y-10">
          <div>
            <p className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-orange-400 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400" />
              Contact Us
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight">
              Ready To Fuel Your{" "}
              <span className="text-orange-400">Vision</span> With{" "}
              <span className="block mt-3">AI-Powered Innovation?</span>
            </h1>
          </div>

          {/* PRESENCE */}
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 mb-4 sm:mb-5">
              Our Presence
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {countries.map((c) => (
                <div
                  key={c.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden ring-1 ring-white/5 hover:ring-orange-400/40 transition-all duration-300"
                >
                  <img
                    src={c.flag}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-3 sm:space-y-4 text-sm text-gray-300 max-w-md leading-relaxed">
            <p className="leading-relaxed">
              Office No. 837-A, 8th Floor <br />
              JMD Megapolis, Sohna Road <br />
              Gurgaon, Haryana, India
            </p>

            <a
              href="mailto:info@zryoss.com"
              className="block underline underline-offset-4 hover:text-orange-400 transition-colors duration-300"
            >
              info@zryoss.com
            </a>

            <a
              href="tel:+919876543210"
              className="block underline underline-offset-4 hover:text-orange-400 transition-colors duration-300"
            >
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl 
            border border-white/15 bg-white/[0.06] backdrop-blur-2xl 
            p-8 md:p-10 shadow-2xl">

            {/* Decorative shape */}
            <div className="absolute -top-6 -right-6 
              w-20 h-20 
              border-2 border-orange-400/40 rounded-xl 
              rotate-45" />

            <p className="text-lg leading-relaxed mb-8 max-w-sm">
              Partner With Experts Who Leverage AI & Tech To Transform Ideas
              Into Market-Leading Solutions.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {submitSuccess && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-300 text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="firstName"
                    placeholder="First Name"
                    className={`${INPUT} ${errors.firstName && touched.firstName
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20'
                      }`}
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label="First Name"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    className={`${INPUT} ${errors.lastName && touched.lastName
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                        : 'border-white/10 focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20'
                      }`}
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label="Last Name"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`${INPUT} ${errors.email && touched.email
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                      : 'border-white/10 focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20'
                    }`}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Email"
                />
                {errors.email && touched.email && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={`${INPUT} ${errors.phone && touched.phone
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                      : 'border-white/10 focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20'
                    }`}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Phone Number"
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className={`${INPUT} resize-none ${errors.message && touched.message
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                      : 'border-white/10 focus:border-orange-400/60 focus:ring-1 focus:ring-orange-400/20'
                    }`}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Message"
                />
                {errors.message && touched.message && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full mt-4 
                  bg-orange-400 hover:bg-orange-500 active:bg-orange-600
                  text-white font-semibold 
                  py-4 
                  rounded-xl 
                  flex items-center justify-between 
                  px-6 
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-orange-500/20
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : "Let's Connect"}
                <span className="bg-white/20 rounded-lg p-2">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}