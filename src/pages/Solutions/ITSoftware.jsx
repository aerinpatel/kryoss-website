import SolutionLayout from "../../components/layout/SolutionLayout/SolutionLayout.jsx";
import {
  Code,
  Globe,
  Cloud,
  Settings,
  Link,
  Shield,
} from "lucide-react";

export default function ITSoftware() {
  return (
    <SolutionLayout
      /* ================= HERO ================= */
      hero={{
        tag: "Technology Solutions",
        title: "IT & Software Solutions",
        subtitle:
          "Enterprise-grade technology systems built for scale, security, and performance.",
        description:
          "Zryoss helps businesses design, build, modernize, and manage reliable software and IT infrastructure that supports long-term growth and operational stability.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&fit=crop",
      }}

      /* ================= STATS ================= */
      stats={[
        ["99.9%", "Uptime Reliability"],
        ["24/7", "Monitoring & Support"],
        ["200+", "Projects Delivered"],
        ["ISO 27001", "Security Certified"],
      ]}

      /* ================= WHO THIS IS FOR ================= */
      whoThisIsFor={[
        {
          icon: "🚀",
          title: "Startups & Product Teams",
          desc: "Need to build MVPs, platforms, or products quickly and securely.",
        },
        {
          icon: "🏢",
          title: "Growing Businesses",
          desc: "Looking to scale systems, improve performance, and reduce tech debt.",
        },
        {
          icon: "🔐",
          title: "Enterprise Organizations",
          desc: "Require secure, compliant, and highly available technology systems.",
        },
      ]}

      /* ================= HIGHLIGHT ================= */
      highlight={{
        badge: "Technology That Scales",
        title: "Software Systems Built for",
        highlightText: " Growth & Reliability",
        description:
          "We engineer technology solutions that are scalable, secure, and easy to maintain — enabling businesses to focus on innovation, not infrastructure issues.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&fit=crop",
        primaryCTA: "Start Your Project",
        secondaryCTA: "Request Consultation",
      }}

      /* ================= PROCESS ================= */
      process={[
        {
          step: "01",
          title: "Discovery & Planning",
          desc: "Understand business goals, technical needs, and constraints.",
        },
        {
          step: "02",
          title: "Architecture & Design",
          desc: "Design scalable, secure system architecture and workflows.",
        },
        {
          step: "03",
          title: "Development & Integration",
          desc: "Build, test, and integrate systems with best practices.",
        },
        {
          step: "04",
          title: "Deployment & Support",
          desc: "Launch, monitor, optimize, and provide ongoing support.",
        },
      ]}

      /* ================= OFFERINGS ================= */
      offerings={[
        {
          title: "Custom Software Development",
          desc: "Web, mobile, and enterprise applications tailored to business needs.",
          icon: <Code className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&fit=crop",
        },
        {
          title: "Web & App Development",
          desc: "Modern, scalable, and secure digital platforms.",
          icon: <Globe className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&fit=crop",
        },
        {
          title: "Cloud & Infrastructure",
          desc: "Cloud migration, deployment, and infrastructure management.",
          icon: <Cloud className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&fit=crop",
        },
        {
          title: "Maintenance & Support",
          desc: "Ongoing support, monitoring, and system optimization.",
          icon: <Settings className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&fit=crop",
        },
        {
          title: "System Integration",
          desc: "Seamless integration of tools, APIs, and platforms.",
          icon: <Link className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&fit=crop",
        },
        {
          title: "Security & Compliance",
          desc: "Enterprise-grade security aligned with industry standards.",
          icon: <Shield className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&fit=crop",
        },
      ]}

      /* ================= FAQs ================= */
      faqs={[
        {
          q: "Do you build from scratch or improve existing systems?",
          a: "We do both — from greenfield development to modernization and optimization.",
        },
        {
          q: "How do you ensure security and compliance?",
          a: "We follow industry best practices, secure architecture, and ISO-aligned processes.",
        },
        {
          q: "Can you provide long-term support?",
          a: "Yes, we offer continuous monitoring, maintenance, and support services.",
        },
      ]}

      /* ================= SUCCESS ================= */
      success={[
        {
          title: "FinTech Innovation",
          desc: "Built a scalable payment platform processing $1B+ annually.",
        },
        {
          title: "Healthcare Transformation",
          desc: "Cloud migration serving 2M+ users with near-zero downtime.",
        },
        {
          title: "E-commerce Scalability",
          desc: "Platform handling 10M+ monthly transactions reliably.",
        },
      ]}

      /* ================= CTA ================= */
      cta={{
        title: "Build Technology That Grows With Your Business",
        desc: "Partner with Zryoss to design secure, scalable, and future-ready systems.",
        button: "Start Your Technology Journey",
      }}
    />
  );
}
