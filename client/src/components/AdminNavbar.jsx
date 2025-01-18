import React from "react";

const AdminNavbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-black">Admin Logo</h1>
      </div>

      <div>
        <h1 className="text-lg md:text-xl font-medium text-gray-800">
          Dashboard
        </h1>
      </div>
    </nav>
  );
};

export default AdminNavbar;
