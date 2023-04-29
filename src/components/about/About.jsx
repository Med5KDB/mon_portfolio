import React from 'react'
import AboutData from './AboutData'
import './about.css';
import AboutImg from '../../assets/me.JPG'


const About = () => {
  return (
    <section className='about section' id='about'>
        <div className="about__container container grid">
            <h2>About Me</h2>
            <span>Some information to know</span>
            <div className="about__content">
  
                <img src={AboutImg} alt='' className='about__image'/>
            
                <AboutData />

                
            </div>
            
            
        </div>
      
    </section>
  )
}

export default About
