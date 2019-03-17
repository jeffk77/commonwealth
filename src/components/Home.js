import React from 'react';

import guarantee100 from '../assets/images/100guarantee.png';
import anniversaryLogo from '../assets/images/anniversaryLogo.png';
import hgtvLogo from '../assets/images/hgtvLogo.png';
import randrecommended from '../assets/images/randrecommended.png';

import basement1 from '../assets/images/basement1.jpeg';
import basement2 from '../assets/images/basement2.jpeg';
import basement3 from '../assets/images/basement3.jpeg';
import basement4 from '../assets/images/basement4.jpeg';

import kitchBath1 from '../assets/images/kitchBath1.jpeg';
import kitchBath2 from '../assets/images/kitchBath2.jpeg';
import kitchBath3 from '../assets/images/kitchBath3.jpeg';
import kitchBath4 from '../assets/images/kitchBath4.jpeg';

import glazedWindows from '../assets/images/glazedWindows.jpeg';

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
        <br />
        <div className="row">
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={basement1} alt="Basement 1 Pic" />
          </div>
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={basement2} alt="Basement 2 Pic" />
          </div>
        </div><br />
        <div className="row">
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={basement3} alt="Basement 3 Pic" />
          </div>
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={basement4} alt="Basement 4 Pic" />
          </div>
        </div>
      </div>
    </div>

    <div className="specializeBox">
      <div className="container">
        <h2>WE SPECIALIZE IN KITCHEN, BATHROOM REMODELS & BASEMENT REFINISHING</h2>
        <br />
        <div className="row">
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={kitchBath1} alt="Kitchen/Bath 1 Pic" />
          </div>
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={kitchBath2} alt="Kitchen/Bath 2 Pic" />
          </div>
        </div><br />
        <div className="row">
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={kitchBath3} alt="Kitchen/Bath 3 Pic" />
          </div>
          <div className="col s12 m12 l6">
            <img className="materialboxed expandImg responsive-img" src={kitchBath4} alt="Kitchen/Bath 4 Pic" />
          </div>
        </div>
      </div>
      <br />
      <h4>Kitchen and bathroom remodels are a wise and prudent investment for your home that will add
          significant value and pleasure for years to come. Call us for a no obligation consultation.</h4>
    </div>

    <div className="aboutBox">
      <div className="container">
        <h2>ABOUT COMMONWEALTH HOME DESIGN</h2>
        <br />
        <p>
          At Commonwealth Home Design we pledge to satisfy you and make your living space unique to your
          personal lifestyle.
  
          We will cater to your every need to ensure our project exceeds your expectations and brings rave
          reviews from you the homeowners, from relatives, friends and neighbours. Rest assured we will
          complete your renovation in a timely fashion and when we leave the residence it will be spotless
          and sparkly clean as we realize these are factors for consumers in their decision making process.
          Whether it is a kitchen, bathroom remodel or adding additional living space by utilizing your
          basement area to create a family retreat, entertainment area or guest rooms for loved ones or friends,
          we will guide you with our professional experience and expertise.<br /><br />
            
          We also specialize in exterior design that will give your home a gorgeous new and eye catching look.
          Please refer to our Landscaping Gallery, Deck Gallery and Walkway Gallery. We offer high quality
          insulated replacement windows that come with a lifetime warranty plus high quality insulated
          replacement door systems that will give you security and peace of mind. In addition we offer
          a wide range of renovation services such as lifetime roofing, waterproofing, replacing of older
          interior doors and trim work, hardwood flooring, ceramic tiling, painting services and landscape
          design to beautify the exterior of your home including patterned concrete drives and walkways
          in complimentary colours to match your existing facade and trim work.<br /><br />
            
          Contact us and we will discuss all of your needs with our no obligation in home consultation.
          We have satisfied hundreds and hundreds of families in our 45 years doing professional
          interior and exterior makeovers. We will always be there for you after the completion
          of our project because we value each and every client like family. It is proven that any
          renovation you grace your home with is truly a wise and prudent investment. We offer
          professional and expert workmanship at very competitive prices. If you are home proud
          we are the company for you. We promise. Call us for a no obligation consultation.
        </p>
      </div>
    </div>

    <div className="aboutImg parallax"></div>

    <div className="saleBox">
      <h2>SPECIAL ON HIGH QUALITY REPLACEMENT WINDOWS</h2>
      <h4>TRIPLE GLAZED WINDOWS FOR THE PRICE OF DOUBLE GLAZED</h4>

      <div className="container">
        <br />
        <img className="materialboxed responsive-img" src={glazedWindows} alt="Glazed Windows Diagram Pic" />

        <p>
          Get ready for fall and winter with our High Quality replacement thermal window special. We will upgrade
          your thermal glass from double glazed to triple glazed at no charge to you so you may enjoy the great
          energy savings with triple glazing. The benefits of low E argon triple glazed replacement windows will
          save you money and will give you increased comfort year round and are totally maintenance free. We have              many styles to choose from for your individual taste and every style of home. Our premium quality windows
          will give you peace of mind for years to come. Let us show you the benefits with an in home no cost demonstration.
        </p>

      </div>
    </div>

  </div>
);

export default Home;