import React, { useState } from 'react'
import "./header.css";

const Header = () => {
  
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  
 
  return (
    <header className='header'>
      <div className='container'>
        <h3>Med 5</h3>
        <ul className={click? 'nav-menu active':'nav-menu'}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        
        <div className='show-menu' onClick={handleClick}>
          {!click?(<i class="uil uil-apps toggle"></i>):<i class="uil uil-times close"></i>}  
        </div>
      </div>
    </header>
  )
}

export default Header
