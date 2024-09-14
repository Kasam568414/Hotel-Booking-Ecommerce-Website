import React from "react";
import image from "../../assets/middle-banner-logo.png";

const MiddlePart1 = () => {
  return (
   <div className="mt-24 mb-11">
     <div className="   flex items-center flex-col lg:flex-row  p-5 justify-between  gap-5">
     <div className=" w-1/2">
     <img src={image} alt="" />
     </div>

      <div className=" lg:w-1/2  mx-auto  ">
        <h1 className="lg:text-6xl text-3xl">We are more than multiple service</h1>
        <p className="text-2xl mt-3">
          This is a type of resturent which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes frome the rench word meaning food
        </p>
      <div className=" ">
      <div className="grid grid-cols-2 mb-1 mt-3">
          <p>Online Ordering</p>
          <p>24/7 Availability</p>
        </div>
        <div className="grid grid-cols-2 mb-1">
          <p>Advanced Reservations</p>
          <p>Curated Dining Spaces</p>
        </div>
        <div className="grid grid-cols-2 mb-1">
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
