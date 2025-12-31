import SolutionLayout from "./SolutionLayout";

export default function DigitalMarketing() {
  return (
    <SolutionLayout
      title="Digital Marketing Solutions"
      subtitle="Data-driven marketing strategies designed for sustainable business growth."
      description="Zryoss delivers structured and performance-oriented digital marketing
      solutions that help organizations strengthen their online presence,
      acquire customers, and build long-term brand value."
      offerings={[
        {
          title: "Search Engine Optimization (SEO)",
          desc: "Technical and content-driven SEO strategies for long-term visibility.",
        },
        {
          title: "Performance Marketing",
          desc: "Paid advertising across search and social platforms with ROI focus.",
        },
        {
          title: "Social Media Management",
          desc: "Brand positioning and engagement across major social platforms.",
        },
        {
          title: "Content Marketing",
          desc: "High-quality content aligned with business and customer goals.",
        },
        {
          title: "Branding & Creative",
          desc: "Visual identity, campaigns, and creative assets for digital channels.",
        },
        {
          title: "Analytics & Reporting",
          desc: "Transparent performance tracking and data-driven insights.",
        },
      ]}
    />
  );
}
