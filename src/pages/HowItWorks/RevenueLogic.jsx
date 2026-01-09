import HowItWorksSection from "./HowItWorksSection";

export default function RevenueLogic() {
  return (
    <HowItWorksSection
      title="Revenue Logic"
      intro="Earnings within Zryoss are strictly tied to real business performance, not recruitment or referrals."
      steps={[
        {
          title: "Closed Business",
          desc: "Revenue is generated only when a client deal is successfully closed."
        },
        {
          title: "Service Delivery",
          desc: "Payments are linked to actual service execution."
        },
        {
          title: "Performance-Based Share",
          desc: "Partners earn based on contribution and delivery success."
        }
      ]}
    />
  );
}
