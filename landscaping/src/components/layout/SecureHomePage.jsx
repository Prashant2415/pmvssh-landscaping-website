import React from 'react'
import { LSPara, LSTextHighlight } from '../../commonComponents/Common'
import pottwo from "../../images/pottwo.jpg"
import "./layout.css"
import "../../components/component.css"
import { PrimaryButton } from '../../commonComponents/ButtonComponent'
import { useNavigate } from 'react-router-dom'
const SecureHomePage = () => {
  const navigate = useNavigate();
  const handleShopNow=(e)=>{
    e.preventDefault();
    navigate("/shop")
  }
  return (
    <div className='secure-container'>
      <div className="secure-content">
        <h2 className='content-title'>Welcome <br /><LSTextHighlight>Prashant Mendhe</LSTextHighlight></h2>
        <LSPara className='home-content-para'>Plants are living organisms that play a vital role in the ecosystem. They produce oxygen through photosynthesis, absorb carbon dioxide, and provide food, medicine, and shelter for humans and animals. Plants are classified into different types, including trees, shrubs, herbs, and climbers. They require sunlight, water, and nutrients from the soil to grow. Besides their environmental benefits, plants also enhance well-being by reducing stress and purifying the air.</LSPara>
        <PrimaryButton onClick={handleShopNow}>Shop Now</PrimaryButton>
      </div>
      <div className="secure-content-image">
        <img className='home-image' src={pottwo} alt="home pot" />
      </div>
    </div>
  )
}

export default SecureHomePage
