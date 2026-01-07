import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Zryoss Responsive Navbar
 * Includes desktop hover dropdowns and mobile-friendly accordion menu.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 text-white">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="relative z-50 flex items-center">
          <img 
            src="/Zryoss_logo_2_white.jpg" 
            alt="Zryoss Logo" 
            className="w-28 md:w-[140px] h-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/platform" className="hover:text-orange-400 transition-colors">Platform</Link>
          <Link to="/ecosystem" className="hover:text-orange-400 transition-colors">Ecosystem</Link>

          {/* DESKTOP DROPDOWNS */}
          <DesktopDropdown label="Solutions">
            <NavItem to="/solutions/it-software">IT & Software</NavItem>
            <NavItem to="/solutions/hr-recruitment">HR & Recruitment</NavItem>
            <NavItem to="/solutions/digital-marketing">Digital Marketing</NavItem>
            <NavItem to="/solutions/payroll">Payroll</NavItem>
            <NavItem to="/solutions/legal">Legal</NavItem>
            <NavItem to="/solutions/real-estate">Real Estate</NavItem>
          </DesktopDropdown>

          <DesktopDropdown label="Partnership">
            <NavItem to="/partnership">Overview</NavItem>
            <NavItem to="/partnership/ipp">IPP</NavItem>
            <NavItem to="/partnership/bpp">BPP</NavItem>
            <NavItem to="/partnership/comparison">IPP vs BPP</NavItem>
          </DesktopDropdown>

          <DesktopDropdown label="Resources">
            <NavItem to="/resources/blog">Blog</NavItem>
            <NavItem to="/resources/faqs">FAQs</NavItem>
            <NavItem to="/resources/knowledge-center">Knowledge Center</NavItem>
            <NavItem to="/resources/partner-guidelines">Guidelines</NavItem>
          </DesktopDropdown>

          <DesktopDropdown label="Company">
            <NavItem to="/company/about">About</NavItem>
            <NavItem to="/company/founder-note">Founder</NavItem>
            <NavItem to="/company/vision-mission">Vision</NavItem>
            <NavItem to="/company/careers">Careers</NavItem>
            <NavItem to="/company/media">Media</NavItem>
          </DesktopDropdown>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:border-orange-400 transition-all"
          >
            Contact
          </Link>
          <Link
            to="/apply"
            className="px-4 py-2 text-sm bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
          >
            Apply
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button 
          className="md:hidden p-2 relative z-50 text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* MOBILE OVERLAY MENU */}
        <div className={`
          fixed inset-0 bg-[#0a0a0a] z-40 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col pt-20 px-6 h-screen overflow-y-auto
        `}>
          <div className="flex flex-col mt-4">
            <Link to="/platform" className="text-lg py-4 border-b border-white/5 font-medium">Platform</Link>
            <Link to="/ecosystem" className="text-lg py-4 border-b border-white/5 font-medium">Ecosystem</Link>
            
            <MobileAccordion 
              label="Solutions" 
              isOpen={activeMobileDropdown === 'solutions'}
              onClick={() => toggleMobileDropdown('solutions')}
            >
              <NavItem to="/solutions/it-software">IT & Software</NavItem>
              <NavItem to="/solutions/hr-recruitment">HR & Recruitment</NavItem>
              <NavItem to="/solutions/digital-marketing">Digital Marketing</NavItem>
              <NavItem to="/solutions/payroll">Payroll</NavItem>
              <NavItem to="/solutions/legal">Legal</NavItem>
              <NavItem to="/solutions/real-estate">Real Estate</NavItem>
            </MobileAccordion>

            <MobileAccordion 
              label="Partnership" 
              isOpen={activeMobileDropdown === 'partnership'}
              onClick={() => toggleMobileDropdown('partnership')}
            >
              <NavItem to="/partnership">Overview</NavItem>
              <NavItem to="/partnership/ipp">IPP</NavItem>
              <NavItem to="/partnership/bpp">BPP</NavItem>
              <NavItem to="/partnership/comparison">IPP vs BPP</NavItem>
            </MobileAccordion>

            <MobileAccordion 
              label="Resources" 
              isOpen={activeMobileDropdown === 'resources'}
              onClick={() => toggleMobileDropdown('resources')}
            >
              <NavItem to="/resources/blog">Blog</NavItem>
              <NavItem to="/resources/faqs">FAQs</NavItem>
              <NavItem to="/resources/knowledge-center">Knowledge Center</NavItem>
              <NavItem to="/resources/partner-guidelines">Guidelines</NavItem>
            </MobileAccordion>

            <MobileAccordion 
              label="Company" 
              isOpen={activeMobileDropdown === 'company'}
              onClick={() => toggleMobileDropdown('company')}
            >
              <NavItem to="/company/about">About</NavItem>
              <NavItem to="/company/founder-note">Founder</NavItem>
              <NavItem to="/company/vision-mission">Vision</NavItem>
              <NavItem to="/company/careers">Careers</NavItem>
              <NavItem to="/company/media">Media</NavItem>
            </MobileAccordion>
          </div>

          {/* MOBILE CTAs */}
          <div className="mt-8 flex flex-col gap-3 pb-10">
            <Link to="/contact" className="w-full py-3.5 text-center border border-white/20 rounded-xl text-base font-medium active:scale-95 transition-transform">
              Contact Us
            </Link>
            <Link to="/apply" className="w-full py-3.5 text-center bg-orange-500 text-white rounded-xl text-base font-bold active:scale-95 transition-transform shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* 🔽 DESKTOP DROPDOWN WRAPPER */
function DesktopDropdown({ label, children }) {
  return (
    <div className="relative group py-4 cursor-pointer">
      <div className="flex items-center gap-1 hover:text-orange-400 transition-colors">
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px]
        bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl py-3
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50">
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

/* 🔽 MOBILE ACCORDION WRAPPER */
function MobileAccordion({ label, children, isOpen, onClick }) {
  return (
    <div className="border-b border-white/5">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-lg font-medium text-left"
      >
        {label}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-400' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-height-[500px] mb-4 opacity-100' : 'max-h-0 opacity-0'}`} style={{ maxHeight: isOpen ? '500px' : '0' }}>
        <div className="pl-4 border-l border-orange-500/30 flex flex-col gap-1">
          {children}
        </div>
      </div>
    </div>
  );
}

/* 🔗 NAV ITEM LINK */
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-3 md:py-2 text-[15px] md:text-sm text-gray-400
      hover:bg-orange-500/10 hover:text-orange-400 rounded-lg transition-all"
    >
      {children}
    </Link>
  );
}