import React from 'react'
import './Hero.scss'

const Hero = (props) => {
  return (
    <div className='hero-container'>
        <div className="hero-content">
            <span>👋 Meet Personally</span>
            <h2>{props.heading}</h2>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Hero