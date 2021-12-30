import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';
i

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
          <div className='social-icons'>
            <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/aaron-feingold-1a76ba1b4/' aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;