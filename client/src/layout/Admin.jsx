import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

const Admin = () => {
  return (
    <div>
      <div>
        <AdminNavbar />
      </div>
      <div className="flex ">
        <div>
          <AdminSidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
