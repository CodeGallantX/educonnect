"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className='lg:grid lg:grid-cols-2 bg-black w-full h-full overflow-hidden'>
      <div className="flex flex-col text-white gap-3 px-16 lg:px-10 xl:px-32 py-20 lg:py-8">
        <h1 className='text-4xl font-bold text-center'>Create Account</h1>
        <p>Join us </p>
        

        <div className='mt-4'>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="#" className="w-full flex flex-row items-center justify-center gap-2 hover:bg-gray-800 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500">
              <Image src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={20} height={20} />
              <span>Continue with Google</span>
            </a>
          </div>
          <div className='flex flex-row gap-5 items-center justify-center mb-2'>
            <span className='w-full h-[1px] bg-white'></span>
            <span className='text-lg font-semibold text-white'>Or</span>
            <span className='w-full h-[1px] bg-white'></span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 lg:gap-4'>
            <fieldset className="flex flex-col w-full items-start justify-center gap-1">
              <label className='text-white' htmlFor="firstname">Name</label>
              <input
                className="w-full border border-solid py-4 px-4 rounded-full bg-gray-800 border-gray-300 outline-none focus:ring-1 focus:ring-primary focus:border-none transition-all duration-300 ease-in-out text-white"
                type="text"
                name="name"
                id="name"
                placeholder='Kia Smith'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </fieldset>

          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-white' htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid py-4 px-4 rounded-full border-gray-300 bg-gray-800 outline-none focus:ring-1 focus:ring-primary focus:border-none transition-all duration-300 ease-in-out text-white"
              type="email"
              name="email"
              id="email"
              placeholder='kiasmith@mail.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-white' htmlFor="password">Password</label>
            <input
              className="w-full border border-solid py-3 px-3 rounded-full bg-gray-800 border-gray-300 outline-none focus:ring-1 focus:ring-primary focus:border-none transition-all duration-300 ease-in-out text-white"
              type="password"
              name="password"
              id="password"
              placeholder='Enter password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
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

          <button className='mt-6 w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-[36px]' type="submit">
            Sign Up
          </button>
          <p className="text-white">Already have an account? <Link href="/login" className='font-bold underline transition duration-300 ease-in-out'>Log in</Link></p>
        </form>
        
      </div>
      <div className='hidden lg:block ml-auto lg:w-5/6 xl:w-11/12 relative h-full bg-gradient-to-tr from-cyan-800 to-purple-900'>
        <div className='absolute w-full opacity-40 h-full bg-black backdrop-blur-xl'></div>
        <div className='relative text-white top-1/4 left-5'>
          <div className='flex flex-col items-center justify-between gap-10 px-8'>
            <Link id="logo" href="/" className="text-white text-3xl font-bold font-main">
              Civic<span className="text-[#ffca0d]">Track</span>
            </Link>
            <div className="flex flex-col gap-2 items-start px-6 ">
              <blockquote className="text-left text-4xl">&ldquo;The secret of getting ahead is getting started.&rdquo;</blockquote>
              <em className='text-right text-xl'>— Mark Twain</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;