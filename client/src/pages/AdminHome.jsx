import React from "react";
import { MdEventNote } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const AdminHome = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <div className="text-blue-600 bg-blue-100 p-3 rounded-full mr-4">
            <MdEventNote className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Assignment</p>
            <h6 className="text-2xl font-bold text-gray-800">248</h6>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <div className="text-green-600 bg-green-100 p-3 rounded-full mr-4">
            <FaRegClock className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Pending Tasks</p>
            <h6 className="text-2xl font-bold text-gray-800">120</h6>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <div className="text-red-600 bg-red-100 p-3 rounded-full mr-4">
            <FaRegClock className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Completed Tasks</p>
            <h6 className="text-2xl font-bold text-gray-800">80</h6>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <div className="text-yellow-600 bg-yellow-100 p-3 rounded-full mr-4">
            <FaRegClock className="text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Overdue Tasks</p>
            <h6 className="text-2xl font-bold text-gray-800">20</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
