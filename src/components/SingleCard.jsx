import React from 'react'
import { Link } from 'react-router-dom';


const SingleCard = ({item}) => {
    const {id,image,title,description,currency}= item;
  return (
  <Link to={`/cart/${id}`}>
      <div className=' cursor-pointer'>


<div className="max-w-sm mx-auto bg-white mt-10  p-4 shadow-md overflow-hidden transform hover:scale-105 transition duration-500 rounded-2xl">
<img
  className="w-full h-48 object-cover rounded-2xl"
  src={image}
  alt="Product"
/>
<div className="p-6">
  <h2 className="text-3xl font-bold text-gray-900 ">{title}</h2>
  <p className="mt-2 text-gray-600">
  {description}
  </p>
  <p className="mt-2 text-gray-600 text-2xl font-bold">
  $ {currency}
  </p>
  <div className="mt-4">
    <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
      Buy Now
    </button>
  </div>
</div>
</div>

</div>
  </Link>
  )
}

export default SingleCard