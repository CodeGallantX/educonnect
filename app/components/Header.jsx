"use client"
// import Image from 'next/image';
import Link from 'next/link';
import { FaRegBell } from "react-icons/fa6";
import { PiHouseBold, PiNotePencilBold, PiGlobeBold } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";


const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between py-6 px-10 lg:px-16 xl:px-24">
            <div>
                <img src="/logo.png" alt="logo" className="w-52 h-auto" />
            </div>
            <div className="flex flex-row space-x-6">
                <Link href="/home">
                    <PiHouseBold className="text-gray-400 text-2xl" />
                </Link>
                <Link href="/post">
                    <PiNotePencilBold className="text-gray-400 text-2xl" />
                </Link>
                <Link href="/community">
                    <IoGridOutline className="text-gray-400 text-2xl" />
                </Link>
            </div>
            <div className="w-full">
                <input type="text" name="search" id="searchBox"
                    className="rounded-md py-2 px-4 w-full light:text-gray-500 dark:text-white text-sm light:bg-gray-200 dark:bg-gray-800 outline-none border border-solid border-gray-500 light:focus:border-gray-600 dark:focus:border-gray-300"
                    placeholder='Search...' />
            </div>
            <div className="flex flex-row space-x-3 items-center justify-center">
            <div>
                <img src="profile.png" alt="profile" className="w-32 h-auto rounded-full" />
            </div>
            <a href="#">
                <FaRegBell className="text-gray-400 text-2xl" />
            </a>
            <Link href="/community">
                <PiGlobeBold className="text-gray-400 text-2xl" />
            </Link>
            <Link href="/community">
                <button className="rounded-full py-3 px-8 text-white bg-primary">
                    Edit Profile
                </button>
            </Link>
            </div>
        </header>
    )
}

export default Header;