import HowItWorksSection from "./HowItWorksSection";

export default function RolesResponsibilities() {
  return (
    <HowItWorksSection
      title="Roles & Responsibilities"
      intro="Clear role separation ensures accountability across the Zryoss ecosystem."
      steps={[
        {
          title: "Zryoss Platform",
          desc: "Operations, governance, quality control, and vendor management."
        },
        {
          title: "IPP Partners",
          desc: "Business ownership, sales strategy, and team leadership."
        },
        {
          title: "BPP & Sales Teams",
          desc: "Lead generation and deal closures."
        },
        {
          title: "Vendors",
          desc: "Service delivery under defined SLAs."
        }
      ]}
    />
  );
}
