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
      <div className="row valign-wrapper">
        <div className="col s12 m4 l4 left-align">
          <h6><i class="material-icons">email</i>info@commonwealthhomedesigns.com</h6>
        </div>
        <div className="col s12 m4 l4">
          <h5>OUR QUALITY SPEAKS FOR ITSELF</h5>
        </div>
        <div className="col s12 m4 l4 right-align">
          <h6><i class="material-icons">contact_phone</i>Hamilton: (905) 572-7283</h6>
        </div>
      </div>
    </div>

    <div className="topImg parallax"></div>

  </div>
);

export default Header;