import React, { useState } from 'react'

const Register = () => {
    
  const [showPassword1, setShowPassword1] = useState(false);
  const [showNewPassword, setShowNewPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const toggleNewPasswordVisibility1 = () => {
    setShowNewPassword1(!showNewPassword);
  };

  return (
    <div>

<div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              placeholder="Enter contact number"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <input
                type={showPassword1 ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility1}
                className="text-gray-500 ml-2 focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                className="w-full py-2 px-2 text-gray-700 focus:outline-none"
              />
              <button
                type="button"
                onClick={toggleNewPasswordVisibility1}
                className="text-gray-500 ml-2 focus:outline-none"
              >
                {showNewPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Create Account
          </button>
        </div>
      </div>
    </div>
        


    </div>
  )
}

export default Register