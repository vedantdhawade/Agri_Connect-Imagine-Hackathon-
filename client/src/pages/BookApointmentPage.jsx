import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  return (
    <div className="p-8 bg-gradient-to-r from-green-50 to-green-100">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">
          Book Your Appointment 🌱
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Fill out the form below to book an appointment and get expert guidance for your farm.
        </p>
      </motion.div>

      {/* Appointment Form Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-xl font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-xl font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Date Field */}
          <div className="mb-6">
            <label htmlFor="date" className="block text-xl font-semibold text-gray-700 mb-2">
              Preferred Appointment Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition duration-300 transform"
          >
            Book Appointment
          </motion.button>
        </form>
      </motion.div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link to="/" className="text-green-600 hover:text-green-700 text-lg font-semibold">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;
