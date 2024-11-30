"use client";

import Link from 'next/link';
import { FaRegBell } from "react-icons/fa6";
import { PiHouseBold, PiNotePencilBold, PiGlobeBold } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className="flex flex-wrap items-center justify-between space-x-10 py-4 px-4 md:px-6 lg:px-16 xl:px-24 bg-white bg-gray-900">
            <div className="flex-shrink-0 w-32 md:w-52">
                <img src="/logo.png" alt="Logo" className="w-full h-auto object-contain" />
            </div>
            <nav className="hidden sm:flex space-x-5 ml-auto">
                <Link href="/home" className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                    <PiHouseBold className="text-2xl" />
                </Link>
                <Link href="/post" className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                    <PiNotePencilBold className="text-2xl" />
                </Link>
                <Link href="/community" className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                    <IoGridOutline className="text-2xl" />
                </Link>
            </nav>
            <div className="flex-grow mx-4 md:mx-6">
                <input
                    type="search"
                    id="searchBox"
                    className="w-full max-w-lg rounded-md py-2 px-4 text-gray-600 dark:text-white text-sm bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Search..."
                />
            </div>
            <div className="flex items-center space-x-4">
                <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
                <Link href="#" className='relative w-full'>
                    <FaRegBell className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl md:text-2xl" />
                    <span className="absolute text-[11px] -top-2 -right-2 rounded-full py-0.5 px-2 bg-red-500 text-white">3</span>
                </Link>
                <Link href="/community">
                    <PiGlobeBold className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl md:text-2xl" />
                </Link>
            </div>
            <Link href="/edit-profile">
                <button className="hidden sm:block py-3 px-4 md:px-7 bg-primary text-white text-sm font-medium rounded-full transition">
                    Edit Profile
                </button>
            </Link>
        </header>
    );
};

export default Header;
