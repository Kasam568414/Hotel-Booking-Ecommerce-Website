import React from 'react'
import navLogo from "../../assets/nav-logo.png"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
   

   

  return (
    <section className='container flex  items-center justify-between py-5 font-medium'>
        <img className='w-36' src={navLogo} alt="" />
        <ul className='hidden sm:flex gap-6 text-md text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to='/book-table' className='flex flex-col items-center gap-1'>
            <p>BOOKA TABLE</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to='/food' className='flex flex-col items-center gap-1'>
            <p>FOOD</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        </ul>
        <div className='flex items-center gap-5'>
            <button className='p-3 border-black text-white shadow-xl  rounded-2xl bg-primary'>Download App</button>
             <p  className='cursor-pointer bg-gray-100 te p-3 rounded-2xl font-bold text-black'>My profile</p>

        </div>


        
    </section>
  )
}

export default Navbar