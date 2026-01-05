import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/assets/image.jpg"
            alt="Zryoss Logo"
            className="h-20 w-auto object-contain"
          />
          <span className="text-xl font-bold text-white tracking-wide">
            
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">

          <Link to="/platform">Platform</Link>
          <Link to="/ecosystem">Ecosystem</Link>

          {/* SOLUTIONS */}
          <div className="relative group">
            <span className="cursor-pointer">Solutions</span>
            <Dropdown>
              <NavItem to="/solutions/it-software">IT & Software</NavItem>
              <NavItem to="/solutions/hr">HR & Recruitment</NavItem>
              <NavItem to="/solutions/digital-marketing">Digital Marketing</NavItem>
              <NavItem to="/solutions/payroll">Payroll</NavItem>
              <NavItem to="/solutions/legal">Legal</NavItem>
              <NavItem to="/solutions/real-estate">Real Estate</NavItem>
            </Dropdown>
          </div>

          {/* PARTNERSHIP */}
          <div className="relative group">
            <span className="cursor-pointer">Partnership</span>
            <Dropdown>
              <NavItem to="/partnership">Overview</NavItem>
              <NavItem to="/partnership/ipp">IPP</NavItem>
              <NavItem to="/partnership/bpp">BPP</NavItem>
              <NavItem to="/partnership/comparison">IPP vs BPP</NavItem>
            </Dropdown>
          </div>

          {/* RESOURCES */}
          <div className="relative group">
            <span className="cursor-pointer">Resources</span>
            <Dropdown>
              <NavItem to="/resources/blog">Blog</NavItem>
              <NavItem to="/resources/faqs">FAQs</NavItem>
              <NavItem to="/resources/knowledge-center">Knowledge Center</NavItem>
              <NavItem to="/resources/partner-guidelines">Guidelines</NavItem>
            </Dropdown>
          </div>

          {/* COMPANY */}
          <div className="relative group">
            <span className="cursor-pointer">Company</span>
            <Dropdown>
              <NavItem to="/company/about">About</NavItem>
              <NavItem to="/company/founder-note">Founder</NavItem>
              <NavItem to="/company/vision-mission">Vision</NavItem>
              <NavItem to="/company/careers">Careers</NavItem>
              <NavItem to="/company/media">Media</NavItem>
            </Dropdown>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:border-orange-400"
          >
            Contact
          </Link>
          <Link
            to="/apply"
            className="px-4 py-2 text-sm bg-orange-500 text-black rounded-lg"
          >
            Apply
          </Link>
        </div>

      </nav>
    </header>
  );
}

/* 🔽 DROPDOWN */
function Dropdown({ children }) {
  return (
    <div className="absolute top-full left-0 mt-3 min-w-[220px]
      bg-black border border-white/10 rounded-xl shadow-lg py-2
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200 z-50">
      {children}
    </div>
  );
}

/* 🔗 NAV ITEM */
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-sm text-gray-300
      hover:bg-orange-500/10 hover:text-orange-400"
    >
      {children}
    </Link>
  );
}
