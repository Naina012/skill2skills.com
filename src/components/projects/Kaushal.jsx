import React, { useState } from 'react';
import './project.css';
import about from "../../assets/kaushal.png";
import Back from "../back/Back"


const Kaushal = () => {
  
  return (
    <>
    <Back title='Kaushal Parikshan' />
    <section id='Project' className="project-section">
        {/* Project container */}
        <div className='project-container'>
          {/* Project image */}
          <div className='project-image'>
            <div className='project-image-inner'>
              <img src={about} alt='Project-img' />
            </div>
          </div>
          {/* Project content */}
          <div className='project-content'>
          <p>
          Kaushal Parikshan is a digital assessment platform which enables the candidates from the skill
development and education ecosystem to assess their personality type as per their Aptitude,
Knowledge, Skill, and Psychometry. Our AI-powered algorithms and compute Machine Learning
mechanism provide suitable career guidance to the aspirants by mapping their profile with
befitting job roles.
          </p>
          
              <p>
              This ERP platform also provides a wide variety of formative internal assessments to track the
learning outcome of the candidates enrolled in a vocational course. Our assessments are full of
lucid designs consisting of graphics with gamification within the assessment series to make them
more user friendly and interactive.
              </p>
              <p>
              Kaushal Parikshan is developed and managed by team Skill2Skills under the exploration
program of a prestigious national level incubator named IIT Mandi-Catalyst.


              </p>
              <p>
              Skill2Skills is an ISO 9001:2015 certified and DPIIT recognised start-up in the field of vocational
education, which has been funded by the Ministry of Commerce and Industries, GOI and
Department of Industries, Himachal Pradesh, respectively.
              </p>
            
         
        </div>
      </div>
      <div className='project-lastp'> 
        <h2>Objectives are:</h2>
        <ul>
          <li>To assess the personality type of candidates by using AI-powered algorithms and
Machine Learning concepts as per their Aptitude, Knowledge, Skill, and Psychometry.
</li>
          <li>To provide suitable career guidance to the aspirants by mapping their profile with befitting
job roles.
</li>
          <li>To track the learning outcome of the candidates enrolled in a vocational course.
</li>
          
        </ul>
        {/* <p style={{ marginBottom: '15px' }}>
        DDU-GKY originated from the Aajeevika Skills program and the 'Special Projects' segment of the Swarnjayanti Gram Swarozgar Yojana (SGSY). The program is tailored to meet the vocational aspirations of rural youth, equipping them with skills that make them suitable for wage employment.


        </p> */}
        {/* <p>
        The Ministry of Rural Development has issued comprehensive Guidelines and Standard Operating Procedures (SOP) for the program's execution. All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
        </p> */}
        <a href="https://kaushalparikshan.com/" target="_blank" rel="noopener noreferrer" className='bttn'>
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Kaushal;
