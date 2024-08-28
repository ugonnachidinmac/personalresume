import React from "react";

import uiIcon from "../assets/uiIcon.png";
import webDesign from "../assets/webDesign.png";

import '../Section3/Section3.scss';

const Section3 = () => {
  return (
    <div className="container3">
      <div className="service">
        <h3>Services <span>.</span></h3>
        <p>
          Our team members are experts in all facets of the design industry
          including: print design, illustration, branding, identity and more.
        </p>
      </div>
      <div className="serviceDetails">
        <div className="service1">
          <img src={uiIcon} alt="" />
          <h5>Web Design</h5>
          <p>
            Why money's in that office, right If she start giving me some
            bullshit about it ain't there someplace or anywhere.
          </p>
        </div>
        <div className="service1">
          <img src={uiIcon} alt="" />
          <h5>UI/UX Design</h5>
          <p>
            Why money's in that office, right If she start giving me some
            bullshit about it ain't there someplace or anywhere.
          </p>
        </div>
        <div className="service1">
          <img src={webDesign} alt="" />
          <h5>WP Developing</h5>
          <p>
            Why money's in that office, right If she start giving me some
            bullshit about it ain't there someplace or anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
