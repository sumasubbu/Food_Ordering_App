import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './asset/logo.png';
import './index.css';

/**
 * Header
  - Logo
  - Nav items
 * Body
  - Search
  - Restaurant container 
   - Restaurant card
    - image
    - restaurant name
    - cuisine, eta delivery, star rating
    
 * Footer
   - Copyright
   - links  
   - Contact
   - Address
 */
// TODO: change the font weight for this div elements

const ResCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/30/022946e7-5595-4dcd-b1cb-42ddd9885a25_d8ed0aed-4dad-4001-a7b5-cab01294f611.jpg"
        alt="food-image"
      ></img>
      <h3 className='res-title'>Ciro's Pizzeria</h3>
      <div className="res-description">
      

      <h5 >Italian, Desserts, Pizzas, Pastas</h5>
      <h5>30 mins</h5>
      <h5>4.4 stars</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      <ResCard/>
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="brand-logo" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
