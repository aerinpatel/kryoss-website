import EcosystemSection from "./EcosystemSection";

export default function Brands() {
  return (
    <EcosystemSection
      title="Brands Under Zryoss"
      intro="Zryoss operates multiple specialized brands, each focused on a specific service vertical while sharing a common operational backbone."
      blocks={[
        {
          title: "Vertical-Specific Brands",
          desc: "Each brand under Zryoss focuses on a dedicated service domain such as HR, IT, marketing, or compliance."
        },
        {
          title: "Central Governance",
          desc: "While brands execute independently, quality, delivery standards, and risk controls are centrally enforced."
        },
        {
          title: "Shared Infrastructure",
          desc: "All brands leverage Zryoss systems for CRM, demos, vendor coordination, and reporting."
        },
        {
          title: "Scalable Expansion",
          desc: "New brands can be launched rapidly without duplicating operational overhead."
        }
      ]}
    />
  );
}
