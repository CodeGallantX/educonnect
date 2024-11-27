"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import BackArrow from 'react-icons/fa6';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    <div className='lg:grid lg:grid-cols-2 bg-gray-800 w-full min-h-screen'>
      <div className="relative flex flex-col text-white px-10 md:px-16 lg:px-10 xl:px-32 py-14 lg:py-10">
        <h1 className='text-3xl font-bold text-left'>Register To Start Your Journey To EduConnect Today</h1>

        {/* <Link href="/">
            <BackArrow className="absolute left-0 top-0 text-white font-bold"/>
        </Link> */}

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4 mt-10'>
          <fieldset className="flex flex-col w-full items-start justify-center space-y-1">
            <label className='text-white' htmlFor="name">Name</label>
            <input
              className="w-full border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:border-gray-300 transition-all duration-300 ease-in-out text-white"
              type="text"
              name="name"
              id="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg border-gray-500 bg-gray-800 outline-none focus:border-300-gray transition-all duration-300 ease-in-out text-white"
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
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out text-white"
              type="password"
              name="password"
              id="password"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out text-white"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
          
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </fieldset>
          <Link href="/email-verification">
            <button className='mt-2 w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-lg' type="submit">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default App;