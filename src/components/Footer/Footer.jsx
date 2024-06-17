import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>consectetur deserunt eu enim sed dolor sunt fugiat et irure irure officia ipsum mollit aute nulla et veniam non eu anim veniam anim consectetur non veniam consequat sed Duis cupidatat</p>
                <div className='footer-social-icons'>
                  <img src={assets.facebook_icon}/>
                  <img src={assets.twitter_icon}/>
                  <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className='footer-content-center'>
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className='footer-content-right'>
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-6376430047</li>
                <li>contacttomato@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 Tomato.com - All Rigth Reserved.</p>
    </div>
  )
}

export default Footer