import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" shadow-md ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <span className="text-black text-2xl font-bold tracking-wide">
            AgriConnect
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to={"/home"}
            className="text-black text-lg hover:text-gray-900 transition duration-300"
          >
            Home
          </Link>
          <Link
            to={"/home"}
            className="text-black text-lg hover:text-gray-900 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to={"/home"}
            className="text-black text-lg hover:text-gray-900 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to={"/home"}
            className="text-black text-lg hover:text-gray-900 transition duration-300"
          >
            Help
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            className="text-black hover:text-gray-200 hover:bg-black hover:rounded-full p-2 transition duration-300"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Notification Icon */}
          <button
            className="relative text-black hover:text-gray-200 hover:bg-black hover:rounded-full p-2 transition duration-300"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Login Button */}
          <Link
            to={"/login"}
            className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-100 hover:text-black transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
