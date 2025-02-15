import React from 'react'
import "./layout.css"
import { Link } from 'react-router-dom'
// import footerOne from "../images/footerOne.jpg";
// import footerTwo from "../images/footerTwo.jpg";
// import footerThree from "../images/footerThree.jpg";
const Footer = () => {
  return (
    <div className='footer-container'>
      {/* <img className='footer-image' src={footerTwo}alt="footer one" /> */}
      <div className="copyright-container">
      <p className='copy-right'>©2025 PM. All rights reserved</p>
      </div>
      <div className="footer-links">
        <Link className='f-link'>Term of Service</Link>
        <Link className='f-link'>Privacy Policy</Link>
      </div>

    </div>
  )
}

export default Footer
