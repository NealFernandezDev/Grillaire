import React, {useState} from 'react'
import Logo from '../images/logo.png'
import './Header.scss'
import Instagram from '../images/instagram.png'
import Facebook from '../images/facebook.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'

import InstagramHover from '../images/instagram-hover.png';
import FacebookHover from '../images/facebook-hover.png';
import TwitterHover from '../images/twitter-hover.png';
import YoutubeHover from '../images/youtube-hover.png';

import Location from '../images/map.png'
import Phone from '../images/phone-call.png'


const Header = () => {

    const [facebookIcon, setFacebookIcon] = useState(Facebook);
    const [twitterIcon, setTwitterIcon] = useState(Twitter);
    const [instagramIcon, setInstagramIcon] = useState(Instagram);
    const [youtubeIcon, setYoutubeIcon] = useState(Youtube);
  
return (
    <div id='header'>
      <div id="upper-header">
        <div id="phone-address">
          <p><img id='phone' src={Location} alt="Location"/>2900 Lapeer Rd, Port Hurons, MI 49070 <img id="phone" src={Phone} alt="Phone"/>+1 
            (800) 478-42-51</p>
        </div>
        <div id ="social-icons">
          <a href="/#">
            <img id="social1" src={facebookIcon} alt="Facebook"
              onMouseEnter={() => setFacebookIcon(FacebookHover)}
              onMouseLeave={() => setFacebookIcon(Facebook)}/>
          </a>
          <a href="/#">
            <img id='social1' src={twitterIcon} alt="Twitter"
              onMouseEnter={() => setTwitterIcon(TwitterHover)} 
              onMouseLeave={() => setTwitterIcon(Twitter)}/>
          </a>
          <a href="/#">
            <img id='social' src={instagramIcon} alt="Instagram"
              onMouseEnter={() => setInstagramIcon(InstagramHover)}
              onMouseLeave={() => setInstagramIcon(Instagram)}/>
          </a>
          <a href="/#">
            <img id='social' src={youtubeIcon} alt="Youtube"
              onMouseEnter={() => setYoutubeIcon(YoutubeHover)}
              onMouseLeave={() => setYoutubeIcon(Youtube)}/>
          </a>
        </div>
      </div>
      <div id="lower-header">
        <div id="logo">
          <a href ="/#"><img src={Logo} alt='Logo' /></a>
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
          <button id='book-button'><a href="/#">BOOK A TABLE</a></button>
        </div>
      </div>
    </div>
  )
}

export default Header