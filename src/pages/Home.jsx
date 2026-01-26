import React from "react";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import HeroSectionInfor from "../components/HeroSectionInfor";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import AboutMy from "../components/AboutMy";
import ProcessSection from "../components/CareProcessSection";
import SectionFooter from "../components/SectionFooter";



{/*  <TeamSection/> */}
export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection/>
      <HeroSectionInfor/>
      <AboutMy/>
      <ProcessSection/>
      <TeamSection/>
      <SectionFooter />
    </>
  );
}
