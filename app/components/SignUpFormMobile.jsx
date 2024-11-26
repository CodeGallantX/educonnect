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
      <div className="relative flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 lg:py-8">
        <h1 className='text-4xl font-bold text-center'>Create Account</h1>
        <p className="text-gray-300 text-center">Join the community and unlock your learning potential</p>

        {/* <Link href="/">
            <BackArrow className="absolute left-0 top-0 text-white font-bold"/>
        </Link> */}

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4'>
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

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2 ">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-white">I agree to all the <a className="font-bold underline">terms and conditions</a>.</label>
            </div>
          </div>
          <Link href="/dashboard">
            <button className='mt-6 w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-lg' type="submit">
              Sign Up
            </button>
          </Link>
        </form>

      </div>
      <div className="mt-4 flex flex-col space-y-3">
          <div className="flex flex-row items-center justify-center space-x-6">
            <Link href="#">
              <Image src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={22} height={22} />
            </Link>
            <Link href="#">
              <Image src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Apple_logo_grey.svg.png?updatedAt=1727884280423" alt="Apple Icon" width={22} height={22} />
            </Link>
          </div>
          <p className="text-white text-center">Already have an account? 
            <Link href="/login" className='font-bold underline transition duration-300 ease-in-out'>Sign in</Link>
          </p>
        </div>
    </div>
  );
};

export default App;