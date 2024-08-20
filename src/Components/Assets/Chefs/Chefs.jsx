import React from 'react';
import './Chefs.scss';
import Chefteam1 from '../images/chef-team1.jpg';
import Chefteam3 from '../images/chef-team3.jpg';
import Chefteam6 from '../images/chef-team6.jpg';
import Chefteam7 from '../images/chef-team7.jpg';
import Slider from 'react-slick';


const chefsData = [
    {
      id: 'chef1',
      img: Chefteam1,
      name: 'Chef John Doe',
      position: 'Head Chef',
      social: {
        facebook: 'https://www.facebook.com/chef1',
        twitter: 'https://twitter.com/chef1',
        instagram: 'https://www.instagram.com/chef1',
      },
    },
    {
      id: 'chef3',
      img: Chefteam3,
      name: 'Chef Jane Smith',
      position: 'Sous Chef',
      social: {
        facebook: 'https://www.facebook.com/chef3',
        twitter: 'https://twitter.com/chef3',
        instagram: 'https://www.instagram.com/chef3',
      },
    },
    {
      id: 'chef6',
      img: Chefteam6,
      name: 'Chef Carlos Gomez',
      position: 'Pastry Chef',
      social: {
        facebook: 'https://www.facebook.com/chef6',
        twitter: 'https://twitter.com/chef6',
        instagram: 'https://www.instagram.com/chef6',
      },
    },
    {
      id: 'chef7',
      img: Chefteam7,
      name: 'Chef Maria Rodriguez',
      position: 'Junior Chef',
      social: {
        facebook: 'https://www.facebook.com/chef7',
        twitter: 'https://twitter.com/chef7',
        instagram: 'https://www.instagram.com/chef7',
      },
    },
  ];

const Chefs = () => {
  return (
    <div id="chefs-container">
        <div id="chefs-text">
            <p>Meet Our Chefs</p>
            <h1>OUR CHEFS</h1>
        </div>
        {/*
        <div id="chefs-images">
            <div id="chef1">
                <img src={Chefteam1} /> 
            </div>
            <div id="chef3">
                <img src={Chefteam3} /> 
            </div>
            <div id="chef6">
                <img src={Chefteam6} /> 
            </div>
            <div id="chef7">
                <img src={Chefteam7} />  
            </div>
        </div>
        */}
        <div id="chefs-carousel">
        {chefsData.map(chef => (
          <div className="chef-item" key={chef.id}>
            <img src={chef.img} alt={chef.name} />
            <div className="chef-info">
              <h2>{chef.name}</h2>
              <p>{chef.position}</p>
              <div className="social-icons">
                <a href={chef.social.facebook} target="_blank" rel="noopener noreferrer">FB</a>
                <a href={chef.social.twitter} target="_blank" rel="noopener noreferrer">TW</a>
                <a href={chef.social.instagram} target="_blank" rel="noopener noreferrer">IG</a>
              </div>
            </div>
          </div>
        ))}
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