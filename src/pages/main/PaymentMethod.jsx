import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const PaymentMethod = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10">
      <h1 className="text-6xl font-bold  text-center ">Payment Method </h1>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
        {/* Name your Card */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name your Card
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter card name"
              className="w-full py-2 px-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Card Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <FaShoppingCart className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full py-2 px-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-x-10">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              CCV
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-500 ml-2 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                type="date"
                placeholder="MM/YY"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
                name=""
                id=""
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="w-full p-2 bg-gray-500 rounded-lg mt-3 text-2xl text-white font-bold"
        >
          Payment
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
              <div className="w-full  ">
                <div className=" p-4 w-1/2 mx-auto">
                  <button
                    onClick={handleCloseModal}
                    className="btn bg-primary btn-sm btn-circle btn-ghost absolute top-2 right-2"
                  >
                    ✕
                  </button>
                  <div className="hero-content text-center">
                    <div className="max-w-md">
                      <h1 className="text-2xl font-bold ">
                        Transaction Successful
                      </h1>
                      <p className="py-6">
                        Your top up has been successful done
                      </p>
                      <h4>Total Pay</h4>
                      <h4>$200.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
