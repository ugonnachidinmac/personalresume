import React from 'react'
import behance from '../assets/behance.png'
import google from '../assets/google.png'
import dribble from '../assets/dribble.png'
import upLabs from '../assets/upLabs.png'
import design99 from '../assets/design99.png'

import '../Section4/Section4.scss'

const Section4 = () => {
  return (
    <div className='container4'>
        <div className="Contributors">
            <h3>Contributors<span>.</span></h3>
            <p>They support products that simplify and automate decent mechanic processes saving time for activities.</p>
        </div>
        <div className="firstImgRow">
            <img src={behance} alt="behance" />
            <img src={google} alt="google" />
            <img src={dribble} alt="dribble" />
        </div>
        <div className="secondImgRow">
            <img src={upLabs} alt="upLabs" />
            <img src={design99} alt="design99" />
        </div>
    </div>
  )
}

export default Section4