import React, { useEffect } from "react"

import Heading from "../heading/Heading"

import"./Habout.css"



import AOS from "aos";
import "aos/dist/aos.css";
import Homeservices from "./Hservices"



const HAbout = () => {
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
  
  const achievements = [
    {
      date: "2017",
      titles: [
        "Incorporation",
        
      ],
      animationDirection: "fade-right",
    },
    {
      date: "2018",
      titles: [
        `Trademark Registration`,
        ` Recognition IIT Mandi - CATALYST`
        ,
        `Department of Industries, HPT`
        ,
        ` Registration with Ministry of Rural Development,GOIT`
        ,
      ],
      animationDirection: "fade-left",
    },
    {
      date: "2019",
      titles: [
        "Partnered with Punjab Skill Development Mission",
        
      ],
      
      animationDirection: "fade-right",
    },
    {
      date: "2020",
      titles: [
        `Ministry of Commerce & Industries(Start-up)`,
        `ISO 9001:2015`,
        `National Urban Livelihood Mission`,
      ],
      animationDirection: "fade-left",
    },
    {
      date: "2021",
      titles: [
        "MOU with MSME Recognition",
        "MOU with GST Registration",
        "MOU with Madhya Pradesh State Rural Livelihood Mission",
        "MOU with Haryana State Rural Livelihood Mission",
      ],
      animationDirection: "fade-right",
    },
    {
      date: "2022",
      titles: ["NITI Aayog Registration",
      `MOU with Assam State Rural Livelihood Mission`,
      
    ],
    animationDirection: "fade-left",
    },
   
   
    {
      date: "2023",
      titles: [
        "Kudumbashree (Kerala)",
        "UPSDM (UP)",
        
      ],
      animationDirection: "fade-right",
    },
    
   
    
   
    
    
  ];

  

  
  function getAchievementColor(index) {
    const colors = ["#41516C", "#FF5733", "#47C8E6", "#FFD700", "#A569BD"];
    
  
    return colors[index % colors.length];
    
  }
  

  return (
    
    <>
    
    <section className="homeAbout">
  {/* <Hintro /> */}
  <div className="container">
    <div data-aos="fade-up">
    <Heading subtitle="our achievements" title="explore our popular awards and achievements" />

    </div>
    
    <div className="achievements-container" >
      
      <ul className="achievement">
      {achievements.map((achievement, index) => (
  <li
    key={index}
    style={{ "--accent-color": getAchievementColor(index) }}
    data-aos={achievement.animationDirection}
  >
    <div className="date">{achievement.date}</div>
    <div className="titles">
      {achievement.titles.map((title, i) => (
        <div className="title" key={i} data-aos="fade-up" data-aos-anchor-placement="bottom-center">
          {title}
        </div>
      ))}
    </div>
  </li>
))}

            </ul>
           
            <Homeservices />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
