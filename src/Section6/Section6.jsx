import React from "react";
import logo from "../assets/logo.png";
import icon1 from "../assets/facebookicon.png";
import icon2 from "../assets/instagram.png";
import icon3 from "../assets/twitter.png";
import icon4 from "../assets/linkedin.png";

import '../Section6/Section6.scss'

const Section6 = () => {
  return (
    <div className="container6">
      <div className="section6Up">
        <p>Contact.</p>
        <p>
          Truth is a deep kindness that teaches us to be content in our everyday
          life and share with the people the same happiness. the feeling of
          sunday is the same everywhere: heavy, melancholy, standing still.
        </p>
        <img src={logo} alt="logo" />
      </div>
    
        <div className="section6Down">
            <div className="iconsTwo">
                <img src={icon1} alt="facebookicon" />
                <img src={icon2} alt="instagram" />
                <img src={icon3} alt="twitter" />
                <img src={icon4} alt="linkedin" />
            </div>
            <p>© 2021 AbbVie Inc. . All rights reserved</p>
        </div>
</div>
    
  );
};

export default Section6;
