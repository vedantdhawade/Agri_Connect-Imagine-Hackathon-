import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const AppointStatus = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Retrieve userId from cookies
        const userId = Cookies.get('userId');
        if (!userId) {
          setError('User ID not found in cookies');
          setLoading(false);
          return;
        }

        // Fetch appointment data
        const response = await axios.get(`https://hackathon-back.onrender.com/api/appointments/${userId}`);
        setAppointments(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleRoomIdChange = (e, id) => {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment._id === id) {
        return { ...appointment, roomId: e.target.value };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  const handleJoinRoom = (roomId) => {
    if (roomId) {
      navigate(`/room/${roomId}`); // Navigate to the specific room's route
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Appointment Status</h2>
      {appointments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Appointment Details</h3>
              <p className="text-sm text-gray-600">
                <strong>Appointment ID:</strong> {appointment._id}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {appointment.time}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Description:</strong> {appointment.description}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phone Number:</strong> {appointment.phoneNumber}
              </p>

              {/* Status Section */}
              <p className="text-sm text-gray-600">
                <strong>Status:</strong> 
                <span className={`font-semibold ${appointment.status === 'confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {appointment.status}
                </span>
              </p>

              {/* Room ID Input */}
              <div className="mt-4 flex flex-row">
                <input
                  type="text"
                  value={appointment.roomId || ''}
                  onChange={(e) => handleRoomIdChange(e, appointment._id)}
                  className="mt-1 p-2 w-3/4 border border-gray-300 rounded-md"
                  placeholder="Enter Room ID"
                />
                <button 
                  onClick={() => handleJoinRoom(appointment.roomId)} 
                  disabled={appointment.status === 'pending'} // Disable if status is 'pending'
                  className={`bg-blue-600 text-white rounded-lg ml-2 ${appointment.status === 'pending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {appointment.status === 'pending' ? 'Pending' : 'Join Room'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No appointments found.</p>
      )}
    </div>
  );
};

export default AppointStatus;
