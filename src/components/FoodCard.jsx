import React from 'react'
import img from "../../src/assets/Search_icon.png"
import { useLoaderData } from 'react-router-dom'
import SingleCard from './SingleCard';

const FoodCard = () => {
  const cards =useLoaderData();

  
  return (
    <div className='mt-10'>
       <div className='flex items-center justify-between'>
       <h1 className='text-3xl  font-bold w-1/2'>Explore <span className='text-primary'>Yummy Recipe</span></h1>
        <label className='input input-bordered flex  items-center gap-2 my-3 rounded-full w-1/2'>
          <input className='border-none grow text-xl ' type="text" name="" id="" placeholder='Search Text' />
          <img src={img} className='h-7 w-7 opacity-70' alt="" />

        </label>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        {
          cards.map((item,index)=>(
            <SingleCard key={index} item={item}></SingleCard>
          ))
        }
       </div>


    </div>
  )
}

export default FoodCard