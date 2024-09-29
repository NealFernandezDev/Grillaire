import React, { useState } from 'react'
import './Menu.scss'
import GrilledPork from '../images/product-big-1.jpg'
import GrilledSeafood from '../images/product-big-2.jpg'
import GrilledBuffaloWings from '../images/product-big-3.jpg';
import GrilledRibEye from '../images/product-big-4.jpg';
import StickyGrilledChicken from '../images/product-big-5.jpg'
import GrilledPotatoWings from '../images/product-big-6.jpg'



const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState('STEAK');

    const menuItems = {
        STEAK: [
            { name: 'GRILLED PORK CHIPS', 
              price: '$20.50', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'GRILLED SEAFOOD PLATTER', 
              price: '$18.30', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Lobster tails, sea scallops, shrimps, smoked paprika, thyme, parsley, mint, capers, chili pepper' },
            { name: 'GRILLED BUFFALO WINGS', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'GRRILLED RIB EYA STEAK', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'STICKY GRILLED CHICKEN', 
              price: '$14.75', 
              image: StickyGrilledChicken, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken drumsticks, soy sauce, honey, green onion, garlic, vegetable oil, sesame seeds' },
            { name: 'GRILLED POTATOES', 
              price: '$8.30', 
              image: GrilledPotatoWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Large Idaho or russet potatoes, garlic, black pepper, olive oil, freshly chopped herbs' },
            { name: 'BEEF AND SAUSAGE KEBABS', 
              price: '$20.15', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Fresh sausage, beef tri-tip, red wine vinegar, paprika, tomato, onion, cilantro' },
            { name: 'GRILLED SALMON', 
              price: '$16.95', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Wild salmon, broccoli, sesame seeds, sesame oil, black pepper, vegetable oil, carrots' },
        ],
        RIBS: [
            { name: 'GRILLED BUFFALO WINGS', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'GRRILLED RIB EYA STEAK', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'STICKY GRILLED CHICKEN', 
              price: '$14.75', 
              image: StickyGrilledChicken, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken drumsticks, soy sauce, honey, green onion, garlic, vegetable oil, sesame seeds' },
            { name: 'GRILLED POTATOES', 
              price: '$8.30', 
              image: GrilledPotatoWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Large Idaho or russet potatoes, garlic, black pepper, olive oil, freshly chopped herbs' },
            { name: 'BEEF AND SAUSAGE KEBABS', 
              price: '$20.15', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Fresh sausage, beef tri-tip, red wine vinegar, paprika, tomato, onion, cilantro' },
            { name: 'GRILLED SALMON', 
              price: '$16.95', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Wild salmon, broccoli, sesame seeds, sesame oil, black pepper, vegetable oil, carrots' },          
        ],
        SAUSAGE: [
            { name: 'GRILLED SEAFOOD PLATTER', 
              price: '$18.30', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Lobster tails, sea scallops, shrimps, smoked paprika, thyme, parsley, mint, capers, chili pepper' },
            { name: 'GRRILLED RIB EYA STEAK', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'STICKY GRILLED CHICKEN', 
              price: '$14.75', 
              image: StickyGrilledChicken, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken drumsticks, soy sauce, honey, green onion, garlic, vegetable oil, sesame seeds' },
            { name: 'GRILLED POTATOES', 
              price: '$8.30', 
              image: GrilledPotatoWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Large Idaho or russet potatoes, garlic, black pepper, olive oil, freshly chopped herbs' },
            { name: 'GRILLED SALMON', 
              price: '$16.95', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Wild salmon, broccoli, sesame seeds, sesame oil, black pepper, vegetable oil, carrots' }, 
        ],
        CHICKEN: [
            { name: 'GRILLED BUFFALO WINGS', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'GRRILLED RIB EYA STEAK', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'GRILLED POTATOES', 
              price: '$8.30', 
              image: GrilledPotatoWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Large Idaho or russet potatoes, garlic, black pepper, olive oil, freshly chopped herbs' },
            { name: 'BEEF AND SAUSAGE KEBABS', 
              price: '$20.15', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Fresh sausage, beef tri-tip, red wine vinegar, paprika, tomato, onion, cilantro' },
            { name: 'GRILLED SALMON', 
              price: '$16.95', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Wild salmon, broccoli, sesame seeds, sesame oil, black pepper, vegetable oil, carrots' }, 
        ],
        DESSERTS: [
            { name: 'GRILLED SEAFOOD PLATTER', 
              price: '$18.30', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Lobster tails, sea scallops, shrimps, smoked paprika, thyme, parsley, mint, capers, chili pepper' },
            { name: 'GRRILLED RIB EYA STEAK', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'STICKY GRILLED CHICKEN', 
              price: '$14.75', 
              image: StickyGrilledChicken, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken drumsticks, soy sauce, honey, green onion, garlic, vegetable oil, sesame seeds' },
            { name: 'GRILLED POTATOES', 
              price: '$8.30', 
              image: GrilledPotatoWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Large Idaho or russet potatoes, garlic, black pepper, olive oil, freshly chopped herbs' },
            { name: 'GRILLED SALMON', 
              price: '$16.95', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Wild salmon, broccoli, sesame seeds, sesame oil, black pepper, vegetable oil, carrots' }, 
        ],
        DRINKS: [
            { name: 'GRILLED PORK CHIPS', 
              price: '$20.50', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'GRILLED SEAFOOD PLATTER', 
              price: '$18.30', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Lobster tails, sea scallops, shrimps, smoked paprika, thyme, parsley, mint, capers, chili pepper' },
            { name: 'GRILLED BUFFALO WINGS', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'GRRILLED RIB EYA STEAK', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'STICKY GRILLED CHICKEN', 
              price: '$14.75', 
              image: StickyGrilledChicken, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken drumsticks, soy sauce, honey, green onion, garlic, vegetable oil, sesame seeds' },
            { name: 'GRILLED POTATOES', 
              price: '$8.30', 
              image: GrilledPotatoWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Large Idaho or russet potatoes, garlic, black pepper, olive oil, freshly chopped herbs' },
            { name: 'BEEF AND SAUSAGE KEBABS', 
              price: '$20.15', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Fresh sausage, beef tri-tip, red wine vinegar, paprika, tomato, onion, cilantro' },
            { name: 'GRILLED SALMON', 
              price: '$16.95', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Wild salmon, broccoli, sesame seeds, sesame oil, black pepper, vegetable oil, carrots' }, 
        ],
    };

    const renderMenuItems = () => {
        return menuItems[selectedCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <span className="item-name">{item.name}</span>
              <br />
              <span className="item-price">{item.price}</span>
              <br />
              <div id="dotted-line"></div>
              <br />
              <span className="item-description">{item.description}</span>
              <br />
              <span className="item-ingredients">{item.ingredients}</span>
            </div>
          </div>
        ));
    };
  return (
    <div className="menu-container">
      <div className="menu-title">
        <h4>Our Menu<div id="line"></div></h4>
        <h1>MENU</h1>
      </div>
      <div className="menu-buttons">
        <button className={selectedCategory === 'STEAK' ? 'active' : ''} onClick={() => setSelectedCategory('STEAK')}>STEAK</button>
        <button className={selectedCategory === 'RIBS' ? 'active' : ''} onClick={() => setSelectedCategory('RIBS')}>RIBS</button>
        <button className={selectedCategory === 'SAUSAGE' ? 'active' : ''} onClick={() => setSelectedCategory('SAUSAGE')}>SAUSAGE</button>
        <button className={selectedCategory === 'CHICKEN' ? 'active' : ''} onClick={() => setSelectedCategory('CHICKEN')}>CHICKEN</button>
        <button className={selectedCategory === 'DESSERTS' ? 'active' : ''} onClick={() => setSelectedCategory('DESSERTS')}>DESSERTS</button>
        <button className={selectedCategory === 'DRINKS' ? 'active' : ''} onClick={() => setSelectedCategory('DRINKS')}>DRINKS</button>
      </div>
      <div className="menu-items">
        {renderMenuItems()}
    </div>
  </div>
  )
}

export default Menu