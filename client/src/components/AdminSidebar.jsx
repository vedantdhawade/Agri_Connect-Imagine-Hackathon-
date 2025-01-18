// AdminSidebar.jsx


const AdminSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">LOGO</h2>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <a href="/admin/dashboard" className="text-gray-700">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/appointments" className="text-gray-700">
              Appointments
            </a>
          </li>
          <li className="mb-4">
            <a href="/admin/users" className="text-gray-700">
              Users
            </a>
          </li>
          <li>
            <a href="/admin/settings" className="text-gray-700">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
