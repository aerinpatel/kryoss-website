import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  LayoutGrid,
  Network,
  Handshake,
  Lightbulb,
  Settings,
  Building2,
  BookOpen,
  Cpu,
  Shield,
  Workflow,
  Sparkles,
  Rocket,
  FileText,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/**
 * ✅ FINAL ZRYOSS NAVBAR (Helius style)
 * - Exactly 7 business menus
 * - Dropdown opens under parent
 * - Dropdown auto width based on content
 * - Cursor leave dropdown -> close
 * - Click outside closes dropdown
 * - All pages preserved
 */

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [dropdownX, setDropdownX] = useState(0);
  const [pointerX, setPointerX] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(980);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);
  const dropdownPanelRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const DROPDOWN_GAP_TOP = 14;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setOpenMobileAccordion(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // ✅ click outside closes dropdown
  useEffect(() => {
    const handleOutside = (e) => {
      if (!activeMenu) return;

      const navEl = navRef.current;
      const ddEl = dropdownPanelRef.current;

      if ((navEl && navEl.contains(e.target)) || (ddEl && ddEl.contains(e.target))) return;

      setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [activeMenu]);

  // ✅ FINAL menus
  const navData = [
    {
      label: "Platform",
      key: "platform",
      columns: [
        {
          heading: "Platform",
          links: [
            { title: "What is Zryoss", to: "/platform/what-is-zryoss", icon: <Sparkles className="w-4 h-4" /> },
            { title: "Zryoss Business Operating Platform", to: "/platform/business-platform", icon: <LayoutGrid className="w-4 h-4" /> },
            { title: "How Zryoss Works (End-to-End)", to: "/platform/how-it-works", icon: <Workflow className="w-4 h-4" /> },
            { title: "Zryoss Methodology", to: "/platform/methodology", icon: <Rocket className="w-4 h-4" /> },
            { title: "Sales Enablement & Demo System", to: "/platform/sales-enablement", icon: <FileText className="w-4 h-4" /> },
            { title: "Centralized Operations Model", to: "/platform/operations-model", icon: <Settings className="w-4 h-4" /> },
            { title: "Technology & Automation Platform", to: "/platform/technology", icon: <Cpu className="w-4 h-4" /> },
            { title: "Brand Launch & Support Framework", to: "/platform/brand-launch", icon: <ArrowRight className="w-4 h-4" /> },
          ],
        },
      ],
    },

    {
      label: "Ecosystem",
      key: "ecosystem",
      columns: [
        {
          heading: "Ecosystem",
          links: [
            { title: "Ecosystem Overview", to: "/ecosystem/overview", icon: <Network className="w-4 h-4" /> },
            { title: "Zryoss Operating System", to: "/ecosystem/operating-system", icon: <LayoutGrid className="w-4 h-4" /> },
            { title: "Partner & Vendor Network", to: "/ecosystem/vendors", icon: <Users className="w-4 h-4" /> },
            { title: "Account Management Model", to: "/ecosystem/account-management", icon: <Shield className="w-4 h-4" /> },
            { title: "Ecosystem Scale Roadmap", to: "/ecosystem/roadmap", icon: <Rocket className="w-4 h-4" /> },
          ],
        },
        {
          heading: "Core Execution Brands",
          links: [
            { title: "Kryoss Softech", to: "/ecosystem/brands/kryoss-softech", icon: <Building2 className="w-4 h-4" /> },
            { title: "Clink HR", to: "/ecosystem/brands/clink-hr", icon: <Building2 className="w-4 h-4" /> },
            { title: "Vyombiz", to: "/ecosystem/brands/vyombiz", icon: <Building2 className="w-4 h-4" /> },
            { title: "Edulinker", to: "/ecosystem/brands/edulinker", icon: <Building2 className="w-4 h-4" /> },
            { title: "Medikryoss", to: "/ecosystem/brands/medikryoss", icon: <Building2 className="w-4 h-4" /> },
          ],
        },
      ],
    },

    {
      label: "Partnership",
      key: "partnership",
      columns: [
        {
          heading: "Partnership Overview",
          links: [
            { title: "Partnership Overview", to: "/partnership", icon: <Handshake className="w-4 h-4" /> },
            { title: "Partnership Philosophy", to: "/partnership/philosophy", icon: <Lightbulb className="w-4 h-4" /> },
            { title: "Brand Ownership Model", to: "/partnership/brand-ownership", icon: <Building2 className="w-4 h-4" /> },
            { title: "Execution & Support Scope", to: "/partnership/support-scope", icon: <Settings className="w-4 h-4" /> },
            { title: "Engagement Lifecycle", to: "/partnership/lifecycle", icon: <Workflow className="w-4 h-4" /> },
          ],
        },
        {
          heading: "IPP – Independent Prime Partner",
          links: [
            { title: "IPP Overview", to: "/partnership/ipp", icon: <LayoutGrid className="w-4 h-4" /> },
            { title: "Brand Creation for IPP", to: "/partnership/ipp/brand-creation", icon: <Rocket className="w-4 h-4" /> },
            { title: "IPP Business Model & Charges", to: "/partnership/ipp/business-model", icon: <FileText className="w-4 h-4" /> },
            { title: "IPP Operations Managed by Zryoss", to: "/partnership/ipp/operations", icon: <Settings className="w-4 h-4" /> },
            { title: "IPP Client Handling & Demo Support", to: "/partnership/ipp/support", icon: <Users className="w-4 h-4" /> },
            { title: "IPP Sub-Partner Model (Limited Levels)", to: "/partnership/ipp/sub-partner", icon: <Network className="w-4 h-4" /> },
            { title: "IPP Account Management (6 Months)", to: "/partnership/ipp/account-management", icon: <Shield className="w-4 h-4" /> },
          ],
        },
        {
          heading: "BPP – Independent Business Partner",
          links: [
            { title: "BPP Overview", to: "/partnership/bpp", icon: <LayoutGrid className="w-4 h-4" /> },
            { title: "Multi-Vertical Business Model (3 Verticals)", to: "/partnership/bpp/business-model", icon: <FileText className="w-4 h-4" /> },
            { title: "Brand & Business Setup by Zryoss", to: "/partnership/bpp/setup", icon: <Rocket className="w-4 h-4" /> },
            { title: "BPP Operations & Demo Authority", to: "/partnership/bpp/operations", icon: <Settings className="w-4 h-4" /> },
            { title: "BPP IPP Creation & Management", to: "/partnership/bpp/ipp-management", icon: <Network className="w-4 h-4" /> },
            { title: "BPP Revenue & Scale Model", to: "/partnership/bpp/revenue-model", icon: <Shield className="w-4 h-4" /> },
            { title: "BPP Dedicated Account Manager", to: "/partnership/bpp/account-manager", icon: <Users className="w-4 h-4" /> },
          ],
        },
      ],
    },

    {
      label: "Solutions",
      key: "solutions",
      columns: [
        {
          heading: "Solutions",
          links: [
            { title: "Solutions Overview", to: "/solutions", icon: <LayoutGrid className="w-4 h-4" /> },
            { title: "IT & Software Solutions", to: "/solutions/it-software", icon: <Cpu className="w-4 h-4" /> },
            { title: "HR & Recruitment Solutions", to: "/solutions/hr-recruitment", icon: <Users className="w-4 h-4" /> },
            { title: "Digital Marketing Solutions", to: "/solutions/digital-marketing", icon: <Rocket className="w-4 h-4" /> },
            { title: "Business Consulting & Setup", to: "/solutions/business-consulting", icon: <Lightbulb className="w-4 h-4" /> },
            { title: "Legal & Compliance Services", to: "/solutions/legal-compliance", icon: <Shield className="w-4 h-4" /> },
            { title: "Real Estate & Interior Solutions", to: "/solutions/real-estate-interior", icon: <Building2 className="w-4 h-4" /> },
            { title: "Custom Industry Solutions", to: "/solutions/custom-industry", icon: <ArrowRight className="w-4 h-4" /> },
          ],
        },
      ],
    },

    {
      label: "Operations",
      key: "operations",
      columns: [
        {
          heading: "Operations",
          links: [
            { title: "Operations Overview", to: "/operations", icon: <Settings className="w-4 h-4" /> },
            { title: "Client Onboarding Process", to: "/operations/onboarding", icon: <Workflow className="w-4 h-4" /> },
            { title: "Delivery & Execution Management", to: "/operations/delivery", icon: <Rocket className="w-4 h-4" /> },
            { title: "Quality Assurance Framework", to: "/operations/quality-assurance", icon: <Shield className="w-4 h-4" /> },
            { title: "Account Management & Support", to: "/operations/account-management", icon: <Users className="w-4 h-4" /> },
            { title: "Vendor Coordination Model", to: "/operations/vendor-coordination", icon: <Network className="w-4 h-4" /> },
            { title: "Reporting & Performance Tracking", to: "/operations/reporting", icon: <FileText className="w-4 h-4" /> },
          ],
        },
      ],
    },

    {
      label: "Resources",
      key: "resources",
      columns: [
        {
          heading: "Resources",
          links: [
            { title: "Blog / Insights", to: "/resources/blog", icon: <BookOpen className="w-4 h-4" /> },
            { title: "FAQs", to: "/resources/faqs", icon: <FileText className="w-4 h-4" /> },
          ],
        },
      ],
    },

    {
      label: "Company",
      key: "company",
      columns: [
        {
          heading: "Company",
          links: [
            { title: "About Zryoss", to: "/company/about", icon: <Building2 className="w-4 h-4" /> },
            { title: "Vision & Leadership", to: "/company/vision-leadership", icon: <Users className="w-4 h-4" /> },
            { title: "Ethics & Governance", to: "/company/ethics-governance", icon: <Shield className="w-4 h-4" /> },
            { title: "Risk Disclosure", to: "/company/risk-disclosure", icon: <FileText className="w-4 h-4" /> },
            { title: "Disclaimer", to: "/company/disclaimer", icon: <BookOpen className="w-4 h-4" /> },
          ],
        },
      ],
    },
  ];

  const activeConfig = navData.find((n) => n.key === activeMenu);

  // dropdown width based on columns
  const getWidthByColumns = (cols) => {
    if (!cols) return 700;
    if (cols.length === 1) return 560;
    if (cols.length === 2) return 980;
    return 1280;
  };

  // ✅ Position dropdown so it never goes out of screen
  const openDropdown = (key, e) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    const config = navData.find((n) => n.key === key);
    const desiredWidth = getWidthByColumns(config?.columns);

    const btnRect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();

    const containerLeft = navRect?.left || 0;
    const containerWidth = navRect?.width || window.innerWidth;

    const realWidth = Math.min(desiredWidth, containerWidth - 20);

    const desiredLeft = btnRect.left - containerLeft - realWidth / 2 + btnRect.width / 2;

    const minLeft = 10;
    const maxLeft = containerWidth - realWidth - 10;

    const clampedLeft = Math.max(minLeft, Math.min(desiredLeft, maxLeft));

    // pointer align to button center inside dropdown
    const btnCenter = btnRect.left - containerLeft + btnRect.width / 2;
    const pX = Math.max(26, Math.min(btnCenter - clampedLeft, realWidth - 26));

    setDropdownWidth(realWidth);
    setDropdownX(clampedLeft);
    setPointerX(pX);
    setActiveMenu(key);
  };

  const closeDropdownSmooth = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 130);
  };

  const closeDropdownInstant = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(null);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-xl border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
          : "bg-[#050505]/65 backdrop-blur-md border-white/5"
      }`}
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between text-white">
        {/* Home (Logo) */}
        <Link to="/" className="flex items-center gap-3 relative z-50">
          <img
            src="/Zryoss_logo_2_white.jpg"
            alt="Zryoss Logo"
            className="h-10 w-auto object-contain brightness-110"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" onMouseLeave={closeDropdownSmooth}>
          {navData.map((item) => {
            const isActive = activeMenu === item.key;

            return (
              <button
                key={item.key}
                onMouseEnter={(e) => openDropdown(item.key, e)}
                onClick={() => setActiveMenu(isActive ? null : item.key)}
                className={`relative flex items-center gap-1.5 text-[15px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? "rotate-180 text-white" : "text-white/60"
                  }`}
                />

                {/* underline + glow */}
                <span
                  className={`absolute -bottom-[27px] left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  className={`absolute -bottom-[30px] left-1/2 -translate-x-1/2 w-16 h-8 blur-xl bg-orange-500/40 transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/apply"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-[14px] font-semibold transition shadow-[0_0_18px_rgba(234,88,12,0.25)] hover:shadow-[0_0_26px_rgba(234,88,12,0.45)]"
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

      {/* Dropdown */}
      <div
        className={`absolute top-[76px] left-0 w-full transition-all duration-150 ${
          activeMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={dropdownPanelRef}
            className={`relative origin-top transition-all duration-150 ${
              activeMenu
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-2 scale-[0.98] opacity-0"
            }`}
            style={{
              marginTop: DROPDOWN_GAP_TOP,
              width: `${dropdownWidth}px`,
              left: `${dropdownX}px`,
            }}
            onMouseEnter={() => closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current)}
            onMouseLeave={closeDropdownInstant} // ✅ close on cursor out
          >
            {/* pointer */}
            <div className="absolute -top-2" style={{ left: `${pointerX - 10}px` }}>
              <div className="w-5 h-5 rotate-45 bg-[#0b0b0b] border border-white/10" />
            </div>

            {/* panel */}
            <div className="rounded-3xl border border-white/10 bg-[#0b0b0b]/96 backdrop-blur-2xl shadow-[0_35px_80px_rgba(0,0,0,0.75)] overflow-hidden">
              <div
                className={`grid ${
                  activeConfig?.columns?.length === 1
                    ? "grid-cols-1"
                    : activeConfig?.columns?.length === 2
                    ? "grid-cols-1 lg:grid-cols-2"
                    : "grid-cols-1 lg:grid-cols-3"
                }`}
              >
                {activeConfig?.columns?.map((col, idx) => (
                  <div
                    key={col.heading}
                    className={`p-8 ${
                      idx !== 0 ? "border-t lg:border-t-0 lg:border-l border-white/10" : ""
                    }`}
                  >
                    <MegaColumn column={col} onNavigate={() => setActiveMenu(null)} />
                  </div>
                ))}
              </div>
            </div>

            {/* glow */}
            <div className="absolute -inset-8 -z-10 blur-3xl opacity-50 bg-gradient-to-r from-orange-500/20 via-red-500/10 to-transparent rounded-[70px]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] bg-[#050505] z-40 lg:hidden transform transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full overflow-y-auto pb-20 pt-8">
          {navData.map((item) => (
            <MobileAccordion
              key={item.key}
              label={item.label}
              isOpen={openMobileAccordion === item.key}
              onToggle={() =>
                setOpenMobileAccordion(openMobileAccordion === item.key ? null : item.key)
              }
            >
              {item.columns?.map((col) => (
                <div key={col.heading} className="mb-6">
                  <div className="text-orange-500 text-[10px] uppercase tracking-widest font-bold mb-3 opacity-70">
                    {col.heading}
                  </div>

                  <div className="flex flex-col gap-2">
                    {col.links.map((l) => (
                      <Link
                        key={l.title}
                        to={l.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-gray-300 text-lg font-light hover:text-white rounded-xl px-3 py-2 hover:bg-white/5 transition"
                      >
                        <span className="text-orange-500/80">{l.icon}</span>
                        {l.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </MobileAccordion>
          ))}

          <Link
            to="/apply"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-4 mt-8 border border-orange-500 text-orange-500 uppercase tracking-widest font-bold rounded-full"
          >
            Apply / Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

/* Mega Column */
function MegaColumn({ column, onNavigate }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.25em] text-white/45 mb-5 font-semibold">
        {column.heading}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {column.links.map((link) => (
          <Link
            key={link.title}
            to={link.to}
            onClick={onNavigate}
            className="group flex items-start gap-3 rounded-2xl px-3 py-2 hover:bg-white/5 transition"
          >
            <span className="mt-0.5 text-orange-500/90 group-hover:text-orange-400 transition">
              {link.icon}
            </span>

            <span className="text-[15px] text-white/80 group-hover:text-white transition leading-snug">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* Mobile Accordion */
function MobileAccordion({ label, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between py-5 text-[18px] font-light tracking-wide uppercase text-white/90"
      >
        {label}
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-2 pb-6">{children}</div>
      </div>
    </div>
  );
}
