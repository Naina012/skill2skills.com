

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterCol from './FooterCol';
import './footer.css';
import { usefulLink,  otherLinks, footerInfo } from './FooterData';
import FooterInfo from './FooterInfo';
import { Link } from 'react-router-dom';
import { scrollUP } from './ScrollTop/ScrollTop';



const Footer = () => {
    return (
        <section className='row footer'>
            <Row className="col-md-11 mx-auto">
                <Row className="align-items-center footerInfo">
                    {
                        footerInfo.map(data => <FooterInfo data={data} key={data.id}/>)
                    }
                </Row>
                <Col md={6} lg={3} className="fAboutUs">
                    <h5>ABOUT US</h5>
                    <span className="animate-border"></span>
                    <p className="aboutUsDes">To develop a universal MooC platform to strength the existing skill development ecosystem in order to match the demand and supply gap within industries.</p>
                    <ul className="socialIcons">
                        <li>
                            <Link onClick={scrollUP} to="https://www.facebook.com/profile.php?id=100064023076120" >
                                <FontAwesomeIcon icon={faFacebook}/>
                                </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="https://twitter.com/i/flow/login">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="https://www.instagram.com/skill2skillsofficial/?hl=en">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={scrollUP} to="https://www.linkedin.com/in/skill2skills-llp/">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </Link>
                        </li>
                    </ul>
                </Col>
                <FooterCol key="2" menuItems={usefulLink} title="USEFUL LINK"/>
                {/* <FooterCol key="3" menuItems={ourServices} title="OUR SERVICES"/> */}
                <FooterCol key="4" menuItems={otherLinks} title="OTHER LINKS"/>
            </Row>
            <p className="copyRight">Copyright &copy; 2023 <span className="fHighlight">Skills2skills</span>. All rights reserved.</p>
        </section>
    );
};

export default Footer;
