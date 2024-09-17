import React from "react";
import image from "../../assets/middle-banner-logo.png";

const MiddlePart1 = () => {
  return (
    <div className="mt-16 mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={image} alt="Middle Banner Logo" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold">
            We are more than multiple services
          </h1>
          <p className="text-lg lg:text-2xl mt-4">
            This is a type of restaurant that typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes from the French word meaning food.
          </p>
          
          {/* Service List */}
          <div className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <p>Online Ordering</p>
              <p>24/7 Availability</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <p>Advanced Reservations</p>
              <p>Curated Dining Spaces</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <p>Top Chefs</p>
              <p>Immaculate Kitchens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePart1;
