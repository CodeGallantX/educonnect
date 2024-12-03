import React from 'react';
import Link from 'next/link';
import { FaPlusCircle, FaRegBell } from "react-icons/fa";

const HeaderMobile = () => {
  return (
    <>
      <header className="flex flex-row items-center justify-between py-8 px-6">
        <h1 className="font-bold text-3xl text-white">Home</h1>
        <div className="flex flex-row items-center space-x-3">
          <Link href="/add">
            <FaPlusCircle className="text-gray-400 hover:text-gray-600 hover:text-white text-2xl md:text-2xl"/>
          </Link>
            <button className="relative focus:outline-none">
              <FaRegBell className="text-gray-400 hover:text-gray-600 hover:text-white text-2xl md:text-2xl" />
              <span className="absolute text-[11px] -top-2 -right-2 rounded-full py-0.5 px-2 bg-red-500 text-white">
                3
              </span>
            </button>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;