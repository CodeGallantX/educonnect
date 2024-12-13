"use client";
import { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    alert('Password reset successfully!');
    navigate('/login');
  };

  return (
    <div className='lg:grid lg:grid-cols-2 light:bg-gray-200 dark:bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="relative flex flex-col light:text-gray-800 dark:text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 pt-16">
        <h1 className='text-xl font-bold text-left'>Create a new password to help keep your account safe and secure</h1>

        <button onClick={() => navigate('/forgot-password')} className="absolute left-9 top-6 p-2 light:bg-gray-800 dark:bg-gray-700 rounded-full text-4xl light:text-gray-100 dark:text-white font-bold">
          <FaAngleLeft />
        </button>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4 mt-16'>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='light:text-gray-800 dark:text-white' htmlFor="password">Password</label>
            <input
              className="w-full font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-500 dark:text-white"
              type="password"
              name="password"
              id="password"
              placeholder='New password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className='light:text-gray-800 dark:text-white' htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-500 dark:text-white"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='Confirm password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </fieldset>

          {error && <span className="text-red-500 text-sm">{error}</span>}

          <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;