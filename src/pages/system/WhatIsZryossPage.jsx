import ZryossIntroSection from "../../components/system/ZryossIntroSection";
import ProblemZryossSolvesSection from "../../components/system/ProblemZryossSolvesSection";
import WhatExactlyZryossSection from "../../components/system/WhatExactlyZryossSection";
import HowZryossDifferentSection from "../../components/system/HowZryossDifferentSection";
import ZryossApproachSection from "../../components/system/ZryossApproachSection";
import HeroContact from "../Home/HeroContact";
import LogosMarquee from "../../components/system/LogosMarquee";
import ZryossEcosystemSection from "../../components/system/ZryossEcosystemSection";
import ZryossPhilosophySection from "../../components/system/ZryossPhilosophySection";
import BrandEngineSection from "../../components/system/BrandEngineSection";

export default function WhatIsZryossPage() {
  return (
    <>
      <ZryossIntroSection />
      {/* next sections here */}
      <ProblemZryossSolvesSection />
      <WhatExactlyZryossSection />
      <HowZryossDifferentSection />
      <ZryossApproachSection />
      <ZryossEcosystemSection />
      <ZryossPhilosophySection />
      <BrandEngineSection />
      <LogosMarquee />
      <HeroContact />
    </>
  );
}
