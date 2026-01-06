import SolutionLayout from "../../components/layout/SolutionLayout/SolutionLayout.jsx";
import {
  Scale,
  FileText,
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  Gavel,
} from "lucide-react";

export default function Legal() {
  return (
    <SolutionLayout
      /* ================= HERO ================= */
      hero={{
        tag: "Legal & Compliance",
        title: "Legal & Compliance Services",
        subtitle:
          "Structured legal support to help businesses operate with confidence and compliance.",
        description:
          "Zryoss provides reliable legal and compliance services covering business registration, documentation, regulatory filings, and governance — helping organizations reduce risk and operate smoothly.",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&fit=crop",
      }}

      /* ================= STATS ================= */
      stats={[
        ["100%", "Compliance Accuracy"],
        ["500+", "Legal Documents Managed"],
        ["24/7", "Advisory Support"],
        ["10+", "Industries Served"],
      ]}

      /* ================= WHO THIS IS FOR ================= */
      whoThisIsFor={[
        {
          icon: "🚀",
          title: "Startups & Founders",
          desc: "Need incorporation, contracts, and compliance from day one.",
        },
        {
          icon: "🏢",
          title: "Growing Businesses",
          desc: "Require structured legal frameworks as operations scale.",
        },
        {
          icon: "⚖️",
          title: "Enterprises",
          desc: "Need ongoing compliance, governance, and risk management.",
        },
      ]}

      /* ================= HIGHLIGHT ================= */
      highlight={{
        badge: "Business Protection",
        title: "Legal Support You Can",
        highlightText: " Rely On",
        description:
          "We help businesses stay compliant, reduce legal exposure, and operate confidently through structured legal processes and expert guidance.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&fit=crop",
        primaryCTA: "Get Legal Support",
        secondaryCTA: "View Services",
      }}

      /* ================= PROCESS ================= */
      process={[
        {
          step: "01",
          title: "Assessment",
          desc: "Understand business structure, risks, and compliance gaps.",
        },
        {
          step: "02",
          title: "Documentation",
          desc: "Prepare contracts, policies, and regulatory documents.",
        },
        {
          step: "03",
          title: "Compliance Execution",
          desc: "Handle filings, registrations, and statutory obligations.",
        },
        {
          step: "04",
          title: "Ongoing Advisory",
          desc: "Continuous legal support as business evolves.",
        },
      ]}

      /* ================= OFFERINGS ================= */
      offerings={[
        {
          title: "Business Registration & Structuring",
          desc: "Company incorporation, structuring, and foundational legal setup.",
          icon: <Scale className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&fit=crop",
        },
        {
          title: "Contract Drafting & Review",
          desc: "Commercial, vendor, and employment contracts reviewed by experts.",
          icon: <FileText className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&fit=crop",
        },
        {
          title: "Regulatory Compliance",
          desc: "Support for licenses, filings, and statutory obligations.",
          icon: <ShieldCheck className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&fit=crop",
        },
        {
          title: "Policy & Documentation",
          desc: "Internal policies, agreements, and compliance documentation.",
          icon: <ClipboardList className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&fit=crop",
        },
        {
          title: "Risk & Governance Support",
          desc: "Governance frameworks and proactive risk management guidance.",
          icon: <AlertTriangle className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1551836026-d5c2d0bb4f64?w=1200&fit=crop",
        },
        {
          title: "Ongoing Legal Assistance",
          desc: "Day-to-day legal advisory support for business operations.",
          icon: <Gavel className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1200&fit=crop",
        },
      ]}

      /* ================= FAQs ================= */
      faqs={[
        {
          q: "Do you support startups and small businesses?",
          a: "Yes, we work with startups, SMEs, and enterprises at all stages.",
        },
        {
          q: "Can you manage ongoing compliance?",
          a: "Absolutely. We provide continuous compliance and advisory support.",
        },
        {
          q: "Do you offer customized legal services?",
          a: "Yes, services are tailored based on business size and industry.",
        },
      ]}

      /* ================= SUCCESS ================= */
      success={[
        {
          title: "Startup Compliance",
          desc: "Enabled 100% compliance during rapid business scaling.",
        },
        {
          title: "Risk Mitigation",
          desc: "Prevented legal exposure through structured contracts.",
        },
        {
          title: "Multi-Region Governance",
          desc: "Managed compliance across multiple jurisdictions.",
        },
      ]}

      /* ================= CTA ================= */
      cta={{
        title: "Protect Your Business with the Right Legal Support",
        desc: "Stay compliant, reduce risk, and focus on growth with Zryoss.",
        button: "Talk to a Legal Expert",
      }}
    />
  );
}
