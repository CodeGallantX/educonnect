"use client";
import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [otp, setOtp] = React.useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    const updatedOtp = [...otp];

    if (value) {
      updatedOtp[index] = value.slice(0, 1);
      setOtp(updatedOtp);

      if (index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        prevInput?.focus();
      }
    } else if (e.key === "Backspace") {
      const updatedOtp = [...otp];
      updatedOtp[index] = "";
      setOtp(updatedOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue === "12345") { // Replace with actual verification logic
      navigate('/login');
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResend = () => {
    alert("A new verification code has been sent to your email.");
    // Add resend logic here (e.g., API call to send new OTP)
  };

  return (
    <div className='light:bg-gray-100 dark:bg-gray-800 w-full min-h-screen'>
      <div className="relative flex flex-col px-10 md:px-16 lg:px-10 xl:px-32 py-12 pt-20">
        <h1 className='text-2xl font-bold text-left dark:text-white light:text-gray-800'>
          Enter the verification code we sent to your email.
        </h1>

        <button
          onClick={() => navigate('/register')}
          className="absolute left-9 top-5 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-100 dark:text-white font-bold"
        >
          <FaAngleLeft />
        </button>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 mt-10'>
          <fieldset className="flex flex-col items-start justify-center space-y-3">
            <label className='text-left text-lg dark:text-white light:text-gray-800' htmlFor="otp">
              Verification Code
            </label>
            <div className="flex flex-row items-center space-x-3 sm:space-x-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  className="min-w-12 max-w-16 min-h-12 max-h-16 overflow-hidden text-center text-xl font-semibold border border-solid p-4 rounded-md light:bg-gray-100 dark:bg-gray-800 border-gray-500 outline-none dark:focus:border-gray-200 light:focus:border-primary transition-all duration-300 ease-in-out light:text-gray-400 dark:text-white"
                  type="tel"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  required
                />
              ))}
            </div>
          </fieldset>

          <button className='w-full bg-primary text-white py-3 rounded-lg' type="submit">
            Verify
          </button>

          <p className="text-sm text-center dark:text-gray-200 light:text-gray-600">
            Didn&apos;t receive a code yet?{' '}
            <span onClick={handleResend} className="font-semibold cursor-pointer underline">
              Resend
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
