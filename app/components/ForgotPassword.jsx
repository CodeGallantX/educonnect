"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const App = () => {
  const [formData, setFormData] = useState({
    email: '',
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
    <div className='bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-16 lg:py-8">
        <div className="mb-6 space-y-3">
        <h1 className='text-xl font-bold text-left'>Enter the email associated with your account and we&apos;ll send you a reset code.</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4'>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg border-gray-500 bg-gray-800 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          
          <Link href="/reset-password">
            <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
              Verify
            </button>
          </Link>
        </form>

      </div>
    </div>
  );
};

export default App;