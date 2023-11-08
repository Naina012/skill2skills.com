import React from "react"
// import AboutCard from "../about/AboutCard"

import HAbout from "./HAbout"
import Hero from "./Hero"
// import Hprice from "./Hprice"
// import Testimonal from "./testimonal/Testimonal"
import Testimonials from "./Testimonal"
import Awrapper from "../about/Awrapper"
import BuildTools from "./BuildTools/BuildTools"

import About from "./BuildTools/Habout"

const Home = () => {
  return (
    <>
      <Hero />
      <BuildTools/>
      <About/>
     
      <HAbout />
      

      <Testimonials />
      <Awrapper/>
      
      {/* <Hprice /> */}
    </>
  )
}

export default Home
