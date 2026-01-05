import SolutionLayout from "./SolutionLayout";

export default function DigitalMarketing() {
  return (
    <SolutionLayout
      title="Digital Marketing Solutions"
      subtitle="Structured, performance-driven marketing for modern businesses."
      description="Zryoss delivers disciplined and ROI-focused digital marketing
      solutions designed for entrepreneurs and growing companies who need
      clarity, execution, and measurable growth — not bloated agency retainers."
      heroImage="https://images.unsplash.com/photo-1557838923-2985c318be48"
      offerings={[
        {
          title: "Search Engine Optimization (SEO)",
          desc: "Technical and content-driven SEO strategies that compound visibility over time.",
        },
        {
          title: "Performance Marketing",
          desc: "ROI-focused paid campaigns across search and social platforms.",
        },
        {
          title: "Social Media Management",
          desc: "Consistent brand presence and engagement across major platforms.",
        },
        {
          title: "Content Marketing",
          desc: "Content systems aligned with customer journeys and business goals.",
        },
        {
          title: "Branding & Creative",
          desc: "Clear messaging, visual identity, and campaign creatives.",
        },
        {
          title: "Analytics & Reporting",
          desc: "Transparent tracking, insights, and performance dashboards.",
        },
      ]}
    />
  );
}
