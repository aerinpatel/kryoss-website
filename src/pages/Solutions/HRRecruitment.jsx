import SolutionLayout from "./SolutionLayout";

export default function HRRecruitment() {
  return (
    <SolutionLayout
      title="HR & Recruitment Solutions"
      subtitle="End-to-end talent acquisition and workforce solutions for growing businesses."
      description="Zryoss provides structured, scalable, and reliable HR and recruitment
      services to help organizations attract, hire, and manage the right talent
      without operational complexity."
      offerings={[
        {
          title: "Talent Acquisition",
          desc: "Permanent and contract hiring across multiple roles and industries.",
        },
        {
          title: "Recruitment Process Outsourcing (RPO)",
          desc: "Complete recruitment lifecycle management for enterprises.",
        },
        {
          title: "HR Consulting",
          desc: "Policy design, compliance support, and workforce planning.",
        },
        {
          title: "Staffing Solutions",
          desc: "Flexible staffing models to meet dynamic business needs.",
        },
        {
          title: "Onboarding & Documentation",
          desc: "Structured onboarding processes with compliance alignment.",
        },
        {
          title: "Payroll & Compliance Support",
          desc: "Payroll coordination and statutory compliance assistance.",
        },
      ]}
    />
  );
}
