import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8 text-sm text-[var(--text-secondary)]">

        <div>
          <h4 className="text-[var(--accent)] font-semibold mb-4">Zryoss</h4>
          <p>
            A business operating platform enabling scalable,
            execution-focused growth.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/company/about">About</Link></li>
            <li><Link to="/company/vision-mission">Vision</Link></li>
            <li><Link to="/company/careers">Careers</Link></li>
            <li><Link to="/company/media">Media</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/resources/blog">Blog</Link></li>
            <li><Link to="/resources/faqs">FAQs</Link></li>
            <li><Link to="/trust/what-zryoss-is-not">Compliance</Link></li>
            <li><Link to="/trust/risk-disclosure">Risk Disclosure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><Link to="/contact">Business Enquiry</Link></li>
            <li><Link to="/apply">Partner Apply</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-[var(--text-muted)] pb-6">
        © {new Date().getFullYear()} Zryoss. All rights reserved.
      </div>
    </footer>
  );
}
