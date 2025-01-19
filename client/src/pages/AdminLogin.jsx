import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for navigation after login
import Cookies from "js-cookie"; // Assuming you use js-cookie for token handling
import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications

const AdminLogin = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", formdata.email);
    console.log("Password:", formdata.password);

    setLoading(true); // Show loader when API is hit
    try {
      const response = await fetch(
        "https://hackathon-back.onrender.com/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formdata.email,
            password: formdata.password,
          }),
        }
      );

      const data = await response.json();
      console.log("Received Data:", data); // Log the received response

      navigate("/admin")
      if (response.ok) {
        if (data.user && data.user.role !== "admin") {
          toast.error("Only admin can log in");
          return;
        }

        // Set token and user ID in cookies
        Cookies.set("tokken", data.token, { expires: 7 });
        Cookies.set("userId", data.user.id, { expires: 7 });
        console.log("Token and User ID Set:", data.token, data.user.id); // Verify if cookies are set

        // Show success toast
        toast.success("Login successful!");

        // Navigate to /admin after successful login
        navigate("/admin");
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Hide loader after API call completes
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="login.jpg" // Replace with your image URL
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-r p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Login to your account and start exploring.
          </p>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formdata.email}
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    email: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formdata.password}
                onChange={(e) =>
                  setformdata({
                    ...formdata,
                    password: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-600 transition-all duration-300"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-indigo-500 hover:underline">
                Sign Up
              </Link>
            </p>
            <p className="text-gray-600 mt-2">
              Forgot your password?{" "}
              <a
                href="/reset-password"
                className="text-indigo-500 hover:underline"
              >
                Reset it here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
