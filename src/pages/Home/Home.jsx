import Hero from "./Hero";
import WhatIsNot from "./WhatIsNot";
import HowItWorks from "./HowItWorks";
import Brands from "./Brands";
import CTA from "./CTA";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Brands />
      <CTA />
      <div className="-mb-240"></div>
    </>
  );
}
