import React from "react";

import MethodologyHeroSection from "../../components/system/methodology/MethodologyHeroSection";
import MethodologyWhyMattersSection from "../../components/system/methodology/MethodologyWhyMattersSection";
import ZFrameworkLayersSection from "../../components/system/methodology/ZFrameworkLayersSection";
import MethodologyAppliedSection from "../../components/system/methodology/MethodologyAppliedSection";
import ContinuousImprovementLoopSection from "../../components/system/methodology/ContinuousImprovementLoopSection";
import MethodologyAcrossEcosystemSection from "../../components/system/methodology/MethodologyAcrossEcosystemSection";
import MethodologyFinalCTASection from "../../components/system/methodology/MethodologyFinalCTASection";

export default function ZryossMethodologyPage() {
  return (
    <>
      <MethodologyHeroSection />
      <MethodologyWhyMattersSection />
      <ZFrameworkLayersSection />
      <MethodologyAppliedSection />
      <ContinuousImprovementLoopSection />
      <MethodologyAcrossEcosystemSection />
      <MethodologyFinalCTASection />
    </>
  );
}
