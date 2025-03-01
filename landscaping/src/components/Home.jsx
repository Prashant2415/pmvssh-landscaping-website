import React from 'react'
import homePot from "../images/homePot.jpg"
import pottwo from "../images/pottwo.jpg"
import imageOne from "../images/imageOne.jpg"
import "./component.css"
import { PrimaryButton, SecondaryButton } from '../commonComponents/ButtonComponent'
import { LSHeading } from '../commonComponents/Common'
import { Data } from './Data'
import {Card} from '../commonComponents/Card'
const Home = () => {
  const data = Data;
  const handleOnCardClick =(data)=>{
    console.log("Added", data)
  }
  return (
    <div>
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='home-content-heading'>Plant Tree Create A <span className='span-color'>Green</span> Future</h1>
          <p className='home-content-para'>Plants are living organisms that play a vital role in the ecosystem. They produce oxygen through photosynthesis, absorb carbon dioxide, and provide food, medicine, and shelter for humans and animals. Plants are classified into different types, including trees, shrubs, herbs, and climbers. They require sunlight, water, and nutrients from the soil to grow. Besides their environmental benefits, plants also enhance well-being by reducing stress and purifying the air.</p>
          <PrimaryButton>Shop Now</PrimaryButton>
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
