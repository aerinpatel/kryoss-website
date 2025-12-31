import SolutionLayout from "./SolutionLayout";

export default function Payroll() {
  return (
    <SolutionLayout
      title="Payroll & Compliance Solutions"
      subtitle="Accurate, compliant, and scalable payroll management for modern organizations."
      description="Zryoss provides structured payroll and compliance solutions
      that help organizations manage employee compensation, statutory
      requirements, and reporting with confidence and accuracy."
      offerings={[
        {
          title: "Payroll Processing",
          desc: "End-to-end payroll execution with accuracy and timeliness.",
        },
        {
          title: "Statutory Compliance",
          desc: "Support for PF, ESI, TDS, and other statutory obligations.",
        },
        {
          title: "Payslip & Reporting",
          desc: "Automated payslips and transparent payroll reporting.",
        },
        {
          title: "Compliance Documentation",
          desc: "Maintenance of payroll records and audit-ready documentation.",
        },
        {
          title: "Employee Reimbursements",
          desc: "Structured handling of reimbursements and adjustments.",
        },
        {
          title: "Process Governance",
          desc: "Standardized payroll workflows aligned with regulations.",
        },
      ]}
    />
  );
}
