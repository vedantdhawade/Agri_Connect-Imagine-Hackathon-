import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify styles
import Cookies from "js-cookie"; // Import js-cookie

// Create UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User will store the logged-in user data
  const [error, setError] = useState(null); // To store any error messages
  const navigate = useNavigate(); // Ensure `useNavigate` is inside the component

  // Signup API call
  const signup = async (username, email, password) => {
    try {
      const response = await fetch("https://hackathon-back.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store user info in state upon successful signup
        setUser({ username, email });
        toast.success("Signup successful!"); // Show success toast
      } else {
        setError(data.message || "Signup failed");
        toast.error(data.message || "Signup failed"); // Show error toast
      }
    } catch (error) {
      setError("Network error, please try again");
      toast.error("Network error, please try again"); // Show network error toast
    }
  };

  // Signin API call
  const signin = async (email, password) => {
    try {
      const response = await fetch("https://hackathon-back.onrender.com/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store user info and any relevant tokens in state upon successful signin
        setUser({ email });
        
        // Set token and user ID in cookies
        Cookies.set("token", data.token, { expires: 7 }); // Set token with 7-day expiry
        Cookies.set("userId", data.user.id, { expires: 7 }); // Set user ID with 7-day expiry
        
        toast.success("Login successful!"); // Show success toast
        navigate("/home"); // Navigate after successful sign-in
      } else {
        setError(data.message || "Signin failed");
        toast.error(data.message || "Signin failed"); // Show error toast
      }
    } catch (error) {
      setError("Network error, please try again");
      toast.error("Network error, please try again"); // Show network error toast
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setError(null); // Clear any previous errors
    Cookies.remove("token"); // Remove the token from cookies
    Cookies.remove("userId"); // Remove the user ID from cookies
    toast.info("Logged out successfully!"); // Show logout info toast
  };

  return (
    <UserContext.Provider value={{ user, signup, signin, logout, error }}>
      {children}
    </UserContext.Provider>
  );
};
