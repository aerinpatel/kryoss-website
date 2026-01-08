import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050505]  text-white overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">

        {/* BRAND + NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/">
              <img
                src="/Zryoss_logo_2_white.jpg"
                alt="Zryoss Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-400 text-[17px] leading-relaxed max-w-md">
              India's first execution-focused operating platform for the next
              generation of enterprises. Scaling systems, not just software.
            </p>

            <div className="flex items-center gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-8 flex flex-col md:flex-row justify-between items-center bg-white/5 p-8 rounded-2xl border border-white/10 gap-6">
            <div className="max-w-sm">
              <h3 className="text-xl font-bold mb-2 text-orange-500">
                Join the ecosystem
              </h3>
              <p className="text-sm text-gray-400">
                Monthly insights on execution, scalability & enterprise growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Work email address"
                className="bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 min-w-[260px]"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2 group transition-all">
                Subscribe
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* NAV SECTIONS */}
        {/* NAV SECTIONS */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 mb-16">

  {/* PLATFORM */}
  <FooterSection title="Platform">
    <FooterLink to="/platform">Platform</FooterLink>
    <FooterLink to="/ecosystem">Ecosystem</FooterLink>
  </FooterSection>

  {/* SOLUTIONS */}
  <FooterSection title="Solutions">
    <FooterLink to="/solutions/it-software">IT & Software</FooterLink>
    <FooterLink to="/solutions/hr-recruitment">HR & Recruitment</FooterLink>
    <FooterLink to="/solutions/digital-marketing">Digital Marketing</FooterLink>
    <FooterLink to="/solutions/payroll">Payroll</FooterLink>
    <FooterLink to="/solutions/legal">Legal</FooterLink>
    <FooterLink to="/solutions/real-estate">Real Estate</FooterLink>
  </FooterSection>

  {/* PARTNERSHIP */}
  <FooterSection title="Partnership">
    <FooterLink to="/partnership">Overview</FooterLink>
    <FooterLink to="/partnership/ipp">IPP</FooterLink>
    <FooterLink to="/partnership/bpp">BPP</FooterLink>
    <FooterLink to="/partnership/comparison">IPP vs BPP</FooterLink>
  </FooterSection>

  {/* RESOURCES */}
  <FooterSection title="Resources">
    <FooterLink to="/resources/blog">Blog</FooterLink>
    <FooterLink to="/resources/faqs">FAQs</FooterLink>
    <FooterLink to="/resources/knowledge-center">Knowledge Center</FooterLink>
    <FooterLink to="/resources/partner-guidelines">Guidelines</FooterLink>
  </FooterSection>

  {/* COMPANY */}
  <FooterSection title="Company">
    <FooterLink to="/company/about">About</FooterLink>
    <FooterLink to="/company/founder-note">Founder</FooterLink>
    <FooterLink to="/company/vision-mission">Vision</FooterLink>
    <FooterLink to="/company/careers">Careers</FooterLink>
    <FooterLink to="/company/media">Media</FooterLink>

  </FooterSection>

</div>


        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-sm text-gray-500">
              © {currentYear}{" "}
              <span className="text-gray-200 font-semibold">Zryoss</span>
            </p>

            <div className="flex gap-6 text-[11px] uppercase tracking-widest text-gray-500">
              <Link to="/privacy" className="hover:text-orange-500">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-orange-500">
                Terms
              </Link>
              <Link to="/security" className="hover:text-orange-500">
                Compliance
              </Link>
            </div>
          </div>

          {/* TRUST */}
          <div className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
            <ShieldCheck size={20} className="text-orange-500" />
            <span className="text-[12px] font-bold tracking-widest">ISO 27001</span>
            <span className="text-[12px] font-bold tracking-widest">GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* HELPERS */

function FooterSection({ title, children }) {
  return (
    <div className="space-y-4">
      <h4 className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">
        {title}
      </h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-white text-[15px] transition-all duration-200 inline-block transform hover:translate-x-1"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400
      hover:bg-orange-500 hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
