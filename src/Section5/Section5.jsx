import React from 'react'
import backgroundCup from '../assets/backgroundCup.png'
import backgrond2 from '../assets/backgrond2.png'
import backgrond1 from '../assets/backgrond1.png'
import background3 from '../assets/background3.png'
import background4 from '../assets/background4.png'

import '../Section5/Section5.scss'

const Section5 = () => {
  return (
    <div className='container5'>
        <div className="regularContent">
            <p>Our Regurlar Updated</p>
            <p>Portfolio.</p>
        </div>
        <div className="regularImg">
            <div className="leftImg">
                <img src={backgroundCup} alt="backgroundCup" />
            </div>
            <div className="rightImg">
                <img src={backgrond2} alt="backgrond2" />
                <img src={backgrond1} alt="" />
                <img src={background3} alt="background3" />
                <img src={background4} alt="background4" />
            </div>
        </div>
    </div>
  )
}

export default Section5