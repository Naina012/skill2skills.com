import React from "react";
import { gallery } from "../../dummydata";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const GalleryCard = ({ categoryFilter }) => {
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
  
  const filteredGallery = categoryFilter
    ? gallery.filter((item) => item.category === categoryFilter)
    : gallery;

  return (
    <div className="gallery-container">
      {filteredGallery.map((val, index) => (
        <div className="item shadow" key={index}>
          <div className="img" data-aos="zoom-out-up">
            <img src={val.cover} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
