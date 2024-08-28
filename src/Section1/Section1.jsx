import React from "react";
import icon1 from '../assets/facebookicon.png'
import icon2 from '../assets/instagram.png'
import icon3 from '../assets/twitter.png'
import icon4 from '../assets/linkedin.png'
import picture1 from '../assets/man1.png'


import '../Section1/Section1.scss'

// import icon1 from '../assets/icon1.png'; 

const Section1 = () => {
  return (
    <>
      <div className="container">
        <div className="leftBox">
            <p>Hola! I’m</p>
            <p>Justin Vaccaro</p>
            <p>Creative</p>
            <p>Designer <span>.</span></p>
            <p>Since creative designers often interact with creative teams, managers and clients, they need strong communication skills.</p>
            <div className="icons">
                <img src={icon1} alt="facebookicon" />
                <img src={icon2} alt="instagram" />
                <img src={icon3} alt="twitter" />
                <img src={icon4} alt="linkedin" />
            </div>
            <button className="cvHere"><a href="">CV Here</a></button>
        </div>
        <div className="rightBox">
        <img src={picture1} alt="picture" />
        </div>
      </div>
    </>
  );
};

export default Section1;
