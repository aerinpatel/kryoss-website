import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeLeftTab, setActiveLeftTab] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setActiveLeftTab("Overview");
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const navData = [
    {
      label: "Platform",
      key: "platform",
      leftTabs: [
        {
          tab: "Overview",
          links: [
            { title: "What is Zryoss", to: "/platform/what-is-zryoss" },
            { title: "Zryoss Business Operating Platform", to: "/platform/business-platform" },
            { title: "How Zryoss Works (End-to-End)", to: "/platform/how-it-works" },
            { title: "Zryoss Methodology", to: "/platform/methodology" },
            { title: "Sales Enablement & Demo System", to: "/platform/sales-enablement" },
            { title: "Centralized Operations Model", to: "/platform/operations-model" },
            { title: "Technology & Automation Platform", to: "/platform/technology" },
            { title: "Brand Launch & Support Framework", to: "/platform/brand-launch" },
          ],
        },
      ],
    },
    {
      label: "Ecosystem",
      key: "ecosystem",
      leftTabs: [
        {
          tab: "Overview",
          links: [
            { title: "Ecosystem Overview", to: "/ecosystem/overview" },
            { title: "Zryoss Operating System", to: "/ecosystem/operating-system" },
            { title: "Partner & Vendor Network", to: "/ecosystem/vendors" },
            { title: "Account Management Model", to: "/ecosystem/account-management" },
            { title: "Ecosystem Scale Roadmap", to: "/ecosystem/roadmap" },
          ],
        },
        {
          tab: "Core Execution Brands",
          links: [
            { title: "Kryoss Softech", to: "/ecosystem/brands/kryoss-softech" },
            { title: "Clink HR", to: "/ecosystem/brands/clink-hr" },
            { title: "Vyombiz", to: "/ecosystem/brands/vyombiz" },
            { title: "Edulinker", to: "/ecosystem/brands/edulinker" },
            { title: "Medikryoss", to: "/ecosystem/brands/medikryoss" },
          ],
        },
      ],
    },
    {
      label: "Partnership",
      key: "partnership",
      leftTabs: [
        {
          tab: "Overview",
          links: [
            { title: "Partnership Overview", to: "/partnership" },
            { title: "Partnership Philosophy", to: "/partnership/philosophy" },
            { title: "Brand Ownership Model", to: "/partnership/brand-ownership" },
            { title: "Execution & Support Scope", to: "/partnership/support-scope" },
            { title: "Engagement Lifecycle", to: "/partnership/lifecycle" },
          ],
        },
        {
          tab: "IPP",
          links: [
            { title: "IPP Overview", to: "/partnership/ipp" },
            { title: "Brand Creation for IPP", to: "/partnership/ipp/brand-creation" },
            { title: "IPP Business Model & Charges", to: "/partnership/ipp/business-model" },
            { title: "IPP Operations Managed by Zryoss", to: "/partnership/ipp/operations" },
            { title: "IPP Client Handling & Demo Support", to: "/partnership/ipp/support" },
            { title: "IPP Sub-Partner Model (Limited Levels)", to: "/partnership/ipp/sub-partner" },
            { title: "IPP Account Management (6 Months)", to: "/partnership/ipp/account-management" },
          ],
        },
        {
          tab: "BPP",
          links: [
            { title: "BPP Overview", to: "/partnership/bpp" },
            { title: "Multi-Vertical Business Model (3 Verticals)", to: "/partnership/bpp/business-model" },
            { title: "Brand & Business Setup by Zryoss", to: "/partnership/bpp/setup" },
            { title: "BPP Operations & Demo Authority", to: "/partnership/bpp/operations" },
            { title: "BPP IPP Creation & Management", to: "/partnership/bpp/ipp-management" },
            { title: "BPP Revenue & Scale Model", to: "/partnership/bpp/revenue-model" },
            { title: "BPP Dedicated Account Manager", to: "/partnership/bpp/account-manager" },
          ],
        },
      ],
    },
    {
      label: "Solutions",
      key: "solutions",
      leftTabs: [
        {
          tab: "By Vertical",
          links: [
            { title: "Solutions Overview", to: "/solutions" },
            { title: "IT & Software Solutions", to: "/solutions/it-software" },
            { title: "HR & Recruitment Solutions", to: "/solutions/hr-recruitment" },
            { title: "Digital Marketing Solutions", to: "/solutions/digital-marketing" },
            { title: "Business Consulting & Setup", to: "/solutions/business-consulting" },
            { title: "Legal & Compliance Services", to: "/solutions/legal-compliance" },
            { title: "Real Estate & Interior Solutions", to: "/solutions/real-estate-interior" },
            { title: "Custom Industry Solutions", to: "/solutions/custom-industry" },
          ],
        },
      ],
    },
    {
      label: "Operations",
      key: "operations",
      leftTabs: [
        {
          tab: "Overview",
          links: [
            { title: "Operations Overview", to: "/operations" },
            { title: "Client Onboarding Process", to: "/operations/onboarding" },
            { title: "Delivery & Execution Management", to: "/operations/delivery" },
            { title: "Quality Assurance Framework", to: "/operations/quality-assurance" },
            { title: "Account Management & Support", to: "/operations/account-management" },
            { title: "Vendor Coordination Model", to: "/operations/vendor-coordination" },
            { title: "Reporting & Performance Tracking", to: "/operations/reporting" },
          ],
        },
      ],
    },
    {
      label: "Company",
      key: "company",
      leftTabs: [
        {
          tab: "About",
          links: [
            { title: "About Zryoss", to: "/company/about" },
            { title: "Vision & Leadership", to: "/company/vision-leadership" },
            { title: "Ethics & Governance", to: "/company/ethics-governance" },
            { title: "Risk Disclosure", to: "/company/risk-disclosure" },
            { title: "Disclaimer", to: "/company/disclaimer" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      key: "resources",
      leftTabs: [
        {
          tab: "Explore",
          links: [
            { title: "Blog / Insights", to: "/resources/blog" },
            { title: "FAQs", to: "/resources/faqs" },
          ],
        },
      ],
    },
  ];

  const activeConfig = navData.find((n) => n.key === activeMenu);
  const leftTabs = activeConfig?.leftTabs || [];
  const activeTabData = leftTabs.find((t) => t.tab === activeLeftTab) || leftTabs[0];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b text-white ${isScrolled
        ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 shadow-2xl"
        : "bg-[#0a0a0a]/60 backdrop-blur-md border-white/5"}`}
    >
      {/* Top Bar */}
      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-28 xl:px-32 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-16">
          <Link to="/" className="relative z-50">
            <img
              src="/Zryoss_logo_2_white.jpg"
              alt="Logo"
              className="w-48 h-auto brightness-110"
            />
          </Link>
        </div>

        {/* Desktop Nav Items - Centered */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-7">
          {navData.map((item) => (
            <button
              key={item.key}
              onMouseEnter={() => {
                setActiveMenu(item.key);
                setActiveLeftTab(item.leftTabs[0]?.tab || "Overview");
              }}
              onClick={() => {
                const element = document.getElementById(item.key);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setActiveMenu(null);
                }
              }}
              className={`group relative py-[25px] text-[13px] font-medium transition-all duration-300 ${activeMenu === item.key
                ? "text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${activeMenu === item.key
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                  }`}
              />
            </button>
          ))}
        </nav>

        {/* CTA + Mobile button */}
        <div className="flex items-center gap-6">
          <Link
            to="/apply"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-[13px] font-semibold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white transition-all rounded-full shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transform hover:scale-105"
          >
           Contact
          </Link>

          <button
            className="lg:hidden p-2 text-2xl hover:text-orange-500 transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out border-b border-white/5 ${activeMenu
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 invisible"
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[90rem] mx-auto flex h-[450px]">
          {/* Vertical Sidebar Tabs */}
          <div className="w-[280px] bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] border-r border-white/5">
            <div className="py-8 px-4">
              {leftTabs.map((t) => (
                <button
                  key={t.tab}
                  onMouseEnter={() => setActiveLeftTab(t.tab)}
                  className={`w-full group flex items-center justify-between px-6 py-3.5 mb-1 text-[15px] font-normal rounded-lg transition-all duration-200 ${activeLeftTab === t.tab
                    ? "text-white bg-gradient-to-r from-orange-500/20 to-red-500/10 border-l-2 border-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03] border-l-2 border-transparent"
                    }`}
                >
                  <span>{t.tab}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-200 ${activeLeftTab === t.tab
                      ? "text-orange-500 translate-x-1"
                      : "opacity-0 group-hover:opacity-50"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sub-links Grid */}
          <div className="flex-1 p-10 overflow-y-auto">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-orange-500/90 font-bold">
                <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-transparent" />
                {activeLeftTab}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {activeTabData?.links?.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={() => setActiveMenu(null)}
                  className="group flex items-start gap-3 p-4 rounded-xl hover:bg-white/[0.03] transition-all duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 mt-2 transition-colors" />
                  <div className="flex-1">
                    <span className="text-[15px] font-normal text-gray-300 group-hover:text-white transition-colors leading-snug block">
                      {link.title}
                    </span>
                    <span className="h-[1px] w-0 bg-gradient-to-r from-orange-500 to-transparent transition-all duration-300 group-hover:w-full block mt-1.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Visual Block */}
          <div className="w-80 bg-gradient-to-b from-white/[0.02] to-transparent p-10 hidden xl:flex flex-col justify-between border-l border-white/5">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-orange-500/80 font-bold mb-3">
                Quick Stats
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs text-gray-500">Active Partners</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl font-bold text-white mb-1">10K+</div>
                  <div className="text-xs text-gray-500">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-gray-500 text-xs leading-relaxed italic">
                "Empowering the next generation of business ecosystems through systematic growth."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-[#0a0a0a] z-40 lg:hidden transform transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="px-8 h-full overflow-y-auto pb-20 pt-8">
          {navData.map((item) => (
            <MobileAccordion
              key={item.key}
              label={item.label}
              isOpen={openMobileAccordion === item.key}
              onToggle={() => setOpenMobileAccordion(openMobileAccordion === item.key ? null : item.key)}
            >
              {item.leftTabs.map((t) => (
                <div key={t.tab} className="mb-6">
                  <div className="text-orange-500 text-[10px] uppercase tracking-widest font-bold mb-3 opacity-70">{t.tab}</div>
                  <div className="flex flex-col gap-3">
                    {t.links.map((l) => (
                      <Link key={l.title} to={l.to} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 text-lg font-light hover:text-white">
                        {l.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </MobileAccordion>
          ))}
          <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 mt-8 border border-orange-500 text-orange-500 uppercase tracking-widest font-bold rounded-full">
            Apply / Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileAccordion({ label, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button onClick={onToggle} className="w-full flex justify-between py-5 text-xl font-light tracking-wide uppercase">
        {label}
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>↓</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pl-4 pb-6">{children}</div>
      </div>
    </div>
  );
}