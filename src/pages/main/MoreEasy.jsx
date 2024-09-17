import React from "react";
import image from "../../assets/shape.png";
import img1 from "../../assets/Mobile app store badge.png";
import img2 from "../../assets/Mobile app store badge(1).png";

const MoreEasy = () => {
  return (
    <div className="hero py-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Right side image */}
        <img src={image} className="w-full max-w-xs lg:max-w-sm rounded-lg" alt="App Image" />
        
        {/* Left side content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold">
            It’s Now More Easy to Book with Our Mobile App
          </h1>
          <p className="py-4 lg:py-6 text-base lg:text-lg">
            All you need to do is download one of the best delivery apps, make a booking, and enjoy! Most companies are now opting for mobile app development for food delivery services.
          </p>

          {/* App store badges */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <img src={img1} alt="App Store Badge 1" className="w-32 lg:w-40" />
            <img src={img2} alt="App Store Badge 2" className="w-32 lg:w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreEasy;
