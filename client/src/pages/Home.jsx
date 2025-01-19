import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 bg-gray-50">
      {/* Hero Section: Header, Image, and Description */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Left Section: Header and Description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to AgriConnect
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            AgriConnect connects farmers and agricultural enthusiasts with the
            resources they need to thrive.
          </p>
          <p className="text-md text-gray-500 mb-6">
            Book an appointment with our experts to get tailored advice on crop
            care, pest management, and more.
          </p>
          <Link to="/book-appointment">
            <button className="w-48 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-4 md:block hidden">
          <img
            src="home.png" // Replace with an actual image URL
            alt="Crop image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-500 text-4xl mb-4 flex items-center justify-center">
              <img
                src="ai.svg"
                alt="read"
                className=" p-4 bg-gray-300 rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Expert Advice
            </h3>
            <p className="text-gray-500">
              Get personalized advice from agricultural experts for healthy crop
              management.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-500 text-4xl mb-4 flex items-center justify-center">
              <img
                src="rec.svg"
                alt="read"
                className=" p-4 bg-gray-300 rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Pest Control
            </h3>
            <p className="text-gray-500">
              Our experts help you protect your crops from harmful pests using
              safe, effective methods.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-500 text-4xl mb-4 flex items-center justify-center">
              <img
                src="read.svg"
                alt="read"
                className=" p-4 bg-gray-300 rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Crop Monitoring
            </h3>
            <p className="text-gray-500">
              Track the health and growth of your crops with our detailed
              monitoring services.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Crop Diseases Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Types of Crop Diseases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Disease 1: Downy Mildew */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="leaf.png" // Replace with Downy Mildew Image
              alt="Downy Mildew"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Downy Mildew
            </h3>
            <p className="text-gray-500">
              Downy Mildew is a fungal disease that affects a variety of crops
              like cucumbers and grapes, causing yellowing and stunted growth.
            </p>
          </div>

          {/* Disease 2: Tomato Virus */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="tomato.png" // Replace with Tomato Virus Image
              alt="Tomato Virus"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tomato Virus
            </h3>
            <p className="text-gray-500">
              Tomato Virus causes severe damage to tomato crops, resulting in
              malformed leaves and poor fruit development.
            </p>
          </div>

          {/* Disease 3: Rice Yellow Drift */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="rice.png" // Replace with Rice Yellow Drift Image
              alt="Rice Yellow Drift"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Rice Yellow Drift
            </h3>
            <p className="text-gray-500">
              Rice Yellow Drift is a viral disease that causes yellowing of the
              rice leaves and stunted growth, affecting overall yield.
            </p>
          </div>

          {/* Disease 4: Bacterial Blight */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="leaf2.png" // Replace with Bacterial Blight Image
              alt="Bacterial Blight"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Bacterial Blight
            </h3>
            <p className="text-gray-500">
              Bacterial Blight affects rice crops, causing water-soaked lesions
              on leaves and ultimately leading to a loss of yield.
            </p>
          </div>
        </div>
      </div>

      {/* Success stories */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Success Story 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="farm.jpg" // Replace with actual healthy leaf image
              alt="Healthy Leaf 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Thriving Tomato Plants
            </h3>
            <p className="text-gray-500">
              After using AgriConnect's services, the tomato plants in this farm
              showed remarkable growth and health, free from pests and diseases.
            </p>
          </div>

          {/* Success Story 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="cropfarm.jpg" // Replace with actual healthy leaf image
              alt="Healthy Leaf 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Flourishing Rice Crops
            </h3>
            <p className="text-gray-500">
              By following expert advice, this farm's rice crops are now
              thriving, showing vibrant green leaves and increased yield.
            </p>
          </div>

          {/* Success Story 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src="greenfarm.jpg" // Replace with actual healthy leaf image
              alt="Healthy Leaf 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Lush Green Crops
            </h3>
            <p className="text-gray-500">
              This farm was able to transform its crops into lush, healthy
              plants, thanks to AgriConnect's guidance on soil health and pest
              control.
            </p>
          </div>
        </div>
      </div>

      {/* last section */}

      <div className="w-full px-4 py-8  ">
        <div className="bg-white shadow-md rounded-lg p-6  ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Impact and Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                50,000+ Diagnoses
              </h3>
              <p className="text-gray-700">
                Over 50,000 cases were analyzed, identifying key agricultural
                issues affecting crop yields and plant health.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                1,000+ Farmers Engaged
              </h3>
              <p className="text-gray-700">
                We actively engaged with more than 1,000 farmers, providing
                personalized advice, solutions, and recommendations for
                improving their farming practices.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                95% Accuracy in Diagnostics
              </h3>
              <p className="text-gray-700">
                Our diagnostic tool achieved a remarkable accuracy rate of 95%,
                ensuring that farmers receive reliable and actionable insights
                to address crop diseases and pest issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
