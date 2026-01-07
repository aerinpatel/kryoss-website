import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Platform from "../pages/Platform/Platform";
import PartnershipOverview from "../pages/Partnership/PartnershipOverview";
import IPP from "../pages/Partnership/IPP.jsx";
import IPPRoles from "../pages/Partnership/IPPRoles.jsx";
import IPPRevenue from "../pages/Partnership/IPPRevenue.jsx";
import BPP from "../pages/Partnership/BPP.jsx";
import SalesStructure from "../pages/Partnership/SalesStructure.jsx";
import IPPvsBPP from "../pages/Partnership/IPPvsBPP.jsx";
import ITSoftware from "../pages/Solutions/ITSoftware.jsx";
import HRRecruitment from "../pages/Solutions/HRRecruitment.jsx";
import DigitalMarketing from "../pages/Solutions/DigitalMarketing.jsx";
import Payroll from "../pages/Solutions/Payroll.jsx";
import Legal from "../pages/Solutions/Legal.jsx";
import RealEstate from "../pages/Solutions/RealEstate.jsx";
import DemoSupport from "../pages/Operations/DemoSupport.jsx";
import VendorNetwork from "../pages/Operations/VendorNetwork.jsx";
import QualityAssurance from "../pages/Operations/QualityAssurance.jsx";
import DeliveryManagement from "../pages/Operations/DeliveryManagement.jsx";
import RiskControl from "../pages/Operations/RiskControl.jsx";
import WhatZryossIsNot from "../pages/Trust/WhatZryossIsNot.jsx";
import Governance from "../pages/Trust/Governance.jsx";
import EthicsCompliance from "../pages/Trust/EthicsCompliance.jsx";
import RiskDisclosure from "../pages/Trust/RiskDisclosure.jsx";
import Resources from "../pages/Resources/Resources.jsx";
import Blog from "../pages/Resources/Blog.jsx";
import FAQs from "../pages/Resources/FAQs.jsx";
import KnowledgeCenter from "../pages/Resources/KnowledgeCenter.jsx";
import PartnerGuidelines from "../pages/Resources/PartnerGuidelines.jsx";
import About from "../pages/Company/About.jsx";
import FounderNote from "../pages/Company/FounderNote.jsx";
import VisionMission from "../pages/Company/VisionMission.jsx";
import Careers from "../pages/Company/Careers.jsx";
import Media from "../pages/Company/Media.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Apply from "../pages/Contact/Apply.jsx";
import Ecosystem from "../pages/Ecosystem/Ecosystem.jsx";




export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Next pages will come here */}
      <Route path="/platform" element={<Platform />} />
      <Route path="/partnership" element={<PartnershipOverview />} />
      <Route path="/partnership/ipp" element={<IPP />} />
      <Route path="/partnership/ipp-roles" element={<IPPRoles />} />
      <Route path="/partnership/ipp-revenue" element={<IPPRevenue />} />
      <Route path="/partnership/bpp" element={<BPP />} />
      <Route path="/partnership/sales-structure" element={<SalesStructure />} />

      <Route path="/partnership/comparison" element={<IPPvsBPP />} />

      <Route path="/solutions/it-software" element={<ITSoftware />} />
      <Route path="/solutions/hr-recruitment" element={<HRRecruitment />} />
      <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/solutions/payroll" element={<Payroll />} />
      <Route path="/solutions/legal" element={<Legal />} />
      <Route path="/solutions/real-estate" element={<RealEstate />} />
      <Route path="/operations/demo-support" element={<DemoSupport />} />
      <Route path="/operations/vendor-network" element={<VendorNetwork />} />
      <Route path="/operations/quality-assurance" element={<QualityAssurance />} />
      <Route path="/operations/delivery-management" element={<DeliveryManagement />} />
      <Route path="/operations/risk-control" element={<RiskControl />} />
      <Route path="/trust/what-zryoss-is-not" element={<WhatZryossIsNot />} />
      <Route path="/trust/governance" element={<Governance />} />
      <Route path="/trust/ethics-compliance" element={<EthicsCompliance />} />
      <Route path="/trust/risk-disclosure" element={<RiskDisclosure />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/faqs" element={<FAQs />} />
      <Route path="/resources/knowledge-center" element={<KnowledgeCenter />} />
      <Route path="/resources/partner-guidelines" element={<PartnerGuidelines />} />
      <Route path="/company/about" element={<About />} />
      <Route path="/company/founder-note" element={<FounderNote />} />
      <Route path="/company/vision-mission" element={<VisionMission />} />
      <Route path="/company/careers" element={<Careers />} />
      <Route path="/company/media" element={<Media />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/ecosystem" element={<Ecosystem />} />

    </Routes>
  );
}
