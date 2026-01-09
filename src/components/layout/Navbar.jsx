import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
 
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();
 
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);
 
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);
 
  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };
 
  return (
    <header className="fixed top-0 w-full z-50 bg-black border-b border-white/10 text-white">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
 
        {/* LOGO */}
        <Link to="/" className="relative z-50 flex items-center">
          <img
            src="/Zryoss_logo_2_white.jpg"
            alt="Zryoss Logo"
            className="w-28 md:w-[140px] h-auto object-contain"
          />
        </Link>
 
        {/* DESKTOP NAV - Unchanged */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-300">
          <DesktopDropdown label="Platform">
            <NavItem to="/platform">What is Zryoss</NavItem>
            <NavItem to="/platform/business-operating-platform">Business Operating Platform</NavItem>
            <NavItem to="/platform/sales-enablement">Sales Enablement System</NavItem>
            <NavItem to="/platform/technology">Technology Platform</NavItem>
            <NavItem to="/platform/ai-automation">AI & Automation Vision</NavItem>
          </DesktopDropdown>
 
          <DesktopDropdown label="How It Works">
            <NavItem to="/how-it-works/operating-model">Operating Model</NavItem>
            <NavItem to="/how-it-works/sales-demo-delivery">Sales → Demo → Delivery Flow</NavItem>
            <NavItem to="/how-it-works/revenue-logic">Revenue Logic</NavItem>
            <NavItem to="/how-it-works/roles-responsibilities">Roles & Responsibilities</NavItem>
            <NavItem to="/how-it-works/governance-control">Governance & Control</NavItem>
          </DesktopDropdown>
 
          <DesktopDropdown label="Ecosystem">
            <NavItem to="/ecosystem">Ecosystem Overview</NavItem>
            <NavItem to="/ecosystem/brands">Brands Under Zryoss</NavItem>
            <NavItem to="/ecosystem/vendors">Vendor Network</NavItem>
            <NavItem to="/ecosystem/partners">Partner Network</NavItem>

          </DesktopDropdown>
 
          <DesktopDropdown label="Partnership">
            <NavItem to="/partnership">Overview</NavItem>
            <NavItem to="/partnership/ipp">IPP</NavItem>
            <NavItem to="/partnership/bpp">BPP</NavItem>
            <NavItem to="/partnership/comparison">IPP vs BPP</NavItem>
          </DesktopDropdown>
 
          <DesktopDropdown label="Solutions">
            <NavItem to="/solutions/it-software">IT & Software</NavItem>
            <NavItem to="/solutions/hr-recruitment">HR & Recruitment</NavItem>
            <NavItem to="/solutions/digital-marketing">Digital Marketing</NavItem>
            <NavItem to="/solutions/payroll">Payroll</NavItem>
            <NavItem to="/solutions/legal">Legal</NavItem>
            <NavItem to="/solutions/real-estate">Real Estate</NavItem>
          </DesktopDropdown>
 
          <DesktopDropdown label="Operations">
            <NavItem to="/operations/demo-support">Demo & Pre-Sales Support</NavItem>
            <NavItem to="/operations/delivery-management">Delivery Management</NavItem>
            <NavItem to="/operations/vendor-network">Vendor Management</NavItem>
            <NavItem to="/operations/quality-assurance">Quality & SLA Control</NavItem>
            <NavItem to="/operations/risk-control">Risk Control</NavItem>
          </DesktopDropdown>

          <DesktopDropdown label="Resources">
            <NavItem to="/resources/blog">Blog</NavItem>
            <NavItem to="/resources/faqs">FAQs</NavItem>
            <NavItem to="/resources/knowledge-center">Knowledge Center</NavItem>
            <NavItem to="/resources/partner-guidelines">Partner Guidelines</NavItem>
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
          <Link to="/contact" className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:border-orange-400">
            Contact
          </Link>
          <Link to="/apply" className="px-4 py-2 text-sm bg-orange-500 rounded-lg font-semibold">
            Apply
          </Link>
        </div>
 
        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
 
        {/* MOBILE MENU - All Categories Added */}
        <div
          className={`fixed inset-0 bg-black z-40 transform transition-transform duration-300 md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="pt-24 px-6 h-full overflow-y-auto pb-32">
 
            <MobileAccordion label="Platform" isOpen={activeMobileDropdown === "platform"} onClick={() => toggleMobileDropdown("platform")}>
              <NavItem to="/platform">What is Zryoss</NavItem>
              <NavItem to="/platform/business-operating-platform">Business Operating Platform</NavItem>
              <NavItem to="/platform/sales-enablement">Sales Enablement System</NavItem>
              <NavItem to="/platform/technology">Technology Platform</NavItem>
            <NavItem to="/platform/ai-automation">AI & Automation Vision</NavItem>
            </MobileAccordion>
 
            <MobileAccordion label="How It Works" isOpen={activeMobileDropdown === "how"} onClick={() => toggleMobileDropdown("how")}>
              <NavItem to="/how-it-works/operating-model">Operating Model</NavItem>
              <NavItem to="/how-it-works/sales-demo-delivery">Sales → Demo → Delivery Flow</NavItem>
              <NavItem to="/how-it-works/revenue-logic">Revenue Logic</NavItem>
              <NavItem to="/how-it-works/roles-responsibilities">Roles & Responsibilities</NavItem>
              <NavItem to="/how-it-works/governance-control">Governance & Control</NavItem>
            </MobileAccordion>
 
            <MobileAccordion label="Ecosystem" isOpen={activeMobileDropdown === "ecosystem"} onClick={() => toggleMobileDropdown("ecosystem")}>
              <NavItem to="/ecosystem">Ecosystem Overview</NavItem>
              <NavItem to="/ecosystem/brands">Brands Under Zryoss</NavItem>
              <NavItem to="/ecosystem/vendors">Vendor Network</NavItem>
              <NavItem to="/ecosystem/partners">Partner Network</NavItem>

            </MobileAccordion>
 
            <MobileAccordion label="Partnership" isOpen={activeMobileDropdown === "partnership"} onClick={() => toggleMobileDropdown("partnership")}>
              <NavItem to="/partnership">Overview</NavItem>
              <NavItem to="/partnership/ipp">IPP</NavItem>
              <NavItem to="/partnership/bpp">BPP</NavItem>
              <NavItem to="/partnership/comparison">IPP vs BPP</NavItem>
            </MobileAccordion>
 
            <MobileAccordion label="Solutions" isOpen={activeMobileDropdown === "solutions"} onClick={() => toggleMobileDropdown("solutions")}>
              <NavItem to="/solutions/it-software">IT & Software</NavItem>
              <NavItem to="/solutions/hr-recruitment">HR & Recruitment</NavItem>
              <NavItem to="/solutions/digital-marketing">Digital Marketing</NavItem>
              <NavItem to="/solutions/payroll">Payroll</NavItem>
              <NavItem to="/solutions/legal">Legal</NavItem>
              <NavItem to="/solutions/real-estate">Real Estate</NavItem>
            </MobileAccordion>
 
            <MobileAccordion label="Operations" isOpen={activeMobileDropdown === "operations"} onClick={() => toggleMobileDropdown("operations")}>
              <NavItem to="/operations/demo-pre-sales">Demo & Pre-Sales Support</NavItem>
              <NavItem to="/operations/delivery-management">Delivery Management</NavItem>
              <NavItem to="/operations/vendor-management">Vendor Management</NavItem>
              <NavItem to="/operations/quality-sla">Quality & SLA Control</NavItem>
              <NavItem to="/operations/risk-control">Risk Control</NavItem>
            </MobileAccordion>

            <MobileAccordion
                  label="Resources"
                  isOpen={activeMobileDropdown === "resources"}
                  onClick={() => toggleMobileDropdown("resources")}
                >
                  <NavItem to="/resources/blog">Blog</NavItem>
                  <NavItem to="/resources/faqs">FAQs</NavItem>
                  <NavItem to="/resources/knowledge-center">Knowledge Center</NavItem>
                  <NavItem to="/resources/partner-guidelines">Partner Guidelines</NavItem>
                </MobileAccordion>
 
            <MobileAccordion label="Company" isOpen={activeMobileDropdown === "company"} onClick={() => toggleMobileDropdown("company")}>
              <NavItem to="/company/about">About</NavItem>
              <NavItem to="/company/founder-note">Founder</NavItem>
              <NavItem to="/company/vision-mission">Vision</NavItem>
              <NavItem to="/company/careers">Careers</NavItem>
              <NavItem to="/company/media">Media</NavItem>
            </MobileAccordion>
 
            <div className="mt-10 flex flex-col gap-3">
              <Link to="/contact" className="py-4 text-center border border-white/20 rounded-xl font-bold">
                Contact Us
              </Link>
              <Link to="/apply" className="py-4 text-center bg-orange-500 rounded-xl font-bold text-white">
                Apply Now
              </Link>
            </div>
 
          </div>
        </div>
 
      </nav>
    </header>
  );
}
 
/* ---------- SHARED COMPONENTS ---------- */
 
function DesktopDropdown({ label, children }) {
  return (
    <div className="relative group py-4 cursor-pointer">
      <div className="flex items-center gap-1 hover:text-orange-400 transition-colors">
        {label}
        <span className="text-xs">▼</span>
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px]
        bg-black border border-white/10 rounded-xl shadow-2xl py-3
        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {children}
      </div>
    </div>
  );
}
 
function MobileAccordion({ label, children, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onClick} className="w-full flex justify-between py-5 text-lg font-medium">
        {label}
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pl-4 pb-4 flex flex-col gap-1">{children}</div>
      </div>
    </div>
  );
}
 
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-3 text-base text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
 