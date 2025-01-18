import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookAppointmentPage from "../pages/BookApointmentPage";
import Aboutus from "../pages/Aboutus";
import Admin from "../layout/Admin";
import AdminHome from "../pages/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
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
        path: "about-us",
        element: <Aboutus />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "dashboard",
        element: <AdminHome />,
      },
    ],
  },
]);

export default router;
