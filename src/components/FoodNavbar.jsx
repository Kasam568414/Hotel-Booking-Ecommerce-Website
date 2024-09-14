import React from "react";
import img from "../../src/assets/FoodNavbarIcon.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FoodNavbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center  rounded-lg p-4 bg-primary">
        <FaArrowLeft></FaArrowLeft>
        <ul className="flex space-x-4">
          {
            ['Pizza', 'Rice', 'Sushi', 'Fry', 'Chicken', 'Kabab', 'Rice'] .map((item,index)=>(
              <li key={index} className="text-xl  cursor-pointer font-bold hover:text-white">{item}</li>
            ))

          }

        </ul>
        <FaArrowRight></FaArrowRight>

      </nav>
    </div>
  );
};

export default FoodNavbar;
