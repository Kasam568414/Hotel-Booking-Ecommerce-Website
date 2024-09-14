import React from "react";
import img from "../../assets/nav-logo.png";

const Footer = () => {
  return (
    

 
    <footer className="flex flex-wrap items-center justify-between p-6 bg-gray-900 text-white">
    {/* Left Side */}
    <div className="w-full md:w-1/2  ">
      <img src={img} alt="Logo" className="h-12 w-auto" />
      <p className=" w-1/2 mt-3 text-xl   ">
           The Food we had enjoyed at the time of dinner. It was really
           delicious taste with great quality, everything had unique taste
          which we had ordered, nice arrangement and services from the staff
          while eating, we found nothing bad about this hotel.
         </p>
    </div>

    {/* Right Side */}
    <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between">
      {/* Follow Us */}
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
        </ul>
      </div>

      {/* Call Us */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Call Us</h3>
        <p className="text-gray-300">+123 456 7890</p>
        <p className="text-gray-300">Mon-Fri: 9:00am - 6:00pm</p>
      </div>
    </div>
    <hr className="bg-white  mt-3 w-full " />
    <div className="flex flex-col lg:flex-row w-full justify-between mt-3 ">
     <h1 className="text-white lg:text-xl">Design & Developed by Sparktech Agency</h1>
    <div className="text-white flex lg:flex-row flex-col gap-5 text-xl lg:text-2xl">
     <h4>About Us</h4>
     <h4>Policy</h4>
     <h4>Terms of Use</h4>
     </div>
    </div>
    



    
  </footer>
  );
};

export default Footer;
