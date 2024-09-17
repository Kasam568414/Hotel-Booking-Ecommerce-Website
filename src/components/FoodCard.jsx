import React from 'react';
import img from "../../src/assets/Search_icon.png";
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const FoodCard = () => {
  const cards = useLoaderData();

  return (
    <div className='mt-10 px-4 md:px-8'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <h1 className='text-3xl font-bold w-full md:w-1/2'>
          Explore <span className='text-primary'>Yummy Recipe</span>
        </h1>
        <label className='input input-bordered flex items-center gap-2 my-3 rounded-full w-full md:w-1/2'>
          <input
            className='border-none grow text-xl outline-none'
            type="text"
            placeholder='Search Text'
          />
          <img src={img} className='h-7 w-7 opacity-70' alt="Search Icon" />
        </label>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        {
          cards.map((item, index) => (
            <SingleCard key={index} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default FoodCard;
