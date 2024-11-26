"use client"
import Link from 'next/link';
// import BackArrow from 'react-icons/fa6';

const EmailVerification = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 bg-gray-800 w-full h-screen overflow-hidden'>
      <div className="relative flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 lg:py-8">
        <h1 className='text-xl font-bold text-center'>Enter the verification code we sent to your email.</h1>

        {/* <Link href="/">
            <BackArrow className="absolute left-0 top-0 text-white font-bold"/>
        </Link> */}

        <form onSubmit={handleSubmit} className='flex flex-col space-y-3 lg:space-y-4'>
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

          <Link href="/login">
            <button className='mt-2 w-full bg-primary text-white py-3 rounded-lg' type="submit">
              Verify
            </button>
          </Link>
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