import React from 'react'
import '../Section2/Section2.scss'
import man2 from '../assets/man2.png'
import zigzad2 from '../assets/zigzad2.png'

const Section2 = () => {
  return (
    <div className='container2'>
        <div className="about2">
            <h3>About me <span>.</span></h3>
            <p>I'm Justin Vaccaro and i do web design, Graphic Design, User Experiences. habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
        </div>
        <div className="man2">
            <img className='zigzad2' src={zigzad2} alt="" />
            <img className='man2img' src={man2} alt="" />
        </div>
    </div>
  )
}

export default Section2