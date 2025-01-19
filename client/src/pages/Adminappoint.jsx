import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Adminappoint = () => {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from the API
  useEffect(() => {
    fetch("https://hackathon-back.onrender.com/api/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);
  const handleJoinRoom = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="bg-white p-4 rounded-lg shadow-md border"
        >
          <h3 className="font-bold text-lg mb-2">{appointment.username}</h3>
          <p className="text-gray-600 mb-2">{appointment.description}</p>
          <p className="text-gray-600 mb-2">
            <strong>Time:</strong> {new Date(appointment.date).toLocaleString()}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> {appointment.phoneNumber}
          </p>

          {appointment.status === "confirmed" ? (
            <div>
              <input
                type="text"
                placeholder="Enter Room"
                className="border p-2 rounded mb-4 w-full"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded w-full" onClick={()=>{handleJoinRoom(appointment.roomId)}}>
                Join
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded w-full cursor-not-allowed"
              disabled
            >
              Join (Pending)
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Adminappoint;
