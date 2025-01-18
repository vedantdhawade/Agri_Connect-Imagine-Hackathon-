import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookAppointmentPage from "../pages/BookApointmentPage";
import Aboutus from "../pages/Aboutus";
import AdminHome from "../pages/AdminHome";
import Sheduler from "../pages/Sheduler";
import CropDetailsPage from "../components/CropDetailsPage";

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
      {
        path:"sheduler",
        element:<Sheduler/>
      },
      {
        path: "crop-details",
        element: <CropDetailsPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
    children: [
      {
        path: "dashboard",
        element: <AdminHome />,
      },
     
    ],
  },
]);

export default router;
