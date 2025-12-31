import SolutionLayout from "./SolutionLayout";

export default function Legal() {
  return (
    <SolutionLayout
      title="Legal & Compliance Services"
      subtitle="Structured legal support to help businesses operate with confidence and compliance."
      description="Zryoss provides access to professional legal and compliance services
      designed to support businesses across documentation, regulatory
      requirements, and governance needs."
      offerings={[
        {
          title: "Business Registration & Structuring",
          desc: "Support for company incorporation and legal structuring.",
        },
        {
          title: "Contract Drafting & Review",
          desc: "Drafting and review of commercial and employment contracts.",
        },
        {
          title: "Regulatory Compliance",
          desc: "Assistance with regulatory filings and statutory obligations.",
        },
        {
          title: "Policy & Documentation",
          desc: "Internal policies, agreements, and compliance documentation.",
        },
        {
          title: "Risk & Governance Support",
          desc: "Guidance on governance frameworks and risk management.",
        },
        {
          title: "Ongoing Legal Assistance",
          desc: "Access to legal support for day-to-day business needs.",
        },
      ]}
    />
  );
}
