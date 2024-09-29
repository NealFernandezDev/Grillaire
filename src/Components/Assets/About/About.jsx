import React from 'react'
import './About.scss'
import Signature from '../images/signature.png'
import AboutBig from '../images/about-big.png'
import AboutSmall from '../images/about-small.jpg'
const About = () => {
  return (
    <div id="about">
        <div id="about-text">
            <h4>Few words about us <div id="line"></div></h4>
            <h1>ABOUT US</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae repellendus 
                enim velit consequatur nemo, porro inventore dignissimos, atque laboriosam aspernatur 
                eum deleniti sit explicabo culpa, voluptas saepe. Voluptates, exercitationem, est. 
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae repellendus enim 
                velit consequatur nemo, porro inventore dignissimos, atque laboriosam aspernatur eum 
                deleniti sit explicabo culpa, voluptas saepe. Voluptates, exercitationem, est. 
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae repellendus 
                enim velit consequatur nemo, porro inventore dignissimos, atque laboriosam aspernatur 
                eum deleniti sit explicabo culpa, voluptas saepe. Voluptates, exercitationem, est.
            </p>
            <img src={Signature} alt="Signature"/>
        </div>
        <div id="about-stats">
            <div id="visitors">
                <h1>150+</h1>
                <p>VISITORS DAILY</p>
            </div>
            <div id='feedback'>
                <h1>100%</h1>
                <p>POSITIVE FEEDBACK</p>
            </div>
            <div id="awards">
                <h1>25+</h1>
                <p>AWARDS</p>
            </div>
        </div>
        <div id="about-images">
            <div id="big-container">
                <img id="big" src={AboutBig} alt="About Big"/>
            </div> 
            <div id="small-container">
                <div id="small-background"></div>
                <img id="small" src={AboutSmall} alt="About Small"/>
            </div>
                       
        </div>
    </div>
  )
}

export default About