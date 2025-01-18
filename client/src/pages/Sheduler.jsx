import  { useState } from "react";

const FarmerScheduleForm = () => {
  const [formData, setFormData] = useState({
    farmerId: "F-2024-001",
    taskTitle: "",
    description: "",
    scheduleTime: "",
    isCompleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Farmer Schedule Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Farmer ID */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Farmer ID
            </label>
            <div className="relative">
              <input
                type="text"
                name="farmerId"
                value={formData.farmerId}
                disabled
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Task Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Task Title
            </label>
            <div className="relative">
              <input
                type="text"
                name="taskTitle"
                value={formData.taskTitle}
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="4"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            ></textarea>
          </div>

          {/* Schedule Time */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Schedule Time
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                name="scheduleTime"
                value={formData.scheduleTime}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
              />
            </div>
          </div>

          {/* Mark as Completed */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="isCompleted"
              checked={formData.isCompleted}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <label className="ml-2 text-gray-700">Mark as Completed</label>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800"
            >
              Save Schedule
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmerScheduleForm;
