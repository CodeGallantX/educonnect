"use client"
import React, { useState } from 'react';
import Link from 'next/link';
// import BackArrow from 'react-icons/fa6';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="relative flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 lg:py-8">
        <h1 className='text-xl font-bold text-left'>Create a new password to help keep your account safe and secure</h1>

        {/* <Link href="/">
            <BackArrow className="absolute left-0 top-0 text-white font-bold"/>
        </Link> */}

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4 mt-16'>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="password">Password</label>
            <input
              className="w-full font-light border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out text-white"
              type="password"
              name="password"
              id="password"
              placeholder='New password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full font-light border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out text-white"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='Confirm password'
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </fieldset>

          <Link href="/login">
            <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;