import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img from "../../../assets/images/hommiii.png"
import "./about.css"
import { Link } from "react-router-dom"




const About = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <section className="about ">
        <div className="row w-100">
            <div className="row col-md-11 mx-auto">
                
                    <div className="col-md-6 img" data-aos="fade-right" data-aos-duration="2000">
                        
                        <img src={img} alt="" className="img-fluid image-homi"/>
                    </div>
                    <div className="col-md-6 ps-2" data-aos="fade-left" data-aos-duration="2000">
                       
                        <h1 className="headerTitle">Incorporated under the LLP Act in 2017, Skill2Skills has emerged as a frontrunner in the realm of education and skill development.</h1>
                        <p className="headerContent">
                        At Skill2Skills, we offer comprehensive project management and consulting services. We understand that effective project management is the cornerstone of success. Our expert guidance ensures your projects are executed seamlessly, on time, and within budget.
                        </p>
                        <ul className="features-list">
                            <li>
                                <i className="fas fa-check-circle"></i> We take pride in our vocational training and placement services, designed to empower individuals with practical skills that enhance their employability.
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> Skill2Skills collaborates closely with the prestigious national-level incubator, IIT Mandi – CATALYST, to bridge the skill gap and drive innovation.
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> Through rigorous training programs, we prepare candidates for the workforce, bridging the gap between education and industry requirements.
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i> Our expert guidance ensures your projects are executed seamlessly, on time, and within budget.
                            </li>
                        </ul>
                        <Link to="./about" className="btn-get-started">
                        <button className="branBtn">Learn More</button>
                        </Link>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default About;
