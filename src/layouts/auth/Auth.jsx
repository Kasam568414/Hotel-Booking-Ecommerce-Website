import React from 'react'
import Navbar from '../main/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../main/Footer'

const Auth = () => {
  return (
    <>
    <div>
       <Navbar></Navbar>
       <div>
        
        <Outlet></Outlet>
       </div>
    </div>
    <Footer></Footer>
    
    </>
  )
}

export default Auth