import SolutionLayout from "./SolutionLayout";

export default function ITSoftware() {
  return (
    <SolutionLayout
      title="IT & Software Solutions"
      subtitle="Enterprise-grade software services built for scale, security, and performance."
      description="Zryoss delivers end-to-end IT and software solutions for businesses
      looking to build, modernize, or scale their digital infrastructure."
      offerings={[
        {
          title: "Custom Software Development",
          desc: "Web, mobile, and enterprise applications tailored to business needs.",
        },
        {
          title: "Web & App Development",
          desc: "Modern, scalable, and secure digital platforms.",
        },
        {
          title: "Cloud & Infrastructure",
          desc: "Cloud migration, deployment, and infrastructure management.",
        },
        {
          title: "Maintenance & Support",
          desc: "Ongoing support, monitoring, and optimization services.",
        },
        {
          title: "System Integration",
          desc: "Seamless integration of tools, APIs, and platforms.",
        },
        {
          title: "Security & Compliance",
          desc: "Secure systems aligned with industry best practices.",
        },
      ]}
    />
  );
}
