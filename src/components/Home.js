import React from 'react';

import guarantee100 from '../assets/images/100guarantee.png';
import anniversaryLogo from '../assets/images/anniversaryLogo.png';
import hgtvLogo from '../assets/images/hgtvLogo.png';
import randrecommended from '../assets/images/randrecommended.png';

const Home = () => (
  <div>
    <div className="contactBox">
      <h1>"Our Quality Speaks for Itself"</h1>
      <div className="row">
        <div className="col s6">
          <h2>BARRIE</h2>
          <h4>ALLISTON<br />
            ANGUS</h4>
          <h2>705-984-3364</h2>
        </div>
        <div className="col s6">
          <h2>OSHAWA</h2>
          <h4>WHITBY<br />
            AJAX</h4>
          <h2>289-404-2888</h2>
        </div>
      </div>
    </div>

    <div className="logoBox">
      <img className="responsive-img logoC" src={guarantee100} alt="100% Guaranteed" />
      <img className="responsive-img logoC" src={anniversaryLogo} alt="Anniversary Logo" />
      <img className="responsive-img logoC" src={hgtvLogo} alt="HGTV Logo" />
      <img className="responsive-img logoC" src={randrecommended} alt="Rated & Recommended" />
    </div>

    <div className="bonusBox">
      <div className="container">
        <h2>BONUS OFFERING</h2>
        <p>
          Watch your favourite T.V. shows and T.V. series or get ready for an exciting new hockey
          season with our beloved Toronto Maple Leafs or your personal favourite NHL team on us
          with your new 55” Brand Name High Definition TV as a bonus when you let us do a complete
          basement finishing for you. Our professional crews will turn your unused area into a
          beautiful and functional part of your home.<br /><br />
          
          We are specialists in design and finishing of basement areas that will add a truly fabulous
          new living space for entertaining, personal pleasure or add a private space for a family
          member or visiting guests. Together we design this new living space tailored to your
          needs with all the amenities necessary for your lifestyle. Call us today for a no
          obligation quote when we will show you a gallery of completed finished basements
          that will give you all the necessary ideas to make your decision easy.
        </p>
      </div>
    </div>
  </div>
);

export default Home;