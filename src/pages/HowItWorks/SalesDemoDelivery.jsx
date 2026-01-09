import HowItWorksSection from "./HowItWorksSection";

export default function SalesDemoDelivery() {
  return (
    <HowItWorksSection
      title="Sales → Demo → Delivery Flow"
      intro="Every engagement on Zryoss follows a structured flow to reduce risk and ensure predictable outcomes."
      steps={[
        {
          title: "Sales Initiation",
          desc: "Partner acquires the client and captures requirements."
        },
        {
          title: "Central Demo & Validation",
          desc: "Zryoss demo team validates feasibility and scope."
        },
        {
          title: "Managed Delivery",
          desc: "Execution is handled via approved brands and vendors."
        },
        {
          title: "Ongoing Oversight",
          desc: "Quality, SLA, and compliance are continuously monitored."
        }
      ]}
    />
  );
}
