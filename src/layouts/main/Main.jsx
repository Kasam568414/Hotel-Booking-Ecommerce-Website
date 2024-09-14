import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    <div className='container min-h-screen'>
        
    <Navbar></Navbar>
        <div className=''>
            <Outlet></Outlet>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Main