import EcosystemSection from "./EcosystemSection";

export default function Partners() {
  return (
    <EcosystemSection
      title="Partner Network"
      intro="Partners form the sales and growth layer of the Zryoss ecosystem, driving client acquisition and long-term relationships."
      blocks={[
        {
          title: "Independent Business Owners",
          desc: "Partners operate under their own brand while leveraging Zryoss for backend execution."
        },
        {
          title: "Sales-Focused Roles",
          desc: "Partners concentrate on sales, growth strategy, and client relationships — not delivery management."
        },
        {
          title: "No Recruitment-Based Income",
          desc: "Earnings are strictly tied to real business performance, not referrals or team size."
        },
        {
          title: "Scalable Team Structures",
          desc: "Partners can build sales teams while Zryoss maintains operational consistency."
        }
      ]}
    />
  );
}
