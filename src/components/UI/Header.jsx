import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { ImMenu3 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "../UI/Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a NavLink is clicked
  };

  return (
    <>
      <nav>
        <div className="nav-bar">
          <div className="nav-image">
            <img src="/images/logo (2).png" alt="logo" />
          </div>
          <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
            <li>
              <NavLink to="/" className="home" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" onClick={handleNavLinkClick}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" onClick={handleNavLinkClick}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={handleNavLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cart" onClick={handleNavLinkClick}>
                <BsFillCartCheckFill />
              </NavLink>
            </li>
          </ul>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <ImMenu3 />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
