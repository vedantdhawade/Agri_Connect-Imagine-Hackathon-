import React from "react";

const AdminSidebar = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white text-black flex flex-col">
        <nav className="flex-grow">
          <ul className="space-y-2 p-4">
            <li>
              <a
                href="#dashboard"
                className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#appointments"
                className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                Appointments
              </a>
            </li>
            <li>
              <a
                href="#users"
                className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="#settings"
                className="block py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default AdminSidebar;
