import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "./layout.css"
import Loader from '../../commonComponents/Loader'
const Template = () => {
  const [flag,setFlag] = useState(true);
  setTimeout(()=>{
    setFlag(false)
  },1000)
  return (
    <>
      {!flag ? (
        <div>
        <Header/>
        <div className='main-container'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
      ) : (
        <Loader/>
      )}
    </>
  )
}

export default Template
