import React from "react";
import image from "../../assets/shape.png";
import img1 from "../../assets/Mobile app store badge.png";
import img2 from "../../assets/Mobile app store badge(1).png";

const MoreEasy = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-6xl font-bold">
            It’s Now More Easy to Booking by Our Mobile App
          </h1>
          <p className="py-6 ">
            All you need to do is downlode one of the best delivery apps, make a
            and most companies are opting for mobile app devlopment for food
            delivery
          </p>
          <div className="flex gap-4">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreEasy;
