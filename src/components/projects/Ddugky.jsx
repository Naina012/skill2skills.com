// Import necessary libraries and components
import React from 'react';
import './project.css';
import about from '../../assets/g11.jpg';
import Back from '../back/Back';

// Functional component Project
const Project = () => {
  return (
    <>
      {/* Render Back component */}
      <Back title='Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDUGKY)' className='responsive-back' />
      {/* Project section */}
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
              Empowering rural youth to become financially self-sufficient and internationally competitive professionals. DDU-GKY, short for Deen Dayal Upadhyaya Grameen Kaushalya Yojana, is a government initiative aimed at empowering economically disadvantaged rural youth by providing them with skill development and employment opportunities. This program is part of the broader efforts by the Ministry of Rural Development, Government of India, to enhance rural livelihoods and reduce poverty, falling under the National Rural Livelihood Mission (NRLM), also known as Aajeevika.
            </p>
            <p>
              The primary goal of DDU-GKY is to transform rural youth, aged 15 to 35, from economically underprivileged backgrounds into a workforce that is not only financially self-sufficient but also competitive on a global scale. As an integral component of the Skill India campaign, it aligns with key government initiatives such as Make In India, Digital India, Smart Cities, and Start-Up India, Stand-Up India.
            </p>
            <p>
              Skill2Skills has been actively engaged in the implementation of DDU-GKY in Kerala, collaborating with Kudumbashree, in Assam with ASRLM, in Madhya Pradesh with MPSRLM, and in Haryana with HSRLM, playing a significant role in advancing the program's objectives.
            </p>
            <p>
              All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
            </p>
          </div>
        </div>
        {/* Projects list */}
        <div className='project-lastp'>
          <h2>Projects Under DDU-GKY Scheme:</h2>
          <ul>
            <li>MPSRLM (MP)</li>
            <li>ASRLM (ASSAM)</li>
            <li>HSRLM (HARYANA)</li>
            <li>KUDUMBASHREE (KERALA)</li>
          </ul>
          <p style={{ marginBottom: '15px' }}>
            DDU-GKY originated from the Aajeevika Skills program and the 'Special Projects' segment of the Swarnjayanti Gram Swarozgar Yojana (SGSY). The program is tailored to meet the vocational aspirations of rural youth, equipping them with skills that make them suitable for wage employment.
          </p>
          <p>
            The Ministry of Rural Development has issued comprehensive Guidelines and Standard Operating Procedures (SOP) for the program's execution. All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
          </p>
          {/* Visit website link */}
          <a href='https://www.india.gov.in/spotlight/deen-dayal-upadhyaya-grameen-kaushalya-yojana' target='_blank' rel='noopener noreferrer' className='bttn'>
            Visit Website
          </a>
        </div>
      </section>
    </>
  );
};

export default Project;
