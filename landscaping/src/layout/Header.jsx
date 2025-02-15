import React from 'react'
import "./layout.css"
import logo from "../images/PM.png"
import { PageLink, PrimaryButton } from '../common-components/StyledComponent'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
  
    const handleLogin = ()=>{
        console.log("hello login")
        navigate("/login")
    }
  return (
    <div className='header-container'>
      <div className="logo-container">
        <img className='logo-image' src={logo} alt="logo" />
      </div>
      <div className="header-container-links">
        <PageLink title="Home" path="/"/>
        <PageLink title="About Us" path="/about"/>
        <PageLink title="Services" path="/services"/>
        <PageLink title="Shop" path="/shop"/>
        <PageLink title="Contact" path="/contact"/>
        <PrimaryButton className='primary-button' onClick={handleLogin}>Login</PrimaryButton>
      </div>
    </div>
  )
}

export default Header
