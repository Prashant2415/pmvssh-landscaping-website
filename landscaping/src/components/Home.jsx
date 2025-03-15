import React, { useState } from 'react'
import homePot from "../images/homePot.jpg"
import pottwo from "../images/pottwo.jpg"
import imageOne from "../images/imageOne.jpg"
import "./component.css"
import { PrimaryButton, SecondaryButton } from '../commonComponents/ButtonComponent'
import { LSHeading, LSPara } from '../commonComponents/Common'
import { Data } from './Data'
import {Card} from '../commonComponents/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../redux/addtocardSlice'
import {ToastContainer} from "react-toastify"
import ToastComponent from '../commonComponents/ToastComponent'
import {useNavigate} from "react-router-dom"
const Home = () => {
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);
  const data = Data;
  const navigate = useNavigate();
  const handleOnCardClick =(data)=>{
    //console.log("Added", data)
    setToast(true);
    dispatch(addtocart(data));
  }
  const selector = useSelector((state)=> state.addtocartSlice);
  console.log("selector ",selector)
  
  const handleToastTimeout =(timeoutValue)=>{
    setToast(timeoutValue)
  }
  const handleShopNow=(e)=>{
    e.preventDefault();
    navigate("/shop")
  }
  return (
    <div>
      {toast && (
        <ToastComponent toastMsg="Product is added to the cart" delay={2000} onTimeOut={handleToastTimeout} type={true}/>
      )}
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='home-content-heading'>Plant Tree Create A <span className='span-color'>Green</span> Future</h1>
          <LSPara className='home-content-para'>Plants are living organisms that play a vital role in the ecosystem. They produce oxygen through photosynthesis, absorb carbon dioxide, and provide food, medicine, and shelter for humans and animals. Plants are classified into different types, including trees, shrubs, herbs, and climbers. They require sunlight, water, and nutrients from the soil to grow. Besides their environmental benefits, plants also enhance well-being by reducing stress and purifying the air.</LSPara>
          <PrimaryButton onClick={handleShopNow}>Shop Now</PrimaryButton>
        </div>
        <div className='home-image-container'>
          <img className='home-image' src={pottwo} alt="home pot" />
        </div>
      </div>
      <div className="home-product-container">
        <div className="home-product-heading">
          <LSHeading className='home-product-title'>OUR BEST PRODUCT</LSHeading>
        </div>
        <div className="card-container">
          {data.map((d)=>{
            return(
              <Card d={d}
                onCardClick={handleOnCardClick}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
