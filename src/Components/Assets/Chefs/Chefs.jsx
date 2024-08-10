import React from 'react';
import './Chefs.scss';
import Chefteam1 from '../images/chef-team1.jpg';
import Chefteam3 from '../images/chef-team3.jpg';
import Chefteam6 from '../images/chef-team6.jpg';
import Chefteam7 from '../images/chef-team7.jpg';

const Chefs = () => {
  return (
    <div>
        <div>
            <p>Meet Our Chefs</p>
            <h1>OUR CHEFS</h1>
        </div>
        <div>
            <div>
                <img src={Chefteam1} /> 
            </div>
            <div>
                <img src={Chefteam3} /> 
            </div>
            <div>
                <img src={Chefteam6} /> 
            </div>
            <div>
                <img src={Chefteam7} />  
            </div>
        </div>
        <div>
            <h3>Special Offer</h3>
            <h1>
                GRAND ITALIANO PIZZA<br />
                30% OFF FRIDAY ONLY
            </h1>
            <button id="book-button">BOOK A TABLE</button>
        </div>
    </div>
    
  )
}

export default Chefs