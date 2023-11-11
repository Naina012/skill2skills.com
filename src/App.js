import "./App.css"
// import Header from "./components/header/Header"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import About from "./components/about/About"

import Team from "./components/team/Team"

import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import HAbout from "./components/home/HAbout"
import React from "react";
import Gallery from "./components/gallery/Gallery"
import Services from "./components/allservices/Services"
import Assam from "./components/team/Assam"
import Mp from "./components/team/Mp"
import Haryana from "./components/team/Haryana"
import Punjab from "./components/team/Punjab"
import Project from "./components/projects/Ddugky"
import Pmkvy from "./components/projects/Pmkvy"
import Upsdm from "./components/projects/Upsdm"
import Kaushal from "./components/projects/Kaushal"
import Sagarmala from "./components/projects/Sagarmala"
import Nulm from "./components/projects/Nulm"
import Pycometric from "./components/projects/Pycometric"

function App() {
  return (
    <>
      
        
        <Navbar/>
        
        <Routes>
          <Route exact path='/*' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
         
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/mp' element={<Mp/>} />
          <Route exact path='/haryana' element={<Haryana/>} />
          <Route exact path='/punjab' element={<Punjab/>} />
          <Route exact path='/assam' element={<Assam/>} />
          
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/habout' element={<HAbout/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/project' element={<Project/>} />
          <Route exact path='/kaushal' element={<Kaushal/>} />
          <Route exact path='/nulm' element={<Nulm/>} />
          <Route exact path='/pmkvy' element={<Pmkvy/>} />
          <Route exact path='/sagarmala' element={<Sagarmala/>} />
          <Route exact path='/upsdm' element={<Upsdm/>} />
          <Route exact path='/pycometric' element={<Pycometric/>} />
          {/* <Route exact path='/career' element={<Career/>} /> */}
          {/* <Route exact path='/banner' element={<Banner/>} /> */}


        </Routes>
        <Footer />
      
    </>
  )
}

export default App
