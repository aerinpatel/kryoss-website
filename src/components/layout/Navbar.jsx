import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-orange-400">
          ZRYOSS
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link to="/platform">Platform</Link>
          <Link to="/ecosystem">Ecosystem</Link>
          <Link to="/solutions/it-software">Solutions</Link>
          <Link to="/partnership">Partnership</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/company/about">Company</Link>
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
