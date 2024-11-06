

import React from "react";
import sectionData from "../layouts/Home/section.json"
import Hero from "../layouts/Home/Hero.tsx";
import Section from "../layouts/Home/sections.tsx";
import Testimonials from "../layouts/Home/testimonials.tsx";
import Faq from "../layouts/Home/faq.tsx";
function Home() {
 
  return (
    <div> 
       <Hero />
       <Section props={sectionData?.section1} imageAlign="left"/>
       <Section props={sectionData?.section2} imageAlign="right"/>
       <Section props={sectionData?.section3} imageAlign="left"/>
       <Testimonials />
       <Faq />
    </div>
  );
}


export default Home;
