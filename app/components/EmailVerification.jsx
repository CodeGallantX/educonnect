"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const EmailVerification = () => {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1);
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the OTP submission logic here
    console.log(otp.join(''));
  };

  return (
    <div className='lg:grid lg:grid-cols-2 bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="relative flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 lg:py-8">
        <h1 className='text-xl font-bold text-center'>Enter the verification code we sent to your email.</h1>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4'>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='text-white' htmlFor="otp">Verification Code</label>
            <div className="flex space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  className="w-12 h-12 text-center text-xl font-semibold border border-solid p-4 rounded-lg bg-gray-800 border-gray-500 outline-none focus:border-primary transition-all duration-300 ease-in-out text-white"
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
              ))}
            </div>
          </fieldset>

          <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
            Verify
          </button>

          <p className="text-sm text-white">
            Didn&apos;t receive a code yet?
            <Link href="/forgot-password" className="font-semibold">
                Resend
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
