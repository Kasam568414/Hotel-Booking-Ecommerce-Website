import React from 'react'
import SingleCard from '../../components/SingleCard'
import { useLoaderData } from 'react-router-dom'

const CardReceipe = () => {
    const cards = useLoaderData()
  return (
    <div className=''>
        
        <div className='my-10'>

            <h1 className='text-5xl font-bold '>Explore <span className='text-primary'>Yummy Recipe</span></h1>
        </div>

        {/* map here  */}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  '>
           {
            cards.map((item)=>(
                <SingleCard key={item.id} item={item}></SingleCard>
            ))
            
           }
        </div>
    </div>
  )
}

export default CardReceipe