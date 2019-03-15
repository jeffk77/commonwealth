import React from 'react';
import bttaLogo from '../assets/images/bttalogo.png';

const Header = () => (
  <div className="topSection">
    <header>
      <img src={bttaLogo} className="responsive-img" alt="BTTA Logo" />
    </header>

    <nav className="nav-center">
      <div className="nav-wrapper">
        <ul>
          <li><a href="home.html">HOME</a></li>
          <li><a href="about.html">EDUCATION</a></li>
          <li><a href="aboutUs.html">ABOUT US</a></li>
          <li><a href="ourServices.html">OUR SERVICES</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;