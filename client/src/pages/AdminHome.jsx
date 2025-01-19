import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import Cookies from "js-cookie"; // Import the js-cookie library

const AdminHome = () => {
  const [appointments, setAppointments] = useState([]);

  // Get the userId from cookies
  const userId = Cookies.get("userId");

  // Function to fetch appointments
  useEffect(() => {
    fetch("https://hackathon-back.onrender.com/api/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  // Function to handle the action (Accept/Reject)
  const handleAction = (appointmentId, action) => {
    if (!userId) {
      console.error("User ID not found in cookies.");
      return;
    }

    // Find the appointment data from the state
    const appointment = appointments.find((appt) => appt._id === appointmentId);

    if (appointment) {
      // Send the PUT request with all required fields
      fetch(
        `https://hackathon-back.onrender.com/api/appointments/${appointmentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId, // Send userId from cookies in the request body
            status: action,
          }),
        }
      )
        .then((response) => response.json())
        .then((updatedAppointment) => {
          // Update the appointment list with the updated status
          setAppointments((prevAppointments) =>
            prevAppointments.map((appointment) =>
              appointment._id === appointmentId
                ? { ...appointment, status: action }
                : appointment
            )
          );
        })
        .catch((error) => console.error("Error updating appointment:", error));
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-gray-100">
        {/* Navbar */}
        <AdminNavbar />

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

          {/* Appointment Requests Table */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Appointment Requests
              </h2>
            </div>

            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Farmer</th>
                  <th className="p-3 text-left">Crop Type</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="p-3">{appointment.username}</td>
                    <td className="p-3">{appointment.description}</td>
                    <td className="p-3">
                      {new Date(appointment.date).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <span
                        className={`${
                          appointment.status === "pending"
                            ? "text-yellow-600"
                            : appointment.status === "accepted"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="p-3">
                      {appointment.status === "pending" && (
                        <>
                          <button
                            className="text-green-600 mr-2"
                            onClick={() =>
                              handleAction(appointment._id, "confirmed")
                            }
                          >
                            Accept
                          </button>
                          <button
                            className="text-red-600"
                            onClick={() =>
                              handleAction(appointment._id, "rejected")
                            }
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {appointment.status === "accepted" && (
                        <button className="text-blue-600">View Details</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">Showing 1 to 10 of 97 results</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded-lg text-gray-600">
                  1
                </button>
                <button className="px-3 py-1 border rounded-lg text-gray-600">
                  2
                </button>
                <button className="px-3 py-1 border rounded-lg text-gray-600">
                  3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
