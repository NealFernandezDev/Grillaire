import React from 'react'
import Logo from '../images/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div id='header'>
      <div id="upper-header">
        <div>
          <p>2900 Lapeer Rd, Port Hurons, MI 49070 +1 
            (800) 478-42-51</p>
        </div>
        <div>
          <img/>
          <img/>
          <img/>
          <img/>
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
        <div>
          <button id='book-button'>BOOK A TABLE</button>
        </div>
      </div>
    </div>
  )
}

export default Header