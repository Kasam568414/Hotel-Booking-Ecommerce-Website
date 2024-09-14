import React from "react";
import img from "../../assets/FoodDetails.png";
import img1 from "../../assets/Heart.png"
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardDetails = () => {
  return (
    <div className="mt-10  w-full ">
      <div className="  flex w-full  gap-x-10 p-5  lg:flex-row flex-col   ">
        {/* left side  */}
        <div className=" bg-green-300">
          <img src={img} className=" " alt="" />
        </div>
        {/* right side  */}
        <div className="w-1/3">
          <h1 className="text-4xl font-bold">Chicken Curry Masala</h1>
          {/* ratting here  */}
          <div className="flex mt-3 mb-3 gap-2 items-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <h4 className="text-xl text-gray-700">(150 Reviews)</h4>
          </div>
          <h4 className="text-2xl font-bold text-gray-900">$200.00</h4>
          <h4 className="text-xl font-bold mt-2 mb-2">Description</h4>
          <p className="text-gray-700">
            Our classic cheeseburger is made with a fresh, never-frozen beef
            patty that is cooked to perfection and topped with melted American
            cheese, lettuce, tomato, pickles, and onions.
          </p>
          <div className="flex items-center gap-4">
          <div className="flex items-center my-3">
            <button className="px-3 py-1 border-t border-b border-l-2 border-r-2 text-3xl font-bold">-</button>
            <div className="px-4 py-1 bg-white border-t border-b text-3xl">10</div>
            <button className="px-3 py-1 bg-primary border text-3xl text-white">+</button>
          </div>
          <div>
            <Link to='/addToCart'><button className="px-3 py-2 w-36 rounded bg-gray-700 text-white text-xl font-bold">Add To Cart</button></Link>
          </div>
          <button
      className="flex items-center justify-center w-12 h-12 border-2 border-gray-500 rounded text-gray-500 hover:bg-gray-100"
    >
      <FaHeart />
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
