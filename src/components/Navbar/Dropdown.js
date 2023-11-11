import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
// import "./Dropdown.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function CustomDropdown({ title, items }) {
  return (
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" style={{ backgroundColor: "#478ac9" }}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index}>
            <Link to={item.path} className={item.cName}>
              {item.title}
            </Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
