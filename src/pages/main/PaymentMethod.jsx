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
    <div className="mt-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8">Payment Method</h1>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
        {/* Name your Card */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name your Card</label>
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
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <FaShoppingCart className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter card number"
              className="w-full py-2 px-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        {/* CCV and Expiry Date */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="mb-4 flex-1">
            <label className="block text-sm font-medium text-gray-700">CCV</label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter CCV"
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

          <div className="mb-4 flex-1">
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                type="date"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleOpenModal}
          className="w-full p-2 bg-gray-500 rounded-lg mt-3 text-xl text-white font-bold"
        >
          Payment
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="text-center">
                <h1 className="text-2xl font-bold">Transaction Successful</h1>
                <p className="py-4">Your top-up has been successfully completed.</p>
                <h4 className="text-lg font-semibold">Total Pay</h4>
                <h4 className="text-xl font-bold">$200.00</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
