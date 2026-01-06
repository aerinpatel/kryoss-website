import SolutionLayout from "../../components/layout/SolutionLayout/SolutionLayout.jsx";
import {
  BarChart3,
  Search,
  Megaphone,
  PenTool,
  Palette,
  LineChart,
} from "lucide-react";

export default function DigitalMarketing() {
  return (
    <SolutionLayout
      /* ================= HERO ================= */
      hero={{
        tag: "Digital Marketing",
        title: "Digital Marketing Solutions",
        subtitle: "Growth systems designed to generate revenue, not vanity metrics.",
        description:
          "Zryoss helps startups and growing businesses acquire customers, build demand, and scale revenue through structured, performance-driven digital marketing execution.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&fit=crop",
      }}

      /* ================= STATS ================= */
      stats={[
        ["3x+", "Average Revenue Growth"],
        ["60–90 Days", "Visible Performance Impact"],
        ["40%", "Lower Cost per Acquisition"],
        ["300+", "Businesses Supported"],
      ]}

      /* ================= WHO THIS IS FOR ================= */
      whoThisIsFor={[
        {
          icon: "🚀",
          title: "Startup Founders",
          desc: "Founders who need early traction, customer acquisition, and fast learning without burning capital.",
        },
        {
          icon: "📈",
          title: "Growing Businesses",
          desc: "Businesses ready to scale marketing with predictable leads and measurable ROI.",
        },
        {
          icon: "👥",
          title: "Marketing Teams",
          desc: "Internal teams looking for structured execution, reporting, and expert support.",
        },
      ]}

      /* ================= HIGHLIGHT ================= */
      highlight={{
        badge: "Revenue First Approach",
        title: "Marketing That Actually",
        highlightText: " Drives Business Growth",
        description:
          "We focus on metrics that matter — leads, conversions, and revenue — not likes, impressions, or vanity numbers.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&fit=crop",
        primaryCTA: "Talk to an Expert",
        secondaryCTA: "See How It Works",
      }}

      /* ================= OFFERINGS ================= */
      offerings={[
        {
          title: "Search Engine Optimization (SEO)",
          desc: "Build long-term organic traffic that compounds month after month.",
          icon: <Search className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&fit=crop",
        },
        {
          title: "Performance Marketing",
          desc: "ROI-focused paid campaigns across Google and Meta platforms.",
          icon: <BarChart3 className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&fit=crop",
        },
        {
          title: "Social Media Management",
          desc: "Consistent brand presence and engagement across social platforms.",
          icon: <Megaphone className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&fit=crop",
        },
        {
          title: "Content Marketing",
          desc: "Blogs, landing pages, and funnels aligned with customer journeys.",
          icon: <PenTool className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&fit=crop",
        },
        {
          title: "Branding & Creative",
          desc: "Clear messaging, visual identity, and conversion-driven creatives.",
          icon: <Palette className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&fit=crop",
        },
        {
          title: "Analytics & Reporting",
          desc: "Transparent dashboards with actionable insights.",
          icon: <LineChart className="w-6 h-6" />,
          image:
            "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&fit=crop",
        },
      ]}

      /* ================= SUCCESS ================= */
      success={[
        {
          title: "Startup Growth",
          desc: "Scaled from early traction to 5x revenue growth in under 6 months.",
        },
        {
          title: "Brand Authority",
          desc: "Achieved top search rankings in highly competitive industries.",
        },
        {
          title: "Global Expansion",
          desc: "Expanded into international markets using paid and organic channels.",
        },
      ]}
    />
  );
}
