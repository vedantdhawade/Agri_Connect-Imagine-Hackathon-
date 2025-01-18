import { Outlet, Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="py-4 bg-green-50">
      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-10 mx-auto container py-5">
        <Link
          to={"/services/crop-condition"}
          className="p-3 flex items-center justify-center border-green-600 rounded-full border-2 bg-green-400 w-[180px] text-center text-white font-semibold hover:bg-green-500 transition duration-300"
        >
          Crop Condition
        </Link>
        <Link
          to={"/services/scheduler"}
          className="p-3 flex items-center justify-center border-green-600 rounded-full border-2 bg-green-400 w-[180px] text-center text-white font-semibold hover:bg-green-500 transition duration-300"
        >
          Scheduler
        </Link>
        <Link
          to={"/services/consult"}
          className="p-3 flex items-center justify-center border-green-600 rounded-full border-2 bg-green-400 w-[180px] text-center text-white font-semibold hover:bg-green-500 transition duration-300"
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
