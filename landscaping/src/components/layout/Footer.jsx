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
        <LSPara>© 2025 PM. All rights reserved.</LSPara>
      </div>
    </div>
  )
}

export default Footer
