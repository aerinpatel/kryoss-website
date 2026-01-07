import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Briefcase,
  Upload,
  X,
} from "lucide-react";

/* ================= FadeUp ================= */
const FadeUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

/* ================= MAIN ================= */
export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    partnerType: "ipp",
    experience: "",
    message: "",
    heardFrom: "website",
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance-Based Earnings",
      desc: "Earnings are generated only through real business closures.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Centralized Execution",
      desc: "Zryoss manages delivery, demos, compliance & operations.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "No MLM / No Recruitment",
      desc: "No downlines, no hierarchy, no passive income model.",
    },
  ];

  /* ================= SUCCESS ================= */
  if (submitted) {
    return (
      <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center max-w-xl px-6">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4">
            Application Received
          </h2>
          <p className="text-gray-400 mb-8">
            Our team will review your application and connect with you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-white/10 rounded-lg"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-400">
                Partner Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Join the Zryoss{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Partner Network
              </span>
            </h1>

            <p className="text-lg text-gray-400">
              Business-first partnerships focused on real execution,
              real sales, and zero hype.
            </p>
          </FadeUp>
        </div>

        {/* ================= BENEFITS ================= */}
        <FadeUp delay={100}>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10"
              >
                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ================= CONTENT + FORM ================= */}
        <div className="grid lg:grid-cols-5 gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* IPP */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Independent Profit Partner (IPP)
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                IPPs run their own brand and sales operations while leveraging
                Zryoss’s centralized delivery, demo, and compliance systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Owns clients & sales strategy</li>
                <li>• Can build internal sales teams</li>
                <li>• Full control over growth</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Not a franchise · Not MLM · Not passive income
              </p>
            </div>

            {/* BPP */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Business Promotion Partner (BPP)
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                BPPs are sales-focused partners earning only on successful
                business closures.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Promotes Zryoss services</li>
                <li>• Shares qualified leads</li>
                <li>• Supports deal closure</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                No recruitment · No downlines · No guaranteed income
              </p>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <h4 className="font-bold mb-3">Need help?</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p className="flex gap-2"><Mail className="w-4" /> partners@zryoss.com</p>
                <p className="flex gap-2"><Phone className="w-4" /> +91 12345 67890</p>
                <p className="flex gap-2"><Clock className="w-4" /> Mon–Fri, 9AM–6PM IST</p>
              </div>
            </div>
          </div>

          {/* ================= FORM (FULLY PRESENT) ================= */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10">
              <h2 className="text-2xl font-bold mb-6">
                Partner Application
              </h2>

              <div className="space-y-6">
                <input name="fullName" onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />
                <input name="email" onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />
                <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />
                <input name="company" onChange={handleChange} placeholder="Company Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />
                <textarea name="message" onChange={handleChange} rows="4" placeholder="Tell us about your business" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg" />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 py-4 rounded-lg font-bold flex justify-center items-center gap-2"
                >
                  Submit Application <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
