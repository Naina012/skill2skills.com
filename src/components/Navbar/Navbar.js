// Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomDropdown from './Dropdown';
import logo from '../../assets/logo.webp';
import { About, Teams, Projects } from './MenuItems';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img
            src={logo}
            alt="Logo"
            className="logo-image"
            style={{ width: '80px', height: '60px', marginBottom: '20px' }}
          />
          <span>SKILL2SKILLS</span>
          
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <CustomDropdown title="About" items={About} onClick={closeMobileMenu} />
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <CustomDropdown title="Team" items={Teams} onClick={closeMobileMenu} />
          </li>
          <li className="nav-item">
            <CustomDropdown title="Projects" items={Projects} onClick={closeMobileMenu} />
          </li>

          <li className="nav-item">
            <NavLink to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
