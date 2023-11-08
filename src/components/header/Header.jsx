
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp"
import { useEffect } from "react";
import "./header.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";

  import { FaHome, FaCogs, FaBlog} from "react-icons/fa"
const Header = () => {
  
  
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
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <a href="index.html" className="logo me-auto me-lg-0">
        <div class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" 
     data-aos-easing="ease-in-out">
  <img src={logo} alt="" class="img-fluid" />
</div>
          
        </a>
        <h1 className="logo me-auto">
          <Link to="/about">
            <span>Skill2</span>Skills
          </Link>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link to="/">
              <FaHome style={{ color: ' #478ac9' }}/>&nbsp;&nbsp;<span>Home</span> 
              </Link>
            </li>
            <li className="dropdown">
            <Link to="/">
            <i className="fas fa-info-circle" style={{ color: ' #478ac9' }}></i>&nbsp;&nbsp;<span style={{ color: ' #478ac9' }}>About</span> <i className="fas fa-caret-down"></i>
              </Link>
              
              <ul>
                <li >
                <Link to="/about">About Us</Link>
                  
                </li>
                <li >
                <Link to="/gallery">Gallery</Link>
                  
                </li>
                <li>
                  <a href="/habout">Achievements/Awards</a>
                </li>
                <li className="dropdown">
                  
                  <Link to="/">
            <span style={{ color: ' #478ac9' }}>Teams</span> <i className="fas fa-caret-right"></i>
              </Link>
                  
                  <ul>
                    <li>
                      <a href="/team">HEAD OFFICE-MOHALI</a>
                    </li>
                    <li>
                      <a href="/punjab">Training Center-PUNJAB</a>
                    </li>
                    <li>
                      <a href="/haryana">Training Center-HARYANA</a>
                    </li>
                    <li>
                      <a href="/mp">Training Center-GWALIOR,MP</a>
                    </li>
                    <li>
                      <a href="/assam">Training Center-ASSAM</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/services">
              <FaCogs style={{ color: ' #478ac9' }}/>&nbsp;&nbsp; <span >Services</span> 
              </Link>
            </li>
            <li className="dropdown">
            
             <Link to="/">
            <i className="fas fa-info-circle" style={{ color: ' #478ac9' }}></i>&nbsp;&nbsp;<span style={{ color: ' #478ac9' }}>Schemes/Projects</span> <i className="fas fa-caret-down"></i>
              </Link>
              <ul>
                <li>
                  <a href="/project">Deen Dayal Upadhyaya Grameen Kaushalya Yojana(DDUGKY)</a>
                </li>
                <li>
                  <a href="/nulm">National Urban Livelihood Mission(NULM)</a>
                </li>
                {/* <li>
                  <a href="/pycometric">Psychometric Assessment for Candidate Evaluation</a>
                </li> */}
                <li>
                  <a href="/kaushal">Kaushal Parikshan</a>
                </li>
                <li>
                  <a href="/upsdm">UPSDM(Startup Scheme)</a>
                </li>
                <li>
                  <a href="/pmkvy">PMKVY</a>
                </li>
                <li>
                  <a href="/sagarmala">SAGARMALA</a>
                </li>
              </ul>
            </li>
            <li>
              {/* <a href="./career">
              <FaBriefcase /> <span>Career</span>
              </a> */}
            </li>
            <li>
              <a href="/blog">
              <FaBlog style={{ color: ' #478ac9' }} /> &nbsp;&nbsp;<span>Blog</span> 
              </a>
            </li>
            <li>
              <a href="/contact">
              <i className="fas fa-phone" style={{ color: ' #478ac9' }}>&nbsp;&nbsp;</i><span>Contact</span> 
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="header-social-links d-flex">
          <a href="https://twitter.com/i/flow/login" className="twitter">
            <FaTwitter size={20} color="#55acee" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064023076120" className="facebook">
            <FaFacebook size={20} color="#1877f2" />
          </a>
          <a href="https://www.instagram.com/skill2skillsofficial/?hl=en" className="instagram">
            <FaInstagram size={20} color="#bc2a8d" />
          </a>
          <a href="https://www.linkedin.com/in/skill2skills-llp/" className="linkedin">
            <FaLinkedin size={20} color="#0077b5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
