import React from 'react';
import commonwealthLogo from '../assets/images/commonwealthLogo.png';
import followFB from '../assets/images/followFB.png';

const Header = () => (
  <div>

    <div className="contactBar">
      <div className="row">
        <div className="col s6 m6 l6 left-align">
          <i className="material-icons hide-on-small-only">email</i>info@commonwealthhomedesigns.com
        </div>
        <div className="col s6 m6 l6 right-align">
          <i className="material-icons hide-on-small-only">contact_phone</i>Hamilton: (905) 572-7283
        </div>
      </div>
    </div>

    <nav className="nav-center">
      <div className="nav-wrapper">
        <ul>
          <li><a href="home.html">HOME</a></li>
          <li><a href="#aboutUs">ABOUT US</a></li>
          <li><a href="#galleries">GALLERIES</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>
    </nav>

    <header>
      <img src={commonwealthLogo} className="responsive-img logo" alt="Commonwealth Logo" />
    </header>

    <div className="infoBar">
      <div className="row valign-wrapper">
        <div className="col m4 l4 left-align hide-on-med-and-down">
          <a href="https://www.facebook.com/commonwealthhomedesigns/"><img className="responsive-img" src={followFB} alt="" /></a>
        </div>
        <div className="col s12 m12 l4">
          <h5>"OUR QUALITY SPEAKS FOR ITSELF"</h5>
        </div>
        <div className="col m4 l4 right-align hide-on-med-and-down">
          <a href="https://www.facebook.com/commonwealthhomedesigns/"><img className="responsive-img" src={followFB} alt="" /></a>
        </div>
      </div>
    </div>

    <div className="topImg parallax"></div>

  </div>
);

export default Header;