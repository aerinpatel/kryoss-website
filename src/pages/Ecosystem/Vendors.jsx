import EcosystemSection from "./EcosystemSection";

export default function Vendors() {
  return (
    <EcosystemSection
      title="Vendor Network"
      intro="Zryoss works with a large network of vetted vendors who execute service delivery under defined standards and SLAs."
      blocks={[
        {
          title: "Vetted Delivery Partners",
          desc: "All vendors are onboarded through a structured evaluation covering capability, reliability, and compliance."
        },
        {
          title: "Centralized Coordination",
          desc: "Zryoss manages vendor allocation, timelines, and delivery coordination to reduce partner risk."
        },
        {
          title: "Quality & SLA Enforcement",
          desc: "Performance is continuously monitored to ensure adherence to agreed service levels."
        },
        {
          title: "Asset-Light Execution",
          desc: "The vendor network enables scalable delivery without heavy internal hiring."
        }
      ]}
    />
  );
}
