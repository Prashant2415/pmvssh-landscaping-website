import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "./layout.css"
const Template = () => {
  return (
    <div>
      <Header/>
      <div className='main-container'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Template
