import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope, faFolder } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo-details">
        <div className="logo_name">Portfolio</div>
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/Home">
            <FontAwesomeIcon icon={faHome} />
            <span className="links_name">Home</span>
          </Link>
          <span className="tooltip">Home</span>
        </li>
        <li>
          <Link to="/About">
            <FontAwesomeIcon icon={faUser} />
            <span className="links_name">About</span>
          </Link>
          <span className="tooltip">About</span>
        </li>
        <li>
          <Link to="/Resume">
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="links_name">Resume</span>
          </Link>
          <span className="tooltip">Resume</span>
        </li>
        <li>
          <Link to="/Services">
            <FontAwesomeIcon icon={faFolder} />
            <span className="links_name">Services</span>
          </Link>
          <span className="tooltip">Services</span>
        </li>
        <li>
          <Link to="/Contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="links_name">Contact</span>
          </Link>
          <span className="tooltip">Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
