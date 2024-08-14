import React from 'react'
import Logo from '../images/logo.png'
import './Header.scss'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'
import Location from '../images/map.png'
import Phone from '../images/phone-call.png'

const Header = () => {
  return (
    <div id='header'>
      <div id="upper-header">
        <div id="phone-address">
          <p><img id='phone' src={Location} alt="Location"/>2900 Lapeer Rd, Port Hurons, MI 49070 <img id="phone" src={Phone} alt="Phone"/>+1 
            (800) 478-42-51</p>
        </div>
        <div id ="social-icons">
          <a href="/#"><img id="social1" src={Facebook} alt="Facebook"/></a>
          <a href="/#"><img id='social1' src={Twitter} alt="Twitter"/></a>
          <a href="/#"><img id='social' src={Instagram} alt="Instagram"/></a>
          <a href="/#"><img id='social' src={Youtube} alt="Youtube"/></a>
        </div>
      </div>
      <div id="lower-header">
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <div id="navigation">
          <nav>
            <ul>
              <li><a href="/#">HOME</a></li>
              <li><a href="/#">ABOUT US</a></li>
              <li><a href="/#">MENU</a></li>
              <li><a href="/#">GALLERY</a></li>
              <li><a href="/#">CONTACTS</a></li>
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