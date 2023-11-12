import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
function CustomDropdown({ title, items, onClick }) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#478ac9" }}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} className='dropdown-links'>
            <Link to={item.path} className={item.cName} onClick={onClick} >
              {item.title}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
