// AdminNavbar.jsx
// This is the navbar component for the admin dashboard. It displays the profile name and verification status.
const AdminNavbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-lg font-bold">Profile</h2>
      <span className="text-green-600 font-semibold">Verified</span>
    </div>
  );
};

export default AdminNavbar;
