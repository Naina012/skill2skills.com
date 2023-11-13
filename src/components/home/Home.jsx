import React from "react"


import HAbout from "./HAbout"
import Hero from "./Hero"
import Services from "./Hservices"
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
      <Services/>
      

      <Testimonials />
      <Awrapper/>
      
      
    </>
  )
}

export default Home
