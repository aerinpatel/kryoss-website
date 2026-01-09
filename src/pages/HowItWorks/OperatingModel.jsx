import HowItWorksSection from "./HowItWorksSection";

export default function OperatingModel() {
  return (
    <HowItWorksSection
      title="Operating Model"
      intro="Zryoss operates on a centralized platform model where sales, execution, and governance are clearly separated for scalability and control."
      steps={[
        {
          title: "Central Platform Layer",
          desc: "Zryoss manages systems, governance, and delivery oversight."
        },
        {
          title: "Partner Sales Layer",
          desc: "Partners focus on business development and client relationships."
        },
        {
          title: "Execution Layer",
          desc: "Brands and vendors deliver services under Zryoss standards."
        }
      ]}
    />
  );
}
