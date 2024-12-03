"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProfilePic from "./ProfilePic";
import NotificationPane from "./NotificationPane"; // Import the NotificationPane component
import { FaRegBell } from "react-icons/fa6";
import { PiHouseBold, PiNotePencilBold, PiGlobeBold } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";

const Header = () => {
  const [isNotificationPaneVisible, setNotificationPaneVisible] = useState(false);

  const toggleNotificationPane = () => {
    setNotificationPaneVisible(!isNotificationPaneVisible);
  };

  return (
    <>
      <header className="flex flex-wrap items-center justify-between space-x-10 py-4 px-4 md:px-6 lg:px-10 xl:px-24 bg-gray-900 relative">
        <div className="flex-shrink-0 w-32 md:w-52">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>
        <nav className="hidden sm:flex space-x-6 ml-auto">
          <Link
            href="/home"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <PiHouseBold className="text-2xl" />
          </Link>
          <Link
            href="/post"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <PiNotePencilBold className="text-2xl" />
          </Link>
          <Link
            href="/community"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <IoGridOutline className="text-2xl" />
          </Link>
        </nav>
        <div className="flex-grow mx-4 md:mx-6 hidden lg:block">
          <input
            type="search"
            id="searchBox"
            className="w-full max-w-lg rounded-md py-2 px-4 text-gray-600 text-white text-sm bg-gray-200 bg-gray-800 border border-gray-300 border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search..."
          />
        </div>
        <div className="flex flex-row-reverse lg:flex-row items-center justify-center space-x-6">
          <ProfilePic />
          <div className="relative">
            <button
              onClick={toggleNotificationPane}
              className="relative focus:outline-none"
            >
              <FaRegBell className="text-gray-400 hover:text-gray-600 hover:text-white text-2xl md:text-2xl" />
              <span className="absolute text-[11px] -top-2 -right-2 rounded-full py-0.5 px-2 bg-red-500 text-white">
                3
              </span>
            </button>
            {isNotificationPaneVisible && (
              <div className="absolute right-0 mt-2 z-50 w-80">
                <NotificationPane />
              </div>
            )}
          </div>
          <Link href="/community">
            <PiGlobeBold className="text-gray-400 hover:text-gray-600 hover:text-white text-2xl md:text-2xl" />
          </Link>
        </div>
        <Link href="/edit-profile" className="outline-none hidden lg:block py-3 px-4 md:px-7 bg-primary text-white text-sm font-medium rounded-full transition outline-none">
            Edit Profile
        </Link>
      </header>
    </>
  );
};

export default Header;