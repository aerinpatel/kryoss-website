import SolutionLayout from "../../components/layout/SolutionLayout/SolutionLayout.jsx";
import {
  Calculator,
  ShieldCheck,
  FileText,
  ClipboardCheck,
  Wallet,
  Settings,
} from "lucide-react";

export default function Payroll() {
  return (
    <SolutionLayout
      /* ================= HERO ================= */
      hero={{
        tag: "Payroll & Compliance",
        title: "Payroll & Compliance Solutions",
        subtitle:
          "Accurate, compliant, and scalable payroll management for modern organizations.",
        description:
          "Zryoss delivers structured payroll and compliance solutions that help organizations manage employee compensation, statutory requirements, and reporting with confidence and control.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&fit=crop",
      }}

      /* ================= STATS ================= */
      stats={[
        ["100%", "Compliance Accuracy"],
        ["99.9%", "Payroll Precision"],
        ["24/7", "Support Availability"],
        ["1000+", "Payrolls Managed"],
      ]}

      /* ================= WHO THIS IS FOR ================= */
      whoThisIsFor={[
        {
          icon: "🚀",
          title: "Startups",
          desc: "Need compliant payroll without building an in-house team.",
        },
        {
          icon: "🏢",
          title: "Growing Companies",
          desc: "Managing payroll complexity as team size increases.",
        },
        {
          icon: "🌍",
          title: "Enterprises",
          desc: "Multi-location payroll with strict compliance requirements.",
        },
      ]}

      /* ================= HIGHLIGHT ================= */
      highlight={{
        badge: "Zero Error Payroll",
        title: "Payroll You Can",
        highlightText: " Trust",
        description:
          "From salary processing to statutory filings, we ensure every payroll cycle runs smoothly, accurately, and fully compliant with labor regulations.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&fit=crop",
        primaryCTA: "Start Payroll",
        secondaryCTA: "View Process",
      }}

      /* ================= PROCESS ================= */
      process={[
        {
          step: "01",
          title: "Payroll Setup",
          desc: "Employee data, salary structures, and statutory mapping.",
        },
        {
          step: "02",
          title: "Monthly Processing",
          desc: "Salary calculation, deductions, and approvals.",
        },
        {
          step: "03",
          title: "Compliance Filing",
          desc: "PF, ESI, TDS, PT filings and challans.",
        },
        {
          step: "04",
          title: "Reporting & Support",
          desc: "Payslips, reports, audits, and ongoing support.",
        },
      ]}

      /* ================= OFFERINGS ================= */
      offerings={[
        {
          title: "Payroll Processing",
          desc: "End-to-end payroll execution with accuracy and transparency.",
          icon: <Calculator className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&fit=crop",
        },
        {
          title: "Statutory Compliance",
          desc: "PF, ESI, TDS, PT, and all statutory obligations handled seamlessly.",
          icon: <ShieldCheck className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&fit=crop",
        },
        {
          title: "Payslip & Reporting",
          desc: "Automated payslips with transparent and audit-ready reports.",
          icon: <FileText className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1581091012184-5c7c8a1a4b8b?w=1200&fit=crop",
        },
        {
          title: "Compliance Documentation",
          desc: "Secure maintenance of payroll records and documentation.",
          icon: <ClipboardCheck className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&fit=crop",
        },
        {
          title: "Employee Reimbursements",
          desc: "Structured handling of reimbursements and adjustments.",
          icon: <Wallet className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&fit=crop",
        },
        {
          title: "Process Governance",
          desc: "Standardized payroll workflows aligned with regulations.",
          icon: <Settings className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1551836026-d5c2d0bb4f64?w=1200&fit=crop",
        },
      ]}

      /* ================= FAQs ================= */
      faqs={[
        {
          q: "Do you handle PF, ESI, and TDS filings?",
          a: "Yes, we manage all statutory filings and ensure timely compliance.",
        },
        {
          q: "Is payroll suitable for startups?",
          a: "Absolutely. Our systems are designed for startups and scale as you grow.",
        },
        {
          q: "Can you support multi-location payroll?",
          a: "Yes, we manage payroll across states with varying compliance rules.",
        },
      ]}

      /* ================= SUCCESS ================= */
      success={[
        {
          title: "Startup Payroll",
          desc: "Scaled payroll from 20 to 500 employees without errors.",
        },
        {
          title: "Compliance Excellence",
          desc: "100% statutory compliance across multiple states.",
        },
        {
          title: "Enterprise Operations",
          desc: "Managed multi-location payroll with automated reporting.",
        },
      ]}

      /* ================= CTA ================= */
      cta={{
        title: "Simplify Payroll & Stay Compliant",
        desc: "Let Zryoss handle payroll complexity while you focus on growth.",
        button: "Schedule Payroll Consultation",
      }}
    />
  );
}
