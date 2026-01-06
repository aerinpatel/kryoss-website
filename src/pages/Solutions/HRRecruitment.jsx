import SolutionLayout from "../../components/layout/SolutionLayout/SolutionLayout.jsx";
import {
  Users,
  FileSearch,
  Building2,
  ClipboardList,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

export default function HRRecruitment() {
  return (
    <SolutionLayout
      /* ================= HERO ================= */
      hero={{
        tag: "Human Resources",
        title: "HR & Recruitment Solutions",
        subtitle:
          "Structured hiring and workforce systems built for growing organizations.",
        description:
          "Zryoss helps companies attract, hire, onboard, and manage talent through scalable HR and recruitment processes — without operational chaos.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&fit=crop",
      }}

      /* ================= STATS ================= */
      stats={[
        ["95%", "Hiring Success Rate"],
        ["30 Days", "Average Time to Hire"],
        ["500+", "Organizations Supported"],
        ["100%", "Process Compliance"],
      ]}

      /* ================= WHO THIS IS FOR ================= */
      whoThisIsFor={[
        {
          icon: "🚀",
          title: "Startups & Founders",
          desc: "Need fast hiring without building a full internal HR team.",
        },
        {
          icon: "🏢",
          title: "Growing Companies",
          desc: "Scaling teams across roles while maintaining compliance.",
        },
        {
          icon: "👥",
          title: "Enterprise HR Teams",
          desc: "Looking to streamline hiring and workforce operations.",
        },
      ]}

      /* ================= HIGHLIGHT ================= */
      highlight={{
        badge: "People First Approach",
        title: "Hiring Systems Built for",
        highlightText: " Scale & Stability",
        description:
          "We don’t just fill positions. We design hiring and HR systems that support long-term growth, reduce attrition, and ensure compliance.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&fit=crop",
        primaryCTA: "Start Hiring",
        secondaryCTA: "View Our Process",
      }}

      /* ================= PROCESS ================= */
      process={[
        {
          step: "01",
          title: "Requirement Analysis",
          desc: "Understand role needs, culture fit, and hiring timelines.",
        },
        {
          step: "02",
          title: "Talent Sourcing",
          desc: "Source candidates through structured and verified channels.",
        },
        {
          step: "03",
          title: "Screening & Selection",
          desc: "Shortlisting, interviews, and candidate validation.",
        },
        {
          step: "04",
          title: "Onboarding & Compliance",
          desc: "Smooth joining, documentation, and policy alignment.",
        },
      ]}

      /* ================= OFFERINGS ================= */
      offerings={[
        {
          title: "Talent Acquisition",
          desc: "Permanent and contract hiring across roles and industries.",
          icon: <Users className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&fit=crop",
        },
        {
          title: "Recruitment Process Outsourcing (RPO)",
          desc: "End-to-end recruitment lifecycle management.",
          icon: <FileSearch className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&fit=crop",
        },
        {
          title: "HR Consulting",
          desc: "Policies, compliance support, and workforce planning.",
          icon: <Building2 className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&fit=crop",
        },
        {
          title: "Staffing Solutions",
          desc: "Flexible staffing models for dynamic business needs.",
          icon: <ClipboardList className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&fit=crop",
        },
        {
          title: "Onboarding & Documentation",
          desc: "Structured joining processes with compliance alignment.",
          icon: <BadgeCheck className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=1200&fit=crop",
        },
        {
          title: "Payroll & Compliance Support",
          desc: "Coordination for payroll and statutory requirements.",
          icon: <ShieldCheck className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&fit=crop",
        },
      ]}

      /* ================= FAQs ================= */
      faqs={[
        {
          q: "How quickly can you close positions?",
          a: "Most roles are closed within 2–4 weeks depending on complexity.",
        },
        {
          q: "Do you handle compliance and documentation?",
          a: "Yes, onboarding and statutory compliance are part of our process.",
        },
        {
          q: "Can you support bulk or multi-location hiring?",
          a: "Absolutely. We specialize in scalable and distributed hiring.",
        },
      ]}

      /* ================= SUCCESS ================= */
      success={[
        {
          title: "Startup Scaling",
          desc: "Scaled teams from 20 to 200 employees within a year.",
        },
        {
          title: "Compliance Excellence",
          desc: "Maintained 100% statutory compliance across regions.",
        },
        {
          title: "Enterprise Hiring",
          desc: "Managed multi-location hiring with consistent quality.",
        },
      ]}

      /* ================= CTA ================= */
      cta={{
        title: "Build Strong Teams Without Hiring Chaos",
        desc: "Let Zryoss manage your hiring and HR operations with clarity and control.",
        button: "Get HR Support",
      }}
    />
  );
}
