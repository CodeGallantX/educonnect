"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleLeft } from "react-icons/fa6";

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
    <div className='lg:grid lg:grid-cols-2 light:bg-gray-200 dark:bg-gray-800 w-full min-h-screen'>
      <div className="relative flex flex-col px-10 md:px-16 lg:px-10 xl:px-32 pb-10 pt-20">
        <h1 className='text-3xl font-bold text-left light:text-gray-800 dark:text-white'>Register To Start Your Journey To EduConnect Today</h1>

        <Link href="/">
            <FaAngleLeft className="absolute left-9 top-4 p-2 bg-gray-700 rounded-full text-4xl text-white font-bold"/>
        </Link>

        <form onSubmit={handleSubmit} className='flex flex-col light:text-gray-800 dark:text-white space-y-3 lg:space-y-4 mt-10'>
          <fieldset className="flex flex-col w-full  items-start justify-center space-y-1">
            <label className='' htmlFor="name">Name</label>
            <input
              className="w-full border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
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
            <label className='' htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg border-gray-500 light:bg-gray-200 dark:bg-gray-800 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
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
            <label className='' htmlFor="password">Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
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
            <label className='' htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
          
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </fieldset>
          <Link href="/email-verification" className="mt-3">
            <button className='w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-lg' type="submit">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default App;