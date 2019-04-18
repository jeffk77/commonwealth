import React from 'react';

import commonwealthLogo from '../assets/images/commonwealthLogo.png';

const Footer = () => (
  <div>
    <div className="footerBar">
      <h6>45 YEARS EXPERIENCE • 1974 - 2019 • LICENSED AND INSURED</h6>
    </div>

    <footer>

      <img src={commonwealthLogo} className="responsive-img logo" alt="Commonwealth Home Designs Logo" />
    </footer>

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

  </div>
);

export default Footer;