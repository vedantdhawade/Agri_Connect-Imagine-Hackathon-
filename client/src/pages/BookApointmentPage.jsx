import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppointStatus from "../components/AppointStatus";
import Cookies from "js-cookie"; // Import js-cookie

const BookAppointmentPage = () => {
  const [formData, setFormData] = useState({
    userId: "", // Initialize userId as an empty string
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get userId from cookies when the component mounts
    const userId = Cookies.get("userId");
    if (userId) {
      setFormData((prevData) => ({
        ...prevData,
        userId: userId, // Set the userId from cookies
      }));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.userId ||
      !formData.phone ||
      !formData.appointmentDate ||
      !formData.appointmentTime
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Prepare data for API
    const payload = {
      userId: formData.userId, // Use userId from form data
      date: new Date(
        `${formData.appointmentDate}T${formData.appointmentTime}`
      ).toISOString(),
      time: formData.appointmentTime,
      description: formData.message,
      phoneNumber: formData.phone,
    };

    setIsLoading(true); // Show loader

    try {
      const response = await fetch(
        "https://hackathon-back.onrender.com/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Your appointment has been successfully booked!");
        // Reset form data
        setFormData({
          userId: "", // Reset userId
          phone: "",
          appointmentDate: "",
          appointmentTime: "",
          message: "",
        });
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to book the appointment.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Date of Appointment */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="appointmentDate">
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Time of Appointment */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="appointmentTime">
              Appointment Time
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Description (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any specific details or requests"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Book Appointment"
              )}
            </button>
          </div>
        </form>
      </div>
      <AppointStatus />
    </>
  );
};

export default BookAppointmentPage;
