import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

return(
    <>
    
    <div className='navbar'>
      <div className='navbar-container container'>
        <NavLink to='/' className="navbar-logo">
          
          Food Sensitivity Tracker
        </NavLink>
        <div className='menu-icon' onClick={handleClick}>
       
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/recipes' className='nav-links' onClick={closeMobileMenu}>
              Recipes
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/recipes/new' className='nav-links' onClick={closeMobileMenu}>
              Add recipe
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/recipes/planner' className='nav-links' onClick={closeMobileMenu}>
              Track Recipes with Sensitivies and Allergies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
   
    </>
  )
} 

export default Navbar;

