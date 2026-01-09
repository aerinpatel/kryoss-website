import HowItWorksSection from "./HowItWorksSection";

export default function GovernanceControl() {
  return (
    <HowItWorksSection
      title="Governance & Control"
      intro="Zryoss enforces governance frameworks to protect partners, clients, and the ecosystem."
      steps={[
        {
          title: "Compliance Standards",
          desc: "Clear policies to prevent unethical or non-compliant practices."
        },
        {
          title: "Quality Assurance",
          desc: "Delivery audits and SLA monitoring."
        },
        {
          title: "Risk Mitigation",
          desc: "Early detection of operational and financial risks."
        }
      ]}
    />
  );
}
