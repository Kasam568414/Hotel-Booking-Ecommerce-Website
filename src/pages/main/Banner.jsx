import React from 'react';
import bannerLogo from "../../assets/banner-logo.png";

const Banner = () => {
  return (
    <div className="w-full bg-white py-5">
      <div className="flex items-center justify-center w-full gap-6 px-4 flex-col lg:flex-row-reverse lg:px-12">
        {/* Banner Image */}
        <img
          src={bannerLogo}
          className="w-full lg:w-auto max-w-xs lg:max-w-md rounded-lg"
          alt="Banner Logo"
        />

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Good <span className="text-primary">booking</span>, great memories
          </h1>
          <p className="text-lg md:text-2xl lg:text-4xl mb-6">
            Enable diners to customize their booking by requesting a specific table location or view.
          </p>

          {/* Search Input */}
          <div className="input input-bordered flex items-center gap-2 px-4 py-2 border rounded-full max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              className="grow bg-transparent focus:outline-none text-base lg:text-lg"
              placeholder="Search Food"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
