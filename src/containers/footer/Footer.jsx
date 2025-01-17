import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="logo" />
            <p>Crechterwoord K12 181 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Lot EL AMAL NR 15, EL AIOUN MOROCCO</p>
            <p>+212 6 24 65 84 71</p>
            <p>yousramansour2019@gmail.com</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="gpt3__footer-copyright">
          <p>©2023 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer