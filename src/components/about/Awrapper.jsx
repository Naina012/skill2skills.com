import React from "react"
import { awrapper } from "../../dummydata"
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "./awrapper.css"
const Awrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
    AOS.refresh(); 
  }, []); 
  useEffect(() => {
    window.scrollTo(0,0);
  
   
  }, [])
  return (
    <>
      <section className='awrapper'>
        <div className='awrapper-container grid'>
          {awrapper.map((val) => {
            return (
              <div className='awrapper-box flex'>
                
                <div className='awrapper-img' class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" 
     data-aos-easing="ease-in-out">
                  <img src={val.cover} alt='' style={{ color: 'red' }} />

                </div>
                <div className='awrapper-text'>
                  <div class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" 
     data-aos-easing="ease-in-out">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
