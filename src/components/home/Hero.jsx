import React from "react"

import "./Hero.css"
import { useState, useEffect } from 'react';

import hero1 from "../../assets/Hero.png"


import { Link } from "react-router-dom";

import "./Hero.css";



// import hero1 from "../"
const Hero = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  
   
  }, [])

  const slides = [
    {
      // image: "./images/Hero1.png",
      image:hero1,
      title: "Welcome to Company",
  description: `
    In the uncharted territories of your ambitions, where innovation sparks and knowledge blooms, our platform is your compass.
  `,
  link: "/page1",
},
    {
      image: hero1,
      title: `From Learning to Earning: 
      Boost Your Skills With Us `
,
      description:
        `At Skill2Skills, 0ur fundamental mission revolves around fostering the personal growth and development of all those who collaborate with us. This mission is intrinsically linked to our vision: Empowering today's youth for a brighter and more promising tomorrow.
        
`,
      link: "/page2", 
    },
    {
      image: hero1,
      title: "What we do",
      description:
        `Skills and knowledge form the dynamic engines propelling a nation towards economic prosperity and social advancement. Our actions are intricately intertwined with our key objectives, and the Skill Mission of India, harmonising our efforts to shape a brighter future.
        `,
      link: "/page3", 
    },
    {
      image: hero1,
      title: "Training Experience of SC/ST Candidates",
      description:
      `
      
          <table style="border-collapse: collapse; width: 70%;">
            <tr>
              <th style="border: 1px solid #000; padding: 5px;">State</th>
              <th style="border: 1px solid #000; padding: 5px;">Target</th>
              <th style="border: 1px solid #000; padding: 5px;">Trained</th>
              <th style="border: 1px solid #000; padding: 5px;">Project Status</th>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 5px;">Punjab</td>
              <td style="border: 1px solid #000; padding: 5px;">5475</td>
              <td style="border: 1px solid #000; padding: 5px;">5475</td>
              <td style="border: 1px solid #000; padding: 5px;">Completed</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 5px;">Haryana</td>
              <td style="border: 1px solid #000; padding: 5px;">192</td>
              <td style="border: 1px solid #000; padding: 5px;">70</td>
              <td style="border: 1px solid #000; padding: 5px;">Ongoing</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 5px;">MP</td>
              <td style="border: 1px solid #000; padding: 5px;">325</td>
              <td style="border: 1px solid #000; padding: 5px;">325</td>
              <td style="border: 1px solid #000; padding: 5px;">Completed</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 5px;">Assam</td>
              <td style="border: 1px solid #000; padding: 5px;">160</td>
              <td style="border: 1px solid #000; padding: 5px;">60</td>
              <td style="border: 1px solid #000; padding: 5px;">Ongoing</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 5px;">Kerala</td>
              <td style="border: 1px solid #000; padding: 5px;">100</td>
              <td style="border: 1px solid #000; padding: 5px;">0</td>
              <td style="border: 1px solid #000; padding: 5px;">Ongoing</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 5px;">Total</td>
              <td style="border: 1px solid #000; padding: 5px;">7055</td>
              <td style="border: 1px solid #000; padding: 5px;">-</td>
              <td style="border: 1px solid #000; padding: 5px;">5933</td>
              
            </tr>
          </table>
        
      `,
        
      link: "/page3", 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, nextSlide]); 

  const renderIndicators = () => {
    return slides.map((_, index) => (
      <li
        key={index}
        data-bs-target="#herocarousell"
        data-bs-slide-to={index}
        className={index === activeIndex ? "active" : ""}
      ></li>
    ));
  };

  
    return (
      <section id="hero">
        <div
          id="herocarousell"
          className="carousell slide carousell-fade"
          data-bs-ride="carousell"
        >
          <div className="carousell-inner" role="listbox">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousell-item ${index === activeIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="carousell-container">
                  <div className="carousell-content animate__animated animate__fadeInUp">
                    <h2>{slide.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: slide.description }}></div>
                    <div className="text-center">
                      <Link to="./about" className="btn-get-started">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <a
            className="carousell-control-prev"
            href="#herocarousell"
            role="button"
            data-bs-slide="prev"
            onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
          >
            <span
              className="carousell-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>
  
          <a
            className="carousell-control-next"
            href="#herocarousell"
            role="button"
            data-bs-slide="next"
            onClick={nextSlide}
          >
            <span
              className="carousell-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
  
          <ol className="carousell-indicators" id="hero-carousell-indicators">
            {renderIndicators()}
          </ol>
        </div>
        
      </section>
      
    );
  };
  
  export default Hero;