import React, { useState } from 'react'
import './Menu.scss'
import GrilledPork from '../images/product-big-1.jpg'
import GrilledSeafood from '../images/product-big-2.jpg'
import GrilledBuffaloWings from '../images/product-big-3.jpg';
import GrilledRibEye from '../images/product-big-4.jpg';
import StickyGrilledChicken from '../images/product-big-5.jpg'



const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState('STEAK');

    const menuItems = {
        STEAK: [
            { name: 'Grilled Pork Chips', 
              price: '$20.50', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Grilled Seafood Platter', 
              price: '$18.30', 
              image: GrilledSeafood, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Lobster tails, sea scallops, shrimps, smoked paprika, thyme, parsley, mint, capers, chili pepper' },
            { name: 'Grilled Buffalo Wings', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'Grilled Ribbed Eye Steak', 
              price: '$13.45', 
              image: GrilledRibEye, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in rib eye chop, olive oil, French butte, lemon juice, parsley, romaine lettuce' },
            { name: 'Sticky Grilled Chicken', 
              price: '$14.75', 
              image: StickyGrilledChicken, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken drumsticks, soy sauce, honey, green onion, garlic, vegetable oil, sesame seeds' },
            { name: 'Grilled Buffalo Wings', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'Grilled Buffalo Wings', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
            { name: 'Grilled Buffalo Wings', 
              price: '$10.85', 
              image: GrilledBuffaloWings, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Chicken wings, apple cider vinegar, honey, hot sauce, garlic, black pepper, unsalted butter' },
        ],
        RIBS: [
            { name: 'Caesar Salad', 
              price: '$7', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Greek Salad', 
              price: '$6', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Caprese Salad', 
              price: '$8', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
        ],
        SAUSAGE: [
            { name: 'Lasagna', 
              price: '$12', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Grilled Chicken', 
              price: '$15', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Ribeye Steak', 
              price: '$20', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
        ],
        CHICKEN: [
            { name: 'Tiramisu', 
              price: '$6', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Cheesecake', 
              price: '$7', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Chocolate Lava Cake', 
              price: '$8', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
        ],
        DESSERTS: [
            { name: 'Lemonade', 
              price: '$3', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Cappuccino', 
              price: '$4', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Red Wine', 
              price: '$9', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
        ],
        DRINKS: [
            { name: 'Chef’s Special Pasta', 
              price: '$18', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Seafood Platter', 
              price: '$25', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
            { name: 'Roast Duck', 
              price: '$22', 
              image: GrilledPork, 
              description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
              ingredients: 'Bone-in pork chops, honey, red pepper, cumin, apple cider vinegar, vegetable oil' },
        ],
    };

    const renderMenuItems = () => {
        return menuItems[selectedCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-description">{item.description}</span>
              <span className="item-price">{item.price}</span>
            </div>
          </div>
        ));
    };
  return (
    <div>
        <div>
            <p>Our Menu</p>
            <h1>MENU</h1>
        </div>
        <div className="menu-buttons">
            <button onClick={() => setSelectedCategory('STEAK')}>STEAK</button>
            <button onClick={() => setSelectedCategory('RIBS')}>RIBS</button>
            <button onClick={() => setSelectedCategory('SAUSAGE')}>SAUSAGE</button>
            <button onClick={() => setSelectedCategory('CHICKEN')}>CHICKEN</button>
            <button onClick={() => setSelectedCategory('DESSERTS')}>DESSERTS</button>
            <button onClick={() => setSelectedCategory('DRINKS')}>DRINKS</button>
        </div>
        <div className="menu-items">
            {renderMenuItems()}
        </div>
    </div>
  )
}

export default Menu