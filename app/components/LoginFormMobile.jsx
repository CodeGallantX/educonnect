"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agree: false,
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
      <div className="flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-16 lg:py-8">
        <div className="mb-6 space-y-3">
        <h1 className='text-3xl font-bold text-left'>Welcome back! Continue your Learning Journey</h1>
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
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="password">Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
              type="password"
              name="password"
              id="password"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <Link href="/forgot-password" className='underline text-right'>Forgot password?</Link>
          
          <Link href="/dashboard">
            <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
              Sign in
            </button>
          </Link>
        </form>

        <div className="mt-4 flex flex-col space-y-3">
          <div className="flex flex-row items-center justify-center space-x-6">
            <Link href="#">
              <Image src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={22} height={22} />
            </Link>
            <Link href="#">
              <Image src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Apple_logo_grey.svg.png?updatedAt=1727884280423" alt="Apple Icon" width={22} height={22} />
            </Link>
          </div>
          <p className="text-white">Don&apos;t have an account yet? 
            <Link href="/register" className='font-bold underline'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;