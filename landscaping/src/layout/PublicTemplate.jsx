import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const PublicTemplate = () => {
  return (
    <div className='public-container'>
      <Header/>
      <div className="main-container">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default PublicTemplate
