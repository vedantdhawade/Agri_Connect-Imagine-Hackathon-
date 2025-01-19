import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookAppointmentPage from "../pages/BookApointmentPage";
import Aboutus from "../pages/Aboutus";
import AdminHome from "../pages/AdminHome";
import Scheduler from "../pages/Scheduler";
import Service from "../layout/Service";
import CropCondition from "../components/CropCondition";
import Consult from "../pages/Consult";
import Index from "../components/Room";
import AdminLogin from "../pages/AdminLogin";
import Adminappoint from "../pages/Adminappoint";

const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "book-appointment",
        element: <BookAppointmentPage />,
      },
      {
        path: "/room/:RoomId",
        element: <Index />,
      },
      {
        path: "about-us",
        element: <Aboutus />,
      },

      {
        path: "/services",
        element: <Service />,
        children: [
          {
            path: "crop-condition",
            element: <CropCondition />,
          },
          {
            path: "scheduler",
            element: <Scheduler />,
          },
          {
            path: "consult",
            element: <Consult />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />, // Login page
  },
  {
    path: "/admin",
    element: <AdminHome />, // Admin home page
  },
  {
    path: "/admin/dashboard",
    element: <AdminHome />, // Admin dashboard page
  },
  {
    path: "/admin/appointment",
    element: <Adminappoint />, // Admin dashboard page
  },
]);

export default router;
