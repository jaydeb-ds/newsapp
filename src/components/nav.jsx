import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MySite</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ?<>&#9776;</>: <>&#10005;</> }
      </button>
    </nav>
  );
};

export default Navbar;
