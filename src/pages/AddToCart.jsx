import React from 'react';
import img from "../../src/assets/FoodDetails.png";
import { Link } from 'react-router-dom';

const AddToCart = () => {
  return (
    <div className="p-4 lg:p-8">
      <h2 className='text-3xl lg:text-5xl font-bold mt-8'>Cart Details</h2>

      {/* Cart Items */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mt-6 bg-[#758888] p-4 md:p-6 rounded-lg shadow-md w-full"
        >
          {/* Product Image */}
          <div className="flex-shrink-0 w-full md:w-36 mb-4 md:mb-0 md:mr-6">
            <img
              src={img} // Replace with your image URL
              alt="Product"
              className="object-cover w-full h-full rounded-md border"
            />
          </div>

          {/* Order Details */}
          <div className="flex text-white text-base md:text-xl flex-col w-full justify-between">
            <div className="mb-2 flex flex-col md:flex-row justify-between">
              <span>Order Quantity:</span>
              <span className="font-medium">2</span>
            </div>

            <div className="mb-2 flex flex-col md:flex-row justify-between">
              <span>Amount:</span>
              <span className="font-medium">$40.00</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <span>Order Date:</span>
              <span className="font-medium">2024-09-13</span>
            </div>
          </div>
        </div>
      ))}

      {/* Total Cost */}
      <div className='flex justify-between items-center text-xl md:text-3xl mt-6 mb-4 text-primary font-bold'>
        <h4>Total Cost</h4>
        <h4>$220.00</h4>
      </div>

      {/* Payment Button */}
      <Link to='/paymentMethod'>
        <button className='bg-primary px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold mt-3 w-full mb-5'>
          Payment
        </button>
      </Link>
    </div>
  );
}

export default AddToCart;
