import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer-container'>
     
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
             
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



