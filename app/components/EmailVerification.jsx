"use client";
import React from 'react';
import Link from 'next/link';
import { FaAngleLeft } from "react-icons/fa6";

const EmailVerification = () => {
  const [otp, setOtp] = React.useState(["", "", "", "", ""]);

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
    <div className='light:bg-gray-100 dark:bg-gray-800 w-full min-h-screen'>
      <div className="relative flex flex-col px-10 md:px-16 lg:px-10 xl:px-32 py-12 lg:py-8">
        <h1 className='text-2xl font-bold text-left dark:text-white light:text-gray-800'>Enter the verification code we sent to your email.</h1>

        <Link href="/">
            <FaAngleLeft className="absolute left-9 top-5 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-500 dark:text-white font-bold"/>
        </Link>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 mt-14'>
          <fieldset className="flex flex-col items-start justify-center space-y-3">
            <label className='text-left text-lg dark:text-white light:text-gray-800' htmlFor="otp">Verification Code</label>
            <div className="flex space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  className="w-14 h-14 overflow-hidden text-center text-xl font-semibold border border-solid p-4 rounded-md light:bg-gray-100 dark:bg-gray-800 border-gray-500 outline-none dark:focus:border-gray-200 light:focus:border-primary transition-all duration-300 ease-in-out light:text-gray-400 dark:text-white"
                  type="tel"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
              ))}
            </div>
          </fieldset>

          <Link href="/login" className="mt-1">
          <button className='w-full bg-primary text-white py-3 rounded-lg' type="submit">
            Verify
          </button>
          </Link>

          <p className="text-sm text-center dark:text-gray-200 light:text-gray-600">
            Didn&apos;t receive a code yet?{' '}
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
