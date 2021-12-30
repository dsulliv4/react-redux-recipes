import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdRestaurantMenu className='navbar-icon' />
              Food Sensitivity Tracker
            </Link>
          </div>
          <small className='website-rights'>Deirdre Sullivan © 2021</small>
      
        
        </div>
      </section>
    </div>
  );
}

export default Footer;