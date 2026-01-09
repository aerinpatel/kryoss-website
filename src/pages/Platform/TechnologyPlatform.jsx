import PlatformSection from "./PlatformSection";

export default function TechnologyPlatform() {
  return (
    <PlatformSection
      title="Technology Platform"
      intro="Zryoss leverages technology to standardize workflows, manage vendors, and ensure operational visibility across the ecosystem."
      points={[
        "CRM & lead management systems",
        "Vendor and delivery tracking",
        "Reporting and analytics",
        "Security and compliance monitoring"
      ]}
    />
  );
}