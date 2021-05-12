import React from 'react';
import {FaTwitter, FaFacebookF, FaLinkedinIn, FaRegCopyright} from 'react-icons/fa'
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__main-content">
      <div className="footer__header">
        <img src="./images/guy+cat.svg" alt="illustration of a person at a computer with cat looking over speaker with bubbly eyes"/>
        <h2 className="footer__subtitle">Your Journey Starts Here.</h2>
        <button className="footer__contact white">Contact Us</button>
      </div>
      <div>
        <div className="footer__content">
          <h3>New York Head Quarters</h3>
          <p className="footer__text">102 Willer Way</p>
          <p className="footer__text">New York, NY 12842</p>
          <p className="footer__text">T: (123) 456-8723</p>
        </div>

        <div className="footer__content">
          <h3>Join Our Community</h3>
          <div className="footer__socials">
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
      </div>
        </div>
      </div>
      <div className="footer__trademark">
        <FaRegCopyright />
        LogoDesign Media. All rights reserved.
      </div>
    </section>
  )
}