import SolutionLayout from "./SolutionLayout";

export default function RealEstate() {
  return (
    <SolutionLayout
      title="Real Estate & Interior Solutions"
      subtitle="Business-focused real estate and interior execution services."
      description="Zryoss supports organizations with structured real estate
      and interior solutions, enabling smooth planning, coordination, and
      execution through verified service partners."
      offerings={[
        {
          title: "Commercial Space Advisory",
          desc: "Support for identifying and planning office and commercial spaces.",
        },
        {
          title: "Interior Design & Execution",
          desc: "End-to-end interior planning and execution through verified vendors.",
        },
        {
          title: "Project Coordination",
          desc: "Centralized coordination across designers, vendors, and timelines.",
        },
        {
          title: "Vendor & Contractor Management",
          desc: "Access to vetted contractors with quality oversight.",
        },
        {
          title: "Cost & Timeline Planning",
          desc: "Structured planning to control execution costs and timelines.",
        },
        {
          title: "Quality & Delivery Oversight",
          desc: "Execution monitoring aligned with agreed scope and standards.",
        },
      ]}
    />
  );
}
