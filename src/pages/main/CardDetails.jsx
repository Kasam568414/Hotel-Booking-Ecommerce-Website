import React from "react";
import img from "../../assets/FoodDetails.png";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardDetails = () => {
  return (
    <div className="mt-10 w-full px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-x-10 p-5">
        {/* Left side */}
        <div className="bg-green-300 rounded-lg overflow-hidden lg:w-2/5">
          <img src={img} className="w-full h-auto" alt="Food Details" />
        </div>
        {/* Right side */}
        <div className="lg:w-3/5">
          <h1 className="text-3xl lg:text-4xl font-bold">Chicken Curry Masala</h1>
          {/* Rating */}
          <div className="flex mt-3 mb-3 gap-2 items-center">
            <div className="rating flex items-center">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={index === 1}
                />
              ))}
            </div>
            <h4 className="text-lg lg:text-xl text-gray-700">(150 Reviews)</h4>
          </div>
          <h4 className="text-xl lg:text-2xl font-bold text-gray-900">$200.00</h4>
          <h4 className="text-lg lg:text-xl font-bold mt-2 mb-2">Description</h4>
          <p className="text-gray-700">
            Our classic cheeseburger is made with a fresh, never-frozen beef patty that is cooked to perfection and topped with melted American cheese, lettuce, tomato, pickles, and onions.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
            <div className="flex items-center my-3">
              <button className="px-3 py-1 border-t border-b border-l-2 border-r-2 text-2xl lg:text-3xl font-bold">-</button>
              <div className="px-4 py-1 bg-white border-t border-b text-2xl lg:text-3xl">10</div>
              <button className="px-3 py-1 bg-primary border text-2xl lg:text-3xl text-white">+</button>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto">
              <Link to='/addToCart'>
                <button className="px-4 py-2 w-full lg:w-36 rounded bg-gray-700 text-white text-lg lg:text-xl font-bold">
                  Add To Cart
                </button>
              </Link>
              <button
                className="flex items-center justify-center w-12 h-12 border-2 border-gray-500 rounded text-gray-500 hover:bg-gray-100"
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
