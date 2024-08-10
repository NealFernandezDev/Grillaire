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
    </div>
  )
}

export default Chefs