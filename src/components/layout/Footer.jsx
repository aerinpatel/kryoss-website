import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] mt-32">
      {/* Top Glow Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section - 4 Columns Wide */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              {/* Logo Image */}
              <img 
                src="/Zryoss_logo_2_white.jpg" 
                alt="Zryoss Logo" 
                className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-base text-gray-400 leading-relaxed max-w-xs">
              A business operating platform enabling scalable, 
              execution-focused growth for the next generation of enterprises.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              {[
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Linkedin size={20} />, link: "#" },
                { icon: <Instagram size={20} />, link: "#" },
                { icon: <Github size={20} />, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-500 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections - 8 Columns Wide Total */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Company */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4">
                <li><FooterLink to="/company/about">About</FooterLink></li>
                <li><FooterLink to="/company/vision-mission">Vision</FooterLink></li>
                <li><FooterLink to="/company/careers">Careers</FooterLink></li>
                <li><FooterLink to="/company/media">Media</FooterLink></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-6 tracking-wide">Resources</h4>
              <ul className="space-y-4">
                <li><FooterLink to="/resources/blog">Blog</FooterLink></li>
                <li><FooterLink to="/resources/faqs">FAQs</FooterLink></li>
                <li><FooterLink to="/trust/what-zryoss-is-not">Compliance</FooterLink></li>
                <li><FooterLink to="/trust/risk-disclosure">Risk Disclosure</FooterLink></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-orange-500 font-bold text-lg mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4">
                <li><FooterLink to="/contact">Business Enquiry</FooterLink></li>
                <li><FooterLink to="/apply">Partner Apply</FooterLink></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-medium">
            © {currentYear} <span className="text-gray-300">Zryoss</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for consistent Hover Effects
function FooterLink({ to, children }) {
  return (
    <Link 
      to={to} 
      className="text-gray-400 hover:text-white text-base transition-all duration-200 block transform hover:translate-x-1"
    >
      {children}
    </Link>
  );
}