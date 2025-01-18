// AdminDashboardPage.jsx
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

const AdminHome = () => {
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

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h3 className="text-gray-500">Total Appointments</h3>
              <p className="text-3xl font-bold">248</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h3 className="text-gray-500">Pending Requests</h3>
              <p className="text-3xl font-bold">23</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h3 className="text-gray-500">Today's Appointments</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h3 className="text-gray-500">Rejected Requests</h3>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>

          {/* Appointment Requests Table */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Appointment Requests
              </h2>
              <div>
                <select
                  className="border-gray-300 rounded-lg shadow-sm focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                </select>
              </div>
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
                <tr>
                  <td className="p-3">Michael Johnson</td>
                  <td className="p-3">Tomatoes (Greenhouse)</td>
                  <td className="p-3">Oct 12, 2023, 10:30 AM</td>
                  <td className="p-3">
                    <span className="text-yellow-600">Pending</span>
                  </td>
                  <td className="p-3">
                    <button className="text-green-600 mr-2">Accept</button>
                    <button className="text-red-600">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">Sarah Williams</td>
                  <td className="p-3">Wheat (Field Crop)</td>
                  <td className="p-3">Oct 12, 2023, 2:00 PM</td>
                  <td className="p-3">
                    <span className="text-green-600">Accepted</span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-600">View Details</button>
                  </td>
                </tr>
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
