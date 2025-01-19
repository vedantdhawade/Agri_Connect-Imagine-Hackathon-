import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-green-50 to-green-100">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            Welcome to AgriConnect 🌿
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Connecting farmers with technology to enhance crop health, pest control, and sustainable agriculture.
          </p>
          <p className="text-md text-gray-600 mb-6">
            Get expert guidance on your farming needs and book an appointment today!
          </p>
          <motion.button
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-48 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition duration-300"
          >
            <Link to='book-appointment'>  Book Appointment</Link>
          
          </motion.button>
        </div>

        {/* Right Section: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-8 md:mt-0 ml-4 md:block hidden"
        >
          <img
            src="home.png" 
            alt="Crop image"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Key Features Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">🌱 Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Expert Advice", image: "ai.svg", desc: "Get personalized guidance from agricultural experts." },
            { title: "Pest Control", image: "rec.svg", desc: "Protect your crops with proven pest control methods." },
            { title: "Crop Monitoring", image: "read.svg", desc: "Track crop health and optimize yield efficiently." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <img src={feature.image} alt="Feature Icon" className="w-16 h-16 bg-gray-200 p-4 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Crop Diseases Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-8">🦠 Crop Diseases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Downy Mildew", image: "leaf.png", desc: "Affects cucumbers, grapes, and more, causing stunted growth." },
            { title: "Tomato Virus", image: "tomato.png", desc: "Severely damages tomatoes, leading to deformed leaves." },
            { title: "Rice Yellow Drift", image: "rice.png", desc: "Viral disease causing yellow leaves and reduced yield." },
            { title: "Bacterial Blight", image: "leaf2.png", desc: "Affects rice crops, leading to water-soaked lesions." }
          ].map((disease, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={disease.image} alt={disease.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{disease.title}</h3>
              <p className="text-gray-600">{disease.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-8">🎉 Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Thriving Tomato Plants", image: "farm.jpg", desc: "Tomato plants transformed with AgriConnect's support." },
            { title: "Flourishing Rice Crops", image: "cropfarm.jpg", desc: "Rice crops now healthier with increased yield." },
            { title: "Lush Green Crops", image: "greenfarm.jpg", desc: "Farmers achieved lush, healthy crops with our guidance." }
          ].map((story, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="w-full px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">🌍 Impact & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "50,000+ Diagnoses", color: "blue", desc: "Identified key agricultural issues for thousands of farmers." },
              { title: "1,000+ Farmers Engaged", color: "green", desc: "Provided personalized guidance & recommendations." },
              { title: "95% Accuracy", color: "purple", desc: "Achieved high accuracy in diagnosing crop diseases." }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className={`text-2xl font-semibold text-${stat.color}-600 mb-2`}>{stat.title}</h3>
                <p className="text-gray-700">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
