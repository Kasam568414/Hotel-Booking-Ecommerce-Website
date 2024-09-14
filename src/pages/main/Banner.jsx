import React from 'react'
import bannerLogo from "../../assets/banner-logo.png"

const Banner = () => {
  return (
    <div className=" ">
  <div className=" flex items-center justify-center w-full gap-4 p-5 flex-col lg:flex-row-reverse">
    <img
      src={bannerLogo}
      className=" rounded-lg " />
    <div>
      <h1 className="text-6xl font-bold">Good <span className='text-primary'>booking</span>, great memories</h1>
      <p className="py-6 text-4xl">
      Enable diners to customize their booking by requesting a specific table location or view.
      </p>
      
      <label className="input input-bordered flex items-center gap-2 my-3 rounded-full ">
  <input type="text" className="grow  border-none" placeholder="Search Food" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-5 w-5 opacity-70   ">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
    </div>
   
  </div>
</div>
    
        
    
    

  )
}

export default Banner