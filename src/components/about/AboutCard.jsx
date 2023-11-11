import React from "react"
import Heading from "../heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import Services from "../allservices/Services"
import Testimonal from "../home/Testimonal"
import aboutus from "../../assets/images/aboutuss.webp"
const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='about-container flexSB'>
          <div className='about-left row'>
            <img src={aboutus} alt='' />
          </div>
          <div className='about-right row'>
            <Heading subtitle='Skill2skills' title='Making Skill India Digital' />
            <div className='about-items'>
              {homeAbout.map((val) => {
                return (
                  <div className='about-item flexSB'>
                    {/* <div className='img'>
                      <img src={val.cover} alt='' />
                    </div> */}
                    <div className='about-text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <Services/>
      <Testimonal/>
    </>
  )
}

export default AboutCard
