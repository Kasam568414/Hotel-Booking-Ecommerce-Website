import React, { useState } from "react";
import image1 from "../../src/assets/villagio1(1).jpg";
import image2 from "../../src/assets/map.png";
import imge3 from "../../src/assets/Location_icon_ic.png";
import img7 from "../../src/assets/Vector.png";
import img6 from "../../src/assets/mdi_chevron-down.png";
import img8 from "../../src/assets/Frame 34634.png";

export const BookTableBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10 max-w-full px-4 lg:px-0">
      {/* Carousel and Info Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        <div className="w-full lg:w-1/2">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={image1} className="w-full h-full" alt="Restaurant Image" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            {/* Additional slides here... */}
          </div>

          <div className="mt-4">
            <h1 className="text-2xl text-gray-600 font-bold">
              <span className="text-primary">Villagio</span> Restaurant & Bar
            </h1>
            <hr className="border-gray-600 mt-2 mb-1" />
            
            {/* Info Section */}
            <div className="flex flex-wrap mt-4">
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-2">
                  <img src={imge3} alt="Location Icon" />
                  <p>
                    360 San Lorenzo Avenue, Suite <br />
                    1430 Coral Gables, FL 33146-1865
                  </p>
                </div>
                <h2 className="text-xl font-bold mt-2">Book A Table</h2>
                <div className="flex gap-3 mt-3 flex-wrap">
                  <div className="flex items-center justify-between gap-2 border w-24 p-1 border-gray-700 rounded">
                    <img src={img7} alt="Calendar Icon" />
                    <h4>Date</h4>
                    <img src={img6} alt="Dropdown Icon" />
                  </div>
                  {/* Repeat the date selection */}
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <p>
                  Villagio restaurant and bar has one mission: to provide guests
                  with a fine and fresh seafood experience. Featuring seasonal
                  and sustainable seafood that is flown in fresh daily...
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleOpenModal}
              className="w-full p-2 bg-gray-500 rounded-lg mt-3 text-2xl text-white font-bold"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Map and Opening Hours Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-center mb-4 text-2xl">Hero To Find</h3>
          <hr className="border-primary p-2" />
          <img src={image2} className="w-full" alt="Map" />
          <div className="mt-3">
            <h1 className="text-center mb-4 text-2xl">Opening Hours</h1>
            <hr className="border-primary p-2" />
          </div>

          {/* Opening Hours Table */}
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Open</th>
                  <th>Close</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md lg:w-1/3 relative">
            <button
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle absolute top-2 right-2"
            >
              ✕
            </button>
            <img src={img8} className="w-16 mx-auto" alt="Success Icon" />
            <h3 className="text-center mt-2">Table Booked Successfully</h3>
            <hr className="border-gray-600 mt-2" />
            <div className="mt-4 text-center">
              <div className="flex gap-4 mb-3 justify-center">
                <img src={img7} alt="Date Icon" />
                <h4>17 December 2024</h4>
              </div>
              <button className="w-full bg-primary p-2 mt-3 rounded-xl">
                Show Menu
              </button>
            </div>
            <hr className="border-gray-600 mt-2" />
            <p className="mt-4 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
