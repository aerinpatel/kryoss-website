import React from "react";

// Sections
import BOSHeroSection from "../../components/system/bos/BOSHeroSection";
import BOSWhyBreakSection from "../../components/system/bos/BOSWhyBreakSection";
import BOSWhatIsSection from "../../components/system/bos/BOSWhatIsSection";
import BOSLayersSection from "../../components/system/bos/BOSLayersSection";
import BOSVsTraditionalSection from "../../components/system/bos/BOSVsTraditionalSection";
import BOSWhoNeedsSection from "../../components/system/bos/BOSWhoNeedsSection";
import BOSAdvantageSection from "../../components/system/bos/BOSAdvantageSection";
import BOSEcosystemSection from "../../components/system/bos/BOSEcosystemSection";
import BOSLongTermGrowthSection from "../../components/system/bos/BOSLongTermGrowthSection";
import BOSFinalCTASection from "../../components/system/bos/BOSFinalCTASection";

export default function BusinessOperatingSystemPage() {
  return (
    <>
      <BOSHeroSection />
      <BOSWhyBreakSection />
      <BOSWhatIsSection />
      <BOSLayersSection />
      <BOSVsTraditionalSection />
      <BOSWhoNeedsSection />
      <BOSAdvantageSection />
      <BOSEcosystemSection />
      <BOSLongTermGrowthSection />
      <BOSFinalCTASection />
    </>
  );
}
