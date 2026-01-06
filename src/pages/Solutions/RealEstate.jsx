import SolutionLayout from "../../components/layout/SolutionLayout/SolutionLayout.jsx";
import {
  Building,
  Paintbrush,
  ClipboardCheck,
  Users,
  Wallet,
  CheckCircle,
} from "lucide-react";

export default function RealEstate() {
  return (
    <SolutionLayout
      /* ================= HERO ================= */
      hero={{
        tag: "Real Estate & Interiors",
        title: "Real Estate & Interior Solutions",
        subtitle:
          "Business-focused real estate and interior execution services.",
        description:
          "Zryoss enables organizations to plan, coordinate, and execute real estate and interior projects smoothly through trusted service partners.",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&fit=crop",
      }}

      /* ================= STATS ================= */
      stats={[
        ["200+", "Projects Delivered"],
        ["100%", "Verified Vendors"],
        ["On-Time", "Delivery Focus"],
        ["Multi-City", "Execution Capability"],
      ]}

      /* ================= WHO THIS IS FOR ================= */
      whoThisIsFor={[
        {
          icon: "🏢",
          title: "Growing Companies",
          desc: "Need office expansion or new workspace setup.",
        },
        {
          icon: "🏗️",
          title: "Enterprises",
          desc: "Managing multi-location real estate & interior projects.",
        },
        {
          icon: "🚀",
          title: "Startups",
          desc: "Setting up cost-effective, functional workspaces.",
        },
      ]}

      /* ================= HIGHLIGHT ================= */
      highlight={{
        badge: "End-to-End Execution",
        title: "Spaces Built for",
        highlightText: " Business Growth",
        description:
          "From planning to final delivery, we ensure every real estate and interior project is executed with clarity, cost control, and consistent quality.",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&fit=crop",
        primaryCTA: "Start a Project",
        secondaryCTA: "View Portfolio",
      }}

      /* ================= PROCESS ================= */
      process={[
        {
          step: "01",
          title: "Requirement & Planning",
          desc: "Understand space needs, budget, and timelines.",
        },
        {
          step: "02",
          title: "Design & Vendor Alignment",
          desc: "Interior concepts, BOQs, and vendor coordination.",
        },
        {
          step: "03",
          title: "Execution & Monitoring",
          desc: "On-ground execution with quality & timeline checks.",
        },
        {
          step: "04",
          title: "Delivery & Handover",
          desc: "Final inspection, snag resolution, and handover.",
        },
      ]}

      /* ================= OFFERINGS ================= */
      offerings={[
        {
          title: "Commercial Space Advisory",
          desc: "Support for identifying, planning, and optimizing office and commercial spaces.",
          icon: <Building className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&fit=crop",
        },
        {
          title: "Interior Design & Execution",
          desc: "End-to-end interior planning and execution through verified partners.",
          icon: <Paintbrush className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&fit=crop",
        },
        {
          title: "Project Coordination",
          desc: "Centralized coordination across designers, vendors, and execution timelines.",
          icon: <ClipboardCheck className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&fit=crop",
        },
        {
          title: "Vendor & Contractor Management",
          desc: "Access to vetted contractors with quality and delivery oversight.",
          icon: <Users className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&fit=crop",
        },
        {
          title: "Cost & Timeline Planning",
          desc: "Structured planning to control execution costs and delivery timelines.",
          icon: <Wallet className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&fit=crop",
        },
        {
          title: "Quality & Delivery Oversight",
          desc: "Execution monitoring aligned with agreed scope and quality standards.",
          icon: <CheckCircle className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1551836026-d5c2d0bb4f64?w=1200&fit=crop",
        },
      ]}

      /* ================= FAQs ================= */
      faqs={[
        {
          q: "Do you handle complete interior execution?",
          a: "Yes, we manage end-to-end execution through trusted vendors.",
        },
        {
          q: "Can you manage projects in multiple cities?",
          a: "Absolutely. We coordinate projects across multiple locations.",
        },
        {
          q: "How do you control costs and timelines?",
          a: "Through structured planning, vendor controls, and regular monitoring.",
        },
      ]}

      /* ================= SUCCESS ================= */
      success={[
        {
          title: "Corporate Office Setup",
          desc: "Delivered a 25,000 sq. ft. workspace on time and on budget.",
        },
        {
          title: "Interior Excellence",
          desc: "Awarded for quality execution and design consistency.",
        },
        {
          title: "Multi-City Rollouts",
          desc: "Executed projects across multiple cities with central control.",
        },
      ]}

      /* ================= CTA ================= */
      cta={{
        title: "Plan & Execute Your Workspace with Confidence",
        desc: "Let Zryoss manage complexity while you focus on business growth.",
        button: "Discuss Your Project",
      }}
    />
  );
}
