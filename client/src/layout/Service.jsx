import React from "react";
import { Outlet, Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="py-4 bg-gray-100">
      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-10 mx-auto container py-5">
        <Link
          to={"/services/crop-condition"}
          className="p-3 flex items-center justify-center border-black rounded-full border-2 bg-gray-400 w-[180px] text-center text-black font-semibold hover:bg-gray-500 transition"
        >
          Crop Condition
        </Link>
        <Link
          to={"/services/scheduler"}
          className="p-3 flex items-center justify-center border-black rounded-full border-2 bg-gray-400 w-[180px] text-center text-black font-semibold hover:bg-gray-500 transition"
        >
          Scheduler
        </Link>
        <Link
          to={"/services/consult"}
          className="p-3 flex items-center justify-center border-black rounded-full border-2 bg-gray-400 w-[180px] text-center text-black font-semibold hover:bg-gray-500 transition"
        >
          Consult
        </Link>
      </div>

      {/* Outlet Section */}
      <div className="py-2 mx-auto max-w-4xl my-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Service;
