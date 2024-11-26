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
    <div className='lg:grid lg:grid-cols-2 bg-gray-800 w-full min-h-screen overflow-hidden'>
      <div className="flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-24 py-16">
        <h1 className='text-4xl font-bold text-center'>Login</h1>
        <p className="text-gray-300 text-center">Join the community and unlock your learning potential</p>


        <div className='mt-4 w-full'>
          <div className="flex flex-col items-center justify-center space-y-4">
            <a href="#" className="w-full flex flex-row items-center justify-center space-x-2 hover:bg-gray-800 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500">
              <Image src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={20} height={20} />
              <span>Sign in with Google</span>
            </a>
          </div>
          <div className='flex flex-row space-x-5 items-center justify-center my-2'>
            <span className='w-full h-[1px] bg-white'></span>
            <span className='text-lg font-semibold text-white'>Or</span>
            <span className='w-full h-[1px] bg-white'></span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4 mt-4'>
          <fieldset className="flex flex-col items-start justify-center w-full space-y-1">
            <label className='text-white' htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid py-4 px-6 rounded-full border-gray-500 bg-gray-800 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
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
              className="w-full placeholder:text-2xl font-light border border-solid py-4 px-6 rounded-full bg-gray-800 border-gray-500 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
              type="password"
              name="password"
              id="password"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <Link href="/dashboard">
            <button className='mt-2 w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-full' type="submit">
              Log in
            </button>
          </Link>
          <p className="text-white">Don&apos;t have an account? <Link href="/register" className='font-bold underline transition duration-300 ease-in-out'>Sign up</Link></p>
        </form>

      </div>
      <div className='hidden overflow-hidden lg:block ml-auto lg:w-5/6 xl:w-11/12 relative h-full bg-gradient-to-tr from-cyan-800 to-purple-900'>
        <div className='absolute bottom-0 w-full opacity-40 h-2/5 bg-black blur'></div>
        <div className='absolute text-white w-full bottom-1/4 left-1/2 -translate-x-1/2'>
          <div className="flex flex-col space-y-4 items-center text-center px-8">
            <h1 className="text-4xl text-white">Ask Questions with Ease</h1>
            <p className="text-xl">Post questions in any subject and get clear, reliable answers from students and contributors. Learning starts with a single question.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;