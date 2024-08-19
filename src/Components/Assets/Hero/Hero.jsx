import React from 'react'
import Chef from '../images/chef.png'
import RecipeBook from '../images/recipe-book.png'
import IceBucket from '../images/ice-bucket.png'
import Location from '../images/location.png'
import './Hero.scss'

const Hero = () => {
  return (
    <div id="hero">
        <div id="hero-bg"></div>
        <div id="hero-text">
            <h1>
                GRILL RESTAURANT <br />
                FOR THE WHOLE FAMILY
            </h1>
        </div>
        <div id="hero-containers">
            <div id="chef-container">
                <img id="chef-icon" src={Chef} alt='Chef'/>
                <h2 id="chef-text">EXPERIENCED CHEFS</h2>
            </div>
            <div id="recipe-book-container">
                <img id="recipe-book-icon" src={RecipeBook} alt='RecipeBook'/>
                <h2 id="recipe-book-text">ORIGINAL RECIPES</h2>
            </div>
            <div id="ice-bucket-container">
                <img id="ice-bucket-icon" src={IceBucket} alt='IceBucket'/>
                <h2 id="ice-bucket-text">FRESH INGREDIENTS</h2>
            </div>
            <div id="location-container">
                <img id="location-icon" src={Location} alt='Location'/>
                <h2 id="location-text">CONVENIENT LOCATION</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero