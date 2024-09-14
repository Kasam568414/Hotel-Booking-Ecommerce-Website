import React, { useState } from "react";
import image1 from "../../src/assets/villagio1(1).jpg";
import image2 from "../../src/assets/map.png";
import imge3 from "../../src/assets/Location_icon_ic.png";
import img4 from "../../src/assets/Vector(1).png";
import img5 from "../../src/assets/Vector(2).png";
import img6 from "../../src/assets/mdi_chevron-down.png";
import img7 from "../../src/assets/Vector.png";
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
    <div>
      <div className=" mt-10 max-w-full  flex  justify-center gap-10">
        <div className=" w-full  ">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={image1} className="w-full h-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-gray-600 font-bold mt-2">
              <span className="text-primary">Villagio</span> Restaurant & Bar
            </h1>
            <hr className="border-gray-600 p-4 mt-2 mb-1" />

      

            <div className="flex flex-wrap">
              {/* left side  */}
              <div className="w-full md:w-1/2">
           
                <div className="flex items-center gap-3">
                  <img src={imge3} alt="" />
                  <p className="">
                    360 San Lorenzo Avenue, Suite <br /> 1430 Coral Gables, FL
                    33146-1865 |
                  </p>
                </div>
                <h1 className="text-2xl font-bold mt-2">Book A Table</h1>
                <div className="flex gap-3 mt-3">
                  <div className="flex items-center justify-between gap-2 border w-24 p-1 border-gray-700 rounded">
                    <img src={img7} alt="" />
                    <h4>Date</h4>
                    <img src={img6} alt="" />
                  </div>
                  <div className="flex items-center justify-between gap-2 border w-24 p-1 border-gray-700 rounded">
                    <img src={img7} alt="" />
                    <h4>Date</h4>
                    <img src={img6} alt="" />
                  </div>
                  <div className="flex items-center justify-between gap-2 border w-24 p-1 border-gray-700 rounded">
                    <img src={img7} alt="" />
                    <h4>Date</h4>
                    <img src={img6} alt="" />
                  </div>
                </div>
              </div>
              {/* right side here  */}

              <div className="w-full md:w-1/2">
                <p>
                  Villagio restaurant and bar has one mission: to provide guests
                  with a fine and fresh seafood experience. Featuring seasonal
                  and sustainable seafood that is flown in fresh daily, our
                  chef-driven menu proves that no matter when you’re dining,
                  seafood can be truly exceptional. to provide guests with a
                  fine Read More...
                </p>
              </div>
                {/* Book Now Button */}
              <button 
        onClick={handleOpenModal} 
        className="w-full p-2 bg-gray-500 rounded-lg mt-3 text-2xl text-white font-bold"
      >
        Book Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
          <div className="w-full  ">
          <div className=" p-4 w-1/2 mx-auto">
          <button onClick={handleCloseModal}  className="btn bg-primary btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
          <img src={img8} className="w-16 mx-auto" alt="" />
            <h3 className="text-center mt-2"> Table Booked Successfully </h3>
            <hr className="border border-gray-600  mt-2" />
          </div>
          <div className="w-1/2 mx-auto">
         <div>
         <div className="flex gap-4 mb-3">
           <img src={img7} alt="" />
           <h4>17 December 2024</h4>
           </div>
           <div className="flex gap-4">
           <img src={img7} alt="" />
           <h4>17 December 2024</h4>
           </div>
         </div>
         <button className="w-full bg-primary p-2  mt-3 rounded-xl">Show Menu</button>

          </div>
          <hr className="border border-gray-600  mt-2" />
          <p className="w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui velit </p>

          </div>
          
           
          
        
          </div>
        </div>
      )}

              <div>
                
    
    
    </div>
            </div>

            {/* left side here  */}
          </div>
        </div>
        <div className=" w-1/2 ">
          <h3 className="text-center mb-4 text-2xl">Hero To Find</h3>
          <hr className="border-primary p-2" />
          <img src={image2} className="w-full" alt="" />

          <div className="mt-3">
            <h1 className="text-center mb-4 text-2xl">Opening Hours</h1>
            <hr className="border-primary p-2" />
          </div>
          {/* table here  */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Open</th>
                  <th>Close</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Saturday</td>
                  <td>10.00-12.00 PM</td>
                  <td>10.00-12.00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10.00-12.00 PM</td>
                  <td>10.00-12.00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10.00-12.00 PM</td>
                  <td>10.00-12.00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10.00-12.00 PM</td>
                  <td>10.00-12.00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10.00-12.00 PM</td>
                  <td>10.00-12.00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10.00-12.00 PM</td>
                  <td>10.00-12.00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
