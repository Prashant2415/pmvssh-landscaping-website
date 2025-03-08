import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./layout.css"
import { LSLink } from '../../commonComponents/LSLinks'
import { PrimaryButton } from '../../commonComponents/ButtonComponent'
const Header = () => {
  const navigate = useNavigate();
  const handleRedirect =()=>{
    navigate("/addtocart")
  }
  return (
    <div className='header-container'>
      <h1 className='logo'><span className='logo-t'>T</span>PLANT</h1>
      <nav className='nav-container'>
        <ul className='ul-container'>
            <li className='li-links'><LSLink title="Home" to="/"/></li>
            <li className='li-links'><LSLink title="Shop" to="/shop"/></li>
            <li className='li-links'><LSLink title="About" to="/aboutus"/></li>
            <li className='li-links'><LSLink title="Contact" to="/contact"/></li>
        </ul>
      </nav>
      <div className="cart-login">
      <svg onClick={handleRedirect} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bag cart" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>
      <PrimaryButton>Login</PrimaryButton>
      </div>
    </div>
  )
}

export default Header
