import React from 'react'
import Navbar from '../../layouts/main/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../layouts/main/Footer'

const Payment = () => {
  return (
   <>
     <div className='container min-h-screen'>
        <Navbar></Navbar>
        <div>
            <Outlet></Outlet>
        </div>
       

    </div>  
    <Footer></Footer>
   </>
  )
}

export default Payment