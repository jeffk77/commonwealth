import React from 'react';
import commonwealthLogo from '../assets/images/commonwealthLogo.png';

const Header = () => (
  <div>
    
    <nav className="nav-center">
      <div className="nav-wrapper">
        <ul>
          <li><a href="home.html">HOME</a></li>
          <li><a href="about.html">ABOUT US</a></li>
          <li><a href="galleries.html">GALLERIES</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>
    </nav>

    <header>
      <img src={commonwealthLogo} className="responsive-img logo" alt="Commonwealth Logo" />
    </header>
    
    <div className="infoBar">
      <div className="row">
        <div className="col s4">
          Expect More From Us!
        </div>
        <div className="col s4">
          45 Years Experience
        </div>
        <div className="col s4">
          Licensed and Insured
        </div>
      </div>
    </div>

    <div className="topImg parallax"></div>

  </div>
);

export default Header;