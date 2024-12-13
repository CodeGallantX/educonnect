"use client";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import Link from 'next/link';
import { FaPlusCircle, FaRegBell } from "react-icons/fa";

const HeaderMobile = () => {
  // const location = useLocation();
  // const [currentPage, setCurrentPage] = useState("");

  // useEffect(() => {
  //   switch (location.pathname) {
  //     case "/":
  //     case "/home":
  //       setCurrentPage("Home");
  //       break;
  //     case "/post":
  //       setCurrentPage("Post");
  //       break;
  //     case "/community":
  //       setCurrentPage("Community");
  //       break;
  //     case "/profile":
  //       setCurrentPage("Profile");
  //       break;
  //     case "/notifications":
  //       setCurrentPage("Notifications");
  //       break;
  //     default:
  //       setCurrentPage("Page");
  //   }
  // }, [location]);

  return (
    <header className="flex flex-col py-4 pt-8 px-6 bg-gray-800">
      <div className="flex flex-row items-center justify-between">
        {/* <h1 className="font-bold text-3xl text-white">{currentPage}</h1> */}
        <div className="flex flex-row items-center space-x-3">
          <a href="/add">
            <FaPlusCircle className="text-gray-400 hover:text-gray-600 hover:text-white text-2xl md:text-2xl" />
          </a>
          <a href="/notifications" className="relative focus:outline-none">
            <FaRegBell className="text-gray-400 hover:text-gray-600 hover:text-white text-2xl md:text-2xl" />
            <span className="absolute text-[11px] -top-2 -right-2 rounded-full py-0.5 px-2 bg-red-500 text-white">
              3
            </span>
          </a>
        </div>
      </div>
      <nav className="mt-2 text-gray-300 text-sm">
        <Link href="/home" className="hover:underline">Home</Link> &gt;{" "}
        {/* <span>{currentPage}</span> */}
      </nav>
    </header>
  );
};

export default HeaderMobile;