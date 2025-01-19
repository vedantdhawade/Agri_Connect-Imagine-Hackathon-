import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    Cookies.remove("token"); // Remove the token from cookies
    navigate("/login"); // Redirect to login page
  };

  // Check if the token exists
  const token = Cookies.get("token");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-green-600 to-green-800 text-white sticky top-0 shadow-lg z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-4"
        >
          <span className="text-2xl font-bold tracking-wide">
            AgriConnect 🌿
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About Us", "Services", "Help"].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-medium hover:text-green-300 transition duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full transition duration-300"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white hover:text-green-300"
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
          </motion.button>

          {/* Notification Icon */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="relative p-2 rounded-full transition duration-300"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white hover:text-green-300"
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
          </motion.button>

          {/* Login/Logout Button */}
          {
            token ? (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  onClick={handleLogout}
                  className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition duration-300"
                >
                  Logout
                </Link>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/login"
                  className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition duration-300"
                >
                  Login
                </Link>
              </motion.div>
            )
          }
          
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
