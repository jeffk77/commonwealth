import React from 'react';

import anniversaryLogo from '../assets/images/anniversaryLogo.png';

const LogoBox = () => (
  <div>

    <div className="logoBox">
      <img src={anniversaryLogo} className="responsive-img annLogo" alt="Anniversary Logo" />
    </div>

  </div>
);

export default LogoBox;