import Hero from "./Hero";
import WhatIsNot from "./WhatIsNot";
import HowItWorks from "./HowItWorks";
import Brands from "./Brands";
import HeroCTA from "./HeroCTA.jsx";
import Solutions from "./Soltions";
import HeroContact from "./HeroContact";
import Industries from "./Industries.jsx";
// import WhatIsNot from "./WhatIsNot.jsx";
import Awards from "./Awards.jsx";
import ImpactStats from "./ImpactStats.jsx";
import Services from "./Services.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <HowItWorks />
     <WhatIsNot />
      <Brands />
      <Solutions />
      <Services />
      <Awards />
      <Industries />
      <HeroCTA />
      <HeroContact />
    </>
  );
}
