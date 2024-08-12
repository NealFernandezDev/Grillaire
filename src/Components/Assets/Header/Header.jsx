import React from 'react'
import Logo from '../images/logo.png'
import './Header.scss'
import Instagram from '../images/instagram (1).png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'

const Header = () => {
  return (
    <div id='header'>
      <div id="upper-header">
        <div>
          <p>2900 Lapeer Rd, Port Hurons, MI 49070 +1 
            (800) 478-42-51</p>
        </div>
        <div id ="social-icons">
          <img src={Facebook} alt="Facebook"/>
          <img src={Twitter} alt="Twitter"/>
          <img src={Instagram} alt="Instagram"/>
          <img src={Youtube} alt="Youtube"/>
        </div>
      </div>
      <div id="lower-header">
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <div>
          <nav>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>MENU</li>
              <li>GALLERY</li>
              <li>CONTACTS</li>
            </ul>
          </nav>
        </div>
        <div id="book-button-container">
          <button id='book-button'>BOOK A TABLE</button>
        </div>
      </div>
    </div>
  )
}

export default Header