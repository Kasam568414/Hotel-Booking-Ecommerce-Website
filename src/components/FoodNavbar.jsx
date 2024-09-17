import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FoodNavbar = () => {
  return (
    <div className="relative">
      <nav className="flex items-center justify-between p-4 bg-primary rounded-lg">
        <div className="flex items-center">
          <FaArrowLeft className="text-white text-2xl md:hidden" />
        </div>
        <ul className="flex space-x-4 overflow-x-auto no-scrollbar md:space-x-6 md:overflow-x-hidden">
          {
            ['Pizza', 'Rice', 'Sushi', 'Fry', 'Chicken', 'Kabab', 'Rice'].map((item, index) => (
              <li key={index} className="text-xl font-bold text-white cursor-pointer hover:text-gray-300">
                {item}
              </li>
            ))
          }
        </ul>
        <div className="flex items-center">
          <FaArrowRight className="text-white text-2xl md:hidden" />
        </div>
      </nav>
    </div>
  );
};

export default FoodNavbar;
