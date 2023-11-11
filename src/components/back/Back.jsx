import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./back.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Back = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const backgroundImages = {
    "/about": require("../../assets/background.png"),
    
    "/gallery": require("../../assets/bg.webp"),
    "/contact": require("../../assets/contact.webp"),
    "/blog": require("../../assets/blog.webp"),
    "/team": require("../../assets/bok_4.webp"),
    "/project": require("../../assets/bok_2.webp"),
    "/nulm": require("../../assets/project.webp"),
    
    "/kaushal": require("../../assets/bk_6.webp"),
    "/upsdm": require("../../assets/bk_5.webp"),
    "/pmkvy": require("../../assets/bok_3.webp"),
    "/sagarmala": require("../../assets/bkk.webp"),
    "/punjab": require("../../assets/bok_1.webp"),
    "/haryana": require("../../assets/bk_4.webp"),
    "/mp": require("../../assets/bk_7.webp"),
    "/assam": require("../../assets/project.webp"),
    
  };

  const backgroundImage = backgroundImages[location.pathname] || require("../../assets/background.png");

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  
  const textColors = {
    "/about": "#000000",  
    "/gallery": "#ffffff",
    "/contact": "#ffffff",
    "/blog": "rgb(71, 138, 201)",
    "/team": "#000000",
    "/project": "#000000",
    "/nulm": "#000000",
    // "/pycometric": "#33FF57",#14a59f
    "/kaushal": "#2f67f8",
    "/upsdm": "#00cbff",
    "/pmky": "#57FF33",
    "/sagarmala": "#000000",
    "/punjab": "#000000",
    "/haryana": "#ffffff",
    "/mp": "#000000",
    "/assam": "#000000",
   
  };

  const textColor = textColors[location.pathname] || "#000"; 
  const titleStyle = {
    color: textColor,
  };

  return (
    <>
      <section className="back" style={backgroundStyle}>
        <div data-aos="zoom-in">
          <h1 style={titleStyle}>{title}</h1>
        </div>
        <div data-aos="zoom-in-down">
          <h2 style={{ color: textColor }}>Home / {location.pathname.split("/")[1]}</h2>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
