import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/Screenshot_2024-04-18_124216.png";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Check if user has scrolled past a certain threshold (e.g., 100 pixels)
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  const navigate = useNavigate();

  const handleScrollToFooter = () => {
    const targetHeight = 3010; // Specify the desired height in pixels
    window.scrollTo({
      top: targetHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_left_logo">
            <img src={logo} alt="Logo" />
            <p>Dinesh C</p>
          </div>
        </div>
        <div className="header_container_right">
          <div className="header_container_right_links">
            <ul>
              <li>
              <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <a href="#" onClick={handleScrollToFooter}>Work Experience</a>
              </li>
              <li>
                <NavLink to="/contact">Contact Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
