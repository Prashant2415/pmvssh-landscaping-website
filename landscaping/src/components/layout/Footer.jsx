import React from 'react'
import "./layout.css"
import { LSPara, LSParaHeading } from '../../commonComponents/Common'
import { LSLink } from '../../commonComponents/LSLinks'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-content">
      <h1 className='logo'><span className='logo-t'>T</span>PLANT</h1>
      <LSPara>Let's take your free time by taking a vacation with us release stress and have a fun holiday</LSPara>
      
      </div>
      <div className="footer-link-container">
        {/* <ul className='footer-ul'>
          <li className='footer-li'>
            <LSLink to="/ourexperience" title="Our Experience" className="underline"/>
          </li>
          <li className='footer-li'>
            <LSLink to="/whychooseus" title="Why choose us" className="underline"/>
          </li>
          <li className='footer-li'>
            <LSLink to="/faq" title="FAQ" className="underline"/>
          </li>
          <li className='footer-li'>
            <LSLink to="/contact" title="Contact" className="underline"/>
          </li>
        </ul> */}
        <LSPara className='copyright'>© 2025 PM. All rights reserved.</LSPara>
      </div>
    </div>
  )
}

export default Footer
