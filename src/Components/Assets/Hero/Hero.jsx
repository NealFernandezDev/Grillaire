import React from 'react'
import Chef from '../images/chef.png'
import RecipeBook from '../images/recipe-book.png'
import IceBucket from '../images/ice-bucket.png'
import Location from '../images/location.png'

const Hero = () => {
  return (
    <div>
        <div>
            <h1>
                GRILL RESTAURANT <br />
                FOR THE WHOLE FAMILY
            </h1>
        </div>
        <div>
            <div>
                <img src={Chef} />
                <h2>EXPERIENCED CHEFS</h2>
            </div>
            <div>
                <img src={RecipeBook} />
                <h2>ORIGINAL RECIPES</h2>
            </div>
            <div>
                <img src={IceBucket} />
                <h2>FRESH INGREDIENTS</h2>
            </div>
            <div>
                <img src={Location} />
                <h2>CONVENIENT LOCATION</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero