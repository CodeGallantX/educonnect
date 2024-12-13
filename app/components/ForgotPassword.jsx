"use client";
import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    alert(`A reset code has been sent to: ${formData.email}`);
    console.log('Form Data Submitted:', formData);

    navigate('/reset-password');
  };

  return (
    <div className='light:bg-gray-200 dark:bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="relative flex flex-col space-y-0 px-10 md:px-16 lg:px-20 py-10 pt-20">
        <div className="mb-10">
          <h1 className='text-xl font-bold text-left light:text-gray-800 dark:text-white'>
            Enter the email associated with your account and we&apos;ll send you a reset code.
          </h1>
        </div>
        <button onClick={() => (navigate('/login'))}>
          <FaAngleLeft className="absolute left-8 top-6 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-500 dark:text-white font-bold" />
        </button>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
          <fieldset className="flex flex-col items-start justify-center space-y-2">
            <label className='text-lg text-white' htmlFor="email">
              Email Address
            </label>
            <input
              className={`w-full border border-solid p-4 rounded-lg light:text-gray-500 dark:text-white border-gray-500 light:bg-gray-200 dark:bg-gray-800 outline-none ${
                error ? 'light:focus:border-red-500 dark:focus:border-red-500' : 'light:focus:border-gray-700 dark:focus:border-gray-300'
              } transition-all duration-300 ease-in-out`}
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </fieldset>

          <button
            className='mt-4 w-full bg-primary text-white py-3 rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300'
            type="submit"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
